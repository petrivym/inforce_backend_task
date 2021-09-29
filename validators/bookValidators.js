const Joi = require('joi');
const {DATE} = require("sequelize");
const {date} = require("joi");

module.exports = {
    validatorAddBook: Joi.object().keys({
        title: Joi.string().required(),
        pageCount: Joi.number().required(),
        publishedDate:Joi.object().required(),
        thumbnailUrl:Joi.string(),
        shortDescription:Joi.string().required(),
        longDescription:Joi.string().required(),
        status:Joi.string().required(),
        authors: Joi.array().required()
    })
};
