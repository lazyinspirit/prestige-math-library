# Step 5 adjudication — group **r**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 45, 46, 47: 3 A/B pair(s), 6 page(s), 41 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **45**: `research/physics-cm-qm-gr-79-2026-10-11-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **46**: `research/physics-cm-qm-gr-79-2026-10-11-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/physics-cm-qm-gr-79-2026-10-11-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 45 | `qm-observables-and-born-probabilities` | A | non-relativistic-quantum-mechanics | 169 | `qm-state-geometry`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-math-fock-and-equilibrium`, `qm-math-magnetic-and-detection` |
| 45 | `qm-observables-and-born-probabilities-examples` | B | non-relativistic-quantum-mechanics | 170 | `qm-observables-and-born-probabilities`, `improper-and-parameter-dependent-multiple-integrals`, `qm-state-geometry`, `qm-math-composites`, `qm-math-magnetic-and-detection`, `qm-framework-and-quantities` |
| 46 | `qm-measurement-and-instruments` | A | non-relativistic-quantum-mechanics | 171 | `qm-observables-and-born-probabilities`, `qm-math-composites`, `qm-state-geometry`, `qm-framework-and-quantities` |
| 46 | `qm-measurement-and-instruments-examples` | B | non-relativistic-quantum-mechanics | 172 | `qm-measurement-and-instruments`, `qm-state-geometry`, `qm-math-composites`, `qm-framework-and-quantities`, `qm-math-orbital-and-spin` |
| 47 | `qm-autonomous-dynamics` | A | non-relativistic-quantum-mechanics | 173 | `qm-observables-and-born-probabilities`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-math-composites`, `qm-math-magnetic-and-detection` |
| 47 | `qm-autonomous-dynamics-examples` | B | non-relativistic-quantum-mechanics | 174 | `qm-autonomous-dynamics`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-math-composites`, `qm-math-magnetic-and-detection` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-observables-and-born-probabilities` — Qm Observables And Born Probabilities (10 item(s))

- `lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues` · lemma — Atoms of the spectral measure and eigenvalues of a self-adjoint operator
- `lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity` · lemma — Affinity and trace-norm continuity of the scalar spectral law
- `lem-nrqm-observables-moments-and-variance` · lemma — Mean, second moment and variance of the scalar spectral law
- `lem-nrqm-observables-states-separated-by-bounded-projections` · lemma — Distinct density operators are separated by the law of a bounded rank-one projection
- `def-nrqm-observables-framework-observable-and-outcome-law` · definition — Assigned sharp observables and the outcome law of the framework
- `pthm-nrqm-observables-born-outcome-law-properties` · physics-theorem — The Born outcome law: probability measure, mixtures, atoms and spectral support
- `pthm-nrqm-observables-preparation-moments` · physics-theorem — Mean, second moment and variance of an assigned observable in a preparation
- `pthm-nrqm-observables-position-and-momentum-outcome-laws` · physics-theorem — Position and momentum outcome laws and the Born density of the massive particle model
- `pthm-nrqm-observables-states-separated-by-born-statistics` · physics-theorem — Distinct preparations are separated by the statistics of a bounded sharp observable
- `rem-nrqm-observables-scope-and-empirical-status` · remark — What the observable and Born-probability page adopts, proves and does not claim

### `qm-observables-and-born-probabilities-examples` — Qm Observables And Born Probabilities — Examples (5 item(s))

- `ex-nrqm-observables-two-level-energy-readout` · example — An exact two-level energy readout and its moments
- `ex-nrqm-observables-position-bin-probabilities` · example — Position-bin probabilities of a Gaussian packet
- `cex-nrqm-observables-plane-wave-is-not-a-preparation` · counterexample — The plane wave and the point-localized delta are not preparations of the model
- `ex-nrqm-observables-position-mean-without-variance` · example — A preparation with finite mean position and infinite variance
- `rem-nrqm-observables-examples-scope-limits` · remark — What the worked readouts of the companion page establish

### `qm-measurement-and-instruments` — Qm Measurement And Instruments (9 item(s))

- `lem-nrqm-measurement-selective-luders-update` · lemma — The selective Lueders update by an orthogonal projection
- `lem-nrqm-measurement-nonselective-luders-map` · lemma — The non-selective Lueders map and the discarded-outcome ensemble
- `def-nrqm-measurement-framework-declared-measurements-and-instruments` · definition — Declared ideal measurements and instruments of the framework
- `pthm-nrqm-measurement-projective-outcomes-and-discarded-ensembles` · physics-theorem — Consequences of a declared ideal sharp measurement: repeatability and discarded ensembles
- `pthm-nrqm-measurement-degenerate-eigenspace-update` · physics-theorem — The Lueders update on a degenerate eigenspace preserves intra-eigenspace coherence
- `pthm-nrqm-measurement-instrument-updates-not-determined-by-effects` · physics-theorem — Outcome effects do not determine the conditional update, and general instruments need not be repeatable
- `pthm-nrqm-measurement-finite-effects-dilation` · physics-theorem — A declared finite effect family is realised by a dilated ideal projective measurement
- `pthm-nrqm-measurement-countable-kraus-instruments` · physics-theorem — Declared countable instruments: normalization, discarded ensembles and the repeatability criterion
- `rem-nrqm-measurement-scope-and-empirical-status` · remark — Scope and empirical status of the measurement-and-instruments page

### `qm-measurement-and-instruments-examples` — Qm Measurement And Instruments — Examples (5 item(s))

- `ex-nrqm-measurement-serial-stern-gerlach-filters` · example — Serial ideal Stern-Gerlach filters: a two-level model computation
- `ex-nrqm-measurement-three-polarizer-chain` · example — Three ideal analysers in series: the quarter-intensity model computation
- `ex-nrqm-measurement-absorption-instrument` · example — An absorbing two-outcome instrument: amplitude suppression and a branch without an outgoing polarization state
- `ex-nrqm-measurement-degenerate-coarse-versus-fine-update` · example — Coarse and fine declared measurements of a degenerate subspace: the Lueders update is not eigenvector selection
- `rem-nrqm-measurement-examples-scope-limits` · remark — What the worked instruments of the companion page establish

### `qm-autonomous-dynamics` — Qm Autonomous Dynamics (8 item(s))

- `lem-nrqm-autonomous-dynamics-flow-calculus` · lemma — Flow calculus of a self-adjoint generator: commutation, invariance and differentiability
- `lem-nrqm-autonomous-dynamics-heisenberg-flow` · lemma — Heisenberg flow of a bounded operator: conjugates, covariance and the equation of motion
- `lem-nrqm-autonomous-dynamics-stationary-ray-characterization` · lemma — Stationary rays of a self-adjoint flow are exactly the eigenrays
- `def-nrqm-autonomous-dynamics-framework-evolution` · definition — Assigned energy observable, unitary flow and the two pictures of autonomous evolution
- `pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow` · physics-theorem — The Schroedinger-picture flow: unitarity, domain invariance and the domain-qualified equation
- `pthm-nrqm-autonomous-dynamics-heisenberg-picture` · physics-theorem — The Heisenberg picture: equivalent predictions and the domain-qualified equation of motion
- `pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation` · physics-theorem — Energy conservation, conserved sharp observables and the stationary eigenrays
- `rem-nrqm-autonomous-dynamics-scope-and-empirical-status` · remark — What the autonomous-dynamics page adopts, proves and does not claim

### `qm-autonomous-dynamics-examples` — Qm Autonomous Dynamics — Examples (4 item(s))

- `ex-nrqm-autonomous-dynamics-two-level-precession` · example — Precession of a two-level preparation: exact phases, probabilities and a Bloch-vector rotation
- `ex-nrqm-autonomous-dynamics-finite-stationary-superposition` · example — A finite superposition of energy eigenrays: exact phases, laws and return times
- `cex-nrqm-autonomous-dynamics-superposition-with-distinct-energies-is-not-stationary` · counterexample — A superposition of distinct energy eigenrays need not be stationary
- `rem-nrqm-autonomous-dynamics-examples-scope-limits` · remark — What the worked items of the companion page establish

## Your seams

Your pages depend on another group's:

- `qm-observables-and-born-probabilities` requires `qm-state-geometry` (group q, batch 44)
- `qm-observables-and-born-probabilities` requires `qm-math-composites` (group x, batch 35)
- `qm-observables-and-born-probabilities` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-observables-and-born-probabilities` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-observables-and-born-probabilities` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-observables-and-born-probabilities-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-observables-and-born-probabilities-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-observables-and-born-probabilities-examples` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-observables-and-born-probabilities-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-measurement-and-instruments` requires `qm-math-composites` (group x, batch 35)
- `qm-measurement-and-instruments` requires `qm-state-geometry` (group q, batch 44)
- `qm-measurement-and-instruments` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-measurement-and-instruments-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-measurement-and-instruments-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-measurement-and-instruments-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-measurement-and-instruments-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-autonomous-dynamics` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-autonomous-dynamics` requires `qm-state-geometry` (group q, batch 44)
- `qm-autonomous-dynamics` requires `qm-math-composites` (group x, batch 35)
- `qm-autonomous-dynamics` requires `qm-math-magnetic-and-detection` (group aa, batch 42)
- `qm-autonomous-dynamics-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-autonomous-dynamics-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-autonomous-dynamics-examples` requires `qm-math-composites` (group x, batch 35)
- `qm-autonomous-dynamics-examples` requires `qm-math-magnetic-and-detection` (group aa, batch 42)

Another group's pages depend on yours:

- `qm-massive-particle-kinematics` (group s) requires your `qm-autonomous-dynamics`
- `qm-massive-particle-kinematics` (group s) requires your `qm-observables-and-born-probabilities`
- `qm-massive-particle-kinematics-examples` (group s) requires your `qm-observables-and-born-probabilities`
- `qm-interference-and-local-detection` (group s) requires your `qm-observables-and-born-probabilities`
- `qm-interference-and-local-detection` (group s) requires your `qm-autonomous-dynamics`
- `qm-uncertainty-and-compatibility` (group s) requires your `qm-measurement-and-instruments`
- `qm-uncertainty-and-compatibility` (group s) requires your `qm-observables-and-born-probabilities`
- `qm-uncertainty-and-compatibility-examples` (group s) requires your `qm-observables-and-born-probabilities`
- `qm-uncertainty-and-compatibility-examples` (group s) requires your `qm-autonomous-dynamics`
- `qm-uncertainty-and-compatibility-examples` (group s) requires your `qm-measurement-and-instruments`
- `qm-one-dimensional-potentials` (group t) requires your `qm-observables-and-born-probabilities`
- `qm-one-dimensional-potentials` (group t) requires your `qm-autonomous-dynamics`
- `qm-harmonic-oscillator` (group t) requires your `qm-observables-and-born-probabilities`
- `qm-harmonic-oscillator` (group t) requires your `qm-autonomous-dynamics`
- `qm-harmonic-oscillator-examples` (group t) requires your `qm-observables-and-born-probabilities`
- `qm-symmetries-and-conservation` (group t) requires your `qm-autonomous-dynamics`
- `qm-symmetries-and-conservation` (group t) requires your `qm-observables-and-born-probabilities`
- `qm-symmetries-and-conservation-examples` (group t) requires your `qm-autonomous-dynamics`
- `qm-symmetries-and-conservation-examples` (group t) requires your `qm-observables-and-born-probabilities`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-observables-and-born-probabilities`
- `qm-angular-momentum-and-spin` (group u) requires your `qm-autonomous-dynamics`
- `qm-angular-momentum-and-spin-examples` (group u) requires your `qm-observables-and-born-probabilities`
- `qm-angular-momentum-and-spin-examples` (group u) requires your `qm-autonomous-dynamics`
- `qm-composites-entanglement-and-reduced-states` (group u) requires your `qm-measurement-and-instruments`
- `qm-composites-entanglement-and-reduced-states` (group u) requires your `qm-observables-and-born-probabilities`
- `qm-composites-entanglement-and-reduced-states-examples` (group u) requires your `qm-measurement-and-instruments`
- `qm-composites-entanglement-and-reduced-states-examples` (group u) requires your `qm-observables-and-born-probabilities`
- `qm-bell-models-and-measurement-limits` (group u) requires your `qm-observables-and-born-probabilities`
- `qm-bell-models-and-measurement-limits` (group u) requires your `qm-measurement-and-instruments`
- `qm-identical-particles-and-exclusion` (group v) requires your `qm-observables-and-born-probabilities`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-observables-and-born-probabilities`
- `qm-central-potentials-and-hydrogen` (group v) requires your `qm-autonomous-dynamics`
- `qm-controlled-approximations` (group v) requires your `qm-observables-and-born-probabilities`
- `qm-controlled-approximations` (group v) requires your `qm-autonomous-dynamics`
- `qm-controlled-approximations-examples` (group v) requires your `qm-observables-and-born-probabilities`
- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-observables-and-born-probabilities`
- `qm-driven-dynamics-and-adiabatic-limits` (group w) requires your `qm-autonomous-dynamics`
- `qm-driven-dynamics-and-adiabatic-limits-examples` (group w) requires your `qm-observables-and-born-probabilities`
- `qm-three-dimensional-scattering` (group w) requires your `qm-observables-and-born-probabilities`
- `qm-three-dimensional-scattering` (group w) requires your `qm-autonomous-dynamics`
- `qm-three-dimensional-scattering-examples` (group w) requires your `qm-observables-and-born-probabilities`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-observables-and-born-probabilities`
- `qm-many-body-and-equilibrium-models` (group w) requires your `qm-autonomous-dynamics`
- `qm-many-body-and-equilibrium-models-examples` (group w) requires your `qm-observables-and-born-probabilities`
- `qm-many-body-and-equilibrium-models-examples` (group w) requires your `qm-autonomous-dynamics`
- `qm-photons-and-radiation-modes` (group x) requires your `qm-observables-and-born-probabilities`
- `qm-photons-and-radiation-modes` (group x) requires your `qm-measurement-and-instruments`
- `qm-photons-and-radiation-modes-examples` (group x) requires your `qm-observables-and-born-probabilities`
- `qm-photons-and-radiation-modes-examples` (group x) requires your `qm-measurement-and-instruments`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-observables-and-born-probabilities`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-autonomous-dynamics`
- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-measurement-and-instruments`
- `qm-light-matter-and-spectral-transitions-examples` (group x) requires your `qm-observables-and-born-probabilities`

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
