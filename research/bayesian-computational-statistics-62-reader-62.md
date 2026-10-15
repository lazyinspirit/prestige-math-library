# Step 3a reader report — batch 62

Run: `bayesian-computational-statistics-62`  
Role: reader  
Assigned scope: batch `62`

## Opened inventory

The batch manifest opened was `research/bayesian-computational-statistics-62-batch-62.pages.json`. The two assigned pages opened were:

- `library/bayesian-computational-statistics/identifiability-and-approximation-bias-in-computational-inference.md`
- `library/bayesian-computational-statistics/identifiability-and-approximation-bias-in-computational-inference-examples.md`

All nine listed items were opened:

- `thm-total-variation-bounds-for-expectations`
- `def-exact-inferential-target-and-approximation-chain`
- `thm-metric-approximation-error-decomposition`
- `lem-gaussian-density-integrals-for-supplied-length-measures`
- `cex-local-hessian-does-not-capture-multiple-modes`
- `cex-mean-field-variational-posterior-misses-correlation`
- `cex-synthetic-likelihood-changes-inferential-target`
- `cex-identifiable-nonconstant-summary-loses-parameter`
- `cex-positive-abc-tolerance-changes-posterior-target`

Supplier items opened to check the assigned claims included:

- Measure and integration: `def-measure`, `def-measure-with-density`, `def-probability-measure`, `def-total-variation-distance-for-probability-laws`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-of-a-nonnegative-simple-function`, `def-nonnegative-lebesgue-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-additivity-of-the-nonnegative-lebesgue-integral`, `prop-measure-monotonicity`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-integration-against-a-density`, `thm-monotone-convergence-for-the-integral`, `thm-dominated-convergence`, `thm-continuity-from-below-for-measures`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, and `thm-measure-uniqueness-on-a-sigma-finite-pi-system`.
- Statistical models and summaries: `def-measurable-function-between-measurable-spaces`, `def-statistical-experiment`, `def-parametric-statistical-model`, `def-observational-equivalence`, `def-estimand-on-a-statistical-model`, `def-identifiability-of-an-estimand`, `def-dominated-statistical-experiment`, `def-likelihood-density`, `def-statistic-and-estimator`, `def-countable-choice`, `def-axiom-of-choice`, `def-measure-kernel-and-probability-kernel`, `def-bayesian-model-as-prior-and-sampling-kernel`, `def-synthetic-likelihood`, `def-approximate-bayesian-computation`, `lem-prior-and-model-kernel-define-joint-law`, `thm-change-of-variables-for-expectation`, `def-identically-distributed-and-iid-random-variables`, and `thm-abc-rejection-target-is-tolerance-conditioned-posterior` with its supplier `alg-abc-rejection`.
- Borel, Euclidean, and Gaussian facts: `def-borel-sigma-algebra`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-borel-sets-are-lebesgue-measurable`, `thm-borel-sigma-algebra-of-a-subspace-is-the-trace`, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, `thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `lem-positive-definite-gaussian-integral`, `thm-gaussian-integral`, `thm-rationals-countable`, `lem-rat-embeds-dense`, `thm-euclidean-space-complete`, `def-complete-metric-space`, `def-separable-space`, `def-polish-space`, and `def-standard-borel-space`.
- Real analysis and calculus: `cor-archimedean-reciprocal`, `cor-cauchy-reals-lub-complete`, `thm-of-archimedean`, `thm-reals-ordered-field`, `lem-of-abs-value`, `lem-of-square-monotone`, `thm-of-square-roots`, `thm-multidimensional-darboux-equals-riemann`, `thm-continuous-implies-integrable`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-exponential-beats-every-polynomial`, `thm-integration-by-parts`, `thm-substitution`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, `thm-algebra-of-derivatives`, `cor-differentiable-implies-continuous`, `cor-mean-value-theorem`, and `thm-geometric-series`.
- Run-local draft suppliers opened as context: `def-statistical-and-computational-error-ledger`, `thm-error-ledger-mse-covariance-identity`, `thm-pathwise-error-ledger-decomposition`, `lem-positive-definite-gaussian-integral`, `thm-laplace-approximation-under-unique-interior-maximum`, `def-variational-family-and-elbo`, `def-synthetic-likelihood`, `def-approximate-bayesian-computation`, `def-bayesian-model-as-prior-and-sampling-kernel`, `thm-abc-rejection-target-is-tolerance-conditioned-posterior`, and `alg-abc-rejection`.

The current batch proof-contract file was consulted for the two edited rows. I also opened `research/bayesian-computational-statistics-62-batch-62.notes.md` as authoring evidence; I did not treat its source or readiness claims as verdicts. No task-specific Step 3a rendered evidence bundle was present in the discovered run/research paths, so I reviewed the current on-disk pages, items, and the suppliers listed above.

## Edits and evidence

1. In `items/cex-local-hessian-does-not-capture-multiple-modes.md`, the facts named `p_θ(0)` although the indexed experiment defines `p_{n,θ}`. I now specify the observation in the nth experiment and define `ℓ_{n,0}(θ) := p_{n,θ}(0)`; step 1.2 and its evidence normalizer use that same indexed version. The exact posterior calculation is otherwise unchanged. The batch-62 proof-contract derivation for step 1.2 was updated to match.

2. In `items/cex-mean-field-variational-posterior-misses-correlation.md`, step 4.1 computed the derivative of the variance objective and inferred its unique global maximum from the sign change without supplying the logarithm derivative or the mean value theorem needed for that inference. I added direct dependencies and facts for the logarithm derivative, derivative algebra, differentiability implying continuity, and the mean value theorem. The proof now applies the mean value theorem on `[v, β]` or `[β, v]` to show strict inequality away from `β=3/4`, which proves the unique global maximum over `v>0`. I also recorded the identity and constant derivatives from their difference quotients. The proof-contract row now carries those citations and the matching derivation; its quoted ELBO definition was refreshed to match the current `def-variational-family-and-elbo` text.

3. The same mean-field item cited Blei, Kucukelbir, and McAuliffe’s review at “PDF pp. 2–3” for §2.3 and Figure 1. The source places §2.3 on printed p. 862 and Figure 1 on printed p. 863 (PDF pp. 5–6), where it describes the independent factors, decoupled covariance, and marginal variance underrepresentation. I corrected the locator. The source supports the general motivation; the example’s exact optimizer remains established by its own calculation.

The current proof-contract file `research/bayesian-computational-statistics-62-batch-62.proof-contracts.json` was updated only for the edited item rows. Existing hash-bound template-review records were left intact as historical records for their prior item bytes; they do not certify the edited bytes. Neither edited item had a `verification.judge` record to remove.

## Other reviewed mathematics

The total-variation theorem uses the event-supremum convention and correctly gives constants `M` for `0≤g≤M` and `2M` for `|f|≤M`. The fixed-data target definition explicitly requires a supplied measurable likelihood version and finite positive evidence. The metric-chain theorem states a triangle upper bound, and the A-page summary correctly describes it as such. The Gaussian supplier-measure lemma’s face-null, compact Darboux comparison, cutoff, normalizer, and moment calculations are supported by its explicit volume hypothesis and opened integration results. The local-Hessian example has valid discrete likelihood rows and gives a symmetric posterior whose two interior modes each have second derivative `−8`; its one-mode Gaussian’s half-line probability tends to one while the full posterior’s is one half. The synthetic-likelihood example’s finite means, variances, exact posterior, and Gaussian synthetic posterior calculate to the stated values. The summary-loss and positive-tolerance ABC examples give the stated event-conditioned masses and total-variation discrepancies. I found no further confirmed defect in the assigned items or either page.

## Page verdicts

- `identifiability-and-approximation-bias-in-computational-inference` (A page): sound after review. Its summary preserves the exact target, metric-bound, total-variation, and supplied-measure qualifications.
- `identifiability-and-approximation-bias-in-computational-inference-examples` (B page): sound after the assigned-item repairs. The summary’s five mechanisms and its Countable Choice qualification for the Laplace example match the reviewed examples.

## Unedited defects

None confirmed. No withdrawal was proposed.

## Validation

- `reflow.mts`: both edited items reported unchanged.
- `precheck.mts`: both edited items passed.
- `node tools/proof-layout.mjs items/cex-local-hessian-does-not-capture-multiple-modes.md items/cex-mean-field-variational-posterior-misses-correlation.md`: 2 items, 10 steps, 0 defects.

## Blocker and coverage limits

The run status command could not recompute live state because `tools/autopilot/stages/mathlib.mts` imports the missing `tools/step6-finalize.mjs`; it fell back to the last report, which showed the run as running but did not list reader-62. This does not block the mathematical review, but live run state could not be confirmed by that command. Some supplier files (including the total-variation theorem and the ABC algorithm supplier) were opened after an assigned consumer and then checked before the verdict, so I do not claim that every file was first opened in dependency order. I opened the local suppliers needed for the specific claims reviewed, but did not audit every transitive dependency of every supplier. External bibliography locators were spot-checked rather than exhaustively audited; the Blei locator correction above is the one confirmed citation repair.
