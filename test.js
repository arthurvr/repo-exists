import test from 'ava';
import repoExists from './';

test(t => {
	t.plan(4);

	repoExists('arthurvr/something-that-does-not-exist', (error, exists) => {
		t.error(error);
		t.false(exists);
	});

	repoExists('h5bp/html5-boilerplate', (error, exists) => {
		t.error(error);
		t.true(exists);
	});
});
