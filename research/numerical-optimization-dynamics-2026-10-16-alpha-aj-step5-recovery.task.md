# Step 5 adjudication — group **aj**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 89, 90: 2 A/B pair(s), 4 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **89**: `research/numerical-optimization-dynamics-2026-10-16-batch-89-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **90**: `research/numerical-optimization-dynamics-2026-10-16-batch-90-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 89 | `variational-crimes-and-strang-lemmas` | A | numerical-pdes-and-spatial-discretization | 2462 | `lax-milgram-and-weak-elliptic-solutions`, `composite-quadrature-rules`, `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `gaussian-quadrature` |
| 89 | `variational-crimes-and-strang-lemmas-examples` | B | numerical-pdes-and-spatial-discretization | 2463 | `variational-crimes-and-strang-lemmas` |
| 90 | `spectral-collocation-and-galerkin-methods` | A | numerical-pdes-and-spatial-discretization | 2464 | `fundamental-trigonometric-identities`, `polynomial-interpolation-and-remainder`, `polynomial-approximation-and-chebyshev-interpolation`, `composite-quadrature-rules`, `gaussian-quadrature`, `absolute-convergence-and-the-wiener-algebra`, `finite-fourier-analysis-and-the-fast-fourier-transform` |
| 90 | `spectral-collocation-and-galerkin-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2465 | `spectral-collocation-and-galerkin-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `variational-crimes-and-strang-lemmas` — Variational crimes and Strang lemmas (12 item(s))

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

### `variational-crimes-and-strang-lemmas-examples` — Variational crimes and Strang lemmas — Examples (3 item(s))

- `ex-midpoint-underintegrated-p2-stiffness-loses-coercivity` · example — One midpoint sample destroys a quadratic stiffness coercivity bound
- `ex-nonconforming-residual-breaks-galerkin-orthogonality` · example — A broken P1 test exposes a nonzero consistency residual
- `ex-two-node-gauss-polynomial-exactness-and-x4-error` · example — Two-node Gauss is exact through degree three but not for x to the fourth

### `spectral-collocation-and-galerkin-methods` — Spectral collocation and Galerkin methods (29 item(s))

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

### `spectral-collocation-and-galerkin-methods-examples` — Spectral collocation and Galerkin methods — Examples (5 item(s))

- `ex-periodic-fourier-collocation-exactness-and-nyquist-mode` · example — Four-point Fourier collocation differentiates the Nyquist cosine at its nodes
- `ex-chebyshev-lobatto-endpoint-clustering` · example — Chebyshev–Lobatto nodes cluster quadratically at the endpoints
- `ex-analytic-and-nonsmooth-chebyshev-coefficient-decay` · example — Analytic and nonsmooth data have geometric and algebraic Chebyshev coefficient decay
- `ex-quadratic-product-aliases-on-even-fourier-grid` · example — A quadratic Fourier product aliases two high modes on an even grid
- `ex-gaussian-and-simpson-weighted-mass-matrix-check` · example — Gaussian and Simpson mass assembly give distinct exact and approximate checks

## Your seams

Your pages depend on another group's:

- `variational-crimes-and-strang-lemmas` requires `composite-quadrature-rules` (group p, batch 20)
- `variational-crimes-and-strang-lemmas` requires `finite-element-meshes-and-interpolation` (group ag, batch 24)
- `variational-crimes-and-strang-lemmas` requires `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah, batch 38)
- `variational-crimes-and-strang-lemmas` requires `gaussian-quadrature` (group t, batch 82)
- `spectral-collocation-and-galerkin-methods` requires `polynomial-interpolation-and-remainder` (group n, batch 4)
- `spectral-collocation-and-galerkin-methods` requires `polynomial-approximation-and-chebyshev-interpolation` (group p, batch 19)
- `spectral-collocation-and-galerkin-methods` requires `composite-quadrature-rules` (group p, batch 20)
- `spectral-collocation-and-galerkin-methods` requires `gaussian-quadrature` (group t, batch 82)

Another group's pages depend on yours:

- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `variational-crimes-and-strang-lemmas`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae) requires your `spectral-collocation-and-galerkin-methods`
- `finite-element-pde-constrained-optimization` (group ae) requires your `variational-crimes-and-strang-lemmas`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-optimization-dynamics-2026-10-16`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
