# Step 4 batch reviewer — batch **40**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **40**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["40"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 40 | `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` | A | analytic-derived-six-operations-and-duality, chern-and-pontryagin-classes-by-splitting-and-complexification, equivariant-constructible-perverse-foundations, relations-functions-and-quotients, unipotent-solvable-groups-and-borel-fixed-points |
| 40 | `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples` | B | equivariant-borel-moore-correspondence-convolution-and-constructible-ext |

## Your content, in full

### `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` — Equivariant Borel Moore Correspondence Convolution And Constructible Ext

- `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports` · lemma — Complex-oriented diagonal Thom classes realize exceptional exchange on supports
- `def-equivariant-borel-moore-homology-and-correspondence-convolution` · definition — Equivariant Borel–Moore homology and oriented correspondence convolution
- `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product` · theorem — Proper-pushforward Ext is equivariant Borel–Moore homology of the fiber product
- `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution` · theorem — Verdier-duality identification intertwines Yoneda product and oriented convolution
- `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus` · lemma — Stable-flag incidence spaces admit the oriented proper correspondence calculus

### `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples` — Equivariant Borel Moore Correspondence Convolution And Constructible Ext Examples

- `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift` · example — Unequal-dimensional proper pushforwards carry the summed-dimension Ext/Borel–Moore degree
- `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition` · example — A point and projective-line check of source-first convolution and opposite composition

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` requires `analytic-derived-six-operations-and-duality`
- `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` requires `equivariant-constructible-perverse-foundations`
- `signed-quiver-flag-convolution-and-klr-ext-realization` requires `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`
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
