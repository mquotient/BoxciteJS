/*
 * The workflow.js extends the Boxcite object & provides
 * all the contact-specific properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var workflow = new Boxcite;

workflow.prefix = 'mq.boxcite.workflow.';
workflow.createTransaction = function ( data ) {
	try {
		var method = "createTransaction";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
workflow.updateTransaction = function ( data ) {
	try {
		var method = "updateTransaction";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
workflow.readTransaction = function ( data ) {
	try {
		var method = "readTransaction";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
workflow.findTransaction = function ( data ) {
	try {
		var method = "findTransaction";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
workflow.count = function ( data ) {
	try {
		var method = "countTransaction";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
workflow.deleteTransaction = function ( data ) {
	try {
		var method = "deleteTransaction";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
