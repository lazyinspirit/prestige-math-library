# Step 5 adjudication — group **d**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 21, 24, 26: 3 A/B pair(s), 6 page(s), 20 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **21**: `research/fluid-dynamics-all-47-2026-10-23-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/fluid-dynamics-all-47-2026-10-23-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **26**: `research/fluid-dynamics-all-47-2026-10-23-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/fluid-dynamics-all-47-2026-10-23-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 21 | `fd-ps02` | A | fluid-dynamics | 401 | `fd-f02`, `fd-f03`, `fd-s03` |
| 21 | `fd-ps02-examples` | B | fluid-dynamics | 402 | `fd-ps02` |
| 24 | `fd-w02` | A | fluid-dynamics | 407 | `cm-math-fluid`, `fd-f01`, `fd-w01`, `td-continuum-heat-model` |
| 24 | `fd-w02-examples` | B | fluid-dynamics | 408 | `fd-w02` |
| 26 | `fd-k02` | A | fluid-dynamics | 411 | `fd-k01` |
| 26 | `fd-k02-examples` | B | fluid-dynamics | 412 | `fd-k02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-ps02` — Mechanical power balance under adopted wall laws (4 item(s))

- `post-fd-navier-slip-wall-law` · postulate — Adopted Navier friction law for a stationary wall
- `pthm-fd-local-momentum-balance-from-continuum` · physics-theorem — Local momentum equation from the adopted continuum balance
- `pthm-fd-wall-mechanical-power-balance` · physics-theorem — Mechanical power balance under adopted wall laws
- `pthm-fd-linear-acoustic-model-prediction` · physics-theorem — Linear acoustic model prediction

### `fd-ps02-examples` — Mechanical power balance under adopted wall laws — Examples (1 item(s))

- `ex-fd-adopted-poiseuille-couette` · example — Adopted Poiseuille and Couette channel predictions

### `fd-w02` — Periodic incompressible Newtonian idealization (6 item(s))

- `post-fd-periodic-newtonian` · postulate — Periodic incompressible Newtonian idealization
- `pthm-fd-periodic-weak-continuation` · physics-theorem — Weak continuation of the adopted periodic viscous model
- `pthm-fd-smooth-consistency` · physics-theorem — Weak continuation agrees with smooth periodic evolution
- `post-fd-no-slip-newtonian` · postulate — Bounded no-slip Newtonian vessel model
- `pthm-fd-bounded-weak-continuation` · physics-theorem — Global weak velocity in the no-slip vessel model
- `pthm-fd-rectangular-weak-pressure` · physics-theorem — Weak rectangular Newtonian velocity and pressure

### `fd-w02-examples` — Periodic incompressible Newtonian idealization — Examples (1 item(s))

- `rem-fd-thermal-coupling` · remark — Thermal balance requires an additional coupling

### `fd-k02` — Single-species elastic Boltzmann model (7 item(s))

- `post-fd-boltzmann-model` · postulate — Single-species elastic Boltzmann model
- `def-fd-physical-kinetic-observables` · definition — Kinetic number, mass and thermal observables
- `pthm-fd-local-boltzmann-h-balance` · physics-theorem — Local kinetic H balance for the elastic Boltzmann model
- `pthm-fd-boltzmann-entropy` · physics-theorem — Entropy production in the adopted collision model
- `pthm-fd-ideal-gas-euler-interface` · physics-theorem — Conditional ideal-gas Euler kinetic interface
- `post-fd-bgk-relaxation` · postulate — Conserving homogeneous BGK idealization
- `pthm-fd-bgk-equilibration` · physics-theorem — Exact equilibrium approach in the BGK model

### `fd-k02-examples` — Single-species elastic Boltzmann model — Examples (1 item(s))

- `texp-fd-bgk-preparation` · thought-experiment — Prepared non-Maxwellian distribution and initial layer

## Your seams

Your pages depend on another group's:

- `fd-ps02` requires `fd-f02` (group a, batch 9)
- `fd-ps02` requires `fd-f03` (group b, batch 11)
- `fd-ps02` requires `fd-s03` (group k, batch 19)
- `fd-w02` requires `fd-f01` (group a, batch 3)
- `fd-w02` requires `fd-w01` (group k, batch 22)
- `fd-k02` requires `fd-k01` (group l, batch 25)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/fluid-dynamics-all-47-2026-10-23-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `fluid-dynamics-all-47-2026-10-23`

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
