const sequelize = require('../db/dbConect');
const {DataTypes} = require('sequelize');


const bookAuthors = sequelize.define('authors', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    authorsName: {
        type: DataTypes.STRING,
    }
},{
    timestamps: false
})

module.exports = bookAuthors;
