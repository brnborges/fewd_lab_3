//3. a) Define a function ( expression) greet returning the value 'Haydo!'.

function greet() {
	return 'Haydo'; }

// b) Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.

function greet() {
  return 'Haydo'; }
  var salutation=greet();
  console.log(salutation);

// 4. Write a function echo that has a parameter called sound and return that passed parameter.

function echo(){
  return 'sound'; }
  console.log(echo());  

//5. Write a function greet having a parameter called name. Return 'Hello <parameter> !' where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings.

function greet2(name)
{ return 'Where is '+name+'?'; };
var x = whereIs('Jacky');
console.log(x);

//Result:  Where is Jacky ?

//7. Which value does x have after execution of the following code?

//Result: Hi Selva ! Hi Pola !

// 8. Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.
//The call shout('Fire') should return 'FireFire' and should log 'FireFire' for example.

function shout(){
  return 'Fire'; }
console.log(shout()+shout());

// Result: FireFire

//9. Which value does x have after execution of the following code?

var double=function(name){  
return name + 'and '+ name; }
var x=double('Roy'); console.log(x);

// Result: Roy and Roy

// 10. In one word, what is a block of code that executes whenever you invoke its name?

//Function

//11. Write a function called doSomething with a parameter called name, return the name parameter.
//On the next line call the function with a value for the name ( can be any name you like ).

function doSomething(name) {
return('Bruno'); }
console.log(doSomething());
//Result: Bruno

// 12. Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

function multiplyFive(value,fixed) {
fixed=5;  
return value*fixed; }
console.log(multiplyFive(10));
//Result: 50

//13. Define a function called myFunction that uses the alert() method with a string value “Hello World!” inside. Call myFunction on the next line.

function myFunction(){
var text='Hello World!!!';
alert(text); }

myFunction();

//14. Define a variable called isAnswerRight and give it a true value.
//Use the ternary operator to console.log the ‘The answer is right!’ if the value is true and ‘The answer is wrong!’ if the value is false.

var isAnswerRight=true;
var answer = (isAnswerRight=true) ? 'The answer is right!':'The answer is wrong'
console.log(answer);
