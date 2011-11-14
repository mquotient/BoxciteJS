/*
 * The contact.js extends the Boxcite object & provides
 * all the contact-specific properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var contact = new Boxcite;

contact.prefix = 'mq.boxcite.contact.';
contact.create = function ( data ) {
	try {
		var method = "createSingle";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
contact.createFromFile = function ( data ) {
	try {
		var method = "createFromFile";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
contact.read = function ( data ) {
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
contact.findContacts = function ( data ) {
	try {
		var method = "findContacts";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
contact.findCategories = function ( data ) {
	try {
		var method = "findCategories";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
contact.update = function ( data ) {
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
contact.updateCategories = function ( data ) {
	try {
		var method = "updateCategories";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
contact.count = function ( data ) {
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
contact.remove = function ( data ) {
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
contact.getFields = function ( data ) {
	try {
		var method = "getFields";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
