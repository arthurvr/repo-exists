'use strict';
var test = require('ava');
var repoExists = require('./');

test(function (t) {
	t.plan(4);

	repoExists('arthurvr/something-that-does-not-exist', function (error, exists) {
		t.assert(!error, error);
		t.assert(!exists);
	});

	repoExists('h5bp/html5-boilerplate', function (error, exists) {
		t.assert(!error, error);
		t.assert(exists);
	});
});
