# Step 5 adjudication — group **aa**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 77 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/non-ml-math-remaining-81-2026-10-18-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/non-ml-math-remaining-81-2026-10-18-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/non-ml-math-remaining-81-2026-10-18-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/non-ml-math-remaining-81-2026-10-18-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 28 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` | A | quantum-computing | 2548 | `yang-baxter-operators-and-quantum-braid-representations`, `hecke-symmetries-and-generic-quantum-schur-weyl-duality`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` |
| 28 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models-examples` | B | quantum-computing | 2549 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` |
| 29 | `topological-braid-gates-encodings-and-universality` | A | quantum-computing | 2550 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`, `pauli-and-clifford-groups-binary-symplectic-tableaux`, `approximate-universality-and-solovay-kitaev`, `adiabatic-computation-and-circuit-equivalence`, `character-groups-and-elementary-lca-duals` |
| 29 | `topological-braid-gates-encodings-and-universality-examples` | B | quantum-computing | 2551 | `topological-braid-gates-encodings-and-universality` |
| 30 | `toric-code-anyons-logical-operators-and-protection` | A | quantum-computing | 2552 | `stabilizer-css-codes-syndromes-and-procedures` |
| 30 | `toric-code-anyons-logical-operators-and-protection-examples` | B | quantum-computing | 2553 | `toric-code-anyons-logical-operators-and-protection` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` — Unitary Fusion Spaces, F/R Symbols, and Anyon Models (20 item(s))

- `cex-qc-tqc-algebraic-braid-not-unitary` · counterexample — Algebraic braid relations do not imply unitarity
- `def-qc-tqc-unitary-fusion-category` · definition — Unitary fusion category
- `def-qc-tqc-fusion-multiplicity-space` · definition — Fusion multiplicity space
- `def-qc-tqc-ribbon-modular-data` · definition — Unitary ribbon data
- `def-qc-tqc-modularity` · definition — Modular nondegeneracy
- `def-qc-tqc-topological-spin` · definition — Topological spin
- `thm-qc-tqc-fusion-multiplicity-space-is-hilbert` · theorem — Fusion multiplicity spaces are finite-dimensional inner-product spaces
- `thm-qc-tqc-ribbon-link-invariant` · theorem — Ribbon evaluation and framed anyon links
- `def-qc-tqc-fusion-tree-basis` · definition — Multiplicity-aware fusion-tree basis
- `def-qc-tqc-gauge-transform` · definition — Fusion-basis gauge change
- `def-qc-tqc-r-symbol` · definition — R-symbol as a channel exchange map
- `lem-qc-tqc-fusion-tree-dimension` · lemma — Fusion-tree basis and dimension recursion
- `thm-qc-tqc-r-symbol-unitary` · theorem — R-symbol unitarity
- `def-qc-tqc-f-symbol` · definition — F-symbol as a recoupling matrix
- `ex-qc-tqc-fibonacci-data` · example — Fibonacci fusion data and chiral convention
- `ex-qc-tqc-ising-data` · example — Ising fusion data and chiral convention
- `thm-qc-tqc-f-symbol-unitary` · theorem — F-symbol unitarity
- `thm-qc-tqc-hexagon-coordinates` · theorem — Hexagon in F/R coordinates
- `thm-qc-tqc-pentagon-coordinates` · theorem — Pentagon in fusion-tree coordinates
- `thm-qc-tqc-gauge-covariance` · theorem — Gauge covariance of fusion-space braid actions

### `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models-examples` — Unitary Fusion Spaces, F/R Symbols, and Anyon Models — Examples (2 item(s))

- `cex-qc-tqc-hecke-not-positive` · counterexample — A Hecke parameter does not certify a positive unitary structure
- `ex-qc-tqc-small-model-matrices` · example — Worked Fibonacci and Ising braid matrices

### `topological-braid-gates-encodings-and-universality` — Topological Braid Gates, Encodings, and Universality (29 item(s))

- `def-qc-tqc-physical-braid-interface` · definition — Physical braid implementation interface
- `lem-qc-tqc-special-unitary-connected` · lemma — Special unitary groups are connected
- `def-qc-tqc-fixed-charge-encoding` · definition — Fixed-charge encoding and code projector
- `def-qc-tqc-logical-error-and-leakage` · definition — Logical block error and leakage amplitude
- `def-qc-tqc-braid-action-from-fusion-data` · definition — Braid action on a fixed-charge fusion space
- `lem-qc-tqc-zero-logical-error-forces-zero-leakage` · lemma — Exact logical-block correctness forces zero leakage
- `thm-qc-tqc-block-approximation-error` · theorem — Block-target approximation bounds logical error and leakage
- `def-qc-tqc-ising-majorana-interface` · definition — Ising–Majorana exchange interface
- `def-qc-tqc-projective-gate-and-metric` · definition — Projective braid gate and operator metric
- `def-qc-tqc-six-anyon-encoded-subspace` · definition — Six-anyon triple-encoded subspace and leakage complement
- `ex-qc-tqc-fibonacci-qubit-matrices` · example — Three-Fibonacci-anyon qubit matrices
- `ex-qc-tqc-ising-three-anyon-clifford` · example — Three-Ising-anyon braid matrices are Clifford
- `lem-qc-tqc-determinant-character-phase` · lemma — The braid phase is a common determinant character
- `lem-qc-tqc-fibonacci-b6-path-projectors-and-artin` · lemma — Fibonacci B6 path projectors satisfy the braid relations
- `lem-qc-tqc-fibonacci-coefficient-ring-specialization` · lemma — Fibonacci coefficient ring and its exact mod-31 specialization
- `lem-qc-tqc-leakage-logical-error-accumulation` · lemma — Logical error and leakage add under code-preserving gate approximation
- `thm-qc-tqc-braid-action-unitary-and-artin` · theorem — Unitary Artin braid representation on fixed-charge fusion spaces
- `cex-qc-tqc-controlled-global-phase` · counterexample — A controlled braid phase is observable
- `def-qc-tqc-universality-notions` · definition — Exact, projective, and encoded braid universality
- `lem-qc-tqc-pu2-is-so3` · lemma — The projective one-qubit group is SO(3)
- `thm-qc-tqc-b6-su5-density` · theorem — Exact five-dimensional Fibonacci B6 density
- `thm-qc-tqc-b6-su8-density` · theorem — Exact eight-dimensional Fibonacci B6 density
- `thm-qc-tqc-ising-braids-clifford-only` · theorem — Even-Majorana Ising exchanges normalize logical Paulis
- `lem-qc-tqc-b6-joint-su5-su8-density` · lemma — Joint SU(5)×SU(8) closure from B6 path blocks
- `thm-qc-tqc-fibonacci-single-qubit-density` · theorem — Fibonacci single-qubit projective density
- `lem-qc-tqc-su2-determinant-lifts-dense` · lemma — Dense projective SU(2) image has dense determinant-one lifts
- `thm-qc-tqc-approximate-encoded-two-qubit-gate` · theorem — Fibonacci B6 approximates one logical two-qubit gate in both charge blocks
- `thm-qc-tqc-spectator-extension` · theorem — Six-anyon braid target extends uniformly to fusion spectators
- `thm-qc-tqc-arbitrary-n-register-universality` · theorem — Arbitrary-size triple-encoded braid universality

### `topological-braid-gates-encodings-and-universality-examples` — Topological Braid Gates, Encodings, and Universality — Examples (2 item(s))

- `ex-qc-tqc-ising-vs-fibonacci` · example — Ising Clifford versus Fibonacci dense qubit
- `ex-qc-tqc-b6-rank-and-leakage` · example — B6 exact rank certificates and encoded leakage budget

### `toric-code-anyons-logical-operators-and-protection` — Toric Code Anyons, Logical Operators, and Protection (22 item(s))

- `def-qc-tqc-periodic-square-cellulation` · definition — Periodic square cellulation of the torus
- `lem-qc-tqc-finite-square-cycle-is-boundary` · lemma — Finite square-lattice cycles are boundaries
- `def-qc-tqc-toric-checks` · definition — Toric star and plaquette checks
- `lem-qc-tqc-contractible-disk-lifts-to-plane` · lemma — A contractible toric disk lifts to the square grid
- `lem-qc-tqc-toric-incidence-ranks` · lemma — Toric incidence maps have exactly one relation each
- `def-qc-tqc-toric-excitations` · definition — Toric e and m syndromes
- `lem-qc-tqc-toric-check-commutation` · lemma — Toric checks commute and have two global relations
- `lem-qc-tqc-toric-cycle-quotient` · lemma — Toric cycle classes are determined by two winding parities
- `def-qc-tqc-toric-hamiltonian` · definition — Finite toric-code Hamiltonian
- `lem-qc-tqc-toric-joint-check-eigenspaces` · lemma — Toric checks decompose into joint syndrome eigenspaces
- `lem-qc-tqc-toric-string-syndrome` · lemma — Open toric strings have endpoint syndromes
- `thm-qc-tqc-toric-code-dimension` · theorem — The periodic toric code encodes two qubits
- `def-qc-tqc-toric-logical-loops` · definition — Noncontractible toric logical loops
- `thm-qc-tqc-toric-gap` · theorem — Exact finite-volume toric-code gap
- `thm-qc-tqc-toric-local-indistinguishability` · theorem — Exact indistinguishability in a contractible disk
- `thm-qc-tqc-toric-mutual-sign` · theorem — A single primal-dual crossing anticommutes
- `def-qc-tqc-toric-energy-barrier` · definition — Pauli-path energy barrier
- `thm-qc-tqc-toric-distance` · theorem — Toric code distance is L
- `thm-qc-tqc-toric-logical-algebra` · theorem — Two anticommuting toric logical Pauli pairs
- `thm-qc-tqc-toric-constant-barrier` · theorem — A toric logical string has constant energy barrier
- `thm-qc-tqc-toric-recovery` · theorem — Toric code corrects Pauli errors below half the distance
- `cex-qc-tqc-gap-not-physical-protection` · counterexample — A finite toric gap does not imply arbitrary perturbation stability

### `toric-code-anyons-logical-operators-and-protection-examples` — Toric Code Anyons, Logical Operators, and Protection — Examples (2 item(s))

- `ex-qc-tqc-l3-toric-checks` · example — L=3 torus checks and syndrome calculation
- `cex-qc-tqc-planar-is-not-toric` · counterexample — Planar and periodic surface-code distances differ

## Your seams

Another group's pages depend on yours:

- `noninvertible-symmetries-and-anyonic-chains` (group i) requires your `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`
- `topological-quantum-algorithms-and-braid-compilation` (group z) requires your `topological-braid-gates-encodings-and-universality`
- `topological-quantum-algorithms-and-braid-compilation` (group z) requires your `toric-code-anyons-logical-operators-and-protection`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/non-ml-math-remaining-81-2026-10-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
