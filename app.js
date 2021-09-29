require('dotenv').config();
const express = require('express');

const {dbConnect} = require('./db');
const {ErrorMessage: {RECORD_NOT_FOUND, UNKNOWN_ERROR}} = require('./error');
const {bookRouter} = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/book', bookRouter);
app.use('*', _notFoundHandler);
app.use(_handleErrors);





function _handleErrors(err, req, res, next) {
console.log(err);
    res
        .status(err.status)
        .json({
            message: err.message || UNKNOWN_ERROR.massage,
            customCode: err.customCodes || UNKNOWN_ERROR.customCode
        });
}

function _notFoundHandler(req, res, next) {

    next({
        status: RECORD_NOT_FOUND.statusCode,
        message: RECORD_NOT_FOUND.massage,
        customCode: RECORD_NOT_FOUND.customCode
    });
}

const start = async () => {
    try {
        await dbConnect.authenticate();
        await dbConnect.sync();
        app.listen(process.env.PORT, () => console.log(`app work on a port ${process.env.PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
