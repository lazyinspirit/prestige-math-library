# Step 4 batch reviewer — batch **34**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **34**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `projective-hodge-polarization-foundations` | A | chern-and-pontryagin-classes-by-splitting-and-complexification, chern-weil-theory-and-characteristic-forms, compact-kahler-hodge-foundations, flat-smooth-and-etale-morphisms, holomorphic-inverse-and-weierstrass-preparation, integration-of-forms-and-the-general-stokes-theorem, proj-projective-schemes-twisting-sheaves-and-ampleness |
| 34 | `projective-hodge-polarization-foundations-examples` | B | compact-kahler-hodge-foundations, projective-hodge-polarization-foundations |

## Your content, in full

### `projective-hodge-polarization-foundations` — Projective Hodge Polarization Foundations

- `lem-smooth-projective-analytification-has-rational-kahler-polarization` · lemma — Smooth projective analytifications have rational Kähler forms
- `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` · theorem — Kähler identities give Lefschetz sl-two and hard Lefschetz
- `def-morphisms-and-polarizability-of-rational-hodge-structures` · definition — Morphisms, polarizability and simplicity of rational Hodge structures
- `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures` · lemma — Polarized rational Hodge structures split orthogonally
- `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` · theorem — Hodge–Riemann bilinear relations for smooth projective varieties
- `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties` · theorem — Polarized Hodge and hard Lefschetz package for smooth projective varieties

### `projective-hodge-polarization-foundations-examples` — Projective Hodge Polarization Foundations Examples

- `ex-primitive-one-forms-on-a-hermitian-two-plane` · example — Primitive one-forms and the Weil star sign

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `projective-hodge-polarization-foundations` requires `compact-kahler-hodge-foundations`
- `projective-hodge-polarization-foundations-examples` requires `compact-kahler-hodge-foundations`
- `logarithmic-hodge-complexes-and-smooth-open-weights` requires `projective-hodge-polarization-foundations`
- `geometric-fixed-parts-and-gauss-manin-semisimplicity` requires `projective-hodge-polarization-foundations`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `projective-hodge-polarization-foundations`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `projective-hodge-polarization-foundations`
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
