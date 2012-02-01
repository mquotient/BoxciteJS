/*
 * The user.js extends the Boxcite object & provides
 * all the user-specific properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var user = new Boxcite;

user.prefix = 'mq.boxcite.user.';
user.login = function ( data ) {
	try {
		var method = 'login';
		response = this.loginRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
user.logout = function ( data ) {
	try {
		var method = 'logout';
		response = this.logoutRequest( method );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
user.changePassword = function ( data ) {
	try {
		var method = 'changePassword';
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
user.resetPassword = function ( data ) {
	try {
		var method = 'resetPassword';
		response = this.sendRequest( method, data );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
user.find = function () {
	try {
		var method = 'find';
		response = this.sendRequest( method, {} );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
user.locations = function () {
	try {
		var method = 'locations';
		response = this.sendRequest( method, {} );
		return response;
	}
	catch ( error ) {
		error = "Error : " + error;
		throw error;
	}
}
