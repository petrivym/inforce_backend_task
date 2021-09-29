const sequelize = require('../db/dbConect');
const {DataTypes} = require('sequelize');


const bookAuthors = sequelize.define('authors', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    authorsName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false
})

module.exports = bookAuthors;
