# Step 4 batch reviewer — batch **89**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **89**. Step-5 owning group: **aj**.
Return `group: "aj"` and `batches: ["89"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 89 | `variational-crimes-and-strang-lemmas` | A | lax-milgram-and-weak-elliptic-solutions, composite-quadrature-rules, finite-element-meshes-and-interpolation, ceas-lemma-and-aubin-nitsche-error-estimates, gaussian-quadrature |
| 89 | `variational-crimes-and-strang-lemmas-examples` | B | variational-crimes-and-strang-lemmas |

## Your content, in full

### `variational-crimes-and-strang-lemmas` — Variational crimes and Strang lemmas

- `def-variational-crime-error-framework` · definition — Variational-crime settings and consistency defects
- `lem-one-dimensional-p1-interpolation-error` · lemma — One-dimensional P1 interpolation has a first-derivative error bound
- `lem-one-dimensional-zero-boundary-poincare` · lemma — Zero-boundary Poincaré inequality on the unit interval
- `def-geometry-lift-and-tensor-discrepancy` · definition — Geometry lift and transformed elliptic tensor
- `lem-discrete-form-perturbation-preserves-coercivity` · lemma — A bounded form defect preserves discrete coercivity
- `thm-first-strang-lemma-for-conforming-perturbed-galerkin` · theorem — First Strang estimate for conforming perturbed Galerkin problems
- `thm-second-strang-lemma-for-nonconforming-galerkin` · theorem — Second Strang estimate with a bounded extension to the comparison space
- `lem-geometry-tensor-gap-bounds-cellwise-form-defect` · lemma — Cellwise geometry tensor gaps bound form error and stability loss
- `lem-midpoint-quadrature-defect-for-p1-stiffness` · lemma — Midpoint quadrature defect for one-dimensional P1 stiffness
- `cor-midpoint-quadrature-strang-error-for-p1` · corollary — A midpoint-quadrature P1 solve has an explicit Strang error budget
- `cor-perturbed-conforming-galerkin-bound-from-cea` · corollary — Perturbed conforming solves are controlled by the exact Galerkin baseline
- `cor-shape-regular-fe-strang-error-bound` · corollary — Shape-regular affine finite elements supply the Strang approximation term

### `variational-crimes-and-strang-lemmas-examples` — Variational crimes and Strang lemmas — Examples

- `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity` · example — One midpoint sample destroys a quadratic stiffness coercivity bound
- `ex-nonconforming-residual-breaks-galerkin-orthogonality` · example — A broken P1 test exposes a nonzero consistency residual
- `ex-two-node-gauss-polynomial-exactness-and-x4-error` · example — Two-node Gauss is exact through degree three but not for x to the fourth

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `variational-crimes-and-strang-lemmas` requires `composite-quadrature-rules`
- `variational-crimes-and-strang-lemmas` requires `finite-element-meshes-and-interpolation`
- `variational-crimes-and-strang-lemmas` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `variational-crimes-and-strang-lemmas` requires `gaussian-quadrature`
- `discrete-continuous-and-pde-adjoint-sensitivities` requires `variational-crimes-and-strang-lemmas`
- `finite-element-pde-constrained-optimization` requires `variational-crimes-and-strang-lemmas`
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
