# Step 3a reader report — batch 27

Run: `numerical-optimization-dynamics-2026-10-16`  
Role: independent reader  
Coverage: batch `27`

## Verdict and blocker

- A page `proximal-gradient-and-accelerated-composite-optimization`: **pass after repairs**. Its hypotheses, proof dependencies, rate summaries, KKT qualification and item placement agree with the reviewed items.
- B page `proximal-gradient-and-accelerated-composite-optimization-examples`: **pass**. Its summary matches the four verified examples.
- No uneditable defect remains in batch 27. The reader work is unblocked. At handoff, `autopilot status` reports a separate run-level blocker: `3a-split` for batch 6 failed three times; this is outside batch 27.

## Opened inventory

Assigned pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/proximal-gradient-and-accelerated-composite-optimization.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/proximal-gradient-and-accelerated-composite-optimization-examples.md`

All 25 A-page items were read in dependency order:

`def-indicator-function-of-closed-convex-set`, `def-proper-closed-convex-function-on-rn`, `lem-l-smoothness-descent-inequality`, `def-extended-real-epsilon-subdifferential`, `def-proximal-mapping`, `def-strong-convex-composite-objective`, `lem-proper-closed-convex-function-affine-minorant`, `lem-smooth-composite-sum-preserves-proper-closed-convexity`, `lem-prox-indicator-is-euclidean-projection`, `thm-proximal-operator-existence-resolvent-firm-nonexpansive`, `def-proximal-gradient-mapping`, `lem-prox-l1-is-soft-thresholding`, `lem-proximal-three-point-inequality`, `alg-proximal-gradient-and-fista`, `lem-proximal-gradient-one-step-estimate`, `thm-projected-gradient-fixed-point-kkt-certificate`, `alg-certified-inexact-proximal-gradient-and-fista`, `lem-fista-energy-estimate-sequence`, `thm-proximal-gradient-o1k-objective-bound`, `lem-inexact-proximal-gradient-one-step-estimate`, `thm-fista-o1k2-objective-bound`, `lem-inexact-fista-energy-estimate`, `thm-inexact-proximal-gradient-summable-error-bound`, `thm-strong-convex-proximal-gradient-and-restarted-fista-rates`, and `thm-inexact-fista-weighted-error-bound`.

All four B-page examples were read after their suppliers: `ex-two-pixel-total-variation-proximal-map`, `ex-fista-objective-increases-on-a-quadratic`, `ex-nonorthogonal-lasso-proximal-gradient-step`, and `ex-projected-gradient-on-nonnegative-orthant`.

The four prerequisite page summaries were opened: `constrained-variational-problems-and-variational-inequalities` (PDE), `convex-and-semicontinuous-functions-on-rn` (real analysis), `inequality-kkt-duality-and-optimality-certificates` (current batch 6), and `sparse-high-dimensional-estimation-and-covariance` (mathematical statistics).

The batch 6 suppliers used by the projected-gradient KKT theorem were opened before that consumer: `def-inequality-constrained-program-and-kkt-geometry`, `def-kkt-residual-and-normal-cone`, and `thm-convex-kkt-sufficiency-and-normal-cone-certificate`. The current theorem proof gives the stated global-minimum and outward-normal conclusions under the hypotheses used by the consumer; no multiplier converse is assumed.

The direct published item suppliers inspected at the relevant definitions or statement clauses were: `cor-archimedean-reciprocal`, `cor-bolzano-weierstrass-in-rn`, `cor-mean-value-theorem`, `def-convex-and-strictly-convex-functionals-on-a-banach-space`, `def-convex-subset-of-euclidean-space`, `def-euclidean-inner-product`, `def-extended-reals`, `def-lasso-estimator`, `def-lipschitz-holder-contraction`, `def-metric-ball`, `def-metric-space`, `def-metric-topology`, `def-p-norms-on-rn`, `def-proper-coercive-and-weakly-lower-semicontinuous-functional`, `def-soft-thresholding-function`, `def-subgradient-and-subdifferential`, `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`, `lem-finite-sum-laws`, `lem-p-norms-are-norms-and-induce-the-published-metrics`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-chain-rule-for-total-derivatives`, `thm-differentiable-convex-functions-and-gradient-inequality`, `thm-euclidean-semicontinuity-level-set-characterisations`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-heine-borel-rn`, `thm-induction-principle`, and `thm-nearest-point-in-a-nonempty-closed-convex-set`. The nearest-point, projection variational-inequality, Bolzano–Weierstrass, and `thm-compact-implies-the-other-compactness-forms` proofs were read in full; the latter is the choice-free compactness implication used by Bolzano–Weierstrass. Other supplier checks focused on the exact claims used by this batch.

The assigned manifest, reader brief, batch authoring notes, proof-contract bundle, and author-check result were consulted as routing or evidence records, not as mathematical verdicts.

## Repairs and evidence

1. `items/lem-prox-l1-is-soft-thresholding.md`: changed the formula, facts and proof from indices `1,…,n` to `k<n`, matching `def-p-norms-on-rn` and the library’s definition of vectors in `R^n`. The old formula named a nonexistent `v_n` when `n=1`. The corresponding proof-contract derivations were synchronized. The direct consumers `ex-two-pixel-total-variation-proximal-map` (scalar case) and `ex-nonorthogonal-lasso-proximal-gradient-step` (coordinatewise vector case) remain valid under the corrected indexing.

2. `items/lem-proper-closed-convex-function-affine-minorant.md`: expanded the simplex argument establishing relative interior and the finite-dimensional limit steps for the nearest-point sequence, unit normal, closed direction subspace, and inner-product inequality. The statement and dependencies did not change. Its proof-contract derivations and inputs were synchronized.

3. `items/alg-proximal-gradient-and-fista.md`: changed `verification.precheck` from `pending` to `n/a`, since an algorithm has no proof phase under the content schema. Its procedure was unchanged.

No changed item had a `verification.judge` record to remove. The requested reflow and precheck commands were run for all three changed items. Reflow reported each unchanged; precheck passed the two proof items, and the algorithm had zero proof sections checked with no failures. The final batched proof-layout check reported **3 items, 9 steps, 0 defects**.

## Sources and limits

The independent local proofs and computations were checked directly. Primary-source passages consulted include Parikh–Boyd, *Proximal Algorithms*, §§1.1, 4.2 and 6.5.2 (https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf), and Schmidt–Le Roux–Bach, §3, Propositions 2–3 and Appendix Lemma 2 (https://arxiv.org/pdf/1109.2415). Those sections support the proximal definition, the soft-threshold rule, and the inexact proximal-model context; the batch’s recurrence and error-rate arguments are proved locally.

The web reader returned an internal error for the cited Beck–Teboulle author PDF (https://www.tau.ac.il/~becka/FISTA.pdf). The official SIAM bibliographic record confirmed the cited paper’s title and authors, but its full text and numbered sections were not independently opened in this review. The FISTA recurrence, rates, and finite decimal-interval witness were checked from the local proofs and calculations; no mathematical verdict here depends on the inaccessible full-text passage.

## Defects not edited

None.
