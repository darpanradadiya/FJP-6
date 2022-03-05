function sayhellu()
{
    console.log("hellu to functions  ");
}
function sum(a,b)
{
    return(a+b);
}
function multiply(a,b,c)
{
    return(a*b*c);
}
sayhellu()
let a=sum(20210,32020);
let m=multiply(1,5,9);
console.log(a);
console.log(m);
let k=function minus(num1,num2)
{
    return(num1-num2)
}
console.log(k(1048,8999));
(function(){
    console.log("hello from fuck");
})();

(function(num1,num2){
    console.log(num1/num2);
})(11,48);

(function(num1,num2){
    console.log(num1+num2);
})(11,48);

(function(num1,num2){
    console.log(num1-num2);
})(11,48);