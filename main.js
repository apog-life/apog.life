$(document).ready(function() {

	$('#email-form').submit(function(event) {
		
		console.log('submitted');

		//var formData = $("#email-form").serialize();

		//console.log(formData);

		$.get('http://amckenna.pythonanywhere.com/sub/'+$('#formName').val()+'/'+$('#formEmail').val()+'/'+$('#formConnection').val()+'/')
			.done(function() {
				console.log("success" );
				$('#email-form').hide();
			})
		  	.fail(function() {
		    	alert( "error, please refresh the page try again" );
		  	});

		event.preventDefault();
	});

});