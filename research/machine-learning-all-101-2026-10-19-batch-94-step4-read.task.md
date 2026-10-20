# Step 4 batch reviewer — batch **94**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **94**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["94"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 94 | `exact-tiled-attention-and-memory-aware-differentiation` | A | attention-and-transformer-expressivity, automatic-differentiation-and-backpropagation, automatic-differentiation-and-computational-graphs |
| 94 | `exact-tiled-attention-and-memory-aware-differentiation-examples` | B | exact-tiled-attention-and-memory-aware-differentiation |

## Your content, in full

### `exact-tiled-attention-and-memory-aware-differentiation` — Exact tiled attention and memory-aware differentiation

- `def-attention-block-summary` · definition — Stable summary of an attention key block
- `alg-exact-tiled-softmax-attention` · algorithm — Exact tiled softmax attention with block-recomputed vector-Jacobian products
- `thm-tiled-attention-exactness` · theorem — Tiled attention and its recomputed reverse pass are exact
- `thm-tiled-attention-workspace-and-work` · theorem — Tiled attention uses linear retained memory and quadratic arithmetic
- `rem-attention-io-model-and-roundoff` · remark — The scalar workspace result is not a hardware I/O bound

### `exact-tiled-attention-and-memory-aware-differentiation-examples` — Exact tiled attention and memory-aware differentiation — Examples

- `ex-tiled-attention-one-key` · example — One-key tiled attention
- `ex-tiled-attention-empty-first-masked-block` · example — An empty first masked key block
- `ex-tiled-attention-two-merge-orders` · example — Two merge orders give the same attention summary
- `ex-tiled-attention-replay-dropout-mask` · example — A different dropout mask changes the reverse result

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `exact-tiled-attention-and-memory-aware-differentiation` requires `attention-and-transformer-expressivity`
- `exact-tiled-attention-and-memory-aware-differentiation` requires `automatic-differentiation-and-backpropagation`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
