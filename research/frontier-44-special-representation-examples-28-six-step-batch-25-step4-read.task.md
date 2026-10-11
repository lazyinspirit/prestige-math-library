# Step 4 batch reviewer — batch **25**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **25**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["25"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 25 | `relative-smooth-triangulation-and-bundle-fitting` | A | compactness-in-metric-spaces, euclidean-ordinary-differential-equations-with-smooth-dependence, homology-axioms-degree-and-classical-applications, picard-lindelof-and-first-order-odes, relations-functions-and-quotients, rn-as-a-normed-space, simplicial-complexes-and-simplicial-homology, simplicial-subdivision-and-simplicial-approximation, the-total-derivative |
| 25 | `relative-smooth-triangulation-and-bundle-fitting-examples` | B | relative-smooth-triangulation-and-bundle-fitting |

## Your content, in full

### `relative-smooth-triangulation-and-bundle-fitting` — Relative Smooth Triangulation And Bundle Fitting

- `def-relative-smooth-triangulation-and-projection-preserving-fitting` · definition — Relative smooth triangulations, strong approximation and bundle fitting
- `lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation` · lemma — Whole-star smooth embeddings are stable under strong piecewise $C^1$ approximation
- `lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps` · lemma — Shape-controlled secants and relative piecewise smooth extension
- `lem-corner-adapted-strong-approximations-remain-in-the-same-orthant` · lemma — Corner-adapted strong approximations preserve orthant sides
- `lem-relative-smooth-triangulations-can-be-fitted-while-preserving-a-bundle-projection` · lemma — Finite smooth fitting with exact bundle projection and protected regions
- `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations` · theorem — Finite smooth triangulation of compact corners, relative to admissible boundary data
- `thm-smooth-bundles-admit-relative-finite-triangulations-over-a-fixed-base-triangulation` · theorem — Finite smooth bundle triangulation over a fixed base, relative to a supplied collar diagram

### `relative-smooth-triangulation-and-bundle-fitting-examples` — Relative Smooth Triangulation And Bundle Fitting Examples

- `ex-a-trivial-smooth-bundle-has-a-projection-preserving-product-triangulation` · example — Projection-preserving product triangulation of a trivial smooth bundle

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `complex-algebraic-stratified-topology` requires `relative-smooth-triangulation-and-bundle-fitting`
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
