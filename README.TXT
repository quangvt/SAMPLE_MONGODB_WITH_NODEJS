MongoDB

===
$ cd learning_mongodb
$ npm init -y
$ npm i -S hapi
$ npm i -S mongodb
$ npm install
$ cd support
$ ls
// my mac is python3
$ sudo -H python3 get-pip.py
$ sudo -H pip install httpie
// Test
$ http http://www.lynda.com

===
1. Indexing (64 indicies per collection)
- single field 
- compound ind is a: single index => multiple fields
- unique
2. Sharding (sometimes referred to as partitioning)
- partitions data onto different machines
- provides scalability via software
- autosharding supported by Mongo
- Challenging to set up 
3. Replication
- Reliability (a primary server and some secondary servers)
- Maximizes uptime
- Replica sets
- Automatic failover

=== II. Explore the System
1. mongo shell
- $ mongod => run mongo server
- $ mongo => start client to interact with mongo server
- $ db => list current selected database (default is test database)
- $ use learning_mongo
- $ show dbs => list all databases
// when create new record => database learning_mongo will be created.
// also mongo will create collection for that record (document)
- $ db.books.insert({"publisher": "Nha Nam"})
- $ show collections
- $ print("test");
var arr=["one", "two", "three"]
- $ arr
- $ for (i=0; i<10000; i++) {
	db.numners.insert(
	{"number":i}
	)
}
- $ db.numbers.count()
- $ db.numbers.find({"number":1})
- $ db.numbers.find({"number":1}).explain()
- $ db.numbers.find({"number":1}).explain("executionStats");
- $ db.numbers.createIndex({"number":1})
-

2. mongo import
$ mongoimport --help
$ mongoimport --db learning_mongo --collection tours --jsonArray --file tours.json
$ mongo
$ use learning_mongo
$ db.tours.find({"tourTags":"hiking"})

3. Mongo shell operation
$ mongo
$ use learning_mongo
$ db.tours.find({"tourTags":"wine"})
...
$ db.tours.insert({
	"tourName":"The Wines of Santa Cruz",
	"tourLength":3,
	"tourDescription":"Discover Santa Cruz's wineries",
	"tourPrice":500,
	"tourTags":["wine","Santa Cruz"]
})
$ db.tours.find({"tourTags":"wine"})
$ db.tours.update({"tourName":"The Wines of Santa Cruz"},
... {$set: {"tourRegion":"The Wines of Santa Cruz"}})
$ db.tours.update({"tourName":"The Wines of Santa Cruz"},
{
	$addToSet: {"tourTags":"boardwalk"}
})
$ db.tours.find({"tourTags":"wine"})
$ db.tours.remove({"tourName":"The Wines of Santa Cruz"})
$ db.tours.drop()

4. Simple Index
$ mongoimport --db learning_mongo --collection tours --jsonArray --file tours2.json
$ mongo
$ use learning_mongo
$ db.tours.find({"tourPackage":"Taste of California"}).explain("executionStats");
$ db.tours.createIndex({tourPackage:1})
$ db.tours.find(
{"tourPrice":{$lte:500},
"tourLength":{$lte:3}})
$ db.tours.find({"tourPrice":{$lte:500}, "tourLength":{$lte:3}}).explain("executionStats")
$ db.tours.createIndex({tourPrice:1, tourLength:1})
$ db.tours.find({"tourPrice":{$lte:500}, "tourLength":{$lte:3}}).explain("executionStats")


III - install npm packages
- babel-cli, babel-presets-env, babel-presets-stage-0
- nodemon
- script: "nodemon ./index.js --exec babel-node -e js"
- hoac: compile and run: $ babel ./index.js -o cindex.js && node cindex


http POST http://localhost:8080/tours tourName="QuangVT" tourPackage="Fun in the sun" tourPrice=10000 tourLength=5


