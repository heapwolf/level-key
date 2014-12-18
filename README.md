# SYNOPSIS
The easiest way to work with sublevels through multilevel.

# MOTIVATION
- Multilevel doesn't allow you to create sublevels.
- In order to use `db.sublevel('foo')`, multilevel 
  maintains a list of sublevels that needs to be
  up to date in the `manifest.json`.

# USAGE
```js
var multilevel = require('multilevel');
var net = require('net');

var db = multilevel.client();
var con = net.connect(3000);
con.pipe(db.createRpcStream()).pipe(con);

var k = db.key('reports', 'yearly', 'today');
var val = {};

client.put(k, val, function(err) {
 /* ... */
});

client
  .createReadStream({ gte: k, lte: k + '~' })
  .on('data', function(d) {
    /* ... */
  });
```

