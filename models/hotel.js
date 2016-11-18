var Sequelize = require('sequelize');
var db = require('./index');
var place = require('./place');

var hotel = {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.INTEGER,
		allowNull: false
	}, 
	amenities: {
		type: Sequelize.STRING,
		allowNull: false
	}
}

var hotel_Config = {};

var Hotel = db.define('Hotel', hotel, hotel_Config);

Hotel.belongsTo(place);

module.exports = Hotel;
