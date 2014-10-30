$(document).ready(function() {



	$('#msg').bind('keyup', function(e) {
		//if key pressed is enter
		if(e.keyCode==13){
		    var post = $(this).val();
		    date = new Date();
		    post = "<b>" + post + "</b>" + " - " + date + "<br>";
		    storePost(post);
		    $("#news").after(post);
		    //clear input field
		    $(this).val("");		    
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