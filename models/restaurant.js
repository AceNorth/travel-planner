var Sequelize = require('sequelize');
var db = require('./index');
var place = require('./place');

var restaurant = {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING,
		allowNull: false
	}, 
	price: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
}

var restaurant_Config = {};

var Restaurant = db.define('Restaurant', restaurant, restaurant_Config);

Restaurant.belongsTo(place);

module.exports = Restaurant;