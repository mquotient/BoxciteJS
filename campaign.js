/*
 * The campaign.js extends the Boxcite object & provides
 * all the contact-specific properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var campaign = new Boxcite;

campaign.prefix = 'mq.boxcite.campaign.';
campaign.create = function ( data ) {
	try {
		var method = "create";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
campaign.read = function ( data ) {
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
campaign.update = function ( data ) {
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
campaign.remove = function ( data ) {
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
campaign.count = function ( data ) {
	try {
		var method = "count";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
campaign.execute = function ( data ) {
	try {
		var method = "execute";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
campaign.getHistory = function ( data ) {
	try {
		var method = "gethistory";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
