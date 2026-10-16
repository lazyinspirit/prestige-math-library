# Step 5 adjudication — group **t**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 22, 23, 24: 3 A/B pair(s), 6 page(s), 77 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/quantum-computing-algorithms-60-2026-10-15-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/quantum-computing-algorithms-60-2026-10-15-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/quantum-computing-algorithms-60-2026-10-15-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 22 | `graph-states-and-measurement-based-computation` | A | quantum-computing | 2208 | `algebraic-extensions-degree-and-finite-fields`, `bell-states-teleportation-and-dense-coding`, `circuit-syntax-denotational-semantics-and-measurement`, `congruences-and-the-chinese-remainder-theorem`, `continuous-gate-universality-and-exact-synthesis`, `controlled-gates-phase-and-entanglement`, `determinants-of-matrices-over-a-commutative-ring`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `graphs-walks-and-connectivity`, `measurements-povms-and-instruments`, `pauli-and-clifford-groups-binary-symplectic-tableaux`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `stabilizer-circuits-and-gottesman-knill-simulation`, `vector-spaces-and-subspaces` |
| 22 | `graph-states-and-measurement-based-computation-examples` | B | quantum-computing | 2209 | `graph-states-and-measurement-based-computation` |
| 23 | `circuit-optimization-resource-tradeoffs-and-lower-bounds` | A | quantum-computing | 2210 | `approximate-universality-and-solovay-kitaev`, `circuit-syntax-denotational-semantics-and-measurement`, `clifford-t-exact-and-approximate-synthesis`, `continuous-gate-universality-and-exact-synthesis`, `counting-complexity-and-sharpp`, `effective-numberings-reductions-resources-and-randomness`, `formal-languages-encodings-and-decision-problems`, `matrix-norms-condition-numbers-and-numerical-stability`, `reversible-computation-ancillas-and-coherent-oracles`, `uniform-circuit-families-promise-problems-and-complexity`, `classical-zero-free-region-and-the-prime-number-theorem` |
| 23 | `circuit-optimization-resource-tradeoffs-and-lower-bounds-examples` | B | quantum-computing | 2211 | `circuit-optimization-resource-tradeoffs-and-lower-bounds` |
| 24 | `state-preparation-isometry-synthesis-and-limits` | A | quantum-computing | 2212 | `approximate-universality-and-solovay-kitaev`, `circuit-syntax-denotational-semantics-and-measurement`, `clifford-t-exact-and-approximate-synthesis`, `continuous-gate-universality-and-exact-synthesis`, `controlled-gates-phase-and-entanglement`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `reversible-computation-ancillas-and-coherent-oracles`, `sard-theorem-and-transversality` |
| 24 | `state-preparation-isometry-synthesis-and-limits-examples` | B | quantum-computing | 2213 | `state-preparation-isometry-synthesis-and-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `graph-states-and-measurement-based-computation` — Graph States and Measurement-Based Computation (23 item(s))

- `def-qc-binary-adjacency-matrix` · definition — Binary adjacency matrix of an ordered finite simple graph
- `def-qc-j-gate-and-equatorial-basis` · definition — J gate and ordered equatorial measurement vectors
- `lem-qc-j-basis-and-phase-identities` · lemma — J-gate basis and exact phase identities
- `def-qc-graph-state` · definition — Graph state of an ordered finite simple graph
- `lem-qc-cz-matching-pauli-frame-action` · lemma — Controlled-Z matching action on a Pauli frame
- `def-qc-normalized-transport-schedule` · definition — Normalized transport schedule for a J/CZ circuit
- `lem-qc-one-bit-teleportation` · lemma — One-bit J-gate teleportation branch identity
- `lem-qc-r-y-r-z-multiplexor-gray-code` · lemma — Exact Gray-code synthesis of multiplexed y- and z-axis rotations
- `lem-qc-graph-state-amplitude-formula` · lemma — Computational-basis amplitudes of a graph state
- `lem-qc-graph-state-edge-gates-commute` · lemma — Controlled-Z edge gates commute
- `def-qc-adaptive-measurement-pattern` · definition — Finite open-graph adaptive measurement pattern
- `lem-qc-adaptive-angle-pauli-frame-update` · lemma — Adaptive J angle and Pauli-frame update
- `lem-qc-normalized-rounds-preserve-circuit` · lemma — Normalized transport rounds preserve the circuit up to a recorded phase
- `lem-qc-transport-encoding-is-simple-and-size-bounded` · lemma — Normalized transport encoding is a finite simple graph of bounded size
- `thm-qc-exact-unitary-synthesis-from-qsd` · theorem — Exact finite unitary synthesis from cosine-sine recursion
- `lem-qc-graph-state-stabilizer-generators` · lemma — Graph-state stabilizer generators
- `lem-qc-measurement-pattern-for-cz` · lemma — Four-branch open-graph pattern for CZ
- `thm-qc-pattern-branch-probabilities-and-zero-branches` · theorem — Pattern branch probabilities and zero-probability transcripts
- `def-qc-circuit-to-graph-resource-encoding` · definition — Circuit-to-open-graph resource encoding with normalized transport rounds
- `thm-qc-pattern-is-measurement-circuit` · theorem — Every finite open-graph pattern is a measurement circuit
- `thm-qc-circuit-simulated-by-adaptive-pattern` · theorem — A finite J/CZ circuit is simulated branch by branch by its adaptive pattern
- `thm-qc-circuit-pattern-equivalence-and-universality` · theorem — Circuit and pattern translations are branch preserving and universal
- `thm-qc-graph-state-unique-stabilizer-ray` · theorem — Graph state is the unique joint stabilizer ray

### `graph-states-and-measurement-based-computation-examples` — Graph States and Measurement-Based Computation — Examples (1 item(s))

- `ex-qc-one-edge-graph-state` · example — One-edge graph state and two-wire CZ pattern

### `circuit-optimization-resource-tradeoffs-and-lower-bounds` — Circuit Optimization, Resource Tradeoffs, and Lower Bounds (31 item(s))

- `def-qc-unbounded-error-time-space-counting-model` · definition — Unbounded error time space counting model
- `lem-qc-logspace-uniform-iterated-addition-tc0` · lemma — DLOGTIME uniform iterated addition threshold circuits
- `lem-qc-logspace-uniform-iterated-multiplication-tc0` · lemma — Logspace uniform iterated multiplication threshold circuits
- `def-qc-bqtisp-model` · definition — BQTISP Model
- `lem-qc-unbounded-error-tie-normalization` · lemma — Bounded-overhead tie normalization for fair-bit machines
- `lem-qc-uniform-probabilistic-clocked-simulation` · lemma — Uniform clocked simulation of encoded probabilistic machines
- `lem-qc-bounded-space-virtual-input-simulation` · lemma — Bounded-space simulation of a generated input
- `lem-qc-logspace-predicates-in-linear-counting-hierarchy` · lemma — Logspace predicates in a fixed linear counting hierarchy level
- `thm-qc-uniform-threshold-iterated-integer-arithmetic` · theorem — Uniform threshold iterated integer arithmetic
- `lem-qc-basis-query-time-normalization` · lemma — Time normalization of classical basis queries
- `lem-qc-logspace-uniform-cook-formula-encoding` · lemma — Logspace uniform near-linear Cook formula encoding
- `lem-qc-counting-time-space-to-linear-hierarchy` · lemma — Counting time space to linear hierarchy
- `thm-qc-probabilistic-polynomial-time-hierarchy` · theorem — Probabilistic polynomial time hierarchy
- `lem-qc-tight-majority-formula-completeness` · lemma — Tight majority formula completeness
- `thm-qc-unbounded-error-counting-time-space-alternative` · theorem — Unbounded error counting time space alternative
- `lem-qc-vmw-fh-density-and-base-net` · lemma — The VMW F/H Alphabet Has an Algebraic Dense SU(2) Lift and a Fixed Base Net
- `lem-qc-multiplexed-rz-gray-code` · lemma — Gray-code synthesis of a multiplexed Z rotation
- `alg-qc-basic-clifford-t-rewrite` · algorithm — Basic Clifford T Rewrite
- `lem-qc-circuit-resource-composition` · lemma — Circuit Resource Composition
- `lem-qc-unoptimized-qsd-recursive-decomposition-and-count` · lemma — Unoptimized recursive QSD decomposition and CNOT count
- `lem-qc-vmw-finite-precision-sk-compiler` · lemma — Finite-Bit Compilation into the VMW F/H Alphabet
- `def-qc-circuit-optimization-task` · definition — Circuit Optimization Task
- `lem-qc-ninefold-nearest-neighbor-multiplexor-routing` · lemma — Ninefold nearest-neighbor multiplexor routing
- `thm-qc-basic-rewrite-correct-and-terminating` · theorem — Basic Rewrite Correct And Terminating
- `thm-qc-clean-ancilla-multicontrolled-tradeoff` · theorem — Clean Ancilla Multicontrolled Tradeoff
- `thm-qc-nearest-neighbor-cnot-overhead` · theorem — Nearest Neighbor CNOT Overhead
- `thm-qc-qsd-cnot-upper-bound` · theorem — QSD CNOT Upper Bound
- `lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition` · lemma — Effective Exact Gate Factors for Fixed Local Unitaries
- `thm-qc-bqtisp-to-ptisp-simulation` · theorem — BQTISP To PTISP Simulation
- `thm-qc-generic-circuit-count-lower-bound` · theorem — Generic Circuit Count Lower Bound
- `thm-qc-counting-hierarchy-time-space-lower-bound` · theorem — Counting Hierarchy Time Space Lower Bound

### `circuit-optimization-resource-tradeoffs-and-lower-bounds-examples` — Circuit Optimization, Resource Tradeoffs, and Lower Bounds — Examples (1 item(s))

- `ex-qc-two-qubit-qsd-cnot-count` · example — Two-qubit QSD CNOT upper-bound instance

### `state-preparation-isometry-synthesis-and-limits` — State Preparation, Isometry Synthesis, and Limits (20 item(s))

- `lem-qc-countable-compact-null-union` · lemma — Countable Union of Compact Null Sets Is Null
- `lem-qc-open-cube-is-not-null` · lemma — A Nonempty Euclidean Open Set Is Not Null
- `def-qc-projective-chord-distance` · definition — QC24 Projective Chord Distance
- `def-qc-projective-space-atlas` · definition — QC24 Complex Projective Space and Its Standard Patches
- `lem-qc-projective-chord-distance-formula` · lemma — Projective Chord Distance Formula
- `thm-qc-projective-chart-dimension` · theorem — QC24 Projective Chart Dimension
- `lem-qc-signed-ray-packing-code` · lemma — QC24 Signed Ray Packing Code
- `def-qc-clean-ancilla-output-projection` · definition — QC24 Clean Ancilla Output Projection
- `def-qc-state-preparation-cost-model` · definition — QC24 State Preparation Cost Model
- `alg-qc-isometry-unitary-completion` · algorithm — Isometry Unitary Completion
- `alg-qc-state-preparation` · algorithm — QC24 State Preparation
- `thm-qc-continuous-parameter-state-preparation-lower-bound` · theorem — QC24 Continuous-Parameter State Preparation Lower Bound
- `thm-qc-finite-width-topology-count` · theorem — QC24 Finite Width Topology Count
- `lem-qc-prefix-norm-rotation-identities` · lemma — QC24 Prefix Norm Rotation Identities
- `thm-qc-discrete-alphabet-approximate-preparation-lower-bound` · theorem — QC24 Discrete Alphabet Approximate Preparation Lower Bound
- `thm-qc-finite-alphabet-exact-nonuniversality` · theorem — QC24 Finite Alphabet Exact Nonuniversality
- `thm-qc-isometry-completion-and-synthesis` · theorem — Isometry Completion and Synthesis
- `thm-qc-state-preparation-rotation-level-upper-bound` · theorem — QC24 State Preparation Rotation Level Upper Bound
- `thm-qc-amplitude-table-precision-and-compilation` · theorem — Amplitude Table Precision and Compilation
- `thm-qc-state-preparation-cost` · theorem — QC24 Explicit State-Preparation Cost Guarantee

### `state-preparation-isometry-synthesis-and-limits-examples` — State Preparation, Isometry Synthesis, and Limits — Examples (1 item(s))

- `ex-qc-amplitude-table-state-preparation-cost` · example — Amplitude-Table State Preparation Input Boundary

## Your seams

Your pages depend on another group's:

- `graph-states-and-measurement-based-computation` requires `bell-states-teleportation-and-dense-coding` (group r, batch 17)
- `graph-states-and-measurement-based-computation` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `graph-states-and-measurement-based-computation` requires `continuous-gate-universality-and-exact-synthesis` (group p, batch 11)
- `graph-states-and-measurement-based-computation` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `graph-states-and-measurement-based-computation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `graph-states-and-measurement-based-computation` requires `measurements-povms-and-instruments` (group n, batch 4)
- `graph-states-and-measurement-based-computation` requires `pauli-and-clifford-groups-binary-symplectic-tableaux` (group q, batch 15)
- `graph-states-and-measurement-based-computation` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `graph-states-and-measurement-based-computation` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `graph-states-and-measurement-based-computation` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `graph-states-and-measurement-based-computation` requires `stabilizer-circuits-and-gottesman-knill-simulation` (group r, batch 16)
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `clifford-t-exact-and-approximate-synthesis` (group q, batch 13)
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `continuous-gate-universality-and-exact-synthesis` (group p, batch 11)
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` requires `uniform-circuit-families-promise-problems-and-complexity` (group q, batch 14)
- `state-preparation-isometry-synthesis-and-limits` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)
- `state-preparation-isometry-synthesis-and-limits` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `state-preparation-isometry-synthesis-and-limits` requires `clifford-t-exact-and-approximate-synthesis` (group q, batch 13)
- `state-preparation-isometry-synthesis-and-limits` requires `continuous-gate-universality-and-exact-synthesis` (group p, batch 11)
- `state-preparation-isometry-synthesis-and-limits` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `state-preparation-isometry-synthesis-and-limits` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `state-preparation-isometry-synthesis-and-limits` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `state-preparation-isometry-synthesis-and-limits` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `state-preparation-isometry-synthesis-and-limits` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)

Another group's pages depend on yours:

- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `state-preparation-isometry-synthesis-and-limits`
- `block-encodings` (group h) requires your `state-preparation-isometry-synthesis-and-limits`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `state-preparation-isometry-synthesis-and-limits`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `state-preparation-isometry-synthesis-and-limits`

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

# Step 5 batch adjudication, `quantum-computing-algorithms-60-2026-10-15`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
