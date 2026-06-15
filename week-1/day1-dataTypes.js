/* Data Types in JavaScript 

1. A BigInt value is used where numbers are ±(253-1) and is created by appending n to the end of an integer:

the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

2. String
A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

3. Boolean (logical type)

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

4. The “null” value - let age = null;

5. The “undefined” value - let age; console.log(age); // undefined

- symbol for unique identifiers.
And one non-primitive data type:
- object for more complex data structures.
- The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
- For null returns "object" – this is an error in the language, it’s not actually an object.
*/

let name = "John";

console.log(`hello${1}` ); //hello1
console.log(`hello${"name"}`); //helloname
console.log(`hello${name}`); //helloJohn