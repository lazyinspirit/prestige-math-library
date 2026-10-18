# Step 4 batch reviewer — batch **70**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **70**. Step-5 owning group: **x**.
Return `group: "x"` and `batches: ["70"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 70 | `semi-lagrangian-characteristic-transport` | A | curved-mesh-geometry-and-conservative-mesh-transfer, event-location-and-hybrid-trajectory-error |
| 70 | `semi-lagrangian-characteristic-transport-examples` | B | semi-lagrangian-characteristic-transport |

## Your content, in full

### `semi-lagrangian-characteristic-transport` — Semi-Lagrangian characteristic transport

- `def-semilagrangian-periodic-grid-and-interpolant` · definition — Periodic tensor grids and multilinear interpolation
- `thm-periodic-c1-velocity-has-global-characteristic-flow` · theorem — A periodic C1 velocity has a global characteristic flow on a finite horizon
- `lem-semilagrangian-transverse-first-hit-error` · lemma — A transverse backward boundary hit has a certified time and trace error bound
- `alg-semilagrangian-backtracking-on-periodic-grid` · algorithm — Explicit Euler characteristic backtracking with multilinear interpolation
- `lem-periodic-tensor-interpolant-is-convex-and-linf-contracting` · lemma — Periodic multilinear interpolation is convex and L-infinity contractive
- `lem-periodic-characteristic-map-is-orientation-preserving` · lemma — A periodic C1 characteristic map is an orientation-preserving diffeomorphism
- `lem-periodic-tensor-interpolation-hessian-error` · lemma — Tensor multilinear interpolation has a second-derivative error bound
- `lem-euler-backward-characteristic-foot-error` · lemma — Explicit Euler gives a second-order local backward-foot defect
- `lem-periodic-flow-departure-cells-have-positive-finite-volume` · lemma — Characteristic departure cells are measurable and have positive finite volume
- `def-characteristic-cell-overlap-remapping` · definition — Characteristic-cell overlap remapping for a conservative density
- `thm-periodic-semilagrangian-global-error-from-local-defects` · theorem — Periodic semi-Lagrangian error is controlled by local foot and interpolation defects
- `thm-characteristic-cell-overlap-remapping-conserves-mass-and-positivity` · theorem — Characteristic-cell overlap remapping preserves mass and positivity

### `semi-lagrangian-characteristic-transport-examples` — Semi-Lagrangian characteristic transport — Examples

- `ex-semilagrangian-constant-speed-crosses-many-cells` · example — A constant-speed foot can cross many cells in one stable update
- `ex-semilagrangian-fixed-grid-time-refinement-keeps-interpolation-error` · example — Refining time alone leaves interpolation diffusion on a fixed grid
- `ex-semilagrangian-pointwise-interpolation-can-change-grid-mass` · example — Variable-foot pointwise interpolation can change the grid sum
- `ex-conservative-overlap-transfer-under-smooth-deforming-flow` · example — A smooth deforming flow remaps two cell averages conservatively

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `semi-lagrangian-characteristic-transport` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
- `monotone-hjb-schemes-and-policy-iteration` requires `semi-lagrangian-characteristic-transport`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
