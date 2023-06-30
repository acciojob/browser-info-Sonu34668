//your JS code here. If required.
 function displayBrowserInfo() {
		// Get the browser name and version
	var browserName = navigator.appName;
	var version = navigator.appVersion;

	// Create the message
	var message = "You are using " + browserName +" version "+version; ;

	// Display the message on the page
	var browserInfoElement = document.getElementById("browser-info");
	browserInfoElement.textContent = message;
 }