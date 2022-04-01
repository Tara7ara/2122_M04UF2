#!/usr/bin/node

const http = require("http");

let mongo_client = require("mongodb").MongoClient;
let ObjectId = require("mongodb").ObjectId;

let url = "mongodb://localhost/";

let db;

console.log("Iniciando script mongo-http");

mongo_client.connect(url, function(error, conn){
	console.log("Dentro de MongoDB");

	if (error){
		console.log("ERROR!!!");
		return;
	}

	db = conn.db("todolist");
});


http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});

	let tasks = db.collection("tasks").find();
	tasks.toArray(function(err, data){
		let tasks_string = JSON.stringify(data);
		res.write(tasks_string);
		res.end();
	});

}).listen(3030);
;
