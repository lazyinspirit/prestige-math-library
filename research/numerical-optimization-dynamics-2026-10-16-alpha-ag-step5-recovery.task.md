# Step 5 adjudication — group **ag**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 5, 23, 24: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **5**: `research/numerical-optimization-dynamics-2026-10-16-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/numerical-optimization-dynamics-2026-10-16-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/numerical-optimization-dynamics-2026-10-16-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 5 | `linear-scheme-stability-and-lax-equivalence` | A | numerical-pdes-and-spatial-discretization | 2294 | `countability-and-uncountability`, `the-baire-principles-of-functional-analysis`, `strongly-continuous-semigroups-and-hille-yosida` |
| 5 | `linear-scheme-stability-and-lax-equivalence-examples` | B | numerical-pdes-and-spatial-discretization | 2295 | `linear-scheme-stability-and-lax-equivalence` |
| 23 | `elliptic-finite-difference-methods` | A | numerical-pdes-and-spatial-discretization | 2330 | `lax-milgram-and-weak-elliptic-solutions`, `sobolev-poincare-and-morrey-inequalities`, `linear-scheme-stability-and-lax-equivalence` |
| 23 | `elliptic-finite-difference-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2331 | `elliptic-finite-difference-methods` |
| 24 | `finite-element-meshes-and-interpolation` | A | numerical-pdes-and-spatial-discretization | 2332 | `smooth-approximation-and-sobolev-extension`, `sobolev-poincare-and-morrey-inequalities`, `sobolev-traces-and-zero-boundary-values`, `weak-derivatives-and-sobolev-spaces`, `polynomial-interpolation-and-remainder`, `tangent-cotangent-and-the-differential` |
| 24 | `finite-element-meshes-and-interpolation-examples` | B | numerical-pdes-and-spatial-discretization | 2333 | `finite-element-meshes-and-interpolation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `linear-scheme-stability-and-lax-equivalence` — Linear scheme stability and Lax equivalence (5 item(s))

- `def-common-space-linear-scheme-interface` · definition — Common Banach-space interface for a linear IVP and its time schemes
- `thm-diagonal-heat-semigroup-on-c-zero` · theorem — The diagonal heat semigroup on $c_0$ is contractive and strongly continuous
- `def-finite-grid-common-space-lift` · definition — Finite-grid restriction, reconstruction, and common-space lift
- `thm-lax-equivalence-for-common-banach-space-schemes` · theorem — Lax equivalence for a common Banach-space scheme
- `lem-grid-stability-transfers-under-uniform-norm-comparison` · lemma — Grid and common-space stability agree under uniform norm comparison

### `linear-scheme-stability-and-lax-equivalence-examples` — Linear scheme stability and Lax equivalence — Examples (3 item(s))

- `ex-stable-explicit-grid-heat-step` · example — A stable consistent explicit spectral-grid heat step
- `ex-consistent-unstable-explicit-grid-heat-step` · example — A consistent but unstable explicit spectral-grid heat step
- `ex-mesh-grid-norm-hides-common-space-instability` · example — A mesh-dependent grid norm hides common-space instability

### `elliptic-finite-difference-methods` — Elliptic finite-difference methods (4 item(s))

- `def-rectangular-grid-and-dirichlet-flux-stencil` · definition — Rectangular grid and Dirichlet flux stencil
- `lem-discrete-summation-by-parts-poincare-and-inverse-bound` · lemma — Discrete summation by parts, Poincaré inequality and inverse bound
- `lem-variable-coefficient-flux-stencil-second-order-consistency` · lemma — Second-order consistency of the variable-coefficient flux stencil
- `thm-elliptic-finite-difference-l2-error-on-rectangles` · theorem — Second-order grid L2 error for rectangular Dirichlet flux differences

### `elliptic-finite-difference-methods-examples` — Elliptic finite-difference methods — Examples (4 item(s))

- `ex-first-order-neumann-closure-causes-first-order-error` · example — A one-sided Neumann closure gives only first-order error
- `ex-dirichlet-laplacian-has-uniform-infinity-inverse-bound` · example — A Dirichlet Laplacian inverse is uniformly bounded in the maximum norm
- `ex-variable-coefficient-flux-and-expanded-stencils` · example — Flux and expanded variable-coefficient stencils differ by a second-order term
- `ex-five-point-laplacian-is-exact-on-quadratics` · example — The five-point Laplacian is exact on a quadratic solution

### `finite-element-meshes-and-interpolation` — Finite-element meshes and interpolation (24 item(s))

- `def-matching-affine-simplicial-meshes` · definition — Matching affine simplicial meshes and shape regularity
- `def-oriented-simplicial-cell-chains` · definition — Oriented simplicial cell chains and boundary
- `lem-simplicial-boundary-squared-zero` · lemma — The simplicial boundary of a boundary is zero
- `def-broken-and-conforming-polynomial-spaces` · definition — Broken and conforming polynomial spaces on a matching mesh
- `def-reference-finite-element-and-unisolvent-dofs` · definition — Reference finite elements and unisolvent degrees of freedom
- `lem-unisolvent-dofs-define-reference-interpolant` · lemma — Unisolvent degrees of freedom define a unique reference interpolant
- `lem-reference-polynomial-norm-equivalence` · lemma — Polynomial derivative and face norms are controlled on a reference simplex
- `lem-affine-pullback-weak-derivatives-and-scaling` · lemma — Affine pullback of weak derivatives and Sobolev seminorms
- `lem-shape-regular-affine-simplex-scaling` · lemma — Shape regularity controls affine simplex geometry
- `lem-oriented-facet-cancellation-on-matching-meshes` · lemma — Interior facet orientations cancel in a matching mesh
- `lem-affine-simplex-gauss-green-formula` · lemma — Gauss–Green formula on an affine simplex
- `lem-smooth-density-on-reference-simplex` · lemma — Smooth functions are dense in finite-order Sobolev spaces on a reference simplex
- `thm-reference-simplex-sobolev-extension` · theorem — A reference simplex is an integer-order Sobolev extension domain
- `thm-reference-simplex-trace-and-gauss-green` · theorem — Sobolev face traces and Gauss–Green on a reference simplex
- `thm-matching-continuous-piecewise-polynomials-are-wkp` · theorem — Continuous matching piecewise polynomials belong to W1p
- `thm-zero-boundary-piecewise-polynomials-in-w10p` · theorem — Zero-boundary conforming polynomials lie in W0 1p and satisfy Poincare
- `thm-reference-simplex-poincare-wirtinger` · theorem — Poincare–Wirtinger inequality on a reference simplex
- `thm-bramble-hilbert-on-reference-simplex` · theorem — Bramble–Hilbert approximation on a reference simplex
- `thm-local-finite-element-interpolation-estimates` · theorem — Local interpolation estimates on shape-regular affine meshes
- `thm-polynomial-inverse-and-discrete-trace-estimates` · theorem — Polynomial inverse and discrete trace inequalities
- `def-covariant-contravariant-piola-maps-and-hdiv-hcurl` · definition — Covariant and contravariant Piola maps and H(div)/H(curl) spaces
- `thm-affine-piola-differential-and-trace-moment-identities` · theorem — Affine Piola maps commute with differential operators and preserve moments
- `lem-affine-piola-transport-preserves-commuting-interpolation` · lemma — Affine Piola transport preserves commuting interpolation diagrams
- `thm-lagrange-point-evaluation-threshold-on-reference-simplex` · theorem — Sobolev threshold for Lagrange point evaluations on a reference simplex

### `finite-element-meshes-and-interpolation-examples` — Finite-element meshes and interpolation — Examples (4 item(s))

- `ex-affine-triangle-and-parallelogram-maps` · example — Affine maps for a triangle and a parallelogram
- `ex-shape-regular-and-sliver-triangle-families` · example — A shape-regular family and a degenerating sliver family
- `cex-critical-lagrange-point-evaluation-on-h1-in-two-dimensions` · counterexample — Point evaluation is unbounded at the two-dimensional H1 threshold
- `ex-oriented-boundary-cancellation-on-two-triangles` · example — Opposite orientations cancel on a two-triangle mesh

## Your seams

Your pages depend on another group's:

- `finite-element-meshes-and-interpolation` requires `polynomial-interpolation-and-remainder` (group n, batch 4)

Another group's pages depend on yours:

- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` (group ae) requires your `finite-element-meshes-and-interpolation`
- `finite-element-pde-constrained-optimization` (group ae) requires your `finite-element-meshes-and-interpolation`
- `parabolic-finite-difference-methods` (group ah) requires your `linear-scheme-stability-and-lax-equivalence`
- `parabolic-finite-difference-methods` (group ah) requires your `elliptic-finite-difference-methods`
- `ceas-lemma-and-aubin-nitsche-error-estimates` (group ah) requires your `finite-element-meshes-and-interpolation`
- `hyperbolic-finite-difference-methods` (group ah) requires your `linear-scheme-stability-and-lax-equivalence`
- `parabolic-finite-element-methods` (group ai) requires your `finite-element-meshes-and-interpolation`
- `finite-element-eigenvalue-approximation` (group ai) requires your `finite-element-meshes-and-interpolation`
- `variational-crimes-and-strang-lemmas` (group aj) requires your `finite-element-meshes-and-interpolation`

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
