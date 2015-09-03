# repo-exists

> Check if a GitHub repo exists

*See [repo-exists-cli](https://github.com/arthurvr/repo-exists-cli) for the CLI version.*


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


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
