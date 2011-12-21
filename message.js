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
message.fetch = function ( data ) {
	try {
		var method = "getMessage";
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
		var method = "deleteMessage";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
message.markAsRead = function ( data ) {
	try {
		var method = "markAsRead";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
