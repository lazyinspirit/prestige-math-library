# Step 5a reader report — batch 1

Run: `frontier-36-complete`  
Reader: `reader-1`  
Date: 2026-09-29

## Verdict

- A page `fredholm-determinants-and-the-lidskii-trace-formula`: **accepted**. Its summary accurately describes the local determinant construction, spectral properties, arbitrary-space support argument, and trace formula developed by the listed items.
- B page `fredholm-determinants-and-the-lidskii-trace-formula-examples`: **accepted**. Its summary accurately describes the finite-rank, diagonal, Volterra, and invariant-subspace examples.
- No confirmed defect was found in the assigned claims or page prose. No edits were made, so no contract update, judge-record removal, reflow, or precheck was required.
- Uneditable defects: none found, including in the three assigned carriers currently marked `published` (`def-fredholm-determinant`, `prop-fredholm-determinant-properties-for-trace-class-operators`, and `thm-lidskii-for-trace-class-operators`).
- Blocker: none.

## Opened page inventory

- `library/functional-analysis/fredholm-determinants-and-the-lidskii-trace-formula.md` (A)
- `library/functional-analysis/fredholm-determinants-and-the-lidskii-trace-formula-examples.md` (B)

## Opened assigned item inventory

All 21 item files listed in `research/frontier-36-complete-batch-1.pages.json` were opened. The 14 draft A-page items were:

- `def-algebraic-multiplicity-for-compact-operators`
- `lem-finite-rank-compressions-converge-in-trace-norm`
- `def-hilbert-exterior-power-and-induced-operator`
- `lem-trace-norm-of-hilbert-exterior-powers`
- `lem-weyl-eigenvalue-singular-value-inequalities`
- `lem-diagonal-trace-class-operator-on-ell-two`
- `lem-separable-trace-class-determinant-construction`
- `lem-fredholm-determinant-trace-norm-continuity-and-growth`
- `lem-fredholm-determinant-logarithmic-derivative`
- `lem-fredholm-determinant-zeros-and-algebraic-multiplicities`
- `lem-quasinilpotent-trace-class-operator-has-zero-trace`
- `lem-generalized-eigenspace-trace-decomposition`
- `lem-fredholm-determinant-spectral-product-from-power-traces`
- `lem-arbitrary-hilbert-fredholm-determinant-from-separable-support`

The three published A-page items opened were:

- `def-fredholm-determinant`
- `prop-fredholm-determinant-properties-for-trace-class-operators`
- `thm-lidskii-for-trace-class-operators`

The four draft B-page items opened were:

- `cex-invariant-subspace-need-not-reduce-an-operator`
- `ex-volterra-square-has-zero-trace`
- `ex-diagonal-trace-class-fredholm-determinant`
- `ex-fredholm-determinant-of-a-finite-rank-operator`

## Dependency and source checks

For load-bearing operator-theory claims, I also opened the current statements and proofs for the trace-class definition, nuclear-series characterization, singular-value decomposition, absolute value and singular values, trace-class ideal property, trace formula, Riesz–Schauder theorem, ascent/descent stabilization, Fredholm alternative, Riesz-projection definition and properties, and the AC/DC/Countable Choice implication. I consulted the Hilbert–Schmidt kernel and Hilbert–Schmidt product statements used by the Volterra example.

I read the relevant arguments in Kostenko, *Trace Ideals with Applications*, §§3.4.2–3.4.4 (printed pp. 36–42; PDF pp. 44–50): Theorem 3.4.2 gives the finite-prefix Weyl product inequality; Proposition 3.4.3 and Corollary 3.4.1 give the exterior-power trace-norm estimate and entire determinant growth; Theorem 3.4.4 and Corollary 3.4.2 give trace-norm continuity and multiplicativity; Theorems 3.4.5–3.4.7 give the comparison route through zero multiplicities, Hadamard factorization, the spectral product, and Lidskii's trace identity. The local items supply their own arguments where they strengthen or replace that route. Source: <https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf>.

## Edits and uneditable defects

- Edits: none.
- Confirmed or suspected defects that could not be edited: none.

## Coverage note

I opened both assigned pages and all 21 assigned item files, and checked the mathematical dependencies identified above. The dependency closure contains many additional elementary and functional-analysis leaves; I did not independently re-audit every such leaf or reread every bibliography entry. For routine facts not separately opened, I relied on the exact formulations quoted in the assigned items' facts and proofs. No unresolved uncertainty about those routine facts changed a verdict in this batch.
