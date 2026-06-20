// ============================================================
// EXERCISE — Which values get shown by the "for" loop?
// ============================================================

// Q: Both loops use alert. Do they show the same values or not?

// --- LOOP 1: Postfix i++ ---
for (let i = 0; i < 5; i++) alert(i);

// --- LOOP 2: Prefix ++i ---
for (let i = 0; i < 5; ++i) alert(i);

// --- ANSWER: Both output 0, 1, 2, 3, 4 (identical) ---

// --- WHY? ---
// In a for loop the step (i++ or ++i) runs as a standalone statement:
//
//  1. begin     → i = 0  (runs once)
//  2. condition → i < 5  (checked before each iteration)
//  3. body      → alert(i)
//  4. step      → i++ or ++i  (runs after body, nobody uses its return value)
//  back to 2...
//
// The return value of the step is NEVER used — only the side effect matters
// (i gets incremented by 1 either way)
// So i++ vs ++i makes zero difference here, unlike inside while() conditions

// --- KEY TAKEAWAY ---
// prefix vs postfix ONLY matters when the return value is used (e.g. in comparisons)
// In a for loop step, the return value is thrown away → both behave identically