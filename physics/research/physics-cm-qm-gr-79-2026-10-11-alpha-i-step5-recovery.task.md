# Step 5 adjudication — group **i**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 26, 27, 28: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **26**: `research/physics-cm-qm-gr-79-2026-10-11-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/physics-cm-qm-gr-79-2026-10-11-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **28**: `research/physics-cm-qm-gr-79-2026-10-11-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 26 | `cm10-rigid-body-configuration-and-inertia` | A | non-relativistic-classical-mechanics | 131 | `cm-math-rotation-double-cover`, `cm-math-verification`, `cm03-momentum-work-and-energy-balances`, `cm01-framework-quantities-and-geometry`, `cm-math-geometry`, `cm-math-rigid`, `cm-math-balances`, `the-topology-of-euclidean-space`, `measures-and-their-basic-properties`, `rank-theorems-and-embedded-submanifolds` |
| 26 | `cm10-rigid-body-configuration-and-inertia-examples` | B | non-relativistic-classical-mechanics | 132 | `cm10-rigid-body-configuration-and-inertia`, `cm-math-rigid`, `cm01-framework-quantities-and-geometry`, `cm-math-geometry`, `cm-math-verification`, `sine-cosine-and-the-definition-of-pi`, `pi-the-equivalent-characterizations` |
| 27 | `cm11-rigid-body-dynamics-and-stability` | A | non-relativistic-classical-mechanics | 133 | `cm06-regular-constraints-and-moving-frames`, `cm10-rigid-body-configuration-and-inertia`, `cm01-framework-quantities-and-geometry`, `cm03-momentum-work-and-energy-balances`, `cm-math-rigid`, `cm-math-balances`, `cm-math-geometry`, `cm-math-rotation-double-cover` |
| 27 | `cm11-rigid-body-dynamics-and-stability-examples` | B | non-relativistic-classical-mechanics | 134 | `cm11-rigid-body-dynamics-and-stability`, `cm10-rigid-body-configuration-and-inertia`, `cm-math-rotation-double-cover`, `cm01-framework-quantities-and-geometry`, `cm-math-rigid` |
| 28 | `cm12-legendre-transformation-and-hamiltonian-mechanics` | A | non-relativistic-classical-mechanics | 135 | `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm-math-variations`, `cm01-framework-quantities-and-geometry`, `cm06-regular-constraints-and-moving-frames` |
| 28 | `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` | B | non-relativistic-classical-mechanics | 136 | `cm12-legendre-transformation-and-hamiltonian-mechanics`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm06-regular-constraints-and-moving-frames`, `cm-math-variations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm10-rigid-body-configuration-and-inertia` — Rigid-body configuration and inertia (8 item(s))

- `post-cm10-rigid-material` · postulate — Adoption of the rigid-material model branch: reference mass distribution, rigid placements, orientation and scope
- `def-cm10-rigid-body-configuration` · definition — Configuration, configuration space and orientation of a rigid-material model in an inertial frame
- `def-cm10-angular-velocity` · definition — Body and spatial angular velocity of a rigid-material motion, and the material velocity field
- `def-cm10-inertia-tensor` · definition — Inertia matrix, spatial inertia tensor, inertia tensor about a point and moment of inertia about an axis of a rigid-material model
- `pthm-cm10-kinetic-splitting` · physics-theorem — Total momentum, kinetic-energy splitting and centre-of-mass angular momentum of a rigid-material motion
- `pthm-cm10-principal-axes` · physics-theorem — Principal axes and principal moments of the inertia data of a rigid-material model, axis moments and extremal values
- `pthm-cm10-frame-covariance` · physics-theorem — Behaviour of the rigid-material configuration, angular velocity, inertia data and inertial quantities under a change of inertial frame
- `rem-cm10-orientation-charts` · remark — The global orientation and its charts: Euler angles, the quaternion double cover and singularities of parametrizations

### `cm10-rigid-body-configuration-and-inertia-examples` — Rigid-body configuration and inertia — Examples (4 item(s))

- `ex-cm10-equilateral-triangle-rotational-inertia` · example — An equilateral-triangle rigid-material model: inertia matrix, principal axes, rotational term and the threefold-symmetry check
- `cex-cm10-degenerate-line-mass-singular-inertia` · counterexample — A rigid-material model of two point masses on a line: the inertia matrix can be singular, and rotation about the line is invisible to the rotational term
- `ex-cm10-euler-angle-pole-and-orientation` · example — The Euler-angle pole: a degenerate parametrization of $SO(3)$ while the physical orientation remains regular
- `ex-cm10-parallel-axis-shift-check` · example — Parallel-axis check for the equilateral-triangle model: inertia tensor about a vertex computed two ways

### `cm11-rigid-body-dynamics-and-stability` — Rigid-body dynamics and stability (8 item(s))

- `post-cm11-torque-balance` · postulate — Adoption of the external-torque branch of the rigid-material model: declared torque data and the balance of angular momentum about the centre of mass
- `pthm-cm11-euler-equations` · physics-theorem — Euler's equations with torque for the rigid-material model, the rotational power identity, the torque-free reduction and frame covariance
- `pthm-cm11-torque-free-invariants` · physics-theorem — Torque-free motion of the rigid-material model: conservation of the angular momentum about the centre of mass, the energy-momentum invariants, the principal-axis equations and global existence of the spin dynamics
- `pthm-cm11-principal-rotations` · physics-theorem — Principal-axis uniform rotations of the torque-free rigid-material model: existence, a fixed spatial direction, the invariants, and the converse classification
- `pthm-cm11-linearized-spin` · physics-theorem — Linearization of the torque-free spin of the rigid-material model at a principal-axis spin: the oscillatory/exponential dichotomy and linear stability
- `pthm-cm11-nonlinear-spin-stability` · physics-theorem — Nonlinear stability of the torque-free spin of the rigid-material model about an extreme principal axis, and instability about the intermediate axis, with an explicit escape time and the orientation caveat
- `post-cm11-heavy-top` · postulate — Adoption of the heavy symmetric top branch: axisymmetric rigid material, a fixed pivot material point, a uniform gravitational field and the balance of angular momentum about the pivot
- `pthm-cm11-top-reduction` · physics-theorem — Reduction of the heavy symmetric top branch: pivotal angular momentum, Euler-angle equations, the two conserved momenta and the one-dimensional $\theta$ equation

### `cm11-rigid-body-dynamics-and-stability-examples` — Rigid-body dynamics and stability — Examples (4 item(s))

- `ex-cm11-free-top-checks` · example — Two explicit free-rotation models checked: principal-axis spins, a non-uniform symmetric-top motion with its invariants, and the linearized frequencies of an asymmetric top
- `cex-cm11-invariants-do-not-force-uniform-rotation` · counterexample — A torque-free motion of a symmetric rigid-material model with constant angular momentum and energy whose body angular velocity is not constant: the invariants do not force a uniform rotation
- `ex-cm11-intermediate-axis-escape` · example — Explicit escape from the intermediate-axis spin of the model with inertia diag(1,2,3): the constants, the perturbed invariant level, and the escape-time bound
- `ex-cm11-heavy-top-steady-precession` · example — A steady precession of the heavy symmetric top checked on explicit data: the pivot balance, the two conserved momenta and the reduced energy

### `cm12-legendre-transformation-and-hamiltonian-mechanics` — Legendre transformation and Hamiltonian mechanics (9 item(s))

- `def-cm12-cotangent-momentum` · definition — The momentum of a potential presentation: the fibre derivative of the mechanical Lagrangian, the Cartesian momentum Mv and generalized momenta
- `def-cm12-regularity` · definition — Velocity-regular potential presentations: the velocity Hessian of the mechanical Lagrangian, regular states and regular charts
- `def-cm12-hyperregularity` · definition — Hyperregular potential presentations and their inverse Legendre branches in the model's charts
- `def-cm12-hamiltonian` · definition — The Hamiltonian of a hyperregular potential presentation: the Legendre transform of the mechanical Lagrangian, its domain and its dimensions
- `pthm-cm12-local-legendre` · physics-theorem — The velocity Hessian of the mechanical Lagrangian and the local invertibility of its Legendre map in every chart of the model
- `pthm-cm12-mechanical-hyperregularity` · physics-theorem — Every potential presentation is hyperregular in its charts, with inverse branch $v = \mathsf M^{-1}p$ (or $G(q)^{-1}p$) and the explicit kinetic-plus-potential Hamiltonian
- `pthm-cm12-hamilton-equivalence` · physics-theorem — Hamilton's equations of the mechanical presentation are equivalent to the model's equation of motion, with residual forces as momentum sources and the coordinate form on every chart
- `pthm-cm12-energy-time` · physics-theorem — The mechanical Hamiltonian is the model's energy in the inertial chart, its balance is the energy balance, and the substituted-chart Hamiltonian is the energy of time-independent coordinates
- `rem-cm12-singular-models` · remark — Scope of the Legendre transformation: singular velocity Hessians, regular versus hyperregular presentations, and the excluded constraint theory

### `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` — Legendre transformation and Hamiltonian mechanics — Examples (5 item(s))

- `ex-cm12-mechanical-legendre-positive-metric` · example — Positive kinetic metric: the fibre map $p = \mathsf Mv$, the Hamiltonian and Hamilton's equations on explicit one- and two-label data
- `ex-cm12-pendulum-legendre` · example — The planar pendulum in Hamiltonian form: kinetic metric $ml^{2}$, substituted Hamiltonian $p^{2}/(2ml^{2}) - mgl\cos\theta$ and the reduced equation
- `ex-cm12-shifted-momentum` · example — Shifted momentum from a total-derivative modification: $p' = p + F_x$, $H' = H - F_t$ and unchanged motion on explicit data
- `ex-cm12-regular-not-surjective` · example — Regular but not hyperregular: the Lagrangian $e^{v}$, its branch $H(p)=p\ln p-p$ on $p>0$ and the absent inverse at nonpositive momenta
- `ex-cm12-moving-coordinates` · example — Moving coordinates: the substituted Hamiltonian of a spring on a uniformly moving support, its conservation and the non-conservation of the mechanical energy

## Your seams

Your pages depend on another group's:

- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-rotation-double-cover` (group q, batch 16)
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-verification` (group o, batch 12)
- `cm10-rigid-body-configuration-and-inertia` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm10-rigid-body-configuration-and-inertia` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-geometry` (group l, batch 1)
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-rigid` (group n, batch 9)
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-balances` (group l, batch 2)
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm-math-rigid` (group n, batch 9)
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm-math-geometry` (group l, batch 1)
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm-math-verification` (group o, batch 12)
- `cm11-rigid-body-dynamics-and-stability` requires `cm06-regular-constraints-and-moving-frames` (group g, batch 22)
- `cm11-rigid-body-dynamics-and-stability` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm11-rigid-body-dynamics-and-stability` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-rigid` (group n, batch 9)
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-balances` (group l, batch 2)
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-geometry` (group l, batch 1)
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-rotation-double-cover` (group q, batch 16)
- `cm11-rigid-body-dynamics-and-stability-examples` requires `cm-math-rotation-double-cover` (group q, batch 16)
- `cm11-rigid-body-dynamics-and-stability-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm11-rigid-body-dynamics-and-stability-examples` requires `cm-math-rigid` (group n, batch 9)
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm-math-variations` (group m, batch 4)
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm06-regular-constraints-and-moving-frames` (group g, batch 22)
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm06-regular-constraints-and-moving-frames` (group g, batch 22)
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm-math-variations` (group m, batch 4)

Another group's pages depend on yours:

- `cm13-symplectic-geometry-and-canonical-methods` (group j) requires your `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm13-symplectic-geometry-and-canonical-methods-examples` (group j) requires your `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm12-legendre-transformation-and-hamiltonian-mechanics`

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
