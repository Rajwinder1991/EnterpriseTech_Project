var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* Creating database */
MongoClient.connect(url, function(err, db) {
if (err) throw err;
console.log("Database created!");
db.close();
});*/

/* Creating Collections */
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("TaxiCompany");
dbo.createCollection("car", function(err, res) {
if (err) throw err;
console.log("Collection created!");
db.close();
});
});

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("TaxiCompany");
dbo.createCollection("driver", function(err, res) {
if (err) throw err;
console.log("Collection created!");
db.close();
});
});

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("TaxiCompany");
dbo.createCollection("driver_schedule", function(err, res) {
if (err) throw err;
console.log("Collection created!");
db.close();
});
});*/


/* Inserting documents into collections */
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myobj = [
    { car_id: '101', noOfPassengers:'4',modelNo:'c2015',color:'black'},
	{ car_id: '109', noOfPassengers:'7',modelNo:'p2018',color:'grey'},
	{ car_id: '305', noOfPassengers:'3',modelNo:'j2016',color:'brown'},
	{ car_id: '517', noOfPassengers:'5',modelNo:'honda2017',color:'red'},
	{ car_id: '721', noOfPassengers:'8',modelNo:'a2019',color:'silver'}
 
  ];
  dbo.collection("car").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myobj = [
    { driver_id: '7405', firstName:'Prem', lastName:'Singh', address:'7440 Goreway Drive', phoneNo:'1234567890'},
	{ driver_id: '8025', firstName:'Harwinder',lastName:'Sidhu', address:'123 Mclaughin dr', phoneNo:'1672345456'},
	{ driver_id: '3567', firstName:'Preet', lastName:'Kaur', address:'58 Ripon Street', phoneNo:'7890123456'},
	{ driver_id: '5770', firstName:'Sam', lastName:'Walia', address:'7550 Brandon gate', phoneNo:'1678902345'},
	{ driver_id: '3409', firstName:'Simar', lastName:'Grewal', address:'56 Jay Street', phoneNo:'2894567895'}
	
 
  ];
  dbo.collection("driver").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myobj = [
   	{ driver_id: '8025', car_id:'101',start_time:'1:00pm', end_time:'8:00pm'},
	{ driver_id: '3409', car_id:'721',start_time:'2:00am', end_time:'11:00am'},
	{ driver_id: '5770', car_id:'517',start_time:'11:00am', end_time:'8:00pm'},
	{ driver_id: '7405', car_id:'109',start_time:'07:00am', end_time:'03:00pm'},
	{ driver_id: '3567', car_id:'305',start_time:'05:00am', end_time:'12:00pm'}
	
  ];
  dbo.collection("driver_schedule").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});

/* Reading Collections after Inserting documents */
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  dbo.collection("car").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  dbo.collection("driver").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  dbo.collection("driver_schedule").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

/*Updating Collections */

/*Update car*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myquery = {car_id: "101" };
  var newvalues = {$set: {color: "white"} };
  dbo.collection("car").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});*/

/*Update driver*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myquery = {driver_id: "7405" };
  var newvalues = {$set: {lastName: "Sohi"} };
  dbo.collection("driver").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myquery = {driver_id: "5770" };
  var newvalues = {$set: {start_time:"07:00am",end_time:"03:00pm"} };
  dbo.collection("driver_schedule").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});


/* Deleting Documents */
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myquery = { car_id:"109" };
  dbo.collection("car").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myquery = { firstName: /^S/ };
  dbo.collection("driver").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("TaxiCompany");
  var myquery = {end_time:"8:00pm"};
  dbo.collection("driver_schedule").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});