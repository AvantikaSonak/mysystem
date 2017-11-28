function getTrainSubDIvisionList() {
	$("#subDivisionTrainListResult").css('display','block');
	var align = "center";
	var trainSubDivisionList = [
	         {
	             "scac": "ABCA",
	             "clearanceNumber": "CN101",
	             "trainID":"TR001",
	             "requestID": 6
	         },
	         {
	             "scac": "ABCB",
	             "clearanceNumber": "CN102",
	             "trainID": "TR102",
	             "requestID": 6
	         },
	         {
	             "scac": "ABCC",
	             "clearanceNumber": "CN102",
	             "trainID": "TR102",
	             "requestID": 6
	         },
	         {
	             "scac": "ABCD",
	             "clearanceNumber": "CN102",
	             "trainID": "TR102",
	             "requestID": 6
	         },
	         {
	             "scac": "ABCE",
	             "clearanceNumber": "CN102",
	             "trainID": "TR102",
	             "requestID": 6
	         }
	     ];
		if($("#scac").val() != "" && $("#clearanceNumber").val() != "" && $("#trainId").val() != "" && $("#subdivisionId").val() !="") {
			$.each(trainSubDivisionList, function(i, ele) {	
				$("#trainSubDivisionContent").append("<tr id="+ trainSubDivisionList[i].trainID +"><td align=align>" + trainSubDivisionList[i].scac + "</td><td align=align>" + trainSubDivisionList[i].clearanceNumber + "</td><td align=align>" + trainSubDivisionList[i].trainID + "</td></tr>");
			});
		}	
}



var notUsed = 0;
var acknowledged = 1;
var reserved = 2;
var otherReasons = 3;

function confirmationTrainSubdivision() {
      var trainSubdivisionConfirmation = [
                     {
                         "scac": "ABCD",
                         "ptcConfirmation": "Not Used",
                         "acknowledgementIndication": 3,
                     }
              ];
      
      $.each(trainSubdivisionConfirmation, function(i, field) {
            $("#trainSubdivisionScac").val(field.scac).prop("readonly",true);
            $("#ptcConfirmation").val(field.ptcConfirmation).prop("readonly",true);
            if(field.acknowledgementIndication == notUsed) {
                  $("#acknowledgementIndication").val("Not used").prop("readonly",true);
            } else if (field.acknowledgementIndication == acknowledged) {
                  $("#acknowledgementIndication").val("Acknowledged").prop("readonly",true);
            } else if (field.acknowledgementIndication == reserved) {
                  $("#acknowledgementIndication").val("Reserved").prop("readonly",true);
            } else  {
                  $("#acknowledgementIndication").val("Other reasons").prop("readonly",true);
            }
            
      });
}


