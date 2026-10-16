# Step 5 adjudication — group **r**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 61 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/quantum-computing-algorithms-60-2026-10-15-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/quantum-computing-algorithms-60-2026-10-15-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/quantum-computing-algorithms-60-2026-10-15-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `stabilizer-circuits-and-gottesman-knill-simulation` | A | quantum-computing | 2196 | `circuit-syntax-denotational-semantics-and-measurement`, `finite-averaging-and-character-theory-prerequisites`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `matrices-and-the-matrix-of-a-linear-map`, `measurements-povms-and-instruments`, `monoids-groups-and-subgroups`, `pauli-and-clifford-groups-binary-symplectic-tableaux`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition`, `linear-algebra-methods-in-combinatorics` |
| 16 | `stabilizer-circuits-and-gottesman-knill-simulation-examples` | B | quantum-computing | 2197 | `stabilizer-circuits-and-gottesman-knill-simulation` |
| 17 | `bell-states-teleportation-and-dense-coding` | A | quantum-computing | 2198 | `circuit-syntax-denotational-semantics-and-measurement`, `controlled-gates-phase-and-entanglement`, `measurements-povms-and-instruments`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace` |
| 17 | `bell-states-teleportation-and-dense-coding-examples` | B | quantum-computing | 2199 | `bell-states-teleportation-and-dense-coding` |
| 18 | `classical-and-quantum-error-correcting-codes` | A | quantum-computing | 2200 | `algebraic-extensions-degree-and-finite-fields`, `congruences-and-the-chinese-remainder-theorem`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `registers-tensor-products-and-partial-trace`, `vector-spaces-and-subspaces` |
| 18 | `classical-and-quantum-error-correcting-codes-examples` | B | quantum-computing | 2201 | `classical-and-quantum-error-correcting-codes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `stabilizer-circuits-and-gottesman-knill-simulation` — Stabilizer Circuits and Gottesman–Knill Simulation (22 item(s))

- `def-qc-pauli-measurement-branch-semantics` · definition — Pauli measurement branch semantics
- `lem-qc-pauli-measurement-projectors` · lemma — Pauli measurement projectors and total probability
- `lem-qc-stabilizer-maximal-isotropic-self-dual` · lemma — A maximal stabilizer label space is self-dual
- `def-qc-stabilizer-subgroup` · definition — Stabilizer subgroup
- `lem-qc-pauli-measurement-defines-an-instrument` · lemma — Pauli projectors define a finite measurement instrument
- `lem-qc-pauli-measurement-positive-branch-is-density` · lemma — Positive-probability Pauli branches are density operators
- `lem-qc-zero-probability-branch` · lemma — Zero-probability Pauli measurement branch
- `def-qc-adaptive-pauli-circuit-tree` · definition — Finite adaptive Pauli-measurement circuit tree
- `def-qc-stabilizer-state` · definition — Stabilizer state
- `lem-qc-stabilizer-subgroup-label-space-and-order` · lemma — Stabilizer labels form an isotropic space of the same rank
- `lem-qc-stabilizer-average-projector` · lemma — Stabilizer average is the fixed-space projector
- `def-qc-stabilizer-tableau` · definition — Phase-aware stabilizer tableau
- `lem-qc-anticommuting-stabilizer-measurement-is-fair` · lemma — An anticommuting stabilizer measurement is fair
- `lem-qc-computational-basis-stabilizer-tableau` · lemma — Computational basis states have an extended stabilizer tableau
- `lem-qc-tableau-clifford-update` · lemma — Phase-aware tableau updates for Clifford generators
- `lem-qc-tableau-deterministic-sign` · lemma — Tableau row reduction returns the deterministic Pauli sign
- `thm-qc-stabilizer-projector-rank-and-code-dimension` · theorem — Stabilizer projector rank and code dimension
- `lem-qc-deterministic-stabilizer-measurement` · lemma — Deterministic Pauli measurement on a pure stabilizer state
- `lem-qc-random-measurement-stabilizer-update` · lemma — Random Pauli measurement updates stabilizer generators
- `alg-qc-stabilizer-exact-simulator` · algorithm — Exact generator-tableau simulator for stabilizer circuits
- `thm-qc-tableau-measurement-update` · theorem — Phase-aware tableau measurement agrees with the projective instrument
- `thm-qc-gottesman-knill-exact-simulation` · theorem — Exact Gottesman–Knill simulation with measurement

### `stabilizer-circuits-and-gottesman-knill-simulation-examples` — Stabilizer Circuits and Gottesman–Knill Simulation — Examples (1 item(s))

- `ex-qc-stabilizer-x-measurement-branches` · example — Stabilizer measurement on $|0\rangle$ in the $X$ basis

### `bell-states-teleportation-and-dense-coding` — Bell States, Teleportation, and Dense Coding (11 item(s))

- `def-qc-bell-basis` · definition — The Bell vectors
- `thm-qc-bell-transform-inverse` · theorem — Bell preparation transform and inverse
- `alg-qc-teleportation` · algorithm — Qubit teleportation procedure
- `thm-qc-teleportation-bell-expansion` · theorem — Teleportation Bell-basis expansion
- `alg-qc-dense-coding` · algorithm — Dense-coding procedure
- `def-qc-teleportation-protocol-resource-count` · definition — Teleportation protocol resource record
- `thm-qc-teleportation-equiprobable-outcomes` · theorem — Teleportation outcomes are equiprobable
- `thm-qc-teleportation-correction-identity` · theorem — Teleportation Pauli correction identity
- `thm-qc-dense-coding-correctness-and-resource-count` · theorem — Dense-coding correctness and resources
- `thm-qc-teleportation-reference-stability` · theorem — Teleportation preserves a finite reference
- `thm-qc-teleportation-correctness-and-resource-count` · theorem — Teleportation correctness and resources

### `bell-states-teleportation-and-dense-coding-examples` — Bell States, Teleportation, and Dense Coding — Examples (1 item(s))

- `ex-qc-teleportation-branch-correction` · example — Teleportation branch and Pauli correction

### `classical-and-quantum-error-correcting-codes` — Classical and Quantum Error-Correcting Codes (22 item(s))

- `thm-qc-full-column-rank-matrix-image-has-dimension` · theorem — A full-column-rank matrix has image dimension equal to its number of columns
- `lem-qc-linear-isometry-preserves-inner-products` · lemma — Finite complex linear isometries preserve inner products
- `def-qc-classical-linear-code-over-finite-field` · definition — Classical linear code over a finite field
- `def-qc-dual-of-a-finite-field-linear-code` · definition — Bilinear dual of a finite-field linear code
- `def-qc-hamming-weight-distance-and-linear-code-distance` · definition — Hamming weight and distance of a finite-field linear code
- `def-qc-quantum-code-isometry-and-code-projector` · definition — Quantum code as an isometric encoding and its code projector
- `thm-qc-dual-code-dimension-and-double-dual` · theorem — Dimension and double-dual identity for finite-field code duals
- `thm-qc-hamming-distance-is-a-metric-and-code-distance` · theorem — Hamming distance is a metric and linear-code distance is minimum nonzero weight
- `thm-qc-isometric-encoding-projector` · theorem — An isometric quantum encoding gives an orthogonal code projector
- `def-qc-generator-and-parity-check-matrices` · definition — Generator and parity-check matrices over a finite field
- `def-qc-local-operator-support-and-weight` · definition — Support and weight of an operator on a finite register
- `lem-qc-classical-code-distance-disjoint-error-balls` · lemma — Hamming balls below half the code distance are disjoint
- `def-qc-quantum-code-distance-and-error-detection` · definition — Detectable operators and distance of a finite-register quantum code
- `lem-qc-local-operator-support-is-permutation-invariant` · lemma — Operator support weight is invariant under wire permutation
- `thm-qc-generator-and-parity-check-matrix-existence` · theorem — Every finite-field linear code has generator and parity-check matrices
- `def-qc-classical-error-syndrome` · definition — Syndrome of a received word over a finite field
- `lem-qc-detectability-is-linear-and-encoding-invariant` · lemma — Detectable operators form a subspace and quantum distance is well defined
- `lem-qc-classical-syndrome-is-error-only` · lemma — A received-word syndrome depends only on the error vector
- `lem-qc-equal-syndrome-errors-differ-by-a-codeword` · lemma — Equal classical syndromes imply a codeword difference
- `thm-qc-quantum-distance-detects-low-weight-errors` · theorem — Every operator below the quantum code distance is detectable
- `thm-qc-classical-distance-correction-and-erasure-radius` · theorem — Classical distance gives error detection, unique decoding, and erasure recovery
- `ex-qc-binary-repetition-code-syndrome-table` · example — Binary three-bit repetition code and its syndrome table

### `classical-and-quantum-error-correcting-codes-examples` — Classical and Quantum Error-Correcting Codes — Examples (4 item(s))

- `ex-qc-quantum-repetition-projector-and-distance-boundary` · example — Quantum repetition subspace projector and a distance-one boundary error
- `ex-qc-binary-hamming-code-syndrome-table` · example — The binary [7,4,3] Hamming code and its single-error syndromes
- `ex-qc-repetition-three-syndrome-table` · example — Repetition-code syndrome, known erasures, and unlocated errors
- `ex-qc-short-reed-solomon-syndrome-table` · example — A short Reed–Solomon code over $F_5$ and its symbol-error syndromes

## Your seams

Your pages depend on another group's:

- `stabilizer-circuits-and-gottesman-knill-simulation` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (group m, batch 1)
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `measurements-povms-and-instruments` (group n, batch 4)
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `pauli-and-clifford-groups-binary-symplectic-tableaux` (group q, batch 15)
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (group m, batch 3)
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `stabilizer-circuits-and-gottesman-knill-simulation` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `bell-states-teleportation-and-dense-coding` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `bell-states-teleportation-and-dense-coding` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `bell-states-teleportation-and-dense-coding` requires `measurements-povms-and-instruments` (group n, batch 4)
- `bell-states-teleportation-and-dense-coding` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `bell-states-teleportation-and-dense-coding` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `classical-and-quantum-error-correcting-codes` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)

Another group's pages depend on yours:

- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `classical-and-quantum-error-correcting-codes`
- `knill-laflamme-recovery-and-subsystem-codes` (group s) requires your `classical-and-quantum-error-correcting-codes`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `classical-and-quantum-error-correcting-codes`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `stabilizer-circuits-and-gottesman-knill-simulation`
- `noise-fault-tolerance-concatenation-and-thresholds` (group s) requires your `classical-and-quantum-error-correcting-codes`
- `graph-states-and-measurement-based-computation` (group t) requires your `bell-states-teleportation-and-dense-coding`
- `graph-states-and-measurement-based-computation` (group t) requires your `stabilizer-circuits-and-gottesman-knill-simulation`

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
