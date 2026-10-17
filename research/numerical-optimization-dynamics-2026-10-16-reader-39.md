# Step 3a reader report — batch 39

## Scope and inventory

The live autopilot status showed the run `numerical-optimization-dynamics-2026-10-16` in the `3a-read` stage, with no worker running. I reviewed both pages in the assigned manifest:

- `numerical-optimization-globalization-and-inexact-certificates` (A), at `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/numerical-optimization-globalization-and-inexact-certificates.md`.
- `numerical-optimization-globalization-and-inexact-certificates-examples` (B), at `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/numerical-optimization-globalization-and-inexact-certificates-examples.md`.

I reviewed all 11 assigned items in dependency order:

- Definition/algorithm and lemma: `alg-exact-gradient-line-search-step`, `lem-hessian-lower-bound-strong-convexity-gradient-gap`.
- Theorems: `thm-exact-line-search-gradient-descent-global-contraction`, `thm-armijo-gradient-descent-global-linear-rate`, `thm-damped-newton-global-phase-and-local-quadratic-rate`, `thm-inexact-gradient-residual-distance-certificate`.
- Examples: `ex-global-exact-line-search-on-an-anisotropic-quadratic`, `ex-damped-newton-halves-step-before-local-phase`, `ex-small-gradient-can-hide-error-at-ill-conditioned-minimizer`, `ex-approximate-gradient-residual-distance-certificate`, `ex-inner-quadrature-error-in-gradient-certificate`.

I also opened the 20 directly listed prerequisite items used by those claims: `def-directional-and-partial-derivatives`, `def-jacobian-matrix-and-gradient`, `alg-gradient-descent`, `thm-compact-subset-is-closed-and-bounded`, `thm-extreme-value-metric`, `def-hessian-and-euclidean-critical-point`, `thm-chain-rule-for-total-derivatives`, `cor-hessian-is-symmetric`, `thm-hessian-characterises-convexity`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `lem-geometric-sequence-null`, `thm-heine-borel-rn`, `thm-metric-continuity-characterisations`, `cor-mean-value-theorem`, `alg-damped-newton`, `lem-armijo-backtracking-terminates-for-strict-descent-directions`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, and `thm-newton-local-quadratic-convergence-under-lipschitz-hessian`.

I checked the 10 proof contracts in `research/numerical-optimization-dynamics-2026-10-16-batch-39.proof-contracts.json` against the current proof text, citations, and theorems' hypotheses. The exact-line-search algorithm is definition-like and has no proof-phase contract.

## Edits and evidence

- In `items/alg-exact-gradient-line-search-step.md`, added `def-hessian-and-euclidean-critical-point` to `deps`. The algorithm's admissibility condition uses the Hessian bound `mI <= H_f(y) <= MI`; this definition supplies the Hessian notation. Synchronized that dependency in the current batch manifest. The algorithm's Definition text did not change, so its theorem consumer's existing contract quote remains accurate; the algorithm has no stale `verification.judge` record.
- In the A-page Objective summary, clarified the damped-Newton qualification: for the theorem's global bounds `m,M` and local radius `rho`, the tolerance must satisfy `epsilon < m^2 rho^2/(2M)` to guarantee finite entry into the local ball. Otherwise the method may stop at the decrement test first. This matches `thm-damped-newton-global-phase-and-local-quadratic-rate`.

For the changed algorithm item, `reflow` reported `unchanged`; `precheck` reported `0 checked, 0 failing — all clean`; and `proof-layout` reported `1 items, 0 steps, 0 defects`. No proof steps changed, and no proof-contract update or judge-record removal was applicable to this algorithm.

## Unedited defects

None identified. No withdrawal is proposed.

## Page verdicts

- **A page:** Pass after the Objective summary clarification. Its summary now states the tolerance condition for guaranteed finite entry into the local Newton ball. The assigned mathematical claims and their directly listed prerequisites were sound on review.
- **B page:** Pass. Its summary matches the five examples; the exact arithmetic, residual/discrepancy split, and required certificate hypotheses are consistent with the item text.

## Blocker and coverage note

No blocker specific to batch 39. The live run status separately reports a `3a-split` blocker for batch 6 (`split-6` failed three times), outside this dispatch. I reviewed assigned items and all directly listed prerequisites, but did not re-audit every deeper published supplier in their transitive dependency closure. No defect was identified in the directly cited supplier arguments.
