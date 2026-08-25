# frontier-18 reader-8 report

Batch: `8`
Run: `frontier-18`
Role: independent reader, step `6a`
Date: 2026-08-24

## Scope

- Pages opened: `the-winding-number-and-the-global-cauchy-theorem`, `the-winding-number-and-the-global-cauchy-theorem-examples`, `holomorphic-functions-of-several-variables`, `holomorphic-functions-of-several-variables-examples`
- Structural checks completed:
  - Both A pages satisfy the fixed two-paragraph summary contract and each paragraph is under 150 words.
  - Both B pages are clean stubs with no authored body.
  - Every scoped mathematical-content item carries `provenance.statement` and `provenance.proof`.
  - No scoped item depends on a `deps` target whose `provenance.statement` is `ai-generated`.
  - No scoped item currently carries a `verification.judge` block.

## Findings

### R8-1

- Item: `thm-continuous-logarithms-exist-along-a-contour`
- Location: proof step `2.2`
- Severity: `fatal`
- Defect: the step cites [[thm-recursion]] to justify the existence of a finite sequence `c_0,\dots,c_r` with the index-dependent rule
  `c_{i+1}=c_i+L_i(\gamma(t_{i+1}))-L_i(\gamma(t_i))`.
- Evidence: [items/thm-recursion.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-recursion.md) states only the standard recursion theorem for a fixed self-map `f:A -> A`, i.e. `g(0)=a` and `g(σ(n))=f(g(n))`. It does not license a finite recurrence whose update term depends on `i` through the varying branches `L_i`. The step's conclusion is true, but the cited dependency is too weak for the inference as written.
- Repair plan: replace the `thm-recursion` citation with an explicit finite definition/induction on the partition index, and update the proof-contract row for step `2.2`.

### R8-2

- Item: `thm-cauchy-integral-formula-on-a-polydisc`
- Location: proof step `1.2`
- Severity: `fatal`
- Defect: the step cited [[thm-recursion]] to justify the downward definition of the finite family `H_m,H_{m-1},...,H_0` of iterated integrals.
- Evidence: [items/thm-recursion.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-recursion.md) states only natural recursion for a fixed self-map on one set. It does not license this stage-dependent backward construction of a finite family of functions indexed by `p`, so the cited dependency was too weak for the proof step as written.
- Repair plan: replace the bad citation with an explicit finite downward definition of the `H_p`, remove the stray forward reference created during repair, and update the proof-contract row for step `1.2`.

## Changes made

- Repaired [thm-continuous-logarithms-exist-along-a-contour](/home/lazyinspirit/Projects/prestige-math-library/items/thm-continuous-logarithms-exist-along-a-contour.md) by replacing the mis-cited recursion step with an explicit finite definition of `c_0,\dots,c_r`, removing `thm-recursion` from `deps`, and updating the local fact numbering.
- Repaired [thm-cauchy-integral-formula-on-a-polydisc](/home/lazyinspirit/Projects/prestige-math-library/items/thm-cauchy-integral-formula-on-a-polydisc.md) by replacing the mis-cited recursion step with an explicit finite downward definition of `H_p`, removing `thm-recursion` from `deps`, and removing the transient forward reference that `precheck` rejected.
- Updated [research/frontier-18-batch-8.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-8.proof-contracts.json) to match the repaired proof text and citation usage for both items.

## Gate results

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-continuous-logarithms-exist-along-a-contour.md items/thm-cauchy-integral-formula-on-a-polydisc.md`
  - final result: both files unchanged
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-continuous-logarithms-exist-along-a-contour.md items/thm-cauchy-integral-formula-on-a-polydisc.md`
  - final result: `2 checked, 0 failing`

## Coverage notes

- Scoped item files opened: `81/81`
- Proof-step, citation, provenance, page-summary, and boundary-case review completed for batch `8`.
- Per-page verdicts:
  - `the-winding-number-and-the-global-cauchy-theorem`: repaired and clean after `R8-1`
  - `the-winding-number-and-the-global-cauchy-theorem-examples`: clean read
  - `holomorphic-functions-of-several-variables`: repaired and clean after `R8-2`
  - `holomorphic-functions-of-several-variables-examples`: clean read
