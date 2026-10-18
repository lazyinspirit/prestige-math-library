# Step 4 batch reviewer — batch **54**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **54**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["54"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 54 | `motivic-hall-algebras-and-integration` | A | finitary-ringel-hall-algebras, derived-hall-algebras, cohomological-hall-algebras-and-quiver-correspondences |
| 54 | `motivic-hall-algebras-and-integration-examples` | B | motivic-hall-algebras-and-integration |

## Your content, in full

### `motivic-hall-algebras-and-integration` — Motivic Hall Algebras and Integration Maps

- `def-motivic-stack-function-groups-for-quiver-representations` · definition — Relative motivic stack-function groups for quiver representation stacks
- `rem-derived-and-cohomological-hall-are-distinct` · remark — Derived and cohomological Hall algebras are distinct constructions
- `def-motivic-hall-algebra-of-a-finite-quiver` · definition — The motivic Hall algebra of a finite quiver
- `def-finite-field-stack-groupoid-cardinality` · definition — Finite-field groupoid cardinality for quiver stack specializations
- `lem-quiver-motivic-extension-stack-class` · lemma — The motive of a quiver extension stack
- `thm-quiver-motivic-hall-convolution-associative` · theorem — Quiver motivic Hall convolution is associative and unital
- `def-quiver-motivic-quantum-torus` · definition — The Euler-twisted dimension-vector algebra of a quiver
- `lem-finite-field-stack-groupoid-cardinality-respects-motivic-relations` · lemma — Finite-field groupoid cardinality respects the motivic stack relations
- `rem-motivic-versus-untwisted-finitary-hall` · remark — Motivic stack Hall and untwisted finitary Hall have different carriers
- `thm-quiver-motivic-integration-is-multiplicative` · theorem — Quiver stack integration is multiplicative with the Euler twist

### `motivic-hall-algebras-and-integration-examples` — Motivic Hall Algebras and Integration Maps: Examples and Counterexamples

- `ex-zero-arrow-quiver-motivic-hall-product` · example — The motivic Hall product for a one-vertex zero-arrow quiver
- `cex-untwisted-motivic-integration-fails-for-one-arrow-quiver` · counterexample — An untwisted monoid map fails for the one-arrow quiver

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `motivic-hall-algebras-and-integration` requires `finitary-ringel-hall-algebras`
- `motivic-hall-algebras-and-integration` requires `derived-hall-algebras`
- `motivic-hall-algebras-and-integration` requires `cohomological-hall-algebras-and-quiver-correspondences`
- `hall-stability-dt-bps-and-wall-crossing` requires `motivic-hall-algebras-and-integration`
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
