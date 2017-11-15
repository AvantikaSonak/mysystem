
function getTrainListBySCAC() {
	var trainList = [
	         {
	             "scac": "ABCD",
	             "trainID": "TR101",
	             "requestID": 6
	         },
	         {
	             "scac": "ABCDE",
	             "trainID": "TR102",
	             "requestID": 6
	         }
	     ];
	if($("#scac").val() != '' && $("#clearanceNumberLength").val() != '' && $("#clearanceNumber").val() != '') {
		$.each(trainList, function(i, ele) {	
			$("#trainListResult").css('display','block');
			$("#resultTrainTable").append("<tr id="+ trainList[i].trainID +"><td>" + trainList[i].scac + "</td><td>" + trainList[i].trainID + "</td></tr>");
		});
	} 
}


function getTrainIdDetails() {
	
	/*var trainList = [
		    	         {
		    	             "scac": "ABCD",
		    	             "reasonForSending": "Not Used",
		    	             "clearanceNumber": "6",
		    	             "trainId": "TR101",
		    	             "employeeIdentifier": "EMP001",
		    	             "firstName": "Ashish",
		    	             "middleInitial": "M",
		    	             "lastName": "Mahadar",
		    	             "onboardSoftVersion": "001",
		    	             "commonConfigVersion": "001",
		    	             "railroadSpecificConfigFileVersion": "001",
		    	         }
	    	        ];
	
	$.each(trainList, function(i, field) {
		$("#railroadscac").val(field.scac).prop("readonly",true);
		
		
		$("#sendingReason").val(field.reasonForSending).prop("readonly",true);
		$("#clearanceNumber").val(field.clearanceNumber).prop("readonly",true);
		$("#trainId").val(field.trainId).prop("readonly",true);
		$("#employeeIdentifier").val(field.employeeIdentifier).prop("readonly",true);
		$("#employeeFirstName").val(field.firstName).prop("readonly",true);
		
		$("#employeeFirstName").val(field.firstName).prop("readonly",true);
		$("#employeeMiddleIntial").val(field.middleInitial).prop("readonly",true);
		$("#employeeLastName").val(field.lastName).prop("readonly",true);
		$("#onboardSoftwareVersion").val(field.onboardSoftVersion).prop("readonly",true);
		$("#configurationFilesetVersion").val(field.commonConfigVersion).prop("readonly",true);
		$("#railroadSpecificConfigurationFileVersion").val(field.railroadSpecificConfigFileVersion).prop("readonly",true);
	});*/
	
	/*$("#resultTrainTable tbody").on('click','tr td.details-control', function () {
		var tr = $(this).closest('tr');
        var row = dt.row( tr );
		console.log(row);
	});*/
}




