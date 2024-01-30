// 1. Write a script to greet your website visitor using JS alert box. (Welcome to Our Website)
alert("Welcome to Our Website");
document.write("Question 1")

// 2. Write a script to display message on your web page. (Error! Please Enter a valid password)
alert("<p>Error! Please Enter a valid password</p>");


// 3. Write a script to display message on your web page: (Hint : Use line break)
alert("Hint : Use line break");

// 4. Write a script to display messages in sequence (3 Alerts)
alert("Alert 1!");
alert("Alert 2!");
alert("Alert 3!");

// 5. Make use of alerts in your new/existing HTML & CSS project.

// 6. Practice placement of element in following sections of your project in 
// exercise 5: 
// a. Head 
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

//7. Declare a variable called username.
var username;

// 8. Declare a variable called myName & assign to it a string that represents 
//your Full Name.
var myName  = "Wasif Hassan Niazi";

// 9. Write script to 
// a) Declare a JS variable, titled message. 
//  b) Assign “Hello World” to variable message 
// c) Display the message in alert box.
var message="Hello World";
alert(message);

// 10.Write a script to save student’s bio data in JS variables and show the data in 
//alert boxes.
var stdName = 'Imran Khan';
var stdAge = 20;
var stdDept= 'Computer Science';
var stdGrade='A+';
alert('Student Name is ' +stdName );
alert('Student Age is ' +stdAge );
alert('Department is ' +stdDept );
alert('Student Grade is' +stdGrade);

// 11.Declare a variable called email and assign to it a string that represents your 
// Email Address(e.g. example@example.com). Show the blow mentioned 
// message in an alert box.(Hint: use string concatenation)
var email ="wasif.hn97@gmail.com" ;

//12.Write a script to display this in browser through JS.
alert("My email address is: "+email+".");

//13.Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(str);

//14.Declare a variable called age & assign to it your age. Show your age in an 
//alert box.
var age = 24;
alert("I am " +age + " years old");

//15.Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
//Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitCount = 0;
visitCount++;
alert("You have visited this site " + visitCount + " times");
alert("You have visited this site " + visitCount + " times");


// 16.Declare a variable called birthYear & assign to it your birth year. Show the 
// following message in your browser:
var birthYear = 1998
alert(birthYear)
document.write("I was born in: "  + birthYear )

// 17.A visitor visits an online clothing store www.xyzClothing.com . Write a script 
// to store in variables the following information: a. Visitor’s name b. Product 
// title c. Quantity i.e. how many products a visitor wants to order Show the 
// following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ 
// Clothing store”.

var visitorName = prompt("Enter your name here: ");
var productTitle = prompt("What do you want to buy? ");
var quantity = prompt("How much do you want to buy?");

document.write("<h1>"+visitorName+" ordered "+quantity+" "+productTitle+"(s) on XYZ Clothing Store</h1>")


// 18.Declare 3 variables in one statement.
// 21.Write a program that take two numbers & add them in a new variable. 
// Show the result in your browser.
var num1=+prompt("Please enter first number: ")
var num2=+prompt("Please enter second number: ")
var add =  (num1+num2);
alert("The sum of addition is: " + add );

// 22.Repeat task21 for subtraction, multiplication, division & modulus.
var subtract = (num1 - num2);
alert("The value after sub is: "  + subtract);
var multiply = (num1 * num2);
alert("The value after mult is :" + multiply);
var divide = (num1 / num2);
alert ("The value after div is :"+divide);
var modulus = (num1 % num2);
alert("The remainder after mod is :" + modulus);

// 23.Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable 
// declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after 
// increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value after addition 
// is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after 
// decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”.
var variable =  5;
alert("Initial Value: "+variable) ;
variable++;
alert("Value After Incrementation Is: "+variable) ;
variable +=7;
alert("Value After Adding 7 To The Variable Is: "+variable) ;
--variable;
alert("Value After Decrementation Is: "+variable) ;

if(variable%3 == 0){
    alert("The Remainder Is: 0");
    }

// 24.Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a 
// variable & calculate the cost of buying 5 tickets to a movie.
var ticketCost = 600;
var noOfTickets = 5;
var totalCost = ticketCost * noOfTickets;
alert("The cost of 5 Movie tickets is " +totalCost+ "PKR.");

// 25.Write a script to display multiplication table of any number in your browser.
