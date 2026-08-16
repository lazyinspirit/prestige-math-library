## Your assignment — batch 4, group 1: sigma-algebra foundations, generation, closure laws

Run `frontier-15`, batch 4. The pair is
`library/measure-theory/sigma-algebras-and-borel-sets.md` (A page, 44 items) and
`library/measure-theory/sigma-algebras-and-borel-sets-examples.md` (B page, 16 items).
All items are at `items/<id>.md`, `status: draft`. The batch proof contract is
`research/frontier-15-batch-4.proof-contracts.json`; the manifest is
`research/frontier-15-batch-4.pages.json`.

Read these items in full, every numbered step against every cited item on disk:

- def-algebra-of-subsets
- def-sigma-algebra
- def-measurable-space
- def-generated-sigma-algebra
- thm-generated-sigma-algebra-exists-and-is-minimal
- def-pi-system
- def-lambda-system
- def-generated-lambda-system
- lem-generated-lambda-system-exists-and-is-minimal
- def-monotone-class
- def-generated-monotone-class
- lem-generated-monotone-class-exists-and-is-minimal
- def-borel-sigma-algebra
- def-trace-sigma-algebra
- def-set-limsup-and-liminf
- thm-sigma-algebra-closure-laws
- prop-set-limsup-and-liminf-membership
- thm-generated-sigma-algebra-calculus
- thm-generated-sigma-algebra-comparison-criterion

**Focus for this group.** These are the definitional spine the whole page rests on, so
a dropped axiom or a wrong closure clause propagates everywhere.

1. **The definitions.** Check each of `def-algebra-of-subsets`, `def-sigma-algebra`,
   `def-lambda-system`, `def-monotone-class` against the standard axioms. A λ-system
   needs `X` in it, closure under **proper** differences or under complements of
   members that sit inside one another, and closure under **increasing countable**
   unions — not arbitrary countable unions. A monotone class needs increasing unions
   AND decreasing intersections. If the page's definition differs from the source
   convention its own notes cite, say which convention is on disk and whether every
   later theorem uses that one.
2. **The three "exists and is minimal" results.** Each intersects a family of
   structures. Instantiate the **empty generator** `\mathcal E = \varnothing` and the
   **empty ambient set** `X = \varnothing` in each. Does the intersection family stay
   nonempty (is `\mathcal P(X)` actually shown to be a member)? Does the argument that
   an intersection of λ-systems is a λ-system actually verify every λ-system axiom, or
   only the σ-algebra ones?
3. **`thm-sigma-algebra-closure-laws` and `prop-set-limsup-and-liminf-membership`.**
   Both are boundary-sensitive. Check countable intersections are derived through
   complements correctly, and that `limsup`/`liminf` of a sequence of sets is the
   double union/intersection in the direction the definition on disk states — a
   swapped quantifier here is a false statement, not a typo. Instantiate a **constant**
   sequence and a sequence that is eventually empty.
4. **`thm-generated-sigma-algebra-calculus` and
   `thm-generated-sigma-algebra-comparison-criterion`.** These are the monotonicity /
   idempotence / comparison facts everything downstream cites. Check each clause is
   actually proved, in the direction stated, and that the comparison criterion's
   hypothesis is `\mathcal E\subseteq\sigma(\mathcal F)` in the direction the proof
   uses. An invented converse here is fatal.
