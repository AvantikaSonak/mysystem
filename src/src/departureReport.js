function departureTestReport() {
	
	$.getJSON(baseUrl+"service/departuretest/"+window.location.hash.substring(1), function(
			result) {
				$.each(result, function(i, field) {								
					$("#scacReq").text(field.scac);
					$("#trakNm").text(field.trackName);
					$("#icd").text(field.icdVersion);	
					$("#trainId").text(field.trainId);	
					$("#milepost").text(field.milePost);	
					$("#milepostPrfx").text(field.milePostPrefix);	
					$("#milepostSfx").text(field.milePostSuffix);	
					$("#currentPosScac").text(field.currentPosRRScac);	
					$("#ptcSubdiv").text(field.ptcSubDivDistId);	
					$("#currentPosUncty").text(field.currentPosUncertainity);	
					$("#currentPos").text(field.currentPosition);	
					$("#testTmStmp").text(field.testTimeStamp);	
					
					if(field.testStatus == "1"){
						$("#testStatus").text("Pass");	
					}else if(field.testStatus == "2") {
						$("#testStatus").text("fail");	
					}
					
					$("#empId").text(field.empId);
					
					if(field.locoStateSummary == "1"){
						$("#locStateSummary").text("Controlling");
					}else if(field.locoStateSummary == "2") {
						$("#locStateSummary").text("Non-controlling");
					}
					
					$("#onBoardSWVer").text(field.onBoardSwVersion);	
				});
	});
}


function closeDepartureTest() {
	$("#submitButton").click(function(){
		window.location.href = "./trainAtGlance_Report.html";
    }
    );
}

function gotoDashBoard() {
	window.location.href = "./dashboard.html";
}