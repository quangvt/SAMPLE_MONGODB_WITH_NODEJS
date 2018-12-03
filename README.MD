# MongoDB with NodeJS sample
This sample use NodeJS, Express, MongoDB to demo a simple application

# 1. Install MongoDB & Visual Tool (Robo 3T) & Import sample data

## 1.1 Install MongoDB
I run this project on my mac, so if you need run in another os you should consider some changes.

Link to setup MongoDB Community Edition
https://docs.mongodb.com/v3.2/administration/install-community/
Select "Install on OS X"

## 1.2 Install Robo 3T tool

I will use this tool for connect to MongoDB

Link to setup Robo 3T
https://robomongo.org/
Select "Download Robo 3T"

## 1.3 Import sample data

$ mongoimport --db learning_mongo --collection tours --jsonArray --file [path to tours.json file]

eg: if I stand in the "support" folder so I can simply run
$ mongoimport --db learning_mongo --collection tours --jsonArray --file tours2.json

* tours.json file is included in the support folder

After import, you can use Robo 3T to check the import result.

# 2. Clone this source code

## 2.1 Clone
You must setup git before run this command
$ git clone https://github.com/quangvt/SAMPLE_MONGODB_WITH_NODEJS.git

## 2.2 Install dependencies
$ cd SAMPLE_MONGODB_WITH_NODEJS
$ npm install

## 2.3 Run
$ npm run

## 2.4 Test on browser or Postman
- List all tours (29)
[Http:Get] http://localhost:8080/tours

- Search tour by tourName
[Http:Get] http://localhost:8080/tours/[tourName]
eg: http://localhost:8080/tours/Spa

Add New [Post], Update [Put] you can use Postman [https://www.getpostman.com/] for test
- Add new
[in postman]
Url: http://localhost:8080/tours
Select Method: POST
Select Tab: Body
Select radio x-www-form-urlencoded
Click Send

- Update
* because I always update 3 fields: tourPackage, tourPrice, tourLength, so you need to fill all value.
[in postman]
Url: http://localhost:8080/tours/[tourName] (note: remember remove brackets)
Select Method: PUT
Select Tab: Body
Select radio x-www-form-urlencoded
Click Send


Well Done!


# Others [Options]

## Test for babel transpiler
Go to package.json => go to item "scripts" => Add/Update item "test" as below:
"test": "babel ./index.js -o ./temporary/cindex.js && node ./temporary/cindex",

This command will translate code of ./index.js to ./temporary/cindex.js and after that will run the translated file for validation.

* Note:
items in "scripts" need to separate by comma (,), so that you need add comma (,) at the end of "test" item before "run" item.
