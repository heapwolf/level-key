var assert = require('assert');
var key = require('./index.js');

var db = key({});

assert.equal(db.key('reports', 'yearly', 'revenue'), '!reports#yearly!revenue');
assert.equal(db.key(['reports', 'yearly', 'revenue']), '!reports#yearly!revenue');
assert.equal(db.key('hats', 'fedora'), '!hats!fedora');

assert.equal(db.key('hats', 'fedora'), '!hats!fedora');
assert.equal(db.key(['hat']), '!hat!');
assert.equal(db.key('hat'), '!hat!');

