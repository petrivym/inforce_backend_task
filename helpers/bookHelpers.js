const {validatorAddBook} = require("../validators/bookValidators");
const ErrorHandler = require("../error/error-Handler");
const {
    FIELDS_ARE_WRONG_OR_EMPTY__ERR,
    CONFLICT_IS_BOOK_ALREADY_EXIST,
    RECORD_NOT_FOUND
} = require("../error/errorMassages");
const bookSchema = require("../db/BookModell");


module.exports = {
    validDataForAddUpdateBook: (data) => {

        const {error} = validatorAddBook.validate(data);

        if (error) {
            throw new ErrorHandler(FIELDS_ARE_WRONG_OR_EMPTY__ERR.statusCode, error.message, FIELDS_ARE_WRONG_OR_EMPTY__ERR.customCode)
        }
    },
    checkDuplicates: async (data) => {
        const {title} = data
        const isDuplicates = await bookSchema.findOne({where: {title: title}})

        if (isDuplicates) {
            throw new ErrorHandler(CONFLICT_IS_BOOK_ALREADY_EXIST.statusCode, CONFLICT_IS_BOOK_ALREADY_EXIST.message, CONFLICT_IS_BOOK_ALREADY_EXIST.customCode)
        }
    },

    checkId: async (id) => {
        const isFoundId = await bookSchema.findOne({where: {id: id}});

        if (!isFoundId) {
            throw new ErrorHandler(RECORD_NOT_FOUND.statusCode, RECORD_NOT_FOUND.massage, RECORD_NOT_FOUND.customCode)
        }

    }
}

