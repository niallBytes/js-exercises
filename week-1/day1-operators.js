// ============================================================
// OPERATORS — javascript.info notes
// ============================================================

// --- TERMS ---
// Operand: the value an operator acts on (5 * 2 → 5 and 2 are operands)
// Unary:   one operand  → -x
// Binary:  two operands → y - x

// --- BASIC MATH ---
5 + 2   // 7  addition
5 - 2   // 3  subtraction
5 * 2   // 10 multiplication
5 / 2   // 2.5 division
5 % 2   // 1  remainder (NOT percent)
2 ** 3  // 8  exponentiation (2³)
4 ** (1/2) // 2  square root via exponent

// --- STRING + (concatenation) ---
"my" + "string"   // "mystring"
'1'  + 2          // "12"  (number → string when mixed)
2 + 2 + '1'       // "41"  (left to right: 4 then "41")
'1' + 2 + 2       // "122" (string first: "12" then "122")
6 - '2'           // 4     (other ops always convert to number)

// --- UNARY + (converts to number) ---
+"3"      // 3
+true     // 1
+""       // 0
// Shorthand for Number(...); useful for HTML form values
let apples = "2", oranges = "3";
+apples + +oranges  // 5  (unary + applied first, then binary +)

// --- OPERATOR PRECEDENCE (high → low, key ones) ---
// 14  unary +/-
// 13  **
// 12  * /
// 11  + -
//  2  = (assignment)

// --- ASSIGNMENT ---
let x = 2 * 2 + 1  // right side calculated first → x = 5
// = returns the assigned value (rarely use this):
let a = 1, b = 2;
let c = 3 - (a = b + 1)  // a = 3, c = 0

// Chained assignment (right to left):
let p, q, r;
p = q = r = 4  // all equal 4

// --- MODIFY-IN-PLACE ---
let n = 2;
n += 5   // n = 7
n *= 2   // n = 14
// Works with: += -= *= /= %=  **=

// --- INCREMENT / DECREMENT ---
let counter = 1;
++counter   // prefix  → increments FIRST, returns NEW value (2)
counter++   // postfix → returns OLD value (1), THEN increments

// Key difference only matters when using the return value:
let i = 1;
alert(++i)  // 2 (use new value)
alert(i++)  // 2 (use old value, i becomes 3 after)

// --- COMMA (rare) ---
// Evaluates each expression, returns only the last:
let val = (1 + 2, 3 + 4)  // val = 7

//Exercises

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1 (b becomes 2 after/ d is assigned the old value of b-2)

// ---  ---

// What are results of these expressions?

"" + 1 + 0 // "10" (string concatenation, left to right)
"" - 1 + 0 // -1 (string converted to 0, then math ops)
true + false // 1 (true → 1, false → 0)
6 / "3" // 2 (string converted to number)
"2" * "3" // 6 (strings converted to numbers)
4 + 5 + "px" // 9 + "px" → "9px" (math first, then string concatenation)
"$" + 4 + 5 // "$45" (string concatenation, left to right)
"4" - 2 // 2 (string converted to number, 
"4px" - 2 // NaN (string converted to number fails, becomes NaN, then math with NaN is NaN)
"  -9  " + 5 // "  -9 5" (string concatenation, left to right)
"  -9  " - 5 // -14 (string converted to number, then math)
null + 1 // 1 (null converted to 0, then math)
undefined + 1 // NaN (undefined converted to NaN, then math with NaN is NaN)
" \t \n" - 2 // -2 (string with only whitespace converted to 0, then math)

/* Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12 */

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); //3