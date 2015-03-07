'use strict';

var got = require('got');

module.exports = function (repo, cb) {
	got.head('https://github.com/' + repo, function (err, data, res) {
		if (err && err.code === 404) {
			return cb(null, false);
		}

		if (err) {
			return cb(err);
		}

		cb(null, true);
	});
};
