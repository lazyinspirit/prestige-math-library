# Step 4 batch reviewer — batch **90**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **90**. Step-5 owning group: **aj**.
Return `group: "aj"` and `batches: ["90"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 90 | `spectral-collocation-and-galerkin-methods` | A | fundamental-trigonometric-identities, polynomial-interpolation-and-remainder, polynomial-approximation-and-chebyshev-interpolation, composite-quadrature-rules, gaussian-quadrature, absolute-convergence-and-the-wiener-algebra, finite-fourier-analysis-and-the-fast-fourier-transform |
| 90 | `spectral-collocation-and-galerkin-methods-examples` | B | spectral-collocation-and-galerkin-methods |

## Your content, in full

### `spectral-collocation-and-galerkin-methods` — Spectral collocation and Galerkin methods

- `def-periodic-fourier-collocation-grid` · definition — Periodic Fourier collocation grid and even-grid Nyquist convention
- `lem-periodic-fourier-mode-aliasing-under-sampling` · lemma — Periodic Fourier modes alias modulo the grid size
- `alg-periodic-fourier-collocation-differentiation-matrix` · algorithm — Periodic Fourier collocation differentiation matrix
- `thm-periodic-fourier-collocation-differentiation-is-exact` · theorem — Periodic Fourier collocation differentiates its interpolant exactly
- `def-chebyshev-gauss-lobatto-collocation-grid` · definition — Chebyshev–Gauss–Lobatto collocation grid
- `lem-chebyshev-lobatto-mode-aliasing` · lemma — Chebyshev–Lobatto interpolation folds polynomial modes
- `alg-chebyshev-gauss-lobatto-differentiation-matrix` · algorithm — Chebyshev–Gauss–Lobatto polynomial differentiation matrix
- `thm-chebyshev-gauss-lobatto-differentiation-is-exact` · theorem — Chebyshev–Gauss–Lobatto differentiation is exact on the interpolant
- `alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination` · algorithm — Boundary-eliminated Chebyshev collocation for a two-point Dirichlet BVP
- `thm-chebyshev-dirichlet-collocation-status-and-system` · theorem — Boundary elimination returns exactly the finite Chebyshev collocation system
- `def-chebyshev-arcsine-weighted-l2-pairing` · definition — Arcsine-weighted inner product on the Chebyshev interval
- `lem-chebyshev-polynomials-orthogonal-in-arcsine-weight` · lemma — Chebyshev polynomials are orthogonal for the arcsine weight
- `def-chebyshev-weighted-spectral-sobolev-scale` · definition — Chebyshev weighted spectral Sobolev scale and projection
- `thm-chebyshev-weighted-orthogonal-projection-rate` · theorem — Weighted Chebyshev projection has its spectral Sobolev rate
- `thm-chebyshev-lobatto-interpolation-near-best-weighted-error` · theorem — Chebyshev–Lobatto interpolation inherits a weighted near-best bound
- `thm-chebyshev-lobatto-interpolation-rate-under-spectral-sobolev-regularity` · theorem — Chebyshev–Lobatto interpolation has an algebraic weighted spectral-Sobolev rate
- `thm-chebyshev-lobatto-pointwise-remainder-bound` · theorem — Chebyshev–Lobatto interpolation remainder bound
- `thm-chebyshev-lobatto-interpolation-exponential-rate-for-analytic-data` · theorem — Analytic ellipse data give exponential Chebyshev–Lobatto interpolation error
- `alg-chebyshev-composite-simpson-weighted-mass-matrix` · algorithm — Composite-Simpson assembly of the Chebyshev weighted mass matrix
- `thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix` · theorem — Composite Simpson error bound for Chebyshev weighted mass entries
- `def-weighted-orthogonal-polynomial-galerkin-space` · definition — Weighted orthogonal-polynomial Galerkin spaces and spectral scale
- `thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined` · theorem — The weighted orthogonal-polynomial Galerkin projection is well-defined
- `alg-gaussian-orthogonal-polynomial-galerkin-mass-matrix` · algorithm — Assemble a weighted Galerkin mass matrix from Gaussian nodes
- `thm-gaussian-orthogonal-polynomial-galerkin-mass-matrix-exact` · theorem — Gaussian quadrature exactly assembles the orthogonal Galerkin mass matrix
- `def-legendre-polynomial-family-and-l2-pairing` · definition — Legendre polynomials by Rodrigues' formula and their unweighted pairing
- `lem-legendre-weighted-derivative-orthogonality-and-norm` · lemma — Legendre polynomials have explicit norms and weighted derivative orthogonality
- `def-legendre-weighted-sobolev-scale` · definition — Legendre weighted spectral-Sobolev scale and projection
- `thm-legendre-weighted-projection-error-rate` · theorem — Legendre weighted projection has its spectral-Sobolev rate
- `rem-chebyshev-collocation-conditioning-and-spectral-radius-scope` · remark — Chebyshev collocation spectral-radius growth is setup-specific conditioning context

### `spectral-collocation-and-galerkin-methods-examples` — Spectral collocation and Galerkin methods — Examples

- `ex-periodic-fourier-collocation-exactness-and-nyquist-mode` · example — Four-point Fourier collocation differentiates the Nyquist cosine at its nodes
- `ex-chebyshev-lobatto-endpoint-clustering` · example — Chebyshev–Lobatto nodes cluster quadratically at the endpoints
- `ex-analytic-and-nonsmooth-chebyshev-coefficient-decay` · example — Analytic and nonsmooth data have geometric and algebraic Chebyshev coefficient decay
- `ex-quadratic-product-aliases-on-even-fourier-grid` · example — A quadratic Fourier product aliases two high modes on an even grid
- `ex-gaussian-and-simpson-weighted-mass-matrix-check` · example — Gaussian and Simpson mass assembly give distinct exact and approximate checks

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `spectral-collocation-and-galerkin-methods` requires `polynomial-interpolation-and-remainder`
- `spectral-collocation-and-galerkin-methods` requires `polynomial-approximation-and-chebyshev-interpolation`
- `spectral-collocation-and-galerkin-methods` requires `composite-quadrature-rules`
- `spectral-collocation-and-galerkin-methods` requires `gaussian-quadrature`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `spectral-collocation-and-galerkin-methods`
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
