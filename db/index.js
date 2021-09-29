module.exports.bookSchema = require('./BookModell');
module.exports.bookAuthors = require('./authorsModel');
module.exports.dbConnect = require('./dbConect');

const bookAuthors = require('./authorsModel');
const bookSchema = require('./BookModell');


bookSchema.hasMany(bookAuthors ,{as:'info'});
bookAuthors.belongsTo(bookSchema);
