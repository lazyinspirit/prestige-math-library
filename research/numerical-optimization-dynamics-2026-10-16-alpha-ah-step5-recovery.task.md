# Step 5 adjudication — group **ah**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 37, 38, 55: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/numerical-optimization-dynamics-2026-10-16-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **38**: `research/numerical-optimization-dynamics-2026-10-16-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **55**: `research/numerical-optimization-dynamics-2026-10-16-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 37 | `parabolic-finite-difference-methods` | A | numerical-pdes-and-spatial-discretization | 2358 | `heat-equation-maximum-principles-duhamel-and-smoothing`, `linear-scheme-stability-and-lax-equivalence`, `elliptic-finite-difference-methods` |
| 37 | `parabolic-finite-difference-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2359 | `parabolic-finite-difference-methods` |
| 38 | `ceas-lemma-and-aubin-nitsche-error-estimates` | A | numerical-pdes-and-spatial-discretization | 2360 | `interior-and-boundary-sobolev-elliptic-regularity`, `lax-milgram-and-weak-elliptic-solutions`, `finite-element-meshes-and-interpolation` |
| 38 | `ceas-lemma-and-aubin-nitsche-error-estimates-examples` | B | numerical-pdes-and-spatial-discretization | 2361 | `ceas-lemma-and-aubin-nitsche-error-estimates` |
| 55 | `hyperbolic-finite-difference-methods` | A | numerical-pdes-and-spatial-discretization | 2394 | `wave-energy-finite-propagation-and-huygens`, `linear-scheme-stability-and-lax-equivalence`, `stationary-iterations-and-relaxation`, `parabolic-finite-difference-methods`, `finite-fourier-analysis-and-the-fast-fourier-transform` |
| 55 | `hyperbolic-finite-difference-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2395 | `hyperbolic-finite-difference-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `parabolic-finite-difference-methods` — Parabolic finite-difference methods (9 item(s))

- `def-parabolic-theta-finite-difference-scheme` · definition — Fully discrete θ heat finite-difference scheme
- `lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint` · lemma — Symmetry and positivity of the rectangular Dirichlet heat operator
- `lem-periodic-heat-difference-amplification-symbol` · lemma — Periodic heat-stencil eigenvalues and θ amplification factor
- `thm-parabolic-theta-scheme-local-truncation-error` · theorem — Local truncation residual for the θ heat scheme
- `lem-parabolic-theta-step-exists-uniquely` · lemma — Unique solvability of an implicit θ heat step
- `thm-forward-euler-heat-cfl-and-nyquist-instability` · theorem — Forward Euler heat CFL stability and sharp Nyquist instability
- `thm-parabolic-theta-l2-stability-for-half-theta` · theorem — Unconditional weighted L2 stability for θ at least one half
- `thm-parabolic-theta-scheme-global-error-bound` · theorem — Global weighted L2 error from the complete parabolic residual
- `thm-theta-scheme-discrete-maximum-principle` · theorem — A boundary-aware discrete maximum principle for the θ scheme

### `parabolic-finite-difference-methods-examples` — Parabolic finite-difference methods — Examples (4 item(s))

- `ex-backward-euler-damps-high-frequencies` · example — Backward Euler strongly damps high periodic modes
- `ex-crank-nicolson-preserves-high-frequency-amplitude` · example — Crank–Nicolson is stable but does not strongly damp the highest mode
- `ex-forward-euler-parabolic-cfl-threshold-and-nyquist-growth` · example — Forward Euler at and above the parabolic CFL threshold
- `ex-continuous-and-discrete-heat-maximum-principles` · example — Continuous and discrete heat maximum bounds on sampled data

### `ceas-lemma-and-aubin-nitsche-error-estimates` — Céa and Aubin–Nitsche error estimates (9 item(s))

- `lem-galerkin-orthogonality-for-conforming-galerkin-approximations` · lemma — Galerkin orthogonality for conforming approximations
- `thm-adjoint-problem-for-bounded-coercive-variational-forms` · theorem — Well-posedness of the adjoint variational problem
- `cor-poisson-adjoint-h2-estimate-from-global-regularity` · corollary — A global H² bound for the Poisson adjoint on a C² domain
- `lem-two-cell-hat-and-quadratic-functions-lie-in-h10` · lemma — The two-cell hat and quadratic functions belong to H¹₀
- `thm-cea-quasi-optimality-for-conforming-galerkin-approximations` · theorem — Céa quasi-optimality for coercive conforming Galerkin problems
- `cor-symmetric-galerkin-best-approximation-in-energy-norm` · corollary — Hermitian Galerkin solutions are best in the energy norm
- `thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity` · theorem — Aubin–Nitsche L² error estimate from adjoint approximation
- `cor-shape-regular-affine-fe-primal-energy-approximation` · corollary — Primal H¹ approximation on shape-regular affine finite-element meshes
- `cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation` · corollary — The h^(r+s) L² rate under primal and dual approximation

### `ceas-lemma-and-aubin-nitsche-error-estimates-examples` — Céa and Aubin–Nitsche error estimates — Examples (3 item(s))

- `ex-nonsymmetric-coercive-form-attains-cea-factor` · example — A nonsymmetric coercive form attains the M over alpha factor
- `ex-symmetric-poisson-best-approximation-on-two-cell-mesh` · example — A two-cell linear finite element best approximation for Poisson
- `cex-reentrant-corner-poisson-solution-not-h2` · counterexample — A reentrant corner prevents automatic H² dual regularity

### `hyperbolic-finite-difference-methods` — Hyperbolic finite-difference methods (11 item(s))

- `def-uniform-grid-and-difference-operators` · definition — Uniform periodic, infinite, and Dirichlet grid conventions
- `def-periodic-one-way-advection-schemes` · definition — Periodic advection schemes and the finite-interval upwind row
- `def-centered-leapfrog-wave-scheme` · definition — Centered leapfrog wave recurrence with Dirichlet and periodic rows
- `lem-dirichlet-grid-summation-by-parts` · lemma — One-dimensional discrete summation by parts with boundary terms
- `lem-dirichlet-grid-poincare-inequality` · lemma — A finite-grid Poincare inequality for zero endpoint values
- `thm-smooth-advection-stencils-consistent` · theorem — Smooth consistency orders for the five periodic advection stencils
- `thm-dirichlet-leapfrog-discrete-energy` · theorem — Coercive discrete energy for the Dirichlet leapfrog wave scheme
- `lem-periodic-advection-amplification-symbols` · lemma — Amplification symbols for periodic scalar advection stencils
- `thm-periodic-centered-wave-amplification-and-endpoint` · theorem — Periodic leapfrog amplification, finite-time bounds, and the Nyquist endpoint
- `thm-periodic-advection-power-stability` · theorem — Scheme-specific periodic power stability for scalar advection
- `thm-nearest-neighbor-cfl-domain-condition` · theorem — The nearest-neighbor CFL condition is necessary but not sufficient

### `hyperbolic-finite-difference-methods-examples` — Hyperbolic finite-difference methods — Examples (4 item(s))

- `ex-wave-cfl-endpoint-and-energy-breakdown` · example — The Nyquist mode at and beyond the leapfrog CFL endpoint
- `ex-upwind-versus-downwind-advection` · example — Upwind damping versus downwind growth on a periodic grid
- `ex-centered-advection-consistent-but-unstable` · example — Centered advection is consistent and unstable under the CFL bound
- `ex-grid-fourier-stability-needs-a-common-space-lift` · example — Grid Fourier stability alone does not instantiate Lax equivalence

## Your seams

Your pages depend on another group's:

- `parabolic-finite-difference-methods` requires `linear-scheme-stability-and-lax-equivalence` (group ag, batch 5)
- `parabolic-finite-difference-methods` requires `elliptic-finite-difference-methods` (group ag, batch 23)
- `ceas-lemma-and-aubin-nitsche-error-estimates` requires `finite-element-meshes-and-interpolation` (group ag, batch 24)
- `hyperbolic-finite-difference-methods` requires `linear-scheme-stability-and-lax-equivalence` (group ag, batch 5)
- `hyperbolic-finite-difference-methods` requires `stationary-iterations-and-relaxation` (group o, batch 18)

Another group's pages depend on yours:

- `renewal-age-and-size-structured-numerical-methods` (group j) requires your `hyperbolic-finite-difference-methods`
- `discrete-continuous-and-pde-adjoint-sensitivities` (group ad) requires your `ceas-lemma-and-aubin-nitsche-error-estimates`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae) requires your `ceas-lemma-and-aubin-nitsche-error-estimates`
- `finite-element-pde-constrained-optimization` (group ae) requires your `ceas-lemma-and-aubin-nitsche-error-estimates`
- `parabolic-finite-element-methods` (group ai) requires your `ceas-lemma-and-aubin-nitsche-error-estimates`
- `finite-element-eigenvalue-approximation` (group ai) requires your `ceas-lemma-and-aubin-nitsche-error-estimates`
- `variational-crimes-and-strang-lemmas` (group aj) requires your `ceas-lemma-and-aubin-nitsche-error-estimates`

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
