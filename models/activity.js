var Sequelize = require('sequelize');
var db = require('./index');
var place = require('./place');

var activity = {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age_range: {
		type: Sequelize.STRING,
		allowNull: false
	}
}

var activity_Config = {};

var Activity = db.define('Activity', activity, activity_Config);

Activity.belongsTo(place);

module.exports = Activity;