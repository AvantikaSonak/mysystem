function showTrainAtGlance() {	
$.ajax({
  		  url: "http://10.53.17.48:53905/CIBOSSServices//service/trainsatglancereport/",
  		  type: "get", 
  		  data: { 	},
  		  success: function(response) {
  		   			console.log(JSON.stringify(response));
  		   			var trainAtGlance = response;
  		   			var i=0;
	  		   		$.each(trainAtGlance, function(i, ele) {	
	  					$("#trainAtGlanceTable").append("<tr><td>" + i + "</td><td>" + trainAtGlance[i].dateAndTime + "</td><td>" + trainAtGlance[i].trainId + "</td><td>" + trainAtGlance[i].locoId + "</td><td>" + trainAtGlance[i].crew + "</td><td>" + trainAtGlance[i].details + "</td></tr>");
	  				});
  		  		},
  		  error: function(xhr) {
  		    	console.log(xhr);
  		  }
		});
}

function showConsist() {
		$.ajax({
	  		  url: "http://10.53.17.48:53905/CIBOSSServices//service/trainconsistreport/",
	  		  type: "get", 
	  		  data: { 	},
	  		  success: function(response) {
	  		   			console.log(JSON.stringify(response));
	  		   			var trainConsist = response;
  		   				var i=0;
	  		   			$.each(trainConsist, function(i, ele) {	
	  						$("#trainConsistTable").append("<tr><td>" + i + "</td><td>" + trainConsist[i].dateAndTime + "</td><td>" + trainConsist[i].trainId + "</td><td>" + trainConsist[i].locoId + "</td><td>" + trainConsist[i].crew + "</td><td>" + trainConsist[i].clearanceNumber + "</td><td>" + trainConsist[i].lastModified + "</td></tr>");
	  					});
	  		  		},
	  		  error: function(xhr) {
	  		    	console.log(xhr);
	  		  }
			});
		}		
	
	function showReports() {	
			tabcontent = document.getElementsByClassName("tabcontent");
			for (i = 0; i < tabcontent.length; i++) {
		        tabcontent[i].style.display = "none";
		    }
			document.getElementById("trainAtGlanceShow").style.display = "block";
			$(".tablinks").click(function (event) {
				var i, tabcontent, tablinks;
				tabcontent = document.getElementsByClassName("tabcontent");
				
				for (i = 0; i < tabcontent.length; i++) {
			        tabcontent[i].style.display = "none";
			    }
				
				tablinks = document.getElementsByClassName("tablinks");
				for (i = 0; i < tablinks.length; i++) {
			        tablinks[i].className = tablinks[i].className.replace("highlight", "");
			    }
				
				document.getElementById($(this).val()+"Show").style.display = "block";
				event.currentTarget.className += " highlight";
			});
	}