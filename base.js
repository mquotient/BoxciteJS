/*
 * The base.js provides all the primordial objects for the
 * addon modules. Those modules (e.g. Contact, Campaign etc.)
 * can extend the functionalities of this constructor.
 *
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 *
 */

( function ( window ) {

	// This entire code will be contained in this closure &
	// will be executed to avoid any namespace pollution &
	// it'll also be more efficient for garbage-collection.
	
	// Now, let's initializing our main constructor & enrich
	// it with the basic properties & methods.
	
	function Boxcite ( server, port, path ) {
		this.data = {};
		this.prefix = "";

		// Let's render the URL of the server, else provide default
		if ( typeof server !== "undefined" && server.length > 0 ) {
			this.URL = 'http://' + server;
			if( typeof port !== "undefined" && port.length > 0 ) {
				this.URL += ":" + port;
			}
			if( typeof path !== "undefined" && path.length > 0 ) {
				this.URL += path;
			}
		}
		else this.URL="http://sreejith.dyndns-home.com:10580/xmlrpc/";

		// Implement a way to read & parse required data from the
		// cookies which have been set.
		this.getCookie = function ( cookie ) {
			var i, x, y, result = "";
			var cookies = document.cookie.split( ";" );
			var count = cookies.length;
			// So that the count is evaluated only once for no matter
			// how many times the loop runs, saves recurring computation.

			if ( count > 0 && cookies[0] != "" ) {
				for ( i = 0; i < count ; i++ ) {
					x = cookies[i].substr( 0, cookies[i].indexOf( "=" ) );
					y = cookies[i].substr( cookies[i].indexOf( "=" )+1 );
					x = x.replace( /^\s+|\s+$/g, "" );
					if ( x == cookie ) {
						result = unescape(y);
						return result;
					}
				}
			}
			return result;
		}

		// Here we implement how to parse given values & set the cookies
		this.setCookie = function ( cookie, value, expires, domain, path ) {
			var expDate = new Date();
			expDate.setDate( expDate.getDate() + expires );

			var content = escape( value ) + ( ( expires == null) ?
				"" : ";expires=" + expDate.toUTCString() );
			content += ( domain == null ) ? "" : "; Domain=" + escape( domain );
			content += ( path == null ) ? "" : "; Path=" + escape( path );

			document.cookie = cookie + "=" + content;
		}

		// Let's delete the cookies - special case of setCookie()
		this.delCookie = function ( cookie ) {
			this.setCookie( cookie, "", 1 );
		}

		// Here's the user authentication request method
		this.loginRequest = function ( method, data ) {
			try {
				var client = new xmlrpc_client( this.URL );
				var payLoad = ( typeof data === "undefined" ) ?
					( this.data ) : ( data );
				method = this.prefix + method;

				// Let's pass the payLoad to XML-RPC
				var response = client.mq_send(
					new xmlrpcmsg( method,
						new Array( xmlrpc_encode( payLoad )
						)
					)
				);
				cookie = this.getCookie( 'sessionid' ) ;
				if ( cookie == "" ) {
					var cookie = response.cookies();
					this.setCookie( 'sessionid',
						cookie['sessionid'].value,
						cookie['sessionid'].expires
					);
				}

				response = xmlrpc_decode( response.value() );
				return response;
			}

			catch ( error ) {
				error = "Failed to communicate with the server.";
				throw error;
			}
		}

		// This un-authenticates (got a better word?) the user
		this.logoutRequest = function ( method ) {
			try {
				var client = new xmlrpc_client( this.URL );
				var cookie = this.getCookie( 'sessionid' );
				var payLoad = {};
				if ( cookie != "" ) {
					payLoad.sessionID = cookie;
				}
				method = this.prefix + method;
				var response = client.mq_send(
					new xmlrpcmsg( method,
						new Array( xmlrpc_encode( payLoad )
						)
					)
				);
				response = xmlrpc_decode( response.value() );
				this.delCookie( 'sessionid' );
				return response;
			}

			catch ( error ) {
				error = "Failed to communicate with the server.";
				throw error;
			}
		}

		// The general-purpose routine for sending process-calls
		this.sendRequest = function ( method, data ) {
			try {
				var client = new xmlrpc_client( this.URL );
				var cookie = this.getCookie( 'sessionid' );
				var payLoad = data;
				if ( cookie != "" ) {
					payLoad.sessionID = cookie;
				}
				method = this.prefix + method;
				var response = client.mq_send(
					new xmlrpcmsg( method,
						new Array( xmlrpc_encode( payLoad )
						)
					)
				);
				response = xmlrpc_decode( response.value() );
				return response;
			}

			catch ( error ) {
				error = "Failed to communicate with the server.";
				throw error;
			}
		}
	}

	window.Boxcite = Boxcite;

	// Here we're exposing "Boxcite" object, which will be
	// the only global namespace that we will need to create.

})( window );

