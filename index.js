'use strict';
var ghGot = require('gh-got');

module.exports = function (repo, cb) {
	ghGot('repos/' + repo, function (err, data) {
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
