# Step 4 batch reviewer — batch **100**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **100**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["100"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 100 | `direct-transcription-and-numerical-ode-optimal-control` | A | inequality-kkt-duality-and-optimality-certificates, nonlinear-boundary-value-solvers, runge-kutta-methods-and-order, adaptive-ode-solvers-and-error-estimation, barrier-and-primal-dual-interior-point-methods, sqp-active-set-and-augmented-lagrangian-methods, discrete-continuous-and-pde-adjoint-sensitivities |
| 100 | `direct-transcription-and-numerical-ode-optimal-control-examples` | B | direct-transcription-and-numerical-ode-optimal-control |

## Your content, in full

### `direct-transcription-and-numerical-ode-optimal-control` — Direct transcription and numerical ode optimal control

- `def-ctrl1-linear-lqr-control-problem` · definition — Finite-horizon bounded-control linear-quadratic ODE problem
- `def-ctrl1-smooth-transcription-data` · definition — Smooth finite-horizon ODE optimal-control transcription data
- `lem-ctrl1-measurable-linear-ode-state-map` · lemma — The bounded measurable linear ODE has a unique affine state map
- `lem-ctrl1-control-box-is-weakly-closed` · lemma — Under Countable Choice, pointwise compact convex control constraints are weakly closed in L2
- `def-ctrl1-control-mesh-and-piecewise-constant-parameterization` · definition — Time meshes and piecewise-constant control parameterization
- `lem-ctrl1-weak-control-convergence-implies-uniform-state-convergence` · lemma — Weakly convergent bounded controls have uniformly convergent states
- `lem-ctrl1-compact-convex-control-cell-averages-form-a-recovery-sequence` · lemma — Cell averages give a strong recovery sequence for compact convex controls
- `def-ctrl1-runge-kutta-tableau-and-stage-collocation` · definition — Runge–Kutta tableaux and stage collocation equations
- `def-ctrl1-lqr-adjoint-equation` · definition — Continuous adjoint equation for the linear-quadratic ODE
- `lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous` · lemma — Under Countable Choice, the LQR objective is weakly lower semicontinuous
- `lem-ac-zero-derivative-and-integral-reconstruction-under-countable-choice` · lemma — AC zero-derivative constancy and integrable-derivative reconstruction under Countable Choice
- `lem-ctrl1-lqr-adjoint-exists-uniquely` · lemma — The backward LQR adjoint equation has a unique solution
- `thm-ctrl1-lqr-existence-and-unique-optimal-control` · theorem — A bounded-control linear-quadratic ODE has a unique minimizer
- `alg-ctrl1-indirect-shooting-for-the-ode-optimality-system` · algorithm — Finite-budget indirect shooting for an interior-control ODE optimality system
- `lem-ctrl1-lqr-adjoint-identity-and-gradient` · lemma — The LQR adjoint identity gives the reduced gradient
- `thm-ctrl1-lqr-variational-inequality-and-pointwise-control-branch` · theorem — LQR minimizers satisfy a feasible-set variational inequality
- `cex-ctrl1-terminal-constraints-break-pointwise-control-vi` · counterexample — An active terminal constraint invalidates the pointwise control-only variational inequality
- `alg-ctrl1-runge-kutta-shooting-and-collocation-transcription` · algorithm — Finite-horizon shooting and Runge–Kutta collocation transcription
- `lem-ctrl1-single-and-multiple-shooting-nlps-are-equivalent` · lemma — Exact single and multiple shooting have the same reduced feasible controls
- `lem-ctrl1-lqr-transcription-is-a-convex-quadratic-program` · lemma — A linear-quadratic transcription with affine constraints is a convex QP
- `thm-ctrl1-mesh-consistent-lqr-minimizers-converge` · theorem — Mesh-consistent LQR minimizers converge to the unique continuous minimizer
- `thm-ctrl1-objective-and-control-error-from-consistency-bounds` · theorem — Strong convexity converts transcription objective error into a control bound
- `alg-ctrl1-finite-budget-transcription-solver-dispatch` · algorithm — Finite-budget barrier or SQP solve for a transcription NLP
- `thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription` · theorem — Exact-Hessian SQP converges locally to a regular transcription KKT point

### `direct-transcription-and-numerical-ode-optimal-control-examples` — Direct transcription and numerical ode optimal control — Examples

- `ex-ctrl1-bounded-actuator-lqr` · example — A bounded-actuator LQR control and its exact objective
- `ex-ctrl1-chemical-dosing-linear-model` · example — A chemical-dosing model under a constant admissible dose
- `ex-ctrl1-single-versus-multiple-shooting-two-intervals` · example — Two-interval single and multiple shooting for x-prime equals u

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `direct-transcription-and-numerical-ode-optimal-control` requires `inequality-kkt-duality-and-optimality-certificates`
- `direct-transcription-and-numerical-ode-optimal-control` requires `nonlinear-boundary-value-solvers`
- `direct-transcription-and-numerical-ode-optimal-control` requires `runge-kutta-methods-and-order`
- `direct-transcription-and-numerical-ode-optimal-control` requires `adaptive-ode-solvers-and-error-estimation`
- `direct-transcription-and-numerical-ode-optimal-control` requires `barrier-and-primal-dual-interior-point-methods`
- `direct-transcription-and-numerical-ode-optimal-control` requires `sqp-active-set-and-augmented-lagrangian-methods`
- `direct-transcription-and-numerical-ode-optimal-control` requires `discrete-continuous-and-pde-adjoint-sensitivities`
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
