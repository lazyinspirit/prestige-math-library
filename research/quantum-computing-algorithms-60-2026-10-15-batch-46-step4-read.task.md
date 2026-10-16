# Step 4 batch reviewer — batch **46**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **46**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["46"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 46 | `block-encodings` | A | uniform-circuit-families-promise-problems-and-complexity, state-preparation-isometry-synthesis-and-limits, hilbert-space-geometry-and-riesz-representation, the-spectral-theorem-and-singular-value-decomposition, registers-tensor-products-and-partial-trace, circuit-syntax-denotational-semantics-and-measurement, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, controlled-gates-phase-and-entanglement, reversible-computation-ancillas-and-coherent-oracles |
| 46 | `block-encodings-examples` | B | block-encodings |

## Your content, in full

### `block-encodings` — Block Encodings

- `def-qa-22-block-encoding` · definition — Finite block encoding
- `lem-qa-22-block-compression-contraction` · lemma — A projected unitary block is a contraction
- `def-qa-22-block-encoding-access-model` · definition — Block-encoding oracle and implementation cost model
- `alg-qa-22-product-block-encoding` · algorithm — Product block encoding with separate ancillas
- `thm-qa-22-adjoint-block-encoding` · theorem — Adjoint block encoding from inverse access
- `thm-qa-22-product-block-encoding-correctness` · theorem — Product block-encoding error bound
- `thm-qa-22-long-product-error-recurrence` · theorem — Error recurrence for a chain of block-encoded products
- `alg-qa-22-lcu-block-encoding` · algorithm — LCU block-encoding construction
- `thm-qa-22-lcu-block-encoding-correctness` · theorem — LCU projected-block correctness
- `thm-qa-22-block-encoding-error-and-query-cost` · theorem — Block-encoding normalization, error, and cost accounting

### `block-encodings-examples` — Block Encodings — Examples

- `ex-qa-22-product-error` · example — Product block error in a two-factor instance
- `ex-qa-22-two-term-lcu` · example — Two-term LCU normalization and access count

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `block-encodings` requires `uniform-circuit-families-promise-problems-and-complexity`
- `block-encodings` requires `state-preparation-isometry-synthesis-and-limits`
- `block-encodings` requires `registers-tensor-products-and-partial-trace`
- `block-encodings` requires `circuit-syntax-denotational-semantics-and-measurement`
- `block-encodings` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `block-encodings` requires `controlled-gates-phase-and-entanglement`
- `block-encodings` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-singular-value-transformation` requires `block-encodings`
- `qubitization-and-optimal-hamiltonian-simulation` requires `block-encodings`
- `block-encoding-linear-systems-and-variable-time-amplification` requires `block-encodings`
- `quantum-spectral-estimation-and-matrix-functions` requires `block-encodings`
- `quantum-optimization-sdp-and-variational-algorithms` requires `block-encodings`
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
