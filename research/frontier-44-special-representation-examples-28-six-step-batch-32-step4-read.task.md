# Step 4 batch reviewer — batch **32**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **32**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `constructible-incidence-and-cochain-models` | A | analytic-constructible-sheaf-foundations, compact-support-sheaf-calculus, relations-functions-and-quotients, sheaf-cohomology-cech-cohomology-and-comparison, sheaf-operations-exactness-ringed-spaces-and-module-pullback |
| 32 | `constructible-incidence-and-cochain-models-examples` | B | constructible-incidence-and-cochain-models |

## Your content, in full

### `constructible-incidence-and-cochain-models` — Constructible Incidence And Cochain Models

- `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model` · lemma — Finite simplicial constructible sheaves have an actual derived incidence model
- `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent` · lemma — Locally split Cech nerves give actual derived Cartesian sheaf descent
- `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions` · lemma — Derived tensor–Hom and inverse/direct image for field sheaves
- `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications` · lemma — Complex algebraic morphisms admit compatible finite smooth stratifications
- `lem-irreducible-complex-varieties-are-analytically-connected` · lemma — Irreducible complex varieties are analytically connected
- `lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs` · lemma — Complex algebraic boundary points admit normalized curve arcs

### `constructible-incidence-and-cochain-models-examples` — Constructible Incidence And Cochain Models Examples

- `ex-incidence-model-of-a-closed-interval` · example — Incidence cochains of a closed interval

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `constructible-incidence-and-cochain-models` requires `analytic-constructible-sheaf-foundations`
- `constructible-incidence-and-cochain-models` requires `compact-support-sheaf-calculus`
- `complex-algebraic-stratified-topology` requires `constructible-incidence-and-cochain-models`
- `analytic-derived-six-operations-and-duality` requires `constructible-incidence-and-cochain-models`
- `equivariant-constructible-perverse-foundations` requires `constructible-incidence-and-cochain-models`
- `proper-cohomological-descent-and-constructible-hypercovers` requires `constructible-incidence-and-cochain-models`
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
