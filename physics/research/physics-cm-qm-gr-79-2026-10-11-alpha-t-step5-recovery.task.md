# Step 5 adjudication — group **t**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 51, 52, 53: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **51**: `research/physics-cm-qm-gr-79-2026-10-11-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **52**: `research/physics-cm-qm-gr-79-2026-10-11-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/physics-cm-qm-gr-79-2026-10-11-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 51 | `qm-one-dimensional-potentials` | A | non-relativistic-quantum-mechanics | 181 | `qm-interference-and-local-detection`, `qm-math-composites`, `qm-math-intervals-and-contacts`, `qm-framework-and-quantities`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics`, `qm-math-oscillator` |
| 51 | `qm-one-dimensional-potentials-examples` | B | non-relativistic-quantum-mechanics | 182 | `qm-one-dimensional-potentials`, `qm-framework-and-quantities`, `qm-math-intervals-and-contacts` |
| 52 | `qm-harmonic-oscillator` | A | non-relativistic-quantum-mechanics | 183 | `qm-uncertainty-and-compatibility`, `qm-math-oscillator`, `qm-math-fock-and-equilibrium`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics`, `qm-massive-particle-kinematics` |
| 52 | `qm-harmonic-oscillator-examples` | B | non-relativistic-quantum-mechanics | 184 | `qm-harmonic-oscillator`, `the-heat-kernel-and-the-cauchy-problem`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-uncertainty-and-compatibility`, `qm-math-oscillator`, `qm-massive-particle-kinematics`, `qm-math-fock-and-equilibrium` |
| 53 | `qm-symmetries-and-conservation` | A | non-relativistic-quantum-mechanics | 185 | `qm-massive-particle-kinematics`, `density-separability-and-convolution-in-lp`, `harmonic-functions-and-mean-values-in-rn`, `cm-math-geometry`, `qm-framework-and-quantities`, `qm-math-fock-and-equilibrium`, `qm-math-composites`, `qm-autonomous-dynamics`, `qm-math-magnetic-and-detection`, `qm-observables-and-born-probabilities`, `qm-state-geometry` |
| 53 | `qm-symmetries-and-conservation-examples` | B | non-relativistic-quantum-mechanics | 186 | `qm-symmetries-and-conservation`, `qm-autonomous-dynamics`, `qm-framework-and-quantities`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-math-composites`, `cm-math-geometry` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-one-dimensional-potentials` — Qm One Dimensional Potentials (11 item(s))

- `lem-nrqm-potentials-one-dimensional-flux-identity` · lemma — The one-dimensional continuity identity and the constant flux of stationary solutions
- `lem-nrqm-potentials-free-operator-differential-identification` · lemma — The one-dimensional free Schr"odinger operator as the weak second-derivative operator
- `lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators` · lemma — Positive scalar multiples of self-adjoint operators: domains, resolvents, spectra and eigenbases
- `def-nrqm-potentials-one-dimensional-line-model` · definition — The declared one-dimensional line model: state space, Hamiltonian, bound states and generalized stationary solutions
- `def-nrqm-potentials-interval-and-delta-models` · definition — The declared interval models with Dirichlet and Robin boundary conditions, and the declared zero-range (delta) model
- `pthm-nrqm-potentials-line-model-energy-and-stationary-states` · physics-theorem — The line model's energy observable, flow and stationary states
- `pthm-nrqm-potentials-barrier-flux-and-transmission` · physics-theorem — Rectangular barrier: scattering solution, flux balance and transmission
- `pthm-nrqm-potentials-finite-well-bound-states` · physics-theorem — Finite square well: bound-state conditions, simplicity and count
- `pthm-nrqm-potentials-interval-spectra-completeness-and-nodes` · physics-theorem — Interval models: discrete spectra, complete eigenbases, min-max bounds and nodal counts
- `pthm-nrqm-potentials-delta-point-interaction-bound-state` · physics-theorem — The zero-range (delta) model: self-adjointness and the unique attractive bound-state preparation
- `rem-nrqm-potentials-scope-and-idealizations` · remark — What the one-dimensional potentials page establishes, assumes and defers

### `qm-one-dimensional-potentials-examples` — Qm One Dimensional Potentials — Examples (4 item(s))

- `ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit` · example — Tunnelling through a rectangular barrier: an exactly solvable scaling and its thick-barrier comparison
- `ex-nrqm-potentials-finite-well-exact-root-and-count` · example — Finite square well: an exactly solvable bound state and exact bound-state counts
- `ex-nrqm-potentials-box-spectrum-and-nodes` · example — The Dirichlet box: exact spectrum, nodes, constant shift and gaps
- `rem-nrqm-potentials-examples-scope-limits` · remark — What the one-dimensional potentials examples establish

### `qm-harmonic-oscillator` — Qm Harmonic Oscillator (8 item(s))

- `lem-nrqm-oscillator-diagonal-eigenspaces` · lemma — Eigenspaces of the diagonal operator
- `lem-nrqm-oscillator-unitary-transport-of-spectral-pvms` · lemma — Transport of spectral projection-valued measures along isometric bijections
- `def-nrqm-oscillator-framework-quadratic-potential-model` · definition — The quadratic-potential oscillator model of the framework
- `pthm-nrqm-oscillator-energy-spectrum-and-completeness` · physics-theorem — The energy observable of the oscillator model: spectrum, eigenbasis and outcome law
- `def-nrqm-oscillator-coherent-states` · definition — The coherent states of the oscillator model
- `pthm-nrqm-oscillator-coherent-state-fluctuations` · physics-theorem — Fluctuations of the oscillator coherent states and the position-momentum relation of the model
- `pthm-nrqm-oscillator-coherent-state-evolution` · physics-theorem — Evolution of the oscillator coherent states: classical mean motion and stationary fluctuations
- `rem-nrqm-oscillator-scope-and-empirical-status` · remark — Scope and empirical status of the oscillator page

### `qm-harmonic-oscillator-examples` — Qm Harmonic Oscillator — Examples (4 item(s))

- `ex-nrqm-oscillator-ground-state-gaussian` · example — The Gaussian ground state: position and momentum laws and the saturated bound
- `ex-nrqm-oscillator-ladder-norms` · example — Ladder norms and excitation statistics of the oscillator eigenstates
- `ex-nrqm-oscillator-coherent-trajectory` · example — A coherent-state trajectory: period, phase-space ellipse and constant spreads
- `rem-nrqm-oscillator-examples-scope-limits` · remark — What the worked oscillator examples establish

### `qm-symmetries-and-conservation` — Qm Symmetries And Conservation (12 item(s))

- `lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus` · lemma — Unitary conjugation, generator transport and strong commutation of self-adjoint observables
- `lem-nrqm-symmetries-spatial-rotation-action` · lemma — The spatial rotation action on the component-valued wave-function space
- `lem-nrqm-symmetries-parity-action` · lemma — The spatial parity action on the component-valued wave-function space
- `lem-nrqm-symmetries-rotation-generators-on-schwartz-classes` · lemma — Coordinate-rotation generators on the Schwartz classes and their commutators
- `lem-nrqm-symmetries-free-flow-multiplier-form` · lemma — The free flow as a unimodular multiplier in the momentum representation
- `def-nrqm-symmetries-framework-symmetry-groups-and-conservation` · definition — Symmetries of the declared dynamics, unitary symmetry groups and conserved sharp observables
- `post-nrqm-symmetries-prescribed-external-coupling` · postulate — Prescribed external electromagnetic coupling P5a: the minimal-coupling model and its gauge transformations
- `pthm-nrqm-symmetries-generator-conservation` · physics-theorem — Conservation of a symmetry generator: commuting flows, energy compatibility and conserved outcome laws
- `pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation` · physics-theorem — Translation invariance of bounded potentials and conservation of momentum
- `pthm-nrqm-symmetries-rotational-and-parity-invariance` · physics-theorem — Rotational and parity invariance of bounded-potential models: symmetries and conservation of angular momentum and parity laws
- `pthm-nrqm-symmetries-gauge-covariance` · physics-theorem — Gauge covariance of the prescribed-coupling model: unitary equivalence, the symmetry criterion and the transported propagator
- `rem-nrqm-symmetries-scope-and-empirical-status` · remark — Scope and empirical status of the symmetry and conservation items

### `qm-symmetries-and-conservation-examples` — Qm Symmetries And Conservation — Examples (5 item(s))

- `ex-nrqm-symmetries-parity-selection-rule` · example — Definite parity of nondegenerate eigenstates and the position-matrix-element selection rule
- `ex-nrqm-symmetries-free-translation-and-momentum` · example — The free model: translation symmetries and conserved momentum in the momentum representation
- `cex-nrqm-symmetries-nonconstant-potential-breaks-translation` · counterexample — A bounded nonconstant potential with no nontrivial translational symmetry
- `ex-nrqm-symmetries-central-potential-rotation-invariance` · example — A radial bounded potential: rotational and parity symmetry and conservation of the rotation generators
- `rem-nrqm-symmetries-examples-scope-limits` · remark — What the worked items of the symmetry companion page establish

## Your seams

Your pages depend on another group's:

- `qm-one-dimensional-potentials` requires `qm-interference-and-local-detection` (group s, batch 49)
- `qm-one-dimensional-potentials` requires `qm-math-composites` (group x, batch 35)
- `qm-one-dimensional-potentials` requires `qm-math-intervals-and-contacts` (group y, batch 38)
- `qm-one-dimensional-potentials` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-one-dimensional-potentials` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-one-dimensional-potentials` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-one-dimensional-potentials` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-one-dimensional-potentials` requires `qm-math-oscillator` (group y, batch 36)
- `qm-one-dimensional-potentials-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-one-dimensional-potentials-examples` requires `qm-math-intervals-and-contacts` (group y, batch 38)
- `qm-harmonic-oscillator` requires `qm-uncertainty-and-compatibility` (group s, batch 50)
- `qm-harmonic-oscillator` requires `qm-math-oscillator` (group y, batch 36)
- `qm-harmonic-oscillator` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-harmonic-oscillator` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-harmonic-oscillator` requires `qm-state-geometry` (group q, batch 44)
- `qm-harmonic-oscillator` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-harmonic-oscillator` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-harmonic-oscillator` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-harmonic-oscillator-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-harmonic-oscillator-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-harmonic-oscillator-examples` requires `qm-uncertainty-and-compatibility` (group s, batch 50)
- `qm-harmonic-oscillator-examples` requires `qm-math-oscillator` (group y, batch 36)
- `qm-harmonic-oscillator-examples` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-harmonic-oscillator-examples` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-symmetries-and-conservation` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-symmetries-and-conservation` requires `cm-math-geometry` (group l, batch 1)
- `qm-symmetries-and-conservation` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-symmetries-and-conservation` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-symmetries-and-conservation` requires `qm-math-composites` (group x, batch 35)
- `qm-symmetries-and-conservation` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-symmetries-and-conservation` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-symmetries-and-conservation` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-symmetries-and-conservation` requires `qm-state-geometry` (group q, batch 44)
- `qm-symmetries-and-conservation-examples` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-symmetries-and-conservation-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-symmetries-and-conservation-examples` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-symmetries-and-conservation-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-symmetries-and-conservation-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-symmetries-and-conservation-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-symmetries-and-conservation-examples` requires `cm-math-geometry` (group l, batch 1)

Another group's pages depend on yours:

- `qm-angular-momentum-and-spin` (group u) requires your `qm-symmetries-and-conservation`
- `qm-identical-particles-and-exclusion` (group v) requires your `qm-harmonic-oscillator`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-one-dimensional-potentials`
- `qm-controlled-approximations` (group v) requires your `qm-harmonic-oscillator`
- `qm-controlled-approximations` (group v) requires your `qm-one-dimensional-potentials`
- `qm-controlled-approximations-examples` (group v) requires your `qm-one-dimensional-potentials`
- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-harmonic-oscillator`
- `qm-driven-dynamics-and-adiabatic-limits-examples` (group w) requires your `qm-harmonic-oscillator`
- `qm-three-dimensional-scattering` (group w) requires your `qm-one-dimensional-potentials`

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
