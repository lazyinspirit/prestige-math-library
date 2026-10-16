# Step 5 adjudication — group **m**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 41 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/quantum-computing-algorithms-60-2026-10-15-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/quantum-computing-algorithms-60-2026-10-15-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/quantum-computing-algorithms-60-2026-10-15-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` | A | quantum-computing | 2166 | `field-extensions-and-the-complex-numbers`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `matrices-and-the-matrix-of-a-linear-map`, `the-spectral-theorem-and-singular-value-decomposition`, `vector-spaces-and-subspaces` |
| 1 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces-examples` | B | quantum-computing | 2167 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` |
| 2 | `registers-tensor-products-and-partial-trace` | A | quantum-computing | 2168 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `tensor-products-of-modules`, `the-spectral-theorem-and-singular-value-decomposition` |
| 2 | `registers-tensor-products-and-partial-trace-examples` | B | quantum-computing | 2169 | `registers-tensor-products-and-partial-trace` |
| 3 | `pure-and-mixed-states-ensembles-and-schmidt-decomposition` | A | quantum-computing | 2170 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `hilbert-space-geometry-and-riesz-representation`, `linear-independence-bases-and-dimension`, `matrices-and-the-matrix-of-a-linear-map`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition` |
| 3 | `pure-and-mixed-states-ensembles-and-schmidt-decomposition-examples` | B | quantum-computing | 2171 | `pure-and-mixed-states-ensembles-and-schmidt-decomposition` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` — Finite-Dimensional Complex Inner-Product Spaces and Matrix Interfaces (10 item(s))

- `def-qc-dirac-notation-conversion` · definition — Dirac Notation Conversion
- `def-qc-trace-norm` · definition — Trace Norm
- `thm-qc-dirac-adjoint-amplitude-translation` · theorem — Dirac Adjoint Amplitude Translation
- `thm-qc-dirac-notation-coordinate-identity` · theorem — Dirac Notation Coordinate Identity
- `thm-qc-trace-norm-duality-and-norm-properties` · theorem — Trace Norm Duality And Norm Properties
- `thm-qc-trace-norm-rank-one-formula` · theorem — Trace Norm Rank One Formula
- `thm-qc-trace-norm-spectral-formula` · theorem — Trace Norm Spectral Formula
- `thm-qc-trace-norm-unitary-invariance-and-positive-formula` · theorem — Trace Norm Unitary Invariance And Positive Formula
- `prop-qc-trace-holder-inequality` · proposition — Trace Holder Inequality
- `thm-qc-hermitian-trace-norm-positive-negative-parts` · theorem — Hermitian Trace Norm Positive Negative Parts

### `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces-examples` — Finite-Dimensional Complex Inner-Product Spaces and Matrix Interfaces — Examples (1 item(s))

- `ex-qc-inner-product-dirac-coordinate-check` · example — Dirac and rank-one coordinate check

### `registers-tensor-products-and-partial-trace` — Registers, Tensor Products, and Partial Trace (13 item(s))

- `def-qc-register-and-computational-basis` · definition — Finite registers and their ordered computational bases
- `lem-qc-trace-pairing-nondegenerate` · lemma — The trace pairing on a finite endomorphism space is nondegenerate
- `def-qc-ordered-bitstring-encoding` · definition — Big-endian encoding of ordered bit strings
- `def-qc-tensor-register-and-permutation` · definition — Ordered tensor registers, their inner product, and wire permutations
- `thm-qc-computational-basis-orthonormal` · theorem — The computational basis is orthonormal
- `def-qc-partial-trace` · definition — Partial trace over a finite tensor factor
- `def-qc-tensor-map` · definition — Tensor products of finitely many linear maps
- `lem-qc-tensor-product-basis-and-dimension` · lemma — The product basis is orthonormal and tensor dimensions multiply
- `thm-qc-bitstring-index-is-bijection` · theorem — Big-endian bit-string indices are bijective
- `thm-qc-partial-trace-characterization-and-basis-independence` · theorem — The partial trace is characterized by the trace pairing and is basis-independent
- `thm-qc-tensor-map-composition-and-adjoint` · theorem — Tensor maps preserve composition, identities, and adjoints
- `thm-qc-wire-permutation-is-unitary` · theorem — Finite wire permutations are unitary basis permutations
- `thm-qc-partial-trace-positive-and-trace-preserving` · theorem — The partial trace preserves non-negativity and total trace

### `registers-tensor-products-and-partial-trace-examples` — Registers, Tensor Products, and Partial Trace — Examples (1 item(s))

- `ex-qc-register-endian-partial-trace` · example — Register endianness and a two-qubit partial trace

### `pure-and-mixed-states-ensembles-and-schmidt-decomposition` — Pure and Mixed States, Ensembles, and Schmidt Decomposition (15 item(s))

- `def-qc-density-operator` · definition — Density operator
- `def-qc-finite-positive-effect-family` · definition — Finite positive effect family
- `def-qc-pure-state-and-ray` · definition — Pure state and ray
- `lem-qc-complete-effect-family-members-are-effects` · lemma — A complete positive family consists of effects
- `thm-qc-density-operator-existence` · theorem — Every nonzero finite-dimensional complex inner-product space admits a density operator
- `thm-qc-ray-projector-well-defined-and-bijective` · theorem — Ray-to-projector is well-defined and bijective
- `thm-qc-schmidt-decomposition` · theorem — Schmidt decomposition
- `def-qc-ensemble-and-purification` · definition — Ensemble and purification
- `thm-qc-density-spectral-ensemble` · theorem — Density operators have an orthogonal spectral ensemble
- `thm-qc-ensemble-barycenter-is-density` · theorem — Finite ensemble barycenters are density operators
- `thm-qc-purification-existence-and-unitary-equivalence` · theorem — Purifications exist and are unitarily equivalent after padding
- `thm-qc-rank-one-density-operator` · theorem — Rank-one density operators are pure-state projectors
- `thm-qc-ensemble-purification-correspondence` · theorem — Every finite state ensemble is obtainable from a purification
- `thm-qc-density-operator-convexity` · theorem — The set of density operators is convex
- `thm-qc-purification-minimal-environment-dimension` · theorem — The least purification environment dimension is the density rank

### `pure-and-mixed-states-ensembles-and-schmidt-decomposition-examples` — Pure and Mixed States, Ensembles, and Schmidt Decomposition — Examples (1 item(s))

- `ex-qc-bell-state-schmidt-reduction` · example — Bell-state Schmidt decomposition and reduced density

## Your seams

Another group's pages depend on yours:

- `computational-problems-promises-and-cost-models` (group a) requires your `registers-tensor-products-and-partial-trace`
- `computational-problems-promises-and-cost-models` (group a) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `registers-tensor-products-and-partial-trace`
- `reversible-arithmetic-and-oracle-conversion` (group a) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `exact-oracle-algorithms` (group a) requires your `registers-tensor-products-and-partial-trace`
- `exact-oracle-algorithms` (group a) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `simon-algorithm-and-finite-field-recovery` (group b) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-fourier-transform-circuits` (group b) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-fourier-transform-circuits` (group b) requires your `registers-tensor-products-and-partial-trace`
- `quantum-phase-estimation` (group c) requires your `registers-tensor-products-and-partial-trace`
- `quantum-phase-estimation` (group c) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-phase-estimation` (group c) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `quantum-order-finding-and-rational-reconstruction` (group c) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-order-finding-and-rational-reconstruction` (group c) requires your `registers-tensor-products-and-partial-trace`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `registers-tensor-products-and-partial-trace`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `registers-tensor-products-and-partial-trace`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `amplitude-amplification` (group d) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `amplitude-amplification` (group d) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `amplitude-estimation-and-counting` (group e) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-query-lower-bounds-and-search-optimality` (group e) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-query-lower-bounds-and-search-optimality` (group e) requires your `registers-tensor-products-and-partial-trace`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `registers-tensor-products-and-partial-trace`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `discrete-quantum-walks-and-szegedy-theory` (group f) requires your `registers-tensor-products-and-partial-trace`
- `discrete-quantum-walks-and-szegedy-theory` (group f) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `registers-tensor-products-and-partial-trace`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `continuous-time-quantum-walks` (group g) requires your `registers-tensor-products-and-partial-trace`
- `continuous-time-quantum-walks` (group g) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `continuous-time-quantum-walks` (group g) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `continuous-time-quantum-walks-examples` (group g) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `registers-tensor-products-and-partial-trace`
- `block-encodings` (group h) requires your `registers-tensor-products-and-partial-trace`
- `block-encodings` (group h) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-signal-processing` (group h) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-singular-value-transformation` (group h) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `hhl-phase-estimation-linear-systems` (group i) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `hhl-phase-estimation-linear-systems` (group i) requires your `registers-tensor-products-and-partial-trace`
- `hhl-phase-estimation-linear-systems` (group i) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `registers-tensor-products-and-partial-trace`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `registers-tensor-products-and-partial-trace`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `registers-tensor-products-and-partial-trace`
- `quantum-complexity-classes-and-oracle-separations` (group k) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-complexity-classes-and-oracle-separations` (group k) requires your `registers-tensor-products-and-partial-trace`
- `qma-verification-and-local-hamiltonian` (group k) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `qma-verification-and-local-hamiltonian` (group k) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `qma-verification-and-local-hamiltonian` (group k) requires your `registers-tensor-products-and-partial-trace`
- `quantum-communication-and-fingerprinting` (group l) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `quantum-communication-and-fingerprinting` (group l) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-communication-and-fingerprinting` (group l) requires your `registers-tensor-products-and-partial-trace`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `registers-tensor-products-and-partial-trace`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `measurements-povms-and-instruments` (group n) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `measurements-povms-and-instruments` (group n) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `measurements-povms-and-instruments` (group n) requires your `registers-tensor-products-and-partial-trace`
- `channels-kraus-choi-and-stinespring-representations` (group n) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `channels-kraus-choi-and-stinespring-representations` (group n) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `channels-kraus-choi-and-stinespring-representations` (group n) requires your `registers-tensor-products-and-partial-trace`
- `trace-distance-fidelity-and-information-limits` (group n) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `trace-distance-fidelity-and-information-limits` (group n) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `trace-distance-fidelity-and-information-limits` (group n) requires your `registers-tensor-products-and-partial-trace`
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o) requires your `registers-tensor-products-and-partial-trace`
- `controlled-gates-phase-and-entanglement` (group o) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `controlled-gates-phase-and-entanglement` (group o) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `controlled-gates-phase-and-entanglement` (group o) requires your `registers-tensor-products-and-partial-trace`
- `circuit-syntax-denotational-semantics-and-measurement` (group o) requires your `registers-tensor-products-and-partial-trace`
- `reversible-computation-ancillas-and-coherent-oracles` (group p) requires your `registers-tensor-products-and-partial-trace`
- `continuous-gate-universality-and-exact-synthesis` (group p) requires your `registers-tensor-products-and-partial-trace`
- `uniform-circuit-families-promise-problems-and-complexity` (group q) requires your `registers-tensor-products-and-partial-trace`
- `pauli-and-clifford-groups-binary-symplectic-tableaux` (group q) requires your `registers-tensor-products-and-partial-trace`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `registers-tensor-products-and-partial-trace`
- `bell-states-teleportation-and-dense-coding` (group r) requires your `registers-tensor-products-and-partial-trace`
- `classical-and-quantum-error-correcting-codes` (group r) requires your `registers-tensor-products-and-partial-trace`
- `knill-laflamme-recovery-and-subsystem-codes` (group s) requires your `registers-tensor-products-and-partial-trace`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `registers-tensor-products-and-partial-trace`
- `graph-states-and-measurement-based-computation` (group t) requires your `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `graph-states-and-measurement-based-computation` (group t) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `graph-states-and-measurement-based-computation` (group t) requires your `registers-tensor-products-and-partial-trace`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `registers-tensor-products-and-partial-trace`

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
