/**
 * @author Naveen
 * Higher Order Functions && Git - 1
 * Topics:
 *  1. Functions
 *  2. Callbacks
 *  3. Higher order functions
 *      a. forEach
 *      b. map
 *      c. filter
 *      d. reduce
 *      e. object mapping
 *  4. Git - 1
 *      a. creating repo
 *      b. add, commit and push files to repo
 */

// function sayhello(anotherName) {
//     console.log("hello world " + anotherName);
// }

// Number, arrays, string , boolean, object, and function
// console.log(sayhello("naveen"));


// function sayHi(name, byeFn) {
//     console.log("Hi" + name)
//     byeFn();
// }

// function sayBye() {
//     console.log('Bye!');
// }

// sayHi('naveen', sayBye);


// function sum(num1, num2, printFn) {
//    const result = num1 + num2;
//    printFn(result);
// }

// function printMe(value) {
//     console.log(value);
// }

// sum(1, 2, printMe);

// Higher order functions

// forEach

// const names = ['name1', 'name2', 'name3'];

// for(var i = 0; i<names.length; i++) {
//    console.log(names[i]);
// } 
// names.forEach(function(ele, i) {
//     // logic
//     //console.log(i);
// });

// const nums = [1, 2, 3, 5];

// // function printMe(ele) {
// //     console.log(ele);
// // }
// nums.forEach(function(ele, i, arr) {
//     if(ele%2==0) {
//         console.log(ele);
//     }
// });


//const nums = [1, 2, 3, 5];

// const out = [];

// for(var i = 0; i<nums.length; i++) {
//     out.push(nums[i]**2)
// }

// console.log(out);

// const out = nums.map(function(ele, i, array) {
//     return ele**2;
// });

// [1]
// [1, 4]
// [1, 4, 9]
// [1, 4, 9, 25]

// const out = nums.forEach(function(ele, i, array) {
//     return ele**2;
// });

// console.log(out);
//Input
// const nums = ["1", "4", "9", "25"];
//Input
// const phones = [
//     {
//         name: 'iphone',
//         model: '11'
//     },
//     {
//         name: 'samsung',
//         model: 's11ultra'
//     }
// ];
//output ['iphone', 'samsung']

// var out = [];
// phones.forEach(function(ele) {
//     out.push(ele.name);
// });

// const out = phones.map(function(ele) {
//     return ele.model;
// });



// console.log(out);

// Filter

// const nums = [1, 2, 4, 9, 10, 11];


// // Even
// var out = [];
// nums.forEach(function(ele) {
//     if(ele%2==0) {
//         out.push(ele);
//     }
// });

// const out = nums.filter(function(e, i, a) {
//     return i%2==0;
// });

// console.log(out);

// input
// const nums = [1, 2, 4, 9, 10, 11];
// const initialVal = 100;
// //output sum

// //for loop -> forEach -> ruduce

// const out = nums.reduce(
//     function(accumulator, currentValue, index, arr) {
//         return accumulator += currentValue;
//     }, initialVal
// );

// const strings = ["hello", "world"]

// const finalStr = strings.reduce(function(acc, currVal) {
//     console.log(currVal);
//     return acc+currVal;
// });

// console.log(finalStr);
// accumulator = 100, currentValue = 1, sum = 101
// accumulator = 101, currentValue = 2, sum =103
//...
// accumulator = 7, currentValue = 9, sum = 7+9 = 16
// accumulator = 16, currentValue = 10, sum = 26
// accumulator = 26, currentValue = 11, sum = 37

// console.log(nums);
// console.log(out);

//Chaining

// Sum of all even numbers
// const nums = [1, 2, 4, 9, 10, 11];

// var sum = 0;

// for(var i = 0; i<nums.length; i++) {
//     if(nums[i]%2 == 0) {
//         sum += nums[i]
//     }
// }

// 1. [] -> Filter even number -> []
// 2. [] -> Adding the values -> sum

// const sum = nums.filter(function(ele) {
//     return ele%2 == 0;
// }).reduce(function(prevVal, currValue) {
//     return prevVal += currValue;
// });

// console.log(sum);

// combinations of chaining:


// Higher order function
// [] -> forEach -> undefined;
// [] -> map -> []
// [] -> filter -> []
// [] -> reduce -> single value

// filter().map();

// map().filter();
// filter().reduce();
// map().reduce();
// forEach();

// Wrong:
// reduce().map()?

//small modification