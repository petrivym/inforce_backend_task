const sequelize = require('../db/dbConect');
const {DataTypes} = require('sequelize');

const bookSchema = sequelize.define('book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pageCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    publishedDate: {
        type: DataTypes.JSON,
        allowNull: false
    },
    thumbnailUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortDescription: {
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    longDescription:{
        type: DataTypes.TEXT(),
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps: false
});

module.exports = bookSchema;
