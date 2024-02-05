// Question 1
document.write("<h2>Q 1</h2> <br> ");

var num = 10;
document.write("Result:");

document.write("<br>");

document.write("\n The value of a is:  " + num +"<br>");

document.write("................................."+ "<br>");

document.write("The value of ++a is:  " + ++num +"<br>");
document.write("Now the value of a is:"+ num +"<br> <br> <br>");

document.write("\n The value of a++ is:  " + num++ +"<br>");
document.write("Now the value of a is:"+ num +"<br> <br> <br>");

document.write("\n The value of --a is:  " + --num +"<br>");
document.write("Now the value of a is:"+ num +"<br> <br> <br>");

document.write("\n The value of a-- is:  " + num-- +"<br>");
document.write("Now the value of a is:"+ num +"<br> <br> <br>");

//Question2 
document.write("<h2>Q 2</h2> <br> ");
 var a = 2
 var b = 1
 document.write("a is " + a+ "<br><br>");
 document.write("b is " + b+ "<br><br>");

 var result =  --a;
 
 document.write ("\n <b>Result : </b>"+result + "<br><br>");

 document.write("a is " + a+ "<br><br>");
 document.write("b is " + b+ "<br><br>");
 var result =  --a - --b;
 document.write ("\n <b>Result : </b>"+result + "<br><br>");

 document.write("a is " + a+ "<br><br>");
 document.write("b is " + b+ "<br><br>");
 var result =  --a - --b + ++b;
 document.write ("\n <b>Result : </b>"+result + "<br><br>");
 //
 document.write("a is " + a+ "<br><br>");
 document.write("b is " + b+ "<br><br>");
 var result =  --a - --b + ++b +b--;
 document.write ("\n <b>Result : </b> "+result + "<br><br>");

//  //Question3
// document.write("<h2>Q 3</h2> <br> ");
// var name = prompt("Enter your Name here please: ")
// document.write("<h2> Hello </h2> " + name +"<h2>! Welcome to the website</h2>");

//Question 4
document.write("<h2>Q 4</h2> <br> ");
//  Write a program to take input a number from user & display its 
//multiplication table on your browser. If user does not enter a new 
//number, multiplication table of 5 should be displayed by default.

var x=prompt("Please Enter a number to print its table",5);
for(i=1; i<=10 ; i++) {
    document.write(x+" * "+i+"="+(x*i)+"<br>");
}

//Question 5
document.write("<h2>Q 5</h2> <br> ");
var subj1 =  prompt("Enter the name of subject 1", "English");
var subj2 =  prompt("Enter the name of subject 2", "Maths");
var subj3 = prompt("Enter the name of subject 3", "Urdu");

var totalMarks = 100;
var obtainedMarks1 = +prompt("How many Marks did you get in English?");
var obtainedMarks2 = +prompt("How many Marks did you get in Maths?");
var obtainedMarks3 = +prompt("How many Marks did you get in Urdu?");

document.write("<table>")
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th> <th>Percentage</th> </tr>");
document.write("<tr><td>"+subj1+"</td><td>"+ totalMarks+"</td><td>"+obtainedMarks1+"</td>< td>"+(obtainedMarks1/totalMarks)*100+"% </td> </tr>" );
document.write("<tr><td>"+subj2+"</td><td>"+ totalMarks+"</td><td>"+obtainedMarks2+"</td>< td>"+(obtainedMarks2/totalMarks)*100+"% </td> </tr>" );
document.write("<tr><td>"+subj3+"</td><td>"+ totalMarks+"</td><td>"+obtainedMarks3+"</td>< td>"+(obtainedMarks3/totalMarks)*100+"% </td> </tr>" );
document.write("</table>")