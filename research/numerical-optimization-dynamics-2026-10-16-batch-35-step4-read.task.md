# Step 4 batch reviewer — batch **35**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **35**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["35"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 35 | `runge-kutta-methods-and-order` | A | mixed-partials-taylor-and-extrema, picard-lindelof-and-first-order-odes, one-step-ode-consistency-and-local-error, global-ode-and-density-error, fundamental-trigonometric-identities, the-spectral-theorem-and-singular-value-decomposition, banach-space-differential-calculus-and-banach-manifolds |
| 35 | `runge-kutta-methods-and-order-examples` | B | runge-kutta-methods-and-order |

## Your content, in full

### `runge-kutta-methods-and-order` — Runge–Kutta methods and order

- `lem-chebyshev-rkc-bounds-and-endpoint-derivatives` · lemma — Chebyshev bounds and endpoint derivatives used by stabilized Runge–Kutta methods
- `def-explicit-runge-kutta-tableau-and-stage-map` · definition — Explicit Runge–Kutta tableaus, stage maps, and failure status
- `alg-rkc1-chebyshev` · algorithm — First-order stabilized explicit Runge–Kutta–Chebyshev step
- `alg-rkc2-linear-chebyshev` · algorithm — Second-order linear stabilized Runge–Kutta–Chebyshev step
- `alg-rkc2-nonlinear` · algorithm — Second-order nonlinear stabilized Runge–Kutta–Chebyshev step
- `def-euler-midpoint-rk4-tableaus` · definition — The explicit Euler, midpoint, and classical fourth-order Runge–Kutta tableaus
- `prop-explicit-rk-order-conditions-through-four` · proposition — Sufficient explicit Runge–Kutta order conditions through order four
- `alg-ssprk33` · algorithm — The three-stage third-order SSP Runge–Kutta step
- `prop-euler-midpoint-rk4-orders-and-stability-functions` · proposition — Orders and scalar stability functions of Euler, midpoint, and classical RK4
- `prop-rkc-stability-intervals-and-stage-degree` · proposition — RKC stability polynomials and certified negative-real intervals
- `lem-rkc-chebyshev-stage-perturbation-amplification` · lemma — Chebyshev stage perturbations have an explicit quadratic bound
- `prop-ssprk33-third-order-and-convex-preservation` · proposition — SSPRK(3,3) is third order and preserves conditional convex bounds
- `thm-nonlinear-rkc2-order-two-and-global-error` · theorem — Undamped nonlinear RKC2 has fixed-stage order two on an admitted tube

### `runge-kutta-methods-and-order-examples` — Runge–Kutta methods and order — Examples

- `ex-midpoint-order-loss-at-continuous-time-kink` · example — Explicit midpoint loses its uniform second-order defect bound at a time kink
- `ex-euler-midpoint-rk4-fixed-time-error-slopes` · example — Fixed-time error slopes for Euler, midpoint, and classical RK4
- `ex-rkc-self-adjoint-heat-stability-work` · example — A self-adjoint heat spectrum gives a long RKC1 stability step
- `ex-rkc-eigenvalue-stability-does-not-control-nonnormal-growth` · example — Scalar eigenvalue stability does not control nonnormal matrix growth
- `ex-rkc-stage-roundoff-quadratic-amplification` · example — Equal additive stage perturbations attain quadratic RKC1 amplification

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `runge-kutta-methods-and-order` requires `one-step-ode-consistency-and-local-error`
- `runge-kutta-methods-and-order` requires `global-ode-and-density-error`
- `stability-regions-and-stiff-equations` requires `runge-kutta-methods-and-order`
- `adaptive-ode-solvers-and-error-estimation` requires `runge-kutta-methods-and-order`
- `geometric-numerical-integration` requires `runge-kutta-methods-and-order`
- `parallel-in-time-parareal-and-mgrit` requires `runge-kutta-methods-and-order`
- `positive-conservative-production-destruction-integrators` requires `runge-kutta-methods-and-order`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `runge-kutta-methods-and-order`
- `deferred-correction-and-collocation-iterations` requires `runge-kutta-methods-and-order`
- `imex-and-operator-splitting-methods` requires `runge-kutta-methods-and-order`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `runge-kutta-methods-and-order`
- `direct-transcription-and-numerical-ode-optimal-control` requires `runge-kutta-methods-and-order`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `runge-kutta-methods-and-order`
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
