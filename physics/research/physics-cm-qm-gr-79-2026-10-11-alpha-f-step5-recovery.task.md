# Step 5 adjudication — group **f**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 17, 18, 19: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **17**: `research/physics-cm-qm-gr-79-2026-10-11-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/physics-cm-qm-gr-79-2026-10-11-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **19**: `research/physics-cm-qm-gr-79-2026-10-11-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 17 | `cm01-framework-quantities-and-geometry` | A | non-relativistic-classical-mechanics | 113 | `cm-math-geometry` |
| 17 | `cm01-framework-quantities-and-geometry-examples` | B | non-relativistic-classical-mechanics | 114 | `cm01-framework-quantities-and-geometry`, `sine-cosine-and-the-definition-of-pi`, `cm-math-geometry` |
| 18 | `cm02-forces-initial-data-and-newtonian-flow` | A | non-relativistic-classical-mechanics | 115 | `cm-math-approximation`, `cm01-framework-quantities-and-geometry`, `cm-math-balances` |
| 18 | `cm02-forces-initial-data-and-newtonian-flow-examples` | B | non-relativistic-classical-mechanics | 116 | `cm02-forces-initial-data-and-newtonian-flow`, `fundamental-trigonometric-identities`, `finite-probability-and-the-probabilistic-method`, `monotone-functions-and-discontinuities`, `cm01-framework-quantities-and-geometry`, `cm-math-approximation` |
| 19 | `cm03-momentum-work-and-energy-balances` | A | non-relativistic-classical-mechanics | 117 | `cm02-forces-initial-data-and-newtonian-flow`, `line-integrals-and-the-gradient-theorem`, `cm-math-rigid`, `cm01-framework-quantities-and-geometry`, `cm-math-balances`, `cm-math-geometry` |
| 19 | `cm03-momentum-work-and-energy-balances-examples` | B | non-relativistic-classical-mechanics | 118 | `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm01-framework-quantities-and-geometry` — Framework, quantities and geometry (8 item(s))

- `post-cm01-spacetime` · postulate — Adopted Newtonian spacetime structure: absolute time, Euclidean spatial slices and their smooth structure
- `post-cm01-frames` · postulate — Inertial frames, stationary observers and the adopted Galilean transformations between frames
- `post-cm01-worldlines` · postulate — Particle labels, worldlines, the frame-time parameter condition and fixed inertial masses
- `def-cm01-units` · definition — Dimensions and SI unit conventions of the non-relativistic classical mechanics framework
- `def-cm01-configuration` · definition — Configuration domain of $N$ labeled particles: open admissible sets, regular holonomic constraints and the mass operator
- `def-cm01-velocity-acceleration` · definition — Coordinate velocity and acceleration of a worldline in an inertial frame, and the spatial velocity and acceleration vectors
- `pthm-cm01-galilean-kinematics` · physics-theorem — Galilean transformation of worldlines: velocity and acceleration laws, frame-independence of zero coordinate acceleration, and the group of frame changes
- `rem-cm01-model-limit` · remark — Status audit and model limits of the framework page: primitive data, adopted assumptions, derived objects and what is not claimed

### `cm01-framework-quantities-and-geometry-examples` — Framework, quantities and geometry — Examples (6 item(s))

- `ex-cm01-galilean-boost-of-a-free-motion` · example — A worked Galilean boost: the same uniform motion in two inertial frames
- `ex-cm01-rotating-basis-of-a-free-motion` · example — A rotating spatial basis is not an inertial frame: nonzero coordinate acceleration of a uniform motion
- `cex-cm01-coordinate-velocity-is-frame-dependent` · counterexample — Coordinate velocity is not an inertial-frame-independent quantity
- `ex-cm01-two-particle-rigid-rod-configuration` · example — Configuration domains of two labeled particles: collision exclusion and a rigid rod as a regular holonomic constraint
- `ex-cm01-dimension-bookkeeping` · example — Dimension bookkeeping for the quantities and frame parameters of the framework page
- `ex-cm01-worldline-parameter-condition` · example — The frame-time parameter condition of a worldline: failure under rescaling and behaviour under time shifts

### `cm02-forces-initial-data-and-newtonian-flow` — Forces, initial data and Newtonian flow (8 item(s))

- `post-cm02-force-superposition` · postulate — Adopted force model: force maps, the equation of motion, additive composition of force contributions and frame covariance
- `post-cm02-interactions` · postulate — Restricted interaction models: pair decompositions, antisymmetry and centrality options, potential forces and the gravitational branch
- `def-cm02-newtonian-flow` · definition — The associated first-order system, motions, maximal motions and the Newtonian flow of a force model
- `pthm-cm02-ivp` · physics-theorem — Local existence and uniqueness for the Newtonian initial-value problem, with the quantitative Picard-Lindelöf cylinder
- `pthm-cm02-continuation` · physics-theorem — Maximal Newtonian motions and the compact-continuation criterion: finite-time breakdown requires escape from every compact subset of the time-state domain
- `ex-cm02-uniform-field` · example — The uniform-force model: explicit global motion of a label under a constant declared field, with uniqueness, dimensions and frame covariance
- `post-cm02-drag` · postulate — The linear drag model: a phenomenological velocity-proportional resistance with a declared coefficient
- `rem-cm02-open-system-warning` · remark — Status audit and model boundaries of the force page: open systems, frame selection, breakdown and empirical scope

### `cm02-forces-initial-data-and-newtonian-flow-examples` — Forces, initial data and Newtonian flow — Examples (5 item(s))

- `ex-cm02-force-model-regularity-checks` · example — Standing regularity of the page's force models checked: uniform field, linear drag and the inverse-square model on its collision-excluded domain
- `ex-cm02-constant-field-projectile` · example — Projectile motion in the constant-field model: planar parabolic trajectory, flight time and level range for stated model data
- `ex-cm02-drag-terminal-velocity` · example — Motion under linear drag and a constant applied force: explicit global solution and approach to the terminal velocity
- `cex-cm02-nonunique-flow-for-a-continuous-force` · counterexample — Continuity of the force map alone does not give unique motions: two distinct Newtonian motions through one datum for $F=\lambda\sqrt{|x_1|/\ell_*}\,e_1$
- `cex-cm02-singular-collision-finite-time` · counterexample — A singular collision in finite time: the inverse-square external model has a motion whose maximal interval is bounded above

### `cm03-momentum-work-and-energy-balances` — Momentum, work and energy balances (9 item(s))

- `def-cm03-centre-of-mass-and-momenta` · definition — Total mass, total momentum, centre of mass, angular momentum, torque, kinetic energy, power and work of a particle model in an inertial frame
- `pthm-cm03-centre-of-mass-and-kinetic-splitting` · physics-theorem — Total momentum equals total mass times centre-of-mass velocity, and the kinetic energy splits into centre-of-mass and relative parts (two-body reduced mass)
- `pthm-cm03-momentum-balance` · physics-theorem — Total momentum balance and centre-of-mass equation for a model with antisymmetric pair forces
- `pthm-cm03-angular-momentum-balance` · physics-theorem — Angular momentum balance about a fixed or moving reference point, the internal torque sum, and the centrality case
- `pthm-cm03-work-energy` · physics-theorem — Power of the total force and the work-energy theorem: $K'=\mathcal P$ and $K(t_1)-K(t_0)=W([t_0,t_1])$ along a motion
- `def-cm03-potential-and-mechanical-energy` · definition — Potential presentations of a force model, potential and mechanical energy, closed versus exact force fields, local potentials and equipotential level sets
- `pthm-cm03-energy-balance` · physics-theorem — Mechanical energy balance for a potential presentation: $E'=\partial_tU$ plus the residual power, conservation for a static potential with no residual forces, and the integrated work form
- `pthm-cm03-frame-transformations` · physics-theorem — Transformation of the state quantities under a change of inertial frame: centre of mass, total momentum, kinetic energy, angular momentum, torque, power, work and mechanical energy
- `rem-cm03-conservation-scope` · remark — Status audit and scope of the balance page: conditional conservation, open systems, frames, potential normalization and empirical boundaries

### `cm03-momentum-work-and-energy-balances-examples` — Momentum, work and energy balances — Examples (4 item(s))

- `ex-cm03-two-body-hooke-model-check` · example — A two-body Hooke model with an exact circular relative motion: momentum, kinetic splitting, moving-origin angular momentum, energy conservation and the kinetic boost law checked on explicit data
- `ex-cm03-driven-mechanical-energy-balance` · example — A driven one-dimensional model with a time-dependent potential and a residual force: the mechanical-energy balance, the integrated work form and the normalization ambiguity computed on explicit data
- `cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation` · counterexample — Non-central antisymmetric pair forces with vanishing internal torque sum: the centrality clause is not necessary for angular-momentum conservation
- `cex-cm03-closed-force-field-without-a-global-potential` · counterexample — A closed model force field on an annular domain without a global potential energy: mechanical energy is available only locally

## Your seams

Your pages depend on another group's:

- `cm01-framework-quantities-and-geometry` requires `cm-math-geometry` (group l, batch 1)
- `cm01-framework-quantities-and-geometry-examples` requires `cm-math-geometry` (group l, batch 1)
- `cm02-forces-initial-data-and-newtonian-flow` requires `cm-math-approximation` (group n, batch 7)
- `cm02-forces-initial-data-and-newtonian-flow` requires `cm-math-balances` (group l, batch 2)
- `cm02-forces-initial-data-and-newtonian-flow-examples` requires `cm-math-approximation` (group n, batch 7)
- `cm03-momentum-work-and-energy-balances` requires `cm-math-rigid` (group n, batch 9)
- `cm03-momentum-work-and-energy-balances` requires `cm-math-balances` (group l, batch 2)
- `cm03-momentum-work-and-energy-balances` requires `cm-math-geometry` (group l, batch 1)

Another group's pages depend on yours:

- `cm04-one-dimensional-conservative-and-dissipative-models` (group g) requires your `cm03-momentum-work-and-energy-balances`
- `cm04-one-dimensional-conservative-and-dissipative-models` (group g) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm04-one-dimensional-conservative-and-dissipative-models` (group g) requires your `cm01-framework-quantities-and-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` (group g) requires your `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation` (group g) requires your `cm03-momentum-work-and-energy-balances`
- `cm05-two-body-central-forces-and-gravitation` (group g) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm05-two-body-central-forces-and-gravitation` (group g) requires your `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation-examples` (group g) requires your `cm01-framework-quantities-and-geometry`
- `cm05-two-body-central-forces-and-gravitation-examples` (group g) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm05-two-body-central-forces-and-gravitation-examples` (group g) requires your `cm03-momentum-work-and-energy-balances`
- `cm06-regular-constraints-and-moving-frames` (group g) requires your `cm03-momentum-work-and-energy-balances`
- `cm06-regular-constraints-and-moving-frames` (group g) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm06-regular-constraints-and-moving-frames` (group g) requires your `cm01-framework-quantities-and-geometry`
- `cm06-regular-constraints-and-moving-frames-examples` (group g) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm06-regular-constraints-and-moving-frames-examples` (group g) requires your `cm01-framework-quantities-and-geometry`
- `cm06-regular-constraints-and-moving-frames-examples` (group g) requires your `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics` (group h) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm07-stationary-action-and-lagrangian-dynamics` (group h) requires your `cm01-framework-quantities-and-geometry`
- `cm07-stationary-action-and-lagrangian-dynamics` (group h) requires your `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` (group h) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` (group h) requires your `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` (group h) requires your `cm01-framework-quantities-and-geometry`
- `cm08-symmetry-noether-and-conditional-conservation` (group h) requires your `cm03-momentum-work-and-energy-balances`
- `cm08-symmetry-noether-and-conditional-conservation` (group h) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm08-symmetry-noether-and-conditional-conservation` (group h) requires your `cm01-framework-quantities-and-geometry`
- `cm08-symmetry-noether-and-conditional-conservation-examples` (group h) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm08-symmetry-noether-and-conditional-conservation-examples` (group h) requires your `cm03-momentum-work-and-energy-balances`
- `cm08-symmetry-noether-and-conditional-conservation-examples` (group h) requires your `cm01-framework-quantities-and-geometry`
- `cm09-coupled-oscillations-and-approximation` (group h) requires your `cm03-momentum-work-and-energy-balances`
- `cm09-coupled-oscillations-and-approximation` (group h) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm09-coupled-oscillations-and-approximation` (group h) requires your `cm01-framework-quantities-and-geometry`
- `cm09-coupled-oscillations-and-approximation-examples` (group h) requires your `cm01-framework-quantities-and-geometry`
- `cm10-rigid-body-configuration-and-inertia` (group i) requires your `cm03-momentum-work-and-energy-balances`
- `cm10-rigid-body-configuration-and-inertia` (group i) requires your `cm01-framework-quantities-and-geometry`
- `cm10-rigid-body-configuration-and-inertia-examples` (group i) requires your `cm01-framework-quantities-and-geometry`
- `cm11-rigid-body-dynamics-and-stability` (group i) requires your `cm01-framework-quantities-and-geometry`
- `cm11-rigid-body-dynamics-and-stability` (group i) requires your `cm03-momentum-work-and-energy-balances`
- `cm11-rigid-body-dynamics-and-stability-examples` (group i) requires your `cm01-framework-quantities-and-geometry`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i) requires your `cm03-momentum-work-and-energy-balances`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i) requires your `cm01-framework-quantities-and-geometry`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (group i) requires your `cm03-momentum-work-and-energy-balances`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (group i) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (group i) requires your `cm01-framework-quantities-and-geometry`
- `cm13-symplectic-geometry-and-canonical-methods` (group j) requires your `cm03-momentum-work-and-energy-balances`
- `cm13-symplectic-geometry-and-canonical-methods` (group j) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm13-symplectic-geometry-and-canonical-methods` (group j) requires your `cm01-framework-quantities-and-geometry`
- `cm13-symplectic-geometry-and-canonical-methods-examples` (group j) requires your `cm03-momentum-work-and-energy-balances`
- `cm13-symplectic-geometry-and-canonical-methods-examples` (group j) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm13-symplectic-geometry-and-canonical-methods-examples` (group j) requires your `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm03-momentum-work-and-energy-balances`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm03-momentum-work-and-energy-balances`
- `cm15-scattering-and-impulse-model-boundaries` (group j) requires your `cm01-framework-quantities-and-geometry`
- `cm15-scattering-and-impulse-model-boundaries` (group j) requires your `cm03-momentum-work-and-energy-balances`
- `cm15-scattering-and-impulse-model-boundaries` (group j) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm15-scattering-and-impulse-model-boundaries-examples` (group j) requires your `cm01-framework-quantities-and-geometry`
- `cm15-scattering-and-impulse-model-boundaries-examples` (group j) requires your `cm03-momentum-work-and-energy-balances`
- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm01-framework-quantities-and-geometry`
- `cm16-stability-perturbations-and-chaos-examples` (group k) requires your `cm01-framework-quantities-and-geometry`
- `cm16-stability-perturbations-and-chaos-examples` (group k) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` (group k) requires your `cm01-framework-quantities-and-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` (group k) requires your `cm01-framework-quantities-and-geometry`
- `cm18-measurement-uncertainty-and-later-bridges` (group k) requires your `cm03-momentum-work-and-energy-balances`
- `cm18-measurement-uncertainty-and-later-bridges` (group k) requires your `cm01-framework-quantities-and-geometry`
- `cm18-measurement-uncertainty-and-later-bridges` (group k) requires your `cm02-forces-initial-data-and-newtonian-flow`
- `cm18-measurement-uncertainty-and-later-bridges-examples` (group k) requires your `cm01-framework-quantities-and-geometry`
- `cm18-measurement-uncertainty-and-later-bridges-examples` (group k) requires your `cm02-forces-initial-data-and-newtonian-flow`

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
