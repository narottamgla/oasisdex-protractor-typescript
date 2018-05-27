# "Oasisdex" with Chrome extension "MetaMask"
This project is an example of how to Use Chrome extension MetaMask with Protractor

## Project Description:
* Project setup with Protractor version 5.1.2.
* Makes use of Page Objects.
* Written in Typescript, compiled to ES5 Javascript.
* Page Object classes are in the `./pages` directory and should inherit from `basePage.po`.
* Specs scripts are in the `./specs` directory, grouped into directory by page or functionality.
* Mock data (eg usernames and pws) are in `./data` directory.
* Utility functions are in `./utils` directory. 
* If changing file names or deleting files, delete the `tmp` directory, which contains previously compiled Typescript files. It only updates existing files/adds new ones and doesn't delete ones that don't exist in Typescript anymore. 

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* Follow setup steps described [here](http://www.protractortest.org/#/tutorial#setup)
* `npm install` to install the project dependencies
* In a separate command line window, run `webdriver-manager start` and keep it running.

## Run tests:
* `npm run test` Run tests using Chrome browser.
