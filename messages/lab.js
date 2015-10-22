	
	var message = new XMLHttpRequest();

	function parse(){
		message.open("GET", "data.json", true)
		message.send(null);
		message.onreadystatechange = function(){
			if(message.readyState == 4){
				data = message.responseText;
				parsedData = JSON.parse(data);
				elem = document.getElementById("messages");
				for (count = 0; count < parsedData.length; count++){
           			elem.innerHTML += "<p>" + parsedData[count]["content"] + " - " 
          			 + parsedData[count]["username"] + "</p>";
				}
			}
		}
	}