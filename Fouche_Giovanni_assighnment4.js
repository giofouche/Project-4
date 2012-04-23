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
                                
 