const { Model, DataTypes } = require("sequelize");

module.exports = {
    definition: {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        datasheet: DataTypes.STRING
    },
    cls: class Part extends Model{
        hasStock(){
            return this.amount > 0;
        }
    }
}