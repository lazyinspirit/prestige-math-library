# Step 5 adjudication — group **k**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 31, 32, 33: 3 A/B pair(s), 6 page(s), 61 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **31**: `research/numerical-analysis-remaining-71-2026-10-17-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **32**: `research/numerical-analysis-remaining-71-2026-10-17-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/numerical-analysis-remaining-71-2026-10-17-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 31 | `mixed-finite-elements-and-stokes-stability` | A | numerical-pdes-and-spatial-discretization | 2616 | `finite-element-meshes-and-interpolation`, `lax-milgram-and-weak-elliptic-solutions`, `fourier-multipliers-and-sobolev-characterisations`, `fredholm-elliptic-problems-and-the-elliptic-spectrum`, `decomposition-inertia-and-frobenius` |
| 31 | `mixed-finite-elements-and-stokes-stability-examples` | B | numerical-pdes-and-spatial-discretization | 2617 | `mixed-finite-elements-and-stokes-stability` |
| 32 | `high-resolution-tvd-eno-and-weno-methods` | A | numerical-pdes-and-spatial-discretization | 2618 | `polynomial-interpolation-and-remainder`, `monotone-finite-volume-entropy-convergence`, `riemann-solvers-for-hyperbolic-systems` |
| 32 | `high-resolution-tvd-eno-and-weno-methods-examples` | B | numerical-pdes-and-spatial-discretization | 2619 | `high-resolution-tvd-eno-and-weno-methods` |
| 33 | `invariant-domain-and-entropy-stable-conservative-schemes` | A | numerical-pdes-and-spatial-discretization | 2620 | `high-resolution-tvd-eno-and-weno-methods` |
| 33 | `invariant-domain-and-entropy-stable-conservative-schemes-examples` | B | numerical-pdes-and-spatial-discretization | 2621 | `invariant-domain-and-entropy-stable-conservative-schemes` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `mixed-finite-elements-and-stokes-stability` — Mixed finite elements and Stokes stability (26 item(s))

- `lem-na-zero-mean-of-zero-boundary-divergence` · lemma — Zero mean of the divergence of a zero-boundary field
- `lem-na-homogeneous-dirichlet-poincare` · lemma — A bounded-domain Poincare inequality for H1-zero fields
- `lem-na-homogeneous-dirichlet-korn-identity` · lemma — The homogeneous Dirichlet strain identity
- `lem-na-lipschitz-domain-finite-star-shaped-cover` · lemma — Finite star-shaped cover of a bounded Lipschitz domain
- `def-na-star-shaped-bogovskii-integral` · definition — The Bogovskii integral on a star-shaped set
- `thm-na-infsup-bounded-right-inverse-hilbert` · theorem — Hilbert inf-sup gives a bounded constraint right inverse
- `lem-na-scott-zhang-boundary-preserving-p1-interpolant` · lemma — Boundary-preserving face-average P1 interpolation
- `def-na-stokes-zero-mean-pressure-and-velocity-spaces` · definition — Stokes velocity and pressure spaces and weak forms
- `lem-na-finite-cover-zero-mean-data-decomposition` · lemma — Zero-mean L2 decomposition over a finite cover
- `lem-na-bogovskii-kernel-support-and-divergence` · lemma — Support, integrability, and divergence identity for the Bogovskii kernel
- `thm-na-babuska-brezzi-kernel-coercivity` · theorem — Babuska-Brezzi solvability by kernel coercivity and inf-sup
- `lem-na-bogovskii-truncated-derivative-fourier-formula` · lemma — Truncated Fourier formula for derivatives of the Bogovskii operator
- `def-na-fortin-operator` · definition — Fortin operator for a discrete constraint
- `thm-na-mixed-galerkin-quasioptimality` · theorem — Mixed Galerkin error bound retaining beta_h
- `def-na-mini-element-p1-bubble-p1-spaces` · definition — The conforming P1-bubble/P1 mini element
- `lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound` · lemma — Elementary Fourier ray and derivative L2 bounds
- `lem-na-fortin-transfers-discrete-infsup` · lemma — Fortin operators transfer the continuous inf-sup bound
- `lem-na-mini-element-local-and-global-dimensions` · lemma — Local and global dimensions of the mini element
- `def-na-discrete-weak-and-exact-divergence-free-spaces` · definition — Weak and pointwise divergence-free discrete velocities
- `thm-na-star-shaped-bogovskii-bounded-right-inverse` · theorem — Bounded Bogovskii right inverse on a star-shaped domain
- `thm-na-bounded-lipschitz-domain-divergence-right-inverse` · theorem — Divergence right inverse on bounded connected Lipschitz domains
- `thm-na-continuous-stokes-divergence-infsup` · theorem — Continuous Stokes divergence inf-sup on a Lipschitz domain
- `thm-na-mini-element-fortin-stability` · theorem — Uniform Fortin stability of the mini element
- `thm-na-weak-stokes-solvability-lipschitz-domain` · theorem — Weak Stokes solvability on bounded connected Lipschitz domains
- `thm-na-mini-element-h1-pressure-error` · theorem — Mini-element H1 velocity and L2 pressure error estimate
- `thm-na-discrete-helmholtz-projection-and-pressure-schur` · theorem — Discrete Helmholtz projection and pressure Schur identities

### `mixed-finite-elements-and-stokes-stability-examples` — Mixed finite elements and Stokes stability — Examples (4 item(s))

- `ex-na-taylor-hood-pressure-mode` · example — A Taylor-Hood local pressure mode on a right triangle
- `ex-na-mini-element-bubble-moment` · example — A mini-element bubble detects an affine pressure gradient
- `cex-na-q1-p0-checkerboard-pressure-mode` · counterexample — The alternating Q1/P0 checkerboard pressure defeats the discrete inf-sup condition
- `ex-na-weakly-versus-exactly-divergence-free-mini-velocity` · example — A weakly divergence-free mini velocity need not be pointwise divergence-free

### `high-resolution-tvd-eno-and-weno-methods` — High-resolution TVD, ENO and WENO reconstruction (8 item(s))

- `def-na-high-resolution-reconstruction` · definition — Finite-volume MUSCL, nodal ENO2 and WENO5 reconstruction conventions
- `thm-na-linear-monotone-first-order-barrier` · theorem — A monotone linear one-step advection scheme cannot be second order at noninteger CFL
- `lem-na-eno2-reconstruction-third-order` · lemma — The selected nodal ENO2 quadratic reconstructs the face to third order
- `lem-na-weno5-optimal-linear-reconstruction` · lemma — The WENO5 ideal linear weights reproduce quartics at the right face
- `thm-na-musc-minmod-second-order-on-smooth-data` · theorem — MUSCL/minmod face states are second order on smooth monotone data
- `thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl` · theorem — Direct forward-Euler MUSCL/minmod is TVD under the sharp two-thirds CFL bound
- `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one` · counterexample — The specified direct MUSCL/minmod flux update is not TVD at CFL one
- `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction` · theorem — Fixed-epsilon WENO-JS and WENO-Z face reconstructions are fifth order

### `high-resolution-tvd-eno-and-weno-methods-examples` — High-resolution TVD, ENO and WENO reconstruction — Examples (5 item(s))

- `ex-na-minmod-extremum-clipping` · example — Minmod clips the slope at a smooth quadratic maximum
- `cex-na-unlimited-centered-reconstruction-overshoots` · counterexample — Unlimited centered reconstruction creates new extrema on a step
- `ex-na-smooth-linear-advection-reconstruction` · example — MUSCL and WENO reconstruct a translating affine profile exactly
- `ex-na-weno-js-critical-point-epsilon-scaling` · example — A first-order critical point exposes WENO-JS epsilon scaling
- `ex-na-burgers-godunov-musc-shock` · example — Positive-state Burgers shock and the monotone finite-volume baseline

### `invariant-domain-and-entropy-stable-conservative-schemes` — Positivity, invariant domains and entropy-stable systems fluxes (14 item(s))

- `def-pe03-convex-invariant-domain` · definition — Convex invariant domains for a one-step update
- `def-pe03-system-entropy-pair-and-potential` · definition — Convex entropy pairs, entropy variables, and entropy potentials for systems
- `alg-pe03-convex-scaling-positivity-limiter` · algorithm — Maximal convex scaling toward an admissible cell mean
- `def-pe03-first-order-hll-finite-volume-update` · definition — First-order finite-volume update using supplied HLL speeds
- `def-pe03-euler-positive-margin-domain` · definition — Positive-margin admissible states for ideal-gas Euler
- `lem-pe03-euler-llf-split-state-positive` · lemma — Ideal-gas Euler states remain positive under Lax–Friedrichs flux splitting
- `def-pe03-tadmor-entropy-conservative-flux` · definition — Tadmor entropy-conservative two-point flux
- `prop-pe03-euler-state-and-margin-domains-are-convex-and-closed` · proposition — Euler positive states are convex and positive-margin sets are closed convex
- `def-pe03-entropy-stable-dissipative-flux` · definition — Entropy-stable flux from positive-semidefinite entropy-variable dissipation
- `lem-pe03-hll-half-cell-riemann-averages` · lemma — First-order HLL updates are averages of adjacent half-cell fan averages
- `thm-pe03-hll-update-preserves-convex-invariant-domain` · theorem — First-order HLL update preserves a convex invariant domain under admissible fan averages
- `thm-pe03-semidiscrete-entropy-inequality-for-dissipative-flux` · theorem — Semidiscrete cell entropy inequality for Tadmor-dissipative fluxes
- `thm-pe03-convex-scaling-limiter-preserves-mean-and-node-positivity` · theorem — Convex scaling preserves the cell mean and positive-margin node states
- `thm-pe03-ideal-gas-llf-branch-preserves-positivity` · theorem — Symmetric HLL speeds preserve ideal-gas density and internal-energy positivity

### `invariant-domain-and-entropy-stable-conservative-schemes-examples` — Positivity, invariant domains and entropy-stable systems fluxes — Examples (4 item(s))

- `ex-pe03-burgers-entropy-residual` · example — Exact Tadmor entropy residual for a dissipative Burgers flux
- `ex-pe03-conservative-positivity-rescaling` · example — Two Euler quadrature nodes rescaled to a positive margin
- `ex-pe03-entropy-stable-underresolved-shock` · example — An entropy-stable Burgers flux still smears an under-resolved shock
- `ex-pe03-near-vacuum-euler-hll-update` · example — A near-vacuum Euler state remains positive under symmetric HLL speeds

## Your seams

Your pages depend on another group's:

- `high-resolution-tvd-eno-and-weno-methods` requires `monotone-finite-volume-entropy-convergence` (group j, batch 29)
- `high-resolution-tvd-eno-and-weno-methods` requires `riemann-solvers-for-hyperbolic-systems` (group j, batch 30)

Another group's pages depend on yours:

- `mixed-hdiv-fluxes-and-darcy-discretization` (group l) requires your `mixed-finite-elements-and-stokes-stability`
- `elasticity-near-incompressibility-and-locking-free-discretization` (group l) requires your `mixed-finite-elements-and-stokes-stability`
- `hyperbolic-dg-and-summation-by-parts-discretizations` (group l) requires your `invariant-domain-and-entropy-stable-conservative-schemes`
- `well-balanced-balance-laws-and-wet-dry-fronts` (group m) requires your `invariant-domain-and-entropy-stable-conservative-schemes`
- `energy-stable-incompressible-navier-stokes-discretization` (group n) requires your `mixed-finite-elements-and-stokes-stability`
- `overlapping-schwarz-and-stable-subspace-decompositions` (group o) requires your `mixed-finite-elements-and-stokes-stability`

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

# Step 5 batch adjudication, `numerical-analysis-remaining-71-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
