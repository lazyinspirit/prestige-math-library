# Step 3a reader report — batch 58

Run: `numerical-optimization-dynamics-2026-10-16`  
Reader: `reader-58`

## Opened inventory

Assigned pages:

- A page: `nonconvex-line-search-and-inexact-newton-methods`
- B page: `nonconvex-line-search-and-inexact-newton-methods-examples`

Assigned items, read in dependency order:

- `def-wolfe-and-strong-wolfe-conditions`
- `lem-strong-wolfe-step-exists-on-a-bounded-below-ray`
- `alg-bracketing-zoom-strong-wolfe-search`
- `lem-bracketing-zoom-finite-budget-checked-return`
- `lem-wolfe-step-lower-bound-from-the-descent-angle`
- `thm-zoutendijk-summability-for-wolfe-steps`
- `cor-uniform-descent-angle-implies-gradient-vanishing`
- `alg-inexact-newton-krylov-with-descent-safeguard`
- `lem-inexact-newton-krylov-finite-budget-checked-return`
- `lem-inexact-newton-error-recurrence-under-lipschitz-jacobian`
- `thm-inexact-newton-local-forcing-rates`
- `ex-rosenbrock-newton-step-satisfies-strong-wolfe`
- `ex-rosenbrock-indefinite-hessian-requires-descent-safeguard`
- `ex-inexact-newton-forcing-tolerance-cost-and-rate`

Opened the 18 item suppliers listed in the batch manifest: `def-c-one-map-and-local-inverse`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `thm-chain-rule-for-total-derivatives`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-derivative`, `cor-mean-value-theorem`, `def-hessian-and-euclidean-critical-point`, `def-matrix-product-and-identity-matrix`, `def-matrix-free-access-model-for-krylov-methods`, `def-krylov-subspace-of-a-matrix-and-start-vector`, `lem-vector-newton-correction-error-under-lipschitz-jacobian`, `lem-newton-contraction-near-an-invertible-derivative`, `def-invertible-euclidean-linear-map`, `lem-geometric-sequence-null`, `thm-continuous-partial-derivatives-imply-total-differentiability`, and `thm-symmetry-of-higher-mixed-partials`. The infimum supplier `thm-infimum-property` was opened for the repair below.

For the draft vector Taylor-remainder supplier, I also opened the integral definitions and results used in its proof: `def-vector-valued-derivative-and-integral`, `thm-continuous-implies-integrable`, `thm-newton-leibniz-with-interior-derivative`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `thm-norm-inequality-for-the-vector-valued-integral`, `cor-vector-valued-ftc-and-lipschitz-bound`, `thm-ftc-second-part`, and `thm-componentwise-limits-and-continuity`.

Opened the three page prerequisites listed in the manifest: `nonlinear-equations-and-newton-methods`, `krylov-methods-and-lanczos-convergence`, and `numerical-optimization-globalization-and-inexact-certificates`. Also inspected `batch-58.proof-contracts.json`, `batch-58.cross-batch-dependencies.json`, and `batch-58.coverage.json` as evidence, not as verdicts.

## Review and edit

The Wolfe existence proof, Wolfe step-length estimate, Zoutendijk sum, uniform-angle corollary, finite-budget procedures and their checked-return lemmas are consistent with their stated hypotheses. The local inexact-Newton recurrence and rate theorem keep the shifted/globalized algorithm separate from the unshifted full-step local branch. The Rosenbrock computations and scalar forcing example check out with the stated exact parameters and bounds.

One proof step in `lem-strong-wolfe-step-exists-on-a-bounded-below-ray` used `inf S` without explicitly supplying the infimum-existence result. I added `thm-infimum-property` to its dependencies and Facts & Assumptions, then made the left- and right-approximation argument at the crossing explicit. The published theorem states that every nonempty real set bounded below has a greatest lower bound; its `Statement` justifies the new `[F4]` used in step 2.1. Updated the item’s proof contract with the same citation and step mapping. The item had no `verification.judge` record, so there was no stale judge entry to remove.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-strong-wolfe-step-exists-on-a-bounded-below-ray.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-strong-wolfe-step-exists-on-a-bounded-below-ray.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-strong-wolfe-step-exists-on-a-bounded-below-ray.md` — 1 item, 4 steps, 0 defects.

## Source checks

- [Nocedal and Wright, *Numerical Optimization*, 2nd ed.](https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf): §3.1 Lemma 3.1 (printed pp. 35–36) gives the bounded-below-ray first-crossing and mean-value argument for a strict interval of strong-Wolfe steps; §3.2 Theorem 3.2 and proof (pp. 38–39) derive the angle-weighted summability estimate; §3.5 Algorithms 3.5–3.6 (pp. 60–62) give bracketing/zoom and reversed endpoint order; §7.1 Theorems 7.1–7.2 (pp. 166–168) state local forcing-rate results and explicitly retain local/unit-step scope.
- [Dembo, Eisenstat, and Steihaug, “Inexact Newton Methods”](https://wiki.math.ntnu.no/_media/tma4180/2018v/inexactnewton.pdf): Theorem 2.3 (printed pp. 402–403) gives local linear convergence under a forcing bound below one; Theorem 3.3 (pp. 404–405) characterizes superlinear and higher-order rates by residual size; Corollary 3.5 (pp. 406–407) gives the corresponding forcing-sequence conditions. These support the context, while the assigned items supply their own local recurrence and invariant-tube proof.
- [Hairer and Wanner, Chapter VI §VI.3](https://www.unige.ch/~hairer/poly/chap6.pdf), printed pp. 139–140, equation (3.3) and Theorem 3.2, presents the Newton Taylor-remainder identity. [Driscoll and Braun, §4.5.2, equation (90)](https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html) states the vector Taylor linear model. The draft supplier’s stated (L/2) bound was checked from its local integral proof and the opened FTC, norm-integral, and integral-order suppliers.

## Defects not edited

None. No defect remained in an uneditable batch-58 dependency or page.

## Page verdicts

- `nonconvex-line-search-and-inexact-newton-methods` (A): no outstanding defect detected after the local infimum-proof repair above. Its summary accurately limits Zoutendijk convergence to the angle-weighted sum, retains the descent-angle condition for gradient vanishing, and distinguishes the local full-step branch from globalized runs.
- `nonconvex-line-search-and-inexact-newton-methods-examples` (B): no defect detected. The stated examples correctly separate existence of a Wolfe interval from finite-budget discovery and verify the exact Newton and scalar forcing computations.

## Blocker and coverage limit

The batch-58 review has no blocker. The active run status separately reports an existing `3a-split` blocker because `split-6` failed three times for batch 6; that is outside this assignment.

All assigned pages and items, their manifest-listed direct item dependencies, and the three page prerequisites were opened. This review did not recursively re-audit every transitive dependency of the published suppliers or every section of the cited books. The cited source passages listed above were read; the mathematical arguments used by the assigned items were checked locally.
