'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Cadastro.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    tel_whats: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    titulo_foto: DataTypes.STRING,
    nome_fotografa: DataTypes.STRING,
    nome_foto: DataTypes.STRING,
    nome_responsavel: DataTypes.STRING,
    cpf_responsavel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cadastro',
  });
  return Cadastro;
};