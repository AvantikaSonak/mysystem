function onboardConfigRequest(){
	   $("#submitButton").click(function(){
	    	var scac= $("#scacReq").val();
	    	var postVar = JSON.stringify({scac:scac});
	        $.post("<URL>",postVar);  
	        var url = "./onBoardComponentConfigReport.html";	        
	        window.location.href = url;
	    });	
}


function componentConfigReport() {	
	$.getJSON("json/onboard_component_config_report.json", function(
			result) {		
				$.each(result, function(i, field) {
					$("#scac").text(field.scac);								
					$("#reason").text(field.reason);
					$("#icd").text(field.icd);
					$("#vendorCode").text(field.vendorCode);
					$("#systemCode").text(field.systemCode);
				});						
	});
}


function componentConfigAck() {
	 $("#submitButton").click(function(){
	    	var scac= $("#scacReq").val();
	    	var postVar = JSON.stringify({scac:scac});
	    	alert("Acknowledge"+postVar);
	        $.post("<URL>",postVar);  
	        var url = "./onboardComponentConfigConfirmation.html";	        
	        window.location.href = url;
	    });
}


function componentConfigAcknowledgement() {	
	$.getJSON("json/onboard_component_config_confirmation.json", function(
			result) {		
				$.each(result, function(i, field) {
					$("#scac").text(field.scac);
				});				
	});
}