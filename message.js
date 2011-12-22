/*
 * The message.js extends the Boxcite object & provides
 * all the contact-specific properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var message = new Boxcite;

message.prefix = 'mq.boxcite.message.';
message.fetch = function () {
	try {
		var method = "find";
		response = this.sendRequest( method, {} );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
message.read = function ( data ) {
	try {
		var method = "read";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
message.search = function ( data ) {
	try {
		var method = "find";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
message.update = function ( data ) {
	try {
		var method = "update";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
message.remove = function ( data ) {
	try {
		var method = "delete";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
