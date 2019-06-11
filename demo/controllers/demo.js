var demo = angular.module('Demo', ['ngSanitize', 'ngMaterial', 'ngMessages', 'ngMdPasswordStrength']);

demo.config(['passwordProvider', function(passwordProvider) {
   passwordProvider.messages = {
      //use_a_few_words: 'Usa algunas palabras, evita frases comunes',
      //no_need_for_mixed_chars: 'No hay necesidad de símbolos, dígitos o letras mayúsculas',
      //uncommon_words_are_better: 'Añade una o dos palabras, las palabras poco comunes son mejores',
      //straight_rows_of_keys_are_easy: 'Las filas rectas de teclas son fáciles de adivinar',
      //short_keyboard_patterns_are_easy: 'Los patrones de teclado cortos son fáciles de adivinar',
      //use_longer_keyboard_patterns: 'Usa un patrón de teclado más largo con más giros',
      //repeated_chars_are_easy: 'Las repeticiones como "aaa" son fáciles de adivinar',
      //repeated_patterns_are_easy: 'Las repeticiones como "abcabcabc" son sólo un poco más difíciles de adivinar que "abc"',
      //avoid_repeated_chars: 'Evita palabras y caracteres repetidos',
      //sequences_are_easy: 'Las secuencias como "abc" o "6543" son fáciles de adivinar',
      //avoid_sequences: 'Evita secuencias',
      //recent_years_are_easy: 'Los últimos años son fáciles de adivinar',
      //avoid_recent_years: 'Evita los últimos años',
      //avoid_associated_years: 'Evita usar años que estén asociados contigo',
      //dates_are_easy: 'Las fechas son frecuentemente fáciles de adivinar',
      //avoid_associated_dates_and_years: 'Evita usar fechas y años que estén asociados contigo',
      //top10_common_password: 'Esta es una contraseña de las 10 más comunes del ranking',
      //top100_common_password: 'Esta es una contraseña de las 100 más comunes del ranking',
      //very_common_password: 'Esta es una contraseña muy común',
      //similar_to_common_password: 'Esta es una contraseña similar a las de uso común',
      //a_word_is_easy: 'Una palabra por sí misma es fácil de adivinar',
      //names_are_easy: 'Los nombres y apellidos por sí mismos son fáciles de adivinar',
      //common_names_are_easy: 'Los nombres y apellidos comunes son fáciles de adivinar',
      //capitalization_doesnt_help: 'La capitalización no ayuda mucho',
      //all_uppercase_doesnt_help: 'Todo en mayúsculas es casi tan fácil de adivinar como en minúsculas',
      //reverse_doesnt_help: 'Las palabras invertidas no son mucho más difíciles de adivinar',
      //substitution_doesnt_help: 'Las sustituciones predecibles como "@" en lugar de "a" no ayudan mucho',
      //user_dictionary: 'Esta contraseña está en la lista negra'
      use_a_few_words: 'Use a few words, avoid common phrases',
      no_need_for_mixed_chars: 'No need for symbols, digits, or uppercase letters',
      uncommon_words_are_better: 'Add another word or two, uncommon words are better',
      straight_rows_of_keys_are_easy: 'Straight rows of keys are easy to guess',
      short_keyboard_patterns_are_easy: 'Short keyboard patterns are easy to guess',
      use_longer_keyboard_patterns: 'Use a longer keyboard pattern with more turns',
      repeated_chars_are_easy: 'Repeats like "aaa" are easy to guess',
      repeated_patterns_are_easy: 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"',
      avoid_repeated_chars: 'Avoid repeated words and characters',
      sequences_are_easy: 'Sequences like abc or 6543 are easy to guess',
      avoid_sequences: 'Avoid sequences',
      recent_years_are_easy: 'Recent years are easy to guess',
      avoid_recent_years: 'Avoid recent years',
      avoid_associated_years: 'Avoid years that are associated with you',
      dates_are_easy: 'Dates are often easy to guess',
      avoid_associated_dates_and_years: 'Avoid dates and years that are associated with you',
      top10_common_password: 'This is a top-10 common password',
      top100_common_password: 'This is a top-100 common password',
      very_common_password: 'This is a very common password',
      similar_to_common_password: 'This is similar to a commonly used password',
      a_word_is_easy: 'A word by itself is easy to guess',
      names_are_easy: 'Names and surnames by themselves are easy to guess',
      common_names_are_easy: 'Common names and surnames are easy to guess',
      capitalization_doesnt_help: 'Capitalization doesn\'t help very much',
      all_uppercase_doesnt_help: 'All-uppercase is almost as easy to guess as all-lowercase',
      reverse_doesnt_help: 'Reversed words aren\'t much harder to guess',
      substitution_doesnt_help: 'Predictable substitutions like \'@\' instead of \'a\' don\'t help very much',
      user_dictionary: 'This password is on the blacklist'
   };
}]);

demo.controller('Demo', ['$scope', '$filter', '$mdDialog', function($scope, $filter, $mdDialog) {
   $scope.password = '';
   $scope.score = 3;

   $scope.info = function(value, event) {
      var strength = zxcvbn(value);
      $mdDialog.show($mdDialog
         .alert()
         .title('Information about password')
         .htmlContent('<pre>' + $filter('json')(strength) + '</pre>')
         .targetEvent(event)
         .ok('Close')
      );
   };
}]);
