import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';

const server = express();

let mdb;
const url = 'mongodb://localhost:27017/learning_mongo';
MongoClient.connect(url, (err, db) => {
	mdb = db;
});


server.get('/tours', (req, res) => {
	// collection.find().toArray(function(error, tours) {
 //                reply(tours);
 //            })
 	let tours = {};
 	mdb.collection('tours').find({})
 		.each((err, tour) => {
 			if (!tour) { // no more tour
 				res.send({ tours });
 				return;
 			}

 			tours[tour._id] = tour;
 		})
})

server.listern(8080, '0.0.0.0', () => {
	console.info('Express listerning on port 8080.')
})