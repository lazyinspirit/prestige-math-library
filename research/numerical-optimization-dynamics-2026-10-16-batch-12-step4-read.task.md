# Step 4 batch reviewer — batch **12**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **12**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `numerical-differentiation-and-derivative-error-control` | A | matrix-norms-condition-numbers-and-numerical-stability, nonlinear-equations-and-newton-methods, polynomial-interpolation-and-remainder, analyticity-liouville-and-morera |
| 12 | `numerical-differentiation-and-derivative-error-control-examples` | B | numerical-differentiation-and-derivative-error-control |

## Your content, in full

### `numerical-differentiation-and-derivative-error-control` — Numerical differentiation and derivative error control

- `def-complex-step-derivative-estimator` · definition — The complex-step derivative estimator and its component-error model
- `def-finite-difference-stencils-and-evaluation-error-model` · definition — Forward and central difference stencils with bounded evaluation errors
- `def-jacobian-and-hessian-vector-difference-products` · definition — Forward and central finite-difference Jacobian-vector and Hessian-vector products
- `def-structural-column-coloring-for-sparse-jacobian-recovery` · definition — The column-interference graph and collision-free coloring for a sparse Jacobian
- `lem-central-difference-has-fourth-order-remainder-under-bounded-fifth-derivative` · lemma — A bounded fifth derivative gives the central-difference expansion required by Richardson extrapolation
- `thm-complex-step-derivative-has-second-order-error-under-holomorphy` · theorem — Complex-step differentiation is second-order for holomorphic functions real on the real axis
- `thm-forward-and-central-difference-truncation-and-evaluation-error-bounds` · theorem — Forward and central differences have first- and second-order error bounds
- `thm-jacobian-and-hessian-vector-products-have-truncation-and-noise-bounds` · theorem — Directional Jacobian and Hessian differences retain Taylor and evaluation-noise errors
- `thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring` · theorem — A collision-free column coloring recovers every structurally sparse Jacobian entry
- `def-richardson-extrapolation-under-a-fourth-order-remainder` · definition — Richardson extrapolation for a central difference with a fourth-order remainder
- `thm-optimal-step-for-forward-and-central-difference-error-bounds` · theorem — The forward and central error bounds have explicit balancing steps
- `thm-richardson-extrapolation-has-fourth-order-error-bound` · theorem — Richardson extrapolation cancels the second-order term with a fourth-order remainder

### `numerical-differentiation-and-derivative-error-control-examples` — Numerical differentiation and derivative error control — Examples

- `cex-colliding-column-colors-do-not-identify-a-jacobian` · counterexample — A colliding color seed cannot distinguish two Jacobians with different entries
- `cex-complex-step-absolute-value-returns-the-wrong-derivative` · counterexample — The absolute-value extension gives a zero complex-step quotient despite its real derivative
- `ex-colored-jacobian-of-two-independent-reactions` · example — One color recovers two separated reaction columns of a sparse Jacobian
- `ex-forward-difference-noise-bound-has-a-balanced-step` · example — A quadratic attains the forward truncation bound and exhibits the balanced noisy step

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `numerical-differentiation-and-derivative-error-control` requires `nonlinear-equations-and-newton-methods`
- `numerical-differentiation-and-derivative-error-control` requires `polynomial-interpolation-and-remainder`
- `numerical-optimization-globalization-and-inexact-certificates` requires `numerical-differentiation-and-derivative-error-control`
- `simulation-gradient-estimation-and-simultaneous-perturbation` requires `numerical-differentiation-and-derivative-error-control`
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
