const { Model, DataTypes } = require("sequelize");

module.exports = {
    definition: {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    cls: class Tag extends Model{

    }
}