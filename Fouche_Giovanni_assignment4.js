/*STRING
 Does a string follow a 123-456-7890 pattern like a phone number?
*/
		function checkNum(phone){
		var number = /^(\d{3})[-](\d{3})[-](\d{4})$/; // regEx verifies the format matches.
			if(!phone.match(number)){
				console.log("invalid phone number"); //if it doesn't match, it will print false.
				return false;
				}else { 
					if (phone.match(number)) {
					console.log("valid phone number");//if it does match, it prints true.
				return true;
				}
				}
				};
				checkNum("123-456-7890");
                                
  
                                
 /*STRING
 Is the string a URL? (Does it start with http: or https:?)
*/
		function checkUrl(url){
		var sites = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
		// regEx verifies if the string is a http: or https:
			if(url.match(sites)){
				goodUrl = "valid url"; //if it does have http: or https: in the url, it will print true.
				return goodUrl;
				}else { 
					badUrl = "invalid url";//if it doesn't have http: or https: in the url, it prints false.
				return badUrl;
				}
			};
				var validUrl = checkUrl("https://www.facebook.com");	
					console.log(validUrl);
					
/*STRING
Title-case a string (split into words, then uppercase the first letter of each word).
*/

	var words = "testing the javascript title case code.";
	words = words.toLowerCase().replace(/\b[a-z]/g, //regular expression 
	function(letter) {
    return letter.toUpperCase();
	});
	console.log(words);
	

/*NUMBER
 Format a number to use a specific number of decimal places as for money: 2.1--->2.10.
*/
			function amount(total){
				var myCost = total.toFixed(2);
				return myCost;
				};
			console.log("$" + amount(2.1));
