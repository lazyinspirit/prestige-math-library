# Step 5 adjudication — group **j**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 52, 53, 54: 3 A/B pair(s), 6 page(s), 76 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **52**: `research/quantum-computing-algorithms-60-2026-10-15-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/quantum-computing-algorithms-60-2026-10-15-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/quantum-computing-algorithms-60-2026-10-15-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/quantum-computing-algorithms-60-2026-10-15-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 52 | `quantum-spectral-estimation-and-matrix-functions` | A | quantum-algorithms | 2268 | `quantum-phase-estimation`, `hamiltonian-simulation-and-product-formulas`, `quantum-singular-value-transformation`, `the-spectral-theorem-and-singular-value-decomposition`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `block-encodings`, `controlled-gates-phase-and-entanglement`, `uniform-circuit-families-promise-problems-and-complexity`, `measurements-povms-and-instruments`, `effective-numberings-reductions-resources-and-randomness` |
| 52 | `quantum-spectral-estimation-and-matrix-functions-examples` | B | quantum-algorithms | 2269 | `quantum-spectral-estimation-and-matrix-functions` |
| 53 | `quantum-sampling-expectation-and-monte-carlo` | A | quantum-algorithms | 2270 | `amplitude-estimation-and-counting`, `independence-borel-cantelli-and-zero-one-laws`, `probability-spaces-random-variables-and-expectation`, `registers-tensor-products-and-partial-trace`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `controlled-gates-phase-and-entanglement`, `measurements-povms-and-instruments`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `finite-probability-spaces-and-random-variables`, `uniform-circuit-families-promise-problems-and-complexity` |
| 53 | `quantum-sampling-expectation-and-monte-carlo-examples` | B | quantum-algorithms | 2271 | `quantum-sampling-expectation-and-monte-carlo` |
| 54 | `quantum-optimization-sdp-and-variational-algorithms` | A | quantum-algorithms | 2272 | `quantum-spectral-estimation-and-matrix-functions`, `quantum-sampling-expectation-and-monte-carlo`, `robust-covariance-and-high-dimensional-stability`, `matrices-and-the-matrix-of-a-linear-map`, `the-spectral-theorem-and-singular-value-decomposition`, `hilbert-space-geometry-and-riesz-representation`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `channels-kraus-choi-and-stinespring-representations`, `circuit-syntax-denotational-semantics-and-measurement`, `controlled-gates-phase-and-entanglement`, `registers-tensor-products-and-partial-trace`, `uniform-circuit-families-promise-problems-and-complexity`, `reversible-computation-ancillas-and-coherent-oracles`, `amplitude-estimation-and-counting`, `block-encoding-linear-systems-and-variable-time-amplification`, `block-encodings`, `compactness-in-metric-spaces`, `continuous-time-quantum-walks`, `convex-and-semicontinuous-functions-on-rn`, `countability-and-uncountability`, `darboux-lhopital-and-taylor`, `effective-numberings-reductions-resources-and-randomness`, `fubini-and-change-of-variables`, `further-trigonometric-identities-and-inverses`, `inner-product-spaces-and-orthogonality`, `lebesgue-measure-on-euclidean-space`, `local-asymptotic-normality-contiguity-and-efficiency`, `metric-spaces`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `quantum-fourier-transform-circuits`, `quantum-phase-estimation`, `qubitization-and-optimal-hamiltonian-simulation`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `rn-as-a-normed-space`, `sine-cosine-and-the-definition-of-pi`, `the-complex-exponential-and-eulers-formula`, `the-exponential-function`, `the-logarithm-and-general-powers` |
| 54 | `quantum-optimization-sdp-and-variational-algorithms-examples` | B | quantum-algorithms | 2273 | `quantum-optimization-sdp-and-variational-algorithms`, `measurements-povms-and-instruments`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantum-spectral-estimation-and-matrix-functions` — Quantum Spectral Estimation and Matrix Functions (10 item(s))

- `thm-qa-28-polynomial-matrix-function-error` · theorem — Uniform polynomial approximation transfers to a Hermitian matrix
- `def-qa-28-state-spectral-distribution` · definition — State-dependent spectral distribution
- `lem-qa-28-normalized-function-target` · lemma — Rescaling a matrix-function target for QSVT
- `def-qa-28-spectral-estimation-access` · definition — Eigenvalue-estimation access and aliasing convention
- `alg-qa-28-phase-spectral-estimation` · algorithm — Quantum phase-estimation spectral sampler
- `alg-qa-28-median-spectral-estimation` · algorithm — Median-amplified spectral estimate
- `thm-qa-28-spectral-law-measurement` · theorem — QPE output law and conditional state for a spectral input
- `alg-qa-28-qsvt-matrix-function` · algorithm — QSVT implementation of a bounded matrix function
- `thm-qa-28-matrix-function-error-cost` · theorem — Matrix-function transformation error and resource bound
- `thm-qa-28-spectral-estimation-guarantee` · theorem — Additive spectral-estimation accuracy and cost

### `quantum-spectral-estimation-and-matrix-functions-examples` — Quantum Spectral Estimation and Matrix Functions — Examples (2 item(s))

- `ex-qa-28-exponential-polynomial` · example — A bounded polynomial approximation to a scaled exponential
- `ex-qa-28-two-level-spectral-estimate` · example — Spectral distribution and phase resolution for a two-level matrix

### `quantum-sampling-expectation-and-monte-carlo` — Quantum Sampling, Expectation, and Monte Carlo (15 item(s))

- `def-qa-29-expectation-estimation-task` · definition — Finite expectation-estimation task
- `lem-qa-29-independent-trial-median-bound` · lemma — One-sided concentration bound for independent median trials
- `lem-qa-29-certified-natural-logarithm-series` · lemma — A terminating rational enclosure for the natural logarithm
- `lem-qa-29-dyadic-parameters-terminate` · lemma — Finite termination of the dyadic estimator parameter searches
- `thm-qa-29-classical-mc-chebyshev-baseline` · theorem — Classical bounded-sample mean baseline
- `thm-qa-29-counting-is-indicator-expectation` · theorem — Uniform counting is finite indicator expectation
- `def-qa-29-coherent-sampler` · definition — Coherent finite sampler and observable value
- `lem-qa-29-coherent-sampler-outcome-law` · lemma — Measurement law of a coherent sampler
- `alg-qa-29-amplitude-counting-consumer` · algorithm — Quantum counting as an expectation special case
- `alg-qa-29-quantum-expectation-estimation` · algorithm — Amplitude-estimation expectation estimator
- `alg-qa-29-variance-aware-monte-carlo` · algorithm — Variance-aware quantum Monte Carlo
- `thm-qa-29-quantum-expectation-error-cost` · theorem — Quantum bounded-expectation guarantee and query cost
- `lem-qa-29-positive-mean-dyadic-estimator` · lemma — Dyadic positive-mean estimator under an L2 bound
- `thm-qa-29-variance-aware-guarantee` · theorem — Variance-aware quantum Monte Carlo guarantee
- `thm-qa-29-coherent-query-cost-translation` · theorem — Coherent query-to-circuit cost translation

### `quantum-sampling-expectation-and-monte-carlo-examples` — Quantum Sampling, Expectation, and Monte Carlo — Examples (2 item(s))

- `cex-qa-29-unavailable-coherent-sampler` · counterexample — Sample-only access is not coherent sampler access
- `ex-qa-29-bernoulli-expectation` · example — Bernoulli mean as a good-state probability

### `quantum-optimization-sdp-and-variational-algorithms` — Quantum Optimization, Semidefinite Programs, and Variational Algorithms (44 item(s))

- `lem-qa-30-hermitian-product-trace-real` · lemma — Trace of a product of Hermitian matrices is real
- `lem-qa-30-positive-product-trace-nonnegative` · lemma — Trace of a product of positive semidefinite matrices is nonnegative
- `alg-qa-30-capped-generalized-minimum` · algorithm — Finite capped quantum quantile minimum
- `def-qa-30-sdp-primal-dual-pair` · definition — Finite semidefinite primal-dual pair
- `lem-qa-30-capamplify-state-output-bound` · lemma — Capped randomized amplitude amplification preserves a flagged output
- `lem-qa-30-normalized-hermitian-observable-effects` · lemma — Normalized Hermitian observable defines a two-outcome POVM
- `def-qa-30-mmw-game` · definition — Matrix multiplicative-weights game and update
- `lem-qa-30-normalized-sdp-strong-duality` · lemma — Normalized Hermitian inequality SDPs have equal primal and dual values
- `thm-qa-30-generalized-minimum-guarantee` · theorem — Quantile minimum and coherent-score nondomination guarantee
- `thm-qa-30-sdp-weak-duality` · theorem — Weak duality for the finite SDP pair
- `lem-qa-30-exp-quadratic-bound` · lemma — Scalar exponential bound for bounded losses
- `thm-qa-30-mmw-regret-bound` · theorem — Matrix multiplicative-weights regret bound
- `lem-qa-30-mmw-dual-output-feasibility` · lemma — No-failure MMW rounds yield an approximate dual-feasible vector
- `def-qa-30-variational-quantum-algorithm` · definition — Parameterized variational quantum objective
- `lem-qa-30-estimated-polytope-threshold-soundness` · lemma — Estimated SDP polytopes and sound bounded-dual threshold exclusion
- `def-qa-30-classical-optimizer-interface` · definition — Classical optimizer interface for hybrid algorithms
- `def-qa-30-qaoa-circuit-and-objective` · definition — QAOA circuit and expected combinatorial objective
- `def-qa-30-vqe-rayleigh-objective` · definition — Variational eigenvalue objective
- `lem-qa-30-two-sparse-estimated-oracle` · lemma — Two-sparse estimated SDP oracle from coherent labels
- `thm-qa-30-parameter-shift-rule` · theorem — Parameter-shift derivative for a Pauli generator
- `thm-qa-30-qaoa-expectation-bound` · theorem — QAOA objective is an expected feasible score only
- `thm-qa-30-vqe-rayleigh-ritz-guarantee` · theorem — VQE Rayleigh–Ritz upper bound and equality case
- `def-qa-30-sdp-reference-state-access` · definition — SDP maximally entangled reference-state access
- `lem-qa-30-finite-grid-quantum-subgradient` · lemma — A finite-grid quantum subgradient from approximate values
- `lem-qa-30-sdp-trace-mean-ratio-identity` · lemma — Flagged trace ratio returns a Gibbs-state observable mean
- `def-qa-30-quantum-membership-separation-model` · definition — Quantum convex membership and weak-separation model
- `def-qa-30-sdp-sparse-oracle-model` · definition — Sparse SDP matrix access and computational model
- `alg-qa-30-quantum-membership-to-separation` · algorithm — Quantum membership-to-separation procedure
- `lem-qa-30-centroid-weak-separation-optimization` · lemma — Query-only optimization from weak separation by centroid cuts
- `lem-qa-30-membership-height-geometry` · lemma — Height geometry and weak-membership binary search
- `thm-qa-30-quantum-membership-separation-cost` · theorem — Quantum weak-separation query bound
- `thm-qa-30-smooth-fourier-approximation` · theorem — Certified finite smooth Fourier approximation and LCU normalization
- `lem-qa-30-spectral-minimum-shift` · lemma — Coherent spectral minimum and a frozen Gibbs energy shift
- `alg-qa-30-sdp-gibbs-purification` · algorithm — Sparse-oracle Gibbs-state purification
- `thm-qa-30-sdp-gibbs-state-error-cost` · theorem — Gibbs purification error and resource bound
- `thm-qa-30-flagged-trace-error-and-cost` · theorem — Flagged Gibbs trace estimation: errors, probability floors and charged access
- `alg-qa-30-sdp-matrix-expectation-oracle` · algorithm — Coherent SDP matrix-expectation oracle
- `lem-qa-30-mmw-to-sdp-feasibility` · lemma — Matrix-weights regret implies SDP threshold feasibility
- `thm-qa-30-sdp-binary-search-correctness` · theorem — Binary search converts certified SDP thresholds to additive optimization
- `thm-qa-30-sdp-matrix-expectation-cost` · theorem — SDP matrix-expectation estimation error and cost
- `alg-qa-30-quantum-sdp-solver` · algorithm — Sparse-oracle quantum SDP algorithm
- `thm-qa-30-quantum-sdp-solver-guarantee` · theorem — Quantum SDP additive-optimality guarantee
- `thm-qa-30-sparse-sdp-resource-substitution` · theorem — Sparse evolution substitution gives the quantum SDP and diagonal LP query bounds
- `thm-qa-30-quantum-sdp-solver-cost` · theorem — Quantum SDP query bound and QRAM cost boundary

### `quantum-optimization-sdp-and-variational-algorithms-examples` — Quantum Optimization, Semidefinite Programs, and Variational Algorithms — Examples (3 item(s))

- `ex-qa-30-sdp-weak-duality` · example — A one-constraint scalar SDP and its dual
- `cex-qa-30-variational-global-optimum` · counterexample — A variational circuit family may miss the optimum
- `ex-qa-30-vqe-and-qaoa-objectives` · example — VQE and MaxCut-QAOA objective calculation

## Your seams

Your pages depend on another group's:

- `quantum-spectral-estimation-and-matrix-functions` requires `quantum-phase-estimation` (group c, batch 31)
- `quantum-spectral-estimation-and-matrix-functions` requires `hamiltonian-simulation-and-product-formulas` (group g, batch 44)
- `quantum-spectral-estimation-and-matrix-functions` requires `quantum-singular-value-transformation` (group h, batch 48)
- `quantum-spectral-estimation-and-matrix-functions` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `quantum-spectral-estimation-and-matrix-functions` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-spectral-estimation-and-matrix-functions` requires `block-encodings` (group h, batch 46)
- `quantum-spectral-estimation-and-matrix-functions` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-spectral-estimation-and-matrix-functions` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-spectral-estimation-and-matrix-functions` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-sampling-expectation-and-monte-carlo` requires `amplitude-estimation-and-counting` (group e, batch 37)
- `quantum-sampling-expectation-and-monte-carlo` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-sampling-expectation-and-monte-carlo` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `quantum-sampling-expectation-and-monte-carlo` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-sampling-expectation-and-monte-carlo` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-sampling-expectation-and-monte-carlo` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-sampling-expectation-and-monte-carlo` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-optimization-sdp-and-variational-algorithms` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-optimization-sdp-and-variational-algorithms` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-optimization-sdp-and-variational-algorithms` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `quantum-optimization-sdp-and-variational-algorithms` requires `channels-kraus-choi-and-stinespring-representations` (group n, batch 5)
- `quantum-optimization-sdp-and-variational-algorithms` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `quantum-optimization-sdp-and-variational-algorithms` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `quantum-optimization-sdp-and-variational-algorithms` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-optimization-sdp-and-variational-algorithms` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-optimization-sdp-and-variational-algorithms` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `quantum-optimization-sdp-and-variational-algorithms` requires `amplitude-estimation-and-counting` (group e, batch 37)
- `quantum-optimization-sdp-and-variational-algorithms` requires `block-encoding-linear-systems-and-variable-time-amplification` (group i, batch 51)
- `quantum-optimization-sdp-and-variational-algorithms` requires `block-encodings` (group h, batch 46)
- `quantum-optimization-sdp-and-variational-algorithms` requires `continuous-time-quantum-walks` (group g, batch 43)
- `quantum-optimization-sdp-and-variational-algorithms` requires `quantum-fourier-transform-circuits` (group b, batch 30)
- `quantum-optimization-sdp-and-variational-algorithms` requires `quantum-phase-estimation` (group c, batch 31)
- `quantum-optimization-sdp-and-variational-algorithms` requires `qubitization-and-optimal-hamiltonian-simulation` (group i, batch 49)
- `quantum-optimization-sdp-and-variational-algorithms` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `quantum-optimization-sdp-and-variational-algorithms-examples` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-optimization-sdp-and-variational-algorithms-examples` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/quantum-computing-algorithms-60-2026-10-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `quantum-computing-algorithms-60-2026-10-15`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
