function departureTestReport1() {
	 $("#submitButton").click(function(){
	    	var scacReq= $("#scacReq").val();
	    	var icd= $("#icd").val();
	    	var trainId= $("#trainId").val();
	    	var milepost= $("#milepost").val();
	    	var milepostPrfx= $("#milepostPrfx").val();
	    	
	    	var milepostSfx= $("#milepostSfx").val();
	    	var trakNm= $("#trakNm").val();
	    	var currentPosScac= $("#currentPosScac").val();
	    	var ptcSubdiv= $("#ptcSubdiv").val();
	    	var currentPosUncty= $("#currentPosUncty").val();
	    	
	    	var currentPos= $("#currentPos").val();
	    	var testTmStmp= $("#testTmStmp").val();
	    	var testStatus= $("#testStatus").val();
	    	var empId= $("#empId").val();
	    	var locStateSummary= $("#locStateSummary").val();
	    	var onBoardSWVer= $("#onBoardSWVer").val();
	    	
	    	var postVar = JSON.stringify({scacReq:scacReq,icd:icd,trainId:trainId,milepost:milepost,milepostPrfx:milepostPrfx,trakNm:trakNm,currentPosScac:currentPosScac,
	    		ptcSubdiv:ptcSubdiv,currentPosUncty:currentPosUncty,currentPos:currentPos,testTmStmp:testTmStmp,testStatus:testStatus,
	    		empId:empId,locStateSummary:locStateSummary,onBoardSWVer:onBoardSWVer});
	        $.post("<URL>",postVar);  
	        //alert('post'+postVar);
	        window.location.href = "./departureTestReportConfirmation.html";
	        
	    }
	    ); 
}


function departureTestReport() {
	
	$.getJSON("http://10.53.17.48:53905/CIBOSSServices//service/departuretest/"+window.location.hash.substring(1), function(
			result) {
				$.each(result, function(i, field) {								
					$("#scacReq").val(field.scac);
					$("#trakNm").val(field.trackName);
					$("#icd").val(field.icdVersion);	
					$("#trainId").val(field.trainId);	
					$("#milepost").val(field.milePost);	
					$("#milepostPrfx").val(field.milePostPrefix);	
					$("#milepostSfx").val(field.milePostSuffix);	
					$("#currentPosScac").val(field.currentPosRRScac);	
					$("#ptcSubdiv").val(field.ptcSubDivDistId);	
					$("#currentPosUncty").val(field.currentPosUncertainity);	
					$("#currentPos").val(field.currentPosition);	
					$("#testTmStmp").val(field.testTimeStamp);	
					$("#testStatus").val(field.testStatus);	
					$("#empId").val(field.empId);	
					$("#locStateSummary").val(field.locoStateSummary);	
					$("#onBoardSWVer").val(field.onBoardSwVersion);	
				});
	});
}


function closeDepartureTest() {
	$("#submitButton").click(function(){
        window.location.href = "./dashboard.html";
    }
    );
}

function departureConfirmation() {
	$.getJSON("json/departure_test_report.json", function(
			result) {
				$.each(result, function(i, field) {								
					$("#scacResp").text(field.scac);					
					$("#testLoc").text(field.location);					
				});

	});
}