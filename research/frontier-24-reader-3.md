# frontier-24 reader-3 report

Date: 2026-08-29
Batch: `3`
Run: `frontier-24`

## Opened scope

- Reader instructions: `briefs/reader.md`, `briefs/tasks/reader.md`, `research/frontier-24-reader.task.md`, and `research/frontier-24-dispatch/reader-reader-3.prompt.md`
- Batch artifacts: `research/frontier-24-batch-3.pages.json`, `research/frontier-24-batch-3.coverage.json`, `research/frontier-24-batch-3.notes.md`, `research/frontier-24-batch-3.proof-contracts.json`, and `research/frontier-24-step6-hash-3-pre.json`
- Build state and batch brief: `.autopilot/status.md`, `research/frontier-24-beta-3.task.md`, and the design section `research/plan-algebra-track-expansion-v2.md` at `LA-17`
- Assigned pages:
  - `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`
  - `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr-examples.md`
- Assigned items: all 34 manifest item files named in `research/frontier-24-batch-3.pages.json` (`24` A-page items and `10` B-page items)
- Required page dependency opened:
  - `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md`
- Direct dependency items opened for verification:
  - `def-abs-value`
  - `def-complex-conjugate-real-imaginary-part-and-modulus`
  - `def-condition-number-of-a-nonsingular-linear-system`
  - `def-inner-product-norm`
  - `def-invertible-matrix-and-general-linear-group`
  - `def-linear-isometry-and-orthogonal-or-unitary-operator`
  - `def-matrix-product-and-identity-matrix`
  - `def-rank-and-nullity`
  - `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`
  - `def-standard-relative-floating-point-model-and-unit-roundoff`
  - `def-triangular-and-diagonal-matrices-over-a-commutative-ring`
  - `lem-product-of-one-plus-deltas-gives-theta-n`
  - `thm-determinant-multiplicative`
  - `thm-determinant-of-a-triangular-matrix`
  - `thm-floating-point-dot-product-componentwise-and-normwise-error-bounds`
  - `thm-least-squares-solutions-and-normal-equation`
  - `thm-normal-equations-square-the-spectral-condition-number`
  - `thm-qr-factorisation-over-r-or-c`
  - `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`
  - `thm-sylvesters-criterion-for-positive-definiteness`

## Confirmed repairs

1. `items/thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost.md`
   - Confirmed a false-claim defect in the solve-cost statement: the item claimed the two triangular solves cost `n^2+O(n)` scalar operations, but the page's own scalar-operation convention from the triangular-solve theorem gives `2n^2+O(n)`.
   - Confirmed a second computation defect in the proof: the Cholesky update sum was evaluated as `\frac13 n^3+O(n^2)` from a displayed formula that actually summed to `\frac16 n^3+O(n^2)`.
   - Repair: corrected the statement to `2n^2+O(n)` scalar operations and rewrote the factorisation-count step so each stored symmetric update contributes one multiplication and one subtraction, recovering the stated `\frac13 n^3` versus `\frac23 n^3` comparison honestly.

2. `items/ex-plu-factorisation-by-hand.md`
   - Confirmed a false computation: the worked PLU example performed an unnecessary second pivot swap and listed `P`, `L`, and `U` that do not satisfy `PA=LU`.
   - Repair: replaced the factors with the correct one-swap partial-pivoting factorisation and rewrote the verification step to match the actual elimination sequence.

3. `items/ex-givens-qr-on-a-sparse-matrix.md`
   - Confirmed a false computation: the second Givens rotation parameters were incompatible with the vector `(-7/5,2)`, and the displayed `R` matrix was therefore incorrect.
   - Repair: replaced the second rotation by the correct parameters `c=-7/\sqrt{149}`, `s=10/\sqrt{149}` and updated the resulting upper-triangular factor to `\begin{pmatrix}5&24/5\\0&\sqrt{149}/5\\0&0\end{pmatrix}`.

4. `items/ex-cholesky-factorisation-and-solve.md`
   - Repaired an ill-formed example paragraph so the displayed matrix and displayed Cholesky factor are separate blocks on the current bytes.

5. `research/frontier-24-batch-3.proof-contracts.json`
   - Regenerated the affected contract entries for:
     - `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`
     - `ex-cholesky-factorisation-and-solve`
     - `ex-plu-factorisation-by-hand`
     - `ex-givens-qr-on-a-sparse-matrix`
   - Clarified four boundary rows that `boundary-audit` had flagged heuristically, then reread the corresponding items and confirmed they were genuine boundary checks rather than hidden mathematical gaps.

No stale `verification.judge` record was present on any repaired in-flight item, so no judge removal was needed.

## Page verdicts

- `direct-matrix-factorisations-lu-cholesky-and-qr`: pass after the Cholesky cost repair. The A-page now states and derives its scalar-operation counts consistently with the earlier triangular-solve convention.
- `direct-matrix-factorisations-lu-cholesky-and-qr-examples`: pass after the PLU and Givens computation repairs and the Cholesky display cleanup.

## Uneditable defects

None confirmed in the opened dependency closure.

## Notes

- `citation-fidelity` still reports one widening candidate on `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` fact line `[L2]` against `lem-product-of-one-plus-deltas-gives-theta-n`. I reread both current files and did not confirm a defect: the theorem uses that lemma only inside the nontrivial floating-point steps, so the candidate is heuristic rather than a real widening on the current bytes.

## Blockers

None.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost.md items/ex-plu-factorisation-by-hand.md items/ex-givens-qr-on-a-sparse-matrix.md items/ex-cholesky-factorisation-and-solve.md`
  - Result: all four changed files were rewritten into canonical proof-body line form.
- `node tools/regen-contract-entries.mjs research/frontier-24-batch-3.proof-contracts.json thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost ex-cholesky-factorisation-and-solve ex-plu-factorisation-by-hand ex-givens-qr-on-a-sparse-matrix`
  - Result: regenerated the four affected proof-contract entries.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost.md items/ex-plu-factorisation-by-hand.md items/ex-givens-qr-on-a-sparse-matrix.md items/ex-cholesky-factorisation-and-solve.md`
  - Result: pass, `4 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts <manifest-derived full batch-3 item scope>`
  - Result: pass, `25 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-24-batch-3.proof-contracts.json --strict`
  - Result: pass, `25/25 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-24-batch-3.proof-contracts.json --fail-on-missing-quote`
  - Result: pass on quote fidelity; one widening candidate remained and was read manually as noted above.
- `node tools/boundary-audit.mjs research/frontier-24-batch-3.proof-contracts.json --fail-on-contradicted`
  - Result: pass after the boundary-row clarifications; no contradicted dispositions remained.
- `node tools/rendercheck.mjs items/thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost.md items/ex-plu-factorisation-by-hand.md items/ex-givens-qr-on-a-sparse-matrix.md items/ex-cholesky-factorisation-and-solve.md library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr-examples.md`
  - Result: pass, `OK — 6 file(s)`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-3.coverage.json --require-destination`
  - Result: pass, `41 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-24-batch-3.pages.json`
  - Result: pass, `34 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check`
  - Result: pass.
