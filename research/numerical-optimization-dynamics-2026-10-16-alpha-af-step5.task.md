# Step 5 adjudication — group **af**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 102, 103, 107: 3 A/B pair(s), 6 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **102**: `research/numerical-optimization-dynamics-2026-10-16-batch-102-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **103**: `research/numerical-optimization-dynamics-2026-10-16-batch-103-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **107**: `research/numerical-optimization-dynamics-2026-10-16-batch-107-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 102 | `numerical-identifiability-and-optimal-experiment-design` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2488 | `response-surfaces-and-optimal-design`, `inequality-kkt-duality-and-optimality-certificates`, `proximal-gradient-and-accelerated-composite-optimization`, `gauss-newton-and-levenberg-marquardt-methods`, `discrete-continuous-and-pde-adjoint-sensitivities` |
| 102 | `numerical-identifiability-and-optimal-experiment-design-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2489 | `numerical-identifiability-and-optimal-experiment-design` |
| 103 | `simulation-gradient-estimation-and-simultaneous-perturbation` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2490 | `numerical-differentiation-and-derivative-error-control`, `stochastic-approximation-and-stochastic-gradient-methods`, `discrete-continuous-and-pde-adjoint-sensitivities`, `fisher-information-and-finite-sample-information-bounds`, `conformal-prediction-and-exchangeable-ranks` |
| 103 | `simulation-gradient-estimation-and-simultaneous-perturbation-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2491 | `simulation-gradient-estimation-and-simultaneous-perturbation` |
| 107 | `global-sensitivity-anova-and-sobol-estimation` | A | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2498 | `conditional-expectation`, `randomized-quasi-monte-carlo-and-replicates`, `polynomial-chaos-stochastic-collocation-and-galerkin-uq` |
| 107 | `global-sensitivity-anova-and-sobol-estimation-examples` | B | numerical-optimization-inverse-problems-and-uncertainty-quantification | 2499 | `global-sensitivity-anova-and-sobol-estimation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `numerical-identifiability-and-optimal-experiment-design` — Numerical identifiability and optimal experiment design (12 item(s))

- `def-nonlinear-experimental-design-and-local-identifiability` · definition — Finite nonlinear observation designs, local identifiability, and weighted information
- `lem-computed-sensitivity-singular-value-perturbation` · lemma — Computed sensitivity errors perturb every singular value by at most their operator-norm error
- `lem-logdet-information-perturbation-bound` · lemma — A uniform positive eigenvalue floor controls log-determinant error
- `alg-finite-budget-multiplicative-d-optimal-design` · algorithm — Finite-budget multiplicative update for approximate D-optimal design
- `lem-information-matrix-perturbation-bound` · lemma — Computed Jacobian error controls the weighted information-matrix error
- `rem-gauss-newton-information-is-not-full-hessian` · remark — The Gauss–Newton information term omits residual curvature from the full Hessian
- `thm-full-rank-sensitivity-implies-local-identifiability` · theorem — Full column rank of the sensitivity Jacobian implies local identifiability
- `thm-local-information-positive-definite-iff-full-column-rank` · theorem — The weighted information matrix is positive definite exactly at full sensitivity rank
- `thm-local-parameter-perturbation-bound` · theorem — A lower singular-value bound and Lipschitz Jacobian control local parameter error
- `thm-multiplicative-design-update-well-defined-and-terminates` · theorem — Finite-budget multiplicative design updates preserve the simplex and nonsingularity
- `thm-uniform-sensitivity-error-controls-design-gap` · theorem — Uniform information errors control approximate D-optimal design gaps
- `thm-equivalence-violation-bounds-d-optimal-design-gap` · theorem — The D-equivalence violation bounds the finite-budget design's log-determinant gap

### `numerical-identifiability-and-optimal-experiment-design-examples` — Numerical identifiability and optimal experiment design — Examples (5 item(s))

- `ex-cubic-observation-is-locally-identifiable-with-zero-jacobian` · example — A zero Jacobian does not prevent local identifiability of the cubic map
- `ex-first-order-kinetic-rates-are-confounded-by-total-decay` · example — Parallel first-order decay identifies only the sum of two rates
- `ex-local-identifiability-does-not-imply-global-identifiability` · example — The observation theta squared is locally identifiable but globally aliased
- `ex-solver-tolerance-can-reverse-a-design-ranking` · example — A small sensitivity solve error can reverse a two-design ranking
- `ex-endpoint-sensors-give-a-d-optimal-linear-time-design` · example — Endpoint sensor times are D-optimal for an intercept-slope model

### `simulation-gradient-estimation-and-simultaneous-perturbation` — Simulation gradient estimation and simultaneous perturbation (12 item(s))

- `cex-uniform-payoff-convergence-does-not-imply-gradient-convergence` · counterexample — Uniform payoff convergence does not imply gradient convergence
- `def-simulation-gradient-objective-and-payoff-oracle` · definition — Simulation objectives and unbiased payoff oracles
- `alg-two-evaluation-spsa-gradient-estimator` · algorithm — Two-evaluation simultaneous-perturbation gradient estimator
- `def-coupled-simulation-finite-difference-estimator` · definition — Coupled finite-difference simulation-gradient estimator
- `def-pathwise-simulation-gradient-estimator` · definition — Pathwise and reparameterized simulation-gradient estimators
- `thm-likelihood-ratio-gradient-identity-on-fixed-support` · theorem — The likelihood-ratio score gradient is unbiased on fixed support
- `prop-coupled-simulation-difference-variance-identity` · proposition — Coupled finite differences have a covariance-controlled variance
- `thm-pathwise-simulation-gradient-is-unbiased-under-envelope` · theorem — A dominated pathwise simulation gradient is unbiased
- `thm-spsa-gradient-bias-is-second-order` · theorem — Symmetric simultaneous perturbations have second-order gradient bias
- `thm-spsa-gradient-has-inverse-step-variance-bound` · theorem — Weighted simulator moments give an inverse-step SPSA variance bound
- `thm-spsa-stochastic-approximation-has-stationary-limit-points` · theorem — Summably biased SPSA has convergent objective values and zero gradient liminf
- `thm-discrete-sde-adjoint-gradient-interchange` · theorem — A finite stochastic adjoint gives the discrete gradient under domination

### `simulation-gradient-estimation-and-simultaneous-perturbation-examples` — Simulation gradient estimation and simultaneous perturbation — Examples (4 item(s))

- `ex-moving-support-score-estimator-misses-boundary-term` · example — A moving uniform support contributes a missing score boundary term
- `ex-two-call-spsa-biological-simulator` · example — One two-call SPSA estimate for an expensive biological simulator
- `ex-coupled-differences-reduce-variance` · example — Common random numbers can remove finite-difference noise
- `ex-gaussian-reparameterization-and-score-gradient` · example — Gaussian reparameterization gives two gradient estimators

### `global-sensitivity-anova-and-sobol-estimation` — Global sensitivity anova and sobol estimation (16 item(s))

- `def-dependent-input-shapley-effects` · definition — Shapley effects for dependent inputs
- `def-product-coordinate-projections` · definition — Product-coordinate averaging operators
- `lem-uniform-interval-poincare-inequality` · lemma — Sharp Poincare bound for the uniform law on an interval
- `alg-exact-permutation-shapley-effects` · algorithm — Exact finite-permutation Shapley effects
- `alg-monte-carlo-permutation-shapley-effects` · algorithm — Monte Carlo permutation estimator for Shapley effects
- `lem-product-coordinate-projections-commute-and-contract` · lemma — Product-coordinate projections commute and contract in L2
- `thm-shapley-effects-are-nonnegative-and-efficient` · theorem — Dependent-input Shapley effects are nonnegative and sum to one
- `def-product-hoeffding-anova-components` · definition — Product-law Hoeffding ANOVA components
- `thm-monte-carlo-shapley-effects-clt-and-standard-errors` · theorem — Monte Carlo permutation Shapley effects have a joint CLT
- `thm-product-hoeffding-anova-decomposition` · theorem — Independent product inputs have an orthogonal Hoeffding decomposition
- `def-first-and-total-sobol-indices` · definition — First-order and total Sobol indices
- `thm-complete-chaos-tensor-expansions-give-sobol-coefficients` · theorem — Complete orthonormal tensor expansions group into Sobol components
- `thm-pick-freeze-sobol-covariance-identities` · theorem — Pick-freeze covariances recover first and total Sobol numerators
- `thm-poincare-bound-for-total-sobol-effect` · theorem — Coordinate Poincare inequalities bound total Sobol effects
- `alg-pick-freeze-monte-carlo-sobol-estimators` · algorithm — Pick-freeze Monte Carlo estimators for Sobol indices
- `thm-pick-freeze-sobol-ratio-joint-clt-and-mcse` · theorem — Pick-freeze Sobol ratios are consistent and have a joint delta-method CLT

### `global-sensitivity-anova-and-sobol-estimation-examples` — Global sensitivity anova and sobol estimation — Examples (6 item(s))

- `ex-perfectly-correlated-inputs-and-shapley-allocation` · example — Perfectly correlated inputs share a Shapley effect
- `ex-ishigami-function-sobol-decomposition` · example — The Ishigami function's only possible interaction is X1-X3
- `ex-polynomial-chaos-coefficients-and-sobol-indices` · example — Polynomial-chaos coefficients group by variable support
- `ex-zero-variance-sobol-indices-undefined` · example — A constant output has no normalized Sobol indices
- `ex-noisy-simulator-intrinsic-noise-and-input-sensitivity` · example — Noisy simulator output separates intrinsic noise from input variance
- `ex-ratio-pick-freeze-index-estimator-is-biased` · example — A pick-freeze ratio can be biased at finite sample size

## Your seams

Your pages depend on another group's:

- `numerical-identifiability-and-optimal-experiment-design` requires `inequality-kkt-duality-and-optimality-certificates` (group u, batch 6)
- `numerical-identifiability-and-optimal-experiment-design` requires `proximal-gradient-and-accelerated-composite-optimization` (group w, batch 27)
- `numerical-identifiability-and-optimal-experiment-design` requires `gauss-newton-and-levenberg-marquardt-methods` (group ab, batch 84)
- `numerical-identifiability-and-optimal-experiment-design` requires `discrete-continuous-and-pde-adjoint-sensitivities` (group ad, batch 96)
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `numerical-differentiation-and-derivative-error-control` (group v, batch 12)
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `stochastic-approximation-and-stochastic-gradient-methods` (group z, batch 64)
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `discrete-continuous-and-pde-adjoint-sensitivities` (group ad, batch 96)
- `global-sensitivity-anova-and-sobol-estimation` requires `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae, batch 99)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
