# Step 4 batch reviewer — batch **53**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **53**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["53"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 53 | `hall-algebra-modules-and-geometric-actions` | A | green-hall-bialgebras-and-quantum-group-realizations, symmetric-functions-hall-inner-product-and-schur-bases, heisenberg-and-algebraic-weyl-algebras |
| 53 | `hall-algebra-modules-and-geometric-actions-examples` | B | hall-algebra-modules-and-geometric-actions |

## Your content, in full

### `hall-algebra-modules-and-geometric-actions` — Hall Algebra Modules, Fock Spaces, and Geometric Actions

- `def-a1-nakajima-framed-quiver-data` · definition — A one-vertex framed quiver variety and its Hecke correspondence
- `lem-a1-nakajima-varieties-and-hecke-correspondence-are-points` · lemma — The A1 Nakajima varieties and the Hecke correspondence are points
- `thm-a1-nakajima-hecke-correspondence-gives-sl2-action` · theorem — The A1 Nakajima Hecke correspondence gives the fundamental sl2 action
- `def-hall-algebra-module` · definition — Modules over a Hall algebra are unital algebra representations
- `thm-hall-algebra-regular-module` · theorem — A unital Hall algebra is a left module over itself
- `thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action` · theorem — The generic Jordan Hall regular module carries the normalized Heisenberg Fock action
- `lem-a1-arbitrary-framing-cotangent-hecke-model` · lemma — Arbitrary-framing A1 varieties and their conormal Hecke correspondence
- `lem-a1-hecke-zero-section-excess-coefficients` · lemma — Excess intersection computes the A1 Hecke coefficients
- `lem-a1-supported-chow-convolution-and-action` · lemma — Supported Chow convolution and its action for the A1 family
- `thm-a1-arbitrary-framing-geometric-sl2-action` · theorem — Arbitrary-framing A1 Hecke cycles realize the highest-weight sl2 module

### `hall-algebra-modules-and-geometric-actions-examples` — Hall Algebra Modules, Fock Spaces, and Geometric Actions: Examples and Counterexamples

- `ex-a1-nakajima-hecke-correspondence-as-fundamental-sl2-module` · example — The A1 Nakajima correspondence in the fundamental sl2 representation
- `ex-two-distinct-one-dimensional-modules-over-generic-jordan-hall-algebra` · example — Two distinct one-dimensional modules over the generic Jordan Hall algebra
- `ex-degree-one-green-pairing-normalization-of-jordan-fock-action` · example — Degree-one normalization for the Jordan Hall Green pairing and Fock action

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hall-algebra-modules-and-geometric-actions` requires `green-hall-bialgebras-and-quantum-group-realizations`
- `hall-algebra-modules-and-geometric-actions` requires `heisenberg-and-algebraic-weyl-algebras`
- `hall-stability-dt-bps-and-wall-crossing` requires `hall-algebra-modules-and-geometric-actions`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
