var assert = require('assert');
var key = require('./index.js');

assert.equal(key('reports', 'yearly', 'revenue'), '!reports#yearly!revenue');
assert.equal(key(['reports', 'yearly', 'revenue']), '!reports#yearly!revenue');
assert.equal(key('hats', 'fedora'), '!hats!fedora');

assert.equal(key('hats', 'fedora'), '!hats!fedora');
assert.equal(key(['hat']), '!hat!');
assert.equal(key('hat'), '!hat!');

