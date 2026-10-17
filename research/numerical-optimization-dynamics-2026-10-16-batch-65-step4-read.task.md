# Step 4 batch reviewer — batch **65**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **65**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["65"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 65 | `implicit-stiff-time-stepping-and-algebraic-error` | A | nonlinear-equations-and-newton-methods, global-ode-and-density-error, linear-multistep-methods-and-dahlquist-equivalence, homology-axioms-degree-and-classical-applications |
| 65 | `implicit-stiff-time-stepping-and-algebraic-error-examples` | B | implicit-stiff-time-stepping-and-algebraic-error |

## Your content, in full

### `implicit-stiff-time-stepping-and-algebraic-error` — Implicit stiff time stepping and algebraic error

- `def-implicit-residual-and-algebraic-error-units` · definition — Implicit residuals and their update and derivative units
- `lem-strongly-monotone-continuous-map-is-bijective` · lemma — A continuous strongly monotone map of finite-dimensional space is bijective
- `def-backward-euler-step-equation` · definition — Backward Euler step map and algebraic residual
- `def-implicit-runge-kutta-stage-equations` · definition — Implicit Runge–Kutta stage equations and update
- `def-two-stage-sdirk-tableau` · definition — Selected two-stage singly diagonally implicit Runge–Kutta tableau
- `def-two-stage-radau-iia-tableau` · definition — Two-stage Radau IIA tableau
- `def-scalar-rk-a-and-l-stability` · definition — Scalar stability function, A-stability, and L-stability for Runge–Kutta methods
- `lem-small-step-implicit-rk-branch-and-residual-error` · lemma — Small-step implicit Runge–Kutta stages have a unique branch and controlled residual error
- `alg-newton-chord-implicit-residual-with-factorization-reuse` · algorithm — Finite-budget Newton and chord solves with scheduled factorization reuse
- `thm-backward-euler-dissipative-resolvent-contraction` · theorem — Backward Euler has a globally defined nonexpansive resolvent (contractive when strongly dissipative)
- `prop-two-stage-sdirk-order-two-and-l-stability` · proposition — The selected two-stage SDIRK method has order two and is scalar L-stable
- `prop-two-stage-radau-iia-order-three-and-l-stability` · proposition — Two-stage Radau IIA has order three and is scalar L-stable
- `thm-backward-euler-algebraic-update-residual-error-budget` · theorem — Backward Euler propagates unscaled algebraic update residuals
- `thm-implicit-rk-global-order-with-stage-residual-control` · theorem — Backward Euler, the selected SDIRK, and two-stage Radau IIA converge at their stated orders under controlled stage residuals
- `cor-constant-step-bdf2-order-two-with-consistent-start` · corollary — Constant-step BDF2 is second-order convergent with a consistent start and selected roots
- `alg-implicit-stiff-time-stepper-with-consistent-starts` · algorithm — Implicit stiff time stepping with a branch and residual ledger

### `implicit-stiff-time-stepping-and-algebraic-error-examples` — Implicit stiff time stepping and algebraic error — Examples

- `ex-newton-budget-exhaustion-with-a-unique-backward-euler-root` · example — Newton can exhaust its budget although the dissipative backward Euler root is unique
- `ex-stiff-scalar-decay-and-trapezoid-ringing` · example — Trapezoidal ringing on a stiff scalar decay equation
- `ex-dissipative-backward-euler-residual-contraction` · example — A dissipative backward Euler solve with a controlled update residual
- `ex-robertson-reaction-system-newton-work` · example — One Robertson reaction step: Newton work and the chord reuse tradeoff

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `implicit-stiff-time-stepping-and-algebraic-error` requires `nonlinear-equations-and-newton-methods`
- `implicit-stiff-time-stepping-and-algebraic-error` requires `global-ode-and-density-error`
- `implicit-stiff-time-stepping-and-algebraic-error` requires `linear-multistep-methods-and-dahlquist-equivalence`
- `rosenbrock-and-linearly-implicit-methods` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `differential-algebraic-equations-and-consistent-initialization` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `stable-sde-schemes-for-superlinear-drift` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `parallel-in-time-parareal-and-mgrit` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `constrained-dynamics-shake-and-rattle` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `deferred-correction-and-collocation-iterations` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `imex-and-operator-splitting-methods` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `implicit-stiff-time-stepping-and-algebraic-error`
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
