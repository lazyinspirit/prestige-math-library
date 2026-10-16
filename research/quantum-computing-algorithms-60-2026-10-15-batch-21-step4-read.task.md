# Step 4 batch reviewer — batch **21**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **21**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["21"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 21 | `noise-fault-tolerance-concatenation-and-thresholds` | A | channels-kraus-choi-and-stinespring-representations, circuit-syntax-denotational-semantics-and-measurement, classical-and-quantum-error-correcting-codes, finite-probability-spaces-and-random-variables, independence-borel-cantelli-and-zero-one-laws, knill-laflamme-recovery-and-subsystem-codes, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, stabilizer-css-codes-syndromes-and-procedures, trace-distance-fidelity-and-information-limits, approximate-universality-and-solovay-kitaev |
| 21 | `noise-fault-tolerance-concatenation-and-thresholds-examples` | B | noise-fault-tolerance-concatenation-and-thresholds |

## Your content, in full

### `noise-fault-tolerance-concatenation-and-thresholds` — Noise, Fault Tolerance, Concatenation, and Thresholds

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

### `noise-fault-tolerance-concatenation-and-thresholds-examples` — Noise, Fault Tolerance, Concatenation, and Thresholds — Examples

- `ex-qc-surface-memory-bound-hypotheses` · example — Surface-Code Memory Bound Under IID Z Noise

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `noise-fault-tolerance-concatenation-and-thresholds` requires `channels-kraus-choi-and-stinespring-representations`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `circuit-syntax-denotational-semantics-and-measurement`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `classical-and-quantum-error-correcting-codes`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `knill-laflamme-recovery-and-subsystem-codes`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `stabilizer-css-codes-syndromes-and-procedures`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `trace-distance-fidelity-and-information-limits`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `approximate-universality-and-solovay-kitaev`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
