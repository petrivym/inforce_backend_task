const {OK} = require("../const/responsCode");
const {bookSchema, bookAuthors} = require("../db");

module.exports = {
    creatBook: async (req, res, next) => {
        try {
            const {
                title,
                pageCount,
                publishedDate,
                thumbnailUrl,
                shortDescription,
                longDescription,
                status,
                authors
            } = req.body;

            const CreatBook = await bookSchema.create({
                title: title,
                pageCount: pageCount,
                publishedDate: publishedDate,
                thumbnailUrl: thumbnailUrl,
                shortDescription: shortDescription,
                longDescription: longDescription,
                status: status,
            })

            for (const author of authors) {
                await bookAuthors.create({authorsName: author, bookId: CreatBook.id})
            }

            res.status(OK).json('ok');
        } catch (e) {
            next(e);
        }
    },

    getBookById: async (req, res, next) => {
        try {
            const {id} = req.params
            const book = await bookSchema.findOne(
                {
                    where: {id},
                    include: [{model: bookAuthors, as: 'info', attributes: ['authorsName']}]
                })

            res.status(OK).json(book);
        } catch (e) {
            next(e);
        }
    },

    getAllBook: async (req, res, next) => {
        try {
            const book = await bookSchema.findAll({
                include: [{
                    model: bookAuthors,
                    as: 'info',
                    attributes: ['authorsName']
                }]
            });

            res.status(OK).json(book);
        } catch (e) {
            next(e);
        }
    },
    updateBook: async (req, res, next) => {
        try {
            const {body} = req
            const {id} = req.params;

            const dataValues = await bookSchema.findOne({where: {id: id}})
            await bookSchema.update({...dataValues, ...body}, {where: {id: id}});

            res.status(OK).json('update');
        } catch (e) {
            next(e);
        }
    },
    deleteBook: async (req, res, next) => {
        try {
            const {id} = req.params;

            await bookSchema.destroy({where: {id: id}})

            res.status(OK).json('destroy');
        } catch (e) {
            next(e);
        }
    },
}
