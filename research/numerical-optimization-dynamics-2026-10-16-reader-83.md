# Step 3a reader report — batch 83

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Scope: batch `83`

## Opened inventory

Opened both page carriers:

- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` (A)
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples` (B)

Opened all 23 items listed in `research/numerical-optimization-dynamics-2026-10-16-batch-83.pages.json`, in dependency order:

- Level 0: `def-stiefel-grassmann-optimization-conventions`; `def-complex-stiefel-grassmann-optimization-conventions`.
- Level 1: `prop-stiefel-grassmann-are-compact`; `prop-complex-stiefel-grassmann-are-compact`; `thm-stiefel-grassmann-tangent-projections`; `thm-complex-stiefel-grassmann-tangent-projections`.
- Level 2: `prop-stiefel-grassmann-riemannian-gradient-formulas`; `def-complex-grassmann-polar-retraction`.
- Level 3: `thm-complex-grassmann-polar-retraction-is-first-order`; `ex-repeated-eigenspace-on-grassmann`; `ex-riemannian-stiefel-nonconvex-saddle`; `ex-trace-eigenspace-optimization-with-lanczos-start-angle`.
- Level 4: `prop-complex-grassmann-projector-energy-gradient`; `def-stiefel-qr-polar-retractions`.
- Level 5: `thm-stiefel-retractions-are-first-order`.
- Level 6: `alg-riemannian-armijo-backtracking`; `alg-riemannian-trust-region`; `def-stiefel-grassmann-projected-vector-transport`.
- Level 7: `lem-riemannian-trust-region-ratio-accuracy-for-small-radii`; `prop-stiefel-grassmann-vector-transport-is-tangent`; `thm-retraction-armijo-acceptance-and-step-lower-bound`.
- Level 8: `thm-retraction-armijo-best-iterate-complexity`; `thm-riemannian-trust-region-first-order-complexity`.

Also opened the 28 unique direct item dependencies outside batch 83 used by these assignments: `def-stiefel-space-grassmannian-and-tautological-bundle`, `def-grassmannian-subspaces`, `def-riemannian-metric-and-riemannian-manifold`, `def-euclidean-inner-product`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `prop-tangent-space-of-a-regular-level-set-is-the-kernel`, `def-riemannian-gradient-of-a-smooth-function`, `lem-riemannian-gradient-vanishes-exactly-at-critical-points`, `def-jacobian-matrix-and-gradient`, `thm-non-negative-square-root-exists-and-is-unique`, `lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots`, `lem-matrix-inversion-preserves-ck-regularity`, `def-full-reduced-and-column-pivoted-computational-qr-factorisations`, `thm-gram-schmidt-orthonormalisation`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-scaled-householder-qr-backward-stability`, `alg-trust-region-cauchy-step`, `lem-trust-region-cauchy-decrease`, `thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `cor-mean-value-theorem`, `thm-extreme-value-metric`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `lem-natural-logarithm-bounded-by-argument`, `thm-of-archimedean`, `lem-geometric-sequence-null`, and `thm-lanczos-largest-ritz-value-chebyshev-bound-with-degenerate-cases`.

## Repairs and evidence

- `def-stiefel-grassmann-optimization-conventions`, proof 1.2: added the graph-chart projector calculation showing the quotient Frobenius pairing has smooth coefficients and agrees with the horizontal-representative pairing. The calculation uses the local frame sections from `def-stiefel-space-grassmannian-and-tautological-bundle` and directly expands the projector differential. Added the corresponding complex calculation in `def-complex-stiefel-grassmann-optimization-conventions`, proof 1.2.
- `thm-stiefel-grassmann-tangent-projections`, proof 2.2, and `thm-complex-stiefel-grassmann-tangent-projections`, proof 2.2: justified that vertical tangent directions are exactly `XΩ` by differentiating the orthogonal/unitary constraint and constructing the converse Cayley curve for each skew-symmetric/skew-Hermitian `Ω`.
- `prop-stiefel-grassmann-riemannian-gradient-formulas`, proof 1.2: replaced the unstated matrix-exponential curve with an explicit Cayley curve, showing invariance makes the differential vanish on vertical directions before passing to horizontal representatives.
- `def-stiefel-qr-polar-retractions`, Definition and proof 1.1/2.1: specified that Grassmann inputs use the unique horizontal representative; explicitly derived positive definiteness of `YᵀY` from full column rank before invoking the spectral and positive-square-root results; and traced frame changes of the horizontal input in the quotient-independence argument. Reviewed its direct and indirect assigned consumers: `thm-stiefel-retractions-are-first-order`, both Riemannian algorithms, `def-stiefel-grassmann-projected-vector-transport`, `lem-riemannian-trust-region-ratio-accuracy-for-small-radii`, `prop-stiefel-grassmann-vector-transport-is-tangent`, `thm-retraction-armijo-acceptance-and-step-lower-bound`, `thm-retraction-armijo-best-iterate-complexity`, and `thm-riemannian-trust-region-first-order-complexity`. Their uses are compatible with the clarified horizontal domain; no consumer repair was needed.
- `alg-riemannian-trust-region`, Definition: specified that the finite-budget subproblem routine receives the current model, radius, and tangent/horizontal space, and returns either a vector in that space or failure within its declared cap. The candidate and Cauchy-fraction checks remain explicit. Its assigned consumer lemmas and theorem were reviewed and need no change.
- `thm-retraction-armijo-best-iterate-complexity`, Statement: quantified the previously free `ε` with `ε>0`.
- `thm-riemannian-trust-region-first-order-complexity`, proof 2.1: made the first-order retraction and chain-rule argument explicit for identifying the pullback gradient at zero with the metric gradient.

Updated `research/numerical-optimization-dynamics-2026-10-16-batch-83.proof-contracts.json` for each repaired item, including changed step claims and current Definition/Statement anchors. The repaired carriers had no `verification.judge` records to remove.

## Defects not repaired

None confirmed in the assigned page or item carriers, and no uneditable mathematical dependency defect was confirmed.

## Page verdicts

- A page `riemannian-optimization-on-stiefel-and-grassmann-manifolds`: accepted after the item repairs above. The summary matches the reviewed geometry and algorithms and preserves the stated finite-budget, invariance, and first-order limitations.
- B page `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples`: accepted. The three listed examples’ witnesses, Rayleigh-quotient arithmetic, critical points, and page summary are consistent with their hypotheses and dependencies.

## Validation

- Reflow and precheck were run on every changed item. Reflow reported no change for eight items and reflowed `thm-riemannian-trust-region-first-order-complexity`; all proof-bearing items passed precheck, and the algorithm returned zero proof rows checked with zero failures.
- Final `node tools/proof-layout.mjs` on all nine changed item paths: `9 items, 27 steps, 0 defects`.

## Blocker and coverage note

No mathematical blocker remains for the manifest-scoped review. The separate generated `research/numerical-optimization-dynamics-2026-10-16-batch-83.item-scope.json` lists one extra ID, `ex-finite-basis-projector-optimization-on-grassmann`, that is absent from the assigned pages manifest and from both page carriers. I left it outside this dispatch’s scope; the owner/engine should reconcile that inventory discrepancy before treating the generated item-scope list as equivalent to the dispatch manifest.
