# Step 4 batch reviewer — batch **22**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **22**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["22"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 22 | `nonlinear-boundary-value-solvers` | A | picard-lindelof-and-first-order-odes, nonlinear-equations-and-newton-methods |
| 22 | `nonlinear-boundary-value-solvers-examples` | B | nonlinear-boundary-value-solvers |

## Your content, in full

### `nonlinear-boundary-value-solvers` — Nonlinear boundary-value solvers

- `def-nonlinear-two-point-bvp-and-boundary-residual` · definition — Square nonlinear two-point boundary-value problems and endpoint residuals
- `lem-c1-ode-flow-on-common-tube` · lemma — Initial-data sensitivity of an ODE flow on a common compact tube
- `def-certified-ivp-approximation-and-sensitivity-interface` · definition — Certified differentiable IVP approximation interface for shooting
- `def-linearized-two-point-bvp-operator-and-conditioning` · definition — Continuous linearized BVP operator and its conditioning
- `def-midpoint-collocation-residual-for-bvps` · definition — Normalized implicit-midpoint collocation residual for a two-point BVP
- `prop-multiple-shooting-residual-zero-iff-bvp-solution` · proposition — Zeros of the exact multiple-shooting residual are exactly BVP solutions
- `prop-shooting-residual-zero-iff-bvp-solution` · proposition — Zeros of the exact shooting residual are exactly BVP solutions
- `alg-midpoint-collocation-for-nonlinear-bvps` · algorithm — Finite-budget implicit-midpoint collocation for a nonlinear BVP
- `lem-midpoint-bvp-discrete-linearized-inverse` · lemma — Uniform inverse bound for the sampled midpoint linearized BVP
- `prop-midpoint-residual-zero-is-collocation` · proposition — Zeros of the normalized midpoint residual are precisely midpoint collocation solutions
- `prop-multiple-shooting-residual-block-jacobian` · proposition — The multiple-shooting Jacobian is bordered block-bidiagonal
- `prop-shooting-residual-derivative` · proposition — Derivative of the nonlinear shooting residual
- `alg-multiple-shooting-for-nonlinear-bvps` · algorithm — Finite-budget multiple shooting for a nonlinear two-point BVP
- `alg-single-shooting-for-nonlinear-bvps` · algorithm — Finite-budget single shooting for a nonlinear two-point BVP
- `thm-midpoint-collocation-local-branch-and-error-budget` · theorem — Local second-order midpoint collocation error with an algebraic residual budget
- `cor-local-newton-convergence-for-midpoint-bvp-collocation` · corollary — Local Newton convergence on the selected midpoint collocation branch
- `cor-local-newton-convergence-for-shooting-bvp-residual` · corollary — Local Newton convergence for a simple nonlinear shooting root
- `thm-shooting-residual-error-budget` · theorem — Shooting error separates IVP integration and nonlinear residual error

### `nonlinear-boundary-value-solvers-examples` — Nonlinear boundary-value solvers — Examples

- `ex-midpoint-collocation-has-two-branches` · example — A midpoint BVP residual can have two simple solution branches
- `ex-unstable-single-shooting-amplifies-error` · example — Single shooting amplifies an initial-slope error on a decaying-mode BVP
- `ex-newton-shooting-fails-from-singular-start` · example — A valid shooting BVP can fail Newton at a singular initial guess

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `nonlinear-boundary-value-solvers` requires `nonlinear-equations-and-newton-methods`
- `periodic-orbit-shooting-collocation-and-floquet-error` requires `nonlinear-boundary-value-solvers`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `nonlinear-boundary-value-solvers`
- `direct-transcription-and-numerical-ode-optimal-control` requires `nonlinear-boundary-value-solvers`
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
