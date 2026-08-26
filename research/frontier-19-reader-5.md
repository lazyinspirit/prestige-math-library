# frontier-19 reader-5 report

## Repaired Findings
1. Subject: `def-combinatorial-specification-and-order-raising-recursion`
   Location: definition opening paragraph.
   Defect: `ill-formed`.
   Evidence: the item wrote the operator as `F_\Phi : R\llbracket x\rrbracket \to R\llbracket x\rrbracket` before introducing the coefficient ring `R`.
   Severity: fatal.

2. Subject: `thm-order-raising-recursive-specifications-have-unique-solutions`
   Location: Statement and Facts & Assumptions.
   Defect: `ill-formed`.
   Evidence: the theorem quantified over `R\llbracket x\rrbracket` without first declaring `R`, so the carrier of the fixed-point argument was not typed.
   Severity: fatal.

3. Subject: `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t`
   Location: Proof, originally the final step applying `thm-sequence-construction-generating-function`.
   Defect: `missing-hypothesis`.
   Evidence: the proof invoked the sequence theorem without first establishing that the tree class has no size-zero objects, even though that hypothesis is load-bearing in the cited theorem; it also used the atomic-class factor `x` without citing it.
   Severity: fatal.

4. Subject: `cor-major-index-generating-function-is-q-factorial`
   Location: Proof step `1.1`.
   Defect: `citation-inaccurate`.
   Evidence: the proof reindexed the sum by Foata's transformation, but cited only the major-index-to-inversion theorem; the needed bijectivity fact lives in `lem-foata-transformation-is-bijective`.
   Severity: fatal.

5. Subject: `cor-eulerian-polynomial-exponential-generating-function`
   Location: Statement and proof step `3.1`.
   Defect: `ill-formed`.
   Evidence: the quotient `\frac{t-1}{t-e^{(t-1)x}}` was stated over a general commutative `\mathbb{Q}`-algebra even though the denominator need not be a unit there; the formal-series ambient ring had to be specified.
   Severity: fatal.

6. Subject: `ex-foata-transformation-on-three-one-four-two`
   Location: title, Example paragraph, and Verification steps `1.1`-`2.1`.
   Defect: `false-claim`.
   Evidence: the page explicitly fixes zero-based symmetric-group notation, but the example used the one-based permutation `[3,1,4,2]`, which is not an element of `S_4` under the stated convention.
   Severity: fatal.

## Edits
- Edited `items/def-combinatorial-specification-and-order-raising-recursion.md` to introduce the coefficient ring `R` explicitly.
- Edited `items/thm-order-raising-recursive-specifications-have-unique-solutions.md` to type the fixed-point theorem over a declared commutative ring.
- Edited `items/cor-plane-trees-satisfy-t-equals-z-over-one-minus-t.md` to make the no-size-zero hypothesis explicit before applying the sequence theorem, and to cite the atomic class for the factor `x`.
- Edited `items/cor-major-index-generating-function-is-q-factorial.md` to add the missing Foata-bijection dependency and cite it in the proof.
- Edited `items/cor-eulerian-polynomial-exponential-generating-function.md` to place the closed form in the precise ambient ring `\mathbb{Q}(t)\llbracket x\rrbracket` and to record why the denominator is invertible there.
- Edited `items/ex-foata-transformation-on-three-one-four-two.md` to replace the invalid one-based example by the correct zero-based example `[2,0,3,1] \mapsto [2,3,0,1]`.
- Updated `research/frontier-19-batch-5.proof-contracts.json` for the repaired proofs, the renumbered plane-tree proof, the new Foata-bijection citation, the corrected Foata example, and the fixed-point-theorem quote consumed by `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared`.
- No assigned page file required prose edits.
- Ran the required `reflow`/`precheck` pair on every changed item on August 25, 2026; all changed items now pass precheck.

## Coverage
Opened 67 assigned item files and all 4 assigned page files.

Opened 32 cited published dependency items needed for verification of the mathematics in the assigned batch. I also inspected `lem-binomial-series-for-a-repeated-pole` and `ex-negative-binomial-series` while checking an alternative repair route for the Eulerian-polynomial EGF item; those exploratory reads were not needed in the final repaired proof.

Page verdicts:
- `combinatorial-classes-and-the-symbolic-method`: pass after repaired item-level defects.
- `combinatorial-classes-and-the-symbolic-method-examples`: pass.
- `permutation-statistics-inversions-and-eulerian-numbers`: pass after repaired item-level defects.
- `permutation-statistics-inversions-and-eulerian-numbers-examples`: pass after the Foata example repair.

## Blockers
No indispensable mathematical blocker remains for batch 5.

Non-routable authority note: `research/frontier-19-batch-5.pages.json` is stale relative to current item frontmatter for six items:
`cor-integer-partitions-have-euler-product`,
`lem-cyclic-rotation-fixed-tuples-are-periodic`,
`cor-plane-trees-satisfy-t-equals-z-over-one-minus-t`,
`cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared`,
`thm-worpitzky-identity`,
and `cor-eulerian-polynomial-exponential-generating-function`.
The mismatches are in dependency lists, and Step 6a authority here did not extend to editing that research manifest.
