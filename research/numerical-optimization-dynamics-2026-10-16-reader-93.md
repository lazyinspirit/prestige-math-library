# Step 3a reader report — batch 93

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: reader  
Date: 2026-10-17

## Opened inventory

Assigned pages:

- `library/numerical-linear-algebra-and-approximation/sparse-grid-cubature-and-mixed-regularity.md` (A page)
- `library/numerical-linear-algebra-and-approximation/sparse-grid-cubature-and-mixed-regularity-examples.md` (B page)

Assigned items, reviewed in dependency order:

- Level 1: `def-smolyak-univariate-level-hierarchy`.
- Level 2: `def-smolyak-cubature`, `lem-smolyak-dyadic-tensor-simpson-convergence`.
- Level 3: `alg-smolyak-node-deduplication`, `def-smolyak-absolute-detail-summability`, `lem-smolyak-mixed-simpson-detail-decay`, `lem-smolyak-rectangular-telescope`.
- Level 4: `alg-dimension-adaptive-smolyak-surplus-selection`, `thm-smolyak-absolute-detail-reconstruction-and-tail-error`, `thm-smolyak-polynomial-multi-degree-exactness`.
- Level 5: `lem-smolyak-adaptive-surplus-termination`, `thm-smolyak-isotropic-mixed-smoothness-work-error-rate`.
- Level 6: `ex-smolyak-diagonal-ridge-breaks-mixed-regularity`.
- Level 8: `ex-smolyak-four-dimensional-product-integrand`, `ex-smolyak-signed-weights-polynomial-chaos-coefficient`.

Dependency items opened for the assigned arguments:

- Quadrature and finite algebra: `alg-composite-simpson-rule`, `def-finite-sum`, `lem-finite-sum-laws`, `def-monoid-finite-product`, `thm-composite-simpson-error-bound`, `thm-composite-simpson-exact-through-degree-three`, `def-higher-derivatives-and-smoothness`, `lem-triangle-inequality-finite`, `lem-of-triangle-inequality`, `thm-geometric-series`, `lem-geometric-sequence-null`, `lem-power-laws`.
- Multidimensional integration and compactness: `def-multidimensional-darboux-integral`, `def-multidimensional-grid-partition`, `def-multidimensional-darboux-sums`, `thm-multidimensional-riemann-criterion`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-extreme-value-metric`, `thm-multidimensional-integral-properties`, `cor-riemann-integral-of-a-product-function`, `thm-continuous-implies-integrable`, `thm-monotonicity-of-the-integral`, `thm-additivity-over-subintervals`, `thm-ftc-second-part`.
- Real analysis and order: `def-complete-ordered-field`, `def-real-limit`, `lem-rat-embeds-dense`, `thm-of-square-roots`, `lem-of-naturals-positive`, `lem-of-inverse-positive`, `lem-of-sign-rules`, `lem-of-mult-neg`, `lem-of-zero-mult`, `thm-of-archimedean`, `cor-of-one-positive`, `def-integer-power`, `lem-power-monotone`, `def-natural-logarithm`, `thm-natural-logarithm-laws`.
- Counting: `thm-stars-and-bars`, `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients`, `def-binomial-coefficient`, `thm-binomial-theorem`.
- Differentiation: `def-derivative`, `lem-derivative-of-a-power`, `thm-algebra-of-derivatives`.
- Clenshaw–Curtis and Gaussian quadrature: `def-na-clenshaw-curtis-quadrature`, `thm-na-clenshaw-curtis-exactness-and-near-best-error`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-derivatives`, `def-gauss-quadrature-rule`, `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`, `def-tensor-product-gauss-rule`, `thm-algebra-of-continuous-functions`.

## Edit and evidence

In `items/def-smolyak-cubature.md`, the Definition now explicitly sets
`δ_ℓ(f)` equal to the tensor-detail functional evaluated at `f`, and writes
`Q_Λ(f)` as the finite sum of those scalar details. The previous Definition
gave the tensor functional and its sum but did not bind the scalar notation
used by the absolute-summability definition, the adaptive procedure, and the
later tail and rate statements. The explicit equality makes those uses
unambiguous.

I refreshed the seven `def-smolyak-cubature` source excerpts in
`research/numerical-optimization-dynamics-2026-10-16-batch-93.proof-contracts.json`
for the rectangular telescope, reconstruction theorem, polynomial exactness
theorem, termination lemma, work/error theorem, and both cubature examples.
The Definition has no proof derivations and no `verification.judge` record, so
there was no proof-step contract or stale judge record to remove. Direct and
indirect assigned consumers were reviewed against the clarified notation.

Checks on the changed item:

- `node tools/tsx-run.mjs tools/reflow.mts items/def-smolyak-cubature.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-smolyak-cubature.md` — 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-smolyak-cubature.md` — 1 item, 0 steps, 0 defects.

## Review findings and page verdicts

- No mathematical defect remained unedited in the assigned items or in the dependency claims opened for this review.
- A page `sparse-grid-cubature-and-mixed-regularity`: the hierarchy, convergence, mixed-detail bound, telescoping, exactness, adaptive selection, termination, reconstruction, and work/error claims agree with the supplied hypotheses and derivations after the notation clarification. The page summary matches these results.
- B page `sparse-grid-cubature-and-mixed-regularity-examples`: the diagonal-ridge derivative failure, 48-node Clenshaw–Curtis computation, and negative Simpson–Smolyak value `-1/144` are supported by the displayed calculations. The Gaussian comparison uses positivity of the weights and the globally nonnegative polynomial; it asserts no Gaussian exactness. The page summary matches the examples.

## Blocker

The retained owner-reviewed boundary record for `def-smolyak-cubature` in the
proof-contract file binds `item_sha256`
`c56bc5d913c4ac46d93b0e86711385d6700c24e516bc36483f0c778ef6656d62`; the
current post-repair item hash is
`cbf81901bad5481b5fd9c37a3880e4ec74ca75c37c599edbddac68f7e69f6b6f`. I kept
the historical owner review intact and did not rebind or certify it. The owner
must decide how to refresh that hash-bound record before any gate that requires
it to apply to the current source.

No mathematical blocker remains. This review checked the assigned items and
the dependency statements and proof passages used by their arguments; it did
not recursively audit every upstream dependency closure.
