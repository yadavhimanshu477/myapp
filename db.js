const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myapp';
let db;

module.exports = {
	connect() {
		MongoClient.connect(url, function(err, client) {
		  console.log("Connected successfully to server");
		  db = client.db(dbName);
		});
	}
}
