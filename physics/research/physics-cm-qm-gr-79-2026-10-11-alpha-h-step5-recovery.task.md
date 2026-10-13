# Step 5 adjudication — group **h**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 23, 24, 25: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **23**: `research/physics-cm-qm-gr-79-2026-10-11-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/physics-cm-qm-gr-79-2026-10-11-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **25**: `research/physics-cm-qm-gr-79-2026-10-11-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 23 | `cm07-stationary-action-and-lagrangian-dynamics` | A | non-relativistic-classical-mechanics | 125 | `cm-math-verification`, `cm06-regular-constraints-and-moving-frames`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm03-momentum-work-and-energy-balances`, `cm-math-variations` |
| 23 | `cm07-stationary-action-and-lagrangian-dynamics-examples` | B | non-relativistic-classical-mechanics | 126 | `cm07-stationary-action-and-lagrangian-dynamics`, `cm02-forces-initial-data-and-newtonian-flow`, `cm03-momentum-work-and-energy-balances`, `cm01-framework-quantities-and-geometry`, `cm-math-variations`, `cm06-regular-constraints-and-moving-frames` |
| 24 | `cm08-symmetry-noether-and-conditional-conservation` | A | non-relativistic-classical-mechanics | 127 | `cm07-stationary-action-and-lagrangian-dynamics`, `cm-math-variations`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry` |
| 24 | `cm08-symmetry-noether-and-conditional-conservation-examples` | B | non-relativistic-classical-mechanics | 128 | `cm08-symmetry-noether-and-conditional-conservation`, `cm02-forces-initial-data-and-newtonian-flow`, `cm03-momentum-work-and-energy-balances`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm01-framework-quantities-and-geometry`, `cm-math-variations`, `cm-math-geometry` |
| 25 | `cm09-coupled-oscillations-and-approximation` | A | non-relativistic-classical-mechanics | 129 | `cm04-one-dimensional-conservative-and-dissipative-models`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-dynamics`, `cm-math-approximation`, `cm-math-geometry` |
| 25 | `cm09-coupled-oscillations-and-approximation-examples` | B | non-relativistic-classical-mechanics | 130 | `cm09-coupled-oscillations-and-approximation`, `cm-math-verification`, `cm01-framework-quantities-and-geometry`, `cm-math-approximation`, `cm-math-dynamics`, `cm-math-geometry`, `cm04-one-dimensional-conservative-and-dissipative-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm07-stationary-action-and-lagrangian-dynamics` — Stationary action and Lagrangian dynamics (10 item(s))

- `def-cm07-action-and-mechanical-lagrangian` · definition — The action functional of a force model with a potential presentation: the mechanical Lagrangian, its chart instance and its dimensions
- `pthm-cm07-first-variation-and-euler-lagrange-expression` · physics-theorem — The first variation of the mechanical action and the Euler-Lagrange expression in model terms
- `pthm-cm07-euler-lagrange-equations` · physics-theorem — The stationary-action criterion and the potential-part Euler-Lagrange equation
- `pthm-cm07-newton-equivalence` · physics-theorem — Stationary curves of the mechanical action are exactly the restrictions of the model's motions (global potential branch)
- `pthm-cm07-coordinate-covariance-of-the-equations` · physics-theorem — Time-dependent coordinate maps transform the potential-part equation into the substituted Euler-Lagrange equation
- `pthm-cm07-boundary-terms-and-gauge` · physics-theorem — Total-derivative Lagrangians, the potential representative and scaling: invariant stationary curves with endpoint terms
- `def-cm07-generalized-coordinates-and-forces` · definition — Generalized-coordinate maps of the model, the substituted Lagrangian, the kinetic metric and generalized forces
- `lem-cm07-immersion-euler-lagrange-transport` · lemma — Transport of the Euler-Lagrange expression under a C^3 map: E of the substituted Lagrangian is the Jacobian-transpose multiple of E of the ambient Lagrangian
- `pthm-cm07-lagrangian-reduction-of-ideal-constraints` · physics-theorem — Ideal scleronomic holonomic constraints: the substituted Lagrange equations are equivalent to the constrained model equation
- `rem-cm07-scope-and-singular-warnings` · remark — Scope of the stationary-action formulation: no minimisation, regular mechanical Lagrangians, no general velocity-constraint equivalence and empirical status

### `cm07-stationary-action-and-lagrangian-dynamics-examples` — Stationary action and Lagrangian dynamics — Examples (6 item(s))

- `ex-cm07-free-particle-straight-lines` · example — The free particle: the unique stationary curve between fixed endpoints is the straight uniform motion, and it minimises the action
- `ex-cm07-oscillator-stationary-saddle-check` · example — The harmonic oscillator on a long interval: the stationary curve is neither a local minimum nor a local maximum
- `ex-cm07-polar-coordinate-kinetic-metric-check` · example — Cylindrical coordinates for one label: the kinetic metric m diag(1, r^2, 1) and the coordinate form of the model's equation
- `ex-cm07-total-derivative-gauge-check` · example — A total-derivative Lagrangian on explicit data: the endpoint term and the unchanged equations
- `ex-cm07-nonholonomic-unrestricted-action-fails` · example — The unrestricted action principle fails for the normalized nonholonomic relation $z_s = x y_s$: the d'Alembert motion is not vakonomic
- `ex-cm07-pendulum-constraint-elimination-check` · example — The planar pendulum by constraint elimination: kinetic metric, Lagrange equation and the ideal reaction recovered

### `cm08-symmetry-noether-and-conditional-conservation` — Symmetry, Noether and conditional conservation (9 item(s))

- `def-cm08-symmetry-of-the-mechanical-lagrangian` · definition — Continuous symmetries of the model's mechanical Lagrangian: symmetry data, the Noether identity, the charge and its dimensions
- `pthm-cm08-point-noether` · physics-theorem — The point Noether theorem of the model: conservation of the charge of a strict symmetry, and the residual-force rate
- `pthm-cm08-general-noether` · physics-theorem — The general Noether theorem of the model: point transformations with time reparametrisation, the charge $p\cdot\xi-E\tau-B$, its residual-force rate and its potential gauge
- `pthm-cm08-time-energy` · physics-theorem — Time translation and the mechanical energy of the model: conservation in the autonomous global potential branch and the sharp failure for a time-dependent potential
- `pthm-cm08-translation` · physics-theorem — Translation symmetry of the model's Lagrangian and conservation of total momentum: exact hypothesis, conservation and its sharpness
- `pthm-cm08-rotation` · physics-theorem — Rotation symmetry of the model's Lagrangian and conservation of angular momentum about the origin
- `pthm-cm08-boost-boundary` · physics-theorem — The Galilean boost charge of the model: exact condition, uniform centre-of-mass motion, the induced motions and the boundary of the conservation law
- `pthm-cm08-moving-chart-energy-function` · physics-theorem — The energy function of a moving chart: exact difference from the inertial mechanical energy and conservation along the chart solutions
- `rem-cm08-external-symmetry-breaking` · remark — Scope of the symmetry-conservation statements: force laws that break kinematic symmetries, residual forces, moving coordinates and the empirical boundary

### `cm08-symmetry-noether-and-conditional-conservation-examples` — Symmetry, Noether and conditional conservation — Examples (4 item(s))

- `ex-cm08-uniform-field-breaks-translation-and-boost` · example — The uniform-force model: translation and boost charges fail across the field while the energy survives, with exact rates and a numerical instance
- `ex-cm08-pair-potential-charges-check` · example — A two-label pair-potential model: translation, rotation, boost and energy charges verified on the model class and on an explicit rigid-rotation motion
- `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy` · example — An oscillator observed in a uniformly rotating chart: the conserved chart Hamiltonian is not the inertial mechanical energy
- `ex-cm08-time-dependent-potential-breaks-energy` · example — A one-label model with a time-dependent potential: the time-translation identity fails and the mechanical energy changes at the rate of the explicit time dependence

### `cm09-coupled-oscillations-and-approximation` — Coupled oscillations and approximation (7 item(s))

- `def-cm09-coupled-quadratic-model` · definition — The coupled quadratic oscillator model: mass metric, stiffness, generalized force, modal vocabulary and the small-oscillation model at a mechanical equilibrium
- `pthm-cm09-free-modes-and-degeneracy` · physics-theorem — The free coupled quadratic model: global existence, the complete modal classification, mode energies, intrinsic degenerate mode subspaces, boundedness and the unstable direction
- `pthm-cm09-linearization-at-a-strict-minimum` · physics-theorem — Small oscillations at a strict minimum: the linearized model, its normal modes and the Lyapunov stability of the nonlinear equilibrium
- `pthm-cm09-linearization-error-bound` · physics-theorem — Finite-time error control for the small-oscillation approximation: the quadratic remainder of the mechanical field and the variation-of-constants bound
- `pthm-cm09-forced-modal-response` · physics-theorem — The forced coupled quadratic model: modal responses, resonance, and boundedness for positive definite stiffness off resonance
- `pthm-cm09-averaging-for-weak-damping` · physics-theorem — Averaging for a weakly damped oscillator: the rotating-frame amplitude, the averaged exponential energy decay and the order-$\varepsilon$ bound on the $O(1/\varepsilon)$ time scale
- `rem-cm09-zero-modes-degeneracy-and-scope` · remark — Scope of the coupled quadratic model: zero modes, degenerate eigenspaces, unstable quadratic directions and the limits of the approximation statements

### `cm09-coupled-oscillations-and-approximation-examples` — Coupled oscillations and approximation — Examples (8 item(s))

- `ex-cm09-two-mass-spring-modes` · example — Two coupled masses on a line: the in-phase and anti-phase normal modes, their frequencies, mode-energies and the zero-stiffness translation mode
- `ex-cm09-triatomic-translation-zero-mode` · example — A linear triatomic chain: the translation zero mode, the antisymmetric stretch and the symmetric stretch, with the corrected frequency comparison
- `ex-cm09-double-pendulum-linear-modes` · example — The equal-arm double pendulum in the linear approximation: the slow same-side mode, the fast opposite-side mode and the bounded modal motions
- `ex-cm09-degenerate-oscillator-subspace` · example — A doubly degenerate quadratic model: every direction is a mode, the modal basis is not intrinsic, and coupling splits the double frequency
- `ex-cm09-unstable-quadratic-mode` · example — The inverted pendulum about its upward equilibrium: the negative modal stiffness, the exponential quadratic mode and the nonlinear instability
- `ex-cm09-forced-resonant-mode-check` · example — A drive along the in-phase pattern of the two-mass chain: resonance exactly at that mode's frequency and a bounded steady response off resonance
- `ex-cm09-weak-damping-averaging-check` · example — An explicit weakly damped oscillator: the averaging constants and the energy-decay bound over five thousand seconds (about 796 undamped periods)
- `ex-cm09-cubic-potential-error-check` · example — A cubic-potential chart system: the exact quadratic remainder, the explicit error constants and a checked finite-time bound

## Your seams

Your pages depend on another group's:

- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm-math-verification` (group o, batch 12)
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm06-regular-constraints-and-moving-frames` (group g, batch 22)
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm-math-variations` (group m, batch 4)
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm-math-variations` (group m, batch 4)
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm06-regular-constraints-and-moving-frames` (group g, batch 22)
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm-math-variations` (group m, batch 4)
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm-math-variations` (group m, batch 4)
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm-math-geometry` (group l, batch 1)
- `cm09-coupled-oscillations-and-approximation` requires `cm04-one-dimensional-conservative-and-dissipative-models` (group g, batch 20)
- `cm09-coupled-oscillations-and-approximation` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm09-coupled-oscillations-and-approximation` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm09-coupled-oscillations-and-approximation` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-dynamics` (group l, batch 3)
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-approximation` (group n, batch 7)
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-geometry` (group l, batch 1)
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-verification` (group o, batch 12)
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-approximation` (group n, batch 7)
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-dynamics` (group l, batch 3)
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-geometry` (group l, batch 1)
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm04-one-dimensional-conservative-and-dissipative-models` (group g, batch 20)

Another group's pages depend on yours:

- `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i) requires your `cm07-stationary-action-and-lagrangian-dynamics`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (group i) requires your `cm07-stationary-action-and-lagrangian-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods` (group j) requires your `cm07-stationary-action-and-lagrangian-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods-examples` (group j) requires your `cm07-stationary-action-and-lagrangian-dynamics`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm08-symmetry-noether-and-conditional-conservation`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm07-stationary-action-and-lagrangian-dynamics`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm07-stationary-action-and-lagrangian-dynamics`
- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm09-coupled-oscillations-and-approximation`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` (group k) requires your `cm07-stationary-action-and-lagrangian-dynamics`

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
