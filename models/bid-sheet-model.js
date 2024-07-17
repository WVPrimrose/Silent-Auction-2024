const { Model, DataTypes } = require('sequelize');

const sequelize = require();

class bid extends Model {}

bid.init(
    {
        bid_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncriment: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
        },
        bid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: false,
        modelName: 'bid',
    }
);

module.exports = bid;