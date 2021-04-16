const { Model, DataTypes } = require("sequelize");

module.exports = {
    definition: {
        link: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    cls: class Source extends Model{

    }
}