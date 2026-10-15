# Step 5 adjudication — group **l**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 22, 23, 24: 3 A/B pair(s), 6 page(s), 37 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/physics-td-qft-rpm-62-2026-10-14-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/physics-td-qft-rpm-62-2026-10-14-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/physics-td-qft-rpm-62-2026-10-14-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-td-qft-rpm-62-2026-10-14-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 22 | `rpm-geometry-actions` | A | relativistic-particle-mechanics | 413 | `euclidean-ordinary-differential-equations-with-smooth-dependence`, `gr-causal-and-initial-value-boundaries`, `picard-lindelof-and-first-order-odes`, `sr-energy-momentum` |
| 22 | `rpm-geometry-actions-examples` | B | relativistic-particle-mechanics | 414 | `rpm-geometry-actions` |
| 23 | `rpm-momentum-collisions` | A | relativistic-particle-mechanics | 415 | `rpm-geometry-actions`, `sr-causality-and-signals` |
| 23 | `rpm-momentum-collisions-examples` | B | relativistic-particle-mechanics | 416 | `rpm-momentum-collisions` |
| 24 | `rpm-external-charge` | A | relativistic-particle-mechanics | 417 | `em-lorentz-covariant-formulation`, `rpm-geometry-actions` |
| 24 | `rpm-external-charge-examples` | B | relativistic-particle-mechanics | 418 | `rpm-external-charge` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rpm-geometry-actions` — Particle spacetime, observers and worldlines (13 item(s))

- `def-rpm-spacetime-observer-and-worldline` · definition — Particle spacetime, observers and worldlines
- `lem-rpm-shell-tangent-force-ivp` · lemma — Smooth shell-tangent force initial-value problem
- `thm-rpm-proper-time-parametrization` · theorem — Proper-time parameter and normalized tangent
- `post-rpm-test-clock-and-background` · postulate — Ideal clocks on a prescribed Lorentzian background
- `lem-rpm-length-action-first-variation` · lemma — Timelike length action: arbitrary-parameter first variation
- `post-rpm-massive-test-particle-action` · postulate — Massive spinless test-particle action
- `lem-rpm-einbein-variation-and-equivalence` · lemma — Positive-einbein variation and massive/null sector equations
- `post-rpm-null-test-particle-action` · postulate — Massless test-particle action and momentum scale
- `def-rpm-mechanical-momentum-and-observer-energy` · definition — Mechanical momentum and observer energy
- `pthm-rpm-free-massive-and-null-geodesics` · physics-theorem — Free massive and null particle geodesics
- `post-rpm-prescribed-force-law` · postulate — Prescribed constant-mass force law
- `pthm-rpm-killing-particle-charge` · physics-theorem — Killing particle charge and force balance
- `pthm-rpm-mass-shell-and-force-work` · physics-theorem — Mass shell, observer energy and inertial work

### `rpm-geometry-actions-examples` — Particle spacetime, observers and worldlines — Examples (4 item(s))

- `ex-rpm-incomplete` · example — Flat local geometry without completeness
- `ex-rpm-clock-reunion` · example — Ideal-clock readings for a flat reunion path
- `ex-rpm-null-scale` · example — One null ray with distinct momentum scales
- `ex-rpm-straight` · example — Straight timelike free particle

### `rpm-momentum-collisions` — Mass shell inversion, observer work and variable mass (9 item(s))

- `pthm-rpm-inverse-momentum-and-work` · physics-theorem — Mass shell inversion, observer work and variable mass
- `thm-rpm-finite-future-momentum-sum` · theorem — Finite causal sums and center-of-momentum rest observer
- `def-rpm-collision-objects` · definition — Finite event collisions and observer quantities
- `post-rpm-isolated-collision-balance` · postulate — Isolated event four-momentum balance
- `pthm-rpm-system-mass-threshold` · physics-theorem — System invariant mass and final-state thresholds
- `pthm-rpm-fixed-target-threshold` · physics-theorem — Fixed-target invariant energy threshold
- `pthm-rpm-two-body-com-kinematics` · physics-theorem — Complete two-body rest-frame kinematics
- `pthm-rpm-two-null-invariant-energy` · physics-theorem — Two null momenta and collision angle
- `pthm-rpm-kinematic-elastic-channel` · physics-theorem — Elastic channel momentum magnitude and direction freedom

### `rpm-momentum-collisions-examples` — Mass shell inversion, observer work and variable mass — Examples (2 item(s))

- `texp-rpm-ideal-fusion-mass` · thought-experiment — Ideal two-particle fusion and internal mass
- `texp-rpm-one-null-decay-recoil` · thought-experiment — One-null decay and massive recoil

### `rpm-external-charge` — Fixed-endpoint curved charge variation (8 item(s))

- `lem-rpm-curved-charge-action-variation` · lemma — Fixed-endpoint curved charge variation
- `lem-rpm-external-charge-local-ivp` · lemma — External Lorentz ODE local well-posedness
- `lem-rpm-charge-gauge-boundary` · lemma — Gauge boundary term and kinetic/canonical momentum
- `def-rpm-charge-spin-model` · definition — Charged and spinning test-body quantities
- `post-rpm-external-charge-action` · postulate — External-field charged-particle action
- `post-rpm-bmt-dipole-model` · postulate — Classical BMT polarization model
- `pthm-rpm-external-charge-action-equivalence` · physics-theorem — Stationary charged action and Lorentz force
- `pthm-rpm-charge-mass-shell` · physics-theorem — Charged test-body mass shell and laboratory work

### `rpm-external-charge-examples` — Fixed-endpoint curved charge variation — Examples (1 item(s))

- `ex-rpm-pure-gauge-free-charge` · example — Pure-gauge potential and free massive charged motion

## Your seams

Another group's pages depend on yours:

- `rpm-hamiltonian-constraints` (group m) requires your `rpm-geometry-actions`
- `rpm-spin-finite-size` (group m) requires your `rpm-external-charge`
- `rpm-exact-flat-orbits` (group n) requires your `rpm-external-charge`
- `rpm-curved-orbits-scattering` (group n) requires your `rpm-external-charge`
- `rpm-radiation-models` (group n) requires your `rpm-external-charge`
- `rpm-controlled-limits` (group o) requires your `rpm-momentum-collisions`
- `rpm-controlled-limits` (group o) requires your `rpm-geometry-actions`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-td-qft-rpm-62-2026-10-14-judge.jsonl` yourself before reporting nothing to do —
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

# Step 5 batch adjudication, `physics-td-qft-rpm-62-2026-10-14`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
