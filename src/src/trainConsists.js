function trainConsistRequest(){
	   $("#submitButton").click(function(){
	    	var scac= $("#scacReq").val();
	    	var trainId= $("#trainId").val();
	    	var postVar = JSON.stringify({scac:scac,trainId:trainId});	        
	        window.location.href = "./trainConsist.html";
	    }
	    );
}

function trainConsistData() {
	var params = window.location.hash.split('#');
	var crewName = params[2];
	$.getJSON(baseUrl+"service/trainconsistlist/"+window.location.hash.substring(1), function(
			result) {		
				$.each(result, function(i, field) {
					if(field.reason == "1"){
						$("#reason").text("Response to locomotive request with CAD provided consist");
					} else if(field.reason == "2") {
						$("#reason").text("Response to locomotive request, no consist data available");
					}else if(field.reason == "3") {
						$("#reason").text("Unsolicited");
					}
					
					$("#scac").text(field.scac);
					if(field.traintype == "0"){
						$("#trainType").text("Unknown");
					}else if(field.traintype == "1") {
						$("#trainType").text("Freight");
					}else if(field.traintype == "2") {
						$("#trainType").text("Passenger");
					}else if(field.traintype == "3") {
						$("#trainType").text("Intermodal");
					}else if(field.traintype == "4") {
						$("#trainType").text("High Speed Passenger");
					}else if(field.traintype == "5") {
						$("#trainType").text("Tilt Train");
					}else if(field.traintype == "6") {
						$("#trainType").text("Commuter");
					}
					
					
					if(field.leadlocor == "0") {
					    $("#orientation").text("Unknown");
					} else if(field.leadlocor == "1") {
						$("#orientation").text("Front");
					}else if(field.leadlocor == "2") {
						$("#orientation").text("Back");
					}
					
					
					$("#trailTonnage").text(field.traton);
					$("#numBrakes").text(field.numopr);
					$("#numAxles").text(field.numax);
					$("#trainLength").text(field.trainlen);
					$("#loadedCar").text(field.loadcarcount);
					
					$("#emptyCar").text(field.emptcarcount);
					$("#brakingForce").text(field.totbrakforce);
					$("#maxSpeed").text(field.maxtrainspeed);
					$("#crewN").text(crewName.replace(/\_/g, ' '));
					
					$("#lastModified").text(field.lastmodifiedtime);					
					loopLocoDetails(field.locolistlist);
				});		
	});	
}


function loopLocoDetails(field) {
	$.each(field, function(i, details) {	
	var status = findLocoStatus(field[i].locostatus);
	$("#locoDetails").append("<tr><td>" +
			field[i].locoid + "</b></td><td>" +
			field[i].locopos+"</td><td>" +	  							
			field[i].tonofloco + "</td><td>" +
			status + "</td><td>" +
			field[i].locolenght + "</td><td>" +
			field[i].locohorse
			+ "</td></tr>");
	});	
}

function findLocoStatus(locoStatus) {
	console.log(locoStatus);
	if(locoStatus == "0") {
		  return "Unknown";
		} else if(locoStatus == "1") {
		  return "Run";
		} else if(locoStatus == "2") {
		  return "Isolated";
		}
}

function ackTrainConsistData() {
	$("#consistSubmitButton").click(function(){		
		
		var params = window.location.hash.split('#');
		if(params[3] === "consist") {
			window.location.href = "./consist_Report.html";
		} else {
			window.location.href = "./trainAtGlance_Report.html";
		}	
    });
}

function ackTrainGlanceData() {
	$("#submitButton").click(function(){
		window.location.href = "./trainAtGlance_Report.html";
    });
}

function gotoDashBoard() {
	window.location.href = "./dashboard.html";
}