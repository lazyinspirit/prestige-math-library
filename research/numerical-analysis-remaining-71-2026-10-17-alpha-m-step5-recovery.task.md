# Step 5 adjudication — group **m**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 37, 38, 39: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/numerical-analysis-remaining-71-2026-10-17-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **38**: `research/numerical-analysis-remaining-71-2026-10-17-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/numerical-analysis-remaining-71-2026-10-17-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 37 | `well-balanced-balance-laws-and-wet-dry-fronts` | A | numerical-pdes-and-spatial-discretization | 2628 | `invariant-domain-and-entropy-stable-conservative-schemes` |
| 37 | `well-balanced-balance-laws-and-wet-dry-fronts-examples` | B | numerical-pdes-and-spatial-discretization | 2629 | `well-balanced-balance-laws-and-wet-dry-fronts` |
| 38 | `discrete-de-rham-complexes-and-edge-elements` | A | numerical-pdes-and-spatial-discretization | 2630 | `mixed-hdiv-fluxes-and-darcy-discretization`, `simply-connected-plane-domains`, `the-de-rham-theorem-and-degree`, `geodesics-the-exponential-map-completeness-and-hopf-rinow` |
| 38 | `discrete-de-rham-complexes-and-edge-elements-examples` | B | numerical-pdes-and-spatial-discretization | 2631 | `discrete-de-rham-complexes-and-edge-elements` |
| 39 | `nonlinear-parabolic-compactness-and-monotone-evolution` | A | numerical-pdes-and-spatial-discretization | 2632 | `parabolic-finite-element-methods`, `homology-axioms-degree-and-classical-applications` |
| 39 | `nonlinear-parabolic-compactness-and-monotone-evolution-examples` | B | numerical-pdes-and-spatial-discretization | 2633 | `nonlinear-parabolic-compactness-and-monotone-evolution` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `well-balanced-balance-laws-and-wet-dry-fronts` — Well-balanced balance laws and wet/dry fronts (12 item(s))

- `def-pe05-shallow-water-balance-law` · definition — One-dimensional shallow-water balance law with a dry-state convention
- `def-pe05-hydrostatic-hll-scheme` · definition — Hydrostatic reconstruction with a dry-safe HLL flux and one-sided pressure corrections
- `lem-pe05-strong-l1-limit-preserves-dry-admissibility` · lemma — A strong local L1 limit preserves shallow-water dry admissibility
- `prop-pe05-shallow-water-admissible-state-set-is-convex` · proposition — The shallow-water wet/dry state set is convex
- `lem-pe05-hll-depth-flux-decomposition` · lemma — HLL depth flux is a bounded outflow/inflow combination
- `thm-pe05-hydrostatic-reconstruction-is-well-balanced` · theorem — The hydrostatic HLL update preserves lakes at rest, including dry cells
- `lem-pe05-source-quadrature-consistency` · lemma — Hydrostatic pressure corrections converge to the smooth-bed source
- `lem-pe05-discrete-weak-identity-with-source` · lemma — Exact space-time weak identity for the hydrostatic update
- `lem-pe05-hll-flux-reconstruction-converges-under-strong-primitive-l1` · lemma — Hydrostatic HLL face fluxes converge under strong state and velocity convergence
- `lem-pe05-hll-dry-face-direction-and-zero-flux` · lemma — A dry HLL face sends water only into the dry side
- `thm-pe05-strong-limit-satisfies-smooth-bed-balance-law` · theorem — A strong limit of hydrostatic HLL updates solves the smooth-bed balance law weakly
- `thm-pe05-hydrostatic-update-preserves-water-and-dry-admissibility` · theorem — The hydrostatic HLL step conserves water and preserves dry admissibility

### `well-balanced-balance-laws-and-wet-dry-fronts-examples` — Well-balanced balance laws and wet/dry fronts — Examples (3 item(s))

- `cex-pe05-centered-source-produces-spurious-current` · counterexample — A centered pressure flux and centered bed source move a discrete lake
- `ex-pe05-lake-at-rest-over-a-dry-crest` · example — A lake at rest over a bump with a dry crest
- `ex-pe05-hll-dam-break-wets-dry-cell` · example — A first HLL step wets a dry cell without negative depth

### `discrete-de-rham-complexes-and-edge-elements` — Discrete de Rham complexes and edge-element foundations (25 item(s))

- `def-na-hcurl-space` · definition — The real H(curl) graph space on a polyhedron
- `lem-na-contractible-lipschitz-polyhedron-boundary-connected` · lemma — The boundary of a bounded contractible Lipschitz polyhedron is connected
- `lem-na-lipschitz-scalar-h1-h2-extension` · lemma — Scalar H1 and H2 extension across a bounded Lipschitz boundary
- `lem-na-graded-whitney-mesh-size-and-boundary-shifts` · lemma — Graded Whitney mesh size and inward and outward boundary shifts
- `def-na-lowest-order-whitney-de-rham-spaces` · definition — Lowest-order Whitney and Nedelec de Rham spaces
- `def-na-zero-tangential-hcurl` · definition — Zero tangential trace H(curl) space
- `lem-na-compact-support-hcurl-fourier-splitting` · lemma — A whole-space Fourier splitting for compactly supported H(curl) fields
- `lem-na-weak-local-potentials-and-continuation` · lemma — Local weak scalar potentials and continuation on a simply connected open set
- `lem-na-hcurl-curlfree-potential-contractible` · lemma — Weak curl-free fields on a contractible polyhedron are gradients
- `cex-na-canonical-edge-moments-not-bounded-on-hcurl` · counterexample — Canonical edge moments are not bounded on H(curl)
- `def-na-curl-curl-kernel-quotient-gauge` · definition — Kernel quotient and gauge for discrete curl-curl
- `lem-na-nedelec-edge-unisolvence` · lemma — Lowest-order Nedelec edge circulation unisolvence
- `lem-na-weak-hcurl-tangential-trace` · lemma — Weak tangential trace on a Lipschitz polyhedron
- `lem-na-lipschitz-support-and-zero-boundary-closure` · lemma — Whole-space support and the zero-boundary Sobolev closure
- `lem-na-whitney-moments-commute-with-grad-curl-div` · lemma — Whitney edge, face, and cell moments commute with grad, curl, and div
- `thm-na-stable-mixed-curl-curl-kernel-quotient` · theorem — Stable mixed curl-curl formulation with kernel gauge
- `lem-na-full-dirichlet-hcurl-regular-decomposition` · lemma — A bounded regular decomposition with both summands satisfying full Dirichlet conditions
- `thm-na-regular-decomposition-zero-tangential-hcurl` · theorem — Regular decomposition of zero-tangential H(curl) fields
- `thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes` · theorem — Discrete de Rham cohomology and contractible-mesh exactness
- `lem-na-relative-curl-kernel-is-zero-boundary-gradients` · lemma — The relative curl kernel on a contractible Lipschitz polyhedron
- `lem-na-whitney-averaged-pullback-moment-bounds` · lemma — Averaged pullback Whitney moments and uniform near identity
- `lem-na-whitney-cochain-correction-and-strong-convergence` · lemma — Finite element correction and strong convergence of Whitney cochain projections
- `thm-na-uniformly-bounded-commuting-cochain-projection` · theorem — Uniformly bounded commuting projection for lowest-order Nedelec spaces
- `lem-na-discrete-gradient-lift-gap-estimate` · lemma — Discrete gradient gap from a relative commuting projection
- `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec` · theorem — Discrete compactness and uniform Poincare inequality for Nedelec fields

### `discrete-de-rham-complexes-and-edge-elements-examples` — Discrete de Rham complexes and edge-element foundations — Examples (3 item(s))

- `ex-na-nedelec-edge-circulation-and-stokes` · example — An oriented Nedelec edge circulation on one tetrahedron
- `ex-na-nodal-curlcurl-spurious-gradient-mode` · example — A nodal curl-free mode outside the compatible gradient image
- `ex-na-handle-domain-harmonic-edge-field` · example — A handle-domain harmonic field with nonzero circulation

### `nonlinear-parabolic-compactness-and-monotone-evolution` — Nonlinear parabolic compactness and monotone evolution (19 item(s))

- `def-pe12-gelfand-triple` · definition — Banach evolution triples and weak time derivatives
- `lem-pe12-w1p-compact-l2-embedding` · lemma — The subcritical W0 one p embedding into L2
- `lem-pe12-bochner-lp-mollification` · lemma — Time translations and mollification in Bochner Lp
- `lem-pe12-w0p-separable-reflexive` · lemma — The zero-boundary W1p space is separable and reflexive
- `thm-pe12-bochner-lp-completeness` · theorem — Bochner Lp is complete for a Banach value space
- `lem-pe12-outward-zero-brouwer` · lemma — An outward-pointing finite-dimensional map has a zero
- `lem-pe12-quasiuniform-mass-inverse-decay` · lemma — Quasi-uniform finite-element mass inverses have summable graph decay
- `def-pe12-monotone-diffusion-flux` · definition — Coercive monotone p-growth diffusion fluxes
- `def-pe12-stable-conforming-fem-family` · definition — Conforming FEM families with stable L2 projectors
- `lem-pe12-evolution-energy-chain-rule` · lemma — The Banach evolution-space energy identity and H trace
- `thm-pe12-aubin-lions-compactness` · theorem — Aubin–Lions compactness with exact time exponent
- `lem-pe12-space-time-gradient-weak-compactness` · lemma — Weak compactness of bounded space-time Sobolev gradients
- `thm-pe12-discrete-aubin-lions-compactness` · theorem — Piecewise-constant discrete Aubin–Lions compactness
- `lem-pe12-boundary-preserving-quasi-interpolation` · lemma — Boundary-preserving quasi-interpolation is stable and strongly approximating
- `lem-pe12-minty-identification` · lemma — Minty identification for a monotone Carathéodory flux
- `thm-pe12-strong-monotone-residual-estimate` · theorem — Quantitative residual error under strong monotonicity
- `thm-pe12-l2-projector-w1p-stability` · theorem — L2 projections are uniformly W1p-stable on quasi-uniform conforming meshes
- `thm-pe12-backward-euler-galerkin-existence-energy` · theorem — Nonlinear backward Euler Galerkin existence and energy bounds
- `thm-pe12-monotone-fem-limit` · theorem — Conditional monotone finite-element convergence

### `nonlinear-parabolic-compactness-and-monotone-evolution-examples` — Nonlinear parabolic compactness and monotone evolution — Examples (4 item(s))

- `ex-pe12-porous-medium-barenblatt` · example — A Barenblatt profile has finite propagation
- `cex-pe12-linear-ritz-does-not-commute` · counterexample — The linear Ritz projection need not preserve the nonlinear p-Laplacian residual
- `ex-pe12-time-oscillations-without-derivative-control` · example — Time oscillations defeat compactness without derivative control
- `ex-pe12-p-laplacian` · example — The p-Laplacian is an admissible monotone diffusion

## Your seams

Your pages depend on another group's:

- `well-balanced-balance-laws-and-wet-dry-fronts` requires `invariant-domain-and-entropy-stable-conservative-schemes` (group k, batch 33)
- `discrete-de-rham-complexes-and-edge-elements` requires `mixed-hdiv-fluxes-and-darcy-discretization` (group l, batch 34)

Another group's pages depend on yours:

- `energy-stable-incompressible-navier-stokes-discretization` (group n) requires your `nonlinear-parabolic-compactness-and-monotone-evolution`
- `yee-fdtd-and-transient-maxwell-discretization` (group n) requires your `discrete-de-rham-complexes-and-edge-elements`
- `maxwell-eigenproblems-and-compatible-vector-waves` (group o) requires your `discrete-de-rham-complexes-and-edge-elements`
- `finite-volume-diffusion-and-mimetic-fluxes` (group o) requires your `nonlinear-parabolic-compactness-and-monotone-evolution`
- `nonlinear-full-approximation-multigrid` (group p) requires your `nonlinear-parabolic-compactness-and-monotone-evolution`
- `boundary-integral-equations-and-galerkin-bem` (group s) requires your `discrete-de-rham-complexes-and-edge-elements`
- `least-squares-fem-and-practical-dpg` (group t) requires your `discrete-de-rham-complexes-and-edge-elements`
- `phase-field-and-energy-dissipative-discretization` (group v) requires your `nonlinear-parabolic-compactness-and-monotone-evolution`

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
