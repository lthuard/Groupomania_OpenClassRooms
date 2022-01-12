const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class user extends Model {}

    user.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: { type : DataTypes.STRING, allowNull: false},
        lastName : { type : DataTypes.STRING, allowNull: false},
        email : { type : DataTypes.STRING, allowNull: false},
        password : { type : DataTypes.STRING, allowNull: false},
        photo: { type : DataTypes.STRING, allowNull: false},
        admin: { type: DataTypes.BOOLEAN, allowNull: false,  defaut: false},
        },
        {
            sequelize,
            modelName: 'User',
            freezeTableName: true,
        }
    );
    return user;
};