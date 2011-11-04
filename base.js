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
	
	var Boxcite = (!(window.Boxcite) ? "Boxcite" : window.Boxcite);
	
	// Initializing our main object locally & making a logical
	// assignment so that if Boxcite is defined, it holds the
	// value - otherwise we're setting it to a string "Boxcite".
	
	window.Boxcite = Boxcite;
	
	// Here we're exposing "Boxcite" object, which will be
	// the only global namespace that we will need to create.
	
})( window );

