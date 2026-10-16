# Step 4 batch reviewer — batch **20**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **20**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `stabilizer-css-codes-syndromes-and-procedures` | A | circuit-syntax-denotational-semantics-and-measurement, classical-and-quantum-error-correcting-codes, controlled-gates-phase-and-entanglement, inner-product-spaces-and-orthogonality, knill-laflamme-recovery-and-subsystem-codes, linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, pauli-and-clifford-groups-binary-symplectic-tableaux, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, registers-tensor-products-and-partial-trace, stabilizer-circuits-and-gottesman-knill-simulation |
| 20 | `stabilizer-css-codes-syndromes-and-procedures-examples` | B | stabilizer-css-codes-syndromes-and-procedures |

## Your content, in full

### `stabilizer-css-codes-syndromes-and-procedures` — Stabilizer and CSS Codes, Syndromes, and Procedures

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

### `stabilizer-css-codes-syndromes-and-procedures-examples` — Stabilizer and CSS Codes, Syndromes, and Procedures — Examples

- `ex-qc-css-nested-code-parameters` · example — CSS encoding from nested binary codes

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `stabilizer-css-codes-syndromes-and-procedures` requires `circuit-syntax-denotational-semantics-and-measurement`
- `stabilizer-css-codes-syndromes-and-procedures` requires `classical-and-quantum-error-correcting-codes`
- `stabilizer-css-codes-syndromes-and-procedures` requires `controlled-gates-phase-and-entanglement`
- `stabilizer-css-codes-syndromes-and-procedures` requires `knill-laflamme-recovery-and-subsystem-codes`
- `stabilizer-css-codes-syndromes-and-procedures` requires `pauli-and-clifford-groups-binary-symplectic-tableaux`
- `stabilizer-css-codes-syndromes-and-procedures` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `stabilizer-css-codes-syndromes-and-procedures` requires `registers-tensor-products-and-partial-trace`
- `stabilizer-css-codes-syndromes-and-procedures` requires `stabilizer-circuits-and-gottesman-knill-simulation`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `stabilizer-css-codes-syndromes-and-procedures`
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
