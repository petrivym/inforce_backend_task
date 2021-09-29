module.exports = {
        RECORD_NOT_FOUND: {
        statusCode: 404,
        massage: 'Record not found',
        customCode: 4000
    },

    UNKNOWN_ERROR: {
        massage: 'Unknown error',
        customCode: 0
    },

    FIELDS_ARE_WRONG_OR_EMPTY__ERR: {
        statusCode: 400,
        massage: 'same fields are empty or wrong formats',
        customCode: 4010
    },

    CONFLICT_IS_BOOK_ALREADY_EXIST: {
        statusCode: 409,
        massage: 'THIS BOOK IS ALREADY EXIST',
        customCode: 4011
    },

}
