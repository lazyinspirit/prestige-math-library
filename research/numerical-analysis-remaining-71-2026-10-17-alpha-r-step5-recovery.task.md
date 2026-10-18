# Step 5 adjudication — group **r**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 52, 53, 54: 3 A/B pair(s), 6 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **52**: `research/numerical-analysis-remaining-71-2026-10-17-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/numerical-analysis-remaining-71-2026-10-17-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/numerical-analysis-remaining-71-2026-10-17-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 52 | `nitsche-methods-for-weak-boundary-enforcement` | A | numerical-pdes-and-spatial-discretization | 2658 | `variational-crimes-and-strang-lemmas`, `fourier-multipliers-and-sobolev-characterisations` |
| 52 | `nitsche-methods-for-weak-boundary-enforcement-examples` | B | numerical-pdes-and-spatial-discretization | 2659 | `nitsche-methods-for-weak-boundary-enforcement` |
| 53 | `discontinuous-galerkin-methods` | A | numerical-pdes-and-spatial-discretization | 2660 | `variational-crimes-and-strang-lemmas`, `finite-element-meshes-and-interpolation`, `ceas-lemma-and-aubin-nitsche-error-estimates` |
| 53 | `discontinuous-galerkin-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2661 | `discontinuous-galerkin-methods` |
| 54 | `adaptive-finite-element-methods` | A | numerical-pdes-and-spatial-discretization | 2662 | `variational-crimes-and-strang-lemmas` |
| 54 | `adaptive-finite-element-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2663 | `adaptive-finite-element-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nitsche-methods-for-weak-boundary-enforcement` — Nitsche methods for weak boundary enforcement (14 item(s))

- `def-nitsche-restriction-bessel-potential-sobolev-spaces` · definition — Restriction Bessel-potential spaces on polyhedral domains
- `lem-nitsche-h-one-zero-functions-have-zero-facet-traces` · lemma — Zero facet traces of functions in H1_0 on an affine mesh
- `lem-nitsche-local-polynomial-flux-inverse-trace` · lemma — Local inverse trace bound for a polynomial normal flux
- `lem-nitsche-fractional-face-trace-on-simplex` · lemma — Fractional Bessel-potential traces on simplex facets
- `lem-nitsche-scaled-fractional-simplex-trace` · lemma — Scaled fractional traces on shape-regular simplices
- `def-nitsche-boundary-penalty-forms` · definition — Symmetric and nonsymmetric Nitsche boundary forms
- `lem-nitsche-global-boundary-flux-bound` · lemma — Global boundary-flux estimate on a matching mesh
- `lem-nitsche-fractional-weak-green-and-flux-cancellation` · lemma — Fractional weak Green identity and interior flux cancellation
- `thm-nitsche-zero-boundary-fractional-comparison-interpolation` · theorem — Zero-boundary fractional interpolation in the Nitsche comparison norm
- `lem-nitsche-global-fractional-boundary-flux-trace` · lemma — Mesh-uniform fractional boundary flux trace
- `lem-nitsche-penalty-coercivity` · lemma — Nitsche coercivity above the inverse-trace threshold
- `thm-nitsche-consistency-and-energy-quasioptimality` · theorem — Nitsche consistency and energy quasi-optimality
- `thm-nonsymmetric-nitsche-l2-error-with-boundary-defect` · theorem — Nonsymmetric Nitsche L2 estimate with its boundary consistency defect
- `thm-symmetric-nitsche-l2-error-under-dual-regularity` · theorem — Symmetric Nitsche L2 estimate under dual regularity and Nitsche approximation

### `nitsche-methods-for-weak-boundary-enforcement-examples` — Nitsche methods for weak boundary enforcement — Examples (3 item(s))

- `ex-nitsche-exact-affine-data-weak-imposition` · example — Exact affine data under weak imposition
- `ex-nitsche-penalty-below-and-above-coercivity-threshold` · example — Penalties below and above the Nitsche coercivity threshold
- `ex-nitsche-symmetric-and-nonsymmetric-l2-defects` · example — Symmetric cancellation and the nonsymmetric L2 boundary defect

### `discontinuous-galerkin-methods` — Symmetric interior-penalty discontinuous Galerkin (11 item(s))

- `lem-sipdg-physical-simplex-trace-green` · lemma — Sobolev traces and Gauss–Green formula on physical simplices
- `def-sipdg-jump-average-convention` · definition — Jump and average conventions for symmetric interior-penalty DG
- `def-sipdg-bilinear-form-and-energy-norm` · definition — Symmetric interior-penalty DG form and energy seminorm
- `lem-sipdg-discrete-flux-inverse-bound` · lemma — Discrete inverse-trace bound for SIPDG coefficient fluxes
- `lem-sipdg-energy-seminorm-is-a-norm` · lemma — The SIPDG broken energy expression is definite
- `lem-sipdg-boundedness-augmented-norm` · lemma — Boundedness of the SIPDG form in the augmented norm
- `thm-sipdg-exact-consistency` · theorem — Exact consistency of the symmetric interior-penalty DG form
- `lem-sipdg-adjoint-consistency-h2` · lemma — SIPDG adjoint consistency for piecewise H2 dual solutions
- `thm-sipdg-coercivity-large-penalty` · theorem — SIPDG coercivity above the discrete inverse-trace threshold
- `thm-sipdg-l2-error-under-adjoint-regularity` · theorem — SIPDG L2 error under adjoint consistency and dual approximation
- `thm-sipdg-energy-error-estimate` · theorem — A direct Strang-type energy error estimate for SIPDG

### `discontinuous-galerkin-methods-examples` — Symmetric interior-penalty discontinuous Galerkin — Examples (3 item(s))

- `ex-sipdg-broken-function-is-not-h1` · example — A broken polynomial with a nonzero jump is not globally H1
- `ex-sipdg-one-dimensional-interior-jump` · example — One-dimensional SIPDG jump and penalty calculation
- `ex-sipdg-small-penalty-loses-coercivity` · example — A too-small SIPDG penalty destroys coercivity

### `adaptive-finite-element-methods` — Adaptive finite-element methods (20 item(s))

- `cor-afem-constant-convection-weak-wellposedness` · corollary — Weak well-posedness for constant divergence-free convection
- `def-afem-local-moment-interpolant` · definition — A local moment interpolant for conforming P1 meshes
- `def-afem-nvb-labelled-triangulation-family` · definition — Compatible 2D newest-vertex-bisection meshes
- `def-afem-p1-residual-estimator-and-data-oscillation` · definition — Residual indicators and data oscillation for P1 AFEM
- `lem-afem-vertex-patch-poincare` · lemma — Uniform Poincare inequalities on vertex and cell patches
- `alg-dorfler-marking-and-conforming-nvb-refinement` · algorithm — Dorfler marking and conforming newest-vertex refinement
- `def-afem-p1-approximation-class` · definition — The P1 AFEM approximation class
- `lem-afem-convection-quasi-orthogonality-under-fine-mesh` · lemma — Quasi-orthogonality for constant convection on a fine initial mesh
- `lem-afem-nvb-shape-regularity-and-three-generation-properties` · lemma — Shape regularity and local reduction under 2D newest-vertex bisection
- `lem-afem-p1-residual-representation` · lemma — Element and edge residual representation for P1 Galerkin errors
- `thm-afem-local-moment-interpolation-estimates` · theorem — Local approximation and reproduction of the P1 moment interpolant
- `lem-afem-common-refinement-overlay-and-cardinality` · lemma — Common NVB refinement and overlay cardinality
- `lem-afem-data-oscillation-reduction-under-marked-refinement` · lemma — Data oscillation reduction under three-generation refinement
- `lem-afem-localized-galerkin-refinement-estimate` · lemma — Localized energy estimate for nested Galerkin solutions
- `lem-afem-nvb-conforming-closure-and-cumulative-counting` · lemma — Termination and cumulative complexity of NVB conformity closure
- `thm-afem-p1-residual-reliability-and-local-efficiency` · theorem — Residual reliability and local efficiency for P1 AFEM
- `lem-afem-dorfler-marking-cardinality` · lemma — Dorfler marking is cardinality-optimal up to mesh closure
- `lem-afem-residual-estimator-reduction` · lemma — Reduction of the P1 residual estimator after marked refinement
- `thm-afem-error-and-oscillation-contraction` · theorem — Linear contraction of AFEM energy error and oscillation
- `thm-afem-p1-poisson-optimal-complexity` · theorem — Optimal P1 AFEM complexity for the Laplacian

### `adaptive-finite-element-methods-examples` — Adaptive finite-element methods — Examples (4 item(s))

- `ex-afem-coefficient-jump-adds-flux-oscillation` · example — A coefficient jump creates nonzero edge-flux oscillation
- `ex-afem-coarse-convection-mesh-misses-smallness-condition` · example — A coarse mesh can miss the convection smallness condition
- `ex-afem-dorfler-marking-three-cells` · example — A deterministic Dörfler mark on three cells
- `ex-afem-data-oscillation-reduction-under-refinement` · example — Projected data oscillation on a reference triangle

## Your seams

Another group's pages depend on yours:

- `curved-mesh-geometry-and-conservative-mesh-transfer` (group u) requires your `adaptive-finite-element-methods`
- `homogenization-and-multiscale-finite-element-methods` (group v) requires your `adaptive-finite-element-methods`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-analysis-remaining-71-2026-10-17`

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
