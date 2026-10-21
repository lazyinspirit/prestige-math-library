# Step 4 batch reviewer — batch **63**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **63**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["63"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 63 | `fox-colorings-and-quandle-invariants` | A | wirtinger-presentations-and-knot-groups, crossing-signs-writhe-and-linking-number |
| 63 | `fox-colorings-and-quandle-invariants-examples` | B | fox-colorings-and-quandle-invariants |

## Your content, in full

### `fox-colorings-and-quandle-invariants` — Fox colorings and quandle invariants

- `def-quandle-and-knot-coloring` · definition — Quandles and knot-diagram colorings
- `lem-dihedral-operation-is-a-quandle` · lemma — The dihedral operation is a quandle
- `thm-quandle-colorings-are-reidemeister-invariant` · theorem — Quandle colorings are invariant under oriented Reidemeister moves
- `def-rack-fundamental-quandle-and-adjoint-group` · definition — Racks, diagram fundamental quandles, and adjoint groups
- `alg-dihedral-fox-colorings` · algorithm — Compute dihedral Fox colorings by row reduction
- `lem-rack-kink-map-is-bijective` · lemma — The rack kink map is bijective
- `alg-finite-rack-quandle-coloring-from-table` · algorithm — Check a finite rack table and enumerate diagram colorings
- `thm-dihedral-fox-colorings-terminate-and-are-correct` · theorem — The Fox-coloring algorithm terminates and returns all colorings
- `thm-finite-table-coloring-termination-and-correctness` · theorem — The finite-table coloring algorithm terminates and is correct
- `thm-fundamental-quandle-and-adjoint-group-from-wirtinger` · theorem — Diagram fundamental quandles and adjoint groups from Wirtinger data
- `thm-rack-colorings-are-framed-invariants` · theorem — Rack colorings are framed Reidemeister invariants

### `fox-colorings-and-quandle-invariants-examples` — Fox colorings and quandle invariants — Examples and Counterexamples

- `ex-knot-kt-08-worked-cases` · example — Trefoil and unknot Fox-coloring counts
- `cex-knot-kt-08-boundary-case` · counterexample — One Fox coloring prime does not classify knots

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `fox-colorings-and-quandle-invariants` requires `wirtinger-presentations-and-knot-groups`
- `fox-colorings-and-quandle-invariants` requires `crossing-signs-writhe-and-linking-number`
- `terminating-computations-for-classical-knot-invariants` requires `fox-colorings-and-quandle-invariants`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
