
function postEmployeeVerificationData() {
	var empId = window.location.hash.substring(1);
	$.getJSON("http://10.53.17.48:53905/CIBOSSServices//service/user/"+empId, function(
			result) {
		  $.each(result, function(i, field) {	
			  $("#empIdReq").val(field.userid);
			  $("#scacReq").val(field.scac);	
			  $("#empPin").val(field.pin);	
			  if(field.reason == "1") {
			  $("#reason").val("Initialization request");
			  } else if(field.reason == "2") {
				  $("#reason").val("Departure test request");  
			  }
			  $("#icd").val(field.version);	
		  });
		});	
}



function displayOnSubmit() {
	
	$("#submitButton").click(function() {
		 $.getJSON("http://10.53.17.48:53905/CIBOSSServices//service/emplist/"+window.location.hash.substring(1), function(
					result,jqXHR) {		
			               $.each(result, function(i, field) {								
									$("#scac").text(field.scac);								
									if(field.varificationstatus == "2") {
										$("#empDtlFlds").hide();
										$("#empDtlVal").hide();
										$("#status").text(statusNotVerified);
									}
									else{
									$("#status").text(statusVerified);		
									}
									$("#reasonText").text(field.reason);
									$("#empId").text(field.empid);
									$("#firstName").text(field.firstname);
									$("#midName").text(field.middlename);
									$("#lastName").text(field.lastname);
								});		
					});
	$("#empConfirmation").show();
	$("#submitButton").hide();
	});
}





function getEmployeeVerificationResponse() {	
	 $("#submitButton").click(function(){
		 var empId = window.location.hash.substring(1);
				 window.location.href = "./employeeResponse.html"+ '#' +empId;	
	    });
}


function closeEmpVer() {
	$("#backButton").click(function(){
        //window.location.href = "./dashboard.html";
		 window.history.back();
    }
    );
}

var statusVerified="Employee Info verified";
var statusNotVerified="Employee Info not verified";
function verifyEmployeeResponse() {
	 $.getJSON("http://10.53.17.48:53905/CIBOSSServices//service/emplist/"+window.location.hash.substring(1), function(
				result,jqXHR) {		
		               $.each(result, function(i, field) {								
								$("#scac").text(field.scac);								
								if(field.varificationstatus == "2") {
									$("#empDtlFlds").hide();
									$("#empDtlVal").hide();
									$("#status").text(statusNotVerified);
								}
								else{
								$("#status").text(statusVerified);		
								}
								$("#reasonText").text(field.reason);
								$("#empId").text(field.empid);
								$("#firstName").text(field.firstname);
								$("#midName").text(field.middlename);
								$("#lastName").text(field.lastname);
							});		
				});
			}

function gotoDashBoard() {
	window.location.href = "./dashboard.html";
}
