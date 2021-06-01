
  	function fun_register() {
  		document.getElementById('register').style.display = "block ";
  		document.getElementById('login').style.display = "none";
  		document.getElementById('tools').style.display = "none";
  		document.getElementById('about').style.display = "none";
        document.getElementById('log').style.display = "none";
  	}
  	function fun_login() {
  		document.getElementById('login').style.display = "block ";
          document.getElementById('log').style.display = "block";
  		document.getElementById('tools').style.display = "none";
  		document.getElementById('about').style.display = "none";
  		document.getElementById('register').style.display = "none";
  	}
  	function fun_home() {
  		document.getElementById('tools').style.display = "block ";
        
  		document.getElementById('about').style.display = "block ";
  		document.getElementById('login').style.display = "none";
  		document.getElementById('register').style.display = "none";
   	}
