# Step 5 adjudication — group **w**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 60, 61, 62: 3 A/B pair(s), 6 page(s), 63 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **60**: `research/physics-cm-qm-gr-79-2026-10-11-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **61**: `research/physics-cm-qm-gr-79-2026-10-11-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **62**: `research/physics-cm-qm-gr-79-2026-10-11-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 60 | `qm-driven-dynamics-and-adiabatic-limits` | A | non-relativistic-quantum-mechanics | 199 | `qm-controlled-approximations`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics`, `qm-math-composites`, `qm-math-controlled-dynamics`, `qm-math-orbital-and-spin`, `qm-harmonic-oscillator`, `qm-central-potentials-and-hydrogen`, `qm-math-coulomb` |
| 60 | `qm-driven-dynamics-and-adiabatic-limits-examples` | B | non-relativistic-quantum-mechanics | 200 | `qm-driven-dynamics-and-adiabatic-limits`, `qm-math-orbital-and-spin`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-state-geometry`, `qm-harmonic-oscillator`, `qm-math-controlled-dynamics` |
| 61 | `qm-three-dimensional-scattering` | A | non-relativistic-quantum-mechanics | 201 | `qm-controlled-approximations`, `qm-math-composites`, `qm-central-potentials-and-hydrogen`, `qm-one-dimensional-potentials`, `qm-framework-and-quantities`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics`, `qm-state-geometry`, `qm-math-controlled-dynamics` |
| 61 | `qm-three-dimensional-scattering-examples` | B | non-relativistic-quantum-mechanics | 202 | `qm-three-dimensional-scattering`, `qm-framework-and-quantities`, `qm-observables-and-born-probabilities`, `qm-math-orbital-and-spin` |
| 62 | `qm-many-body-and-equilibrium-models` | A | non-relativistic-quantum-mechanics | 203 | `qm-controlled-approximations`, `qm-identical-particles-and-exclusion`, `order-zorn-and-the-axiom-of-choice`, `square-integrable-kernels-and-hilbert-schmidt-compactness`, `qm-math-composites`, `qm-math-fock-and-equilibrium`, `qm-massive-particle-kinematics`, `qm-observables-and-born-probabilities`, `qm-autonomous-dynamics`, `qm-framework-and-quantities`, `qm-state-geometry`, `qm-math-oscillator` |
| 62 | `qm-many-body-and-equilibrium-models-examples` | B | non-relativistic-quantum-mechanics | 204 | `qm-many-body-and-equilibrium-models`, `qm-observables-and-born-probabilities`, `qm-framework-and-quantities`, `qm-identical-particles-and-exclusion`, `qm-math-fock-and-equilibrium`, `qm-autonomous-dynamics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qm-driven-dynamics-and-adiabatic-limits` — Qm Driven Dynamics And Adiabatic Limits (13 item(s))

- `def-nrqm-driven-dynamics-framework-driven-model` · definition — The declared driven model: prescribed time-dependent energy families, propagator evolution and the two-level drive models
- `def-nrqm-driven-dynamics-framework-interaction-picture` · definition — The interaction picture of the declared driven model: readings, the interaction propagator and picture equivalence of outcome laws
- `lem-nrqm-driven-dynamics-two-level-rotating-frame` · lemma — The two-level rotating frame: conjugation identities, the transformed families and invariance of the level populations
- `pthm-nrqm-driven-dynamics-bounded-norm-propagator` · physics-theorem — The bounded norm-continuous driven model: unique unitary propagator, Dyson truncation budget and outcome-law error
- `pthm-nrqm-driven-dynamics-mild-propagator-and-pictures` · physics-theorem — The bounded-control driven model: mild propagator, interaction-picture evolution and equivalence of the two readings
- `pthm-nrqm-driven-dynamics-first-order-transition-amplitude` · physics-theorem — First-order transition amplitudes for a bounded control: Dyson remainder, the sinusoidal drive with its co- and counter-rotating parts, and the outcome-probability error
- `pthm-nrqm-driven-dynamics-common-domain-propagator` · physics-theorem — The common-domain driven model: strong propagator with domain invariance, and the driven oscillator as its declared instance
- `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi` · physics-theorem — The circularly driven two-level model: exact rotating-frame reduction, Rabi populations, resonance and inversion times
- `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error` · physics-theorem — The linearly driven two-level model: rotating-wave approximation with an explicit finite-time error contract and the averaged Rabi populations
- `def-nrqm-driven-dynamics-framework-adiabatic-protocol` · definition — The declared adiabatic protocol model: slow parameter, followed spectral subspace, uniform gap and leakage probability
- `pthm-nrqm-driven-dynamics-finite-adiabatic-leakage` · physics-theorem — Finite-dimensional gapped protocol: the 1/T leakage estimate, the intertwining propagator and the Born leakage probability
- `pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage` · physics-theorem — The slowly varying one-centre Coulomb source: verified uniform gap of the n-th level and the 1/T leakage estimate
- `rem-nrqm-driven-dynamics-scope-and-empirical-status` · remark — Scope and empirical status of the page: what is adopted, what is proved, and what is excluded

### `qm-driven-dynamics-and-adiabatic-limits-examples` — Qm Driven Dynamics And Adiabatic Limits — Examples (5 item(s))

- `ex-nrqm-driven-dynamics-circular-drive-exact-populations` · example — Worked Rabi populations of the circularly driven two-level model: quarter-inversion, pi-pulse and detuned checks
- `ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget` · example — Worked rotating-wave error budget for the linearly driven two-level model: dimensionless instantiation and averaged Rabi check
- `ex-nrqm-driven-dynamics-ammonia-two-level-resonance` · example — The two-level inversion model in an oscillating field: resonance, averaged Rabi inversion and its error contract
- `ex-nrqm-driven-dynamics-driven-oscillator-coherent-response` · example — The driven oscillator: exact classical response of a coherent preparation and stationary fluctuations
- `rem-nrqm-driven-dynamics-examples-scope-limits` · remark — What the examples check, what they do not contain, and the empirical status of the companion page

### `qm-three-dimensional-scattering` — Qm Three Dimensional Scattering (18 item(s))

- `lem-nrqm-scattering-model-scaling-correspondence` · lemma — Unit, time and spectral correspondence between the physical scattering operators and the nondimensional Laplacian
- `lem-nrqm-scattering-three-dimensional-current-and-flux` · lemma — The three-dimensional continuity identity, the vanishing stationary divergence and the incident and outgoing current readings
- `def-nrqm-scattering-framework-short-range-model` · definition — The declared short-range scattering model: state space, potential classes, assigned energy observables, asymptotic vocabulary and units
- `def-nrqm-scattering-stationary-beam-and-cross-section-model` · definition — The declared stationary elastic beam model: incident plane wave, scattered wave, current readings and differential and total cross sections
- `pthm-nrqm-scattering-wave-operator-existence-and-free-continuity` · physics-theorem — Existence of the model's wave operators, isometry and intertwining, and the purely absolutely continuous free spectrum
- `pthm-nrqm-scattering-compact-support-asymptotic-completeness` · physics-theorem — Asymptotic completeness and the unitary scattering operator for real bounded compactly supported potentials
- `pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness` · physics-theorem — Asymptotic completeness for the resolvent-tail short-range class, with the decaying-tail example and the explicit exclusion of the Coulomb tail
- `pthm-nrqm-scattering-stationary-wave-amplitude-and-flux` · physics-theorem — The model's stationary scattering wave, its outgoing amplitude and the differential and total cross-section readings
- `def-nrqm-scattering-partial-wave-and-phase-shift-readings` · definition — The model's partial-wave and phase-shift vocabulary for a declared central potential
- `def-nrqm-scattering-single-channel-resonance-model` · definition — The declared single-channel resonance model: pole-shaped channel factor and its cross-section reading
- `pthm-nrqm-scattering-partial-wave-cross-section` · physics-theorem — Partial-wave expansion, unit-modulus channel factors and the phase-shift cross-section series
- `pthm-nrqm-scattering-controlled-born-approximation` · physics-theorem — The controlled Born reading: operator-norm condition, uniform amplitude error and coupling scaling
- `pthm-nrqm-scattering-stationary-dynamical-identification` · physics-theorem — Identification of the model's scattering operator with the on-shell stationary operator, and the central per-channel form
- `def-nrqm-scattering-coulomb-dollard-model` · definition — The declared long-range Coulomb model and its Dollard-modified free comparison
- `pthm-nrqm-scattering-coulomb-dollard-completeness` · physics-theorem — Completeness of the Dollard-modified wave operators for the declared Coulomb model
- `pthm-nrqm-scattering-single-channel-resonance-cross-section` · physics-theorem — The resonance model's phase-shift law, unitarity and channel cross section
- `rem-nrqm-scattering-scope-and-empirical-status` · remark — Scope and empirical status of the three-dimensional scattering page
- `rem-nrqm-scattering-long-range-and-threshold-limits` · remark — Long-range, threshold and model-scope limits of the scattering page

### `qm-three-dimensional-scattering-examples` — Qm Three Dimensional Scattering — Examples (5 item(s))

- `ex-nrqm-scattering-square-well-s-wave-phase-shift` · example — S-wave phase shift of a declared spherical square well, with its low-energy limit and hard-sphere comparison
- `ex-nrqm-scattering-single-channel-resonance-cross-section` · example — The declared single-channel resonance: Lorentzian factor, half-height points and resonance-value cross section
- `ex-nrqm-scattering-born-uniform-ball-amplitude` · example — Born amplitude of a declared uniform ball potential with an explicit weak-coupling condition
- `ex-nrqm-scattering-long-range-tail-and-coulomb-warning` · example — A Yukawa tail satisfies the resolvent-tail class while the Coulomb limit does not
- `rem-nrqm-scattering-examples-scope-limits` · remark — Scope of the scattering examples page

### `qm-many-body-and-equilibrium-models` — Qm Many Body And Equilibrium Models (17 item(s))

- `lem-nrqm-many-body-one-body-reduction-trace-law` · lemma — The one-body reduction trace law of the finite-mode permutation sectors
- `lem-nrqm-many-body-two-level-thermal-formulas` · lemma — Closed formulas for the two-level canonical weights, mean energy, entropy and free energy
- `lem-nrqm-many-body-cc-bounded-spatial-realization` · lemma — CC realization of the bounded spatial operator on a finite-component H² domain
- `lem-nrqm-many-body-finite-spin-product-identification` · lemma — Finite spin components of an N-fold spatial tensor product
- `lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion` · lemma — Fixed-particle-number occupation bases and the countable-mode partition criterion
- `lem-nrqm-many-body-spectral-mean-and-defined-trace-product` · lemma — Spectral first moments and trace products with a density operator
- `def-nrqm-many-body-framework-declared-fixed-n-model` · definition — The declared fixed-N many-body model: species sector, one-particle data, interaction and the sector energy observable
- `def-nrqm-many-body-framework-one-body-reduced-operator` · definition — The declared one-body reduced operator and the one-body readout of a sector preparation
- `def-nrqm-many-body-framework-entropy-and-free-energy` · definition — Entropy, the Boltzmann constant and the free-energy functional of the declared finite-sector model
- `post-nrqm-many-body-canonical-equilibrium-ensemble` · postulate — The canonical equilibrium-ensemble assumption: the Gibbs preparation of a declared model at assigned temperature
- `pthm-nrqm-many-body-noninteracting-sector-diagonalization` · physics-theorem — Diagonalisation of the non-interacting finite-mode sector: occupation eigenvalues, partition sum and ground energy
- `pthm-nrqm-many-body-one-body-readout-law` · physics-theorem — The one-body readout law: sector means of summed bounded one-particle quantities and their reduced forms
- `pthm-nrqm-many-body-exchange-energy-splitting` · physics-theorem — Direct and exchange contributions to a two-fermion mean energy and the repulsive-Coulomb ordering
- `pthm-nrqm-many-body-thermal-equilibrium-characterization` · physics-theorem — The canonical preparation as the unique free-energy minimiser of the declared finite-sector model
- `pthm-nrqm-many-body-thermal-occupation-predictions` · physics-theorem — Thermal occupation means of the declared free-mode models: Bose and Fermi factors, product convergence and dilute remainders
- `pthm-nrqm-many-body-unitary-evolution-preserves-entropy` · physics-theorem — Unitary evolution preserves entropy and cannot produce the canonical preparation from a different one
- `rem-nrqm-many-body-scope-and-empirical-status` · remark — Scope and empirical status of the many-body and equilibrium models

### `qm-many-body-and-equilibrium-models-examples` — Qm Many Body And Equilibrium Models — Examples (5 item(s))

- `ex-nrqm-many-body-two-site-bond-thermal-ensemble` · example — The two-site bond model: exact canonical weights, mean energy, entropy and free energy of one particle on two sites
- `ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble` · example — Finite-mode non-interacting thermal ensembles: two fermions in three modes and two bosons in two modes
- `ex-nrqm-many-body-gas-statistics-dilute-limits` · example — Free-mode statistics at low occupation: exact dilute identities, a finite arithmetic check and two convergence examples
- `texp-nrqm-many-body-two-site-no-thermalization` · thought-experiment — A site-localised preparation of the two-site bond model never becomes canonical, and its readouts need not take their thermal means
- `rem-nrqm-many-body-examples-scope-limits` · remark — What the companion examples and the thought experiment establish

## Your seams

Your pages depend on another group's:

- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-controlled-approximations` (group v, batch 59)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-state-geometry` (group q, batch 44)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-composites` (group x, batch 35)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-controlled-dynamics` (group z, batch 40)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-harmonic-oscillator` (group t, batch 52)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-central-potentials-and-hydrogen` (group v, batch 58)
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-coulomb` (group z, batch 39)
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-state-geometry` (group q, batch 44)
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-harmonic-oscillator` (group t, batch 52)
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-math-controlled-dynamics` (group z, batch 40)
- `qm-three-dimensional-scattering` requires `qm-controlled-approximations` (group v, batch 59)
- `qm-three-dimensional-scattering` requires `qm-math-composites` (group x, batch 35)
- `qm-three-dimensional-scattering` requires `qm-central-potentials-and-hydrogen` (group v, batch 58)
- `qm-three-dimensional-scattering` requires `qm-one-dimensional-potentials` (group t, batch 51)
- `qm-three-dimensional-scattering` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-three-dimensional-scattering` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-three-dimensional-scattering` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-three-dimensional-scattering` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-three-dimensional-scattering` requires `qm-state-geometry` (group q, batch 44)
- `qm-three-dimensional-scattering` requires `qm-math-controlled-dynamics` (group z, batch 40)
- `qm-three-dimensional-scattering-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-three-dimensional-scattering-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-three-dimensional-scattering-examples` requires `qm-math-orbital-and-spin` (group y, batch 37)
- `qm-many-body-and-equilibrium-models` requires `qm-controlled-approximations` (group v, batch 59)
- `qm-many-body-and-equilibrium-models` requires `qm-identical-particles-and-exclusion` (group v, batch 57)
- `qm-many-body-and-equilibrium-models` requires `qm-math-composites` (group x, batch 35)
- `qm-many-body-and-equilibrium-models` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-many-body-and-equilibrium-models` requires `qm-massive-particle-kinematics` (group s, batch 48)
- `qm-many-body-and-equilibrium-models` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-many-body-and-equilibrium-models` requires `qm-autonomous-dynamics` (group r, batch 47)
- `qm-many-body-and-equilibrium-models` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-many-body-and-equilibrium-models` requires `qm-state-geometry` (group q, batch 44)
- `qm-many-body-and-equilibrium-models` requires `qm-math-oscillator` (group y, batch 36)
- `qm-many-body-and-equilibrium-models-examples` requires `qm-observables-and-born-probabilities` (group r, batch 45)
- `qm-many-body-and-equilibrium-models-examples` requires `qm-framework-and-quantities` (group q, batch 43)
- `qm-many-body-and-equilibrium-models-examples` requires `qm-identical-particles-and-exclusion` (group v, batch 57)
- `qm-many-body-and-equilibrium-models-examples` requires `qm-math-fock-and-equilibrium` (group z, batch 41)
- `qm-many-body-and-equilibrium-models-examples` requires `qm-autonomous-dynamics` (group r, batch 47)

Another group's pages depend on yours:

- `qm-light-matter-and-spectral-transitions` (group x) requires your `qm-driven-dynamics-and-adiabatic-limits`
- `qm-light-matter-and-spectral-transitions-examples` (group x) requires your `qm-driven-dynamics-and-adiabatic-limits`

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
