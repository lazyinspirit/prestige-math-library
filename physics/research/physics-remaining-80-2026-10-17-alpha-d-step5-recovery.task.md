# Step 5 adjudication — group **d**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 1, 5, 35: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/physics-remaining-80-2026-10-17-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/physics-remaining-80-2026-10-17-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/physics-remaining-80-2026-10-17-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-remaining-80-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `emg-g01` | A | einstein-maxwell-models | 437 | `emg-mg01`, `em-primitives-and-postulates`, `em-lorentz-covariant-formulation` |
| 1 | `emg-g01-examples` | B | einstein-maxwell-models | 438 | `emg-g01` |
| 5 | `emg-g04` | A | einstein-maxwell-models | 445 | `emg-g01`, `emg-mg04`, `rpm-external-charge`, `em-action-and-variational-formulation` |
| 5 | `emg-g04-examples` | B | einstein-maxwell-models | 446 | `emg-g04` |
| 35 | `csm-fluctuations-countermodels` | A | classical-statistical-mechanics | 505 | `csm-exact-models`, `finite-probability-and-the-probabilistic-method`, `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` |
| 35 | `csm-fluctuations-countermodels-examples` | B | classical-statistical-mechanics | 506 | `csm-fluctuations-countermodels` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emg-g01` — Einstein–Maxwell primitive quantities and SI conventions (3 item(s))

- `def-emg-geometry-units` · definition — Einstein–Maxwell primitive quantities and SI conventions
- `post-emg-covariant-maxwell` · postulate — Smooth curved vacuum Maxwell constitutive adoption
- `pthm-emg-flat-electromagnetic-compatibility` · physics-theorem — Flat electromagnetic conventions agree with the published Maxwell model

### `emg-g01-examples` — Einstein–Maxwell primitive quantities and SI conventions — Examples (1 item(s))

- `ex-emg-observer-static-field` · example — Prescribed constant observer fields

### `emg-g04` — Independent equation-based Einstein–Maxwell coupling (9 item(s))

- `post-emg-einstein-maxwell-equations` · postulate — Equation-based Einstein–Maxwell model
- `post-emg-selected-matter-action` · postulate — Selected invariant matter-action contract
- `post-emg-einstein-maxwell-action` · postulate — Interior stationary Einstein–Maxwell–matter action
- `pthm-emg-action-field-equations` · physics-theorem — Einstein–Maxwell equations from compact action stationarity
- `pthm-emg-total-matter-field-exchange` · physics-theorem — Electromagnetic and matter stress exchange
- `def-emg-charged-dust-model` · definition — Restricted smooth charged-dust model
- `pthm-emg-charged-dust-balance` · physics-theorem — Charged-dust current and stress balance
- `def-emg-classical-charged-scalar-model` · definition — Specified classical charged complex-scalar model
- `pthm-emg-charged-scalar-coupling` · physics-theorem — Field equations and balances of the selected scalar coupling

### `emg-g04-examples` — Independent equation-based Einstein–Maxwell coupling — Examples (2 item(s))

- `ex-emg-classical-scalar-background-limits` · example — Background scalar wave versus coupled source equations
- `cex-emg-flat-nonzero-field-coupling` · counterexample — A flat Maxwell field need not solve the coupled Einstein equations

### `csm-fluctuations-countermodels` — Finite Bernoulli fluctuations and matching exponential rates (4 item(s))

- `def-csm-finite-variance` · definition — Variance of a finite real random variable
- `pthm-csm-bernoulli-fluctuation-bounds` · physics-theorem — Finite Bernoulli fluctuations and matching exponential rates
- `pthm-csm-nonadditive-phase-countermodel` · physics-theorem — Explicit nonadditive transition and ensemble inequivalence
- `pthm-csm-walk-recurrence-and-entropy` · physics-theorem — Diffusion-scale walk and recurrence/coarse-entropy counterexamples

### `csm-fluctuations-countermodels-examples` — Finite Bernoulli fluctuations and matching exponential rates — Examples (3 item(s))

- `ex-csm-bernoulli-fluctuation-bounds` · example — A finite Bernoulli model at n=100 and p=1/4
- `ex-csm-nonadditive-phase-countermodel` · example — The middle sector at N=4 and the transition point
- `ex-csm-walk-recurrence-and-entropy` · example — A diffusive time step and a four-state entropy reversal

## Your seams

Your pages depend on another group's:

- `emg-g04` requires `emg-mg04` (group i, batch 4)
- `csm-fluctuations-countermodels` requires `csm-exact-models` (group c, batch 34)

Another group's pages depend on yours:

- `emg-pcp02` (group e) requires your `emg-g04`
- `emg-pcp01` (group e) requires your `emg-g04`
- `emg-pcp03` (group e) requires your `emg-g04`
- `emg-g02` (group f) requires your `emg-g01`
- `emg-mp01` (group f) requires your `emg-g04`
- `emg-s01` (group g) requires your `emg-g04`
- `qsm-interacting-exact-models` (group p) requires your `csm-fluctuations-countermodels`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-remaining-80-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-remaining-80-2026-10-17`

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
