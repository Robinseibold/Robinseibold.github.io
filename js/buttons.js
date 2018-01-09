
$(document).ready(function(){

	$("#contactButton").on("click", function(event) {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	});
				  
	$("#upButton").on("click", function(event) {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

});
