# Step 5 adjudication — group **a**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 3, 4, 9: 3 A/B pair(s), 6 page(s), 23 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **3**: `research/fluid-dynamics-all-47-2026-10-23-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **4**: `research/fluid-dynamics-all-47-2026-10-23-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/fluid-dynamics-all-47-2026-10-23-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 3 | `fd-f01` | A | fluid-dynamics | 365 | `fd-mf01`, `compactness`, `compactness-in-metric-spaces`, `the-riemann-integral-in-rn-and-jordan-content`, `smooth-partitions-of-unity-and-exhaustions`, `inner-product-spaces-and-orthogonality`, `countability-and-uncountability`, `measurable-densities-and-radon-volume-on-manifolds` |
| 3 | `fd-f01-examples` | B | fluid-dynamics | 366 | `fd-f01`, `countability-and-uncountability`, `euclidean-surface-measure-divergence-and-green-identities`, `the-riemann-integral-in-rn-and-jordan-content` |
| 4 | `fd-c02` | A | fluid-dynamics | 367 | `fd-c01`, `fd-f01` |
| 4 | `fd-c02-examples` | B | fluid-dynamics | 368 | `fd-c02` |
| 9 | `fd-f02` | A | fluid-dynamics | 377 | `fd-f01`, `fd-mf02`, `countability-and-uncountability`, `relations-functions-and-quotients` |
| 9 | `fd-f02-examples` | B | fluid-dynamics | 378 | `fd-f02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-f01` — Classical frames, primitive quantities and SI units (6 item(s))

- `def-fd-quantity-and-frame-conventions` · definition — Classical frames, primitive quantities and SI units
- `lem-fd-c1-domain-jordan-integrals` · lemma — C1 material regions have compatible Jordan volume integrals
- `lem-fd-continuous-localization-on-c1-domains` · lemma — Continuous residuals localize on C1 domains
- `lem-fd-c1-boundary-surface-integrals` · lemma — Finite continuous surface integrals on compact C1 boundaries
- `post-fd-continuum-balances` · postulate — Single-component nonpolar continuum and material balances
- `pthm-fd-smooth-material-kinematics` · physics-theorem — Mass density reconstruction and incompressibility

### `fd-f01-examples` — Classical frames, primitive quantities and SI units — Examples (4 item(s))

- `ex-fd-material-dilation` · example — Volume dilation and bulk production
- `cex-fd-incompressibility-not-homogeneity` · counterexample — Incompressibility does not imply uniform density
- `cex-fd-unsteady-pathlines-streamlines` · counterexample — Unsteady pathlines differ from streamlines
- `cex-fd-spin-sensitive-stress` · counterexample — Spin-sensitive velocity-gradient stress violates objectivity

### `fd-c02` — Turbulent averaging and open closure questions (1 item(s))

- `rem-fd-turbulence-and-closure-scope` · remark — Turbulent averaging and open closure questions

### `fd-c02-examples` — Turbulent averaging and open closure questions — Examples (1 item(s))

- `ex-fd-reynolds-stress-sign-and-units` · example — Covariance versus effective Reynolds stress

### `fd-f02` — Specified wall, thermal, periodic and initial data (9 item(s))

- `lem-fd-moving-control-volume-transport` · lemma — Transport across a moving control boundary
- `post-fd-boundary-data` · postulate — Specified wall, thermal, periodic and initial data
- `pthm-fd-material-mass-continuity` · physics-theorem — Material mass balance implies local continuity
- `post-fd-weak-balances` · postulate — Integrable weak continuum balance and entropy adoption
- `pthm-fd-continuous-source-local-balances` · physics-theorem — Local smooth balances with continuous body sources
- `pthm-fd-conservation-jump-laws` · physics-theorem — Fluid conservation and entropy jump conditions
- `pthm-fd-cauchy-momentum-angular` · physics-theorem — Cauchy stress, local momentum and stress symmetry
- `pthm-fd-control-volume-balances` · physics-theorem — Moving control-volume mass and momentum
- `pthm-fd-energy-decomposition` · physics-theorem — Kinetic/internal/total energy and boundary work

### `fd-f02-examples` — Specified wall, thermal, periodic and initial data — Examples (2 item(s))

- `cex-fd-vacuum-velocity-determination` · counterexample — Conservative momentum alone does not fix vacuum velocity
- `ex-fd-conduction-energy-entropy` · example — Conduction preserves energy while entropy increases

## Your seams

Your pages depend on another group's:

- `fd-f01` requires `fd-mf01` (group h, batch 2)
- `fd-c02` requires `fd-c01` (group g, batch 1)
- `fd-f02` requires `fd-mf02` (group i, batch 8)

Another group's pages depend on yours:

- `fd-f03` (group b) requires your `fd-f01`
- `fd-px01` (group b) requires your `fd-f02`
- `fd-px02` (group b) requires your `fd-f02`
- `fd-f04` (group c) requires your `fd-f01`
- `fd-ps02` (group d) requires your `fd-f02`
- `fd-w02` (group d) requires your `fd-f01`
- `fd-pn01` (group e) requires your `fd-f02`
- `fd-pn02` (group e) requires your `fd-f02`
- `fd-pda01` (group e) requires your `fd-f01`
- `fd-pg01` (group f) requires your `fd-f01`
- `fd-pmp01` (group f) requires your `fd-f01`
- `fd-pbl01` (group g) requires your `fd-f02`

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
