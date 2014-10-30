$(document).ready(function() {

	//print all old posts
	for (key in localStorage) {
		old_post = localStorage[key]; 
	   $("#news").after(old_post);
	}


	$('#msg').bind('keyup', function(e) {
		//if key pressed is enter
		if(e.keyCode==13){
		    var post = $(this).val();
		    date = new Date();
		    post = "<b>" + post + "</b>" + " - " + date + "<br>";
		    storePost(post);
		    $("#news").after(post);
		    //clear input field
		}
	});

	function storePost(post) 
	{
		if(typeof(Storage) !== "undefined") {
			localStorage[new Date().getTime()] = post;
		} else {
			//no local storage support 
		}
	}




});