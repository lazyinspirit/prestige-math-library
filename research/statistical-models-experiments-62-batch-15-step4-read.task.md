# Step 4 batch reviewer — batch **15**, run `statistical-models-experiments-62`

You are the only reviewer for batch **15**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["15"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 15 | `fractional-factorial-aliasing-and-foldover` | A | full-factorial-contrasts-and-interactions, inner-product-spaces-and-orthogonality |
| 15 | `fractional-factorial-aliasing-and-foldover-examples` | B | fractional-factorial-aliasing-and-foldover |

## Your content, in full

### `fractional-factorial-aliasing-and-foldover` — Fractional factorial aliases and foldover

- `def-regular-fractional-factorial-defining-relation-and-resolution` · definition — Regular two-level fractions, signed defining relations, and resolution
- `thm-regular-fractional-factorial-aliasing-criterion` · theorem — The defining subgroup gives the exact alias relations
- `thm-factorial-column-aliases-prevent-separate-identification` · theorem — Aliased factorial columns prevent separate coefficient identification
- `thm-factorial-foldover-separates-opposite-parity-aliases` · theorem — Full and partial foldovers separate aliases by parity

### `fractional-factorial-aliasing-and-foldover-examples` — Fractional factorial aliases and foldover — Examples

- `ex-two-three-minus-one-alias-class` · example — The alias classes in a $2^{3-1}$ fraction
- `ex-resolution-three-foldover-and-targeted-followup` · example — Full and targeted foldovers of a resolution III fraction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `fractional-factorial-aliasing-and-foldover` requires `full-factorial-contrasts-and-interactions`
- `response-surfaces-and-optimal-design` requires `fractional-factorial-aliasing-and-foldover`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
