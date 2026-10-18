# Step 4 batch reviewer — batch **36**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **36**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["36"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 36 | `hyperbolic-dg-and-summation-by-parts-discretizations` | A | finite-element-meshes-and-interpolation, invariant-domain-and-entropy-stable-conservative-schemes, runge-kutta-methods-and-order |
| 36 | `hyperbolic-dg-and-summation-by-parts-discretizations-examples` | B | hyperbolic-dg-and-summation-by-parts-discretizations |

## Your content, in full

### `hyperbolic-dg-and-summation-by-parts-discretizations` — Hyperbolic DG and summation-by-parts methods

- `def-pe04-one-dimensional-interval-mesh-and-broken-polynomials` · definition — Oriented interval meshes and broken polynomial spaces
- `def-pe04-diagonal-norm-sbp-element-data` · definition — Diagonal-norm summation-by-parts element data
- `def-pe04-upwind-dg-transport-discretization` · definition — Upwind discontinuous Galerkin discretization of constant transport
- `alg-pe04-first-order-upwind-forward-euler` · algorithm — Forward-Euler step for degree-zero upwind DG transport
- `def-pe04-cellwise-l2-projection` · definition — Cellwise L2 projection relation onto broken polynomials
- `def-pe04-upwind-sbp-sat-transport-discretization` · definition — Upwind SBP-SAT discretization of constant transport
- `thm-pe04-upwind-dg-l2-energy-stability` · theorem — Upwind DG transport satisfies the semidiscrete L2 energy identity
- `def-pe04-flux-differencing-sbp-systems` · definition — Conservative flux-differencing SBP method for nonlinear systems
- `lem-pe04-cellwise-l2-projection-exists-best-approximation` · lemma — The cellwise L2 projection exists uniquely and is best approximation
- `thm-pe04-first-order-upwind-forward-euler-conservation-and-entropy` · theorem — The degree-zero upwind forward-Euler step preserves mass and convex entropy
- `thm-pe04-upwind-sbp-sat-l2-energy-stability` · theorem — Upwind SBP-SAT transport satisfies the semidiscrete L2 energy identity
- `thm-pe04-dg-smooth-solution-l2-error-bound` · theorem — Smooth-solution L2 error bound for upwind DG transport
- `thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability` · theorem — Flux-differencing SBP is conservative and semidiscretely entropy stable
- `thm-pe04-ssprk33-first-order-upwind-entropy-preservation` · theorem — SSPRK(3,3) preserves the degree-zero upwind entropy bound

### `hyperbolic-dg-and-summation-by-parts-discretizations-examples` — Hyperbolic DG and summation-by-parts methods — Examples

- `cex-pe04-underintegrated-burgers-collocation-entropy-growth` · counterexample — Underintegrated Burgers collocation can increase quadratic entropy
- `ex-pe04-central-versus-upwind-periodic-transport` · example — Central and upwind fluxes have different periodic dissipation
- `ex-pe04-upwind-transport-with-inflow` · example — A constant upwind DG state with inflow data on one interval
- `ex-pe04-sbp-inflow-sat-energy-identity` · example — The SBP inflow SAT produces the boundary energy term

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hyperbolic-dg-and-summation-by-parts-discretizations` requires `invariant-domain-and-entropy-stable-conservative-schemes`
- `compressible-viscous-flow-and-entropy-stable-fluxes` requires `hyperbolic-dg-and-summation-by-parts-discretizations`
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
