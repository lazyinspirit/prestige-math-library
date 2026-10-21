# Step 4 batch reviewer — batch **103**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **103**. Step-5 owning group: **ai**.
Return `group: "ai"` and `batches: ["103"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 103 | `terminating-computations-for-classical-knot-invariants` | A | fox-colorings-and-quandle-invariants, kauffman-bracket-state-sum-and-jones-polynomial, planar-diagram-codes-and-knot-table-enumeration |
| 103 | `terminating-computations-for-classical-knot-invariants-examples` | B | terminating-computations-for-classical-knot-invariants |

## Your content, in full

### `terminating-computations-for-classical-knot-invariants` — Terminating computations for classical knot invariants

- `def-encoded-diagram-size-and-exact-output` · definition — Encoded diagram size and exact output
- `lem-dihedral-fox-coloring-count-is-reidemeister-invariant` · lemma — Dihedral Fox coloring counts are preserved by Reidemeister moves
- `thm-exact-bracket-output-bit-growth-bound` · theorem — Exact bracket output bit-growth bound
- `thm-knot-linking-number-and-fox-coloring-finite-complexity` · theorem — Linking number and Fox coloring finite complexity
- `thm-bracket-state-sum-exponential-bound` · theorem — Bracket state-sum exponential bound
- `alg-reidemeister-move-neighbors-from-code` · algorithm — Enumerate Reidemeister move neighbors from a knot code
- `alg-breadth-first-reidemeister-search` · algorithm — Breadth-first Reidemeister search
- `thm-reidemeister-enumeration-is-only-a-semidecision` · theorem — Reidemeister enumeration is only a semidecision

### `terminating-computations-for-classical-knot-invariants-examples` — Terminating computations for classical knot invariants — Examples and Counterexamples

- `ex-knot-kt-48-worked-cases` · example — Eight-crossing state count and trefoil Fox 3-colorings
- `cex-knot-kt-48-boundary-case` · counterexample — A finite failed move search is not a negative certificate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `terminating-computations-for-classical-knot-invariants` requires `fox-colorings-and-quandle-invariants`
- `terminating-computations-for-classical-knot-invariants` requires `kauffman-bracket-state-sum-and-jones-polynomial`
- `terminating-computations-for-classical-knot-invariants` requires `planar-diagram-codes-and-knot-table-enumeration`
- `ribbon-knots-and-slice-ribbon-problem` requires `terminating-computations-for-classical-knot-invariants`
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
