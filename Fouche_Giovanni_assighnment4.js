/*STRING
1. Does a string follow a 123-456-7890 pattern like a phone number?
*/
		function checkNum(phone){
		var number = /^(\d{3})[-](\d{3})[-](\d{4})$/; // regEx verifies the format matches.
			if(!phone.match(number)){
				console.log("Your phone number is not valid."); //if it doesn't match, it will print false.
				return false;
				}else { 
					if (phone.match(number)) {
					console.log("Your phone number is valid.");//if it does match, it prints true.
				return true;
				}
				}
				};
				checkNum("123-456-7890");
                                
 /*STRING
2. Is the string a URL? (Does it start with http: or https:?)
*/
		function checkUrl(url){
		var sites = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
		// regEx verifies the if the string is a http: or https:
			if(url.match(sites)){
				goodUrl = "Your url is valid."; //if it does have http: or https: in the url, it will print true.
				return goodUrl;
				}else { 
					badUrl = "Your url is not valid.";//if it doesn't have http: or https: in the url, it prints false.
				return badUrl;
				}
			};
				var validUrl = checkUrl("https://www.facebook.com");	
					console.log(validUrl);	