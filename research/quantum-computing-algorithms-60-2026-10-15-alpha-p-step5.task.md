# Step 5 adjudication — group **p**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/quantum-computing-algorithms-60-2026-10-15-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/quantum-computing-algorithms-60-2026-10-15-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/quantum-computing-algorithms-60-2026-10-15-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 10 | `reversible-computation-ancillas-and-coherent-oracles` | A | quantum-computing | 2184 | `boolean-circuits-and-nonuniform-complexity`, `circuit-syntax-denotational-semantics-and-measurement`, `controlled-gates-phase-and-entanglement`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `turing-machines-configurations-and-computation` |
| 10 | `reversible-computation-ancillas-and-coherent-oracles-examples` | B | quantum-computing | 2185 | `reversible-computation-ancillas-and-coherent-oracles` |
| 11 | `continuous-gate-universality-and-exact-synthesis` | A | quantum-computing | 2186 | `circuit-syntax-denotational-semantics-and-measurement`, `controlled-gates-phase-and-entanglement`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `reversible-computation-ancillas-and-coherent-oracles`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `sard-theorem-and-transversality`, `the-spectral-theorem-and-singular-value-decomposition`, `reeb-stability-and-global-foliation-constructions`, `haar-measure-existence-and-uniqueness` |
| 11 | `continuous-gate-universality-and-exact-synthesis-examples` | B | quantum-computing | 2187 | `continuous-gate-universality-and-exact-synthesis` |
| 12 | `approximate-universality-and-solovay-kitaev` | A | quantum-computing | 2188 | `chain-conditions-and-semisimple-modules`, `continuous-gate-universality-and-exact-synthesis`, `controlled-gates-phase-and-entanglement`, `cyclotomic-arithmetic-and-reciprocity-via-frobenius`, `dirichlets-unit-theorem-regulators-and-s-units`, `formal-languages-encodings-and-decision-problems`, `jacobi-fields-conjugate-points-and-the-cut-locus`, `lie-groups-invariant-fields-and-the-exponential-map`, `matrix-norms-condition-numbers-and-numerical-stability`, `number-fields-rings-of-integers-and-discriminants`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `the-complex-exponential-and-eulers-formula`, `the-spectral-theorem-and-singular-value-decomposition` |
| 12 | `approximate-universality-and-solovay-kitaev-examples` | B | quantum-computing | 2189 | `approximate-universality-and-solovay-kitaev` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `reversible-computation-ancillas-and-coherent-oracles` — Reversible Computation, Ancillas, and Coherent Oracles (14 item(s))

- `def-qc-clean-and-dirty-ancillas` · definition — Clean and dirty ancillas
- `def-qc-toffoli-and-fredkin` · definition — Toffoli and Fredkin gates
- `lem-qc-ancilla-identities-stable-under-reference-and-mixtures` · lemma — Clean and dirty ancilla identities extend to references and mixed states
- `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions` · lemma — X, CNOT, Toffoli, and Fredkin are involutions
- `alg-qc-reversible-embedding` · algorithm — Reversible embedding of a Boolean circuit
- `lem-qc-fresh-target-not-and-or-gadgets` · lemma — Fresh-target NOT and OR gadgets
- `lem-qc-toffoli-clean-target-and-uncomputation` · lemma — Toffoli computes into a clean target and uncomputes it
- `thm-qc-clean-uncomputation-restores-workspace` · theorem — Compute-copy-uncompute restores clean workspace
- `thm-qc-reversible-embedding-cost` · theorem — Gate, workspace, and serial-depth costs of reversible embedding
- `def-qc-coherent-function-oracle` · definition — Coherent XOR function oracle
- `thm-qc-reversible-embedding-parallel-depth` · theorem — Parallel depth of reversible Boolean embedding
- `thm-qc-reversible-xor-oracle-unitary` · theorem — A total Boolean XOR oracle is unitary and involutive
- `thm-qc-phase-kickback-from-xor-oracle` · theorem — Phase kickback from an XOR oracle
- `thm-qc-oracle-phase-query-cost-boundary` · theorem — Oracle phase queries and compiled gate costs are distinct

### `reversible-computation-ancillas-and-coherent-oracles-examples` — Reversible Computation, Ancillas, and Coherent Oracles — Examples (1 item(s))

- `ex-qc-reversible-and-oracle-compute-copy-uncompute` · example — A reversible AND oracle with clean work

### `continuous-gate-universality-and-exact-synthesis` — Continuous-Gate Universality and Exact Synthesis (22 item(s))

- `def-qc-global-phase-equivalence` · definition — Global Phase Equivalence
- `lem-qc-two-unitary-block-demultiplexing` · lemma — Demultiplexing a Two-Block Unitary
- `lem-qc-unitary-group-cayley-charts` · lemma — Cayley Charts on the Unitary Matrix Group
- `thm-qc-cosine-sine-block-decomposition` · theorem — Cosine-Sine Block Decomposition
- `def-qc-two-level-unitary` · definition — Two-Level Unitary
- `alg-qc-two-level-unitary-elimination` · algorithm — Exact Two-Level Elimination of a Unitary
- `thm-qc-two-level-unitary-elimination-correct` · theorem — Correctness and Termination of Two-Level Elimination
- `thm-qc-one-qubit-euler-decomposition` · theorem — One-Qubit Euler Decomposition
- `thm-qc-two-qubit-cartan-decomposition` · theorem — Exact Two-Qubit Cartan Decomposition
- `lem-qc-global-phase-under-control` · lemma — Global Phase Under Control
- `lem-qc-generic-cnot-parameter-count` · lemma — Parameter Count for a Fixed CNOT Skeleton
- `lem-qc-multiplexed-axis-rotation-gray-code` · lemma — Gray-Code Synthesis of a Multiplexed Axis Rotation
- `thm-qc-one-control-unitary-two-cnot` · theorem — Exact Controlled One-Qubit Unitary with Two CNOTs
- `thm-qc-two-qubit-unitary-three-cnot-synthesis` · theorem — Exact Three-CNOT Synthesis of Two-Qubit Unitaries
- `lem-qc-terminal-diagonal-migration` · lemma — Two-CNOT Synthesis up to a Migrating Terminal Diagonal
- `lem-qc-recursive-qsd-central-cz-absorption` · lemma — Exact Central Controlled-Z Absorption at a QSD Node
- `thm-qc-generic-unitary-cnot-lower-bound` · theorem — Generic No-Ancilla CNOT Lower Bound
- `lem-qc-borrowed-bit-multicontrolled-x-linear` · lemma — Linear Multicontrolled X with One Borrowed Wire
- `thm-qc-exact-arbitrary-unitary-qsd-upper-bound` · theorem — Exact QSD CNOT Upper Bound
- `thm-qc-multicontrolled-ancilla-resource-tradeoff` · theorem — Multicontrolled Unitaries with and without a Clean Work Bit
- `alg-qc-two-level-gate-to-elementary-gates` · algorithm — Gray-Path Synthesis of a Two-Level Gate
- `thm-qc-two-level-gate-synthesis-correct` · theorem — Correctness of Gray-Path Two-Level Synthesis

### `continuous-gate-universality-and-exact-synthesis-examples` — Continuous-Gate Universality and Exact Synthesis — Examples (1 item(s))

- `ex-qc-two-level-unitary-synthesis` · example — A Two-Level Rotation on Two Qubits

### `approximate-universality-and-solovay-kitaev` — Approximate Universality and Solovay–Kitaev (16 item(s))

- `def-qc-effective-unitary-matrix-input` · definition — Effective Unitary Matrix Input
- `def-qc-inverse-closed-dense-su2-gate-set` · definition — Inverse-Closed Dense SU(2) Gate Set
- `lem-qc-fixed-dimension-interval-arithmetic` · lemma — Fixed-Dimension Dyadic Matrix Routines Have Polynomial Bit Cost
- `lem-qc-irrational-rotation-dense-on-circle` · lemma — Powers of an Irrational Rotation Are Dense on the Circle
- `lem-qc-su2-near-identity-logarithm` · lemma — A Quantitative Logarithm Near the Identity in SU(2)
- `lem-qc-compact-su2-base-net` · lemma — Compactness Gives a Finite SU(2) Base Net
- `lem-qc-pauli-vector-multiplication` · lemma — Pauli Vector Multiplication and Commutator Formula
- `lem-qc-su2-balanced-commutator` · lemma — A Quantitative Balanced Commutator in SU(2)
- `lem-qc-two-axis-su2-generation` · lemma — Two Nonparallel One-Parameter Subgroups Generate SU(2) After Closure
- `lem-qc-clifford-t-projective-density` · lemma — Clifford+T Is Dense Projectively on One Qubit
- `lem-qc-commutator-error-cancellation` · lemma — Error Cancellation in an SU(2) Commutator
- `alg-qc-solovay-kitaev-unitary-compiler` · algorithm — Solovay–Kitaev Unitary Compiler for SU(2)
- `thm-qc-solovay-kitaev-error-and-resource-bound` · theorem — Solovay–Kitaev Error and Resource Bound
- `thm-qc-solovay-kitaev-bit-complexity` · theorem — Finite-Precision Bit Complexity of the SU(2) Solovay–Kitaev Compiler
- `thm-qc-fixed-arity-unitary-error-budget` · theorem — Fixed-Arity Unitary Error Budget
- `thm-qc-controlled-phase-approximation` · theorem — Controlled-Phase Approximation and Global-Phase Boundary

### `approximate-universality-and-solovay-kitaev-examples` — Approximate Universality and Solovay–Kitaev — Examples (1 item(s))

- `ex-qc-solovay-kitaev-error-budget` · example — A Three-Factor Solovay–Kitaev Error Budget

## Your seams

Your pages depend on another group's:

- `reversible-computation-ancillas-and-coherent-oracles` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `reversible-computation-ancillas-and-coherent-oracles` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `reversible-computation-ancillas-and-coherent-oracles` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `reversible-computation-ancillas-and-coherent-oracles` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `continuous-gate-universality-and-exact-synthesis` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `continuous-gate-universality-and-exact-synthesis` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `continuous-gate-universality-and-exact-synthesis` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `continuous-gate-universality-and-exact-synthesis` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `approximate-universality-and-solovay-kitaev` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `approximate-universality-and-solovay-kitaev` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)

Another group's pages depend on yours:

- `computational-problems-promises-and-cost-models` (group a) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-fourier-transform-circuits` (group b) requires your `approximate-universality-and-solovay-kitaev`
- `quantum-order-finding-and-rational-reconstruction` (group c) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `amplitude-amplification` (group d) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `continuous-time-quantum-walks` (group g) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `hamiltonian-simulation-and-product-formulas` (group g) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `block-encodings` (group h) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-complexity-classes-and-oracle-separations` (group k) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `qma-verification-and-local-hamiltonian` (group k) requires your `approximate-universality-and-solovay-kitaev`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `approximate-universality-and-solovay-kitaev`
- `quantum-communication-and-fingerprinting` (group l) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `clifford-t-exact-and-approximate-synthesis` (group q) requires your `approximate-universality-and-solovay-kitaev`
- `clifford-t-exact-and-approximate-synthesis` (group q) requires your `continuous-gate-universality-and-exact-synthesis`
- `clifford-t-exact-and-approximate-synthesis` (group q) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `approximate-universality-and-solovay-kitaev`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `continuous-gate-universality-and-exact-synthesis`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `noise-fault-tolerance-concatenation-and-thresholds` (group s) requires your `approximate-universality-and-solovay-kitaev`
- `graph-states-and-measurement-based-computation` (group t) requires your `continuous-gate-universality-and-exact-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` (group t) requires your `approximate-universality-and-solovay-kitaev`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` (group t) requires your `continuous-gate-universality-and-exact-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` (group t) requires your `reversible-computation-ancillas-and-coherent-oracles`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `approximate-universality-and-solovay-kitaev`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `continuous-gate-universality-and-exact-synthesis`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `reversible-computation-ancillas-and-coherent-oracles`

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
