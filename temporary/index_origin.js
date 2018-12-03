const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learning_mongo';

const findDocument = function(db, callback) {
	const collection = db.collection('tours');

	// collection.find().toArray(function(err, docs) {
	collection.find({"tourPackage":"Snowboard Cali"}).toArray(function(err, docs) {
		console.log(docs);
		callback;
	})
}

// MongoClient.connect(url, function(err, db) {
MongoClient.connect(url, function(err, client) {
	console.log("Connected successfully to server");
	const db = client.db();
	findDocument(db, function () {
		// db.close();
		client.close();
	})
});
