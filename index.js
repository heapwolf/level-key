module.exports = function(db) {

  if (!db || db.locaton) {
    throw new Error('A database is required');
  }

  db.methods = db.methods || {};
  db.methods.key = { type: 'sync' };
  db.key = function() {

    var args = arguments[0];
    if (!Array.isArray(arguments[0])) {
      args = [].slice.call(arguments);
    }

    if (args.length < 1) {
      throw new Error('Not enough arguments');
    }
   
    if (args.length == 1) return '!' + arguments[0];
    
    var key = args.pop();
    return '!' + args.join('#') + '!' + key;
  }; 

  return db;
};

