function configVersionRequest(){
	   $("#submitButton").click(function(){
	    	var scac= $("#scacReq").val();
	    	var icd= $("#icd").val();
	    	var postVar = JSON.stringify({scac:scac,icd:icd});
	        $.post("<URL>",postVar);  
	        window.location.href = "./configurationVersionListConfirmation.html";
	    }
	    );	
}



function configVersionResponse() {
	$.getJSON("./json/employee_verification_response.json", function(
			result) {
				$.each(result, function(i, field) {								
					$("#scac").text(field.scac);								
					
					$("#repo").text(field.reasonTxt);
				});		
	});
}