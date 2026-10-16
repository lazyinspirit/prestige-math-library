# Step 5 adjudication — group **q**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 13, 14, 15: 3 A/B pair(s), 6 page(s), 78 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **13**: `research/quantum-computing-algorithms-60-2026-10-15-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/quantum-computing-algorithms-60-2026-10-15-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/quantum-computing-algorithms-60-2026-10-15-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 13 | `clifford-t-exact-and-approximate-synthesis` | A | quantum-computing | 2190 | `algebraic-extensions-degree-and-finite-fields`, `approximate-universality-and-solovay-kitaev`, `chain-conditions-and-semisimple-modules`, `circuit-syntax-denotational-semantics-and-measurement`, `continuous-gate-universality-and-exact-synthesis`, `controlled-gates-phase-and-entanglement`, `cyclotomic-arithmetic-and-reciprocity-via-frobenius`, `dirichlets-unit-theorem-regulators-and-s-units`, `inner-product-spaces-and-orthogonality`, `number-fields-rings-of-integers-and-discriminants`, `polynomial-rings-and-roots`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `reversible-computation-ancillas-and-coherent-oracles`, `the-spectral-theorem-and-singular-value-decomposition` |
| 13 | `clifford-t-exact-and-approximate-synthesis-examples` | B | quantum-computing | 2191 | `clifford-t-exact-and-approximate-synthesis` |
| 14 | `uniform-circuit-families-promise-problems-and-complexity` | A | quantum-computing | 2192 | `approximate-universality-and-solovay-kitaev`, `boolean-circuits-and-nonuniform-complexity`, `circuit-syntax-denotational-semantics-and-measurement`, `clifford-t-exact-and-approximate-synthesis`, `continuous-gate-universality-and-exact-synthesis`, `effective-numberings-reductions-resources-and-randomness`, `finite-probability-spaces-and-random-variables`, `formal-languages-encodings-and-decision-problems`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `logarithmic-space-nl-and-reachability`, `measurements-povms-and-instruments`, `randomized-complexity-and-amplification`, `registers-tensor-products-and-partial-trace`, `reversible-computation-ancillas-and-coherent-oracles`, `the-polynomial-hierarchy-and-relativization`, `trace-distance-fidelity-and-information-limits` |
| 14 | `uniform-circuit-families-promise-problems-and-complexity-examples` | B | quantum-computing | 2193 | `uniform-circuit-families-promise-problems-and-complexity` |
| 15 | `pauli-and-clifford-groups-binary-symplectic-tableaux` | A | quantum-computing | 2194 | `algebraic-extensions-degree-and-finite-fields`, `congruences-and-the-chinese-remainder-theorem`, `controlled-gates-phase-and-entanglement`, `dual-spaces-bilinear-forms-and-inertia`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `vector-spaces-and-subspaces` |
| 15 | `pauli-and-clifford-groups-binary-symplectic-tableaux-examples` | B | quantum-computing | 2195 | `pauli-and-clifford-groups-binary-symplectic-tableaux` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `clifford-t-exact-and-approximate-synthesis` — Clifford+T Exact and Approximate Synthesis (47 item(s))

- `def-qc-dyadic-cyclotomic-ring` · definition — Dyadic cyclotomic ring for Clifford+T synthesis
- `lem-qc-modular-square-root-expected-polynomial` · lemma — Exact randomized modular square roots in expected polynomial time
- `def-qc-cyclotomic-bullet-automorphism` · definition — The nontrivial real-conjugation automorphism of the eighth cyclotomic field
- `lem-qc-dyadic-coefficient-encoding` · lemma — Canonical dyadic coefficient encoding
- `lem-qc-sqrt-two-divisibility-criterion` · lemma — Square root of two divisibility criterion in the eighth cyclotomic ring
- `lem-qc-denominator-exponent-well-defined` · lemma — Denominator exponent is a well-defined integer
- `lem-qc-dyadic-cyclotomic-conjugate-norm` · lemma — Conjugate norms from the dyadic eighth-cyclotomic ring are real dyadics
- `lem-qc-dyadic-cyclotomic-unit-circle` · lemma — Unit-modulus elements of the dyadic cyclotomic ring
- `lem-qc-cyclotomic-euclidean-factorization-and-units` · lemma — Constructive cyclotomic factorization and real unit squares
- `lem-qc-cyclotomic-one-dimensional-grid-enumeration` · lemma — One-dimensional quadratic grid enumeration and counting
- `lem-qc-paired-ellipse-grid-uprighting` · lemma — Effective simultaneous grid uprighting of paired ellipses
- `def-qc-denominator-exponent` · definition — Smallest square root of two denominator exponent
- `thm-qc-cyclotomic-norm-equation-decision` · theorem — Constructive decision of the dyadic cyclotomic norm equation
- `alg-qc-rz-efficient-scaled-grid-iterator` · algorithm — Efficient exact-denominator Rz grid iterator
- `lem-qc-cyclotomic-scaled-grid-finiteness` · lemma — Finite coefficient bounds for the scaled cyclotomic grid
- `lem-qc-squared-entry-denominator-bound` · lemma — Squared entry denominator bound
- `cor-qc-cyclotomic-prime-norm-solvability` · corollary — Prime norm numerators congruent to one modulo eight are solvable
- `thm-qc-factored-cyclotomic-norm-equation-efficient` · theorem — Efficient exact cyclotomic norm solving with a supplied integer factorization
- `lem-qc-rz-scaled-grid-growth` · lemma — Exponent growth of the Rz scaled grid
- `lem-qc-rz-candidate-norm-integer` · lemma — Size and residue of the Rz candidate norm integer
- `thm-qc-rz-efficient-scaled-grid-enumeration` · theorem — Complete scaled-grid enumeration with expected polynomial prefix cost
- `lem-qc-rz-prime-model-stopping-bounds` · lemma — Conditional stopping bounds for prime-tested Rz candidates
- `def-qc-clifford-t-gate-library` · definition — Clifford+T gate library and exact matrices
- `alg-qc-controlled-t-clean-ancilla-circuit` · algorithm — Controlled T using a clean ancilla
- `def-qc-ancilla-free-rz-approximation-problem` · definition — Ancilla-free Rz approximation problem and T-count
- `lem-qc-clifford-t-determinant-phase` · lemma — Determinants of one-qubit Clifford+T words are eighth roots
- `lem-qc-clifford-t-entry-ring` · lemma — Clifford+T circuit entries lie in the dyadic cyclotomic ring
- `lem-qc-hadamard-reduced-word-denominators` · lemma — Reduced Hadamard words and their exact denominators
- `alg-qc-cyclotomic-scaled-grid-and-norm-solver` · algorithm — Cyclotomic scaled grid and norm-equation solver
- `lem-qc-clifford-t-determinant-one-approximants` · lemma — Determinant-one Clifford+T words are dense in SU(2)
- `lem-qc-rz-epsilon-region-equivalence` · lemma — The exact operator-norm epsilon region for determinant-one Rz candidates
- `lem-qc-single-qubit-ring-unitary-form` · lemma — Normal form of a single-qubit ring unitary
- `prop-qc-controlled-t-clean-ancilla-correct` · proposition — Clean ancilla controlled T circuit is exact
- `thm-qc-controlled-t-two-qubit-obstruction` · theorem — Two-qubit determinant obstruction to controlled T
- `thm-qc-rz-synthesis-up-to-phase` · theorem — Two-phase reduction for Clifford+T Rz synthesis up to phase
- `lem-qc-clifford-t-denominator-descent-and-base` · lemma — Clifford+T denominator descent and finite base table
- `lem-qc-rz-scaled-grid-norm-solution-exists` · lemma — Every Rz epsilon region contains an exact norm-solvable grid point
- `lem-qc-rz-determinant-one-reduction` · lemma — Determinant-one reduction for optimal Rz approximation
- `lem-qc-capped-prime-norm-attempt-success` · lemma — Certified capped norm attempts succeed on prime residuals
- `thm-qc-single-qubit-exact-clifford-t-characterization` · theorem — Exact single-qubit Clifford+T ring characterization
- `alg-qc-exact-single-qubit-clifford-t-synthesis` · algorithm — Exact single-qubit Clifford+T synthesis
- `alg-qc-rz-clifford-t-approximation` · algorithm — Ancilla-free Clifford+T Rz approximation
- `thm-qc-exact-clifford-t-synthesis-optimality` · theorem — H-count and T-count optimality of exact Clifford+T synthesis
- `thm-qc-exact-single-qubit-synthesis-correct` · theorem — The exact single-qubit compiler returns the input matrix
- `thm-qc-rz-approximation-correct-on-termination` · theorem — The Rz approximation procedure is correct when it returns
- `lem-qc-su-two-denominator-t-count` · lemma — Denominator exponent and optimal T count for determinant-one unitaries
- `thm-qc-rz-clifford-t-tcount` · theorem — T-count guarantees for Clifford+T Rz synthesis

### `clifford-t-exact-and-approximate-synthesis-examples` — Clifford+T Exact and Approximate Synthesis — Examples (1 item(s))

- `ex-qc-clifford-t-exact-period-and-phase` · example — Exact T period and a non-exact Rz phase

### `uniform-circuit-families-promise-problems-and-complexity` — Uniform Circuit Families, Promise Problems, and Complexity (12 item(s))

- `def-qc-circuit-cost-model` · definition — Circuit-family and computation cost model
- `def-qc-promise-computation-model` · definition — Finite quantum promise-computation model
- `def-qc-uniform-circuit-family` · definition — Full-list uniform quantum circuit family
- `def-qc-quantum-acceptance-probability` · definition — Quantum acceptance probability for a finite promise computation
- `lem-qc-uniform-family-size-bound` · lemma — A full-list uniform generator bounds circuit size and width
- `def-qc-oracle-full-list-circuit-family` · definition — Oracle-aware full-list quantum circuit family
- `alg-qc-bounded-error-amplification` · algorithm — Bounded-error repetition amplification
- `lem-qc-acceptance-probability-phase-invariance` · lemma — Acceptance is invariant under an unconditional global phase
- `thm-qc-output-acceptance-law-normalizes` · theorem — The partial-output acceptance law is a finite probability law
- `def-qc-bqp-promise-class` · definition — BQP for promise problems in the fixed QC14 model
- `thm-qc-bounded-error-amplification-correct` · theorem — Bounded-error repetition amplification is correct and uniform
- `thm-qc-bqp-error-robustness` · theorem — BQP is unchanged by polynomially small bounded error

### `uniform-circuit-families-promise-problems-and-complexity-examples` — Uniform Circuit Families, Promise Problems, and Complexity — Examples (1 item(s))

- `ex-qc-bqp-promise-off-domain` · example — A BQP promise pair with unrestricted off-promise inputs

### `pauli-and-clifford-groups-binary-symplectic-tableaux` — Pauli and Clifford Groups, Binary Symplectic Tableaux (16 item(s))

- `def-qc-phase-aware-n-qubit-pauli-group` · definition — Phase aware n qubit pauli group
- `lem-qc-hadamard-pauli-action` · lemma — Hadamard pauli action
- `lem-qc-phase-gate-pauli-action` · lemma — Phase gate pauli action
- `thm-qc-pauli-product-and-adjoint` · theorem — Pauli product and adjoint
- `def-qc-binary-pauli-label-and-quotient` · definition — Binary Pauli label and quotient
- `def-qc-clifford-normalizer` · definition — Clifford normalizer
- `lem-qc-cnot-pauli-action` · lemma — CNOT Pauli action
- `thm-qc-hermitian-pauli-phase-criterion` · theorem — Hermitian Pauli phase criterion
- `def-qc-binary-symplectic-form` · definition — Binary symplectic form
- `thm-qc-binary-pauli-quotient-isomorphism` · theorem — Binary Pauli quotient isomorphism
- `def-qc-binary-clifford-tableau` · definition — Phase-aware binary Clifford tableau
- `lem-qc-clifford-lifts-symplectic-transvections` · lemma — Clifford circuits lift binary symplectic transvections
- `lem-qc-symplectic-transvections-generate` · lemma — Symplectic transvections generate the binary symplectic group
- `thm-qc-pauli-commutator-is-symplectic-pairing` · theorem — Pauli commutator is symplectic pairing
- `thm-qc-clifford-induces-symplectic-map` · theorem — Clifford induces symplectic map
- `thm-qc-clifford-symplectic-surjectivity` · theorem — Clifford to binary symplectic action is surjective

### `pauli-and-clifford-groups-binary-symplectic-tableaux-examples` — Pauli and Clifford Groups, Binary Symplectic Tableaux — Examples (1 item(s))

- `ex-qc-pauli-commutator-binary-symplectic` · example — Pauli commutator and binary symplectic sign

## Your seams

Your pages depend on another group's:

- `clifford-t-exact-and-approximate-synthesis` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)
- `clifford-t-exact-and-approximate-synthesis` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `clifford-t-exact-and-approximate-synthesis` requires `continuous-gate-universality-and-exact-synthesis` (group p, batch 11)
- `clifford-t-exact-and-approximate-synthesis` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `clifford-t-exact-and-approximate-synthesis` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `clifford-t-exact-and-approximate-synthesis` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `uniform-circuit-families-promise-problems-and-complexity` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)
- `uniform-circuit-families-promise-problems-and-complexity` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `uniform-circuit-families-promise-problems-and-complexity` requires `continuous-gate-universality-and-exact-synthesis` (group p, batch 11)
- `uniform-circuit-families-promise-problems-and-complexity` requires `measurements-povms-and-instruments` (group n, batch 4)
- `uniform-circuit-families-promise-problems-and-complexity` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `uniform-circuit-families-promise-problems-and-complexity` requires `reversible-computation-ancillas-and-coherent-oracles` (group p, batch 10)
- `uniform-circuit-families-promise-problems-and-complexity` requires `trace-distance-fidelity-and-information-limits` (group n, batch 6)
- `pauli-and-clifford-groups-binary-symplectic-tableaux` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `pauli-and-clifford-groups-binary-symplectic-tableaux` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `pauli-and-clifford-groups-binary-symplectic-tableaux` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)

Another group's pages depend on yours:

- `computational-problems-promises-and-cost-models` (group a) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-phase-estimation` (group c) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-order-finding-and-rational-reconstruction` (group c) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `shors-factoring-algorithm` (group c) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `finite-abelian-hidden-subgroup-algorithms` (group d) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `grover-search-and-invariant-plane-rotations` (group d) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `amplitude-amplification` (group d) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-query-lower-bounds-and-search-optimality` (group e) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `polynomial-method-and-approximate-degree` (group e) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `adversary-methods-and-quantum-query-complexity` (group f) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `discrete-quantum-walks-and-szegedy-theory` (group f) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-walk-search-and-element-distinctness` (group f) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `continuous-time-quantum-walks` (group g) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `hamiltonian-simulation-and-product-formulas` (group g) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `lcu-oblivious-amplitude-amplification-and-taylor-simulation` (group g) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `block-encodings` (group h) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-signal-processing` (group h) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-singular-value-transformation` (group h) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `qubitization-and-optimal-hamiltonian-simulation` (group i) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `hhl-phase-estimation-linear-systems` (group i) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `block-encoding-linear-systems-and-variable-time-amplification` (group i) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-spectral-estimation-and-matrix-functions` (group j) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-sampling-expectation-and-monte-carlo` (group j) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-optimization-sdp-and-variational-algorithms` (group j) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `period-hidden-shift-and-number-theoretic-algorithms` (group k) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-complexity-classes-and-oracle-separations` (group k) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-complexity-classes-and-oracle-separations` (group k) requires your `clifford-t-exact-and-approximate-synthesis`
- `quantum-complexity-classes-and-oracle-separations-examples` (group k) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `qma-verification-and-local-hamiltonian` (group k) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `algorithm-composition-precision-and-dequantization` (group l) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-communication-and-fingerprinting` (group l) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `adiabatic-computation-and-circuit-equivalence` (group l) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `stabilizer-circuits-and-gottesman-knill-simulation` (group r) requires your `pauli-and-clifford-groups-binary-symplectic-tableaux`
- `stabilizer-css-codes-syndromes-and-procedures` (group s) requires your `pauli-and-clifford-groups-binary-symplectic-tableaux`
- `graph-states-and-measurement-based-computation` (group t) requires your `pauli-and-clifford-groups-binary-symplectic-tableaux`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` (group t) requires your `clifford-t-exact-and-approximate-synthesis`
- `circuit-optimization-resource-tradeoffs-and-lower-bounds` (group t) requires your `uniform-circuit-families-promise-problems-and-complexity`
- `state-preparation-isometry-synthesis-and-limits` (group t) requires your `clifford-t-exact-and-approximate-synthesis`

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
