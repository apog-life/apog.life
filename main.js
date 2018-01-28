$(document).ready(function() {

	$('#email-form').submit(function(event) {
		
		console.log('submitted');

		//var formData = $("#email-form").serialize();

		//console.log(formData);

		$.get('http://amckenna.pythonanywhere.com/sub/'+$('#formName').val()+'/'+$('#formEmail').val()+'/'+$('#formConnection').val()+'/')
			.done(function() {
				console.log("success" );
			})
		  	.fail(function() {
		    	console.log( "error" );
		  	});

		event.preventDefault();
	});

});