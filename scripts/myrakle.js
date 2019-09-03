function tooglePanel(x){
	var panel = document.getElementById(x)
	if(x == "cartPanel"){
		if(panel.style.height == "25rem"){
	        panel.style.height = "0px";
	        
	    } else {
	        panel.style.height = "25rem";
	        
	    }
	}
	if(x == "searchPanel"){
		if(panel.style.display == "flex"){
			document.getElementById("logo").style.display = "flex";
			document.getElementById("header-bottom-nav").style.display = "flex";
			panel.style.display = "none";

		}else{

			document.getElementById("logo").style.display = "none";
			document.getElementById("header-bottom-nav").style.display = "none";
			panel.style.display = "flex";

		}

		
		

	}
}