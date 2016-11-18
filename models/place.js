var Sequelize = require('sequelize');
var db = require('./index');

var place = {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	}, 
	state: {
		type: Sequelize.STRING,
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT),
		allowNull: false
	}
}

var place_Config = {};

var Place = db.define('Place', place, place_Config);

module.exports = Place;