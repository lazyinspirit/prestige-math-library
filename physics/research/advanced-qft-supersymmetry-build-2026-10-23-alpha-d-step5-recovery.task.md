# Step 5 adjudication — group **d**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 29, 30, 31: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **29**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 29 | `qftx-susy-algebra-and-multiplets` | A | advanced-qft-and-supersymmetry | 985 | `aqft-susy-math-foundations`, `countability-and-uncountability` |
| 29 | `qftx-susy-algebra-and-multiplets-examples` | B | advanced-qft-and-supersymmetry | 985 | `qftx-susy-algebra-and-multiplets`, `aqft-susy-math-foundations`, `countability-and-uncountability` |
| 30 | `qftx-susy-n1-superspace-and-actions` | A | advanced-qft-and-supersymmetry | 986 | `qftx-susy-algebra-and-multiplets`, `qftx-nonabelian-yang-mills-model`, `aqft-susy-math-foundations`, `field-extensions-and-the-complex-numbers`, `qftx-gauge-geometry` |
| 30 | `qftx-susy-n1-superspace-and-actions-examples` | B | advanced-qft-and-supersymmetry | 986 | `qftx-susy-n1-superspace-and-actions`, `qftx-gauge-geometry`, `qftx-nonabelian-yang-mills-model` |
| 31 | `qftx-susy-extended-actions` | A | advanced-qft-and-supersymmetry | 987 | `qftx-susy-n1-superspace-and-actions`, `qftx-nonabelian-yang-mills-model`, `aqft-susy-math-foundations` |
| 31 | `qftx-susy-extended-actions-examples` | B | advanced-qft-and-supersymmetry | 987 | `qftx-susy-extended-actions`, `qftx-susy-n1-superspace-and-actions`, `qftx-nonabelian-yang-mills-model` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-susy-algebra-and-multiplets` — Physical BPS Sectors and Multiplet Interpretation (2 item(s))

- `pthm-qftx-n2-bps-saturation-kernel-equivalence` · physics-theorem — N=2 central-charge saturation is equivalent to annihilation by the null supercharge pair
- `def-qftx-bps-state-and-saturation` · definition — BPS state and central-charge saturation

### `qftx-susy-algebra-and-multiplets-examples` — Physical BPS Sectors and Multiplet Interpretation — Examples (2 item(s))

- `ex-qftx-n2-short-rest-fiber-algebra` · example — Finite N=2 rest-fiber algebra at central-charge saturation
- `ex-qftx-n2-long-rest-fiber-algebra` · example — Finite N=2 rest-fiber algebra with zero central charge and strict bound

### `qftx-susy-n1-superspace-and-actions` — N=1 Superspace and Wess–Zumino/Gauge-Matter Actions (8 item(s))

- `def-qftx-physical-superspace-normalization` · definition — Physical superspace action brackets and canonical chiral components
- `def-qftx-n1-kahler-target-data` · definition — Kähler coordinate-patch data for a rigid N=1 chiral model
- `post-qftx-n1-wess-zumino-model` · postulate — Rigid four-dimensional N=1 Wess–Zumino sigma-model action
- `def-qftx-n1-vector-superfield` · definition — Four-dimensional N=1 non-Abelian vector superfield in connection normalization
- `pthm-qftx-n1-wess-zumino-off-shell-invariance` · physics-theorem — Off-shell N=1 supersymmetry of the Wess–Zumino sigma-model action
- `pthm-qftx-n1-f-term-potential` · physics-theorem — Kähler-metric F-term scalar potential in the rigid N=1 model
- `post-qftx-n1-gauge-matter-model` · postulate — Rigid N=1 SU(2) gauge-matter superspace action
- `pthm-qftx-n1-gauge-matter-off-shell-invariance` · physics-theorem — Off-shell supersymmetry of the rigid N=1 gauge-matter superspace action

### `qftx-susy-n1-superspace-and-actions-examples` — N=1 Superspace and Wess–Zumino/Gauge-Matter Actions — Examples (2 item(s))

- `ex-qftx-n1-wess-zumino-cubic-f-potential` · example — Cubic one-field Wess–Zumino F-term potential
- `ex-qftx-n1-su2-fundamental-matter-covariant-derivative` · example — Fundamental SU(2) chiral matter and its covariant derivative

### `qftx-susy-extended-actions` — N=2 and N=4 Gauge Actions (4 item(s))

- `lem-qftx-n2-hypermultiplet-gauge-invariant-couplings` · lemma — Gauge invariance of hypermultiplet mass and adjoint couplings
- `lem-qftx-n4-adjoint-cubic-gauge-invariance` · lemma — Gauge invariance of the adjoint cubic superpotential
- `post-qftx-n2-vector-hypermultiplet-model` · postulate — Four-dimensional N=2 SU(2) vector and hypermultiplet model
- `post-qftx-n4-super-yang-mills-model` · postulate — Four-dimensional N=4 SU(2) super-Yang-Mills model

### `qftx-susy-extended-actions-examples` — N=2 and N=4 Gauge Actions — Examples (4 item(s))

- `ex-qftx-n2-hypermultiplet-gauge-invariants` · example — Gauge-invariant bilinears in one SU(2) hypermultiplet
- `ex-qftx-n2-quadratic-prepotential` · example — Constant gauge-coupling matrix from the quadratic N=2 prepotential
- `ex-qftx-n4-adjoint-hyper-decomposition` · example — N=4 action as a massless adjoint-hypermultiplet specialization
- `ex-qftx-n4-su2-noncommuting-scalar-potential` · example — Positive N=4 scalar potential for two noncommuting SU(2) fields

## Your seams

Your pages depend on another group's:

- `qftx-susy-algebra-and-multiplets` requires `aqft-susy-math-foundations` (group m, batch 1)
- `qftx-susy-algebra-and-multiplets-examples` requires `aqft-susy-math-foundations` (group m, batch 1)
- `qftx-susy-n1-superspace-and-actions` requires `qftx-nonabelian-yang-mills-model` (group a, batch 19)
- `qftx-susy-n1-superspace-and-actions` requires `aqft-susy-math-foundations` (group m, batch 1)
- `qftx-susy-n1-superspace-and-actions` requires `qftx-gauge-geometry` (group m, batch 2)
- `qftx-susy-n1-superspace-and-actions-examples` requires `qftx-gauge-geometry` (group m, batch 2)
- `qftx-susy-n1-superspace-and-actions-examples` requires `qftx-nonabelian-yang-mills-model` (group a, batch 19)
- `qftx-susy-extended-actions` requires `qftx-nonabelian-yang-mills-model` (group a, batch 19)
- `qftx-susy-extended-actions` requires `aqft-susy-math-foundations` (group m, batch 1)
- `qftx-susy-extended-actions-examples` requires `qftx-nonabelian-yang-mills-model` (group a, batch 19)

Another group's pages depend on yours:

- `qftx-susy-ward-and-nonrenormalization` (group e) requires your `qftx-susy-n1-superspace-and-actions`
- `qftx-susy-ward-and-nonrenormalization` (group e) requires your `qftx-susy-extended-actions`
- `qftx-susy-moduli-and-dualities` (group e) requires your `qftx-susy-algebra-and-multiplets`
- `qftx-susy-moduli-and-dualities` (group e) requires your `qftx-susy-extended-actions`
- `qftx-susy-moduli-and-dualities` (group e) requires your `qftx-susy-n1-superspace-and-actions`
- `qftx-susy-breaking-and-phenomenology` (group e) requires your `qftx-susy-n1-superspace-and-actions`
- `qftx-susy-scft-and-frontier` (group f) requires your `qftx-susy-extended-actions`
- `qftx-susy-scft-and-frontier-examples` (group f) requires your `qftx-susy-extended-actions`
- `qftx-defects-and-topological-operators` (group f) requires your `qftx-susy-algebra-and-multiplets`
- `aqft-susy-effective-theories` (group i) requires your `qftx-susy-extended-actions`
- `aqft-susy-effective-theories` (group i) requires your `qftx-susy-n1-superspace-and-actions`
- `qftx-susy-backgrounds` (group j) requires your `qftx-susy-extended-actions`
- `qftx-susy-backgrounds-examples` (group j) requires your `qftx-susy-extended-actions`
- `qftx-bps-solitons-monopoles` (group k) requires your `qftx-susy-algebra-and-multiplets`
- `qftx-bps-indices` (group l) requires your `qftx-susy-algebra-and-multiplets`
- `qftx-physical-hall-bps-wall-crossing` (group l) requires your `qftx-susy-algebra-and-multiplets`

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
