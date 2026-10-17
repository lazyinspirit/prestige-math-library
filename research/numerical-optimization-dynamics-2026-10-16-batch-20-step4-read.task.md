# Step 4 batch reviewer — batch **20**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **20**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["20"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 20 | `composite-quadrature-rules` | A | properties-of-the-integral-and-the-working-ftc, the-riemann-integral-in-rn-and-jordan-content, polynomial-interpolation-and-remainder, laplace-approximation-and-marginal-integration |
| 20 | `composite-quadrature-rules-examples` | B | composite-quadrature-rules, convexity |

## Your content, in full

### `composite-quadrature-rules` — Composite quadrature rules

- `alg-composite-midpoint-rule` · algorithm — Composite midpoint rule on a uniform grid
- `alg-composite-simpson-rule` · algorithm — Composite Simpson rule on an even uniform grid
- `lem-composite-midpoint-panel-error-kernel` · lemma — Midpoint panel error kernel and second-derivative bound
- `thm-composite-midpoint-error-bound` · theorem — Composite midpoint error bound for a twice continuously differentiable function
- `lem-simpson-panel-peano-kernel` · lemma — Peano kernel identity for one Simpson panel
- `thm-composite-simpson-exact-through-degree-three` · theorem — Composite Simpson rule is exact through cubic degree
- `thm-composite-simpson-error-bound` · theorem — Composite Simpson error bound for a four-times continuously differentiable function

### `composite-quadrature-rules-examples` — Composite quadrature rules — Examples

- `ex-convex-composite-midpoint-and-trapezoid-bracketing` · example — Convex data bracket the integral between composite midpoint and trapezoid values
- `ex-quadratic-exact-for-composite-simpson` · example — Simpson rule integrates a quadratic exactly on one two-panel block
- `ex-cubic-exact-for-composite-simpson` · example — Simpson rule integrates a cubic exactly on one two-panel block

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `composite-quadrature-rules` requires `polynomial-interpolation-and-remainder`
- `fractional-evolution-and-convolution-quadrature` requires `composite-quadrature-rules`
- `renewal-age-and-size-structured-numerical-methods` requires `composite-quadrature-rules`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `composite-quadrature-rules`
- `clenshaw-curtis-and-extrapolation-quadrature` requires `composite-quadrature-rules`
- `adaptive-quadrature-and-error-indicators` requires `composite-quadrature-rules`
- `sparse-grid-cubature-and-mixed-regularity` requires `composite-quadrature-rules`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `composite-quadrature-rules`
- `variational-crimes-and-strang-lemmas` requires `composite-quadrature-rules`
- `spectral-collocation-and-galerkin-methods` requires `composite-quadrature-rules`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
