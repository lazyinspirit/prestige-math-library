# Step 4 batch reviewer — batch **44**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **44**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["44"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 44 | `projective-perverse-hard-lefschetz-and-decomposition` | A | affine-perverse-vanishing-and-universal-hyperplanes, analytic-derived-six-operations-and-duality, equivariant-constructible-perverse-foundations, geometric-fixed-parts-and-gauss-manin-semisimplicity, lefschetz-splitting-in-bounded-triangulated-categories, proj-projective-schemes-twisting-sheaves-and-ampleness, projective-hodge-polarization-foundations, proper-hyperresolutions-and-mixed-hodge-restriction-images, relations-functions-and-quotients |
| 44 | `projective-perverse-hard-lefschetz-and-decomposition-examples` | B | local-coefficients-twisted-homology-and-duality, projective-perverse-hard-lefschetz-and-decomposition, relations-functions-and-quotients |

## Your content, in full

### `projective-perverse-hard-lefschetz-and-decomposition` — Projective Perverse Hard Lefschetz And Decomposition

- `lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism` · lemma — Closed-support splitting of a perverse sheaf is detected by its costalk-to-stalk map
- `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations` · lemma — The middle primitive polarization follows from the nonmiddle forms and a Kähler limit
- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction` · lemma — Simultaneous projective Lefschetz, Hodge and perverse induction step
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps` · theorem — Relative hard Lefschetz and perverse splitting for compact projective algebraic maps
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology` · theorem — Compact smooth projective pushforwards have semisimple perverse cohomology in characteristic zero

### `projective-perverse-hard-lefschetz-and-decomposition-examples` — Projective Perverse Hard Lefschetz And Decomposition Examples

- `ex-projective-perverse-decomposition-for-projective-space-to-a-point` · example — Perverse decomposition of projective space over a point

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `projective-perverse-hard-lefschetz-and-decomposition` requires `affine-perverse-vanishing-and-universal-hyperplanes`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `analytic-derived-six-operations-and-duality`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `equivariant-constructible-perverse-foundations`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `geometric-fixed-parts-and-gauss-manin-semisimplicity`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `lefschetz-splitting-in-bounded-triangulated-categories`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `projective-hodge-polarization-foundations`
- `projective-perverse-hard-lefschetz-and-decomposition` requires `proper-hyperresolutions-and-mixed-hodge-restriction-images`
- `quiver-full-flag-projective-semisimplicity` requires `projective-perverse-hard-lefschetz-and-decomposition`
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
