# Step 5 adjudication — group **g**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 38, 39, 40: 3 A/B pair(s), 6 page(s), 14 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **38**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **40**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 38 | `qftx-two-group-symmetry-backgrounds` | A | advanced-qft-and-supersymmetry | 994 | `qftx-p-form-symmetries`, `qftx-two-group-cochains`, `qftx-defects-and-topological-operators` |
| 38 | `qftx-two-group-symmetry-backgrounds-examples` | B | advanced-qft-and-supersymmetry | 994 | `qftx-two-group-symmetry-backgrounds`, `qftx-two-group-cochains` |
| 39 | `qftx-noninvertible-symmetries` | A | advanced-qft-and-supersymmetry | 995 | `qftx-defects-and-topological-operators`, `qftx-defect-fusion-mathematics`, `monoidal-categories-and-monoidal-functors` |
| 39 | `qftx-noninvertible-symmetries-examples` | B | advanced-qft-and-supersymmetry | 995 | `qftx-noninvertible-symmetries`, `qftx-defect-fusion-mathematics` |
| 40 | `qftx-finite-symmetry-gauging-physics` | A | advanced-qft-and-supersymmetry | 996 | `qftx-two-group-symmetry-backgrounds`, `qftx-finite-symmetry-gauging` |
| 40 | `qftx-finite-symmetry-gauging-physics-examples` | B | advanced-qft-and-supersymmetry | 996 | `qftx-finite-symmetry-gauging-physics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-two-group-symmetry-backgrounds` — 2-Group Symmetry Backgrounds in Physical Models (2 item(s))

- `def-aqft-two-group-symmetry-realization` · definition — Finite 2-group symmetry realization and background coupling
- `pthm-aqft-two-group-background-coupling` · physics-theorem — Finite 2-group background coupling variation

### `qftx-two-group-symmetry-backgrounds-examples` — 2-Group Symmetry Backgrounds in Physical Models — Examples (2 item(s))

- `ex-aqft-two-group-split-background-coupling` · example — A split 2-group background with a 1-form gauge shift
- `ex-aqft-two-group-nonzero-postnikov-unit-response` · example — Nonzero Postnikov class with unit background response

### `qftx-noninvertible-symmetries` — Non-Invertible Symmetry Operators and Fusion (3 item(s))

- `def-aqft-ising-fusion-data` · definition — Skeletal Ising fusion-data package
- `lem-aqft-ising-fusion-data-coherence` · lemma — Coherence of the Ising fusion data
- `pthm-aqft-noninvertible-defect-realization` · physics-theorem — Finite-lattice realization of the Ising non-invertible defect

### `qftx-noninvertible-symmetries-examples` — Non-Invertible Symmetry Operators and Fusion — Examples (2 item(s))

- `ex-aqft-ising-fusion-object-noninvertible` · example — The Ising fusion object is simple and non-invertible
- `ex-aqft-ising-chain-three-site-noninvertible-defect` · example — A non-invertible defect on a three-site Ising ring

### `qftx-finite-symmetry-gauging-physics` — Finite Symmetry Gauging as a Specified Model (3 item(s))

- `def-aqft-finite-two-group-state-sum` · definition — Finite two-group lattice spin state-sum model
- `post-aqft-finite-gauging-model` · postulate — Adopted finite two-group gauging model
- `pthm-aqft-finite-gauging-gluing` · physics-theorem — Gauge invariance and gluing in the finite symmetry model

### `qftx-finite-symmetry-gauging-physics-examples` — Finite Symmetry Gauging as a Specified Model — Examples (2 item(s))

- `ex-aqft-finite-two-group-point-normalization` · example — Point normalization in the finite symmetry model
- `ex-aqft-finite-two-group-interval-gluing` · example — Interval sewing with the finite gauge-volume factor

## Your seams

Your pages depend on another group's:

- `qftx-two-group-symmetry-backgrounds` requires `qftx-p-form-symmetries` (group f, batch 37)
- `qftx-two-group-symmetry-backgrounds` requires `qftx-two-group-cochains` (group q, batch 13)
- `qftx-two-group-symmetry-backgrounds` requires `qftx-defects-and-topological-operators` (group f, batch 36)
- `qftx-two-group-symmetry-backgrounds-examples` requires `qftx-two-group-cochains` (group q, batch 13)
- `qftx-noninvertible-symmetries` requires `qftx-defects-and-topological-operators` (group f, batch 36)
- `qftx-noninvertible-symmetries` requires `qftx-defect-fusion-mathematics` (group q, batch 15)
- `qftx-noninvertible-symmetries-examples` requires `qftx-defect-fusion-mathematics` (group q, batch 15)
- `qftx-finite-symmetry-gauging-physics` requires `qftx-finite-symmetry-gauging` (group q, batch 14)

Another group's pages depend on yours:

- `qftx-anomaly-matching-and-frontier` (group h) requires your `qftx-noninvertible-symmetries`

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
