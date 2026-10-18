# Step 3a reader report — batch 22

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader (`reader-22`)

## Opened inventory

- Dispatch materials: `research/numerical-analysis-remaining-71-2026-10-17-batch-22.pages.json`, `briefs/reader.md`, and `research/numerical-analysis-remaining-71-2026-10-17-batch-22.proof-contracts.json`.
- Assigned A page: `library/numerical-linear-algebra-and-approximation/polynomial-eigenproblems-and-linearization.md`.
- Assigned B page: `library/numerical-linear-algebra-and-approximation/polynomial-eigenproblems-and-linearization-examples.md`.
- Page prerequisite opened for context: `library/numerical-linear-algebra-and-approximation/restarted-and-block-eigensolvers.md` (published; inspected at page level only).
- Items opened in dependency order:
  1. `items/def-matrix-polynomial-and-homogeneous-eigenpairs.md`
  2. `items/def-first-frobenius-companion-pencil.md`
  3. `items/def-coefficientwise-weighted-backward-error-for-matrix-polynomial.md`
  4. `items/def-rational-matrix-eigenproblem-and-pole-domain.md`
  5. `items/thm-first-companion-pencil-is-strong-linearization.md`
  6. `items/lem-first-companion-pencil-residual-transfer.md`
  7. `items/thm-exact-coefficientwise-weighted-backward-error.md`
  8. `items/prop-clearing-a-common-denominator-away-from-poles.md`
  9. `items/ex-quadratic-damped-vibration-first-companion-pencil.md`
  10. `items/ex-infinite-polynomial-eigenvalue-from-singular-leading-coefficient.md`
  11. `items/ex-rational-transfer-function-pole-is-a-spurious-cleared-root.md`

The batch contract claims, cited dependency statements, derivations, boundary cases, and finite-check dispositions were compared with the current item text. The run status recomputed from `.autopilot/` was `running`, with batch 22 uncovered; no matching closeout commit appeared in `git log`.

## Review

- `def-matrix-polynomial-and-homogeneous-eigenpairs`: grade, regularity, homogeneous representative invariance, finite and infinite parameters, reversal, and multiplicity definitions are consistent.
- `def-first-frobenius-companion-pencil`: the block dimensions, signs, pencil expansion, and finite lift are consistent, including grade one.
- `def-coefficientwise-weighted-backward-error-for-matrix-polynomial`: the feasible set, positive weights, projective invariance, and unrestricted coefficient perturbations are stated consistently.
- `def-rational-matrix-eigenproblem-and-pole-domain`: the reduced common denominator gives the stated pole-free domain, and the cleared equation is properly restricted to that domain.
- `thm-first-companion-pencil-is-strong-linearization`: the block elimination, determinant sign, polynomial unimodular operations, reversal argument, eigenspace correspondence, and degree-defect multiplicity proof support the statement.
- `lem-first-companion-pencil-residual-transfer`: back-substitution gives the displayed factors; the Frobenius norm estimate and scalar unbounded-ratio example check out.
- `thm-exact-coefficientwise-weighted-backward-error`: the lower bound, rank-one feasible minimizer, cost calculation, endpoint formulas, and reversal-weight reindexing support the statement.
- `prop-clearing-a-common-denominator-away-from-poles`: multiplication and division by the nonzero denominator prove the equivalence on the domain; poles remain excluded.
- `ex-quadratic-damped-vibration-first-companion-pencil`: the roots, determinant, and lifted pencil residual are computed correctly.
- `ex-infinite-polynomial-eigenvalue-from-singular-leading-coefficient`: the finite and infinite eigenvalues, reversal, algebraic multiplicity, and geometric multiplicity are computed correctly.
- `ex-rational-transfer-function-pole-is-a-spurious-cleared-root`: the realization, common denominator, cleared kernel, and absence of in-domain rational eigenpairs are computed correctly.

## Page verdicts

- `polynomial-eigenproblems-and-linearization`: pass. Its summary accurately covers the assigned definitions, results, and conventions.
- `polynomial-eigenproblems-and-linearization-examples`: pass. Its summary accurately describes the three assigned examples.

## Edits, uneditable defects, and blockers

- Edits: none. No confirmed defect requiring repair was found.
- Uneditable defects: none.
- Blockers: none.
- `node tools/proof-layout.mjs` was not run because no item was changed.

## Coverage note

All assigned pages and all eleven manifest-listed items were opened and reviewed. The declared published page prerequisite was opened only to check the page-level context; its listed item proofs were not needed to verify this batch's claims and were not audited. No external literature search was needed because the proofs and computations could be checked directly from the displayed definitions and algebra.
