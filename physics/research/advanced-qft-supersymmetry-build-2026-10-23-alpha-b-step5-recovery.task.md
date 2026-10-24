# Step 5 adjudication — group **b**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 22, 24, 25: 3 A/B pair(s), 6 page(s), 13 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **25**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 22 | `qftx-nonabelian-lattice-regulator` | A | advanced-qft-and-supersymmetry | 978 | `qftx-nonabelian-lattice-mathematics`, `countability-and-uncountability`, `lie-groups-invariant-fields-and-the-exponential-map`, `compactness-in-metric-spaces`, `relations-functions-and-quotients`, `haar-measure-existence-and-uniqueness`, `square-integrable-kernels-and-hilbert-schmidt-compactness`, `product-measures-and-the-fubini-tonelli-theorems`, `orthonormal-bases-parseval-and-fourier-series`, `complex-lp-spaces-and-test-function-conventions` |
| 22 | `qftx-nonabelian-lattice-regulator-examples` | B | advanced-qft-and-supersymmetry | 978 | `qftx-nonabelian-lattice-regulator`, `relations-functions-and-quotients`, `haar-measure-existence-and-uniqueness` |
| 24 | `aqft-eft-foundations` | A | advanced-qft-and-supersymmetry | 980 | `qftx-nonabelian-yang-mills-model`, `qft-c01`, `qftx-heavy-field-eft`, `countability-and-uncountability`, `qftx-gauge-geometry`, `relations-functions-and-quotients`, `central-limit-theorems` |
| 24 | `aqft-eft-foundations-examples` | B | advanced-qft-and-supersymmetry | 980 | `aqft-eft-foundations`, `relations-functions-and-quotients`, `central-limit-theorems`, `qftx-heavy-field-eft` |
| 25 | `aqft-eft-operators` | A | advanced-qft-and-supersymmetry | 981 | `aqft-eft-foundations`, `qftx-gauge-geometry`, `qftx-eft-operator-quotients`, `countability-and-uncountability` |
| 25 | `aqft-eft-operators-examples` | B | advanced-qft-and-supersymmetry | 981 | `aqft-eft-operators`, `countability-and-uncountability`, `qftx-gauge-geometry`, `qftx-eft-operator-quotients` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-nonabelian-lattice-regulator` — Compact Non-Abelian Finite-Lattice Regulator (3 item(s))

- `lem-qftx-su2-compact-nonabelian-group` · lemma — Compact non-Abelian Lie-group structure of SU(2)
- `lem-qftx-su2-wilson-transfer-well-defined` · lemma — Finite SU(2) Wilson integrals and transfer-sector well-definedness
- `post-qftx-nonabelian-lattice-regulator` · postulate — Compact Non-Abelian Finite-Lattice Regulator

### `qftx-nonabelian-lattice-regulator-examples` — Compact Non-Abelian Finite-Lattice Regulator — Examples (1 item(s))

- `ex-qftx-su2-wilson-lattice-transfer-sector` · example — A finite SU(2) Wilson lattice and its gauge-invariant transfer sector

### `aqft-eft-foundations` — EFT Data, Scales, Wilsonian Action and Finite Matching (5 item(s))

- `def-aqft-model-and-scale-data` · definition — Finite-regulator EFT model and scale data
- `def-aqft-wilsonian-action` · definition — Finite-regulator Wilsonian action
- `def-aqft-derivative-expansion-and-truncation` · definition — Finite-regulator derivative expansion and truncation
- `prop-aqft-finite-gaussian-shell-composition` · proposition — Successive finite Gaussian shells compose
- `texp-aqft-finite-heavy-scalar-matching` · thought-experiment — Finite heavy-scalar Gaussian matching

### `aqft-eft-foundations-examples` — EFT Data, Scales, Wilsonian Action and Finite Matching — Examples (1 item(s))

- `ex-aqft-gaussian-shell-matching` · example — One-dimensional finite Gaussian matching and shell composition

### `aqft-eft-operators` — Physical EFT Operator Contracts and Power Counting (1 item(s))

- `def-aqft-operator-basis-physical-data` · definition — Physical EFT operator data and power-counting contract

### `aqft-eft-operators-examples` — Physical EFT Operator Contracts and Power Counting — Examples (2 item(s))

- `ex-aqft-scalar-gauge-operator-power-counting` · example — A finite-order SU(2) scalar operator contract
- `ex-aqft-scalar-eom-operator-reduction` · example — Scalar derivative operator reduction at fixed EFT order

## Your seams

Your pages depend on another group's:

- `qftx-nonabelian-lattice-regulator` requires `qftx-nonabelian-lattice-mathematics` (group n, batch 6)
- `aqft-eft-foundations` requires `qftx-nonabelian-yang-mills-model` (group a, batch 19)
- `aqft-eft-foundations` requires `qftx-gauge-geometry` (group m, batch 2)
- `aqft-eft-operators` requires `qftx-gauge-geometry` (group m, batch 2)
- `aqft-eft-operators` requires `qftx-eft-operator-quotients` (group r, batch 16)
- `aqft-eft-operators-examples` requires `qftx-gauge-geometry` (group m, batch 2)
- `aqft-eft-operators-examples` requires `qftx-eft-operator-quotients` (group r, batch 16)

Another group's pages depend on yours:

- `aqft-eft-matching-running` (group c) requires your `aqft-eft-operators`
- `aqft-eft-matching-running` (group c) requires your `aqft-eft-foundations`
- `aqft-smeft-heft` (group c) requires your `aqft-eft-operators`
- `aqft-eft-amplitudes` (group c) requires your `aqft-eft-foundations`
- `aqft-eft-amplitudes` (group c) requires your `aqft-eft-operators`
- `qftx-anomaly-matching-and-frontier` (group h) requires your `aqft-eft-foundations`
- `aqft-susy-effective-theories` (group i) requires your `aqft-eft-operators`

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
