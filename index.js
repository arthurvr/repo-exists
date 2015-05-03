'use strict';
var got = require('got');

module.exports = function (repo, cb) {
	got.head('https://github.com/' + repo, function (err, data, res) {
		if (err && err.code === 404) {
			cb(null, false);
			return;
		}

		if (err) {
			cb(err);
			return;
		}

		cb(null, true);
	});
};
