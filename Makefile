### 2022
### CRCL GmbH

.PHONY: test, build, install, clean

##
#  use bash as shell
#
SHELL:=/bin/bash

###
# Current Year
#
YEAR:=$(shell date "+%Y")

##
#  root directory (Makefile location)
#
WORKING_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

build: install
	npm run build

dist: build
	@echo "dist"

develop:
	@echo "starting components presentation view."
	npm start

test: 
	npm run lint
	npm run check
	npm run test

install: 
	npm install

clean:
	rm -rf $(WORKING_DIR)/dist
	rm -rf $(WORKING_DIR)/build
	rm -rf $(WORKING_DIR)/node_modules

rebuild: clean install build
	@echo "Rebuild completed."

publish:
	npm run pub

update:
	npm list npm-check-updates -g || npm i npm-check-updates -g
	ncu -u -t minor
	@+make -s install