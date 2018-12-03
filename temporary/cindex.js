'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongodb = require('mongodb');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

// server.use(bodyParser.json())
server.use(_bodyParser2.default.urlencoded({ extended: false }));

// let mdb
// let mcollection
var url = 'mongodb://localhost:27017/learning_mongo';

server.get('/tours', function (req, res) {
	var tours = [];
	var findObject = {};
	for (var key in req.query) {
		findObject[key] = req.query[key];
	}
	//  mcollection.find(findObject)
	// 	.forEach((tour) => {
	// 		tours.push(tour)
	// 	 })
	// 	.then(() => {	
	// 		res.send(JSON.stringify(tours))
	// 	})

	_mongodb.MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
		client.db().collection('tour').find(findObject).forEach(function (tour) {
			tours.push(tour);
		}).then(function () {
			res.send(JSON.stringify(tours));
		});
		client.close();
	});
});

// server.get('/tours/:name', (req, res) => {
// 	mcollection.findOne({"tourName":req.params.name}, 
// 		(err, tour) => {
// 			res.send(tour)
// 		})
// })

// server.post('/tours', (req, res) => {
// 	try {
// 			console.log(req.body)
// 			const tourName = req.body.tourName.trim()
// 			const tourPackage = req.body.tourPackage.trim()
// 			// const fbMessage = req.body.fbMessage.trim()
// 			// const feedbacklist = await feedbackService.getList()
// 			if(!tourName || !tourName) {
// 					return res.render('hallo', {
// 						tourName,
// 						tourPackage,
// 					})
// 			}
// 			res.send({ tourName, tourPackage })
// 			// await feedbackService.addEntry(fbName, fbTitle, fbMessage)
// 			// return res.redirect('/feedback?success=true')
// 	} catch(err) {
// 			throw err
// 	}

// 	// const tourId = ObjectID(req.body.tourId)
// 	// const name = req.body.newName
// 	// mdb.collection('names').insertOne({ name })
// 	// 	.then(result =>
//   //   	mdb.collection('contests').findAndModify(
//   //     	{ _id: contestId },
//   //     	[],
//   //     	{ $push: { nameIds: result.insertedId } },
//   //     	{ new: true }
//   //   	).then(doc =>
//   //     	res.send({
//   //       	updatedContest: doc.value,
//   //       	newName: { _id: result.insertedId, name }
//   //    		})
//   //   	)
//   // 	)
// 	// 	.catch(error => {
// 	// 		console.error(error);
// 	// 		res.status(404).send('Bad Request');
// 	// 	});

// 	// mcollection.insertOne(req.payload, (err, result) => {
// 	// 	res.send(result)
// 	// })
// })

// MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
// 	console.log("Connected successfully to server")
// 	// mdb = client.db()
// 	// mcollection = mdb.collection('tours')
// 	client.close()
// 	console.log('DB Closed')
// })

server.listen(8080, function () {
	console.info('Express listerning on port 8080.');
});
