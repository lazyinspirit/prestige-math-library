# Step 5 adjudication — group **b**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 11, 12, 13: 3 A/B pair(s), 6 page(s), 27 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **11**: `research/fluid-dynamics-all-47-2026-10-23-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/fluid-dynamics-all-47-2026-10-23-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **13**: `research/fluid-dynamics-all-47-2026-10-23-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 11 | `fd-f03` | A | fluid-dynamics | 381 | `fd-f01`, `fd-mf03` |
| 11 | `fd-f03-examples` | B | fluid-dynamics | 382 | `fd-f03` |
| 12 | `fd-px01` | A | fluid-dynamics | 383 | `fd-f02`, `fd-f03`, `fd-x01` |
| 12 | `fd-px01-examples` | B | fluid-dynamics | 384 | `fd-px01` |
| 13 | `fd-px02` | A | fluid-dynamics | 385 | `fd-f02`, `fd-f03`, `fd-x02` |
| 13 | `fd-px02-examples` | B | fluid-dynamics | 386 | `fd-px02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-f03` — Newtonian stress and Fourier conductive closure (8 item(s))

- `post-fd-newtonian-fourier` · postulate — Newtonian stress and Fourier conductive closure
- `def-fd-barotropic-euler-model` · definition — Smooth positive-density barotropic Euler model
- `def-fd-incompressible-newtonian-model` · definition — Constant-density incompressible Newtonian model
- `post-fd-local-equilibrium` · postulate — Local simple-fluid equilibrium and Gibbs closure
- `pthm-fd-entropy-production` · physics-theorem — Continuum entropy residual and Newtonian admissibility
- `pthm-fd-acoustic-linearization` · physics-theorem — Positive-response linear sound in adopted barotropic fluid
- `pthm-fd-perfect-gas-temperature` · physics-theorem — Perfect-gas entropy, isentropic law and temperature balance
- `pthm-fd-newtonian-kinetic-decay` · physics-theorem — Closed smooth incompressible kinetic-energy dissipation

### `fd-f03-examples` — Newtonian stress and Fourier conductive closure — Examples (2 item(s))

- `cex-fd-negative-bulk-viscosity` · counterexample — Negative bulk viscosity violates entropy admissibility
- `cex-fd-negative-response-acoustics` · counterexample — Negative acoustic response yields exponential mode growth

### `fd-px01` — Exact Reynolds and Mach nondimensionalization — conditional physical prediction (1 item(s))

- `pthm-fd-px01-prediction` · physics-theorem — Exact Reynolds and Mach nondimensionalization — conditional physical prediction

### `fd-px01-examples` — Exact Reynolds and Mach nondimensionalization — conditional physical prediction — Examples (1 item(s))

- `ex-fd-x01-application` · example — Exact Reynolds and Mach nondimensionalization — worked interpretation

### `fd-px02` — Exact viscous and inviscid flows — conditional physical predictions (9 item(s))

- `pthm-fd-px04-prediction` · physics-theorem — Plane and pipe Couette–Poiseuille verification — conditional physical prediction
- `def-fd-incompressible-euler-model` · definition — Incompressible inviscid Euler model with pressure multiplier
- `pthm-fd-px05-prediction` · physics-theorem — Vortex topology and global-Bernoulli counterexamples — conditional physical prediction
- `post-fd-creeping-force-balance` · postulate — Alternative restricted creeping-flow force balance
- `def-fd-creeping-stokes-model` · definition — Restricted incompressible creeping-flow Stokes model
- `pthm-fd-px06-prediction` · physics-theorem — Exterior sphere Stokes solution, force and decay-class uniqueness — conditional physical prediction
- `pthm-fd-px08-prediction` · physics-theorem — Exact viscous diffusion layer and material-circulation decay — conditional physical prediction
- `pthm-fd-px09-prediction` · physics-theorem — Barotropic Kelvin and Bernoulli with exact hypotheses — conditional physical prediction
- `pthm-fd-px13-prediction` · physics-theorem — Exterior potential sphere and zero ideal force — conditional physical prediction

### `fd-px02-examples` — Exact viscous and inviscid flows — worked examples (6 item(s))

- `ex-fd-x04-application` · example — Plane and pipe Couette–Poiseuille verification — worked interpretation
- `ex-fd-x05-application` · example — Vortex topology and global-Bernoulli counterexamples — worked interpretation
- `ex-fd-x06-application` · example — Exterior sphere Stokes solution, force and decay-class uniqueness — worked interpretation
- `ex-fd-x08-application` · example — Exact viscous diffusion layer and material-circulation decay — worked interpretation
- `ex-fd-x09-application` · example — Barotropic Kelvin and Bernoulli with exact hypotheses — worked interpretation
- `ex-fd-x13-application` · example — Exterior potential sphere and zero ideal force — worked interpretation

## Your seams

Your pages depend on another group's:

- `fd-f03` requires `fd-f01` (group a, batch 3)
- `fd-f03` requires `fd-mf03` (group i, batch 10)
- `fd-px01` requires `fd-f02` (group a, batch 9)
- `fd-px01` requires `fd-x01` (group h, batch 5)
- `fd-px02` requires `fd-f02` (group a, batch 9)
- `fd-px02` requires `fd-x02` (group h, batch 6)

Another group's pages depend on yours:

- `fd-px03` (group c) requires your `fd-px02`
- `fd-ps01` (group c) requires your `fd-f03`
- `fd-ps02` (group d) requires your `fd-f03`
- `fd-pn01` (group e) requires your `fd-f03`
- `fd-pn01` (group e) requires your `fd-px02`
- `fd-pn02` (group e) requires your `fd-f03`
- `fd-ples01` (group f) requires your `fd-f03`

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

# Step 5 batch adjudication, `fluid-dynamics-all-47-2026-10-23`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
