# Step 3a reader report — batch 49

Run: `numerical-optimization-dynamics-2026-10-16`  
Scope: batch `49` only  
Manifest: `research/numerical-optimization-dynamics-2026-10-16-batch-49.pages.json`

## Opened pages

- `sylvester-and-lyapunov-matrix-equations` (assigned A page): read frontmatter and summary. Verdict: **no defect found**. The summaries match the conditional Schur/Bartels–Stewart claims, the Lyapunov results, and the ADI property results in the assigned items.
- `sylvester-and-lyapunov-matrix-equations-examples` (assigned B page): read frontmatter and summary. Verdict: **no defect found**. The summary accurately describes the three checked examples and does not claim a stochastic realization.
- Required pages consulted: `computed-schur-decompositions-and-nonnormal-spectra` and `strongly-continuous-semigroups-and-hille-yosida`.

## Assigned item inventory

Read in dependency order. The following A-page items were reviewed:

- Dependency level 0: `lem-sylvester-vectorization-isometry-and-kronecker-identity`; `lem-small-block-determinant-separation-lower-bound`; `def-hurwitz-matrix-and-continuous-lyapunov-equation`; `lem-adjugate-inverse-formula-over-a-field`.
- Dependency level 1: `def-sylvester-operator-and-separation-number`; `lem-hurwitz-matrix-exponential-decay-bound`; `lem-hurwitz-negative-shift-matrix-invertible`.
- Dependency level 2: `lem-sylvester-separation-controls-the-frobenius-error`; `thm-sylvester-unique-solvability-spectral-separation`; `thm-continuous-lyapunov-integral-and-positivity`; `alg-low-rank-alternating-direction-implicit-lyapunov`.
- Dependency level 3: `thm-sylvester-residual-to-forward-error-bound`; `thm-low-rank-adi-exact-residual-factor-identity`; `thm-low-rank-adi-finite-status-and-well-definedness`.
- Dependency level 4: `thm-low-rank-adi-conditional-convergence-bound`.
- Dependency level 5: `alg-bartels-stewart-sylvester-equation`.
- Dependency level 6: `thm-bartels-stewart-sylvester-exact-correctness`; `thm-bartels-stewart-dense-operation-count`.
- Dependency level 7: `thm-bartels-stewart-finite-status-and-local-pivot-uniqueness`.

Read the assigned B-page examples after their suppliers:

- `ex-stable-linear-noise-lyapunov-covariance`.
- `ex-nearly-colliding-sylvester-eigenvalue-sums`.
- `ex-low-rank-adi-residual-certificate`.

## Dependency and source evidence

Reviewed the exact cited clauses used by the assigned proofs from the published matrix-norm, SVD, determinant, operator, rank-nullity, characteristic-polynomial, square-root, exponential-series, and complex-conjugation suppliers. For Bartels–Stewart, reviewed the current batch-33 interfaces `def-real-and-complex-schur-forms`, `def-exact-real-2x2-discriminant-sign-predicate`, `lem-exact-rational-two-by-two-discriminant-sign`, and `alg-finite-budget-francis-schur-reduction`, plus `thm-finite-budget-francis-schur-termination-and-status`. The caller rechecks exact Schur identities before substitution; the finite-status theorem supplies only the delegated procedure's finite-status property.

For the ADI terminology and factorized method, consulted the run's downloaded Simoncini text, `research/numerical-optimization-dynamics-2026-10-16-batch-49-source-reading/simoncini-computational-methods-linear-matrix-equations.txt`: §4.4.2, PDF pp. 19–20, describes ADI for Sylvester/Lyapunov equations; §5.2.2 and equation (5.7), PDF pp. 26–27, give the Lyapunov two-half-step and low-rank factorized recurrences. The assigned residual and convergence identities were checked from their local derivations rather than attributed verbatim to that recurrence.

The run's `.autopilot/numerical-optimization-dynamics-2026-10-16` directory contained no rendered evidence-bundle files. The review used the current assigned pages/items and the dependency/source files listed above.

## Edits and defects

- Edits: none. No confirmed repair was needed; therefore no proof contract or `verification.judge` record was changed, and no reflow, precheck, or proof-layout command was required.
- Defects that could not be edited: none. No finding remains for routing.

## Blocker

No blocker for batch 49. At the status check, the run reported an existing `3a-split` blocker for `split-6` (covers batch 6); that blocker is outside this assignment.
