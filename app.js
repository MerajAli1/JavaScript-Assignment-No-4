//                              ALERT
//                                  1
alert("Welcome to our website");
//                              End 1

//                                  2
alert("Error! Please enter a valid password.");
//                              End 2

//                                  3
alert("Welcome to JS land \nHappy coding!");
//                              End 3
//                                  4
alert("Welcome to JS Land...");
//                              End 4
//                                  5
alert("Hello...I can run JS through my web browers's console")
//                              End 5
//VARIABLES FOR STRINGS 
                                    //1
                                    var username
                                    //2
var  myName='Syed Kariz Ali'
                                    //3
var message="Hello World"
alert(message);
                                    //4
var name="Jhone Deo"
var age="15 years old"
alert(name);
alert(age);
                                    //5
var food="Pizza\nPizz\nPiz\nPi\nP"
alert(food);
                                    //6
var  email="merajali45425@gmail.com"
alert("My email address is "+email);
                                    //7
var  book="A smarter way to learn JavaScript"
alert("I am trying to learn from a book "+book);
                                    //8
document.write("Yah! I can write HTML content through JS.")
                                    //9
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

                        //VARIABLES FOR NUMBERS
//1
var age=19;
alert("I am "+age + "years old");
//2
var count = 14;

if (count == 14) {
  alert("You have visited this site " + count + " times.");
}

else {
  alert("You have visited this site " + count + " times.");
}
//3
var birthYear=2003
document.write("I was born in "+birthYear+"\n Data type of given variable is number");
//4
var visitor=prompt();
var Producttitle =prompt();
var Quantity =prompt();
document.write(visitor+" ordered "+Quantity+Producttitle+"on XYZ Clothing store");
//                           VARIABLE NAMES: LEGAL & ILLEGAL 
//1
var a,b,c;
//2
// legal      var name_your,file,folder,computer,pro;
// illegal    var name of person's,@email, app123 ,12
//3
document.write("Rules for naming JS variables\n Variable names can only contain and\n For example $my_1stVariable Variables must begin with a or .For example $name, _name or name Variable names are case Variable names should not be JS");
// Chapter 9 Starts here
var a = 10
console.log("The Value of a is: "+a)
console.log(".............................")
var number = ++a
console.log("The Value of ++a is: "+a)
console.log("Now the Value of a is: "+a)
console.log(".............................")
console.log("Now the Value of a++ is: "+a)
var number = a++
console.log("Now the Value of a is: "+a)
console.log(".............................")
console.log("Now the Value of --a is: "+a)
var number = --a
console.log("Now the Value of a is: "+a)
console.log(".............................")
console.log("Now the Value of a-- is: "+a)
var number = a--
console.log("Now the Value of a is: "+a)
console.log(".............................")
var a=2,b=1
var result= --a - --b + ++b + b--
console.log("Result is: "+result)
var input = prompt("Input Your Name")
alert("Hi! " +input+ " Have a Good Day" )
var number = prompt("Enter Number: ")
for(var i=0;i<10;i++){
    console.log(number+"X"+[i+1]+"="+number*[i+1])
}
// console.log("Subject        Total Marks         Obtained Masrks       Percentage")
var maths=+prompt("Enter Your Maths Marks out of 100")
console.log("Your marks in Maths: "+maths)
var english= +prompt("Enter your English marks out of 100")
console.log("Your marks in English: "+english)
var computer= +prompt("Enter your Computer marks out of 100")
console.log("Your marks in English: "+computer)
var islamiat= +prompt("Enter your English marks out of 100")
console.log("Your marks in English: "+islamiat)
var physics= +prompt("Enter your Physics marks out of 100")
console.log("Your marks in English: "+physics)
total = maths+english+computer+islamiat+physics
console.log("Your Total Marks = "+total)
percent= total/500*100
console.log("Your Percentage is= "+percent+"%")
if(percent>=90 && percent<=100){
    console.log("Your Grade is A1+")
}
else if(percent>80 && percent<90){
    console.log("Your Grade is A1")
}
else if(percent>70 && percent<80){
    console.log("Your Grade is A")
}
else if(percent>60 && percent<70){
    console.log("Your Grade is B")
    console.log("Remarks: Need Hard work")
}
else if(percent>50 && percent<60){
    console.log("Your Grade is C")
    console.log("Remarks: Need Extreme Hard work")
}
else
{
    console.log("Fail")
}
// Chapter 9 Ends here
// Chapter 9 to 11 Starts here
var city=prompt("Enter City Karachi")
if(city=="Karachi"){
    alert("Welcome To City Of Ligths")
}
var gender = prompt("Enter Your Gender Male/Female")
if(gender=="Male"){
    console.log("Good Morning Sir")
}
else{
    console.log("Good Morning Mam")
}
var signal_color1=prompt("Enter Signal 1 Color of traffic light")
if(signal_color1==="red"){
    console.log("Red Means Stop")
}
else{
    console.log("Invalid")
}
var signal_color2=prompt("Enter Signal 2 Color of traffic light")
if(signal_color2==="yellow"){
    console.log("Yellow Means Ready To Move")
}
else{
    console.log("Invalid")
}
var signal_color3=prompt("Enter Signal 3 Color of traffic light")
if(signal_color1==="green"){
    console.log("Green Means Move Now")
}
else{
    console.log("Invalid")
}
var fuel=prompt("Enter Your remaining fuel in liters")
if(fuel<="0.25 liters"){
    console.log("Please refill the fuel in your car")
}
else{
    console.log("You have enough fuel")
}
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
// Guess Game:
var secert_number= 9
var user_number= +prompt("Enter Number Between 1 to 10 and guess what I think")
if(user_number==secert_number){
    console.log("Bingo! You Guessed it right")
}
else if(user_number==8){
    console.log("So Close")
}
else if(user_number==10){
    console.log("So Close")
}
else{
    console.log("You Guessed it Wrong")
}
var num1= prompt("Enter number")
if(num1%3==0){
    console.log("Your Entered Number is Divisible 3")
}
else{
    console.log("Your Entered Number is Not Divisible 3")
}
var num2= prompt("Enter Number to chech Even or Odd")
if(num2%2==0){
    console.log("Your Entered Number is Even")
}
else{
    console.log("Your Entered Number is Odd")
}
var temperature= prompt("Enter Temperature")
if(temperature>=40){
    console.log("Its Too Hot")
}
else if(temperature>=30){
    console.log("The Weather today is Normal")
}
else if(temperature>=20){
    console.log("Today’s Weather is cool.")
}
else if(temperature>=10){
    console.log("OMG! Today’s weather is so Cool")
}
// Calculator:
var num3= +prompt("Enter First Number")
var num4= +prompt("Enter Second Number")
var num4= +prompt("Choice Operation +,-,/,*")
if(num4=="+"){
 total=num3+num4
 console.log("Your Answer is "+total)
}
else if(num4=="-"){
 total=num3-num4
 console.log("Your Answer is "+total)
}
else if(num4=="/"){
 total=num3/num4
 console.log("Your Answer is "+total)
}
else if(num4=="*"){
 total=num3*num4
 console.log("Your Answer is "+total)
}
// Chapter 9 to 11 Ends here
// Chapter 12 to 13 Starts here
var character= prompt("Enter Alphabet")

if(character >= 'A' && character <= 'Z')
{
    console.log(character+" is uppercase alphabet.");
}
else if(character >= 'a' && character <= 'z')
{
    console.log(character+" is lowercase alphabet.");
}
else
{
    console.log(character+" is invalid alphabet.");
}
var num5= prompt("Enter Number")
var num6= prompt("Enter Number")
if(num5>num6){
    console.log(num5+" is greater than "+num6)
}
else if(num6>num5){
    console.log(num6+" is greater than "+num5)
}
else if(num6==num5){
    console.log(num6+" and "+num5+" are equal")
}
else{
    console.log("Invalid")

}
var num7 = prompt("Enter number to check wether +ve or -ve")
if(num7<0){
    console.log("Entered number is negative")
}
else{
    console.log("Entered number is positive")
}
var ch = prompt("Enter Alphabet to check wether vowel consunant")
if(ch=="a"){
    console.log("its vowel")
}
else if(ch=="e"){
    console.log("its vowel")
}
else if(ch=="i"){
    console.log("its vowel")
}
else if(ch=="o"){
    console.log("its vowel")
}
else if(ch=="u"){
    console.log("its vowel")
}
else{
    console.log("its consunant")
}
var user_entered_password=prompt("Enter your password")
var password= "admin123"
if(user_entered_password==password){
    console.log("Correct Password")
}
else{
    console.log("Incorrect Password")
}
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
// Chapter 12 to 13 Ends here
// Chapter 13 to 14 Starts here
var a=[]
var cars = ["Saab", "Volvo", "BMW"];
alert(cars[2])

var edu=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write(edu);

var namee =["Meraj Ali","Syed Kariz Ali","Wahaj Ahmed"]
var score=["390","320","450 "]
document.write("Score of "+namee[0]+"is"+score[0])
document.write("Score of "+namee[1]+"is"+score[1])
document.write("Score of "+namee[2]+"is"+score[2])

var color=["Red", "Yellow", "Purple","White", "Black", "Blue", "Orange", "Green"]
document.write(color);
// Chapter 13 to 14 Ends here