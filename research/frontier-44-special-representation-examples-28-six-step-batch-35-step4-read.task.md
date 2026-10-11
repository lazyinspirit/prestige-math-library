# Step 4 batch reviewer — batch **35**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **35**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `logarithmic-hodge-complexes-and-smooth-open-weights` | A | analytic-constructible-sheaf-foundations, chow-groups-intersection-products-and-grothendieck-riemann-roch, compact-kahler-hodge-foundations, cup-cap-cross-products-and-cohomology-rings, higher-dimensional-resolution-of-singularities, mixed-hodge-structures-and-strictness, orientations-poincare-lefschetz-and-alexander-duality, projective-hodge-polarization-foundations, relations-functions-and-quotients, relative-homology-excision-and-mayer-vietoris, singular-cohomology-and-coefficient-theorems |
| 35 | `logarithmic-hodge-complexes-and-smooth-open-weights-examples` | B | logarithmic-hodge-complexes-and-smooth-open-weights, relative-homology-excision-and-mayer-vietoris, singular-cohomology-and-coefficient-theorems |

## Your content, in full

### `logarithmic-hodge-complexes-and-smooth-open-weights` — Logarithmic Hodge Complexes And Smooth Open Weights

- `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` · lemma — SNC projective compactifications of smooth quasiprojective varieties
- `lem-smooth-projective-modification-preserves-open-cohomology-images` · lemma — Modification preserves open cohomology images
- `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` · theorem — Logarithmic construction of smooth-open mixed Hodge structures

### `logarithmic-hodge-complexes-and-smooth-open-weights-examples` — Logarithmic Hodge Complexes And Smooth Open Weights Examples

- `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two` · example — The punctured line has a weight-two logarithmic class

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `logarithmic-hodge-complexes-and-smooth-open-weights` requires `analytic-constructible-sheaf-foundations`
- `logarithmic-hodge-complexes-and-smooth-open-weights` requires `compact-kahler-hodge-foundations`
- `logarithmic-hodge-complexes-and-smooth-open-weights` requires `mixed-hodge-structures-and-strictness`
- `logarithmic-hodge-complexes-and-smooth-open-weights` requires `projective-hodge-polarization-foundations`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `logarithmic-hodge-complexes-and-smooth-open-weights`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `logarithmic-hodge-complexes-and-smooth-open-weights`
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
