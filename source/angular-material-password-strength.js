(function(window, angular, undefined) {
   'use strict';

   var module = angular.module('ngMdPasswordStrength', []); // ['zxcvbn']

   module.provider('password', [function() {
    var $this = this;

    $this.messages = {};

    $this.$get = function() {
       return {
          messages: $this.messages
       };
    };
   }]);

   module.directive('mdPasswordStrength', ['$parse', 'password', function($parse, password) { // '$parse', 'zxcvbn', function($parse, zxcvbn) 
      return {
         require: '?ngModel',
         restrict: 'A',
         link: function(scope, element, attributes, controller) {
            var strength;
            var getter = $parse(attributes.mdPasswordStrength);
            scope.$watch(attributes, function() {
               controller.$$parseAndValidate();
            });
            scope.$watch(strength, function() {
               return controller.$$parseAndValidate();
            });
            controller.$validators.mdPasswordStrength = function() {
               var mdPasswordStrength = strength();
               if (controller.$viewValue != null) {
                  var passwordStrength = zxcvbn(controller.$viewValue, {
                     feedback_messages: password.messages
                  });
                  scope.zxcvbn = passwordStrength;
                  return passwordStrength.score >= mdPasswordStrength;
               }
            };
            return strength = function() {
               var mdPasswordStrength = getter(scope);
               if (angular.isObject(mdPasswordStrength && mdPasswordStrength.hasOwnProperty('$viewValue'))) {
                  mdPasswordStrength = mdPasswordStrength.$viewValue;
               }
             return mdPasswordStrength;
            };
         }
      };
   }]);
}).call(this, window, window.angular, undefined);
