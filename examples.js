// function Hello(name){
//  return 'Welcome again, '+ name;
// }

// console.log(Hello('Fazaary'));

//Example using call()

//Theme: 
//create an object
//create a function
// compute an expression with the value passed from call()
//return result

var object = [
    {
        id:1,
        name:'Fazaary'
    },
    {
        id:2,
        name:'Julia'
    }

]
// console.log(object[1].name) // prints Julia
//call()
// create a function

// var callPeopleToWedding = function(a){
//     return object[0].name + " and " + object[1].name + " "+ a 
// }

// var callMyFunction = callPeopleToWedding.call(object[0].name,'is getting wedded at France, Please come.')

// console.log(callMyFunction)
// ************************************************************
//apply()
//explicity list params in the function
//specify only the array while passing to a function

// var callApplyFunction = function(a,b,c){
//     // console.log(a,b,c,);
//     return object[0].name + " and " + object[1].name + " likes to do "+ a +" "+ b + " "+c + " "+"together."
// }
// var arr =['Cooking','Cleaning','Spending time']

// var callMyFunction = callApplyFunction.apply(object,arr)
// console.log(callMyFunction);

//***************************************************************/

//Bind()
// don't pass values to bind function other than the object where we need to mutate 


var postMarriageDuties = ['Happiness', 'Kids', 'Luxury']
var callBindFunction = function(a){

    return object[0].name + " and " + object[1].name + " had " + a 
}

var married = callBindFunction.bind(object);

married(postMarriageDuties);

console.log(married(postMarriageDuties));

//README
 

/*
One object exists
1) call() 
create a function
call the function
pass in the object and the values you want to evaluate
explicitly mention the number of params in the  function call
Example var something = callSomeFunction.call(sendSomeObject, sendSomeValue);

2) apply()
    say you have an array of values
    pass in the array and the object to your function call

    var x = someFuncToCall.apply(someObject, someArray)
    and the function def of someFuncToCall should have the number of params equivalent to the no of
    elements in the array
    function(a,b,c)
    a -> contains array value at index 0
    b -> contains array value at index 1 
    c -> contains array value at index 2 


3) bind()

no need to pass any values to your calling function other than the object you need to mutate
var x = someFunction.bind(someObject)
x is returning an object
pass anything to x as x is returning an object which is a function
the entire values passed can be accessed over a single variable as far as I know
*/