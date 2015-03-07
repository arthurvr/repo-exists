'use strict';

var test = require('ava');
var repoExists = require('../');

test(function (t) {
	t.plan(2);

	repoExists('arthurvr/something-that-does-not-exist', function (error, res) {
		if (error) {
			throw error;
		}

		t.assert(!res);
	});

	repoExists('h5bp/html5-boilerplate', function (error, res) {
		if (error) {
			throw error;
		}

		t.assert(res);
	});
});
