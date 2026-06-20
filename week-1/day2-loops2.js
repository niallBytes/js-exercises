// ============================================================
// EXERCISE — Which values does the while loop show?
// ============================================================

// Q: Both loops use alert. Do they show the same values or not?

// --- LOOP 1: Prefix ++i ---
let i = 0;
while (++i < 5) alert(i);
// Order: increment i FIRST → compare → alert
//
// Step | i before | ++i makes i | Compare  | Alert
//  1   |    0     |      1      | 1<5  ✅  |   1
//  2   |    1     |      2      | 2<5  ✅  |   2
//  3   |    2     |      3      | 3<5  ✅  |   3
//  4   |    3     |      4      | 4<5  ✅  |   4
//  5   |    4     |      5      | 5<5  ❌  | stops
//
// Output: 1, 2, 3, 4

// --- LOOP 2: Postfix i++ ---
i = 0;
while (i++ < 5) alert(i);
// Order: compare using OLD value → increment i → alert (sees new value)
//
// Step | i before | Compare (old) | i after i++ | Alert
//  1   |    0     |   0<5  ✅     |      1      |   1
//  2   |    1     |   1<5  ✅     |      2      |   2
//  3   |    2     |   2<5  ✅     |      3      |   3
//  4   |    3     |   3<5  ✅     |      4      |   4
//  5   |    4     |   4<5  ✅     |      5      |   5
//  6   |    5     |   5<5  ❌     |      —      | stops
//
// Output: 1, 2, 3, 4, 5

// --- KEY TAKEAWAY ---
// Both start at 1 (alert never sees 0) because increment happens before alert in both
// Loop 1 ends at 4 → ++i makes i=5 BEFORE compare, so 5<5 fails immediately
// Loop 2 ends at 5 → i++ compares OLD value (4<5 ✅), increments to 5, alert shows 5