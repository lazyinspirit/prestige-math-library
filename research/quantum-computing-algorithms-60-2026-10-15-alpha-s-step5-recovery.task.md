# Step 5 adjudication — group **s**, run `quantum-computing-algorithms-60-2026-10-15`

You are the group Alpha for batches 19, 20, 21: 3 A/B pair(s), 6 page(s), 60 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/quantum-computing-algorithms-60-2026-10-15-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/quantum-computing-algorithms-60-2026-10-15-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/quantum-computing-algorithms-60-2026-10-15-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `knill-laflamme-recovery-and-subsystem-codes` | A | quantum-computing | 2202 | `channels-kraus-choi-and-stinespring-representations`, `classical-and-quantum-error-correcting-codes`, `inner-product-spaces-and-orthogonality`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition` |
| 19 | `knill-laflamme-recovery-and-subsystem-codes-examples` | B | quantum-computing | 2203 | `knill-laflamme-recovery-and-subsystem-codes` |
| 20 | `stabilizer-css-codes-syndromes-and-procedures` | A | quantum-computing | 2204 | `circuit-syntax-denotational-semantics-and-measurement`, `classical-and-quantum-error-correcting-codes`, `controlled-gates-phase-and-entanglement`, `inner-product-spaces-and-orthogonality`, `knill-laflamme-recovery-and-subsystem-codes`, `linear-independence-bases-and-dimension`, `matrices-and-the-matrix-of-a-linear-map`, `pauli-and-clifford-groups-binary-symplectic-tableaux`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `stabilizer-circuits-and-gottesman-knill-simulation` |
| 20 | `stabilizer-css-codes-syndromes-and-procedures-examples` | B | quantum-computing | 2205 | `stabilizer-css-codes-syndromes-and-procedures` |
| 21 | `noise-fault-tolerance-concatenation-and-thresholds` | A | quantum-computing | 2206 | `channels-kraus-choi-and-stinespring-representations`, `circuit-syntax-denotational-semantics-and-measurement`, `classical-and-quantum-error-correcting-codes`, `finite-probability-spaces-and-random-variables`, `independence-borel-cantelli-and-zero-one-laws`, `knill-laflamme-recovery-and-subsystem-codes`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `stabilizer-css-codes-syndromes-and-procedures`, `trace-distance-fidelity-and-information-limits`, `approximate-universality-and-solovay-kitaev` |
| 21 | `noise-fault-tolerance-concatenation-and-thresholds-examples` | B | quantum-computing | 2207 | `noise-fault-tolerance-concatenation-and-thresholds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `knill-laflamme-recovery-and-subsystem-codes` — Knill–Laflamme Recovery and Subsystem Codes (15 item(s))

- `lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement` · lemma — Agreement on pure states implies complete agreement
- `lem-qc-knill-laflamme-product-operator-matrix-units-form-a-basis` · lemma — Product operator matrix units form a basis
- `def-qc-first-factor-partial-trace` · definition — Partial trace over the first tensor factor
- `lem-qc-knill-laflamme-coefficient-matrix-is-positive` · lemma — The Knill–Laflamme coefficient matrix is positive
- `lem-qc-knill-laflamme-orthogonal-error-basis` · lemma — A unitary error-basis change gives orthogonal error ranges
- `def-qc-exact-recovery-of-a-quantum-code` · definition — Exact recovery of an encoded quantum code
- `lem-qc-kraus-operators-of-the-identity-channel-are-scalars` · lemma — Kraus operators in an identity-channel representation are scalar
- `lem-qc-orthogonal-error-syndrome-projectors` · lemma — Orthogonal error restrictions determine syndrome projections
- `lem-qc-subsystem-marginal-preservation-forces-gauge-kraus-form` · lemma — Preserving the logical marginal forces a gauge-only channel
- `thm-qc-knill-laflamme-explicit-recovery` · theorem — An explicit syndrome recovery corrects a Knill–Laflamme error family
- `thm-qc-knill-laflamme-necessity` · theorem — Exact recovery implies the Knill–Laflamme condition
- `cor-qc-distance-corrects-t-errors-and-erasures` · corollary — Distance corrects unlocated errors and known erasures
- `def-qc-correctable-subsystem-and-gauge-factor` · definition — Exact correction of a protected subsystem
- `ex-qc-degenerate-code-kl-matrix` · example — A degenerate code with a non-diagonal Knill–Laflamme matrix
- `thm-qc-subsystem-knill-laflamme` · theorem — The Knill–Laflamme criterion for a protected subsystem

### `knill-laflamme-recovery-and-subsystem-codes-examples` — Knill–Laflamme Recovery and Subsystem Codes — Examples (1 item(s))

- `ex-qc-knill-laflamme-orthogonal-error-recovery` · example — Orthogonal error spaces and a recovery branch

### `stabilizer-css-codes-syndromes-and-procedures` — Stabilizer and CSS Codes, Syndromes, and Procedures (16 item(s))

- `def-qc-css-code-from-nested-binary-codes` · definition — CSS code from nested binary codes
- `lem-qc-binary-dual-dimension` · lemma — Dimension of the binary dual code
- `def-qc-stabilizer-code-space` · definition — Stabilizer code space
- `alg-qc-stabilizer-encoder-by-symplectic-elimination` · algorithm — Stabilizer encoder by symplectic elimination
- `def-qc-square-planar-surface-code` · definition — Square planar surface code
- `def-qc-stabilizer-syndrome-and-logical-operators` · definition — Stabilizer syndromes and logical Pauli operators
- `thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count` · theorem — Termination and gate count of symplectic stabilizer elimination
- `thm-qc-stabilizer-projector-and-dimension` · theorem — Stabilizer projector and code dimension
- `thm-qc-css-encoding-dimension-and-commutation` · theorem — CSS encoding dimension and commutation
- `thm-qc-stabilizer-encoder-correctness` · theorem — Stabilizer encoder correctness
- `thm-qc-stabilizer-logical-pauli-quotient-dimension` · theorem — Dimension of the logical Pauli quotient
- `def-qc-stabilizer-distance` · definition — Stabilizer distance
- `thm-qc-css-syndrome-correction` · theorem — CSS syndrome correction
- `thm-qc-square-planar-surface-code-distance-and-path-count` · theorem — Square planar surface-code distance and path count
- `thm-qc-stabilizer-distance-detection-and-correction` · theorem — Stabilizer distance detection and correction
- `ex-qc-steane-seven-qubit-css-code` · example — Steane seven-qubit CSS code

### `stabilizer-css-codes-syndromes-and-procedures-examples` — Stabilizer and CSS Codes, Syndromes, and Procedures — Examples (1 item(s))

- `ex-qc-css-nested-code-parameters` · example — CSS encoding from nested binary codes

### `noise-fault-tolerance-concatenation-and-thresholds` — Noise, Fault Tolerance, Concatenation, and Thresholds (26 item(s))

- `def-qc-local-stochastic-fault-set-law` · definition — Local-Stochastic Fault-Set Law
- `lem-qc-local-stochastic-fault-witness-bound` · lemma — Local-Stochastic Fault-Witness Bound
- `def-qc-code-deviation-and-spread` · definition — Code Deviation and Fault Spread
- `def-qc-finite-channel-location-schedule` · definition — Finite ordered channel-location schedules
- `def-qc-noise-channel-model` · definition — Independent Local Quantum Fault Model
- `lem-qc-noise-channel-model-composes-with-circuit-semantics` · lemma — The Local Noise Model Composes With Circuit Semantics
- `lem-qc-scalar-phase-completes-clifford-t-universality` · lemma — An explicit scalar phase completes Clifford+T to full unitary density
- `def-qc-fault-location-path-and-rectangle` · definition — Fault Locations, Paths, and Rectangles
- `lem-qc-t1-truncated-exrec-witness-reduction` · lemma — Distance-Three exRec Correctness and Truncated Witness Reduction
- `lem-qc-disjoint-fault-location-events-are-independent` · lemma — Disjoint Fault-Location Events Are Independent
- `thm-qc-t1-extended-rectangle-threshold` · theorem — Conditional Distance-Three Extended-Rectangle Threshold
- `lem-qc-concatenated-steane-distance-and-transversal-cliffords` · lemma — Twice-Concatenated Steane Code and Its Transversal Clifford Gates
- `lem-qc-planar-mw-recovery-failure-yields-half-error-path` · lemma — Minimum-Weight Recovery Failure Yields a Half-Error Crossing Path
- `lem-qc-encoded-error-instrument-and-cptp-distinction` · lemma — Encoded error instruments and full-space CPTP error maps
- `lem-qc-four-round-verified-shor-correction` · lemma — A Finite Four-Round Verified Shor Correction Circuit
- `thm-qc-planar-surface-code-iid-z-memory-bound` · theorem — Planar Surface-Code Memory Bound Under IID Z Noise
- `def-qc-ft-gadget-and-proper-code-contract` · definition — Fault-Tolerant Gadget and Proper-Code Contract
- `lem-qc-verified-steane-magic-state-and-injection` · lemma — Finite Verified Steane Magic States and T Injection
- `def-qc-level-r-good-and-bad-rectangles` · definition — Good and Bad Concatenated Rectangles
- `def-qc-local-stochastic-noise-model` · definition — Local-Stochastic Correlated Quantum Noise
- `lem-qc-verified-steane-initialization-and-readout` · lemma — Verified Steane Initialization and Protected Classical Readout
- `lem-qc-recursive-bad-rectangle-probability` · lemma — Recursive Bad-Rectangle Probability
- `lem-qc-sparse-fault-path-implies-code-deviation` · lemma — Sparse Fault Paths Preserve Correctable Code Deviation
- `thm-qc-explicit-proper-code-and-universal-gadgets` · theorem — An Explicit Proper Code and Universal Fault-Tolerant Gadgets
- `thm-qc-local-stochastic-concatenated-threshold` · theorem — Concatenated Threshold Under Local-Stochastic Correlated Noise
- `thm-qc-proper-code-concatenated-threshold` · theorem — Conditional Concatenated Threshold for Proper Codes

### `noise-fault-tolerance-concatenation-and-thresholds-examples` — Noise, Fault Tolerance, Concatenation, and Thresholds — Examples (1 item(s))

- `ex-qc-surface-memory-bound-hypotheses` · example — Surface-Code Memory Bound Under IID Z Noise

## Your seams

Your pages depend on another group's:

- `knill-laflamme-recovery-and-subsystem-codes` requires `channels-kraus-choi-and-stinespring-representations` (group n, batch 5)
- `knill-laflamme-recovery-and-subsystem-codes` requires `classical-and-quantum-error-correcting-codes` (group r, batch 18)
- `knill-laflamme-recovery-and-subsystem-codes` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `stabilizer-css-codes-syndromes-and-procedures` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `stabilizer-css-codes-syndromes-and-procedures` requires `classical-and-quantum-error-correcting-codes` (group r, batch 18)
- `stabilizer-css-codes-syndromes-and-procedures` requires `controlled-gates-phase-and-entanglement` (group o, batch 8)
- `stabilizer-css-codes-syndromes-and-procedures` requires `pauli-and-clifford-groups-binary-symplectic-tableaux` (group q, batch 15)
- `stabilizer-css-codes-syndromes-and-procedures` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `stabilizer-css-codes-syndromes-and-procedures` requires `registers-tensor-products-and-partial-trace` (group m, batch 2)
- `stabilizer-css-codes-syndromes-and-procedures` requires `stabilizer-circuits-and-gottesman-knill-simulation` (group r, batch 16)
- `noise-fault-tolerance-concatenation-and-thresholds` requires `channels-kraus-choi-and-stinespring-representations` (group n, batch 5)
- `noise-fault-tolerance-concatenation-and-thresholds` requires `circuit-syntax-denotational-semantics-and-measurement` (group o, batch 9)
- `noise-fault-tolerance-concatenation-and-thresholds` requires `classical-and-quantum-error-correcting-codes` (group r, batch 18)
- `noise-fault-tolerance-concatenation-and-thresholds` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (group o, batch 7)
- `noise-fault-tolerance-concatenation-and-thresholds` requires `trace-distance-fidelity-and-information-limits` (group n, batch 6)
- `noise-fault-tolerance-concatenation-and-thresholds` requires `approximate-universality-and-solovay-kitaev` (group p, batch 12)

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
