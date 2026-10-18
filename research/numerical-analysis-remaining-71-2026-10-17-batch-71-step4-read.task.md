# Step 4 batch reviewer — batch **71**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **71**. Step-5 owning group: **x**.
Return `group: "x"` and `batches: ["71"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 71 | `monotone-hjb-schemes-and-policy-iteration` | A | hyperbolic-finite-difference-methods, semi-lagrangian-characteristic-transport, hamilton-jacobi-equations-and-viscosity-solutions, sparse-high-dimensional-estimation-and-covariance, power-and-sample-size-planning, measures-and-their-basic-properties, lebesgue-measure-on-euclidean-space, countability-and-uncountability |
| 71 | `monotone-hjb-schemes-and-policy-iteration-examples` | B | monotone-hjb-schemes-and-policy-iteration |

## Your content, in full

### `monotone-hjb-schemes-and-policy-iteration` — Monotone Hamilton–Jacobi–Bellman schemes and policy iteration

- `def-na-finite-state-discounted-bellman-system` · definition — Finite-state discounted generator Bellman system
- `def-na-second-order-elliptic-semijets-and-closure` · definition — Second-order elliptic semijets and their value-sensitive closures
- `lem-na-convex-support-localization-and-lipschitz-dual-gradient` · lemma — Convex supports, localization, and the Lipschitz dual gradient
- `lem-na-jensen-maximum-principle-semiconvex` · lemma — Jensen maximum principle for locally semiconvex functions
- `lem-na-lipschitz-critical-image-null` · lemma — Critical images of Euclidean Lipschitz maps are null
- `thm-na-rademacher-euclidean` · theorem — Rademacher differentiability in Euclidean space
- `def-na-periodic-grid-and-tensor-multilinear-interpolation` · definition — Periodic Cartesian grids and tensor-product multilinear interpolation
- `lem-na-discounted-bellman-policy-matrix-inverse-positive` · lemma — Inverse positivity of discounted finite-state policy matrices
- `lem-na-sup-convolution-semiconvexity-and-jet-transfer` · lemma — Quadratic sup convolution and transfer of upper jets
- `thm-na-semiconvex-alexandrov-second-order-differentiability` · theorem — Alexandrov second differentiability of locally semiconvex functions
- `alg-na-finite-control-howard-policy-iteration` · algorithm — Finite-budget Howard policy iteration for a discounted generator Bellman system
- `def-na-first-order-hjb-cauchy-problem` · definition — Periodic first-order controlled Hamilton–Jacobi Cauchy problem
- `def-na-periodic-diagonal-controlled-diffusion-hjb-problem` · definition — Periodic diagonal controlled-diffusion HJB Cauchy problem
- `lem-na-multilinear-interpolation-positive-and-second-order-accurate` · lemma — Positive partition of unity and interpolation error for periodic multilinear interpolation
- `thm-na-elliptic-theorem-of-sums` · theorem — Elliptic theorem of sums with the full block matrix bound
- `alg-na-explicit-diagonal-diffusion-hjb-grid-step` · algorithm — Explicit monotone diagonal-diffusion Bellman grid update
- `alg-na-positive-interpolation-semilagrangian-hjb-step` · algorithm — Positive-interpolation semi-Lagrangian update for first-order HJB equations
- `alg-na-upwind-hjb-grid-step` · algorithm — CFL-monotone upwind update for first-order HJB equations
- `def-na-second-order-parabolic-viscosity-solution` · definition — Second-order parabolic viscosity subsolutions and supersolutions
- `lem-na-grid-contact-localization-for-half-relaxed-limits` · lemma — Localization of strict half-relaxed contacts to periodic mesh nodes
- `thm-na-howard-policy-iteration-monotone-improvement-termination` · theorem — Monotone improvement and finite termination of exact Howard iteration
- `lem-na-diagonal-diffusion-discrete-initial-trace` · lemma — Initial trace for the explicit diagonal-diffusion HJB scheme
- `lem-na-diagonal-diffusion-stencil-is-monotone` · lemma — Nonnegative row weights for the diagonal-diffusion HJB stencil
- `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities` · lemma — Closed elliptic space-time jets test the parabolic diagonal HJB inequality
- `lem-na-first-order-hjb-discrete-initial-trace` · lemma — Initial trace for the positive-interpolation and upwind HJB schemes
- `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity` · lemma — Smooth test functions suffice for the first- and second-order HJB viscosity notions
- `thm-na-diagonal-diffusion-stencil-consistency` · theorem — Smooth consistency of the diagonal-diffusion Bellman stencil
- `thm-na-positive-interpolation-hjb-step-monotone-stable-consistent` · theorem — Monotonicity, L-infinity stability, and consistency of the semi-Lagrangian HJB step
- `thm-na-upwind-hjb-grid-step-monotone-stable-consistent` · theorem — Monotonicity, L-infinity stability, and consistency of the upwind HJB step
- `thm-na-diagonal-diffusion-scheme-half-relaxed-limits` · theorem — Half-relaxed limits of the monotone diagonal-diffusion HJB scheme
- `thm-na-first-order-hjb-scheme-convergence` · theorem — Convergence of the positive-interpolation and upwind first-order HJB schemes
- `thm-na-periodic-diagonal-hjb-second-order-comparison` · theorem — Comparison for periodic diagonal controlled-diffusion HJB equations
- `cor-na-diagonal-diffusion-scheme-converges-under-comparison` · corollary — Conditional convergence of the diagonal-diffusion scheme under comparison
- `thm-na-diagonal-diffusion-hjb-scheme-convergence` · theorem — Unconditional convergence and existence for the periodic diagonal-diffusion HJB scheme

### `monotone-hjb-schemes-and-policy-iteration-examples` — Monotone Hamilton–Jacobi–Bellman schemes and policy iteration — Examples

- `cex-na-centered-hjb-update-is-not-monotone` · counterexample — A centered HJB update can fail monotonicity
- `ex-na-discounted-control-switching-policy-iteration` · example — A two-state switching example for discounted Howard iteration
- `ex-na-diagonal-diffusion-manufactured-solution` · example — A periodic manufactured solution for the diagonal-diffusion HJB stencil
- `ex-na-compact-control-quantization-hamiltonian-error` · example — Uniform Hamiltonian error for an evenly spaced compact-control grid
- `ex-na-eikonal-kink-monotone-hjb-updates` · example — An eikonal kink and its monotone HJB grid updates

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `monotone-hjb-schemes-and-policy-iteration` requires `semi-lagrangian-characteristic-transport`
- `boundary-integral-equations-and-galerkin-bem` requires `monotone-hjb-schemes-and-policy-iteration`
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
