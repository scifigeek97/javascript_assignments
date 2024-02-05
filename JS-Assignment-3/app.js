// //Question1
// document.write("<h3> Question1 </h3>")
// var cityName =  prompt("Enter the name of your current city?").toLowerCase();
// if (cityName == "karachi" )
// {
//     document.write ("You are in Karachi, Welcome to city of lights!");
// }
// else  {
//     document.write ("Sorry! You are not in Karachi");
// }
// //Question2
// document.write("<br><br><h3> Question2 </h3>")
// var gender =  prompt("What is your Gender? Please type M or F").toUpperCase();
// if(gender=="M")
// {
//     document.write("Good Morning Sir");
// }
// else if(gender=="F")
// {
//     document.write("Good Morning Ma'am");
// }

// //Question3
// document.write("<br><br><h3> Question3 </h3>")
// var fuelLevel =  +prompt("How much fuel do you have left in your car tank?");
// if (fuelLevel<0.25)
// {
//     document.write("Please refill the fuel in your car")
// }
// else {
//     document.write("Your fuel level is "+fuelLevel);
// }

// //Question4
// document.write("<br><br><h3> Question4 </h3>")

// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// document.write("Alert message displayed for a")
// }
// //b
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// document.write("Alert message displayed for b")
// }
// //c
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true");
// }
// if(c === 14){ 
//     alert("condition 4 is true"); 
//     }
//     //d
//     var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// }
// //e
// if (true){ 
//     alert("True"); 
//    } if (false){ 
//    alert("False"); 
//    }
// //f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }
// //Question5
// document.write("<br><br><h3> Question 5</h3>")
// var secretNum = 4;
// var userNum = +prompt("Enter a number to take a guess (choose 1-10)");
//     if (userNum  === secretNum)
//     {  
//     document.write("Bingo! Correct answer"); 
// }
//     else if (userNum + 1 === secretNum  || userNum - 1 === secretNum ) 
//     {
//         document.write("Close enough to the correct answer");
//     }

// //Question6
// document.write("<br><br><h3> Question 6</h3>")
// var givenNumber =+prompt("Please enter a number to check if divisible by 3: ");
// if (givenNumber % 3 == 0){
//     document.write ("<p>" + givenNumber + " is divisible by 3.</p>");
// }

// //Question7
// document.write("<br><br><h3> Question 7</h3>")
// var evenOdd =  +prompt ("Enter a number here to check  whether it's odd or even.");
// if(evenOdd%2==0)
// {
//     document.write("The number is Even");
// }
// else{
//     document.write("The number is Odd");
// }

// //Question8
// document.write("<br><br><h3> Question 8</h3>")
// var temprature = +prompt("Enter Temprature in celcius to know the weather conditions outside: ")
// if(temprature > 40){
// document.write("It is too hot outside")
// }
// else if(temprature > 30){
//     document.write("The Weather today is Normal")
// }
// else if(temprature > 20){
//     document.write("Today’s Weather is cool.")
// }
// else if(temprature > 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }

//Question9
document.write("<br><br><h3> Question 9</h3>")

var firstNum = +prompt("Enter first number ")

var secondNum = +prompt("Enter Second number ")

var operation =  prompt("What do you want to perform?  (+, -, *, /, %)" )
if(operation === "+"){
    result =  firstNum+secondNum;
    document.write("Result : " +result);
    }else if (operation === "-"){
        result=firstNum-secondNum;
        document.write("Result : " +result);
    }else if (operation === "*"){
        result = firstNum*secondNum;
        document.write("Result : " +result)
    }else if (operation === "/"){
        result = firstNum/secondNum;
        document.write("Result : " +result)}
    else if (operation === "%") {
            result = firstNum % secondNum;
            document.write("Remainder of Division :" +result)
        }