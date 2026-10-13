# Step 5 adjudication — group **k**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 32, 33, 34: 3 A/B pair(s), 6 page(s), 60 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **32**: `research/physics-cm-qm-gr-79-2026-10-11-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/physics-cm-qm-gr-79-2026-10-11-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **34**: `research/physics-cm-qm-gr-79-2026-10-11-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 32 | `cm16-stability-perturbations-and-chaos` | A | non-relativistic-classical-mechanics | 143 | `cm-math-chaos`, `cm-math-kam`, `cm09-coupled-oscillations-and-approximation`, `cm14-hamilton-jacobi-and-integrability`, `cm02-forces-initial-data-and-newtonian-flow`, `cm-math-dynamics`, `cm01-framework-quantities-and-geometry`, `cm-math-geometry`, `cm-math-approximation`, `cm13-symplectic-geometry-and-canonical-methods` |
| 32 | `cm16-stability-perturbations-and-chaos-examples` | B | non-relativistic-classical-mechanics | 144 | `cm16-stability-perturbations-and-chaos`, `cm-math-dynamics`, `cm01-framework-quantities-and-geometry`, `cm02-forces-initial-data-and-newtonian-flow`, `cm-math-chaos`, `cm04-one-dimensional-conservative-and-dissipative-models`, `cm-math-balances`, `cm-math-kam` |
| 33 | `cm17-classical-continua-with-explicit-constitutive-assumptions` | A | non-relativistic-classical-mechanics | 145 | `cm-math-fluid`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm-math-geometry`, `cm01-framework-quantities-and-geometry`, `cm-math-continuum` |
| 33 | `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` | B | non-relativistic-classical-mechanics | 146 | `cm17-classical-continua-with-explicit-constitutive-assumptions`, `cm-math-continuum`, `cm01-framework-quantities-and-geometry`, `cm-math-fluid`, `cm-math-geometry` |
| 34 | `cm18-measurement-uncertainty-and-later-bridges` | A | non-relativistic-classical-mechanics | 147 | `cm-math-evidence`, `cm-math-numerical`, `cm03-momentum-work-and-energy-balances`, `cm01-framework-quantities-and-geometry`, `cm02-forces-initial-data-and-newtonian-flow`, `cm-math-dynamics` |
| 34 | `cm18-measurement-uncertainty-and-later-bridges-examples` | B | non-relativistic-classical-mechanics | 148 | `cm18-measurement-uncertainty-and-later-bridges`, `finite-probability-spaces-and-random-variables`, `cm-math-evidence`, `cm01-framework-quantities-and-geometry`, `cm02-forces-initial-data-and-newtonian-flow` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm16-stability-perturbations-and-chaos` — Stability, perturbations and chaos (12 item(s))

- `def-cm16-flow-equilibria-and-invariant-sets` · definition — The model vocabulary of stability and chaos: the associated flow of a declared force model, equilibria, periodic and homoclinic orbits, and invariant sets
- `def-cm16-stability-and-hyperbolicity-concepts` · definition — Stability vocabulary of the model: Lyapunov, asymptotic and orbital stability, linear stability of equilibria and periodic orbits, and hyperbolicity of equilibria and fixed points
- `pthm-cm16-energy-stability-and-instability` · physics-theorem — Energy stability and instability of the mechanical model at an equilibrium: the strict minimum is Lyapunov stable, a negative Hessian eigenvalue gives linear instability, a strictly concave potential gives nonlinear instability, and exact energy conservation rules out attraction
- `pthm-cm16-variational-equation-and-linearization` · physics-theorem — Linearisation along a motion of the mechanical model: the flow derivative solves the variational equation, with Lipschitz dependence, the constant-metric second-order form, and the conditional finite-time error bound of the linear approximation
- `def-cm16-finite-time-growth-rates` · definition — Finite-time tangent growth rates and Lyapunov exponents of the model's flow: the rate per unit time of a transported deviation, with its existence convention and its limits
- `def-cm16-stroboscopic-and-poincare-maps` · definition — The stroboscopic map of a periodic model and the Poincare return map of a transversal section: domains, iterates, fixed points and the local C1 diffeomorphism property
- `def-cm16-chaos-list-for-model-maps` · definition — Chaos in the stated sense for maps of the model: topological mixing, dense periodic points and sensitive dependence, as one precise list among several
- `pthm-cm16-hyperbolic-linearization` · physics-theorem — Hyperbolic linearisation of an equilibrium of the model: exponential dichotomy of the linearised flow, local exponential asymptotic stability in the stable case, and instability in the saddle case
- `pthm-cm16-two-rotor-kam` · physics-theorem — The two-rotor model: a positive-measure family of invariant Lagrangian tori with Diophantine frequencies for sufficiently small coupling, with the explicit units and the stated scope
- `pthm-cm16-separatrix-splitting-and-horseshoe` · physics-theorem — A smooth periodically forced one-label Cartesian model with a transverse homoclinic horseshoe: the physical stroboscopic map has a compact invariant set conjugate to the shift, chaotic in the stated sense
- `pthm-cm16-recurrence-for-finite-volume-models` · physics-theorem — Poincare recurrence for the model's Hamiltonian flow on a bounded invariant set of finite phase volume: almost every state of any Borel subset returns to it infinitely often
- `rem-cm16-scope-of-stability-and-chaos` · remark — Scope of the stability, perturbation and chaos statements: conditional model deductions, the limits of finite-time and numerical evidence, and the empirical qualifications

### `cm16-stability-perturbations-and-chaos-examples` — Stability, perturbations and chaos — Examples (8 item(s))

- `ex-cm16-pendulum-equilibrium-checks` · example — The ideal pendulum on declared data: strict minimum and Lyapunov stability at the downward equilibrium, negative Hessian and instability at the upward equilibrium, the exact linearised eigenvalues and oscillation frequency, and failure of attraction
- `ex-cm16-linearization-and-growth-checks` · example — Two declared linear models worked through: the harmonic flow has zero finite-time growth in every direction, while the repulsive linear model has exact rates $\pm1$ and the positive Lyapunov exponent $1$ at its equilibrium
- `ex-cm16-isotropic-oscillator-return-map-check` · example — The three-dimensional isotropic oscillator: the stroboscopic map at half period is minus the identity, every state is periodic, the periodic points are dense, and the map is neither mixing nor sensitive
- `ex-cm16-pulse-horseshoe-data-check` · example — The pulsed horseshoe on declared data: $a=100$, the radicand box $[74,126]$, the contraction factor $1/\sqrt{74}$, the fixed points $1\pm\sqrt{101}$, and the physical bounds of the coded states at $\ell_0=1\,\mathrm m$, $m=1\,\mathrm{kg}$, $\omega_0=2\pi\,\mathrm{s^{-1}}$
- `cex-cm16-positive-growth-is-not-chaos` · counterexample — A positive Lyapunov exponent at a hyperbolic equilibrium does not produce a chaotic invariant set of the time-one map: the three-dimensional repulsive model has rate $1$ and no compact invariant set with more than one point
- `cex-cm16-stability-does-not-imply-attraction` · counterexample — Lyapunov stability does not imply attraction: the harmonic model is stable at its equilibrium while every nonzero datum keeps its distance and never converges
- `ex-cm16-recurrence-volume-check` · example — A trapped one-label model: the compact energy sublevel of the radial quartic potential is invariant with finite phase volume, so the recurrence theorem applies, while the free model's energy sublevels are unbounded and the hypothesis fails
- `ex-cm16-two-rotor-kam-units-check` · example — Unit restoration and scale checks for the two-rotor KAM statement: the scaling identities at $\mathcal I=E_0=1$, the physical angular frequencies, the exclusion of rational frequency labels, and the equal-rescaling invariance

### `cm17-classical-continua-with-explicit-constitutive-assumptions` — Classical continua with explicit constitutive assumptions (19 item(s))

- `def-cm17-continuum-body-and-units` · definition — Continuum body data, the fixed inertial frame and the dimensions of the fields
- `post-cm17-continuum-kinematic-model` · postulate — Adopted continuum kinematic model: body data, smooth motions as families of label worldlines, the continuum idealization and frame covariance
- `def-cm17-density-and-mass` · definition — The density field of the continuum model and the mass of a material subregion
- `post-cm17-mass-balance` · postulate — Adopted mass balance: the mass of every material subregion is constant in time
- `pthm-cm17-transport-and-material-derivative` · physics-theorem — The transport identity and the material derivative along label worldlines for the adopted continuum model
- `pthm-cm17-continuity-equation` · physics-theorem — The continuity equation of the continuum model: local form of mass balance, the material form, and the incompressibility reading
- `def-cm17-traction-and-stress` · definition — Traction fields and stress matrices of the continuum model, with units and sign conventions
- `post-cm17-contact-force-model` · postulate — Adopted force model of the continuum branch: continuous body forces and Cauchy contact tractions
- `post-cm17-momentum-balance` · postulate — Adopted balance principles of the continuum model: force and couple-free torque balance on every admissible region
- `pthm-cm17-stress-matrix-and-symmetry` · physics-theorem — Existence, uniqueness and symmetry of the stress matrix from the adopted balance principles
- `pthm-cm17-momentum-equation` · physics-theorem — The momentum equation of the continuum model: local form rho D_t u = rho b + div sigma
- `post-cm17-linear-elastic-constitutive` · postulate — Adopted isotropic linear elastic constitutive model with its small-strain regime and strain energy
- `pthm-cm17-linear-elastic-equation-of-motion` · physics-theorem — The displacement equation of the linear elastic branch: rho_0 partial_t^2 xi = rho_0 b + mu_s Laplacian xi + (lambda + mu_s) grad div xi
- `pthm-cm17-elastic-plane-wave-speeds` · physics-theorem — Plane elastic waves in the adopted model: the dispersion condition and the longitudinal and transverse speeds
- `post-cm17-fluid-constitutive` · postulate — Adopted fluid constitutive branches: incompressible Newtonian, barotropic inviscid, and the periodic-cell idealization
- `pthm-cm17-incompressible-periodic-local-evolution` · physics-theorem — Local existence, uniqueness and pressure reconstruction for the incompressible fluid model on the periodic cell
- `pthm-cm17-chain-limit-of-the-string-model` · physics-theorem — The continuum string model as the proved limit of the mass-spring chain, with explicit convergence and dispersion error
- `pthm-cm17-string-wave-solutions` · physics-theorem — The string model: d'Alembert solutions, fixed-end modes and uniqueness for the adopted one-dimensional continuum
- `rem-cm17-boundary-regularity-and-scope` · remark — Boundary data, regularity limits and open scopes of the continuum page, and the model-versus-nature reading

### `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` — Classical continua with explicit constitutive assumptions — Examples (8 item(s))

- `ex-cm17-uniform-expansion-transport-check` · example — Worked check of the transport identity and the continuity equation on a uniform expansion
- `ex-cm17-elastic-plane-wave-and-energy-check` · example — A longitudinal plane wave in the linear elastic branch: stress, equation of motion and strain energy computed
- `ex-cm17-string-modes-and-tail-check` · example — Two-mode fixed-end string: exact solution, d'Alembert cross-check and the O(N^{-4}) tail bound at N=1
- `ex-cm17-spring-chain-limit-numbers` · example — Chain versus string on the normalized standing wave: exact discrete error, the N=100 bounds, and physical circumference 2π m
- `ex-cm17-riemann-shock-and-rarefaction-check` · example — A Riemann shock and a rarefaction of the scalar model: explicit weak solutions, entropy coefficients and initial trace
- `ex-cm17-channel-flow-and-no-slip-check` · example — Poiseuille and Couette channel flows of the viscous branch: explicit profiles, flux and wall data
- `ex-cm17-periodic-shear-exact-solution-check` · example — Periodic shear fields: an exact steady Euler solution, failure for the viscous branch, and the classification of steady periodic shears
- `cex-cm17-traction-symmetry-without-stress-matrix` · counterexample — FALSE: the reversed-normal convention alone makes a continuous traction field a stress matrix. The field t(n)=|n_1|n refutes it

### `cm18-measurement-uncertainty-and-later-bridges` — Measurement, uncertainty and later bridges (9 item(s))

- `def-cm18-observable-model` · definition — Operational observable model of the force branch: parameters, preparations, observation times, readout, units and additive error
- `def-cm18-calibration` · definition — Calibration of a mechanical apparatus against the primitive standards of the framework: reference inputs, deviations, rules and calibrated prediction maps
- `def-cm18-sampling-model` · definition — Repeated-observation protocols of the force branch: adopted IID and second-moment sampling hypotheses and the sample mean
- `rem-cm18-model-test` · remark — Model testing for the force branch: what a test specifies, what rejection and retention establish, and what is not claimed
- `rem-cm18-numerical-error` · remark — Numerical error in a prediction pipeline: certified velocity-Verlet bounds, additive per-step error, the analytic long-time branch, and the separation from model error
- `rem-cm18-galilean-regime` · remark — The Galilean regime of the framework: frame-relative protocols, the absence of an intrinsic slow-motion parameter, and the empirical status of a validity claim
- `rem-cm18-em-bridge` · remark — The electromagnetic bridge: what a charged-particle coupling must add to the framework, what the force branch then yields, and what is not imported
- `rem-cm18-qm-bridge` · remark — The quantum bridge: a separate framework and requirements for a specified quantization and semiclassical correspondence result
- `rem-cm18-primary-report-contract` · remark — Contract for a future reported experiment of the framework: source, setup, calibration, procedure, sampling, observations, uncertainty and interpretation

### `cm18-measurement-uncertainty-and-later-bridges-examples` — Measurement, uncertainty and later bridges — Examples (4 item(s))

- `ex-cm18-pendulum-calibration-proposal` · example — A hypothetical small-angle pendulum estimate of a gravitational parameter: linearized propagation and a bounded nonlinearity remainder on declared data
- `ex-cm18-uniform-motion-sampling-check` · example — Repeated observation of a uniform motion: prediction map, adopted IID sampling hypotheses and the resulting sample-mean bound on declared data
- `ex-cm18-frame-change-of-an-observation-model` · example — Frame change of a declared protocol: how the prediction map and an additive error transform between two inertial frames
- `cex-cm18-finite-sample-may-miss-the-signal` · counterexample — A finite sample can miss a predicted outcome with positive probability: an elementary product-model counterexample

## Your seams

Your pages depend on another group's:

- `cm16-stability-perturbations-and-chaos` requires `cm-math-chaos` (group p, batch 13)
- `cm16-stability-perturbations-and-chaos` requires `cm-math-kam` (group p, batch 14)
- `cm16-stability-perturbations-and-chaos` requires `cm09-coupled-oscillations-and-approximation` (group h, batch 25)
- `cm16-stability-perturbations-and-chaos` requires `cm14-hamilton-jacobi-and-integrability` (group j, batch 30)
- `cm16-stability-perturbations-and-chaos` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm16-stability-perturbations-and-chaos` requires `cm-math-dynamics` (group l, batch 3)
- `cm16-stability-perturbations-and-chaos` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm16-stability-perturbations-and-chaos` requires `cm-math-geometry` (group l, batch 1)
- `cm16-stability-perturbations-and-chaos` requires `cm-math-approximation` (group n, batch 7)
- `cm16-stability-perturbations-and-chaos` requires `cm13-symplectic-geometry-and-canonical-methods` (group j, batch 29)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-dynamics` (group l, batch 3)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-chaos` (group p, batch 13)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm04-one-dimensional-conservative-and-dissipative-models` (group g, batch 20)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-balances` (group l, batch 2)
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-kam` (group p, batch 14)
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-fluid` (group p, batch 15)
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-geometry` (group l, batch 1)
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-continuum` (group n, batch 8)
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-continuum` (group n, batch 8)
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-fluid` (group p, batch 15)
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-geometry` (group l, batch 1)
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-evidence` (group o, batch 11)
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-numerical` (group o, batch 10)
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-dynamics` (group l, batch 3)
- `cm18-measurement-uncertainty-and-later-bridges-examples` requires `cm-math-evidence` (group o, batch 11)
- `cm18-measurement-uncertainty-and-later-bridges-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm18-measurement-uncertainty-and-later-bridges-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)

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
