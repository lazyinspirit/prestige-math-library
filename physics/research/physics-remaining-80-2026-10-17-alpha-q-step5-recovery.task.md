# Step 5 adjudication — group **q**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 49, 54, 58: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/physics-remaining-80-2026-10-17-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/physics-remaining-80-2026-10-17-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **58**: `research/physics-remaining-80-2026-10-17-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 49 | `qsm-dt-relaxation` | A | quantum-statistical-mechanics | 595 | `csm-stochastic-response`, `qsm-dt-channels` |
| 49 | `qsm-dt-relaxation-examples` | B | quantum-statistical-mechanics | 596 | `qsm-dt-relaxation` |
| 54 | `tgr-i01` | A | thermodynamics-and-general-relativity | 605 | `tgr-mc01`, `tgr-mi03`, `sr-observer-measurements` |
| 54 | `tgr-i01-examples` | B | thermodynamics-and-general-relativity | 606 | `tgr-i01` |
| 58 | `tgr-c01` | A | thermodynamics-and-general-relativity | 613 | `tgr-i01`, `tgr-mc02` |
| 58 | `tgr-c01-examples` | B | thermodynamics-and-general-relativity | 614 | `tgr-c01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qsm-dt-relaxation` — Specified finite GNS detailed balance (11 item(s))

- `def-qsm-dt-gns-detailed-balance` · definition — Specified finite GNS detailed balance
- `thm-qsm-dt-detailed-balance-gap` · theorem — Faithful scalar-kernel detailed balance gives a relaxation gap
- `thm-qsm-dt-gibbs-jump` · theorem — Connected Gibbs jump generators satisfy detailed balance
- `def-qsm-dt-monitored-chain` · definition — Specified energy-jump instrument realizes a finite chain
- `thm-qsm-dt-commuting-kl` · theorem — Gibbs jump commuting relative entropy production
- `thm-qsm-dt-open-correlation-integral` · theorem — Gap-controlled correlation resolvent and positive coefficients
- `thm-qsm-dt-open-kubo` · theorem — Fixed-dissipator finite response and integrable kernel
- `post-qsm-dt-effective-bath` · postulate — Specified effective GKSL bath and instrument assumption
- `thm-qsm-dt-monitored-transport` · theorem — Stationary monitored-chain transport variance coefficient
- `pthm-qsm-dt-bath-relaxation` · physics-theorem — Conditional specified thermal bath relaxation
- `pthm-qsm-dt-record-transport` · physics-theorem — Conditional instrument-record diffusion coefficient

### `qsm-dt-relaxation-examples` — Specified finite GNS detailed balance — Examples (2 item(s))

- `ex-qsm-dt-thermal-qubit` · example — Solved Gibbs qubit relaxation and finite response coefficients
- `ex-qsm-dt-qubit-record-diffusion` · example — Exact centered qubit-record displacement variance

### `tgr-i01` — Thermodynamics-GR fields, currents, reference normalization and units (4 item(s))

- `def-tgr-framework-units` · definition — Thermodynamics-GR fields, currents, reference normalization and units
- `post-tgr-local-material-thermodynamics` · postulate — Restricted local equilibrium parcel with adopted material state function
- `post-tgr-local-entropy-admissibility` · postulate — Local entropy-current admissibility in a separately defined model
- `pthm-tgr-finite-entropy-balance` · physics-theorem — Conditional finite entropy balance with explicit boundary flux

### `tgr-i01-examples` — Thermodynamics-GR fields, currents, reference normalization and units — Examples (1 item(s))

- `texp-tgr-insulated-entropy-region` · thought-experiment — Entropy-impermeable finite-slab prediction

### `tgr-c01` — Smooth perfect local material balance model (3 item(s))

- `post-tgr-perfect-fluid-model` · postulate — Smooth perfect local material balance model
- `pthm-tgr-local-first-law` · physics-theorem — Local Gibbs and parcel first law in the adopted material
- `pthm-tgr-perfect-entropy-circulation` · physics-theorem — Perfect entropy advection and restricted circulation

### `tgr-c01-examples` — Smooth perfect local material balance model — Examples (1 item(s))

- `ex-tgr-uniform-perfect-background` · example — Uniform prescribed-background perfect material

## Your seams

Your pages depend on another group's:

- `qsm-dt-relaxation` requires `csm-stochastic-response` (group c, batch 33)
- `qsm-dt-relaxation` requires `qsm-dt-channels` (group p, batch 48)
- `tgr-i01` requires `tgr-mc01` (group w, batch 53)
- `tgr-i01` requires `tgr-mi03` (group v, batch 52)
- `tgr-c01` requires `tgr-mc02` (group w, batch 55)

Another group's pages depend on yours:

- `tgr-c02` (group r) requires your `tgr-i01`
- `tgr-c03` (group r) requires your `tgr-c01`
- `tgr-c04` (group r) requires your `tgr-i01`
- `tgr-pet01` (group s) requires your `tgr-i01`
- `tgr-g01` (group t) requires your `tgr-i01`
- `tgr-phs01` (group t) requires your `tgr-i01`

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
