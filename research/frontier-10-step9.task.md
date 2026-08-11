# This dispatch — step 9: the scope-denial sweep

Steps 0–8 are complete and every gate is green. This step finds a defect class no
gate can see: a **claim that was true when written and that this run has since
falsified**.

## Why this exists

A scope-denial claim — "the library does not develop X", "no result here
establishes Y", "this is the only page treating Z" — changes no file when it
becomes false. Every gate passes forever. Only this sweep finds it, and this run
is unusually likely to have created some: it added **583 items across 14 A/B
pairs**, spanning determinants, category theory, Ramsey theory, plane graphs,
polynomial rings, change of variables and Riemann–Stieltjes integration, plus a
**re-home** that moved two items from order 203 to order 46.

## Method — grep is the ENTRY POINT, never the sweep

Negation is carried by many words: *neither, no item, lacks, absent from, silent
on, nowhere, not developed, does not appear, only page, first, unique to, beyond
scope, not available, we do not*. Grep to find candidates, then **read each in
context and judge it against the current corpus**, because grep cannot see a
false claim phrased in words you did not search for.

Check in particular:

1. **Published pages that predate this run** claiming the library lacks something
   this run has now built. Determinants and category theory are the highest risk:
   both were entirely absent before today.
2. **Order-relative claims** — "the earliest page to…", "not available at this
   point in the reading order". The re-home moved
   `def-finite-sum-in-a-commutative-monoid` and
   `lem-finite-sum-reindexing-and-fubini` from
   `incidence-algebras-and-mobius-inversion` (203) to
   `rings-subrings-and-integral-domains` (46). Anything asserting those results
   arrive late, or that a page below 203 cannot use a commutative-monoid sum, is
   now false. Check `incidence-algebras-and-mobius-inversion`'s own prose.
3. **The `deferred-*` catalogue pages** in `library/not-proved-here/`, which exist
   to say what the library does not prove. If this run built something they list
   as deferred, they are now wrong.
4. **This run's own new pages** claiming their subject is untreated elsewhere.
5. **`group-actions-and-cayleys-theorem`** — its published prose was written when
   the page had 6 items and no examples. It now gains 31 items and 16 examples.
   Any prose there describing the page's own limited scope may be false. Note the
   page file itself is NOT to be edited (the additions are staged); if its prose
   is falsified, report it for the publishing commit.

## A repair confirmed by reading the diff is not enough

Measured at level 8: a repair verified by reading the diff left the same
falsehood elsewhere in the same file. **Re-read the whole file after each fix.**

## Output

`research/frontier-10-step9-scope-denial.md`: every candidate examined, the
verdict (still true / now false), and for each falsified claim the exact old
text, the replacement, and the file. Repair what you find in draft content;
for a **published** page, record the required edit rather than making it, and
say so clearly.

State plainly if you find nothing — a clean sweep is a real result, but only if
you actually looked.
