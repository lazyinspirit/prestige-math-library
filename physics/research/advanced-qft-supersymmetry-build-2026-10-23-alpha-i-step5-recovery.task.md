# Step 5 adjudication — group **i**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 44, 45, 46: 3 A/B pair(s), 6 page(s), 14 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **44**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **46**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/advanced-qft-supersymmetry-build-2026-10-23-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 44 | `aqft-eft-anomalies` | A | advanced-qft-and-supersymmetry | 1000 | `aqft-smeft-heft`, `qftx-thooft-anomalies`, `qftx-global-anomalies-inflow` |
| 44 | `aqft-eft-anomalies-examples` | B | advanced-qft-and-supersymmetry | 1000 | `aqft-eft-anomalies` |
| 45 | `aqft-susy-effective-theories` | A | advanced-qft-and-supersymmetry | 1001 | `qftx-susy-ward-and-nonrenormalization`, `qftx-susy-extended-actions`, `aqft-eft-matching-running`, `qftx-susy-n1-superspace-and-actions`, `aqft-eft-operators`, `qftx-eft-operator-quotients`, `relations-functions-and-quotients`, `aqft-susy-math-foundations` |
| 45 | `aqft-susy-effective-theories-examples` | B | advanced-qft-and-supersymmetry | 1001 | `aqft-susy-effective-theories`, `aqft-susy-math-foundations`, `relations-functions-and-quotients` |
| 46 | `aqft-eft-experimental-inference` | A | advanced-qft-and-supersymmetry | 1002 | `aqft-eft-matching-running`, `aqft-smeft-heft`, `aqft-eft-amplitudes`, `qftx-susy-breaking-and-phenomenology`, `cm-math-evidence`, `limsup-and-subsequential-limits`, `sigma-algebras-and-borel-sets`, `measures-and-their-basic-properties` |
| 46 | `aqft-eft-experimental-inference-examples` | B | advanced-qft-and-supersymmetry | 1002 | `aqft-eft-experimental-inference`, `cm-math-evidence`, `aqft-smeft-heft`, `sr-energy-momentum` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `aqft-eft-anomalies` — Heavy-Chiral Threshold and Anomaly EFT (2 item(s))

- `def-aqft-heavy-chiral-u1-threshold-data` · definition — Heavy chiral U(1)_V threshold model data
- `pthm-aqft-heavy-chiral-threshold-wess-zumino-match` · physics-theorem — Heavy-chiral threshold Wess–Zumino anomaly match

### `aqft-eft-anomalies-examples` — Heavy-Chiral Threshold and Anomaly EFT — Examples (1 item(s))

- `ex-aqft-heavy-fermion-anomaly-threshold` · example — Compactly supported background with a nonzero heavy-fermion anomaly variation

### `aqft-susy-effective-theories` — Supersymmetric EFT Operators and Thresholds (3 item(s))

- `def-aqft-susy-wilsonian-action` · definition — Supersymmetric Wilsonian EFT action and threshold data
- `pthm-aqft-wilsonian-superpotential-nonrenormalization` · physics-theorem — Wilsonian Superpotential Nonrenormalization in a Finite Supersymmetric EFT Basis
- `pthm-aqft-supersymmetric-threshold-matching` · physics-theorem — Leading Wilsonian Superpotential Match at a Supersymmetric Chiral Threshold

### `aqft-susy-effective-theories-examples` — Supersymmetric EFT Operators and Thresholds — Examples (1 item(s))

- `ex-aqft-soft-breaking-effective-operator` · example — Heavy-Chiral Threshold and a Spurion Soft Trilinear

### `aqft-eft-experimental-inference` — EFT Measurements, Global Fits and Search Likelihoods (3 item(s))

- `def-aqft-profile-likelihood-ratio` · definition — Profile likelihood ratios with nuisance parameters
- `def-aqft-calibrated-pvalue` · definition — Upper-tail p-values under an explicit null calibration
- `def-aqft-cls-exclusion-ratio` · definition — CLs ratio for source-specified signal exclusions

### `aqft-eft-experimental-inference-examples` — EFT Measurements, Global Fits and Search Likelihoods — Examples (4 item(s))

- `exp-aqft-atlas-global-smeft-fit-2026` · experiment — ATLAS global dimension-six SMEFT fit
- `exp-aqft-cms-global-smeft-fit-2026` · experiment — CMS global dimension-six SMEFT fit
- `exp-aqft-cms-multiboson-smeft-2026` · experiment — CMS multiboson dimension-six SMEFT combination
- `exp-aqft-atlas-tau-squark-gluino-search-2025` · experiment — ATLAS tau, jets, and missing-momentum squark and gluino search

## Your seams

Your pages depend on another group's:

- `aqft-eft-anomalies` requires `aqft-smeft-heft` (group c, batch 27)
- `aqft-eft-anomalies` requires `qftx-thooft-anomalies` (group h, batch 41)
- `aqft-eft-anomalies` requires `qftx-global-anomalies-inflow` (group h, batch 42)
- `aqft-susy-effective-theories` requires `qftx-susy-ward-and-nonrenormalization` (group e, batch 32)
- `aqft-susy-effective-theories` requires `qftx-susy-extended-actions` (group d, batch 31)
- `aqft-susy-effective-theories` requires `aqft-eft-matching-running` (group c, batch 26)
- `aqft-susy-effective-theories` requires `qftx-susy-n1-superspace-and-actions` (group d, batch 30)
- `aqft-susy-effective-theories` requires `aqft-eft-operators` (group b, batch 25)
- `aqft-susy-effective-theories` requires `qftx-eft-operator-quotients` (group r, batch 16)
- `aqft-susy-effective-theories` requires `aqft-susy-math-foundations` (group m, batch 1)
- `aqft-susy-effective-theories-examples` requires `aqft-susy-math-foundations` (group m, batch 1)
- `aqft-eft-experimental-inference` requires `aqft-eft-matching-running` (group c, batch 26)
- `aqft-eft-experimental-inference` requires `aqft-smeft-heft` (group c, batch 27)
- `aqft-eft-experimental-inference` requires `aqft-eft-amplitudes` (group c, batch 28)
- `aqft-eft-experimental-inference` requires `qftx-susy-breaking-and-phenomenology` (group e, batch 34)
- `aqft-eft-experimental-inference-examples` requires `aqft-smeft-heft` (group c, batch 27)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/advanced-qft-supersymmetry-build-2026-10-23-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `advanced-qft-supersymmetry-build-2026-10-23`

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
