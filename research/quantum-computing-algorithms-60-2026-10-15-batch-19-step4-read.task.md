# Step 4 batch reviewer — batch **19**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **19**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `knill-laflamme-recovery-and-subsystem-codes` | A | channels-kraus-choi-and-stinespring-representations, classical-and-quantum-error-correcting-codes, inner-product-spaces-and-orthogonality, registers-tensor-products-and-partial-trace, the-spectral-theorem-and-singular-value-decomposition |
| 19 | `knill-laflamme-recovery-and-subsystem-codes-examples` | B | knill-laflamme-recovery-and-subsystem-codes |

## Your content, in full

### `knill-laflamme-recovery-and-subsystem-codes` — Knill–Laflamme Recovery and Subsystem Codes

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

### `knill-laflamme-recovery-and-subsystem-codes-examples` — Knill–Laflamme Recovery and Subsystem Codes — Examples

- `ex-qc-knill-laflamme-orthogonal-error-recovery` · example — Orthogonal error spaces and a recovery branch

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `knill-laflamme-recovery-and-subsystem-codes` requires `channels-kraus-choi-and-stinespring-representations`
- `knill-laflamme-recovery-and-subsystem-codes` requires `classical-and-quantum-error-correcting-codes`
- `knill-laflamme-recovery-and-subsystem-codes` requires `registers-tensor-products-and-partial-trace`
- `stabilizer-css-codes-syndromes-and-procedures` requires `knill-laflamme-recovery-and-subsystem-codes`
- `noise-fault-tolerance-concatenation-and-thresholds` requires `knill-laflamme-recovery-and-subsystem-codes`
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
