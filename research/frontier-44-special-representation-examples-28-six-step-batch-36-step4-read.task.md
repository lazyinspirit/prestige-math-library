# Step 4 batch reviewer — batch **36**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **36**. Step-5 owning group: **e**.
Return `group: "e"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `analytic-derived-six-operations-and-duality` | A | analytic-constructible-sheaf-foundations, cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, compact-support-sheaf-calculus, complex-algebraic-stratified-topology, constructible-incidence-and-cochain-models, derived-categories, relations-functions-and-quotients, sheaf-cohomology-cech-cohomology-and-comparison, sheaf-operations-exactness-ringed-spaces-and-module-pullback |
| 36 | `analytic-derived-six-operations-and-duality-examples` | B | analytic-derived-six-operations-and-duality |

## Your content, in full

### `analytic-derived-six-operations-and-duality` — Analytic Derived Six Operations And Duality

- `def-proper-continuous-map` · definition — Proper continuous maps of topological spaces
- `lem-proper-continuous-map-stability` · lemma — Basic stability of proper continuous maps
- `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces` · definition — Derived operations on analytic field sheaves
- `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint` · theorem — Exceptional inverse image as the adjoint of derived proper-support image
- `lem-analytic-six-operation-support-and-trace-calculus` · lemma — Support localization, base change, projection and trace calculus
- `thm-verdier-duality-on-oriented-stratified-complex-varieties` · theorem — Constructible Verdier duality and complex orientation
- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace` · theorem — Coherent six operations on analytic constructible field sheaves
- `lem-analytic-constructible-sheaves-admit-coherent-six-operations` · lemma — Actual analytic constructible sheaves admit coherent six operations
- `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` · theorem — Ordinary middle perverse t structure, recollement and intersection complexes
- `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure` · lemma — Shifted smooth complex pullback is exact for the middle perverse t structure

### `analytic-derived-six-operations-and-duality-examples` — Analytic Derived Six Operations And Duality Examples

- `ex-dualizing-and-closed-support-shifts-on-the-complex-line` · example — Dualizing and support shifts on the complex line

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `analytic-derived-six-operations-and-duality` requires `analytic-constructible-sheaf-foundations`
- `analytic-derived-six-operations-and-duality` requires `compact-support-sheaf-calculus`
- `analytic-derived-six-operations-and-duality` requires `complex-algebraic-stratified-topology`
- `analytic-derived-six-operations-and-duality` requires `constructible-incidence-and-cochain-models`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `analytic-derived-six-operations-and-duality`
- `affine-perverse-vanishing-and-universal-hyperplanes` requires `analytic-derived-six-operations-and-duality`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `analytic-derived-six-operations-and-duality`
- `equivariant-constructible-perverse-foundations` requires `analytic-derived-six-operations-and-duality`
- `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` requires `analytic-derived-six-operations-and-duality`
- `proper-cohomological-descent-and-constructible-hypercovers` requires `analytic-derived-six-operations-and-duality`
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
