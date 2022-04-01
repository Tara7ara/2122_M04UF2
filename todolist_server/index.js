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
	res.writeHead(200);
	res.write("ola k ase");
	res.end();
}).listen(3030);
