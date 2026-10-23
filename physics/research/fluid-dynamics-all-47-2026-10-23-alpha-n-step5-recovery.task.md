# Step 5 adjudication — group **n**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 34, 35, 37: 3 A/B pair(s), 6 page(s), 14 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/fluid-dynamics-all-47-2026-10-23-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/fluid-dynamics-all-47-2026-10-23-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **37**: `research/fluid-dynamics-all-47-2026-10-23-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 34 | `fd-st03` | A | fluid-dynamics-mathematics | 673 | `block-bootstrap-for-dependent-data`, `hilbert-valued-clt-for-weakly-dependent-functional-time-series`, `banach-valued-integration-and-the-radon-nikodym-property`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `orthonormal-bases-parseval-and-fourier-series`, `product-measures-and-the-fubini-tonelli-theorems`, `relations-functions-and-quotients`, `square-integrable-kernels-and-hilbert-schmidt-compactness`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `weak-convergence-tightness-and-representation` |
| 34 | `fd-st03-examples` | B | fluid-dynamics-mathematics | 674 | `fd-st03`, `banach-valued-integration-and-the-radon-nikodym-property`, `hilbert-space-geometry-and-riesz-representation`, `probability-spaces-random-variables-and-expectation`, `relations-functions-and-quotients` |
| 35 | `fd-da01` | A | fluid-dynamics-mathematics | 675 | `data-assimilation-variational-and-ensemble-methods`, `kalman-filtering`, `the-spectral-theorem-and-singular-value-decomposition`, `relations-functions-and-quotients`, `state-space-models-as-probability-laws` |
| 35 | `fd-da01-examples` | B | fluid-dynamics-mathematics | 676 | `fd-da01` |
| 37 | `fd-les01` | A | fluid-dynamics-mathematics | 679 | `fd-s01`, `compactness-in-metric-spaces`, `foundations-of-the-real-numbers`, `fubini-and-change-of-variables`, `integration-of-forms-and-the-general-stokes-theorem`, `properties-of-the-integral-and-the-working-ftc`, `roots-and-rational-powers`, `the-fundamental-theorems-of-calculus`, `the-riemann-integral`, `the-riemann-integral-in-rn-and-jordan-content`, `lebesgue-measure-on-euclidean-space`, `the-lebesgue-integral-and-the-convergence-theorems` |
| 37 | `fd-les01-examples` | B | fluid-dynamics-mathematics | 680 | `fd-les01` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-st03` — Dependent profile resampling and observation inference (3 item(s))

- `lem-fd-profile-affine-coordinate-isometry` · lemma — Affine normalization isometry for profile coordinates
- `def-fd-fluid-profile-bootstrap-interface` · definition — Profile-to-Hilbert bootstrap interface
- `prop-fd-profile-functional-bootstrap` · proposition — Bounded profile functional conditional CLT

### `fd-st03-examples` — Dependent profile resampling and observation inference — Examples (1 item(s))

- `ex-fd-constant-profile-bootstrap` · example — Scalar series as a constant Hilbert profile

### `fd-da01` — Assimilation and finite inverse identifiability (4 item(s))

- `def-fd-fluid-coefficient-observation-model` · definition — Finite coefficient observation and innovation interface
- `prop-fd-linear-fluid-filter-interface` · proposition — Exact filtering for the declared linear Gaussian model
- `rem-fd-fluid-enkf-scope` · remark — EnKF large-ensemble scope and nonlinear limits
- `prop-fd-finite-observation-identifiability` · proposition — Whitened observation identifiability and stability

### `fd-da01-examples` — Assimilation and finite inverse identifiability — Examples (1 item(s))

- `ex-fd-two-mode-one-sensor` · example — One sensor cannot identify two independent coefficients

### `fd-les01` — Filtered stresses and energy transfer (4 item(s))

- `def-fd-positive-convolution-fluid-filter` · definition — Positive periodic convolution filter and subfilter stress
- `lem-fd-periodic-filter-normalization-and-commutation` · lemma — Normalization, periodization, and derivative commutation for the positive fluid filter
- `thm-fd-filtered-covariance-energy` · theorem — Exact filtered covariance and resolved-energy balance
- `thm-fd-holder-energy-transfer-bound` · theorem — Hölder bound for filtered subfilter energy transfer

### `fd-les01-examples` — Filtered stresses and energy transfer — Examples (1 item(s))

- `ex-fd-filtering-constant-field` · example — Constant velocity has zero subfilter stress

## Your seams

Your pages depend on another group's:

- `fd-les01` requires `fd-s01` (group j, batch 17)

Another group's pages depend on yours:

- `fd-pda01` (group e) requires your `fd-da01`
- `fd-ples01` (group f) requires your `fd-les01`

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
