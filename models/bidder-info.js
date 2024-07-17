const { Model, DataTypes } = require('sequelize');

const sequelize = require();

class bidderInfo extends Model {}

bidderInfo.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        referal: {
            type: DataTypes.STRING,
            allowNull: true
        },      
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        modelName: 'Bidder-Info'
    }
);

module.exports = bidderInfo;