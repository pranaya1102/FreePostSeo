
  	function fun_register() {
  		document.getElementById('register').style.display = "block ";
		  document.getElementById('log').style.display = "none";
  		document.getElementById('login').style.display = "none";
  		document.getElementById('tools').style.display = "none";
  		document.getElementById('about').style.display = "none";
       
		w3_close();
        document.documentElement.scrollTop = 0;
  	}
  	function fun_login() {
		
  		document.getElementById('login').style.display = "block ";
		  document.getElementById('log').style.display = "block";
  		document.getElementById('tools').style.display = "none";
  		document.getElementById('about').style.display = "none";
  		document.getElementById('register').style.display = "none";
		w3_close();
		document.documentElement.scrollTop = 0;

  	}
  	function fun_home() {
  		document.getElementById('tools').style.display = "block ";
		document.getElementById('about').style.display = "block ";

  		document.getElementById('login').style.display = "none";
  		document.getElementById('register').style.display = "none";
		  w3_close();
		document.documentElement.scrollTop = 0;  
   	}
	
	   // Toggle between showing and hiding the sidebar when clicking the menu icon
	

	function w3_open() {
		var mySidebar = document.getElementById("mySidebar");
	if (mySidebar.style.display === 'block') {
		mySidebar.style.display = 'none';
		
	} else {
		mySidebar.style.display = 'block';
	}
	}

	// Close the sidebar with the close button
	function w3_close() {
		var mySidebar = document.getElementById("mySidebar");
		mySidebar.style.display = "none";
	}
	
	// Api 
	document.addEventListener("click", function (event) {
		// Checking if the button was clicked
		
		if(!(event.target.matches("#url_s"))) {
			console.log("button was not clicked yet");
			
		}
	    console.log("button was clicked");
		fetch("")
		  .then((response) => response.json())
		  .then((data) => console.log(data));
	  });