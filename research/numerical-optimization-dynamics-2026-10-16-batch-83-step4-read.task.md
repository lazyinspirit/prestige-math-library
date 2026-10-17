# Step 4 batch reviewer — batch **83**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **83**. Step-5 owning group: **ab**.
Return `group: "ab"` and `batches: ["83"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 83 | `riemannian-optimization-on-stiefel-and-grassmann-manifolds` | A | gradient-like-vector-fields-and-morse-trajectories, riemannian-metrics-length-distance-and-volume, finite-precision-direct-factorizations, krylov-methods-and-lanczos-convergence, nonconvex-line-search-and-inexact-newton-methods, trust-region-and-cubic-regularization-methods, topological-vector-bundles-and-grassmannian-classification, products-segre-and-veronese-embeddings-and-grassmannians, symplectic-manifolds-moser-stability-and-darboux-weinstein-theory |
| 83 | `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples` | B | riemannian-optimization-on-stiefel-and-grassmann-manifolds |

## Your content, in full

### `riemannian-optimization-on-stiefel-and-grassmann-manifolds` — Riemannian optimization on stiefel and grassmann manifolds

- `def-stiefel-grassmann-optimization-conventions` · definition — Real Stiefel and Grassmann optimization conventions
- `def-complex-stiefel-grassmann-optimization-conventions` · definition — Complex Stiefel and Grassmann optimization conventions
- `prop-stiefel-grassmann-are-compact` · proposition — Finite-dimensional Stiefel and Grassmann manifolds are compact
- `prop-complex-stiefel-grassmann-are-compact` · proposition — Finite-dimensional complex Stiefel and Grassmann manifolds are compact
- `thm-stiefel-grassmann-tangent-projections` · theorem — Tangent spaces and Frobenius projections on Stiefel and Grassmann
- `thm-complex-stiefel-grassmann-tangent-projections` · theorem — Complex Stiefel and Grassmann tangent projections
- `prop-stiefel-grassmann-riemannian-gradient-formulas` · proposition — Projected Euclidean gradients are the Stiefel and Grassmann gradients
- `def-complex-grassmann-polar-retraction` · definition — Polar retraction on the complex Grassmannian
- `thm-complex-grassmann-polar-retraction-is-first-order` · theorem — The complex Grassmann polar map is a first-order retraction
- `prop-complex-grassmann-projector-energy-gradient` · proposition — Gradient of a unitary-invariant Hermitian projector energy
- `def-stiefel-qr-polar-retractions` · definition — QR and polar retractions on Stiefel and Grassmann
- `thm-stiefel-retractions-are-first-order` · theorem — The QR and polar maps are first-order Stiefel and Grassmann retractions
- `alg-riemannian-armijo-backtracking` · algorithm — Finite-budget retraction Armijo backtracking
- `alg-riemannian-trust-region` · algorithm — Finite-budget Riemannian trust-region method
- `def-stiefel-grassmann-projected-vector-transport` · definition — Projected vector transport on Stiefel and Grassmann
- `lem-riemannian-trust-region-ratio-accuracy-for-small-radii` · lemma — Retraction trust-region ratios are accurate at small radii
- `prop-stiefel-grassmann-vector-transport-is-tangent` · proposition — Projected vector transports return tangent representatives
- `thm-retraction-armijo-acceptance-and-step-lower-bound` · theorem — Uniform pullback smoothness guarantees an Armijo step
- `thm-retraction-armijo-best-iterate-complexity` · theorem — Retraction Armijo reaches an epsilon-gradient iterate in finite budget
- `thm-riemannian-trust-region-first-order-complexity` · theorem — Riemannian trust regions reach an epsilon-gradient iterate

### `riemannian-optimization-on-stiefel-and-grassmann-manifolds-examples` — Riemannian optimization on stiefel and grassmann manifolds — Examples

- `ex-repeated-eigenspace-on-grassmann` · example — A repeated eigenvalue gives a continuum of Grassmann minimizers
- `ex-riemannian-stiefel-nonconvex-saddle` · example — A strict saddle of a quadratic Stiefel objective
- `ex-trace-eigenspace-optimization-with-lanczos-start-angle` · example — A trace eigenspace objective and a Lanczos start-angle bound

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `finite-precision-direct-factorizations`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `krylov-methods-and-lanczos-convergence`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `nonconvex-line-search-and-inexact-newton-methods`
- `riemannian-optimization-on-stiefel-and-grassmann-manifolds` requires `trust-region-and-cubic-regularization-methods`
- `minimum-energy-paths-string-neb-and-saddle-certificates` requires `riemannian-optimization-on-stiefel-and-grassmann-manifolds`
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `riemannian-optimization-on-stiefel-and-grassmann-manifolds`
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
