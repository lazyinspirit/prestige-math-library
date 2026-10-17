# Step 3a reader report — batch 91

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Disposition: reviewed; no uneditable findings remain.

## Opened inventory

### Assigned pages

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/minimum-energy-paths-string-neb-and-saddle-certificates.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/minimum-energy-paths-string-neb-and-saddle-certificates-examples.md`

### Assigned items

The 18 items on the certificates page were opened in dependency order:

1. `def-regular-minimum-energy-path-in-a-collision-free-tube`
2. `lem-dimer-central-force-hessian-vector-error`
3. `lem-local-root-from-uniformly-small-residual`
4. `lem-local-root-in-max-norm`
5. `alg-finite-budget-dimer-mode-following`
6. `alg-finite-image-string-method`
7. `alg-improved-tangent-climbing-neb`
8. `def-validated-eigenvalue-enclosures-for-an-index-one-hessian`
9. `lem-centered-chord-and-unequal-step-tangent-error`
10. `lem-arc-length-polyline-interpolation-error`
11. `thm-local-index-one-saddle-certificate-from-enclosures`
12. `alg-index-one-eigenvector-following-step`
13. `prop-central-string-projected-force-consistency`
14. `thm-dimer-mode-perturbation-and-local-saddle-error`
15. `prop-improved-neb-monotone-tangent-has-first-order-projection-error`
16. `prop-index-one-eigenvector-step-is-the-local-newton-correction`
17. `thm-dimer-mode-error-contracts-local-saddle-translation`
18. `thm-gauge-fixed-stable-discrete-path-comparison`

The 7 examples-page items were also opened:

- `ex-dimer-hessian-vector-bias-noise-tradeoff`
- `ex-corner-and-cusp-break-the-string-tangent-hypotheses`
- `ex-curved-double-well-has-a-circular-minimum-energy-path`
- `ex-straight-chord-is-not-the-curved-double-well-path`
- `ex-index-two-maximum-fails-the-index-one-certificate`
- `ex-near-degenerate-saddle-modes-rotate-under-small-perturbations`
- `ex-zero-discrete-neb-residual-does-not-fix-a-continuum-path`

### Additional dependencies consulted

The following cited suppliers and elementary results were opened as needed to check definitions, hypotheses, and proof steps: `alg-newton-correction-for-vector-residuals`; `cor-cauchy-reals-lub-complete`; `cor-hessian-is-symmetric`; `cor-mean-value-theorem`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `cor-sin-x-over-x-limit`; `cor-taylor-lagrange-and-cauchy-remainders`; `def-c-one-map-and-local-inverse`; `def-ck-and-multi-index-notation-in-several-variables`; `def-finite-sum`; `def-hessian-and-euclidean-critical-point`; `def-invertible-euclidean-linear-map`; `def-jacobian-matrix-and-gradient`; `def-metric-ball`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `def-p-norms-on-rn`; `lem-euclidean-linear-maps-have-matrices-and-are-bounded`; `lem-finite-sum-laws`; `lem-metrics-on-rn`; `lem-of-abs-value`; `lem-of-triangle-inequality`; `lem-vector-newton-correction-error-under-lipschitz-jacobian`; `thm-banach-fixed-point`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-chain-rule-for-total-derivatives`; `thm-complete-subspace-iff-closed`; `thm-courant-fischer-min-max-principle`; `thm-euclidean-space-complete`; `thm-local-leading-eigenvector-stability-under-eigengap`; `thm-mean-value-inequality-for-total-derivatives`; `thm-metric-open-set-algebra`; `thm-multivariable-taylor-formula-with-lagrange-remainder`; `thm-operator-norm-is-the-largest-singular-value`; `thm-total-derivative-computes-directional-and-partial-derivatives`; and `thm-updated-jacobian-newton-local-quadratic-convergence`.

## Repairs made

All repairs below are to assigned in-flight items. No page prose needed editing.

- `lem-centered-chord-and-unequal-step-tangent-error`: restricted the stencil interval and required the full closed stencil segments to lie in it, so each Taylor expansion and derivative bound applies on the entire segment it uses. Evidence: the Taylor remainder supplier requires the curve and derivative bound along the segment; the revised `[A1]` now supplies that domain condition.
- `alg-index-one-eigenvector-following-step`: made `singular-jacobian` an explicit returned status from the Newton supplier; separated the last accepted mode reference from termination status; and treated overlap at or below the mode threshold as failure before sign alignment. Evidence: the supplier can return a singular solve, and the sign convention is defined only after a strictly positive overlap is established.
- `alg-improved-tangent-climbing-neb`: checks energy values before energy-dependent tangent branches, and gradients and assembled forces before force comparisons; documented the exact equal-neighbor-energy centered-chord fallback as a local tie convention. Evidence: nonfinite values cannot safely enter comparisons or convergence tests. The strict-extremum weights remain those in Henkelman–Jónsson, §IV, equations (8)–(12); the cited source does not prescribe this exact-tie fallback.
- `alg-finite-budget-dimer-mode-following`: separated termination status from `mode_status` and reports `mode-unverified`, since the finite procedure does not itself validate a spectral or eigenmode certificate. Evidence: its finite rotation and force tests do not establish the enclosure and mode-residual hypotheses used in the later theorem.
- `prop-central-string-projected-force-consistency`: stated the small-mesh and nonzero-chord conditions, defined the adjacent chord lengths, allowed any real spring constant and bounded its contribution using `|k|`; replaced an unsupported operator-norm step with a direct vector bound. Evidence: the centered-chord lemma supplies a normalized tangent only under its smallness condition, while Cauchy–Schwarz and the triangle inequality give the stated vector estimate.
- `lem-local-root-from-uniformly-small-residual`: added the finite-dimensional operator-norm theorem and cited it for existence of the defining maximum, the contraction bound, and the center estimate. Evidence: the proof's operator norm is defined as a maximum and must be known to exist before it can be used.
- `lem-local-root-in-max-norm`: justified the supremum in its max-norm operator estimate by a finite matrix row-sum bound and the real least-upper-bound property; added and cited the chain-rule fact for the contraction map. Evidence: finite dimensionality alone does not make the displayed supremum self-justifying in this development's stated dependencies.
- `thm-local-index-one-saddle-certificate-from-enclosures`: specified that Hessian Lipschitzness is in the induced Euclidean operator norm and added the operator-norm and Cauchy–Schwarz facts used in the eigenvalue perturbation proof. Evidence: these are the norms and inequalities used to transfer the Hessian enclosure to the nearby root.
- `thm-dimer-mode-perturbation-and-local-saddle-error`: made `epsilon > 0` and containment of the full dimer segment in the open domain explicit. Evidence: the paired-force Hessian-vector estimate requires both the finite-difference denominator and all evaluation points on its segment to be admissible.
- `thm-dimer-mode-error-contracts-local-saddle-translation`: replaced operator-norm input assumptions with explicit vectorwise Hessian-action bounds; proved the needed leading eigenspace estimate in the item using Courant–Fischer, Cauchy–Schwarz, and an eigenbasis projection; justified the operator-norm supremum needed by the vector Newton remainder supplier using boundedness of finite-dimensional linear maps and the real least-upper-bound property. Evidence: the proof now derives the perturbation estimate from exactly the vectorwise assumptions stated, without relying on the removed prior-run eigenvector-stability dependency.
- `ex-near-degenerate-saddle-modes-rotate-under-small-perturbations`: stated the perturbation as a vectorwise action and derived its size from `E^T E = delta^2 I`. Evidence: this directly verifies the perturbation used in the example without assuming an undeclared operator-norm convention.

For the source-based checks, the relevant primary statements were read at their cited locations: Henkelman and Jónsson, [improved tangent estimate](https://hj.hi.is/papers/paperNewTangent.pdf), §IV, equations (8)–(12); Henkelman, Uberuaga, and Jónsson, [climbing-image NEB](https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect04/climbimageNEB.pdf), §IV, equation (5); Henkelman and Jónsson, [dimer method](https://hj.hi.is/papers/paperDimer.pdf), §II A–C, equations (2)–(3), (18), and (21); E, Ren, and Vanden-Eijnden, [string method](https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf), §II, equations (2)–(6); E, Ren, and Vanden-Eijnden, [simplified string method](https://math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/SimplifiedString.pdf), §IV B–C; and Liu, Chen, and Ortner, [Convergence of the Discrete Minimum Energy Path](https://arxiv.org/pdf/2204.07467), §§2.1–2.3 and Remark 2.1. The vector Newton correction was also checked against Driscoll and Braun, [Fundamentals of Numerical Computation](https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html), §4.5.2, equations (90)–(93). The statements there agree with the claims cited; the quantitative local estimates in these items are proved from their stated hypotheses.

The affected proof contracts were regenerated for 8 proof-bearing items, with the edited algorithm/statement boundary excerpts updated. No `verification.judge` record remained on any changed item.

## Validation

- Reflow and precheck were run for each of the 11 changed item paths. Every proof-bearing item passed; algorithm items reported 0 proof checks and 0 failures.
- Final required layout pass: `node tools/proof-layout.mjs` on all 11 changed item paths reported `11 items, 35 steps, 0 defects`.

## Findings and page verdicts

- Certificates page: **PASS**. Its definitions, claims, proof dependencies, and summary are consistent after repair.
- Examples page: **PASS**. The examples support the stated limitations and do not overstate the assigned results.
- Uneditable defects: none found.
- Blocker: none.

Coverage: all assigned pages and all 25 assigned items were opened; dependencies needed for the checked claims were opened in dependency order. The cited source passages above were checked directly. No unresolved mathematical uncertainty remains in the reviewed scope.
