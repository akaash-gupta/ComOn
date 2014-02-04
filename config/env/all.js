'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: process.env.MONGOHQ_URL,

	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'otjuhgobdtf24u0u0&%&76c62168T&*A68t8aegw',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions'
}