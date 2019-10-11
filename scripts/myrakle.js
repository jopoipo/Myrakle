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
function openQuestion(evt, categoryName){
	var i, category, faqQuestions;

	faqQuestions =document.getElementsByClassName("faqQuestions");

	for (i = 0; i < faqQuestions.length; i++) {
    	faqQuestions[i].style.display = "none";
 	}

 	// Get all elements with class="tablinks" and remove the class "active"
  category = document.getElementsByClassName("category");
  for (i = 0; i < category.length; i++) {
    category[i].className = category[i].className.replace(" categoryActive", "");
  }


  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " categoryActive";

}
function toogleQuestion(evt){

	parentId = evt.currentTarget.parentNode.id;
	q = parentId[parentId.length -1];
	categoryId = evt.currentTarget.parentNode.parentNode.id;
	answerId = categoryId.concat('a',q);

	
	answer = document.getElementById(answerId);
	if (answer.style.display === "block"){
		answer.style.display = "none";
		 
		if(evt.currentTarget.className === ""){
			evt.currentTarget.nextElementSibling.className = evt.currentTarget.nextElementSibling.className.replace(" fa-sort-up", " fa-sort-down");	
		}else{
		 evt.currentTarget.className = evt.currentTarget.className.replace(" fa-sort-up", " fa-sort-down");
		}


	}else{
		answer.style.display = "block";
		if(evt.currentTarget.className === ""){
			evt.currentTarget.nextElementSibling.className = evt.currentTarget.nextElementSibling.className.replace(" fa-sort-down", " fa-sort-up");	
		}else{
		 evt.currentTarget.className = evt.currentTarget.className.replace(" fa-sort-down", " fa-sort-up");
		}

	}
	
	

}
