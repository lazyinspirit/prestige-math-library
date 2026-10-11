# Step 4 batch reviewer — batch **41**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **41**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["41"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 41 | `proper-cohomological-descent-and-constructible-hypercovers` | A | algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations, analytic-derived-six-operations-and-duality, constructible-incidence-and-cochain-models, double-complexes-exact-couples-and-convergence, equivariant-constructible-perverse-foundations, relations-functions-and-quotients, spectral-sequences |
| 41 | `proper-cohomological-descent-and-constructible-hypercovers-examples` | B | proper-cohomological-descent-and-constructible-hypercovers, relative-homology-excision-and-mayer-vietoris, singular-cohomology-and-coefficient-theorems |

## Your content, in full

### `proper-cohomological-descent-and-constructible-hypercovers` — Proper Cohomological Descent And Constructible Hypercovers

- `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization` · lemma — Bicosimplicial total complexes agree with diagonal totalization
- `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves` · lemma — Proper surjections have cohomological descent for constructible field sheaves
- `thm-proper-hypercovers-compute-constructible-derived-cohomology` · theorem — Proper hypercovers compute constructible derived cohomology

### `proper-cohomological-descent-and-constructible-hypercovers-examples` — Proper Cohomological Descent And Constructible Hypercovers Examples

- `ex-proper-cech-descent-does-not-require-acyclic-fibers` · example — Proper Cech descent does not require acyclic fibers
- `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation` · example — Hypercover total degree uses only a finite matching truncation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `proper-cohomological-descent-and-constructible-hypercovers` requires `analytic-derived-six-operations-and-duality`
- `proper-cohomological-descent-and-constructible-hypercovers` requires `constructible-incidence-and-cochain-models`
- `proper-cohomological-descent-and-constructible-hypercovers` requires `equivariant-constructible-perverse-foundations`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `proper-cohomological-descent-and-constructible-hypercovers`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples` requires `proper-cohomological-descent-and-constructible-hypercovers`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
