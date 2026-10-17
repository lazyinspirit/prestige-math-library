# Step 4 batch reviewer — batch **99**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **99**. Step-5 owning group: **ae**.
Return `group: "ae"` and `batches: ["99"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 99 | `polynomial-chaos-stochastic-collocation-and-galerkin-uq` | A | finite-element-meshes-and-interpolation, ceas-lemma-and-aubin-nitsche-error-estimates, gaussian-quadrature, spectral-collocation-and-galerkin-methods, sparse-grid-cubature-and-mixed-regularity, robust-covariance-and-high-dimensional-stability, gaussian-process-support-and-concentration, parabolic-finite-element-methods |
| 99 | `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples` | B | polynomial-chaos-stochastic-collocation-and-galerkin-uq |

## Your content, in full

### `polynomial-chaos-stochastic-collocation-and-galerkin-uq` — Polynomial chaos stochastic collocation and galerkin uq

- `def-finite-product-chaos-input` · definition — Finite product-law polynomial-chaos input data
- `rem-chaos-completeness-and-spectral-rate-caveats` · remark — Completeness and spectral rates require law-specific hypotheses
- `def-chaos-total-degree-and-hyperbolic-cross-index-sets` · definition — Total-degree and hyperbolic-cross chaos index sets
- `def-finite-input-bochner-l2-space` · definition — Bochner L2 space for a finite product-law input
- `lem-positive-moment-gram-produces-univariate-chaos-polynomials` · lemma — Positive moment Gram matrices produce orthonormal polynomial families
- `def-chaos-orthonormal-tensor-basis` · definition — Finite orthonormal polynomial tensor basis
- `def-uniformly-elliptic-affine-random-diffusion` · definition — Uniformly elliptic affine random diffusion model
- `lem-chaos-index-sets-are-finite` · lemma — The stated chaos index sets are finite and contain zero
- `thm-finite-input-bochner-l2-is-hilbert` · theorem — Finite-input Bochner L2 of a separable Hilbert space is Hilbert
- `alg-christoffel-weighted-least-squares-collocation` · algorithm — Christoffel-weighted least-squares polynomial collocation
- `def-finite-chaos-orthogonal-projection` · definition — Finite polynomial-chaos orthogonal projection
- `lem-affine-form-integrable-on-bochner-l2` · lemma — Affine diffusion forms are well-defined on Bochner L2
- `thm-independent-polynomial-chaos-tensors-are-orthonormal` · theorem — Independent polynomial-chaos tensor products are orthonormal
- `def-chaos-quadrature-coefficient-estimator` · definition — Quadrature estimates of polynomial-chaos coefficients
- `lem-christoffel-sampling-law-and-gram-mean` · lemma — Christoffel sampling is normalized and its weighted Gram has mean identity
- `thm-affine-random-diffusion-solution-is-bochner` · theorem — Affine random diffusion has a measurable Bochner solution
- `thm-finite-chaos-projection-parseval-and-moments` · theorem — Finite chaos projection, Parseval identity, mean, and variance
- `thm-product-chaos-and-spatial-density-in-bochner-l2` · theorem — Tensor products are dense in Bochner L2 under scalar and spatial density
- `thm-chaos-quadrature-coefficient-error-split` · theorem — Projection and quadrature errors split in L2
- `thm-christoffel-gram-concentration-bound` · theorem — Bounded-Christoffel sampling stabilizes the empirical Gram matrix
- `thm-stochastic-galerkin-coercivity-and-cea` · theorem — Stochastic Galerkin coercivity and Cea quasi-optimality
- `cor-smolyak-chaos-coefficient-error-bound` · corollary — Smolyak mixed-regularity bounds control chaos coefficient error
- `cor-stochastic-galerkin-fe-interpolation-rate` · corollary — Conditional spatial finite-element rate for stochastic Galerkin
- `thm-weighted-least-squares-stability-and-error` · theorem — Weighted least squares is stable on the good Gram event
- `cor-tensor-gauss-exact-chaos-coefficients` · corollary — Tensor Gaussian rules recover polynomial-chaos coefficients exactly

### `polynomial-chaos-stochastic-collocation-and-galerkin-uq-examples` — Polynomial chaos stochastic collocation and galerkin uq — Examples

- `cex-cauchy-input-has-no-degree-one-chaos` · counterexample — A Cauchy input has no L2 degree-one polynomial chaos
- `cex-finite-support-makes-high-degree-moment-gram-singular` · counterexample — Finite support can make a higher-degree moment Gram matrix singular
- `ex-affine-random-diffusion-uniform-coercivity` · example — A bounded random diffusion coefficient remains uniformly coercive
- `ex-two-state-reaction-rate-chaos` · example — A two-state uncertain reaction rate has an exact degree-one chaos expansion
- `ex-total-degree-versus-tensor-product-work` · example — Total-degree chaos uses fewer modes than a tensor product

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `finite-element-meshes-and-interpolation`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `ceas-lemma-and-aubin-nitsche-error-estimates`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `gaussian-quadrature`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `spectral-collocation-and-galerkin-methods`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `sparse-grid-cubature-and-mixed-regularity`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `parabolic-finite-element-methods`
- `global-sensitivity-anova-and-sobol-estimation` requires `polynomial-chaos-stochastic-collocation-and-galerkin-uq`
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
