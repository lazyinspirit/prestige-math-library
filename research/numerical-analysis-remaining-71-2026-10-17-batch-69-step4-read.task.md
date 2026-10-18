# Step 4 batch reviewer — batch **69**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **69**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["69"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 69 | `isogeometric-galerkin-methods` | A | spline-evaluation-and-interpolation-algorithms, curved-mesh-geometry-and-conservative-mesh-transfer, elasticity-near-incompressibility-and-locking-free-discretization, sard-theorem-and-transversality, finite-element-meshes-and-interpolation, ceas-lemma-and-aubin-nitsche-error-estimates, variational-crimes-and-strang-lemmas |
| 69 | `isogeometric-galerkin-methods-examples` | B | isogeometric-galerkin-methods |

## Your content, in full

### `isogeometric-galerkin-methods` — Isogeometric Galerkin discretization

- `def-nurbs-patch-map-and-rational-spline-space` · definition — Tensor-product NURBS patch maps and rational spline spaces
- `lem-compactly-supported-h1-belongs-to-h-zero` · lemma — Compactly supported H1 functions lie in H1_0
- `lem-tensor-q1-interpolation-h1-estimate` · lemma — Tensor Q1 nodal interpolation has a first-order H1 error bound
- `lem-isogeometric-pullback-energy-norm-equivalence` · lemma — Bi-Lipschitz NURBS maps preserve H1 and energy norms
- `lem-matching-nurbs-patch-traces-give-h1-conformity` · lemma — Matching NURBS patch traces give global H1 conformity
- `lem-positive-nurbs-basis-and-quotient-derivative` · lemma — Positive weights give a bounded partition-of-unity NURBS basis
- `lem-nurbs-laplace-tensor-gap-under-map-error` · lemma — Unit-Laplace pullback tensors are Lipschitz in the Jacobian matrix
- `thm-nurbs-quotient-best-approximation-transfer` · theorem — NURBS quotient spaces transfer numerator H1 approximation
- `lem-nurbs-knot-cell-simplicial-geometry-adapter` · lemma — Matching simplex subdivisions give a NURBS knot-cell geometry interface
- `lem-boundary-preserving-tensor-schoenberg-h1-approximation` · lemma — Greville comparison splines preserve faces and give an explicit H1 estimate
- `thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry` · theorem — Homogeneous knot insertion preserves an admissible NURBS patch
- `lem-nurbs-homogeneous-data-perturbation-geometry-bounds` · lemma — Homogeneous NURBS data errors generate geometry and metric error bounds
- `def-isogeometric-galerkin-patch-space-and-refinement` · definition — Conforming isogeometric Galerkin spaces and h/p/k refinement
- `thm-isogeometric-elasticity-galerkin-quasioptimality` · theorem — Finite-Lamé isogeometric elasticity is conforming and quasi-optimal
- `thm-isogeometric-perturbed-geometry-quadrature-strang-bound` · theorem — Isogeometric geometry and quadrature defects enter through Strang's bound
- `thm-isogeometric-poisson-galerkin-quasioptimality` · theorem — Exact-geometry isogeometric Poisson Galerkin estimate
- `thm-nurbs-tensor-product-l2-approximation` · theorem — Tensorized spline quasi-interpolation gives a NURBS L2 rate
- `thm-nurbs-p1-tensor-spline-h1-error-rate` · theorem — Smooth compactly supported data have a degree-one NURBS energy rate
- `thm-boundary-preserving-nurbs-projector-and-h1-rate` · theorem — Boundary-preserving NURBS projection and matching-patch energy approximation

### `isogeometric-galerkin-methods-examples` — Isogeometric Galerkin discretization — Examples

- `cex-positive-nurbs-weights-do-not-imply-admissible-patch` · counterexample — Positive NURBS weights do not imply an admissible patch
- `ex-isogeometric-quarter-annulus-nurbs-patch` · example — A tensor NURBS patch exactly covers a quarter annulus
- `cex-multipatch-trace-mismatch-not-h1` · counterexample — Matching patch geometry does not repair a field trace jump
- `ex-isogeometric-k-refinement-of-the-identity-patch` · example — Degree elevation and simple-knot insertion preserve the identity patch

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `isogeometric-galerkin-methods` requires `spline-evaluation-and-interpolation-algorithms`
- `isogeometric-galerkin-methods` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
- `isogeometric-galerkin-methods` requires `elasticity-near-incompressibility-and-locking-free-discretization`
- `homogenization-and-multiscale-finite-element-methods` requires `isogeometric-galerkin-methods`
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
