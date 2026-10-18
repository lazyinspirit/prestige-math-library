# Step 5 adjudication — group **t**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 58, 59, 60: 3 A/B pair(s), 6 page(s), 63 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **58**: `research/numerical-analysis-remaining-71-2026-10-17-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/numerical-analysis-remaining-71-2026-10-17-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/numerical-analysis-remaining-71-2026-10-17-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 58 | `variational-inequality-and-contact-finite-elements` | A | numerical-pdes-and-spatial-discretization | 2670 | `variational-crimes-and-strang-lemmas`, `elasticity-near-incompressibility-and-locking-free-discretization`, `constrained-variational-problems-and-variational-inequalities` |
| 58 | `variational-inequality-and-contact-finite-elements-examples` | B | numerical-pdes-and-spatial-discretization | 2671 | `variational-inequality-and-contact-finite-elements` |
| 59 | `compressible-viscous-flow-and-entropy-stable-fluxes` | A | numerical-pdes-and-spatial-discretization | 2672 | `variational-crimes-and-strang-lemmas`, `hyperbolic-dg-and-summation-by-parts-discretizations`, `finite-volume-diffusion-and-mimetic-fluxes` |
| 59 | `compressible-viscous-flow-and-entropy-stable-fluxes-examples` | B | numerical-pdes-and-spatial-discretization | 2673 | `compressible-viscous-flow-and-entropy-stable-fluxes` |
| 60 | `least-squares-fem-and-practical-dpg` | A | numerical-pdes-and-spatial-discretization | 2674 | `variational-crimes-and-strang-lemmas`, `discrete-de-rham-complexes-and-edge-elements` |
| 60 | `least-squares-fem-and-practical-dpg-examples` | B | numerical-pdes-and-spatial-discretization | 2675 | `least-squares-fem-and-practical-dpg` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `variational-inequality-and-contact-finite-elements` — Variational inequalities and spatial contact discretization (16 item(s))

- `def-signorini-partial-trace-space` · definition — Partial-trace displacement space on a polygon
- `lem-signorini-partial-trace-space-bounded` · lemma — The partial-trace displacement space is a Hilbert space
- `lem-signorini-rigid-motion-controlled-by-dirichlet-segment` · lemma — A planar rigid motion is controlled by its trace on a segment
- `def-signorini-elasticity-contact-model` · definition — Small-strain elasticity with a frictionless contact gap
- `def-signorini-contact-variational-inequality` · definition — The vector Signorini contact set and variational inequality
- `lem-signorini-elasticity-form-bounded` · lemma — The isotropic contact elasticity form is well defined and bounded
- `lem-signorini-contact-set-closed-convex-nonempty` · lemma — The Signorini contact set is nonempty, closed, and convex
- `def-signorini-nodal-p1-contact-scheme` · definition — Conforming nodal P1 Signorini contact discretization
- `lem-signorini-partial-dirichlet-korn-coercivity` · lemma — Korn coercivity with a partial Dirichlet segment
- `lem-signorini-nodal-contact-set-conforming` · lemma — The convex-obstacle nodal set is conforming
- `lem-signorini-contact-nodal-test-functions-surjective` · lemma — Contact nodal coordinates are independently attainable
- `def-signorini-dual-mortar-contact-pair` · definition — Dual P1 mortar multipliers for boundary contact
- `thm-signorini-continuous-contact-vi-wellposed` · theorem — Continuous frictionless elasticity contact is well posed
- `lem-signorini-dual-mortar-biorthogonality-and-infsup` · lemma — The dual mortar basis is biorthogonal and uniformly stable on the trace space
- `thm-signorini-nodal-contact-vi-falk-error` · theorem — Falk error bound for nodal Signorini contact
- `thm-signorini-mortar-contact-kkt-and-complementarity` · theorem — The dual mortar contact system is stable and exactly complementary

### `variational-inequality-and-contact-finite-elements-examples` — Variational inequalities and spatial contact discretization — Examples (4 item(s))

- `ex-signorini-one-dimensional-obstacle-free-boundary` · example — A one-dimensional obstacle with an explicit free boundary
- `cex-signorini-nodal-contact-feasibility-needs-convex-obstacle` · counterexample — Nodal feasibility can miss a nonconvex obstacle between vertices
- `ex-signorini-contact-patch-test` · example — An affine shear field passes the frictionless contact patch test
- `ex-signorini-mortar-active-set-change` · example — A two-gap contact model changes its active set with the load

### `compressible-viscous-flow-and-entropy-stable-fluxes` — Compressible viscous flow and entropy-stable viscous fluxes (15 item(s))

- `def-compressible-navier-stokes-fourier-model` · definition — Ideal-gas compressible Navier–Stokes–Fourier model
- `lem-compressible-admissible-state-set-open-convex` · lemma — The ideal-gas admissible state set is open and convex
- `lem-compressible-ideal-gas-entropy-pair-and-variables` · lemma — Strict convexity and entropy variables for the ideal-gas Euler flux
- `def-ideal-gas-entropy-conservative-pair-flux` · definition — Explicit entropy-conservative two-point Euler flux
- `lem-compressible-viscous-flux-entropy-variable-factorization` · lemma — Positive-semidefinite entropy-variable factorization of viscous flux
- `lem-ideal-gas-entropy-conservative-flux-properties` · lemma — Properties of the explicit entropy-conservative flux
- `lem-compressible-viscous-smooth-entropy-identity` · lemma — Smooth ideal-gas Navier–Stokes–Fourier entropy identity
- `def-periodic-sbp-compressible-viscous-scheme` · definition — Periodic diagonal-norm SBP compressible viscous scheme
- `def-orthogonal-fv-compressible-viscous-scheme` · definition — One-dimensional orthogonal finite-volume viscous scheme
- `thm-periodic-sbp-compressible-viscous-conservation-and-entropy` · theorem — Conservation and entropy dissipation of the periodic SBP scheme
- `lem-orthogonal-fv-compressible-viscous-flux-consistency` · lemma — Second-order face-flux consistency for the one-dimensional viscous operator
- `thm-orthogonal-fv-compressible-viscous-entropy-dissipation` · theorem — Entropy dissipation of the orthogonal finite-volume viscous scheme
- `alg-positive-tube-forward-euler-for-compressible-sbp` · algorithm — Finite-budget positive-tube forward Euler loop
- `lem-positive-tube-forward-euler-loop-terminates` · lemma — Termination of the finite-budget guarded forward-Euler loop
- `thm-fixed-mesh-forward-euler-error-for-compressible-sbp` · theorem — Conditional fixed-grid forward-Euler error bound

### `compressible-viscous-flow-and-entropy-stable-fluxes-examples` — Compressible viscous flow and entropy-stable viscous fluxes — Examples (4 item(s))

- `ex-compressible-entropy-variable-blowup-near-vacuum` · example — Entropy variables leave compact positive-state tubes near vacuum
- `ex-periodic-compressible-viscous-manufactured-state` · example — A periodic manufactured compressible viscous state
- `ex-compressible-couette-thermal-wall-entropy-balance` · example — Couette flow with the thermal wall entropy balance
- `ex-sbp-inviscid-versus-viscous-entropy-budget` · example — An exact three-node inviscid-versus-viscous SBP entropy budget

### `least-squares-fem-and-practical-dpg` — First-order least-squares FEM and practical DPG (20 item(s))

- `lem-na-ultraweak-poisson-rotation-trace-2d` · lemma — Planar rotation carries H(div) normal traces to tangential traces
- `def-na-least-squares-poisson-first-order` · definition — First-order least-squares formulation of the Dirichlet Poisson problem
- `def-na-ultraweak-poisson-dpg-formulation` · definition — Ultraweak Poisson DPG spaces and plan-consistent bilinear form
- `lem-na-least-squares-poisson-residual-norm-equivalence` · lemma — Least-squares residual norm is equivalent to H(div) x H1_0 error
- `alg-na-practical-dpg-finite-riesz-solves` · algorithm — Exact local finite Riesz solves for practical DPG tests
- `lem-na-hdiv-normal-trace-surjectivity` · lemma — Weak H(div) normal trace surjects onto the scalar trace dual
- `lem-na-ultraweak-poisson-skeleton-quotients` · lemma — Ultraweak Poisson skeleton spaces are Hilbert trace quotients
- `rem-na-practical-dpg-roundoff-and-normal-equations` · remark — Exact DPG stability does not certify quadrature or algebraic solve errors
- `lem-na-ultraweak-poisson-bilinear-form-bounded` · lemma — The ultraweak Poisson DPG bilinear form is bounded
- `lem-na-ultraweak-poisson-trial-kernel` · lemma — The ultraweak Poisson trial operator has trivial kernel
- `lem-na-least-squares-poisson-space-conformity` · lemma — The RT0/P1 least-squares family is conforming
- `lem-na-practical-dpg-fortin-p1-r3` · lemma — A uniformly bounded Fortin map for the practical P1/R3 DPG family
- `alg-na-ultraweak-poisson-ideal-trial-to-test` · algorithm — Ideal Poisson DPG trial-to-test Riesz map
- `thm-na-least-squares-poisson-best-approximation` · theorem — The conforming RT0/P1 least-squares Poisson minimizer is unique and best approximating
- `lem-na-ultraweak-poisson-bounded-load-lifting` · lemma — A topology-free bounded lifting of every ultraweak Poisson load
- `thm-na-practical-dpg-fortin-quasioptimality` · theorem — Fortin stability and quasi-optimality for practical DPG
- `thm-na-ultraweak-poisson-adjoint-graph-infsup` · theorem — Adjoint graph inf-sup for ultraweak Poisson on connected Lipschitz polyhedra
- `thm-na-ideal-ultraweak-poisson-energy-best-approximation` · theorem — Ideal ultraweak Poisson DPG is the energy best approximation
- `thm-na-practical-dpg-residual-estimator-equivalence` · theorem — Practical DPG residual is reliable and efficient up to data oscillation
- `cor-na-practical-dpg-poisson-quasioptimality-estimator` · corollary — P1/R3 practical DPG quasi-optimality and residual estimator for Poisson

### `least-squares-fem-and-practical-dpg-examples` — First-order least-squares FEM and practical DPG — Examples (4 item(s))

- `cex-na-least-squares-boundary-omission-nonunique` · counterexample — Dropping the H1-zero boundary condition makes least squares nonunique
- `ex-na-least-squares-poisson-residual-certificate` · example — An exact polynomial Poisson solution has a zero residual certificate
- `cex-na-practical-dpg-too-small-test-space` · counterexample — A test space smaller than the trial space cannot be stable
- `ex-na-ideal-and-practical-dpg-test-vectors` · example — An explicit finite model separates ideal and practical test vectors

## Your seams

Your pages depend on another group's:

- `variational-inequality-and-contact-finite-elements` requires `elasticity-near-incompressibility-and-locking-free-discretization` (group l, batch 35)
- `compressible-viscous-flow-and-entropy-stable-fluxes` requires `hyperbolic-dg-and-summation-by-parts-discretizations` (group l, batch 36)
- `compressible-viscous-flow-and-entropy-stable-fluxes` requires `finite-volume-diffusion-and-mimetic-fluxes` (group o, batch 44)
- `least-squares-fem-and-practical-dpg` requires `discrete-de-rham-complexes-and-edge-elements` (group m, batch 38)

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
