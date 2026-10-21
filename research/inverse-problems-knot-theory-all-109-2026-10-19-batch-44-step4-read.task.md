# Step 4 batch reviewer — batch **44**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **44**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["44"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 44 | `numerical-pde-inversion-and-adjoint-error-control` | A | nonlinear-inverse-problems-and-tangential-cone-conditions, nonlinear-tikhonov-existence-and-stability, operator-approximation-and-regularization-error, finite-element-pde-constrained-optimization, discrete-continuous-and-pde-adjoint-sensitivities, finite-element-meshes-and-interpolation, hilbert-space-geometry-and-riesz-representation, nonsmooth-contact-time-stepping-and-projections |
| 44 | `numerical-pde-inversion-and-adjoint-error-control-examples` | B | numerical-pde-inversion-and-adjoint-error-control |

## Your content, in full

### `numerical-pde-inversion-and-adjoint-error-control` — PDE-constrained inversion and adjoint error control

- `def-ip-pde-solver-admissibility-contract` · definition — Finite-element PDE solver admissibility and certificate contract
- `lem-ip-finite-element-reduced-gradient-from-discrete-adjoint` · lemma — The finite-element discrete adjoint gives the reduced gradient
- `lem-ip-linear-finite-element-solve-residual-controls-state-error` · lemma — Certified inverse bounds turn finite-element solve residuals into state and adjoint error bounds
- `prop-ip-discrete-adjoint-gradient-and-residual-status` · proposition — Certified discrete-adjoint residuals give sound finite statuses
- `alg-ip-finite-element-pde-tikhonov` · algorithm — Finite-budget finite-element PDE Tikhonov inversion
- `thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination` · theorem — Finite-element PDE Tikhonov statuses are sound and terminate

### `numerical-pde-inversion-and-adjoint-error-control-examples` — PDE-constrained inversion and adjoint error control — Examples and Counterexamples

- `ex-ip-pde-cfl-invalid-iterate` · example — A CFL-violating finite-element iterate is rejected before inversion
- `cex-ip-pde-biased-under-solved-adjoint-gradient` · counterexample — An unchecked under-solved adjoint can reverse the reduced gradient
- `ex-ip-finite-element-mesh-error-at-zero-solve-residual` · example — A zero algebraic solve residual leaves a separate finite-element model error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `numerical-pde-inversion-and-adjoint-error-control` requires `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `numerical-pde-inversion-and-adjoint-error-control` requires `nonlinear-tikhonov-existence-and-stability`
- `numerical-pde-inversion-and-adjoint-error-control` requires `operator-approximation-and-regularization-error`
- `inverse-problem-benchmarking-and-shift` requires `numerical-pde-inversion-and-adjoint-error-control`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
