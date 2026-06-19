// ============================================================
// LOOPS — javascript.info notes (Cant be executed)
// ============================================================

// --- WHILE ---
// Checks condition BEFORE each iteration
let i = 0;
while (i < 3) {
  alert(i);   // 0, 1, 2
  i++;
}

// Shorthand: while(i) stops when i becomes 0 (falsy)
let j = 3;
while (j) alert(j--);  // 3, 2, 1

// --- DO...WHILE ---
// Checks condition AFTER — body runs at least once
let k = 0;
do {
  alert(k);   // 0, 1, 2
  k++;
} while (k < 3);

// --- FOR ---
// for (begin; condition; step)
// begin    → runs once at start
// condition → checked before every iteration
// step     → runs after every iteration
for (let i = 0; i < 3; i++) {
  alert(i);   // 0, 1, 2
}
// i is not accessible here (declared inside loop)

// Skipping parts:
let n = 0;
for (; n < 3; n++) { alert(n); }   // skip begin
for (; n < 3;) { alert(n++); }     // skip begin + step (acts like while)
for (;;) { }                        // infinite loop (use break to exit)

// --- BREAK ---
// Exit loop immediately
while (true) {
  let val = +prompt("Enter a number", '');
  if (!val) break;   // stops loop if input is empty
}

// --- CONTINUE ---
// Skip current iteration, move to next
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;  // skip even numbers
  alert(i);   // 1, 3, 5, 7, 9
}
// Note: break/continue cannot be used with ternary operator ?

// --- LABELS (nested loop escape) ---
// break only exits the inner loop by default
// Label lets you break out of an outer loop too
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at (${i},${j})`, '');
    if (!input) break outer;  // exits BOTH loops
  }
}
alert('Done!');

// --- SUMMARY ---
// while        → condition checked before
// do...while   → condition checked after (body runs at least once)
// for(;;)      → condition checked before + extra controls
// break        → exit loop immediately
// continue     → skip to next iteration
// label:       → target for break/continue in nested loops