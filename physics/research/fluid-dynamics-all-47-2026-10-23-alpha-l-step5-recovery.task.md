# Step 5 adjudication — group **l**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 25, 27, 28: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **25**: `research/fluid-dynamics-all-47-2026-10-23-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/fluid-dynamics-all-47-2026-10-23-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **28**: `research/fluid-dynamics-all-47-2026-10-23-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 25 | `fd-k01` | A | fluid-dynamics-mathematics | 409 | `product-measures-and-the-fubini-tonelli-theorems`, `td-math-mixture-dynamics-and-shells`, `smooth-partitions-of-unity-and-exhaustions` |
| 25 | `fd-k01-examples` | B | fluid-dynamics-mathematics | 410 | `fd-k01` |
| 27 | `fd-n01` | A | fluid-dynamics-mathematics | 659 | `mixed-finite-elements-and-stokes-stability`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 27 | `fd-n01-examples` | B | fluid-dynamics-mathematics | 660 | `fd-n01`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 28 | `fd-n02` | A | fluid-dynamics-mathematics | 661 | `energy-stable-incompressible-navier-stokes-discretization`, `countability-and-uncountability`, `mixed-finite-elements-and-stokes-stability`, `relations-functions-and-quotients` |
| 28 | `fd-n02-examples` | B | fluid-dynamics-mathematics | 662 | `fd-n02`, `countability-and-uncountability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-k01` — Nonnegative kinetic density and moment domain (10 item(s))

- `def-fd-kinetic-density` · definition — Nonnegative kinetic density and moment domain
- `def-fd-elastic-collision-measure` · definition — Elastic collision measure and weak collision operator
- `prop-fd-kinetic-moment-balances` · proposition — Exact unclosed kinetic conservation laws
- `thm-fd-kinetic-h` · theorem — Conditional periodic kinetic H theorem
- `thm-fd-collision-maxwellian` · theorem — Full-support collision equilibrium has Maxwellian form
- `prop-fd-maxwellian-moments` · proposition — Gaussian Maxwellian normalization, stress, and heat flux
- `thm-fd-controlled-euler-passage` · theorem — Euler equations under weighted local-equilibrium convergence
- `def-fd-conserving-bgk` · definition — Single-species BGK relaxation operator
- `thm-fd-homogeneous-bgk-limit` · theorem — Exact homogeneous BGK fast relaxation
- `prop-fd-bgk-entropy-rate` · proposition — Exponential reference-relative entropy bound for homogeneous BGK

### `fd-k01-examples` — Nonnegative kinetic density and moment domain — Examples (3 item(s))

- `cex-fd-collision-support` · counterexample — Restricted collision support need not force Maxwellians
- `ex-fd-bgk-initial-layer` · example — Non-equilibrium BGK data create an initial layer
- `rem-fd-kinetic-limit-status` · remark — Scope of the kinetic-to-fluid limit results

### `fd-n01` — Lipschitz Stokes pressure and bounded sensors (3 item(s))

- `def-fd-bounded-stokes-observation-interface` · definition — Bounded Stokes pressure sensors
- `thm-fd-stokes-load-observable-stability` · theorem — Lipschitz stability of bounded Stokes pressure observations
- `prop-fd-pressure-gauge-observables` · proposition — Gauge-invariant pressure sensor weights

### `fd-n01-examples` — Lipschitz Stokes pressure and bounded sensors — Examples (1 item(s))

- `ex-fd-stokes-gradient-forcing-gauge` · example — A gradient load observed through Stokes pressure

### `fd-n02` — Incompressible numerical observable and pressure errors (4 item(s))

- `def-fd-mini-fluid-interface` · definition — Smooth MINI observation interface
- `prop-fd-mini-observation-error` · proposition — Bounded velocity-observation error for the smooth MINI branch
- `prop-fd-mini-accumulated-pressure-observation` · proposition — Accumulated pressure-observation error for the smooth MINI branch
- `rem-fd-mini-weak-velocity-scope` · remark — Weak velocity limits do not supply the smooth pressure-observation estimate

### `fd-n02-examples` — Incompressible numerical observable and pressure errors — Examples (1 item(s))

- `ex-fd-mini-pressure-time-test` · example — A mean-zero square pressure time test

## Your seams

Another group's pages depend on yours:

- `fd-k02` (group d) requires your `fd-k01`
- `fd-pn01` (group e) requires your `fd-n01`
- `fd-pn01` (group e) requires your `fd-n02`

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
