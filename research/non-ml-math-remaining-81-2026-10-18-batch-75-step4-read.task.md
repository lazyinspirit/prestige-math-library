# Step 4 batch reviewer — batch **75**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **75**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["75"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 75 | `gauge-groups-and-representation-theory-interfaces` | A | algebraic-representation-and-tensor-symmetry-map, real-forms-and-real-semisimple-lie-algebras |
| 75 | `gauge-groups-and-representation-theory-interfaces-examples` | B | gauge-groups-and-representation-theory-interfaces |

## Your content, in full

### `gauge-groups-and-representation-theory-interfaces` — Gauge Groups and Representation-Theoretic Interfaces

- `def-smooth-principal-g-bundle` · definition — Smooth principal $G$-bundle
- `def-principal-connection-and-vertical-curvature` · definition — Principal connections and vertical curvature
- `def-gauge-group-of-a-smooth-principal-bundle` · definition — Gauge group of a smooth principal bundle
- `prop-gauge-transformations-act-on-principal-connections` · proposition — Gauge transformations act on principal connections and carry curvature
- `prop-gauge-transformations-induce-associated-bundle-automorphisms` · proposition — Gauge transformations induce associated bundle automorphisms

### `gauge-groups-and-representation-theory-interfaces-examples` — Gauge Groups and Representation-Theoretic Interfaces: Examples and Counterexamples

- `ex-gauge-group-and-curvature-of-a-trivial-real-principal-bundle` · example — Gauge action on a trivial real principal bundle and associated line

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gauge-groups-and-representation-theory-interfaces` requires `algebraic-representation-and-tensor-symmetry-map`
- `unitary-poincare-representations-and-little-groups` requires `gauge-groups-and-representation-theory-interfaces`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
