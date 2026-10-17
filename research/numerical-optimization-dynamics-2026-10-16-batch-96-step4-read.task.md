# Step 4 batch reviewer — batch **96**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **96**. Step-5 owning group: **ad**.
Return `group: "ad"` and `batches: ["96"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 96 | `discrete-continuous-and-pde-adjoint-sensitivities` | A | data-assimilation-variational-and-ensemble-methods, automatic-differentiation-and-computational-graphs, nonlinear-boundary-value-solvers, global-ode-and-density-error, runge-kutta-methods-and-order, ceas-lemma-and-aubin-nitsche-error-estimates, parabolic-finite-element-methods, implicit-stiff-time-stepping-and-algebraic-error, variational-crimes-and-strang-lemmas |
| 96 | `discrete-continuous-and-pde-adjoint-sensitivities-examples` | B | discrete-continuous-and-pde-adjoint-sensitivities |

## Your content, in full

### `discrete-continuous-and-pde-adjoint-sensitivities` — Discrete continuous and pde adjoint sensitivities

- `def-parameterized-finite-state-step-objective` · definition — Finite parameterized state-step graphs and objectives
- `def-parameterized-elliptic-variational-problem` · definition — Parameter-dependent coercive elliptic variational states and objectives
- `def-parameterized-parabolic-variational-problem` · definition — Parameter-dependent parabolic variational states and objectives
- `lem-parameter-ode-flow-tangent-on-common-tube` · lemma — Parameter-dependent ODE flows have the variational tangent on a common tube
- `lem-ode-adjoint-pairing-integration-by-parts` · lemma — A tangent and adjoint pairing gives the ODE gradient boundary identity
- `thm-discrete-adjoint-gradient-recursion` · theorem — The reverse recursion is the exact gradient of a finite state-step objective
- `thm-continuous-ode-adjoint-gradient-formula` · theorem — The continuous ODE adjoint gives the parameter gradient with endpoint terms
- `lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order` · lemma — Local C1 step consistency gives tangent, adjoint and gradient order
- `lem-explicit-rk-differentiated-stages-give-local-c1-order` · lemma — Differentiated explicit RK stages give local C1 order
- `thm-discrete-continuous-gradient-error-order-p` · theorem — Discrete and continuous ODE gradients agree to order p under augmented error bounds
- `lem-implicit-rk-stage-jacobian-nonsingular-on-branch` · lemma — A contractive implicit Runge-Kutta stage branch has a nonsingular residual Jacobian
- `thm-implicit-rk-stage-parameter-sensitivity` · theorem — An implicit Runge-Kutta stage has the stated parameter sensitivity on its selected branch
- `lem-elliptic-state-map-c1-under-uniform-coercivity` · lemma — A uniformly coercive elliptic variational state is C1 in its parameter
- `thm-elliptic-adjoint-reduced-gradient` · theorem — The elliptic adjoint gives the reduced parameter gradient
- `thm-elliptic-fe-gradient-error-in-energy-norms` · theorem — Conforming elliptic finite-element reduced gradients have an energy-norm error budget
- `cor-elliptic-l2-gradient-rate-under-dual-regularity` · corollary — An elliptic reduced-gradient L2 rate follows under dual approximation
- `thm-parabolic-adjoint-gradient-sensitivity` · theorem — A parabolic adjoint gives the gradient when the state map is differentiable
- `thm-parabolic-fe-gradient-error-with-time-dependent-ritz` · theorem — Parabolic finite-element gradient errors include the time-dependent Ritz residual
- `thm-finite-time-tangent-volume-growth-from-qr` · theorem — Positive-diagonal QR factors give the exact finite-time tangent-volume change

### `discrete-continuous-and-pde-adjoint-sensitivities-examples` — Discrete continuous and pde adjoint sensitivities — Examples

- `ex-4dvar-discrete-adjoint-gradient` · example — A two-observation 4DVAR objective has an exact reverse gradient
- `ex-implicit-stiff-decay-parameter-fit` · example — Backward Euler differentiates a stiff scalar decay fit on its exact branch
- `ex-elliptic-diffusion-coefficient-sensitivity` · example — A one-dimensional elliptic diffusion coefficient has the adjoint gradient
- `ex-multiple-shooting-sensitivity-jacobian` · example — A two-interval shooting residual has a block-bidiagonal sensitivity Jacobian
- `ex-qr-finite-time-volume-growth` · example — A finite QR record recovers the tangent-volume change
- `ex-tent-map-finite-time-sensitivity-growth` · example — A strict tent-map itinerary has exponential finite-time sensitivity growth
- `ex-discrete-terminal-condition-mismatch` · example — A mismatched terminal adjoint condition changes the discrete gradient
- `cex-state-error-alone-does-not-control-gradient` · counterexample — Uniform state accuracy alone does not bound parameter-gradient error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `automatic-differentiation-and-computational-graphs`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `nonlinear-boundary-value-solvers`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `global-ode-and-density-error`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `runge-kutta-methods-and-order`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `parabolic-finite-element-methods`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `variational-crimes-and-strang-lemmas`
- `event-location-and-hybrid-trajectory-error` requires `discrete-continuous-and-pde-adjoint-sensitivities`
- `direct-transcription-and-numerical-ode-optimal-control` requires `discrete-continuous-and-pde-adjoint-sensitivities`
- `finite-element-pde-constrained-optimization` requires `discrete-continuous-and-pde-adjoint-sensitivities`
- `numerical-identifiability-and-optimal-experiment-design` requires `discrete-continuous-and-pde-adjoint-sensitivities`
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `discrete-continuous-and-pde-adjoint-sensitivities`
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
