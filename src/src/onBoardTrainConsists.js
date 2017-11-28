function trainConsistAcknoledgement(){
	var ack="Acknowledged";
	$.getJSON("json/train_consists_confirmation.json", function(
			result) {
				$.each(result, function(i, field) {								
					$("#scac").text(field.scac);
					if(field.indicator == "1") {
						$("#ind").text(ack);
					} else if(field.indicator == "4") {
						$("#ind").text("NAK-Other reason");
					}else if(field.indicator == "2" ||field.indicator == "3" || field.indicator == "5") {
						$("#ind").text("Reserved");
					}
				});		
	});
}



function trainConsistRequest(){
	   $("#submitButton").click(function(){
	    	var scac= $("#scac").val();
	    	var subdiv= $("#subdiv").val();
	    	var trainType= $("#trainType").val();
	    	var orientation= $("#orientation").val();
	    	var trailTonnage= $("#trailTonnage").val();
	    	var numBrakes= $("#numBrakes").val();
	    	var numAxles= $("#numAxles").val();
	    	var trainLength= $("#trainLength").val();
	    	var emptyCar= $("#emptyCar").val();
	    	var brakingForce= $("#brakingForce").val();
	    	var maxSpeed= $("#maxSpeed").val();
	    		    	
	    	var postVar = JSON.stringify({scac:scac,subdiv:subdiv,trainType:trainType,orientation:orientation,trailTonnage:trailTonnage,
	    		numBrakes:numBrakes,numAxles:numAxles,trainLength:trainLength,emptyCar:emptyCar,brakingForce:brakingForce,maxSpeed:maxSpeed
	    	});
	        $.post("<URL>",postVar);  
	        alert('post'+postVar);
	        var url = "./onBoardtrainConsistConfirmation.html";	        
	        window.location.href = url;
	    }
	    );
	
}