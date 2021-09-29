const {validDataForAddUpdateBook, checkDuplicates, checkId} = require("../helpers/bookHelpers");


module.exports = {
    checkAddBook: async (req, res, next) => {
        try {
            const {body} = req

            validDataForAddUpdateBook(body);
            await checkDuplicates(body);

            next()
        } catch (e) {
            next(e);
        }
    },
    checkIdFound: async (req, res, next) => {
        try {
            const {id} = req.params;

            await checkId(id);


            next()
        } catch (e) {
            next(e);
        }
    }
}
