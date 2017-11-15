function trainConsistRequest(){
	   $("#submitButton").click(function(){
	    	var scac= $("#scacReq").val();
	    	var trainId= $("#trainId").val();
	    	var postVar = JSON.stringify({scac:scac,trainId:trainId});	        
	        window.location.href = "./trainConsist.html";
	    }
	    );
}


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


function trainConsistData() {
	$.getJSON("http://10.53.17.48:53905/CIBOSSServices//service/trainconsistlist/"+window.location.hash.substring(1), function(
			result) {		
				$.each(result, function(i, field) {
					$("#reason").val(field.reason);
					$("#scac").val(field.scac);
					$("#trainType").val(field.traintype);
					$("#orientation").val(field.leadlocor);
					
					$("#LocoId").val(field.locoid);
					$("#locoPos").val(field.locopos);
					$("#locoTon").val(field.tonofloco);
					$("#locoStatus").val(field.locostatus);
					$("#locoLength").val(field.locolenght);
					$("#locoHorse").val(field.locohorse);
					
					$("#trailTonnage").val(field.traton);					
					
					$("#numBrakes").val(field.numopr);
					$("#numAxles").val(field.numax);
					$("#trainLength").val(field.trainlen);
					$("#loadedCar").val(field.loadcarcount);
					
					$("#emptyCar").val(field.emptcarcount);
					$("#brakingForce").val(field.totbrakforce);
					$("#maxSpeed").val(field.maxtrainspeed);
				});		
	});	
}

function ackTrainConsistData() {
	$("#submitButton").click(function(){
    	//var scac= $("#scacReq").val();
    	//var trainId= $("#trainType").val();
    	//var postVar = JSON.stringify({scac:scac,trainType:trainType});
        //post
        window.location.href = "./dashboard.html";
    }
    );
}