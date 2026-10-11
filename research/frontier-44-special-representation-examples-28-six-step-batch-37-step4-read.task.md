# Step 4 batch reviewer — batch **37**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **37**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["37"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 37 | `equivariant-constructible-perverse-foundations` | A | analytic-constructible-sheaf-foundations, analytic-derived-six-operations-and-duality, complex-algebraic-stratified-topology, constructible-incidence-and-cochain-models, derived-categories, inner-product-spaces-and-orthogonality, relations-functions-and-quotients, sheaf-operations-exactness-ringed-spaces-and-module-pullback, the-serre-spectral-sequence-and-applications, topological-vector-bundles-and-grassmannian-classification, algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations |
| 37 | `equivariant-constructible-perverse-foundations-examples` | B | equivariant-constructible-perverse-foundations, local-coefficients-twisted-homology-and-duality, divisors-riemann-roch-and-duality |

## Your content, in full

### `equivariant-constructible-perverse-foundations` — Equivariant Constructible Perverse Foundations

- `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties` · definition — Equivariant constructible derived category of complex varieties
- `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences` · lemma — Acyclic product fibers stabilize bounded constructible pullback Hom
- `lem-general-linear-stiefel-frame-spaces-have-the-cohomology-gap` · lemma — General linear frame spaces have the Stiefel cohomology gap
- `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom` · lemma — General linear Stiefel approximations stabilize bounded constructible Hom
- `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom` · lemma — Cartesian simplicial sheaves model actual equivariant derived Hom
- `thm-constructible-six-functors-proper-base-change-and-verdier-duality` · theorem — Constructible six functors, proper base change and normalized equivariant duality
- `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative` · lemma — General linear Stiefel perverse normalization is exact and conservative
- `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` · theorem — Middle perverse t structure glues and has simple intersection complexes
- `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars` · theorem — Equivariant constructible Ext is degreewise finite and compatible with characteristic zero scalars

### `equivariant-constructible-perverse-foundations-examples` — Equivariant Constructible Perverse Foundations Examples

- `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite` · example — Equivariant Ext of a point is degreewise finite and not total finite

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `equivariant-constructible-perverse-foundations` requires `analytic-constructible-sheaf-foundations`
- `equivariant-constructible-perverse-foundations` requires `analytic-derived-six-operations-and-duality`
- `equivariant-constructible-perverse-foundations` requires `complex-algebraic-stratified-topology`
- `equivariant-constructible-perverse-foundations` requires `constructible-incidence-and-cochain-models`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `equivariant-constructible-perverse-foundations`
- `quiver-full-flag-projective-semisimplicity` requires `equivariant-constructible-perverse-foundations`
- `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` requires `equivariant-constructible-perverse-foundations`
- `proper-cohomological-descent-and-constructible-hypercovers` requires `equivariant-constructible-perverse-foundations`
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
