/*
 * The report.js extends the Boxcite object & provides
 * all the report-generation properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var report = new Boxcite;

report.prefix = 'mq.boxcite.report.';
report.get = function ( data ) {
	try {
		var method = "get";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
report.export = function ( data ) {
	try {
		var method = "export";
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
