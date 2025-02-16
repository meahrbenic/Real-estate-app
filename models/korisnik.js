const Sequelize = require("sequelize");
const sequelize = require("../public/scripts/baza");

module.exports = function (sequelize, DataTypes) {
  const Korisnik = sequelize.define("Korisnik", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    ime: Sequelize.STRING,
    prezime: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
  });
  return Korisnik;
};
