# Step 4 batch reviewer — batch **17**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **17**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["17"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 17 | `bell-states-teleportation-and-dense-coding` | A | circuit-syntax-denotational-semantics-and-measurement, controlled-gates-phase-and-entanglement, measurements-povms-and-instruments, qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates, registers-tensor-products-and-partial-trace |
| 17 | `bell-states-teleportation-and-dense-coding-examples` | B | bell-states-teleportation-and-dense-coding |

## Your content, in full

### `bell-states-teleportation-and-dense-coding` — Bell States, Teleportation, and Dense Coding

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

### `bell-states-teleportation-and-dense-coding-examples` — Bell States, Teleportation, and Dense Coding — Examples

- `ex-qc-teleportation-branch-correction` · example — Teleportation branch and Pauli correction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `bell-states-teleportation-and-dense-coding` requires `circuit-syntax-denotational-semantics-and-measurement`
- `bell-states-teleportation-and-dense-coding` requires `controlled-gates-phase-and-entanglement`
- `bell-states-teleportation-and-dense-coding` requires `measurements-povms-and-instruments`
- `bell-states-teleportation-and-dense-coding` requires `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`
- `bell-states-teleportation-and-dense-coding` requires `registers-tensor-products-and-partial-trace`
- `graph-states-and-measurement-based-computation` requires `bell-states-teleportation-and-dense-coding`
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
