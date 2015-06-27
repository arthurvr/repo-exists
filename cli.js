#!/usr/bin/env node
'use strict';
var meow = require('meow');
var logSymbols = require('log-symbols');
var repoExists = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ repo-exists h5bp/html5please',
		'  ' + logSymbols.success +' Exists!'
	]
});

if (cli.input.length === 0) {
	console.error([
		'Please provide a repo name',
		'',
		'Example',
		'  $ repo-exists h5bp/html5-boilerplate',
		'  ' + logSymbols.success +' Exists!'
	].join('\n'));

	return;
}

repoExists(cli.input[0], function (err, exists) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	if (exists) {
		console.log(logSymbols.success, 'Exists!');
		return;
	}

	console.log(logSymbols.error, 'Doesn\'t exist!');
});
