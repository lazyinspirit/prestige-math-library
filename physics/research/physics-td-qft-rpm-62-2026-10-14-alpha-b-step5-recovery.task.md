# Step 5 adjudication — group **b**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 49, 51, 52: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/physics-td-qft-rpm-62-2026-10-14-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/physics-td-qft-rpm-62-2026-10-14-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **52**: `research/physics-td-qft-rpm-62-2026-10-14-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 49 | `qft-x01` | A | quantum-field-theory | 537 | `qft-c01`, `qft-mx01` |
| 49 | `qft-x01-examples` | B | quantum-field-theory | 538 | `qft-x01` |
| 51 | `qft-f01` | A | quantum-field-theory | 541 | `qft-c01`, `qft-mf04` |
| 51 | `qft-f01-examples` | B | quantum-field-theory | 542 | `qft-f01` |
| 52 | `qft-g01` | A | quantum-field-theory | 543 | `qft-f01`, `qft-mg01`, `em-primitives-and-postulates`, `em-potentials-and-gauge` |
| 52 | `qft-g01-examples` | B | quantum-field-theory | 544 | `qft-g01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qft-x01` — Example observable types and scoped meanings (2 item(s))

- `def-qft-example-observable-types` · definition — Example observable types and scoped meanings
- `pthm-qft-example-regulated-probability-control` · physics-theorem — Exact regulated transition probabilities and controlled coefficients

### `qft-x01-examples` — Example observable types and scoped meanings — Examples (2 item(s))

- `ex-qft-x01` · example — Exact two-level transition versus its first coefficient
- `ex-qft-x03` · example — One-mode time-ordered correlator versus retarded response

### `qft-f01` — Specified bosonic scalar and CAR Dirac model adoption (3 item(s))

- `post-qft-free-field-model` · postulate — Specified bosonic scalar and CAR Dirac model adoption
- `def-qft-free-field-observables` · definition — Specified free state and observable interpretation
- `pthm-qft-free-fock-statistics` · physics-theorem — CCR/CAR and particle occupations in adopted free models

### `qft-f01-examples` — Specified bosonic scalar and CAR Dirac model adoption — Examples (1 item(s))

- `ex-qft-mode-occupations` · example — Boson occupation ladder and fermion one-mode exclusion

### `qft-g01` — Positive transverse free photon model (7 item(s))

- `def-qft-qed-physical-gauge-quantities` · definition — Charge, canonical photon field and observer units
- `post-qft-free-photon-model` · postulate — Positive transverse free photon model
- `post-qft-qed-local-coupling` · postulate — Explicit charged Dirac/Maxwell local coupling model
- `pthm-qft-photon-physical-properties` · physics-theorem — Two physical photon degrees and positive free dynamics
- `pthm-qft-photon-local-observables` · physics-theorem — Local covariant free field-strength and Weyl observables
- `pthm-qft-qed-classical-coupling` · physics-theorem — Conditional classical charged gauge equations and current
- `pthm-qft-qed-coulomb-constraints` · physics-theorem — Periodic neutral classical Coulomb constraint model

### `qft-g01-examples` — Positive transverse free photon model — Examples (2 item(s))

- `texp-qft-photon-auxiliary-comparison` · thought-experiment — Auxiliary negative vector versus physical quotient
- `texp-qft-qed-neutral-cell` · thought-experiment — Hypothetical charged periodic cell violates smooth Gauss

## Your seams

Your pages depend on another group's:

- `qft-x01` requires `qft-c01` (group a, batch 40)
- `qft-x01` requires `qft-mx01` (group g, batch 41)
- `qft-f01` requires `qft-c01` (group a, batch 40)
- `qft-f01` requires `qft-mf04` (group h, batch 43)
- `qft-g01` requires `qft-mg01` (group h, batch 44)

Another group's pages depend on yours:

- `qft-g02` (group c) requires your `qft-g01`
- `qft-x02` (group c) requires your `qft-x01`
- `qft-x03` (group c) requires your `qft-g01`
- `qft-x03` (group c) requires your `qft-x01`
- `qft-f02` (group d) requires your `qft-f01`
- `qft-f03` (group d) requires your `qft-f01`
- `qft-f04` (group d) requires your `qft-f01`

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

# Historical Step-5 closure recovery, `physics-td-qft-rpm-62-2026-10-14`

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
