var express = require('express');
var router = express.Router();
var hotel = require('../models/hotel');
var restaurant = require('../models/restaurant');
var activity = require('../models/activity');
var promise = require('bluebird');



router.get('/', function(req, res, next){
	//get all hotels, rest, activities
	var hotelPromise = hotel.findAll({})
		.then(function(hotels){
			return hotels;
		});

	var restaurantPromise = restaurant.findAll({})
		.then(function(restaurants){
			return restaurants;
		});	

	var activityPromise = activity.findAll({})
		.then(function(activities){
			return activities;
		});	
	
	promise.all([hotelPromise, restaurantPromise, activityPromise])
	.then(function(result){

		// res.send(result);
		res.render('mainpage', {hotels:result[0], restaurants:result[1], activities:result[2]})
	})

})


module.exports = router;

