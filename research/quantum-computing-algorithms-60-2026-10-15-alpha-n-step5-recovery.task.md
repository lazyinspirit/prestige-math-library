# Step 5 adjudication — group **n**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 4, 5, 6: 3 A/B pair(s), 6 page(s), 73 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/quantum-computing-algorithms-60-2026-10-15-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/quantum-computing-algorithms-60-2026-10-15-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/quantum-computing-algorithms-60-2026-10-15-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 4 | `measurements-povms-and-instruments` | A | quantum-computing | 2172 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `finite-probability-spaces-and-random-variables`, `matrices-and-the-matrix-of-a-linear-map`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition` |
| 4 | `measurements-povms-and-instruments-examples` | B | quantum-computing | 2173 | `measurements-povms-and-instruments` |
| 5 | `channels-kraus-choi-and-stinespring-representations` | A | quantum-computing | 2174 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `inner-product-spaces-and-orthogonality`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition` |
| 5 | `channels-kraus-choi-and-stinespring-representations-examples` | B | quantum-computing | 2175 | `channels-kraus-choi-and-stinespring-representations` |
| 6 | `trace-distance-fidelity-and-information-limits` | A | quantum-computing | 2176 | `channels-kraus-choi-and-stinespring-representations`, `compactness-in-metric-spaces`, `diagonalisation-and-the-minimal-polynomial`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `haar-measure-existence-and-uniqueness`, `hilbert-space-geometry-and-riesz-representation`, `linear-independence-bases-and-dimension`, `matrices-and-the-matrix-of-a-linear-map`, `matrix-norms-condition-numbers-and-numerical-stability`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `relations-functions-and-quotients`, `the-spectral-theorem-and-singular-value-decomposition`, `uniform-spaces` |
| 6 | `trace-distance-fidelity-and-information-limits-examples` | B | quantum-computing | 2177 | `trace-distance-fidelity-and-information-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `measurements-povms-and-instruments` — Measurements, POVMs, and Instruments (16 item(s))

- `def-qc-projective-measurement` · definition — Finite projective measurements
- `def-qc-povm-and-outcome-law` · definition — Finite POVMs and their outcome law
- `thm-qc-projective-measurement-outcome-law` · theorem — Projective measurement outcome weights are probabilities
- `def-qc-finite-outcome-probability-kernel` · definition — Finite POVM outcome kernel
- `lem-qc-finite-ancilla-amplification-is-block-map` · lemma — Finite ancilla amplification is a well-defined block map
- `thm-qc-finite-naimark-isometric-compression` · theorem — Finite Naimark isometric compression
- `thm-qc-povm-probabilities-normalize` · theorem — POVM outcome weights are probabilities
- `thm-qc-projective-conditional-state` · theorem — Conditional state for a projective measurement
- `def-qc-completely-positive-map` · definition — Completely positive maps
- `thm-qc-finite-outcome-law-is-a-probability-kernel` · theorem — The finite POVM law is a probability kernel
- `def-qc-instrument-and-conditional-state` · definition — Finite instruments and conditional states
- `thm-qc-instrument-outcome-law-normalizes` · theorem — Instrument outcome weights normalize
- `thm-qc-luders-instrument-of-a-povm-is-valid` · theorem — The square-root Lüders maps form an instrument
- `thm-qc-zero-probability-branch-has-no-conditioned-state` · theorem — A zero-probability instrument branch has no conditioned state
- `thm-qc-instrument-conditional-state-is-density` · theorem — Positive-probability instrument branches are density operators
- `thm-qc-nonselective-instrument-output-is-density` · theorem — The nonselective output of an instrument is a density operator

### `measurements-povms-and-instruments-examples` — Measurements, POVMs, and Instruments — Examples (1 item(s))

- `ex-qc-zero-probability-projective-branch` · example — A projective measurement branch with probability zero

### `channels-kraus-choi-and-stinespring-representations` — Channels, Kraus, Choi, and Stinespring Representations (19 item(s))

- `def-qc-kraus-representation` · definition — Finite Kraus representation
- `lem-qc-linear-isometry-adjoint-identities` · lemma — Finite-dimensional linear isometries satisfy the adjoint identity
- `def-qc-unitary-conjugation-channel` · definition — Unitary conjugation map
- `thm-qc-trace-preserving-kraus-normalization` · theorem — Trace preservation is Kraus normalization
- `prop-qc-unitary-conjugation-global-phase-invariant` · proposition — Unitary conjugation is invariant under a global phase
- `def-qc-choi-matrix` · definition — Choi matrix with input factor first
- `def-qc-isometric-stinespring-representation` · definition — Isometric Stinespring representation
- `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis` · lemma — Tensor products of operator matrix units form a basis
- `lem-qc-positive-choi-matrix-yields-kraus-operators` · lemma — A positive Choi matrix yields finite Kraus operators
- `def-qc-quantum-channel` · definition — Finite-dimensional quantum channel
- `lem-qc-complete-positivity-implies-choi-positivity` · lemma — Complete positivity implies Choi positivity
- `thm-qc-kraus-map-completely-positive` · theorem — A finite Kraus sum is completely positive
- `thm-qc-isometry-partial-trace-is-channel` · theorem — An isometry followed by partial trace is a channel
- `thm-qc-kraus-choi-equivalence` · theorem — Kraus and Choi characterizations of complete positivity
- `prop-qc-unitary-conjugation-is-channel` · proposition — Unitary conjugation is a channel
- `thm-qc-channels-compose-and-tensor` · theorem — Finite-dimensional channels compose and tensor
- `thm-qc-choi-trace-preservation-condition` · theorem — The Choi partial trace characterizes trace preservation
- `thm-qc-finite-stinespring-dilation` · theorem — Every finite-dimensional channel has a finite isometric dilation
- `thm-qc-finite-kraus-choi-stinespring-equivalence` · theorem — Finite channel, Kraus, Choi, and Stinespring equivalence

### `channels-kraus-choi-and-stinespring-representations-examples` — Channels, Kraus, Choi, and Stinespring Representations — Examples (1 item(s))

- `ex-qc-dephasing-channel-kraus-choi` · example — Qubit dephasing channel in Kraus and Choi forms

### `trace-distance-fidelity-and-information-limits` — Trace Distance, Fidelity, and Information Limits (35 item(s))

- `thm-qc-unitary-group-compact` · theorem — Unitary Group Compact
- `def-qc-diamond-norm` · definition — Diamond Norm
- `def-qc-fidelity` · definition — Fidelity
- `def-qc-trace-distance` · definition — Trace Distance
- `lem-qc-faithful-state-dominates-positive-operator` · lemma — Faithful State Dominates Positive Operator
- `def-qc-symmetric-subspace-projector` · definition — Symmetric Subspace Projector
- `lem-qc-fidelity-root-formula-equivalence` · lemma — The two root-fidelity trace expressions agree
- `lem-qc-trace-norm-tensor-product` · lemma — Trace norm of a tensor product
- `lem-qc-positive-marginals-imply-joint-support` · lemma — Positive Marginals Imply Joint Support
- `lem-qc-pure-state-trace-distance` · lemma — Pure state trace distance
- `lem-qc-symmetric-subspace-average-is-projector` · lemma — The permutation average is the symmetric-subspace projector
- `thm-qc-diamond-norm-ancilla-dimension-bound` · theorem — Diamond Norm Ancilla Dimension Bound
- `thm-qc-helstrom-binary-discrimination` · theorem — Helstrom Binary Discrimination
- `thm-qc-trace-distance-range-and-equality` · theorem — Trace Distance Range And Equality
- `lem-qc-symmetric-power-irreducible` · lemma — Symmetric Power Irreducible
- `thm-qc-measurement-variation-at-most-trace-distance` · theorem — Measurement Variation At Most Trace Distance
- `def-qc-broadcasting-family` · definition — Broadcasting Family
- `thm-qc-fidelity-purification-characterization` · theorem — Fidelity Purification Characterization
- `thm-qc-symmetric-subspace-dimension-and-haar-moment` · theorem — Symmetric Subspace Dimension And Haar Moment
- `thm-qc-trace-distance-channel-contractivity` · theorem — Trace Distance Channel Contractivity
- `lem-qc-fidelity-classical-measurement-minimum` · lemma — Fidelity classical measurement minimum
- `lem-qc-optimal-cloner-attains-bound` · lemma — Optimal Cloner Attains Bound
- `lem-qc-optimal-cloning-worst-case-upper-bound` · lemma — Optimal Cloning Worst Case Upper Bound
- `thm-qc-channel-diamond-norm-one` · theorem — Channel Diamond Norm One
- `thm-qc-fidelity-range-equality-and-products` · theorem — Fidelity range equality and products
- `thm-qc-channel-composition-hybrid-bound` · theorem — Channel Composition Hybrid Bound
- `thm-qc-fidelity-data-processing-and-equality` · theorem — Fidelity Data Processing
- `thm-qc-fuchs-van-de-graaf` · theorem — Fuchs Van De Graaf
- `thm-qc-optimal-universal-pure-state-cloning-bound` · theorem — Optimal Universal Pure State Cloning Bound
- `thm-qc-pure-state-no-cloning` · theorem — Pure State No Cloning
- `thm-qc-channel-tensor-error-bound` · theorem — Channel Tensor Error Bound
- `thm-qc-exact-mixed-state-cloning-fidelity-criterion` · theorem — Exact Mixed State Cloning Fidelity Criterion
- `thm-qc-full-rank-pair-no-broadcasting` · theorem — Full Rank Pair No Broadcasting
- `thm-qc-singular-pair-no-broadcasting` · theorem — Singular Pair No Broadcasting
- `thm-qc-state-family-no-broadcasting-iff-commuting` · theorem — State Family No Broadcasting Iff Commuting

### `trace-distance-fidelity-and-information-limits-examples` — Trace Distance, Fidelity, and Information Limits — Examples (1 item(s))

- `ex-qc-orthogonal-state-trace-distance` · example — Trace distance of orthogonal pure states

## Your seams

Your pages depend on another group's:

- `measurements-povms-and-instruments` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `measurements-povms-and-instruments` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `measurements-povms-and-instruments` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `channels-kraus-choi-and-stinespring-representations` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `channels-kraus-choi-and-stinespring-representations` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `channels-kraus-choi-and-stinespring-representations` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `trace-distance-fidelity-and-information-limits` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `trace-distance-fidelity-and-information-limits` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `trace-distance-fidelity-and-information-limits` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)

Another group's pages depend on yours:

- `computational-problems-promises-and-cost-models` (group a) requires your `measurements-povms-and-instruments`
- `simon-algorithm-and-finite-field-recovery` (group b) requires your `measurements-povms-and-instruments`
- `quantum-phase-estimation` (group c) requires your `measurements-povms-and-instruments`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `measurements-povms-and-instruments`
- `amplitude-amplification` (group d) requires your `measurements-povms-and-instruments`
- `amplitude-estimation-and-counting` (group e) requires your `measurements-povms-and-instruments`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `measurements-povms-and-instruments`
- `continuous-time-quantum-walks` (group g) requires your `measurements-povms-and-instruments`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `measurements-povms-and-instruments`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `measurements-povms-and-instruments`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `measurements-povms-and-instruments`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `channels-kraus-choi-and-stinespring-representations`
- `quantum-optimization-sdp-and-variational-algorithms-examples` (group j) requires your `measurements-povms-and-instruments`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `measurements-povms-and-instruments`
- `quantum-complexity-classes-and-oracle-separations` (group k) requires your `measurements-povms-and-instruments`
- `qma-verification-and-local-hamiltonian` (group k) requires your `measurements-povms-and-instruments`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `channels-kraus-choi-and-stinespring-representations`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `trace-distance-fidelity-and-information-limits`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `measurements-povms-and-instruments`
- `quantum-communication-and-fingerprinting` (group l) requires your `measurements-povms-and-instruments`
- `quantum-communication-and-fingerprinting` (group l) requires your `trace-distance-fidelity-and-information-limits`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `measurements-povms-and-instruments`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `trace-distance-fidelity-and-information-limits`
- `controlled-gates-phase-and-entanglement` (group o) requires your `measurements-povms-and-instruments`
- `circuit-syntax-denotational-semantics-and-measurement` (group o) requires your `channels-kraus-choi-and-stinespring-representations`
- `circuit-syntax-denotational-semantics-and-measurement` (group o) requires your `measurements-povms-and-instruments`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `measurements-povms-and-instruments`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `trace-distance-fidelity-and-information-limits`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `measurements-povms-and-instruments`
- `bell-states-teleportation-and-dense-coding` (group r) requires your `measurements-povms-and-instruments`
- `knill-laflamme-recovery-and-subsystem-codes` (group s) requires your `channels-kraus-choi-and-stinespring-representations`
- `noise-fault-tolerance-concatenation-and-thresholds` (group s) requires your `channels-kraus-choi-and-stinespring-representations`
- `noise-fault-tolerance-concatenation-and-thresholds` (group s) requires your `trace-distance-fidelity-and-information-limits`
- `graph-states-and-measurement-based-computation` (group t) requires your `measurements-povms-and-instruments`

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
