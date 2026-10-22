# Step 5 adjudication — group **t**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 51, 53, 57: 3 A/B pair(s), 6 page(s), 28 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **51**: `research/physics-non-fluid-129-2026-10-21-r2-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **53**: `research/physics-non-fluid-129-2026-10-21-r2-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/physics-non-fluid-129-2026-10-21-r2-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-non-fluid-129-2026-10-21-r2-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 51 | `nrqmx-finite-open-dynamics` | A | non-relativistic-quantum-mechanics | 799 | `nrqmx-measurement-compatibility`, `qsm-dt-channels`, `qm-composites-entanglement-and-reduced-states` |
| 51 | `nrqmx-finite-open-dynamics-examples` | B | non-relativistic-quantum-mechanics | 800 | `nrqmx-finite-open-dynamics` |
| 53 | `nrqmx-magnetic-geometry` | A | non-relativistic-quantum-mechanics | 803 | `nrqmx-form-spectral-methods`, `nrqmx-adiabatic-holonomy`, `qm-math-magnetic-and-detection`, `qm-math-oscillator`, `nrqmx-operator-realizations` |
| 53 | `nrqmx-magnetic-geometry-examples` | B | non-relativistic-quantum-mechanics | 804 | `nrqmx-magnetic-geometry` |
| 57 | `nrqmx-quantum-optics-models` | A | non-relativistic-quantum-mechanics | 811 | `nrqmx-finite-mode-gaussian`, `nrqmx-finite-open-dynamics`, `qm-light-matter-and-spectral-transitions`, `qm-math-fock-and-equilibrium`, `qm-math-composites` |
| 57 | `nrqmx-quantum-optics-models-examples` | B | non-relativistic-quantum-mechanics | 812 | `nrqmx-quantum-optics-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `nrqmx-finite-open-dynamics` — Finite reduced dynamics, memory and quantum trajectories (7 item(s))

- `def-nrqmx-finite-channel-families` · definition — Finite channel families, semigroups, and CP-divisibility
- `lem-nrqmx-continuous-simplex-integrals` · lemma — Continuous finite-dimensional ordered-simplex integrals
- `def-nrqmx-finite-jump-trajectories` · definition — Finite GKSL jump-trajectory branches
- `post-nrqmx-finite-open-model` · postulate — Finite system-environment and Markov model assignments
- `pthm-nrqmx-finite-reduction-channel` · physics-theorem — Product-state reduced evolution is a channel
- `pthm-nrqmx-amplitude-damping-model` · physics-theorem — Amplitude damping with operational time units
- `pthm-nrqmx-jump-unravelling-finite` · physics-theorem — Finite jump expansion and ensemble equation

### `nrqmx-finite-open-dynamics-examples` — Finite reduced dynamics, memory and quantum trajectories — Examples (2 item(s))

- `ex-nrqmx-finite-environment-recurrence` · example — A finite bath revives coherence
- `ex-nrqmx-amplitude-damping-jump-law` · example — Single excitation jump law

### `nrqmx-magnetic-geometry` — Uniform magnetic fields, flux topology and Pauli coupling (10 item(s))

- `def-nrqmx-magnetic-form-data` · definition — Magnetic quadratic-form data
- `def-nrqmx-periodic-ring-domain` · definition — Periodic Sobolev domain for a circle
- `lem-nrqmx-magnetic-form-closability` · lemma — Closability of smooth magnetic forms with locally integrable potentials
- `lem-nrqmx-landau-form-diagonalization` · lemma — Closed-form diagonalization in Landau gauge
- `thm-nrqmx-periodic-flux-spectrum` · theorem — Spectrum and gauge periodicity of a periodic flux operator
- `lem-nrqmx-landau-3d-form-diagonalization` · lemma — Closed-form diagonalization with free longitudinal motion
- `post-nrqmx-magnetic-model-extension` · postulate — Unbounded vector potential and effective Pauli model
- `pthm-nrqmx-landau-direct-integral` · physics-theorem — Exact planar Landau spectrum in the linear gauge
- `pthm-nrqmx-flux-ring-spectrum` · physics-theorem — Aharonov–Bohm ring spectrum and flux periodicity
- `pthm-nrqmx-pauli-square-identity` · physics-theorem — Pauli square identity and the formal g=2 coupling

### `nrqmx-magnetic-geometry-examples` — Uniform magnetic fields, flux topology and Pauli coupling — Examples (2 item(s))

- `ex-nrqmx-landau-3d-continuum` · example — Longitudinal free motion turns Landau levels into bands
- `ex-nrqmx-flux-half-crossing` · example — Half-flux ground-state crossing on the ring

### `nrqmx-quantum-optics-models` — Finite-mode light–matter models and detection statistics (5 item(s))

- `post-nrqmx-finite-mode-light-matter-model` · postulate — Finite-mode dipole and detector assignment
- `def-nrqmx-finite-mode-g2-statistic` · definition — Ideal single-mode normally ordered second factorial statistic
- `pthm-nrqmx-jaynes-cummings-blocks` · physics-theorem — Jaynes–Cummings invariant blocks and Rabi frequency
- `pthm-nrqmx-beam-splitter-count-statistics` · physics-theorem — Passive beam-splitter photon statistics
- `pthm-nrqmx-finite-mode-loss-channel` · physics-theorem — Pure loss channel and binomial thinning

### `nrqmx-quantum-optics-models-examples` — Finite-mode light–matter models and detection statistics — Examples (2 item(s))

- `ex-nrqmx-jc-vacuum-rabi` · example — Vacuum Rabi oscillation
- `ex-nrqmx-single-photon-antibunching` · example — Ideal single-mode factorial moment

## Your seams

Your pages depend on another group's:

- `nrqmx-finite-open-dynamics` requires `nrqmx-measurement-compatibility` (group v, batch 50)
- `nrqmx-magnetic-geometry` requires `nrqmx-form-spectral-methods` (group s, batch 44)
- `nrqmx-magnetic-geometry` requires `nrqmx-adiabatic-holonomy` (group u, batch 47)
- `nrqmx-magnetic-geometry` requires `nrqmx-operator-realizations` (group s, batch 43)
- `nrqmx-quantum-optics-models` requires `nrqmx-finite-mode-gaussian` (group w, batch 52)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-non-fluid-129-2026-10-21-r2-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-non-fluid-129-2026-10-21-r2`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
