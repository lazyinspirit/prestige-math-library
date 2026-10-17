# Step 4 batch reviewer — batch **101**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **101**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["101"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 101 | `finite-element-pde-constrained-optimization` | A | inequality-kkt-duality-and-optimality-certificates, finite-element-meshes-and-interpolation, proximal-gradient-and-accelerated-composite-optimization, ceas-lemma-and-aubin-nitsche-error-estimates, parabolic-finite-element-methods, variational-crimes-and-strang-lemmas, discrete-continuous-and-pde-adjoint-sensitivities, sqp-active-set-and-augmented-lagrangian-methods |
| 101 | `finite-element-pde-constrained-optimization-examples` | B | finite-element-pde-constrained-optimization |

## Your content, in full

### `finite-element-pde-constrained-optimization` — Finite element pde constrained optimization

- `def-pde-box-control-set` · definition — Closed pointwise box of L2 controls
- `lem-pde-box-control-set-basic-properties` · lemma — A pointwise L2 box is nonempty, bounded, closed, and convex
- `lem-pde-l2-control-space-separable` · lemma — L2 controls on a bounded spatial region form a separable Hilbert space
- `def-linear-elliptic-pde-constrained-control-problem` · definition — Linear coercive elliptic PDE control problem and reduced objective
- `lem-separable-hilbert-bounded-sequence-weak-subsequence` · lemma — A bounded sequence in a separable Hilbert space has a weakly convergent subsequence
- `lem-pde-box-control-set-weakly-sequentially-closed` · lemma — A pointwise L2 box is weakly sequentially closed
- `thm-linear-elliptic-control-state-and-adjoint-wellposedness` · theorem — Well-posedness of elliptic control state and adjoint equations
- `thm-linear-elliptic-reduced-control-gradient-and-hessian` · theorem — Reduced gradient and coercive Hessian for linear elliptic tracking control
- `thm-linear-elliptic-control-existence-and-variational-inequality` · theorem — Existence, uniqueness, and variational inequality for elliptic PDE control
- `lem-box-control-projection-is-pointwise-clipping` · lemma — The L2 projection onto a pointwise box is clipping
- `cor-linear-elliptic-control-projection-formula` · corollary — The optimal elliptic control is the clipped negative adjoint
- `lem-piecewise-constant-control-h1-projection-error` · lemma — Cell averaging preserves constant box bounds and has an H1 error bound
- `lem-fem-control-gradient-residual-bound` · lemma — State and adjoint Strang bounds give a reduced-gradient error certificate
- `thm-p0-control-fem-o-h-error` · theorem — Piecewise-constant control with shape-regular finite elements has O(h) error
- `thm-variational-fem-control-o-h2-error` · theorem — Variational control discretization has O(h2) error under primal and adjoint H2 regularity
- `thm-parabolic-control-adjoint-gradient-extension` · theorem — Parabolic linear-quadratic control has an energy adjoint and reduced gradient
- `alg-fem-control-proximal-gradient-certified-residual` · algorithm — Finite-budget projected-gradient loop with state-adjoint residual certificates
- `thm-fem-control-proximal-gradient-residual-distance-bound` · theorem — A certified projected-gradient residual bounds distance to the control-mesh optimum
- `alg-fem-control-active-set-box-quadratic-solve` · algorithm — Finite exhaustive active-set solve for a box-constrained positive quadratic
- `thm-fem-control-active-set-box-quadratic-solve-sound-finite` · theorem — The exhaustive box quadratic solve returns the unique minimizer in finite time
- `alg-fem-control-active-set-sqp-with-finite-residual-status` · algorithm — Finite-budget active-set SQP with a certified KKT-system residual status
- `thm-fem-control-active-set-sqp-finite-budget-certificate` · theorem — Finite SQP status is sound and the exact local branch inherits OPT6 conditions
- `lem-p0-box-projection-is-clipped-cell-average` · lemma — The L2 projection onto a cellwise constant box clips cell averages

### `finite-element-pde-constrained-optimization-examples` — Finite element pde constrained optimization — Examples

- `ex-distributed-heat-source-control-with-an-exact-box-optimum` · example — A distributed heat source has an exact box-constrained optimum
- `ex-boundary-control-needs-a-trace-space` · example — A boundary flux control uses the H1 trace and a different control operator
- `ex-bang-bang-control-is-the-alpha-zero-box-limit` · example — The alpha-zero linear box problem has a bang-bang active set

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-element-pde-constrained-optimization` requires `inequality-kkt-duality-and-optimality-certificates`
- `finite-element-pde-constrained-optimization` requires `finite-element-meshes-and-interpolation`
- `finite-element-pde-constrained-optimization` requires `proximal-gradient-and-accelerated-composite-optimization`
- `finite-element-pde-constrained-optimization` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `finite-element-pde-constrained-optimization` requires `parabolic-finite-element-methods`
- `finite-element-pde-constrained-optimization` requires `variational-crimes-and-strang-lemmas`
- `finite-element-pde-constrained-optimization` requires `discrete-continuous-and-pde-adjoint-sensitivities`
- `finite-element-pde-constrained-optimization` requires `sqp-active-set-and-augmented-lagrangian-methods`
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
