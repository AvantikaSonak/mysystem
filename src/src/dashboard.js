function barChart() {
      new Chart(document.getElementById("bar-chart"), {
          type: 'bar',
          data: {
            labels: ["11-25-2017", "11-24-2017", "11-23-2017", "11-22-2017", "11-21-2017"],
            datasets: [
              {
                label: "locoTraffic (thousands)",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                data: [40,25,17,12,20]
              }
            ]
          },
          options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Locomotives connecting to CI BOS in last 5 days'
            },
            scales: {
              xAxes: [{
                      display: true,
                      scaleLabel: {
                          display: true,
                          labelString: 'mm-dd-yyyy'
                      }
                  }],
              yAxes: [{
                      display: true,
                      ticks: {
                          beginAtZero: true,
                          steps: 10,
                          stepValue: 5,
                          max: 100
                      }
                  }]
          }
          }
      });
}


function pieChart() {
      new Chart(document.getElementById("pie-chart"), {
          type: 'pie',
          data: {
            labels: ["Success","Failure"],
            datasets: [{
              label:"locoTraffic",
              backgroundColor: ["#3cba9f","#c45850"],
              data: [30,2]
            }]
          },
          options: {
            title: {
              display: true,
              text: 'Total Authentication Requests Recived by CI BOS in last 24 hours'
            }
          }
      });
}



function trainsAtAGlanceTab() {	
	$.ajax({
		  url: baseUrl+"service/trainsatglancereport/",
		  type: "get", 
		  data: { 	},
		  success: function(response) {
		   			console.log(JSON.stringify(response));
		   			var trainAtGlance = response;
		   			
		   			var i=0;
	  		   		$.each(trainAtGlance, function(i, ele) {	
	  		   			var trainIDDD = trainAtGlance[i].trainId;	  
	  		   			var details = trainAtGlance[i].details;
	  		   			var crewName = trainAtGlance[i].crew;
	  		   			var locoId = trainAtGlance[i].locoId;
	  		   			var swComp = softwareCompatibleFunction(trainAtGlance[i].softwarecompatible);
	  					$("#trainAtGlanceTable").append("<tr><td>" + (i+1) + "</td><td>" +
	  							trainAtGlance[i].dateAndTime + "</td><td>" + 
	  							'<a href=# onClick="openConsistGlance(\''+trainIDDD+'\''+'\,'+'\''+crewName+'\');">'+
	  							trainAtGlance[i].trainId+"<a>" + "</td><td>" +
	  							trainAtGlance[i].locoId + "</td><td>" +
	  							'<a href=# onClick="onBoardConfig(\''+locoId+'\');">'+
	  							swComp+"</td><td>" +  
	  							trainAtGlance[i].crew.replace(/\_/g, ' ') + "</td><td>" + 
	  							'<a href=# onClick="openDeparture(\''+trainIDDD+'\');">'+"+"
	  							+"</a>"+ "</td></tr>");
	  				});
		  		},
		  error: function(xhr) {
		    	console.log(xhr);
		  }
		});
	
}


function trainsAtAGlanceLoad() {
	setInterval(trainsAtAGlanceTab(),2000);
}

function consistTab() {
	$.ajax({
		  url: baseUrl+"service/trainconsistreport/",
		  type: "get", 
		  data: { 	},
		  success: function(response) {
		   			console.log(JSON.stringify(response));
		   			var trainConsist = response;
	   				var i=0;
		   			$.each(trainConsist, function(i, ele) {	
		   			var trainIDDD = trainConsist[i].trainId;	
		   		    var crewName = trainConsist[i].crew;
						$("#trainConsistTable").append("<tr><td>" + (i+1) + "</td><td>" + 
								trainConsist[i].dateAndTime + "</td><td>" + 
								'<a href=# onClick="openConsist(\''+trainIDDD+'\''+'\,'+'\''+crewName+'\');">'+
								trainConsist[i].trainId+"<a>" + "</td><td>" +	  	
								trainConsist[i].locoId + "</td><td>" + 
								trainConsist[i].crew.replace(/\_/g, ' ') + "</td><td>" + 
								trainConsist[i].clearanceNumber + "</td><td>" + 
								trainConsist[i].lastModified + "</td></tr>");
					});
		  		},
		  error: function(xhr) {
		    	console.log(xhr);
		  }
		});
	
}


function crewAuthTab() {
	$.ajax({
		  url: baseUrl+"service/crewauthreport/",
		  type: "get", 
		  data: { 	},
		  success: function(response) {
		   		//	console.log(JSON.stringify(response));
		   			var crewData = response;
	   				var i=0;
		   			$.each(crewData, function(i, ele) {	
		   			var empId = crewData[i].empid;	
		   			var reasonForAuth = reasonForAuthFunction(crewData[i].reasonforAuth); 
		   			var status = statusFunction(crewData[i].status);
						$("#crewAuthTable").append("<tr><td>" + (i+1) + "</td><td>" + 
								crewData[i].dateAndTime + "</td><td>" + 
								'<a href=# onClick="openEmpVerification(\''+empId+'\');">'+
								crewData[i].crew.replace(/\_/g, ' ') +"<a>" + "</td><td>" +
								reasonForAuth + "</td><td>" +
								status + "</td><td>" +
								crewData[i].trainId + "</td><td>" + 
								crewData[i].locoId + "</td><td>"+
								crewData[i].onboardSerVersion + "</td></tr>");
					});
		  		},
		  error: function(xhr) {
		    	console.log(xhr);
		  }
		});
}



// Other functions
function openConsist(trainId,crewName) {
	
	window.location.href = './trainConsist.html' + '#' + trainId+'#'+crewName+'#consist';
}

function openConsistGlance(trainId,crewName) {
	//window.location.href = './glance_trainConsist.html' + '#' + trainId+'#'+crewName+'#glance';
	window.location.href = './trainConsist.html' + '#' + trainId+'#'+crewName+'#glance';
}


function openDeparture(trainId) {
	window.location.href = './locomotiveDepartureReport.html' + '#' + trainId;
}


function openEmpVerification(eId) {
	window.location.href = './employeeRequest.html' + '#' + eId;
}

function reasonForAuthFunction(reasonForAuth) {
	if(reasonForAuth == "1") {
			return "Initialization request"; 
		} else if (reasonForAuth == "2") {
			return "Departure test request";
		}
}

function gotoDashBoard() {
	window.location.href = "./dashboard.html";
}

function gotoTrainAtGlance() {
	window.location.href = "./trainAtGlance_Report.html";
}

function gotoConsist() {
	window.location.href = "./consist_Report.html";
}

function gotoCrewAuth() {
	window.location.href = "./crewAuth_Report.html";
}

function softwareCompatibleFunction(compatibilityCode) {
	if(compatibilityCode == "1") {
			return "Update Scheduled"; 
		} else if (compatibilityCode == "2") {
			return "Update Required";
		} else if (compatibilityCode == "0") {
			return "Compatible";
		}
}

function statusFunction(status) {
	if(status == "1") {
			return "Employee Verified"; 
		} else if (status == "2") {
			return "Employee not Verified";
		}
}

function onBoardConfig(locoId) {
	window.location.href = './onBoardComponentConfigReport.html' + '#' + locoId;
} 

function softwareCompatibleFunction(compatibilityCode) {
	if(compatibilityCode == "1") {
			return "Update Scheduled"; 
		} else if (compatibilityCode == "2") {
			return "Update Required";
		} else if (compatibilityCode == "0") {
			return "Compatible";
		}
} 


function firstDashboard() {
		var init = window.location.hash.split('#');
		if(init[1] == "init") {
			$('#wcmsg').show();
		}
} 

