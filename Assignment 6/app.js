// Chap 21-25

// Task 1

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// var fullname = firstname+" "+lastname;
// alert("Hello! "+fullname)

// Task 2

// var fav_mob_mod = prompt("Enter your favorite mobile model");
// var str_length = fav_mob_mod.length;
// document.write("My favorite mobile is: ",fav_mob_mod,"<br/>")
// document.write("Length of string: ",str_length)

// Task 3

// var pak = "Pakistani";
// document.write("String: ",pak,"<br/>")
// document.write("Index of 'n': ",pak.indexOf('n'))

// Task 4

// var lstind = "Hello World";
// document.write("String: ",lstind,"<br/>")
// document.write("Last index of 'l': ",lstind.lastIndexOf('l'))

// Task 5

// var pak = "Pakistani";
// document.write("String: ",pak,"<br/>")
// document.write("Character at index 3: ",pak.charAt(3))

// Task 6

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Enter your last name");
// document.write("Hello! ",firstname.concat(' ',lastname))

// Task 7

// var hyd = "Hyderabad";
// document.write("String: ",hyd,"<br/>")
// var isl = hyd.replace("Hyder","Islam");
// document.write("After replacement: ",isl)

// Task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var message1 = message.replace(/and/g,"&")
// document.write("String: ",message,"<br/>")
// document.write("After replacement: ",message1)

// Task 9

// var str1 = "472";
// var type_str1 = typeof(str1)
// var str2 = Number(str1);
// var type_str2 = typeof(str2)

// document.write("Value: ",str1,"<br/>")
// document.write("Type: ",type_str1,"<br/>")
// document.write("Value: ",str2,"<br/>")
// document.write("Type: ",type_str2)

// Task 10

// var take_input = prompt("Enter a string to convert to uppercase");
// document.write("User input: ",take_input,"<br/>")
// document.write("Uppercase: ",take_input.toUpperCase())


// Task 11

// var take_input = prompt("Enter a string to convert to titlecase");
// var take_input1 = take_input.slice(0,1);
// var take_input2 = take_input1.toUpperCase()
// var take_input3 = take_input.slice(1,take_input.length);
// var take_input4 = take_input3.toLowerCase()
// var titlecase = take_input2+take_input4
// document.write("User input: ",take_input,"<br/>")
// document.write("Titlecase: ",titlecase)

// Task 12

// var num = 35.36;
// var str1 = num.toString().replace(".","")
// document.write("Number: ",num,"<br/>")
// document.write("Result: ",str1) 

// Task 13

// var username = prompt("Ënter your name");

// Task 14

// var A = ["cake","apple pie","cookie","chips","patties"]

// var userinput = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?")
// var userinput1 = userinput.toLowerCase();
// var matchFound = false;
// for(i=0;i<A.length;i++){
//     if(userinput1 === A[i]){
//         matchFound = true;
//         alert(userinput+" is availabe at index "+i+" in our bakery.");
//         break;
//     }
// }
// if(matchFound === false){
// alert("We are Sorry. "+userinput+" is not available in our bakery.");
// }

// Task 15

// var password = prompt("Enter password of your choice");
// var randnumber = Math.random();
// var randnumber1 = (randnumber * 10);
// var dicenumber = Math.ceil(randnumber1);
// if(password.length < 6 ) or ;if(password.slice(0,1) == typeof(Number)){
//     alert("Enter a valid password")
// }


// Task 16

// var university = "University of Karachi";
// var arr = university.split()
// for(var i in arr){
//     for(var j in arr[i]){
//         document.write(arr[i][j],"<br/>")
//     }
// }

// Task 17

// var user_input = prompt("Enter some string to display its last character")
// document.write("User input: ",user_input,"<br/>")
// document.write("Last character of input: ",user_input.charAt(user_input.length-1))



// Chap 26-30

// Task 1

// var posnumber = +prompt("Enter a positive number");
// var roundnumber = Math.round(posnumber);
// var floornumber = Math.floor(posnumber);
// var ceilnumber = Math.ceil(posnumber);
// if(posnumber <= 0){
//     alert("Invalid Entry! Please enter a positive number")
// }
// document.write("Number: ",posnumber,"<br/>")
// document.write("round off value: ",roundnumber,"<br/>")
// document.write("floor value: ",floornumber,"<br/>")
// document.write("ceil value: ",ceilnumber,"<br/>")

// Task 2

// var negnumber = +prompt("Enter a positive number");
// var roundnumber = Math.round(negnumber);
// var floornumber = Math.floor(negnumber);
// var ceilnumber = Math.ceil(negnumber);
// if(negnumber >= 0){
//     alert("Invalid Entry! Please enter a positive number")
// }
// document.write("Number: ",negnumber,"<br/>")
// document.write("round off value: ",roundnumber,"<br/>")
// document.write("floor value: ",floornumber,"<br/>")
// document.write("ceil value: ",ceilnumber,"<br/>")


// Task 3

// var absnumber = +prompt("Enter a number to display its absolute value");
// if(absnumber<0){
//     var absnumber1 = absnumber * -1;
//     document.write("The absolute value of ",absnumber," is ",absnumber1)
// }
// else if(absnumber>=0){
//     document.write("The absolute value of ",absnumber," is ",absnumber)
// }

// Task 4

// var randnumber = Math.random();
// var randnumber1 = (randnumber * 6);
// var dicenumber = Math.ceil(randnumber1);
// document.write("random dice value: ",dicenumber)

// Task 5

// var randnumber = Math.random();
// var randnumber1 = (randnumber * 2);
// var dicenumber = Math.ceil(randnumber1);
// if(dicenumber === 2){
// document.write(dicenumber,"<br/>")
// document.write("random coin value: Heads")
// }
// else if(dicenumber === 1){
// document.write(dicenumber,"<br/>")
// document.write("random coin value: Tails")
// }

// Task 6

// var randnumber = Math.random();
// var randnumber1 = (randnumber * 99);
// var dicenumber = Math.ceil(randnumber1);
// if(dicenumber === 1){
//     dicenumber = dicenumber + 1;
// }
// document.write("random number between 1 and 100: ",dicenumber)

// Task 7

// var userweight = parseFloat(prompt("Enter your weight in kilograms"));
// var userweight1 = userweight.toFixed(1);
// document.write("The weight of user is ",userweight1," kilograms")

// Task 8

// var secnumber = Math.random();
// var secnumber1 = (secnumber * 10) + 1;
// var secnumber2 = Math.floor(secnumber1);
// if(secnumber2 === 1){
//     secnumber2 = secnumber2 + 1;
//     document.write("It was 1")
// }
// if(secnumber2 === 10){
//     secnumber2 = secnumber2 - 1;
//     document.write("It was 10")
// }
// document.write("random secret number: ",secnumber2)
// var usernumber = +prompt("Enter a number between 1 and 10")
// if(usernumber <=1){
// alert("Your number is too less. Please enter a number b/w 1 and 10")
// }
// else if(usernumber >=10){
//     alert("Your number is too high. Please enter a number b/w 1 and 10")
// }
// if(usernumber === secnumber2){
//     alert("Congratulations! You guessed correct number")
// }
// else if(usernumber !== secnumber2){
//     alert("Sorry! You guessed wrong number. Try Again")
// }



// Chap 31-34

// Task 1 

// var rightNow = new Date();
// document.write(rightNow)

// Task 2

// var task2 = new Date();
// var  a = task2.getMonth();
// if(a === 0){
//     alert("Current Month: January")
// }
// if(a === 1){
//     alert("Current Month: Febuary")
// }
// if(a === 2){
//     alert("Current Month: March")
// }
// if(a === 3){
//     alert("Current Month: April")
// }
// if(a === 4){
//     alert("Current Month: May")
// }
// if(a === 5){
//     alert("Current Month: June")
// }
// if(a === 6){
//     alert("Current Month: July")
// }
// if(a === 7){
//     alert("Current Month: August")
// }
// if(a === 8){
//     alert("Current Month: September")
// }
// if(a === 9){
//     alert("Current Month: October")
// }
// if(a === 10){
//     alert("Current Month: November")
// }
// if(a === 11){
//     alert("Current Month: December")
// }

// Task 3

// var task3 = new Date();
// var b = task3.getDay();
// if(b === 0){
//     alert("Today is Sun")
// }
// if(b === 1){
//     alert("Today is Mon")
// }
// if(b === 2){
//     alert("Today is Tue")
// }
// if(b === 3){
//     alert("Today is Wed")
// }
// if(b === 4){
//     alert("Today is Thu")
// }
// if(b === 5){
//     alert("Today is Fri")
// }
// if(b === 6){
//     alert("Today is Sat")
// }

// Task 4

// var task4 = new Date();
// var b = task4.getDay();
// if(b === 0){
//     alert("It's Fun day")
// }
// if(b === 6){
//     alert("It's Fun day")
// }

// Task 5

// var task5 = new Date();
// var c = task5.getDate();
// if(c < 16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// Task 6

// var rightnow = new Date();
// var prev = new Date("Jan 01, 1970");
// var msprev = prev.getTime();
// var msrightnow = rightnow.getTime();
// var msdiff = msrightnow - msprev;
// var mdiff = msdiff / (1000 * 60);
// document.write("Current Date: ",rightnow,"<br/>")
// document.write("Elapsed milliseconds since January 1, 1970: ",msdiff,"<br/>")
// document.write("Elapsed minutes since January 1, 1970: ",mdiff)

// Task 7

// var rightnow = new Date();
// var d = rightnow.getHours();
// if(d <= 12){
//     alert("Its AM")
// }
// else{
//     alert("Its PM")
// }


// Task 8

// var task8 = new Date("Dec 31,2020");
// document.write("Later Date: ",task8)

// Task 9

// var ramd1 = new Date("Apr 25,2020");
// var today = new Date();
// var msdiff = today.getTime() - ramd1.getTime();
// var ddiff = msdiff / (1000 * 60 * 60 * 24);
// ddiff = Math.floor(ddiff)
// alert(ddiff + " days have passed since 1st Ramdan, 2020")

// Task 10

// var start_of_2015 = new Date("Jan 01,2015");
// var refdate = new Date(prompt("Enter reference date as mm dd,yy for ex Jan 01,2015"));
// var msdiff = refdate.getTime() - start_of_2015.getTime();
// var ddiff = msdiff / (1000);
// document.write("On reference date ",refdate,",<br/>")
// document.write(ddiff," seconds had passed since beginning of 2015")


// Task 11

// var currdate = new Date();
// document.write("current date: ",currdate,"<br/>")
// currdate.setHours(currdate.getHours()-1)
// document.write("1 hour ago, it was ",currdate)

// Task 12 

// var curryear = new Date();
// curryear.setFullYear(curryear.getFullYear()-100)
// alert("100 years back, it was "+curryear)

// Task 13

// var age = +prompt("Enter your age in numbers");
// var curryear = new Date();
// curryear.setFullYear(curryear.getFullYear() - age);
// document.write("Your age is ",age,"<br/>")
// document.write("Your birth year is ",curryear.getFullYear())

// Task 14

// var cusname = prompt("Enter Consumer Name");
// var month = prompt("Enter month of consumption in words");
// var numOfUnits = +prompt("Enter the number of units consumed");
// var chargePerUnit = +prompt("Enter the charges per unit");

// var netpay = numOfUnits * chargePerUnit;
// var netpay1 = netpay.toFixed(2);
// var latepay = (netpay1/100)*15;
// var latepay1 = latepay.toFixed(2);
// var grosspay = netpay + latepay;
// var grosspay1 = grosspay.toFixed(2);

// document.write("<h1>K-Electric Bill</h1><br/>")
// document.write("Customer Name: ",cusname,"<br/>")
// document.write("Month: ",month,"<br/>")
// document.write("Number of units: ",numOfUnits,"<br/>")
// document.write("Charges per unit: ",chargePerUnit,"<br/><br/>")
// document.write("Net Amount Payable (within Due Date): ",netpay1,"<br/>")
// document.write("Late payment surcharge: ",latepay1,"<br/>")
// document.write("Gross Amount Payable (after Due Date): ",grosspay1,"<br/><br/><br/><br/>")
// document.write("Note:<br/>")
// document.write("Late payment surcharge = 15% of Net Amount Payable")



// Chap 35-38

// Task 1

// function RigthNow(){
//     var now = new Date();
//     document.write(now)
// }
// RigthNow();

// Task 2

// function Greet(){
//     var firstname = prompt("Enter your first name");
//     var lastname = prompt("Enter your last name");
//     alert("Hello! " + firstname + " " + lastname)
// }
// Greet();

// Task 3

// function addition(){
//     var num1 = +prompt("Enter a number");
//     var num2 = +prompt("Enter another number")
//     var sum = num1 + num2;
//     alert("The sum of " + num1 + " and " + num2 + " = " + sum)
// }
// addition();

// Task 4

// var num1 = +prompt("Enter the first number")
// var num2 = +prompt("Enter the second number")
// var operator = prompt("Enter the operator. For Ex + for addition - for subtraction")

// function calculator(num1,num2,operator){
    
//     if(operator == '+'){
//         var result = num1 + num2;
//         document.write(num1," + ",num2," = ",result)
//     }
//     else if(operator == '-'){
//         var result = num1 - num2;
//         document.write(num1," - ",num2," = ",result)
//     }
//     else if(operator == '*'){
//         var result = num1 * num2;
//         document.write(num1," * ",num2," = ",result)
//     }
//     else if(operator == '/'){
//         var result = num1 / num2;
//         document.write(num1," / ",num2," = ",result)
//     }
//     else if(operator == '%'){
//         var result = num1 % num2;
//         document.write(num1," % ",num2," = ",result)
//     }
//     else{
//         alert("Invalid operator.")
//     }
// }

// calculator(num1,num2,operator);


// Task 5

// var num = +prompt("Enter a number to find its square")
// function sqr(num){
//     var res = num ** 2;
//     alert("Square of " + num + " is " + res)
// }

// sqr(num);

// Task 6

// function factorial(num){
//     var result = 1;
//     if (num == 0 || num== 1){
//       return result;
//     }else{
//       for(var i = num; i >= 1; i--){
//         result = result * i;
//       }
//       return result;
//     }  
//   }
// var num= +prompt("Enter a number to find its factorial");
// result = factorial(num)
// document.write("The factorial of " + num + " is " + result);


// Task 7

// var start = +prompt("Enter starting number")
// var end = +prompt("Enter ending number")
// function counting(start,end){
//     for(var i = start;i<=end;i++){
//         document.write(i,"<br/>")
//     }
// }
// counting(start,end)


// Task 9

// Arguments as value

// function area(width,height){
//     var A = width * height;
//     return A
// }
// a = area(5,5);
// alert("Area of rectangle = " + a)

// Arguments as variable

// var w = +prompt("Enter the width") 
// var h = +prompt("Enter the height") 
// function area(width,height){
//     var A = width * height;
//     return A
// }
// a = area(w,h);
// alert("Area of rectangle = " + a)

// Task 10

// var word = prompt("Enter a word to check if its palindrome or not");
// var check = "";
// function palindrome(str){
//     for (var i = word.length -1 ; i >=  0;i--){
//         check += word[i]
//     }

//     if(check === word){
//         alert(word + " is palindrome word")
//     }
//     else{
//         alert(word + " is not a palindrome word")
//     }
// }

// palindrome(word)

// Task 11

// var task11 = prompt("Enter a string to converts the first letter of each word of the string in upper case");
// function titlecase(str){
//   var array = str.split(' ');
//   var newarray = [];
//   for(var x = 0; x < array.length; x++){
//       newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//   }
//   return newarray.join(' ');
// }
// a = titlecase(task11);
// alert(a)

// Task 12

// var task12 = prompt("Enter a string to converts to find longest word");
// function longword(str){
//   var array = str.split(' ');
//   var result = array[0];
//   for(var x = 1 ; x < array.length ; x++){
//     if(result.length < array[x].length){
//         result = array[x];
//     } 
//   }
//   return result;
// }
// a = longword(task12);
// alert(a)


// Task 13 

// var task13 = prompt("Enter a string");
// var Letter1 = prompt("Enter a letter from previously entered string to find its occurrence")
// function occurrence(word,letter){
//     var count = 0;
//     for(var i=0;i<word.length;i++){
//         if(word[i] === letter){
//             count++;
//         }
//     }
//     return count;
// }

// b = occurrence(task13,Letter1)
// alert("Letter "+Letter1+" occurrs "+b+" times in "+task13)


// Task 14

// var first = prompt("Enter the radius of circle to find circumference of circle")
// function calcCircumference(r1){
//     var circum = 2 * 3.142 * r1;
//     return circum;
//     alert("The circumference is "+circum) 
// }

// var second = prompt("Enter the radius of circle to find area of circle")
// function calcArea(r2){
//     var area = 3.142 * r2 * r2;
//     return area
// }

// x = calcCircumference(first)
// document.write("The circumference is ",x," when radius is ",first,"<br/><br/><br/>")

// y = calcArea(second)
// document.write("The circumference is ",y," when radius is ",second)

