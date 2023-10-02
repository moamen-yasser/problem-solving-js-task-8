//task 8
//------------------------------------------------------------------------------------------------
// start problem 1 
var numbers=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]
function problem1(num){
return (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5]+numbers[6]+numbers[7]+
        numbers[8]+numbers[9]+numbers[10]+numbers[11]+numbers[12]+numbers[13])/numbers.length;
}
console.log(problem1(numbers));
//end problem 1
//------------------------------------------------------------------------------------------------


//start problem 2
function problem2(base,height){
    return (base*height)/2;
}
console.log(problem2(5,10));
//end problem 2
//------------------------------------------------------------------------------------------------


//start problem 3
function problem3(age){
    return age*365;
}
console.log(problem3(20));
//end problem 3
//------------------------------------------------------------------------------------------------


//start problem 4
function problem4(num1,num2){
    return num1+num2;
}
console.log(problem4(50,50));
//end problem 4
//------------------------------------------------------------------------------------------------


//start problem 5
const names = ["moamen", "Sarah", "Michael", "Emily", "David", "Jessica", "Daniel", "Rachel", 
"Andrew", "Olivia", "Thomas", "Sophia", "Benjamin", "Lily"];
function problem5(name) {
return names[0];
}
console.log(problem5(names));
//end problem 5
//------------------------------------------------------------------------------------------------


//start problem 6
function problem6(){
var x="moamen yasser mohamed atiea";
document.getElementById("myname").innerHTML=x;
}
console.log(problem6());
//end problem 6
//------------------------------------------------------------------------------------------------


//start problem 7
function problem7(hours) {
return hours*60*60;
}
console.log(problem7(5));
//end problem 7
//------------------------------------------------------------------------------------------------


//start problem 8
function problem8(num1,num2,num3,num4) {
if((num1+num2+num3+num4)>350){
    document.getElementById("p8").innerHTML=true;
}
else{
    document.getElementById("p8").innerHTML=false;
}
}
console.log(problem8(100,50,50,200));
//end problem 8
//------------------------------------------------------------------------------------------------


//start problem 9
function problem9(num){
if(num==0){
    return true;
}
else{
    return false;
}
}
console.log(problem9(2))
//end problem 9
//------------------------------------------------------------------------------------------------


//start problem 10
function problem10(num1, num2){
    return num1%num2;
}
console.log(problem10(50,30))
//end problem 10
//------------------------------------------------------------------------------------------------


//start problem 11
function problem11(num1,num2){
if(num1>num2){
    return num1;
}
else if(num1<num2){
    return num2;
}
else if(num1==num2){
    return "number1 is equal to number2"
}
else{
    return "error";
}
}
console.log(problem11(20,20))
//end problem 11
//------------------------------------------------------------------------------------------------


function problem12(num){
if(typeof num==="number"){
    return "a valid number.";
}
else{
    return "not a valid number";
}
}
console.log(problem12('mo'));
//end problem 12
//------------------------------------------------------------------------------------------------


//start problem 13
function problem13(){
    var x=new Date().getDate();
document.getElementById("p13").innerHTML= x;
}
console.log(problem13());
//end problem 13
//------------------------------------------------------------------------------------------------