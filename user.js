/*
 * The user.js extends the Boxcite object & provides
 * all the user-specific properties & methods.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

var users = new Boxcite;

users.prefix = 'mq.boxcite.user.';
users.login = function ( data ) {
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
users.logout = function ( data ) {
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
