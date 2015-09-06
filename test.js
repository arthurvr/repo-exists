'use strict';
var test = require('ava');
var repoExists = require('./');

test(function (t) {
	t.plan(4);

	repoExists('arthurvr/something-that-does-not-exist', function (error, exists) {
		t.error(error);
		t.false(exists);
	});

	repoExists('h5bp/html5-boilerplate', function (error, exists) {
		t.error(error);
		t.true(exists);
	});
});
