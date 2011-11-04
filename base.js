/*
 * The base.js provides all the primordial objects for the
 * addon modules. Those modules (e.g. Contact, Campaign etc.)
 * can extend the functionalities of this constructor.
 * 
 * @copyright mQuotient Solutions Limited
 * @developer Soumya Deb [DebWebDev]
 * 
 */

(function( window ) {
	
	// This entire code will be contained in this closure &
	// will be executed to avoid any namespace pollution &
	// it'll also be more efficient for garbage-collection.
	
	// Now, let's initializing our main constructor & enrich
	// it with the basic properties & methods.
	
	function Boxcite () {
		this.data = {};
		this.URL = 'http://boxcite.com:8000/xmlrpc/';
	}
	
	window.Boxcite = Boxcite;
	
	// Here we're exposing "Boxcite" object, which will be
	// the only global namespace that we will need to create.
	
})( window );

