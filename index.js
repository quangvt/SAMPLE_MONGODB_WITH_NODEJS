import express from 'express'
import { MongoClient, ObjectID } from 'mongodb'
import bodyParser from 'body-parser'
import { request } from 'http';

const server = express()
const url = 'mongodb://localhost:27017/learning_mongo';

server.use(bodyParser.urlencoded({ extended: false }))

server.get('/tours', (req, res) => {
	let tours = []
	let findObject = {}
	for (let key in req.query) {
		findObject[key] = req.query[key]
	}

	MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
		client.db().collection('tours').find({})
			.forEach((tour) => {
				console.log(tour)
				tours.push(tour)
			})
			.then(() => {	
				res.send(JSON.stringify(tours))
				client.close()
			})
	})
})

server.get('/tours/:name', (req, res) => {
	MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
		client.db().collection('tours')
			.findOne({"tourName":req.params.name}, 
				(err, tour) => {
					res.send(tour)
					client.close()
			})
	})
})

server.post('/tours', (req, res) => {
	try {
			// console.log(req.body)
			const tourName = req.body.tourName.trim()
			const tourPackage = req.body.tourPackage.trim()
			const tourPrice = req.body.tourPrice
			const tourLength = req.body.tourLength
			if(!tourName || !tourName) {
					return res.render('hallo', {
						tourName,
						tourPackage,
						tourPrice,
						tourLength
					})
			}
			// console.log({ tourName, tourPackage, tourPrice, tourLength })
			MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
				client.db().collection('tours')
					.insertOne({ tourName, tourPackage, tourPrice, tourLength }, 
						(err, tour) => {
							res.send(tour)
							client.close()
					})
			})
	} catch(err) {
			throw err
	}
})

// TODO:
// How to update only sent properties?
// This code always update 3 fields: tourPackage, tourPrice, tourLength. => Not Good
server.put('/tours/:name', (req, res) => {
	try {
		const tourName = req.body.tourName.trim()
		const tourPackage = req.body.tourPackage.trim()
		const tourPrice = req.body.tourPrice
		const tourLength = req.body.tourLength
		if(!tourName || !tourName) {
				return res.render('hallo', {
					tourName,
					tourPackage,
					tourPrice,
					tourLength
				})
		}
		MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
			client.db().collection('tours')
				.updateOne({ tourName: req.params.name }, 
					{$set: { tourPackage, tourPrice, tourLength }},
					(err, tour) => {
						res.send('Successful')
						client.close()
				})
		})
	} catch(err) {
			throw err
	}
})

server.listen(8080, () => {
	console.info('Express listerning on port 8080.')
})
