# Step 5 adjudication — group **q**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 16, 43, 44: 3 A/B pair(s), 6 page(s), 52 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/physics-cm-qm-gr-79-2026-10-11-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **43**: `research/physics-cm-qm-gr-79-2026-10-11-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **44**: `research/physics-cm-qm-gr-79-2026-10-11-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-cm-qm-gr-79-2026-10-11-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 16 | `cm-math-rotation-double-cover` | A | non-relativistic-classical-mechanics-mathematics | 111 | `cm-math-dynamics`, `lie-subgroups-actions-and-homogeneous-spaces`, `cm-math-geometry`, `cm-math-balances` |
| 16 | `cm-math-rotation-double-cover-examples` | B | non-relativistic-classical-mechanics-mathematics | 112 | `cm-math-rotation-double-cover` |
| 43 | `qm-framework-and-quantities` | A | non-relativistic-quantum-mechanics | 165 | `qm-math-magnetic-and-detection`, `cm-math-geometry`, `qm-math-composites`, `qm-math-orbital-and-spin` |
| 43 | `qm-framework-and-quantities-examples` | B | non-relativistic-quantum-mechanics | 166 | `qm-framework-and-quantities`, `qm-math-magnetic-and-detection`, `qm-math-composites`, `qm-math-orbital-and-spin`, `cm-math-geometry`, `qm-math-fock-and-equilibrium` |
| 44 | `qm-state-geometry` | A | non-relativistic-quantum-mechanics | 167 | `qm-framework-and-quantities`, `qm-math-composites` |
| 44 | `qm-state-geometry-examples` | B | non-relativistic-quantum-mechanics | 168 | `qm-state-geometry`, `construction-of-r-via-cauchy-sequences`, `qm-framework-and-quantities`, `qm-math-orbital-and-spin`, `qm-math-composites` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm-math-rotation-double-cover` — Rotation Double Cover (7 item(s))

- `def-cm-quaternion-rotation-map-and-cover` · definition — The quaternion rotation map $\rho$: conjugation on the imaginary quaternions, the unit sphere $S^3$, and quaternion lifts
- `lem-cm-quaternion-product-rule-and-conjugation-formula` · lemma — The product rule for quaternion and matrix curves, multiplicativity of the quaternion norm, and the conjugation formula $q\,\varphi(v)\,\bar q=\varphi\bigl((a^{2}-\|u\|^{2})v+2\langle u,v\rangle u+2a\,(u\times v)\bigr)$
- `lem-cm-body-angular-velocity-of-a-rotation-path` · lemma — The body angular velocity of a $C^1$ rotation path: $\Omega=R^{\mathsf T}R'$ is skew, $\Omega z=\omega\times z$ determines a unique continuous $\omega$, and $R'=R\Omega$
- `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity` · lemma — The quaternion lift of a prescribed continuous angular velocity: $q'=\tfrac12 q\,\varphi(\omega(t))$ keeps $S^3$ invariant, its rotation path has body angular velocity $\omega$, and the initial value problem has a unique solution on the whole interval
- `prop-cm-quaternion-angular-velocity-reconstruction` · proposition — Angular-velocity reconstruction from a unit-quaternion path: for $C^1$ $q:I\to S^3$ the body angular velocity of $\rho\circ q$ is $\omega=2\varphi^{-1}(q^{-1}q')$
- `thm-cm-quaternion-lift-exists-and-is-unique` · theorem — Existence, uniqueness and sign ambiguity of the quaternion lift of a $C^1$ rotation path
- `rem-cm-quaternion-lift-scope-and-sign` · remark — Scope of the quaternion lift: the global sign ambiguity, closed loops, and the absence of a physical spin claim

### `cm-math-rotation-double-cover-examples` — Rotation Double Cover — Examples (5 item(s))

- `ex-cm-constant-angular-velocity-quaternion-lift` · example — Constant angular velocity: the lift $q(t)=\cos(\omega_0t/2)+\varphi(\hat n)\sin(\omega_0t/2)$ is the rotation about $\hat n$ through $\omega_0t$, and a full turn lifts to the antipode
- `ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis` · example — A time-varying rate about a fixed axis: $q(t)=q_0\bigl(\cos((\theta(t)-\theta(0))/2)+\varphi(\hat n)\sin((\theta(t)-\theta(0))/2)\bigr)$ solves the lift equation with $\omega(t)=\theta'(t)\hat n$
- `ex-cm-quaternion-angular-velocity-reconstruction-check` · example — A non-axis-constant check of the reconstruction formula: for $q=(\cos\tfrac t2+\varphi(e_1)\sin\tfrac t2)(\cos\tfrac t2+\varphi(e_2)\sin\tfrac t2)$ one gets $\omega(t)=(\cos t,1,\sin t)$
- `ex-cm-two-to-one-preimages-and-homomorphism-check` · example — Finite checks of the cover: the half-turn rotations $\rho(\pm i),\rho(\pm j),\rho(\pm k)$, the identity $\rho(i)\rho(j)=\rho(ij)$, and the exact preimages of $\rho(k)$
- `cex-cm-no-closed-lift-along-a-full-turn` · counterexample — A closed rotation loop with no closed lift: the full turn about an axis lifts from $1$ to $-1$

### `qm-framework-and-quantities` — Qm Framework And Quantities (16 item(s))

- `def-nrqm-framework-newtonian-spacetime` · definition — The Newtonian spacetime arena of the framework
- `def-nrqm-framework-galilei-transformations` · definition — The Galilean transformations of the coordinate space
- `lem-nrqm-framework-galilei-transformations-form-a-group` · lemma — The Galilean transformations form a group of bijections of the coordinate space
- `def-nrqm-framework-inertial-frames` · definition — Inertial frames of the framework and the class of frame changes
- `def-nrqm-framework-classical-apparatus-trajectories` · definition — Classical apparatus and preparation trajectories of the framework
- `def-nrqm-framework-quantities-and-units` · definition — Dimensions, SI unit conventions and quantity types of the framework
- `lem-nrqm-framework-ccr-on-the-schwartz-core` · lemma — Canonical commutation relations of position and momentum on the Schwartz core
- `post-nrqm-framework-state-and-composition` · postulate — State and composition postulate P1: Hilbert spaces, preparations and composite systems
- `post-nrqm-framework-observable-and-probability` · postulate — Observable and probability postulate P2: self-adjoint observables, spectral probability and finite unsharp outcomes
- `post-nrqm-framework-ideal-conditional-measurement` · postulate — Ideal conditional measurement postulate P3: the projective Lueders update and discarded outcomes
- `post-nrqm-framework-autonomous-dynamics` · postulate — Autonomous dynamics postulate P4: self-adjoint generators and unitary evolution
- `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle` · postulate — Kinematics and massive-particle model postulate P5: Newtonian frames and one-particle operators
- `post-nrqm-framework-identical-particles-and-spin` · postulate — Identical-particle and spin assignments P6: permutation sectors and finite-spin representations
- `post-nrqm-framework-preparation-and-apparatus` · postulate — Preparation and apparatus postulate P7: declared preparations, isolation and sampling assumptions
- `rem-nrqm-framework-assumption-classes-and-scope` · remark — Assumption classes and scope of the framework: P1-P7, the extension postulates and what is excluded
- `rem-nrqm-framework-primitive-and-derived-status` · remark — Primitive, adopted and derived quantities of the framework

### `qm-framework-and-quantities-examples` — Qm Framework And Quantities — Examples (6 item(s))

- `ex-nrqm-framework-dimension-bookkeeping` · example — Dimension bookkeeping for the quantities and laws of the framework
- `ex-nrqm-framework-quantity-type-checks` · example — Type checks: rays, density operators, mixtures, local quantities and outcome laws
- `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit` · counterexample — The massive free-particle family has no strong zero-mass limit on Schwartz states
- `cex-nrqm-framework-quadratic-shear-is-not-galilean` · counterexample — A smooth time-dependent translation chart need not be an inertial frame
- `cex-nrqm-framework-mean-position-can-fail-to-exist` · counterexample — The mean position of a normalized state need not exist
- `rem-nrqm-framework-examples-scope-limits` · remark — What the example and counterexample checks of this companion page establish

### `qm-state-geometry` — Qm State Geometry (11 item(s))

- `def-nrqm-state-geometry-state-vectors-and-rays` · definition — State vectors, unit vectors, rays, normalization and phases of a Hilbert space
- `lem-nrqm-state-geometry-normalization-and-phase-classes` · lemma — Normalization, ray equivalence and the phase orbits of the unit sphere
- `lem-nrqm-state-geometry-ray-to-rank-one-projection` · lemma — Rays, unit vectors and rank-one Hilbert projections
- `def-nrqm-state-geometry-pure-mixed-states-and-purity` · definition — The state space: density operators, pure and mixed states, and purity
- `lem-nrqm-state-geometry-density-set-convex-and-complete` · lemma — The state space is convex, closed under countable mixtures, and complete in the trace norm
- `lem-nrqm-state-geometry-purity-criterion` · lemma — Purity, spectral weights and the criterion for a pure state
- `lem-nrqm-state-geometry-extreme-points-of-the-state-space` · lemma — The extreme points of the state space are exactly the pure states
- `def-nrqm-state-geometry-framework-state-space` · definition — The state space of the framework: preparations, pure rays and density operators
- `pthm-nrqm-state-geometry-pure-preparation-phase-invariance` · physics-theorem — Pure preparations are well defined by their rays, and phase factors do not change their states
- `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations` · physics-theorem — Statistical mixtures, spectral decompositions and the extremal role of pure preparations
- `rem-nrqm-state-geometry-scope-and-empirical-status` · remark — Scope audit of the state-geometry page: what is mathematics, what is adopted, and what is deferred

### `qm-state-geometry-examples` — Qm State Geometry — Examples (7 item(s))

- `ex-nrqm-state-geometry-normalization-and-phase-check` · example — A two-dimensional normalization and phase computation
- `ex-nrqm-state-geometry-finite-spin-bloch-ball` · example — The state space of a two-level finite-spin system is the Bloch ball
- `ex-nrqm-state-geometry-fixed-mode-two-level-states` · example — Pure and mixed states of a fixed two-level internal space
- `ex-nrqm-state-geometry-coherent-versus-mixed-preparation` · example — A coherent two-level preparation and the equal statistical mixture are different states
- `ex-nrqm-state-geometry-nonunique-preparation-ensembles` · example — One two-level state from two different preparation ensembles
- `cex-nrqm-state-geometry-zero-vector-is-not-a-preparation` · counterexample — The zero vector determines no pure preparation and no state
- `rem-nrqm-state-geometry-examples-scope-limits` · remark — What the worked checks of the companion page establish

## Your seams

Your pages depend on another group's:

- `cm-math-rotation-double-cover` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-rotation-double-cover` requires `cm-math-geometry` (group l, batch 1)
- `cm-math-rotation-double-cover` requires `cm-math-balances` (group l, batch 2)
- `qm-framework-and-quantities` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-framework-and-quantities` requires `cm-math-geometry` (group l, batch 1)
- `qm-framework-and-quantities` requires `qm-math-composites` (group x, batch 35)
- `qm-framework-and-quantities` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-framework-and-quantities-examples` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-framework-and-quantities-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-framework-and-quantities-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-framework-and-quantities-examples` requires `cm-math-geometry` (group l, batch 1)
- `qm-framework-and-quantities-examples` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-state-geometry` requires `qm-math-composites` (group x, batch 35)
- `qm-state-geometry-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-state-geometry-examples` requires `qm-math-composites` (group x, batch 35)

Another group's pages depend on yours:

- `cm10-rigid-body-configuration-and-inertia` (group i) requires your `cm-math-rotation-double-cover`
- `cm11-rigid-body-dynamics-and-stability` (group i) requires your `cm-math-rotation-double-cover`
- `cm11-rigid-body-dynamics-and-stability-examples` (group i) requires your `cm-math-rotation-double-cover`
- `qm-observables-and-born-probabilities` (group r) requires your `qm-state-geometry`
- `qm-observables-and-born-probabilities` (group r) requires your `qm-framework-and-quantities`
- `qm-observables-and-born-probabilities-examples` (group r) requires your `qm-state-geometry`
- `qm-observables-and-born-probabilities-examples` (group r) requires your `qm-framework-and-quantities`
- `qm-measurement-and-instruments` (group r) requires your `qm-state-geometry`
- `qm-measurement-and-instruments` (group r) requires your `qm-framework-and-quantities`
- `qm-measurement-and-instruments-examples` (group r) requires your `qm-state-geometry`
- `qm-measurement-and-instruments-examples` (group r) requires your `qm-framework-and-quantities`
- `qm-autonomous-dynamics` (group r) requires your `qm-framework-and-quantities`
- `qm-autonomous-dynamics` (group r) requires your `qm-state-geometry`
- `qm-autonomous-dynamics-examples` (group r) requires your `qm-framework-and-quantities`
- `qm-autonomous-dynamics-examples` (group r) requires your `qm-state-geometry`
- `qm-massive-particle-kinematics` (group s) requires your `qm-framework-and-quantities`
- `qm-massive-particle-kinematics` (group s) requires your `qm-state-geometry`
- `qm-massive-particle-kinematics-examples` (group s) requires your `qm-framework-and-quantities`
- `qm-interference-and-local-detection` (group s) requires your `qm-framework-and-quantities`
- `qm-interference-and-local-detection-examples` (group s) requires your `qm-framework-and-quantities`
- `qm-uncertainty-and-compatibility` (group s) requires your `qm-framework-and-quantities`
- `qm-uncertainty-and-compatibility` (group s) requires your `qm-state-geometry`
- `qm-uncertainty-and-compatibility-examples` (group s) requires your `qm-framework-and-quantities`
- `qm-one-dimensional-potentials` (group t) requires your `qm-framework-and-quantities`
- `qm-one-dimensional-potentials-examples` (group t) requires your `qm-framework-and-quantities`
- `qm-harmonic-oscillator` (group t) requires your `qm-framework-and-quantities`
- `qm-harmonic-oscillator` (group t) requires your `qm-state-geometry`
- `qm-harmonic-oscillator-examples` (group t) requires your `qm-framework-and-quantities`
- `qm-symmetries-and-conservation` (group t) requires your `qm-framework-and-quantities`
- `qm-symmetries-and-conservation` (group t) requires your `qm-state-geometry`
- `qm-symmetries-and-conservation-examples` (group t) requires your `qm-framework-and-quantities`
- `qm-symmetries-and-conservation-examples` (group t) requires your `qm-state-geometry`
- `qm-angular-momentum-and-spin` (group u) requires your `cm-math-rotation-double-cover`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-framework-and-quantities`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-state-geometry`
- `qm-angular-momentum-and-spin-examples` (group u) requires your `qm-framework-and-quantities`
- `qm-angular-momentum-and-spin-examples` (group u) requires your `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states` (group u) requires your `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states` (group u) requires your `qm-framework-and-quantities`
- `qm-composites-entanglement-and-reduced-states-examples` (group u) requires your `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states-examples` (group u) requires your `qm-framework-and-quantities`
- `qm-bell-models-and-measurement-limits` (group u) requires your `qm-framework-and-quantities`
- `qm-bell-models-and-measurement-limits` (group u) requires your `qm-state-geometry`
- `qm-bell-models-and-measurement-limits-examples` (group u) requires your `qm-framework-and-quantities`
- `qm-identical-particles-and-exclusion` (group v) requires your `qm-framework-and-quantities`
- `qm-identical-particles-and-exclusion` (group v) requires your `qm-state-geometry`
- `qm-identical-particles-and-exclusion-examples` (group v) requires your `qm-framework-and-quantities`
- `qm-identical-particles-and-exclusion-examples` (group v) requires your `qm-state-geometry`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-framework-and-quantities`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-state-geometry`
- `qm-central-potentials-and-hydrogen-examples` (group v) requires your `qm-framework-and-quantities`
- `qm-controlled-approximations` (group v) requires your `qm-framework-and-quantities`
- `qm-controlled-approximations` (group v) requires your `qm-state-geometry`
- `qm-controlled-approximations-examples` (group v) requires your `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-state-geometry`
- `qm-driven-dynamics-and-adiabatic-limits-examples` (group w) requires your `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits-examples` (group w) requires your `qm-state-geometry`
- `qm-three-dimensional-scattering` (group w) requires your `qm-framework-and-quantities`
- `qm-three-dimensional-scattering` (group w) requires your `qm-state-geometry`
- `qm-three-dimensional-scattering-examples` (group w) requires your `qm-framework-and-quantities`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-framework-and-quantities`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-state-geometry`
- `qm-many-body-and-equilibrium-models-examples` (group w) requires your `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes` (group x) requires your `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes` (group x) requires your `qm-state-geometry`
- `qm-photons-and-radiation-modes-examples` (group x) requires your `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes-examples` (group x) requires your `qm-state-geometry`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-framework-and-quantities`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-state-geometry`
- `qm-light-matter-and-spectral-transitions-examples` (group x) requires your `qm-framework-and-quantities`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-cm-qm-gr-79-2026-10-11-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Historical Step-5 closure recovery, `physics-cm-qm-gr-79-2026-10-11`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/physics-support/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
