function componentConfigReport() {	
	var locoId = window.location.hash.substring(1);
	$.getJSON(baseUrl+"service/onboardcompconfiglist/"+locoId, function(
			result) {		
				$.each(result, function(i, field) {
					$("#scac").text(field.scac);					
					
					if(field.reason == "1") {
						$("#reason").text("Unsolicited");
					} else if(field.reason == "1") {
						$("#reason").text("Solicited by a 01088 message");
					}					
					$("#icd").text(field.icd);
					$("#vendorCode").text(field.vendorcode);
					$("#systemCode").text(field.systemcode);
					$("#icdVersion").text(field.icdVersion);
					componentReqList(field.comprequestlist);
					
				});						
	});
}


function componentReqList(field) {
	$.each(field, function(i, details) {
		console.log(field[i].numofconf);
		var rowspan = field[i].numofconf;
		
		$("#componentDetails").append("<br><tr style=border-style:hidden;><td colspan=2 align='\"center'\">" + "<i >"+ "  Component : "+
				field[i].component+"</td></tr>" );	
		$("#componentDetails").append("<tr><td>"+"Configuration Item Code"+"</td>"+
				"<td>"+"Configuration Description"+"</td></tr>");
		componentDetails(field[i].confrequestlist);
	});	
}

function componentDetails(details) {
	$.each(details, function(i, result) {		
		$("#componentDetails").append("<tr><td size='width:50%;'>"+" "+details[i].confitemcode+"</td>"+
				"<td>"+""+details[i].confitemtext+"</td></tr>");		
	});
}


function backToReport() {
	$("#backButton").click(function(){
		history.back(-1);
			
    }
    );
}

function gotoDashBoard() {
	window.location.href = "./dashboard.html";
}
