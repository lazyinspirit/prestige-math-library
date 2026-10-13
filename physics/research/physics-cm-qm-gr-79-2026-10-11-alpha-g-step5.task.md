# Step 5 adjudication — group **g**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 20, 21, 22: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **20**: `research/physics-cm-qm-gr-79-2026-10-11-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/physics-cm-qm-gr-79-2026-10-11-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **22**: `research/physics-cm-qm-gr-79-2026-10-11-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 20 | `cm04-one-dimensional-conservative-and-dissipative-models` | A | non-relativistic-classical-mechanics | 119 | `cm-math-verification`, `cm03-momentum-work-and-energy-balances`, `complex-power-series-and-analytic-functions`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-geometry`, `cm-math-approximation`, `cm-math-dynamics` |
| 20 | `cm04-one-dimensional-conservative-and-dissipative-models-examples` | B | non-relativistic-classical-mechanics | 120 | `cm04-one-dimensional-conservative-and-dissipative-models`, `cm01-framework-quantities-and-geometry`, `cm-math-approximation`, `cm-math-verification`, `cm-math-dynamics` |
| 21 | `cm05-two-body-central-forces-and-gravitation` | A | non-relativistic-classical-mechanics | 121 | `cm-math-central`, `cm03-momentum-work-and-energy-balances`, `hilbert-space-geometry-and-riesz-representation`, `construction-of-the-natural-numbers`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-balances` |
| 21 | `cm05-two-body-central-forces-and-gravitation-examples` | B | non-relativistic-classical-mechanics | 122 | `cm05-two-body-central-forces-and-gravitation`, `cm-math-central`, `cm01-framework-quantities-and-geometry`, `cm02-forces-initial-data-and-newtonian-flow`, `cm03-momentum-work-and-energy-balances`, `cm-math-balances` |
| 22 | `cm06-regular-constraints-and-moving-frames` | A | non-relativistic-classical-mechanics | 123 | `cm-math-variations`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-balances`, `cm-math-geometry`, `cm-math-rigid` |
| 22 | `cm06-regular-constraints-and-moving-frames-examples` | B | non-relativistic-classical-mechanics | 124 | `cm06-regular-constraints-and-moving-frames`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-variations`, `cm03-momentum-work-and-energy-balances`, `cm-math-geometry` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm04-one-dimensional-conservative-and-dissipative-models` — One-dimensional conservative and dissipative models (12 item(s))

- `def-cm04-one-dimensional-models-and-equilibria` · definition — The one-dimensional force models: data, motions, phase system, potential presentation, energy and equilibria
- `def-cm04-phase-plane-and-energy-level-sets` · definition — The phase plane of a one-dimensional model: phase curves, the energy function and its level sets, and turning points
- `post-cm04-harmonic-model` · postulate — The harmonic (linear restoring) model: a declared linear force law with parameter $k>0$
- `pthm-cm04-conservative-motion-and-energy` · physics-theorem — Existence, uniqueness and conservation of energy for a one-dimensional conservative model: phase curves lie in energy level sets and the velocity is determined by the position
- `pthm-cm04-equilibrium-stability-at-a-strict-minimum` · physics-theorem — A strict local minimum of the potential is a Lyapunov stable equilibrium of the conservative one-dimensional model, and its linearisation is an oscillator-type model
- `pthm-cm04-harmonic-motion` · physics-theorem — The motions of the harmonic model are the sinusoids $A\cos(\omega(t-t_0))+B\sin(\omega(t-t_0))$: amplitude and phase, the least period, the conserved energy $kR^2/2$ and the elliptical phase curves
- `post-cm04-linear-damping-model` · postulate — The damped oscillator model: a harmonic restoring force with a phenomenological linear drag $-c\dot x$, $c\ge0$
- `pthm-cm04-damped-motion` · physics-theorem — Classification of the motions of the damped oscillator by the discriminant, and strict energy dissipation $E'=-c\,x'^{2}$
- `pthm-cm04-damped-decay-and-stability` · physics-theorem — Strictly damped oscillator: explicit decay bounds, convergence to rest and asymptotic stability of the origin
- `post-cm04-sinusoidal-drive-model` · postulate — The sinusoidally driven oscillator model: a prescribed external force $f_0\cos(\Omega t)$ added to the damped oscillator
- `pthm-cm04-resonance-and-boundedness` · physics-theorem — The driven oscillator: steady response and amplitude profile, bounded damped and off-resonant motions, and unbounded undamped resonance
- `rem-cm04-linear-model-scope` · remark — Scope and limits of the one-dimensional conservative and dissipative models: declared class, approximation status, empirical parameters and open extensions

### `cm04-one-dimensional-conservative-and-dissipative-models-examples` — One-dimensional conservative and dissipative models — Examples (5 item(s))

- `ex-cm04-harmonic-motion-check` · example — A harmonic model on explicit data: the sinusoid, its least period, the conserved energy and the phase ellipse checked at $m=1$, $k=4$
- `ex-cm04-damped-regimes-check` · example — The three damping regimes on explicit data: underdamped, critical and overdamped motions at $m=k=1$ and $c=1,2,5$, with their decay bounds
- `ex-cm04-resonance-response-check` · example — A driven oscillator on explicit data: the steady response, its amplitude maximum and a worked transient at $m=k=1$, $f_0=1$, $c=0.2$, $\Omega=1$
- `ex-cm04-pendulum-small-angle-check` · example — The pendulum angle chart: stability, linearized equation, finite-time bound and quadratic-energy check
- `cex-cm04-undamped-resonance-with-bounded-drive-is-unbounded` · counterexample — A bounded sinusoidal drive with unbounded motions: the undamped driven oscillator at $\Omega=\omega_0$ refutes the unqualified boundedness claim

### `cm05-two-body-central-forces-and-gravitation` — Two-body, central forces and gravitation (10 item(s))

- `lem-cm05-radial-potential-gradient` · lemma — The radial composite $x\mapsto u(\lvert x\rvert)$ on an annulus: $C^k$ regularity and $\nabla\bigl(u\circ\lvert\cdot\rvert\bigr)(x)=u'(\lvert x\rvert)\,x/\lvert x\rvert$
- `pthm-cm05-relative-reduction` · physics-theorem — Two-body reduction of a static central pair-potential model: the relative coordinate is a central-force trajectory for the reduced mass, the centre of mass moves uniformly, and the reconstruction is a bijection
- `post-cm05-central-model` · postulate — Adopted central-force model class: static central pair potentials, the reduced one-label problem, the fixed-centre idealization, reading conventions and exclusions
- `pthm-cm05-plane-area` · physics-theorem — Planarity of the reduced orbit and the area law: the areal-velocity vector is the constant $j/(2\mu)$, the swept-area rate is $J/(2\mu)$, and both labels sweep equal areas in equal times about the centre of mass
- `pthm-cm05-effective-potential` · physics-theorem — Reduction of the central problem to the effective one-dimensional potential: $\mu\rho''=-(U^{\mathrm{eff}}_J)'(\rho)$, the energy identity, and the converse reconstruction of the planar trajectory from the radial data
- `pthm-cm05-circular-orbit` · physics-theorem — Circular relative orbits of the central model: the critical-point criterion $u'(r_0)=J^2/(\mu r_0^3)$, uniform rotation of both labels about the centre of mass, and the linearised radial frequency
- `post-cm05-gravity` · postulate — Adopted two-label gravitational model: the inverse-square pair potential with coupling parameters, the empirical mass identification, and the measured value and uncertainty of the Newtonian constant
- `pthm-cm05-conic` · physics-theorem — The inverse-square gravitational relative trajectory has the Kepler polar form: $\rho=p/(1+e\cos(\theta-\theta_0))$, $E=(\mu\kappa^2/2J^2)(e^2-1)$, elliptic completeness and barycentric scaled ellipses
- `pthm-cm05-kepler-period` · physics-theorem — Kepler's third law for the gravitational two-label model: the relative period is $T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$, so $T^2=4\pi^2a^3/(G_{\mathrm N}M)$ under the mass identification, and both labels are periodic relative to the centre of mass
- `rem-cm05-collision-scope` · remark — Scope of the two-body and central-force page: collision and radial exclusions, point-particle and finite-size limits, the empirical parameters and their uncertainty, and the conditional status of the orbit statements

### `cm05-two-body-central-forces-and-gravitation-examples` — Two-body, central forces and gravitation — Examples (5 item(s))

- `ex-cm05-gravitational-ellipse-and-period-check` · example — An elliptic gravitational relative orbit checked on declared model data: $p=10^{6}\,$m, $e=3/5$, $a=25\cdot10^{6}/16\,$m, $b=5\cdot10^{6}/4\,$m, $E=-3.2\cdot10^{17}\,$J and $T=125\pi\cdot10^{9}/32\,$s, with $T^{2}=4\pi^{2}a^{3}/(G_{\mathrm N}M)$
- `ex-cm05-parabolic-and-hyperbolic-branch-check` · example — The parabolic and hyperbolic branches on declared model data: $E=0$ with $e=1$ and periapsis $p/2$, and $E=1.5\cdot10^{18}\,$J with $e=2$, periapsis $p/3$ and angular domain $\lvert\theta-\theta_0\rvert<2\pi/3$
- `ex-cm05-barycentric-orbits-check` · example — Barycentric orbits of two unequal masses on declared model data: $p_1=(m_2/M)p$, $p_2=(m_1/M)p$, semiaxes in the ratio $3:1$ and areal rates in the ratio $9:1$
- `ex-cm05-circular-orbit-frequency-check` · example — A gravitational circular relative orbit checked on declared model data: $r_0=2\cdot10^{6}\,$m, $\mu r_0\omega^2=u'(r_0)=3\cdot10^{12}\,$N, $E=-3\cdot10^{18}\,$J and $\omega_{\rm lin}=\omega=10^{-9}\,$s$^{-1}$
- `cex-cm05-external-force-breaks-relative-reduction` · counterexample — External forces break the two-body reduction: a two-label model with a static central pair potential and external forces $\pm\gamma$ has $\mu r''=\gamma\ne0$, although its total external force vanishes

### `cm06-regular-constraints-and-moving-frames` — Regular constraints and moving frames (8 item(s))

- `def-cm06-holonomic-constraint-model` · definition — Holonomic-constraint models of the force branch: constraint data, the constrained equation, virtual displacements and the scleronomic/rheonomic distinction
- `post-cm06-ideal-reaction-law` · postulate — Adopted ideal-reaction law for holonomic constraints: the d'Alembert condition, its scope and its limits
- `pthm-cm06-multiplier-balance` · physics-theorem — Ideal holonomic constraints determine the reaction: multiplier form, explicit acceleration, unique constrained motions and the reaction-power identity
- `pthm-cm06-rheonomic-power` · physics-theorem — Reaction work and mechanical-energy balance for ideal holonomic constraints: vanishing power for scleronomic constraints and the rheonomic work term
- `def-cm06-moving-frame` · definition — Moving spatial charts of an inertial frame: rotating and translating coordinates, angular velocity and inertial terms
- `pthm-cm06-inertial-forces` · physics-theorem — The equation of motion in a moving chart: inertial terms, inertial forces, and when it restricts to an inertial chart
- `def-cm06-nonholonomic-model` · definition — Velocity-constraint (nonholonomic) models of the force branch: constant-rank constraint laws, the d'Alembert reaction and holonomic equivalence
- `rem-cm06-dalembert-vakonomic-distinction` · remark — The d'Alembert and vakonomic prescriptions are different models: what is proved, what is adopted, and which questions are open

### `cm06-regular-constraints-and-moving-frames-examples` — Regular constraints and moving frames — Examples (4 item(s))

- `ex-cm06-bead-on-a-rotating-wire` · example — A bead on a uniformly rotating straight wire: the rheonomic ideal constraint, its reaction, and the work it performs
- `ex-cm06-pendulum-tension-and-reaction-power` · example — The planar pendulum as an ideal holonomic model: the multiplier, the tension and the vanishing reaction power of a scleronomic constraint
- `ex-cm06-rotating-chart-inertial-terms` · example — All four inertial terms checked on explicit data, and the exact return to an inertial chart
- `ex-cm06-rolling-disk-model-comparison` · example — Rolling as distinct models: the planar ideal no-slip disk against frictionless sliding, and the contact capability condition

## Your seams

Your pages depend on another group's:

- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-verification` (group o, batch 12)
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-geometry` (group l, batch 1)
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-approximation` (group n, batch 7)
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-dynamics` (group l, batch 3)
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-approximation` (group n, batch 7)
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-verification` (group o, batch 12)
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-dynamics` (group l, batch 3)
- `cm05-two-body-central-forces-and-gravitation` requires `cm-math-central` (group m, batch 5)
- `cm05-two-body-central-forces-and-gravitation` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm05-two-body-central-forces-and-gravitation` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm05-two-body-central-forces-and-gravitation` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm05-two-body-central-forces-and-gravitation` requires `cm-math-balances` (group l, batch 2)
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm-math-central` (group m, batch 5)
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm-math-balances` (group l, batch 2)
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-variations` (group m, batch 4)
- `cm06-regular-constraints-and-moving-frames` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm06-regular-constraints-and-moving-frames` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm06-regular-constraints-and-moving-frames` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-balances` (group l, batch 2)
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-geometry` (group l, batch 1)
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-rigid` (group n, batch 9)
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm-math-variations` (group m, batch 4)
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm-math-geometry` (group l, batch 1)

Another group's pages depend on yours:

- `cm07-stationary-action-and-lagrangian-dynamics` (group h) requires your `cm06-regular-constraints-and-moving-frames`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` (group h) requires your `cm06-regular-constraints-and-moving-frames`
- `cm09-coupled-oscillations-and-approximation` (group h) requires your `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm09-coupled-oscillations-and-approximation-examples` (group h) requires your `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm11-rigid-body-dynamics-and-stability` (group i) requires your `cm06-regular-constraints-and-moving-frames`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i) requires your `cm06-regular-constraints-and-moving-frames`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (group i) requires your `cm06-regular-constraints-and-moving-frames`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm14-hamilton-jacobi-and-integrability-examples` (group j) requires your `cm05-two-body-central-forces-and-gravitation`
- `cm15-scattering-and-impulse-model-boundaries` (group j) requires your `cm05-two-body-central-forces-and-gravitation`
- `cm15-scattering-and-impulse-model-boundaries-examples` (group j) requires your `cm05-two-body-central-forces-and-gravitation`
- `cm16-stability-perturbations-and-chaos-examples` (group k) requires your `cm04-one-dimensional-conservative-and-dissipative-models`

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

# Step 5 batch adjudication, `physics-cm-qm-gr-79-2026-10-11`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
