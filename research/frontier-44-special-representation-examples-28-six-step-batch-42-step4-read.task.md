# Step 4 batch reviewer — batch **42**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **42**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["42"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 42 | `proper-hyperresolutions-and-mixed-hodge-restriction-images` | A | analytic-constructible-sheaf-foundations, cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, compact-kahler-hodge-foundations, complex-algebraic-stratified-topology, countability-and-uncountability, cup-cap-cross-products-and-cohomology-rings, fibre-products-base-change-and-scheme-theoretic-fibres, higher-dimensional-resolution-of-singularities, logarithmic-hodge-complexes-and-smooth-open-weights, mixed-hodge-structures-and-strictness, orientations-poincare-lefschetz-and-alexander-duality, projective-hodge-polarization-foundations, proper-cohomological-descent-and-constructible-hypercovers, relations-functions-and-quotients, residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem, singular-cohomology-and-coefficient-theorems |
| 42 | `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples` | B | mixed-hodge-structures-and-strictness, proper-cohomological-descent-and-constructible-hypercovers, proper-hyperresolutions-and-mixed-hodge-restriction-images, relative-homology-excision-and-mayer-vietoris, singular-cohomology-and-coefficient-theorems |

## Your content, in full

### `proper-hyperresolutions-and-mixed-hodge-restriction-images` — Proper Hyperresolutions And Mixed Hodge Restriction Images

- `def-split-augmented-simplicial-objects-and-matching-objects` · definition — Split augmented simplicial schemes and matching objects
- `lem-blowups-of-projective-schemes-are-projective` · lemma — Blowups of integral projective complex schemes are projective
- `thm-proper-varieties-admit-smooth-projective-hyperresolutions` · theorem — Smooth projective proper hyperresolutions
- `def-borel-moore-homology` · definition — Borel-Moore homology by locally finite chains
- `lem-borel-moore-homology-of-compact-spaces` · lemma — Borel-Moore and ordinary homology agree for compact spaces
- `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree` · theorem — Proper cohomology and functorial mixed Hodge weights
- `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images` · theorem — Weights control restriction images into proper varieties

### `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples` — Proper Hyperresolutions And Mixed Hodge Restriction Images Examples

- `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class` · example — A proper singular curve with weight-zero cohomology

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `analytic-constructible-sheaf-foundations`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `compact-kahler-hodge-foundations`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `complex-algebraic-stratified-topology`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `countability-and-uncountability`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `logarithmic-hodge-complexes-and-smooth-open-weights`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `mixed-hodge-structures-and-strictness`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `projective-hodge-polarization-foundations`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `proper-cohomological-descent-and-constructible-hypercovers`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples` requires `mixed-hodge-structures-and-strictness`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images-examples` requires `proper-cohomological-descent-and-constructible-hypercovers`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `proper-hyperresolutions-and-mixed-hodge-restriction-images`
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
