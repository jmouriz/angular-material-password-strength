PACKAGE := $(shell grep name ../package.json | head -1 | cut -d: -f2 | tr -d '" ,')
BUILD := ../build
SOURCE := $(PACKAGE)
TARGET := $(BUILD)/$(PACKAGE).min

all: $(TARGET).js

$(TARGET).js: $(SOURCE).js
	@../node_modules/.bin/minify $< > $@
