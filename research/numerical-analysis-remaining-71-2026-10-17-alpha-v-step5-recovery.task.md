# Step 5 adjudication — group **v**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 64, 65, 66: 3 A/B pair(s), 6 page(s), 59 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **64**: `research/numerical-analysis-remaining-71-2026-10-17-batch-64-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **65**: `research/numerical-analysis-remaining-71-2026-10-17-batch-65-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **66**: `research/numerical-analysis-remaining-71-2026-10-17-batch-66-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 64 | `exterior-wave-problems-absorbing-boundaries-and-pml` | A | numerical-pdes-and-spatial-discretization | 2697.375 | `spectral-collocation-and-galerkin-methods`, `boundary-integral-equations-and-galerkin-bem` |
| 64 | `exterior-wave-problems-absorbing-boundaries-and-pml-examples` | B | numerical-pdes-and-spatial-discretization | 2697.5 | `exterior-wave-problems-absorbing-boundaries-and-pml` |
| 65 | `homogenization-and-multiscale-finite-element-methods` | A | numerical-pdes-and-spatial-discretization | 2693.25 | `adaptive-finite-element-methods`, `finite-element-pde-constrained-optimization`, `isogeometric-galerkin-methods` |
| 65 | `homogenization-and-multiscale-finite-element-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2693.5 | `homogenization-and-multiscale-finite-element-methods` |
| 66 | `phase-field-and-energy-dissipative-discretization` | A | numerical-pdes-and-spatial-discretization | 2686 | `finite-volume-diffusion-and-mimetic-fluxes`, `imex-and-operator-splitting-methods`, `nonlinear-parabolic-compactness-and-monotone-evolution` |
| 66 | `phase-field-and-energy-dissipative-discretization-examples` | B | numerical-pdes-and-spatial-discretization | 2687 | `phase-field-and-energy-dissipative-discretization` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `exterior-wave-problems-absorbing-boundaries-and-pml` — Exterior waves, absorbing boundaries and PML (13 item(s))

- `def-pe18-cartesian-complex-stretch-pml` · definition — Cartesian complex-stretch PML for a homogeneous Helmholtz mode
- `def-pe18-local-impedance-absorbing-boundary` · definition — First-order local impedance condition at an artificial plane
- `thm-pe18-pml-perfect-matching-and-propagating-mode-decay` · theorem — Perfect matching and attenuation for non-grazing propagating modes
- `lem-pe18-spherical-hankel-modulus-and-radiation-bounds` · lemma — Spherical Hankel modulus and uniform radial bounds
- `thm-pe18-planar-impedance-reflection-coefficient` · theorem — Exact plane-wave reflection coefficient of the local impedance condition
- `thm-pe18-finite-pml-dirichlet-reflection` · theorem — Exact reflected-mode error from a finite Dirichlet-terminated PML
- `def-pe18-exact-spherical-dtn-map` · definition — Exact modal Dirichlet-to-Neumann map on a sphere
- `thm-pe18-spherical-impedance-modal-reflection` · theorem — Exact spherical-mode reflection under the local impedance truncation
- `thm-pe18-rellich-uniqueness-for-a-spherical-obstacle` · theorem — Rellich uniqueness for the sound-soft spherical obstacle
- `thm-pe18-exact-spherical-dtn-map-on-smooth-data` · theorem — The spherical modal DtN map is well-defined and exact for smooth data
- `def-pe18-spherical-dtn-truncated-variational-problem` · definition — Exact-DtN truncated modal variational formulation
- `lem-pe18-modal-trace-and-form-continuity` · lemma — Modal trace bound and continuity of the exact-DtN variational form
- `thm-pe18-spherical-exact-dtn-variational-wellposedness` · theorem — Existence and uniqueness for the spherical exact-DtN variational problem

### `exterior-wave-problems-absorbing-boundaries-and-pml-examples` — Exterior waves, absorbing boundaries and PML — Examples (5 item(s))

- `ex-pe18-pml-angle-dependent-attenuation` · example — PML attenuation vanishes at grazing and excludes evanescent modes
- `ex-pe18-impedance-normal-and-grazing-incidence` · example — Normal, oblique, and grazing impedance reflection
- `ex-pe18-insufficient-damping-near-resonant-cavity` · example — A weakly damped truncated layer can produce a resonant cavity response
- `ex-pe18-spherical-monopole-exterior-field` · example — The outgoing monopole field of a sound-soft sphere
- `ex-pe18-spherical-dtn-monopole-symbol` · example — The monopole symbol of the exact spherical DtN map

### `homogenization-and-multiscale-finite-element-methods` — Homogenization, multiscale FEM and heterogeneous media (22 item(s))

- `def-periodic-scalar-diffusion-data` · definition — Uniformly elliptic periodic scalar diffusion data
- `def-periodic-zero-mean-cell-space` · definition — Zero-mean periodic Sobolev cell space
- `lem-unit-cube-h01-separability-and-l2-compactness` · lemma — Separable H1-zero space and compact L2 inclusion on a cube
- `def-periodic-cell-problem` · definition — Periodic scalar cell problem
- `lem-periodic-cell-poincare` · lemma — Mean-zero Poincare inequality on the periodic cell
- `lem-periodic-averaging-on-cube` · lemma — Periodic averaging and rescaling bounds on the unit cube
- `def-periodic-two-scale-convergence` · definition — Two-scale weak convergence for periodic tests
- `lem-periodic-cell-corrector-wellposedness` · lemma — Existence and uniqueness of periodic cell correctors
- `thm-two-scale-compactness-for-l2-bounded-sequences` · theorem — Two-scale compactness for bounded L2 sequences
- `def-periodic-cell-correctors-and-effective-tensor` · definition — Periodic correctors and effective tensor
- `lem-two-scale-gradient-decomposition-for-h01` · lemma — Two-scale structure of bounded H1-zero gradients
- `thm-periodic-effective-tensor-symmetric-elliptic` · theorem — Symmetry and uniform ellipticity of the effective tensor
- `alg-fehmm-periodic-cell-micro-macro` · algorithm — Periodic FE-HMM with simplicial macro and periodic P1 micro meshes
- `lem-fehmm-period-aligned-sampling-has-zero-resonance` · lemma — No sampling resonance for period-aligned periodic micro cells
- `lem-fehmm-one-dimensional-nonaligned-resonance-bound` · lemma — One-dimensional nonaligned micro sampling resonance bound
- `thm-periodic-dirichlet-homogenization-on-unit-cube` · theorem — Periodic scalar Dirichlet homogenization on the unit cube
- `lem-periodic-flux-corrector` · lemma — Antisymmetric periodic flux potential
- `lem-fehmm-micro-cell-solves-wellposedness` · lemma — Well-posedness of the finite FE-HMM micro solves
- `cor-periodic-dirichlet-homogenization-strong-l2` · corollary — Strong L2 convergence in periodic Dirichlet homogenization
- `thm-periodic-boundary-layer-corrector-estimate` · theorem — Boundary-cutoff corrector estimate for regular periodic data
- `lem-fehmm-micro-tensor-approximation-error` · lemma — Energy identity for FE-HMM micro tensor error
- `thm-fehmm-macro-micro-resonance-error-decomposition` · theorem — FE-HMM macro, micro, and sampling error separation

### `homogenization-and-multiscale-finite-element-methods-examples` — Homogenization, multiscale FEM and heterogeneous media — Examples (4 item(s))

- `ex-layered-periodic-effective-tensor` · example — Layered medium: harmonic normal and arithmetic tangential means
- `ex-periodic-effective-tensor-high-contrast-no-uniform-condition-number` · example — High contrast destroys contrast-independent conditioning
- `ex-nonaligned-periodic-sampling-resonance` · example — A nonaligned one-dimensional micro window has resonance error
- `ex-fehmm-macro-micro-resonance-ledger` · example — FE-HMM energy error ledger with distinct components

### `phase-field-and-energy-dissipative-discretization` — Phase-field and dissipative gradient-flow computation (11 item(s))

- `def-phase-field-gradient-flow-and-double-well` · definition — Allen–Cahn and Cahn–Hilliard double-well gradient flows
- `def-phase-field-discrete-realizations` · definition — No-flux finite-volume and conforming realizations for phase fields
- `lem-phase-field-neumann-laplacian-kernel-and-gauge` · lemma — Kernel, range, and mean-zero inverse for the no-flux Laplacian
- `lem-phase-field-interval-p1-projector-stability` · lemma — Uniform interval stability of the phase-field L2 projector
- `def-phase-field-stabilized-semi-implicit-variant` · definition — Stabilized semi-implicit phase-field step
- `alg-phase-field-sav-cahn-hilliard-step` · algorithm — First-order scalar-auxiliary-variable Cahn–Hilliard step
- `alg-phase-field-convex-splitting-backward-euler` · algorithm — Backward-Euler convex splitting for Allen–Cahn and Cahn–Hilliard
- `thm-phase-field-sav-modified-energy-law` · theorem — The SAV step is uniquely solvable and dissipates a modified energy
- `thm-phase-field-convex-splitting-step-existence-and-energy` · theorem — Existence, uniqueness, mass conservation, and energy decay of a convex-splitting step
- `thm-phase-field-convex-splitting-ac-ch-time-error` · theorem — First-order time error under smooth fixed-mesh solutions
- `thm-phase-field-convex-splitting-mesh-time-convergence` · theorem — One-dimensional mesh and time convergence of convex-splitting phase flows

### `phase-field-and-energy-dissipative-discretization-examples` — Phase-field and dissipative gradient-flow computation — Examples (4 item(s))

- `ex-phase-field-allen-cahn-stationary-front` · example — The one-dimensional Allen–Cahn double-well front
- `ex-phase-field-interface-width-and-grid-resolution` · example — Interface width and a grid that misses the transition
- `cex-phase-field-sav-modified-energy-not-physical-energy` · counterexample — Modified-energy decay alone does not imply physical-energy decay
- `ex-phase-field-ch-two-cell-energy-ledger` · example — A two-cell Cahn–Hilliard mass and energy ledger

## Your seams

Your pages depend on another group's:

- `exterior-wave-problems-absorbing-boundaries-and-pml` requires `boundary-integral-equations-and-galerkin-bem` (group s, batch 57)
- `homogenization-and-multiscale-finite-element-methods` requires `adaptive-finite-element-methods` (group r, batch 54)
- `homogenization-and-multiscale-finite-element-methods` requires `isogeometric-galerkin-methods` (group w, batch 69)
- `phase-field-and-energy-dissipative-discretization` requires `finite-volume-diffusion-and-mimetic-fluxes` (group o, batch 44)
- `phase-field-and-energy-dissipative-discretization` requires `nonlinear-parabolic-compactness-and-monotone-evolution` (group m, batch 39)

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
