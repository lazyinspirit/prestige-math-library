# Step 4 batch reviewer — batch **43**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **43**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["43"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 43 | `signed-quiver-flag-convolution-and-klr-ext-realization` | A | chern-and-pontryagin-classes-by-splitting-and-complexification, equivariant-borel-moore-correspondence-convolution-and-constructible-ext, leray-hirsch-thom-isomorphism-and-gysin-sequences, relations-functions-and-quotients, topological-vector-bundles-and-grassmannian-classification |
| 43 | `signed-quiver-flag-convolution-and-klr-ext-realization-examples` | B | signed-quiver-flag-convolution-and-klr-ext-realization |

## Your content, in full

### `signed-quiver-flag-convolution-and-klr-ext-realization` — Signed Quiver Flag Convolution And Klr Ext Realization

- `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators` · definition — Quiver full-flag incidence varieties and signed geometric KLR generators
- `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis` · theorem — Relative-position incidence strata give a faithful geometric PBW basis
- `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations` · theorem — Quiver-flag convolution generators satisfy the signed KLR relations
- `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes` · theorem — Signed KLR algebra is the equivariant Ext algebra of quiver-flag complexes

### `signed-quiver-flag-convolution-and-klr-ext-realization-examples` — Signed Quiver Flag Convolution And Klr Ext Realization Examples

- `ex-signed-two-direction-multiedge-quiver-flag-crossing` · example — Signed two-direction multiedge quiver-flag crossing
- `ex-equal-color-quiver-flag-correspondence-is-nilhecke` · example — Equal-color quiver-flag correspondence is nilHecke

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `signed-quiver-flag-convolution-and-klr-ext-realization` requires `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`
- `klr-algebras-induction-and-quantum-serre-categorification` requires `signed-quiver-flag-convolution-and-klr-ext-realization`
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
