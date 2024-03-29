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
			
/*NUMBER
Given a string version of a number such as "42", return the values as an actual Number, such as 42.
*/
	var num = "42",
		number = function(){
			aNum = parseInt(num);
		return num;
		}
	console.log("My number is " + number());
	
/*ARRAY
Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects:
	"a" + [{a:2}, {a:3}, {a:1}]
	--> [{a:1}, {a:2}, {a:3}].
	(array.sort)*/

			var aNum = [
				 {a:2},
				 {a:3}, 
				 {a:1},
			]
			aNum.sort(function(a,b){
			return a.a-b.a;
			})
			console.log(aNum);
			
			
/*Adding the remaning six problems past this point

String

Given a string that is a list of things separated by a given string, as well as another string separator, 
return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".*/

function separatedStrings () {
	var givenString = "First, Second, Third";
	var separatorToReplace = /,/;
	var newSeparator = givenString.replace(separatorToReplace, "/");

console.log(givenString + "," + " /" + newSeparator);

};
separatedStrings();

//Does a string follow an aaa@bbb.ccc pattern like an email address?

function emailAddress () {
	var email = "testemail@testemail.com"

if (email !== "aaa@bbb.ccc") {

	console.log("My email address is " + email + ".");

} else {

	console.log("I'm sorry, but I do not have an email address");
	}
};
emailAddress();

/* Number
  Fuzzy-match a number: is the number above or below a number within a certain percent?
*/

function fuzzyMath () {
	var myNumber = 25;
	var numAbove = 25*1.5;
	var numBelow = 25/2

console.log("50% above " + myNumber + " is " + numAbove + " and 50% below " + myNumber + " is " + numBelow + ".");

};
fuzzyMath();


/*Number
 Find the number of hours or days difference between two dates.
*/

function dayDifference () {
	var mins = 1000*60;
    var hours = mins*60;
    var days = hours*24;
	var firstDate = new Date ("07/14/1991");
	var secondDate = new Date ("05/24/2012");
	var difference = Math.round((secondDate - firstDate)/days)

console.log("The number of days difference between " + firstDate + " and " + secondDate + " is " + difference + ".");

};
dayDifference();


/*Array

Find the smallest value in an array that is greater than a given number*/

function numValues () {
	var myNumber = 5;
	var smallerNumber = Math.min(10, 15, 20);

console.log(smallerNumber + " is the smallest value in the array but greater than " + myNumber + ".");

};
numValues();


/*Array
 Find the total value of just the numbers in an array, even if some of the items are not numbers.*/

function arrayValues () {
	var mixedArray = [
		"String",
		1,
		2,
		"String2"
		];
	var newNumArray = mixedArray.slice(1,3);

console.log(newNumArray);

};
arrayValues();

