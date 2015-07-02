# repo-exists [![Build Status](https://travis-ci.org/arthurvr/repo-exists.svg?branch=master)](https://travis-ci.org/arthurvr/repo-exists)

> Check if a GitHub repo exists

## Usage

```
$ npm install --save repo-exists
```

```javascript
var repoExists = require('repo-exists');

repoExists('h5bp/html5please', function (error, exists) {
	if (error) {
		throw error;
	}

	console.log(exists);
	//=> true
});
```

## CLI

```
$ npm install --global repo-exists
```

![](http://i.imgur.com/06B0lsE.png)

## License

MIT © [Arthur Verschaeve](https://github.com/arthurvr)
