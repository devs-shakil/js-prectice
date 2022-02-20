// // // // const myInfo = ["Shakil Hossain", "Anower ullah", "Rowshan akter", ["Tanzina akter", "Selina akter"]];

// // // // const [name, father, mother, [wife,sister]] = myInfo;

// // // // console.log(name, father, mother, wife, sister);

// // // function add(a,b){
// // //     const [sum, multipication] = [a+b, a*b];

// // //     return [sum, multipication]
// // // }

// // // const [sum, multipication] = add(5,6)
// // // console.log(sum, multipication);

// // const name = "My Name is Md Shakil Hossain Shakil";
// // console.log(name);
// // const change = name.indexOf('Shakil');
// // console.log(change);
// // let change2 = name.lastIndexOf("Shakil");
// // console.log(change2);
// // console.log(name.indexOf('Shakil'));

// // const text = "hello world, Welcome to the universe";
// // console.log(text.startsWith("world"));
// // console.log(text.endsWith('universs'));

// number method::

// let number = 5481;
// console.log(typeof(number))
// console.log(number)
// let numberString = number.toString();
// console.log(numberString)
// console.log(typeof(numberString));

// let x = 9.254446546;
// console.log(x.toExponential(5));
// console.log(x.toFixed(0))
// console.log(x.toFixed(4))
// console.log(x.toFixed(2))
// console.log(x.toFixed(0));

// Number(true);
// Number("54");
// console.log(Number(true))
// console.log(Number("54654"));
// console.log(Number("shshdf"));

//Array::
// const name = ["shakil", "Rakib", "suhad", "Rubi", "Muttakey"];
// console.log(name);
// console.log(typeof(name));
// console.log(name.length);
// //add a item
// name[name.length] ="Mustafiz";
// console.log(name)
// console.log(name[name.length-1]);
// // console.log(name.pop(name.length));
// console.log(name);
// name.push[name.length] = "Tanzina";
// console.log(name);

// for (i=0; i<name.length; i++){
//     console.log(i);
//     console.log(name[i]);\
// }

// const person = [];
// person["firstName"] = "Shakil";
// person["lastName"] = "Hossain";
// person["age"] = 23;
// console.log(person.length)
// console.log(person[0]);
// console.log(person)

// const person = ["Shakil", "Hossain", "23"];
// console.log(typeof person); // return object

// const person2 = {
//     name: "Shakil Hossain",
//     age: 23,
//     distict: "Lakshmipur"
// }
// console.log(person2);
// console.log(typeof person2) //return object

// //check array

// console.log(Array.isArray(person));//return true
// // so you can check array by Array.isArray(arrayName) method


//Array method ::-

// const fruits = ["Banana", "Mango", "Orange", "copiko"];

// const toStringFruits = fruits.toString();

// console.log(toStringFruits);
// console.log(typeof toStringFruits)
// console.log(Array.isArray (toStringFruits));
// const fruits2 = fruits.join(" * ");
// console.log(typeof fruits2)
// console.log(fruits2);
// const popFruits = fruits.pop();
// console.log(popFruits);
// fruits.push("Shakil");
// console.log(fruits);
// const shiftFruits = fruits.shift("newValue");
// console.log(shiftFruits);


// const fruits = ["banana", "apple", "Orange", "Pineaple", "hello"];

// console.log(fruits);

// const sorts = fruits.sort();

// console.log(sorts);
// console.log(fruits.reverse())


// const number =[5, 10, 15, 20, 25];

// console.log(number);

// number.sort(function(a, b){
//     return a-b;
// })

// console.log(number)
// const myFunction = (value) =>{
//     return value * 3;
// }

// const newNumber = number.map(myFunction);
// console.log(newNumber)

// console.log(number)

// const arrowFunction = (shakil) =>{
//     return shakil*2;
// }

// const loopIteration = number.map(arrowFunction)

// console.log(loopIteration)

// console.log(number)




