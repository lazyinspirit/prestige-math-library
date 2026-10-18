# Step 5 adjudication — group **o**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 43, 44, 45: 3 A/B pair(s), 6 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **43**: `research/numerical-analysis-remaining-71-2026-10-17-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/numerical-analysis-remaining-71-2026-10-17-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/numerical-analysis-remaining-71-2026-10-17-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 43 | `maxwell-eigenproblems-and-compatible-vector-waves` | A | numerical-pdes-and-spatial-discretization | 2640 | `finite-element-eigenvalue-approximation`, `discrete-de-rham-complexes-and-edge-elements`, `finite-element-pde-constrained-optimization` |
| 43 | `maxwell-eigenproblems-and-compatible-vector-waves-examples` | B | numerical-pdes-and-spatial-discretization | 2641 | `maxwell-eigenproblems-and-compatible-vector-waves` |
| 44 | `finite-volume-diffusion-and-mimetic-fluxes` | A | numerical-pdes-and-spatial-discretization | 2642 | `elliptic-finite-difference-methods`, `conservative-finite-volume-weak-limits`, `nonlinear-parabolic-compactness-and-monotone-evolution` |
| 44 | `finite-volume-diffusion-and-mimetic-fluxes-examples` | B | numerical-pdes-and-spatial-discretization | 2643 | `finite-volume-diffusion-and-mimetic-fluxes` |
| 45 | `overlapping-schwarz-and-stable-subspace-decompositions` | A | numerical-pdes-and-spatial-discretization | 2644 | `multigrid-methods-and-complexity`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `mixed-finite-elements-and-stokes-stability` |
| 45 | `overlapping-schwarz-and-stable-subspace-decompositions-examples` | B | numerical-pdes-and-spatial-discretization | 2645 | `overlapping-schwarz-and-stable-subspace-decompositions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `maxwell-eigenproblems-and-compatible-vector-waves` — Maxwell eigenproblems and compatible vector wave approximation (9 item(s))

- `lem-pe11-compact-self-adjoint-spectral-approximation` · lemma — Spectral convergence under collectively compact positive approximations
- `lem-pe11-hcurl-weak-limit` · lemma — Weak graph limits preserve zero tangential H(curl)
- `def-na-pe11-maxwell-cavity-eigenproblem` · definition — PEC Maxwell cavity eigenproblem and full-kernel gauge
- `lem-pe11-zero-eigenvalue-is-curl-kernel` · lemma — The unquotiented zero eigenspace is the PEC curl kernel
- `lem-pe11-gauge-space-infinite-dimensional` · lemma — The PEC full-kernel gauge is infinite-dimensional
- `lem-pe11-smooth-nedelec-approximation` · lemma — Smooth fields are approximated by the lowest-order edge family
- `lem-pe11-continuous-gauge-compact-embedding` · lemma — Compact embedding and curl Poincare inequality for the continuous PEC quotient
- `lem-pe11-gauge-conforming-edge-approximation` · lemma — Kernel projection gives dense conforming gauge approximants
- `thm-pe11-edge-maxwell-spectral-approximation` · theorem — Spectral convergence and no nonzero pollution for PEC edge elements

### `maxwell-eigenproblems-and-compatible-vector-waves-examples` — Maxwell eigenproblems and compatible vector wave approximation — Examples (3 item(s))

- `ex-pe11-spherical-shell-pec-zero-mode` · example — A topological PEC zero mode on a spherical shell
- `ex-pe11-unit-cube-maxwell-mode` · example — An explicit PEC standing wave in the unit cube
- `ex-pe11-repeated-cube-maxwell-cluster` · example — A repeated unit-cube Maxwell eigenvalue cluster

### `finite-volume-diffusion-and-mimetic-fluxes` — Finite-volume diffusion on admissible meshes (13 item(s))

- `def-fv-admissible-cell-face-mesh` · definition — Finite-volume cell-face meshes and geometric regularity
- `def-tpfa-harmonic-face-scheme` · definition — Orthogonal TPFA diffusion with harmonic face transmissibility
- `def-hybrid-mimetic-fv-scheme` · definition — Hybrid mimetic finite-volume diffusion on general meshes
- `def-fv-regular-simplicial-companion-family` · definition — Finite-volume families with a regular simplicial companion
- `thm-tpfa-green-coercivity-maximum-principle` · theorem — TPFA discrete Green identity, coercivity, and maximum principle
- `thm-path-certified-fv-discrete-poincare` · theorem — Discrete Poincaré inequality from boundary paths
- `prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact` · proposition — Coercivity, monotonicity, conservation, and affine exactness of the mimetic schemes
- `lem-fv-conforming-companion-and-test-recovery` · lemma — Finite-volume companions, mean tests and weak-gradient closure
- `thm-tpfa-flux-energy-convergence-smooth-interface` · theorem — TPFA flux-energy convergence for smooth face-aligned interfaces
- `thm-tpfa-discrete-rellich-and-physical-gradient-closure` · theorem — Discrete TPFA Rellich compactness and physical weak gradients
- `lem-mimetic-fv-parabolic-limit-identification` · lemma — Conditional monotone finite-volume parabolic limit identification
- `lem-hybrid-mimetic-backward-euler-energy-and-compactness` · lemma — Energy and computed-state compactness for hybrid mimetic backward Euler
- `thm-hybrid-mimetic-parabolic-weak-flux-limit` · theorem — Computed hybrid mimetic states and numerical fluxes converge to monotone diffusion

### `finite-volume-diffusion-and-mimetic-fluxes-examples` — Finite-volume diffusion on admissible meshes — Examples (4 item(s))

- `ex-orthogonal-voronoi-harmonic-diffusion` · example — Harmonic TPFA flux on a rectangular Voronoï mesh
- `cex-nonorthogonal-two-point-flux-inconsistent` · counterexample — A nonorthogonal two-point flux gives a false transverse flux
- `ex-harmonic-transmissibility-material-interface` · example — Harmonic transmissibility across a one-dimensional material interface
- `ex-anisotropic-mimetic-flux-on-skew-cell` · example — Affine anisotropic flux on a skew parallelogram

### `overlapping-schwarz-and-stable-subspace-decompositions` — Overlapping Schwarz and stable subspace decompositions (9 item(s))

- `lem-schwarz-p1-product-cutoff-interpolation-energy-estimate` · lemma — Elementwise P1 product-cutoff energy estimate
- `def-overlapping-schwarz-subspace-correction-data` · definition — Finite-dimensional Schwarz subspace-correction data
- `lem-schwarz-local-matrices-are-well-defined` · lemma — Schwarz local matrices and exact solves are well defined
- `thm-two-level-p1-poisson-stable-decomposition` · theorem — Stable two-level P1 decomposition for structured Poisson meshes
- `lem-schwarz-local-corrections-are-energy-orthogonal-projections` · lemma — Exact Schwarz local corrections are energy-orthogonal projections
- `lem-schwarz-additive-inverse-is-local-energy-minimum` · lemma — The additive Schwarz inverse minimizes summed local energy
- `thm-additive-schwarz-stable-decomposition-condition-number` · theorem — Additive Schwarz condition bound from stable decomposition and synthesis
- `thm-multiplicative-schwarz-exact-sweep-contraction` · theorem — Multiplicative Schwarz projection sweeps contract with explicit overlap constants
- `thm-two-level-p1-poisson-additive-and-multiplicative-bounds` · theorem — Two-level overlapping P1 Poisson bounds with explicit H-overlap dependence

### `overlapping-schwarz-and-stable-subspace-decompositions-examples` — Overlapping Schwarz and stable subspace decompositions — Examples (5 item(s))

- `ex-schwarz-overlap-shrinking-decomposition-bound` · example — The stable-splitting guarantee worsens as overlap shrinks
- `ex-one-level-overlapping-schwarz-condition-number-growth` · example — One-level point-patch Schwarz loses uniformity on 1D Poisson
- `cex-schwarz-naive-coarse-space-misses-conductive-mode` · counterexample — A one-node coarse space misses a high-conductance channel
- `ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections` · example — A uniform two-level 1D Poisson correction bound
- `ex-schwarz-inexact-local-solves-spectral-equivalence-bound` · example — Inexact local solves enter through spectral-equivalence constants

## Your seams

Your pages depend on another group's:

- `maxwell-eigenproblems-and-compatible-vector-waves` requires `discrete-de-rham-complexes-and-edge-elements` (group m, batch 38)
- `finite-volume-diffusion-and-mimetic-fluxes` requires `conservative-finite-volume-weak-limits` (group j, batch 28)
- `finite-volume-diffusion-and-mimetic-fluxes` requires `nonlinear-parabolic-compactness-and-monotone-evolution` (group m, batch 39)
- `overlapping-schwarz-and-stable-subspace-decompositions` requires `multigrid-methods-and-complexity` (group g, batch 20)
- `overlapping-schwarz-and-stable-subspace-decompositions` requires `mixed-finite-elements-and-stokes-stability` (group k, batch 31)

Another group's pages depend on yours:

- `substructuring-feti-dp-and-bddc-preconditioners` (group q) requires your `overlapping-schwarz-and-stable-subspace-decompositions`
- `compressible-viscous-flow-and-entropy-stable-fluxes` (group t) requires your `finite-volume-diffusion-and-mimetic-fluxes`
- `reaction-diffusion-invariants-and-pattern-discretization` (group u) requires your `finite-volume-diffusion-and-mimetic-fluxes`
- `phase-field-and-energy-dissipative-discretization` (group v) requires your `finite-volume-diffusion-and-mimetic-fluxes`

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
