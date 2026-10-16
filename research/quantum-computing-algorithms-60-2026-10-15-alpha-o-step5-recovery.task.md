# Step 5 adjudication — group **o**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/quantum-computing-algorithms-60-2026-10-15-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/quantum-computing-algorithms-60-2026-10-15-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/quantum-computing-algorithms-60-2026-10-15-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 7 | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | A | quantum-computing | 2178 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition`, `strongly-continuous-semigroups-and-hille-yosida` |
| 7 | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples` | B | quantum-computing | 2179 | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` |
| 8 | `controlled-gates-phase-and-entanglement` | A | quantum-computing | 2180 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `inner-product-spaces-and-orthogonality`, `measurements-povms-and-instruments`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition` |
| 8 | `controlled-gates-phase-and-entanglement-examples` | B | quantum-computing | 2181 | `controlled-gates-phase-and-entanglement` |
| 9 | `circuit-syntax-denotational-semantics-and-measurement` | A | quantum-computing | 2182 | `channels-kraus-choi-and-stinespring-representations`, `controlled-gates-phase-and-entanglement`, `measurements-povms-and-instruments`, `registers-tensor-products-and-partial-trace` |
| 9 | `circuit-syntax-denotational-semantics-and-measurement-examples` | B | quantum-computing | 2183 | `circuit-syntax-denotational-semantics-and-measurement` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` — Qubits, Bloch Sphere, Pauli Algebra, and One-Qubit Gates (10 item(s))

- `def-qc-qubit-and-bloch-representation` · definition — Qubit spaces and states
- `def-qc-pauli-matrices` · definition — The Pauli matrices
- `thm-qc-pauli-algebra` · theorem — Pauli matrix algebra and trace identities
- `def-qc-bloch-coordinate-map` · definition — Bloch coordinate maps
- `def-qc-one-qubit-gate-alphabet-and-rotations` · definition — Exact one-qubit gates and rotations
- `thm-qc-bloch-coordinate-existence-and-uniqueness` · theorem — Existence and uniqueness of Bloch coordinates
- `thm-qc-axis-rotation-pauli-formula` · theorem — Pauli formula for an axis rotation
- `thm-qc-hadamard-pauli-conjugation` · theorem — Hadamard conjugation of the Pauli matrices
- `thm-qc-bloch-positivity-ball` · theorem — The Bloch ball is exactly the qubit density-state space
- `thm-qc-bloch-purity-sphere` · theorem — Purity is the boundary of the Bloch ball

### `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples` — Qubits, Bloch Sphere, Pauli Algebra, and One-Qubit Gates — Examples (1 item(s))

- `ex-qc-zero-plus-bloch-and-hadamard` · example — Bloch coordinates of |0> and H|0>

### `controlled-gates-phase-and-entanglement` — Controlled Gates, Phase, and Entanglement (15 item(s))

- `thm-qc-unit-vector-projector-is-density` · theorem — A unit-vector outer product is a density operator
- `def-qc-pure-state-entanglement` · definition — Pure-State Entanglement Across a Tensor Cut
- `thm-qc-standalone-global-phase-invariance` · theorem — Standalone Global Phase Leaves Pure-State POVM Probabilities Unchanged
- `def-qc-controlled-unitary-access` · definition — Controlled Unitary Access
- `def-qc-relative-phase` · definition — Relative Phase
- `def-qc-inverse-unitary-access` · definition — Inverse Unitary Access
- `def-qc-controlled-phase-rotation` · definition — Controlled Phase Rotation
- `thm-qc-controlled-global-phase-is-relative-phase` · theorem — A Controlled Global Phase Becomes a Relative Control Phase
- `def-qc-cnot-and-control-target-order` · definition — CNOT and Control-Target Order
- `def-qc-multicontrol-activation` · definition — Multi-Control Activation Pattern
- `def-qc-controlled-z-and-swap` · definition — Controlled-Z and SWAP
- `thm-qc-cnot-creates-bell-entanglement` · theorem — Hadamard Followed by CNOT Creates Bell Entanglement from |00>
- `def-qc-reflection` · definition — Orthogonal-Projector Reflection and Access Contract
- `thm-qc-reflection-unitary-involution` · theorem — Projector Reflections Are Hermitian Unitary Involutions
- `thm-qc-rank-one-reflection-phase-and-control-sign` · theorem — Rank-One Reflection Is Ray-Invariant and Its Signs Differ Under Control

### `controlled-gates-phase-and-entanglement-examples` — Controlled Gates, Phase, and Entanglement — Examples (1 item(s))

- `ex-qc-controlled-global-phase-witness` · example — Controlled Global Phase Changes an X-Outcome

### `circuit-syntax-denotational-semantics-and-measurement` — Circuit Syntax, Denotational Semantics, and Measurement (15 item(s))

- `def-qc-circuit-syntax-and-register-order` · definition — Finite circuit syntax and ordered wire labels
- `lem-qc-finite-isometry-unitary-extension` · lemma — A finite isometry extends after finite ancilla padding
- `lem-qc-local-gate-wire-embedding` · lemma — A local gate has a unique global wire embedding
- `lem-qc-disjoint-layer-order-independence` · lemma — Gates on disjoint wires commute
- `def-qc-circuit-denotational-semantics` · definition — Denotational semantics of a finite layered circuit
- `lem-qc-instrument-output-space-is-nonzero` · lemma — A finite instrument with nonzero input has nonzero output space
- `thm-qc-instrument-kraus-normalization` · theorem — Instrument branch Kraus families satisfy total normalization
- `lem-qc-coherent-record-isometry` · lemma — A finite instrument has an isometric coherent record
- `thm-qc-instrument-induces-povm` · theorem — Every finite instrument induces a unique POVM
- `def-qc-classical-control-and-measurement-circuit` · definition — Finite measurement branches and classical control
- `def-qc-elementary-circuit-resources` · definition — Finite circuit resource accounting
- `def-qc-measurement-branch-output-law` · definition — The outcome law and outputs of a measured circuit
- `thm-qc-circuit-inverse-reversal` · theorem — Reversing a circuit implements its inverse
- `thm-qc-deferred-measurement` · theorem — Finite instruments can be coherently deferred
- `thm-qc-terminal-measurement-circuit-equivalence` · theorem — All measurements may be moved to terminal readout

### `circuit-syntax-denotational-semantics-and-measurement-examples` — Circuit Syntax, Denotational Semantics, and Measurement — Examples (1 item(s))

- `ex-qc-deferred-measurement-one-bit` · example — One-bit feed-forward and deferred measurement

## Your seams

Your pages depend on another group's:

- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `controlled-gates-phase-and-entanglement` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `controlled-gates-phase-and-entanglement` requires `measurements-povms-and-instruments` (group n, batch 4)
- `controlled-gates-phase-and-entanglement` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `controlled-gates-phase-and-entanglement` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `circuit-syntax-denotational-semantics-and-measurement` requires `channels-kraus-choi-and-stinespring-representations` (group n, batch 5)
- `circuit-syntax-denotational-semantics-and-measurement` requires `measurements-povms-and-instruments` (group n, batch 4)
- `circuit-syntax-denotational-semantics-and-measurement` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)

Another group's pages depend on yours:

- `computational-problems-promises-and-cost-models` (group a) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `controlled-gates-phase-and-entanglement`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `exact-oracle-algorithms` (group a) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-fourier-transform-circuits` (group b) requires your `controlled-gates-phase-and-entanglement`
- `quantum-fourier-transform-circuits` (group b) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-fourier-transform-circuits` (group b) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-phase-estimation` (group c) requires your `controlled-gates-phase-and-entanglement`
- `quantum-phase-estimation` (group c) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-order-finding-and-rational-reconstruction` (group c) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `controlled-gates-phase-and-entanglement`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `amplitude-amplification` (group d) requires your `controlled-gates-phase-and-entanglement`
- `amplitude-estimation-and-counting` (group e) requires your `controlled-gates-phase-and-entanglement`
- `amplitude-estimation-and-counting` (group e) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `amplitude-estimation-and-counting` (group e) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `controlled-gates-phase-and-entanglement`
- `discrete-quantum-walks-and-szegedy-theory` (group f) requires your `controlled-gates-phase-and-entanglement`
- `discrete-quantum-walks-and-szegedy-theory` (group f) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `controlled-gates-phase-and-entanglement`
- `continuous-time-quantum-walks` (group g) requires your `controlled-gates-phase-and-entanglement`
- `hamiltonian-simulation-and-product-formulas` (group g) requires your `controlled-gates-phase-and-entanglement`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `controlled-gates-phase-and-entanglement`
- `block-encodings` (group h) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `block-encodings` (group h) requires your `controlled-gates-phase-and-entanglement`
- `quantum-signal-processing` (group h) requires your `controlled-gates-phase-and-entanglement`
- `quantum-signal-processing` (group h) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-singular-value-transformation` (group h) requires your `controlled-gates-phase-and-entanglement`
- `quantum-singular-value-transformation` (group h) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `controlled-gates-phase-and-entanglement`
- `hhl-phase-estimation-linear-systems` (group i) requires your `controlled-gates-phase-and-entanglement`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `controlled-gates-phase-and-entanglement`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `controlled-gates-phase-and-entanglement`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `controlled-gates-phase-and-entanglement`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `controlled-gates-phase-and-entanglement`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `quantum-optimization-sdp-and-variational-algorithms-examples` (group j) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `controlled-gates-phase-and-entanglement`
- `qma-verification-and-local-hamiltonian` (group k) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `reversible-computation-ancillas-and-coherent-oracles` (group p) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `reversible-computation-ancillas-and-coherent-oracles` (group p) requires your `controlled-gates-phase-and-entanglement`
- `reversible-computation-ancillas-and-coherent-oracles` (group p) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `continuous-gate-universality-and-exact-synthesis` (group p) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `continuous-gate-universality-and-exact-synthesis` (group p) requires your `controlled-gates-phase-and-entanglement`
- `continuous-gate-universality-and-exact-synthesis` (group p) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `approximate-universality-and-solovay-kitaev` (group p) requires your `controlled-gates-phase-and-entanglement`
- `approximate-universality-and-solovay-kitaev` (group p) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `clifford-t-exact-and-approximate-synthesis` (group q) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `clifford-t-exact-and-approximate-synthesis` (group q) requires your `controlled-gates-phase-and-entanglement`
- `clifford-t-exact-and-approximate-synthesis` (group q) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `pauli-and-clifford-groups-binary-symplectic-tableaux` (group q) requires your `controlled-gates-phase-and-entanglement`
- `pauli-and-clifford-groups-binary-symplectic-tableaux` (group q) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `bell-states-teleportation-and-dense-coding` (group r) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `bell-states-teleportation-and-dense-coding` (group r) requires your `controlled-gates-phase-and-entanglement`
- `bell-states-teleportation-and-dense-coding` (group r) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `controlled-gates-phase-and-entanglement`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `noise-fault-tolerance-concatenation-and-thresholds` (group s) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `noise-fault-tolerance-concatenation-and-thresholds` (group s) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `graph-states-and-measurement-based-computation` (group t) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `graph-states-and-measurement-based-computation` (group t) requires your `controlled-gates-phase-and-entanglement`
- `graph-states-and-measurement-based-computation` (group t) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` (group t) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `circuit-syntax-denotational-semantics-and-measurement`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `controlled-gates-phase-and-entanglement`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`

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
