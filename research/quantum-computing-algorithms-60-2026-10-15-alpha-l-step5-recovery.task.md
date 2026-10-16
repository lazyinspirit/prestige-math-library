# Step 5 adjudication — group **l**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 58, 59, 60: 3 A/B pair(s), 6 page(s), 70 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **58**: `research/quantum-computing-algorithms-60-2026-10-15-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/quantum-computing-algorithms-60-2026-10-15-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/quantum-computing-algorithms-60-2026-10-15-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 58 | `algorithm-composition-precision-and-dequantization` | A | quantum-algorithms | 2280 | `uniform-circuit-families-promise-problems-and-complexity`, `state-preparation-isometry-synthesis-and-limits`, `channels-kraus-choi-and-stinespring-representations`, `trace-distance-fidelity-and-information-limits`, `circuit-syntax-denotational-semantics-and-measurement`, `finite-probability-spaces-and-random-variables`, `approximate-universality-and-solovay-kitaev`, `measurements-povms-and-instruments` |
| 58 | `algorithm-composition-precision-and-dequantization-examples` | B | quantum-algorithms | 2281 | `algorithm-composition-precision-and-dequantization` |
| 59 | `quantum-communication-and-fingerprinting` | A | quantum-algorithms | 2282 | `uniform-circuit-families-promise-problems-and-complexity`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `measurements-povms-and-instruments`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `the-polynomial-hierarchy-and-relativization`, `registers-tensor-products-and-partial-trace`, `trace-distance-fidelity-and-information-limits`, `reversible-computation-ancillas-and-coherent-oracles`, `finite-probability-spaces-and-random-variables`, `randomized-complexity-and-amplification` |
| 59 | `quantum-communication-and-fingerprinting-examples` | B | quantum-algorithms | 2283 | `quantum-communication-and-fingerprinting` |
| 60 | `adiabatic-computation-and-circuit-equivalence` | A | quantum-algorithms | 2284 | `hamiltonian-simulation-and-product-formulas`, `recurrence-transience-and-hitting-times-for-markov-chains`, `stationary-markov-chains-and-ergodic-limits`, `the-spectral-theorem-and-singular-value-decomposition`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `measurements-povms-and-instruments`, `uniform-circuit-families-promise-problems-and-complexity`, `inner-product-spaces-and-orthogonality`, `registers-tensor-products-and-partial-trace`, `trace-distance-fidelity-and-information-limits`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `continuous-time-quantum-walks` |
| 60 | `adiabatic-computation-and-circuit-equivalence-examples` | B | quantum-algorithms | 2285 | `adiabatic-computation-and-circuit-equivalence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `algorithm-composition-precision-and-dequantization` — Algorithm Composition, Precision Budgets, and Dequantization (24 item(s))

- `def-qa-34-threshold-band-svd-target` · definition — Threshold-band singular-value approximation
- `thm-qa-34-best-frobenius-rank-k-approximation` · theorem — Truncated singular values give the best Frobenius rank-k approximation
- `thm-qa-34-product-state-error-bound` · theorem — Tensor-product state errors add under trace distance
- `def-qa-34-end-to-end-error-contract` · definition — End-to-end channel and output error contract
- `thm-qa-34-channel-hybrid-bound` · theorem — Hybrid bound for a composed channel circuit
- `thm-qa-34-tensor-error-bound` · theorem — Tensor-product channel error bound
- `alg-qa-34-error-budget-allocation` · algorithm — Allocate local error budgets through a pipeline
- `def-qa-34-output-and-cost-types` · definition — Classical output, quantum-state output, and access costs
- `def-qa-34-heralded-verification-contract` · definition — Heralded success and conditional verification contract
- `def-qa-34-l2-sample-query-access` · definition — ℓ2 sample/query access to vectors and matrices
- `thm-qa-34-classical-output-writing-lower-bound` · theorem — Writing an N-bit output costs at least N bit operations
- `alg-qa-34-modfkv-low-rank-description` · algorithm — ModFKV low-rank description procedure
- `alg-qa-34-rejection-sampler-linear-combination` · algorithm — Finite rejection sampler for a linear combination
- `lem-qa-34-modfkv-sampling-gram-bound` · lemma — Two-stage ℓ2 sampling controls Gram matrices
- `lem-qa-34-normalized-vector-distribution-tv-bound` · lemma — Squared-vector distributions are close in total variation
- `prop-qa-34-sample-inner-product-estimator` · proposition — Estimate an inner product from ℓ2-sampling access
- `thm-qa-34-adaptive-failure-union-bound` · theorem — Adaptive conditional failure budgets compose by a union bound
- `thm-qa-34-error-budget-allocation-correctness` · theorem — Allocated local errors meet the global budget
- `thm-qa-34-linear-combination-sampler-correct-and-cost` · theorem — Correctness and cost of the linear-combination sampler
- `lem-qa-34-exponential-gram-concentration` · lemma — Exponential Frobenius concentration for normalized Gram sampling
- `lem-qa-34-two-sketch-threshold-band-bound` · lemma — A deterministic threshold-band bound for two Gram sketches
- `thm-qa-34-modfkv-low-rank-approximation` · theorem — ModFKV low-rank approximation supplier
- `thm-qa-34-tang-recommendation-sampler` · theorem — Tang's conditional recommendation sampler
- `rem-qa-34-dequantization-scope` · remark — Dequantization is relative to the input access and output task

### `algorithm-composition-precision-and-dequantization-examples` — Algorithm Composition, Precision Budgets, and Dequantization — Examples (4 item(s))

- `ex-qa-34-three-stage-budget` · example — A three-stage precision budget
- `cex-qa-34-state-output-not-amplitude-list` · counterexample — Quantum-state output does not mean an amplitude list was written
- `ex-qa-34-heralded-success-branch` · example — Heralded success and the zero-success branch
- `cex-qa-34-tang-without-sampling-access` · counterexample — Entry queries alone do not provide Tang's sampling access

### `quantum-communication-and-fingerprinting` — Quantum Communication and Fingerprinting (21 item(s))

- `def-qa-35-finite-probability-entropy-and-stochastic-matrices` · definition — Finite distributions, entropy, divergence, and stochastic matrices
- `lem-qa-35-log-tangent-bound` · lemma — The logarithm tangent inequality
- `lem-qa-35-kl-event-separation` · lemma — A separating event forces relative entropy
- `lem-qa-35-smp-prior-message-decomposition` · lemma — Conditioning on a private message separates average acceptance
- `lem-qa-35-smp-entropy-drop` · lemma — Private-message conditioning lowers output entropy
- `def-qa-35-swap-test-effect` · definition — Symmetric and antisymmetric swap-test measurement
- `lem-qa-35-identity-matrix-packing` · lemma — Packing bound for separated randomized message rows
- `lem-qa-35-trace-norm-tensor-density-identity` · lemma — Trace distance is unchanged by a fixed tensor factor
- `thm-qa-35-swap-test-measurement-effect` · theorem — Swap-test measurement and pure-state outcome law
- `def-qa-35-finite-communication-protocol` · definition — Finite communication problem and protocol model
- `def-qa-35-equality-promise` · definition — Equality communication problem
- `def-qa-35-code-fingerprint-state` · definition — Code-based quantum fingerprint
- `lem-qa-35-private-coin-error-reduction` · lemma — Constant private-coin error reduction by repetition
- `thm-qa-35-deterministic-smp-equality-lower-bound` · theorem — Deterministic SMP equality costs Ω(n) bits
- `thm-qa-35-quantum-fingerprint-message-lower-bound` · theorem — Entanglement-free, randomness-free quantum fingerprints require Ω(log n) qubits
- `lem-qa-35-random-code-existence-nonuniform` · lemma — Random linear-size fingerprint code exists nonuniformly
- `thm-qa-35-code-fingerprint-state-properties` · theorem — Fingerprint states are normalized and encode agreement as overlap
- `thm-qa-35-private-coin-equality-lower-bound` · theorem — Private-coin SMP equality requires Ω(√n) bits
- `alg-qa-35-swap-test-fingerprint` · algorithm — Simultaneous-message equality by quantum fingerprints
- `rem-qa-35-private-coin-lower-bound-unresolved` · remark — Private-coin SMP Equality lower bound and source recovery
- `thm-qa-35-fingerprint-correctness-and-cost` · theorem — Fingerprint swap-test error and communication cost

### `quantum-communication-and-fingerprinting-examples` — Quantum Communication and Fingerprinting — Examples (2 item(s))

- `cex-qa-35-public-vs-private-randomness` · counterexample — Public-coin and private-coin SMP are different models
- `ex-qa-35-length-eight-fingerprints` · example — Finite length-eight fingerprint overlap

### `adiabatic-computation-and-circuit-equivalence` — Adiabatic Computation and Circuit Equivalence (16 item(s))

- `thm-qa-36-finite-cheeger-bound` · theorem — Finite reversible Cheeger inequality
- `lem-qa-36-clock-penalty-gap-perturbation` · lemma — Large clock-penalty perturbation
- `lem-qa-36-partial-trace-contracts-trace-distance` · lemma — Partial trace contracts trace distance
- `def-qa-36-finite-adiabatic-path-model` · definition — Finite adiabatic path model
- `lem-qa-36-gapped-projection-regularity` · lemma — Finite gapped spectral projection regularity
- `def-qa-36-adiabatic-resource-model` · definition — Adiabatic path access and resource model
- `lem-qa-36-jrs-finite-band-estimates` · lemma — Finite spectral-band derivative estimates for adiabatic paths
- `thm-qa-36-jrs-finite-adiabatic-bound` · theorem — Finite JRS adiabatic projector bound
- `alg-qa-36-five-local-history-path` · algorithm — Five-local history-state adiabatic path
- `lem-qa-36-history-state-ground-and-output` · lemma — History state and padded output
- `lem-qa-36-history-path-ground-vector-monotonicity` · lemma — Positive monotone ground vector of the history path
- `alg-qa-36-discretized-path-simulation` · algorithm — Discretized adiabatic path simulation schedule
- `lem-qa-36-history-path-restricted-gap` · lemma — Restricted history-path gap
- `thm-qa-36-adiabatic-path-to-circuit-simulation` · theorem — Finite adiabatic path simulation from term access
- `lem-qa-36-history-path-full-gap` · lemma — Full-space history-path gap
- `thm-qa-36-circuit-to-adiabatic-simulation` · theorem — Circuit-to-adiabatic simulation

### `adiabatic-computation-and-circuit-equivalence-examples` — Adiabatic Computation and Circuit Equivalence — Examples (3 item(s))

- `ex-qa-36-two-level-avoided-crossing` · example — Two-level avoided crossing
- `cex-qa-36-gap-closing-failure` · counterexample — Gap closing invalidates a uniform adiabatic bound
- `ex-qa-36-two-gate-history-state` · example — Two-gate padded history state

## Your seams

Your pages depend on another group's:

- `algorithm-composition-precision-and-dequantization` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `algorithm-composition-precision-and-dequantization` requires `state-preparation-isometry-synthesis-and-limits` (group t, batch 24)
- `algorithm-composition-precision-and-dequantization` requires `channels-kraus-choi-and-stinespring-representations` (group n, batch 5)
- `algorithm-composition-precision-and-dequantization` requires `trace-distance-fidelity-and-information-limits` (group n, batch 6)
- `algorithm-composition-precision-and-dequantization` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `algorithm-composition-precision-and-dequantization` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)
- `algorithm-composition-precision-and-dequantization` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-communication-and-fingerprinting` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `quantum-communication-and-fingerprinting` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `quantum-communication-and-fingerprinting` requires `measurements-povms-and-instruments` (group n, batch 4)
- `quantum-communication-and-fingerprinting` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `quantum-communication-and-fingerprinting` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `quantum-communication-and-fingerprinting` requires `trace-distance-fidelity-and-information-limits` (group n, batch 6)
- `quantum-communication-and-fingerprinting` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `adiabatic-computation-and-circuit-equivalence` requires `hamiltonian-simulation-and-product-formulas` (group g, batch 44)
- `adiabatic-computation-and-circuit-equivalence` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `adiabatic-computation-and-circuit-equivalence` requires `measurements-povms-and-instruments` (group n, batch 4)
- `adiabatic-computation-and-circuit-equivalence` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `adiabatic-computation-and-circuit-equivalence` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `adiabatic-computation-and-circuit-equivalence` requires `trace-distance-fidelity-and-information-limits` (group n, batch 6)
- `adiabatic-computation-and-circuit-equivalence` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `adiabatic-computation-and-circuit-equivalence` requires `continuous-time-quantum-walks` (group g, batch 43)

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
