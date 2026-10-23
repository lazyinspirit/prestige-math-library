# Step 5 adjudication — group **i**, run `fluid-dynamics-all-47-2026-10-23`

You are the group Alpha for batches 7, 8, 10: 3 A/B pair(s), 6 page(s), 18 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/fluid-dynamics-all-47-2026-10-23-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/fluid-dynamics-all-47-2026-10-23-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **10**: `research/fluid-dynamics-all-47-2026-10-23-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 7 | `fd-x03` | A | fluid-dynamics-mathematics | 373 | `countability-and-uncountability`, `euclidean-surface-measure-divergence-and-green-identities`, `fd-x01`, `rn-as-a-normed-space` |
| 7 | `fd-x03-examples` | B | fluid-dynamics-mathematics | 374 | `fd-x03` |
| 8 | `fd-mf02` | A | fluid-dynamics-mathematics | 375 | `euclidean-surface-measure-divergence-and-green-identities`, `fd-mf01`, `countability-and-uncountability`, `lebesgue-measure-on-euclidean-space`, `sigma-algebras-and-borel-sets`, `measurable-functions-and-simple-approximation`, `measures-and-their-basic-properties`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems` |
| 8 | `fd-mf02-examples` | B | fluid-dynamics-mathematics | 376 | `fd-mf02` |
| 10 | `fd-mf03` | A | fluid-dynamics-mathematics | 379 | `fd-mf02`, `td-math-nonsmooth-equilibrium` |
| 10 | `fd-mf03-examples` | B | fluid-dynamics-mathematics | 380 | `fd-mf03` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fd-x03` — Stokes residual estimates, Couette stability and linear vortex-sheet modes (3 item(s))

- `thm-fd-x07` · theorem — Bounded-domain Stokes residual estimate
- `thm-fd-x10` · theorem — Conditional nonlinear Couette energy stability
- `thm-fd-x11` · theorem — Linear vortex-sheet growing modes

### `fd-x03-examples` — Stokes residual estimates, Couette stability and linear vortex-sheet modes — Examples (3 item(s))

- `ex-fd-x07-formal-verification` · example — Bounded-domain Stokes residual estimate — formal worked field
- `ex-fd-x10-formal-verification` · example — Conditional nonlinear Couette energy stability — formal worked field
- `ex-fd-x11-application` · example — Linear vortex-sheet growing modes — worked interpretation

### `fd-mf02` — Locally integrable conservative weak and initial forms (4 item(s))

- `def-fd-conservative-weak-form` · definition — Locally integrable conservative weak and initial forms
- `lem-fd-cauchy-contact` · lemma — Linear traction from shrinking local contact balance
- `lem-fd-local-balance-equivalence` · lemma — Momentum, angular, kinetic/internal and total balance algebra
- `lem-fd-weak-jump-consistency` · lemma — Smooth weak equivalence and moving jump residual

### `fd-mf02-examples` — Locally integrable conservative weak and initial forms — Examples (1 item(s))

- `ex-fdmath-vacuum-momentum-degeneracy` · example — Vanishing scalar density leaves velocity undetermined by momentum

### `fd-mf03` — Linear isotropic symmetric stress classification (6 item(s))

- `lem-fd-isotropic-linear-classification` · lemma — Linear isotropic symmetric stress classification
- `def-fd-simple-fluid-state` · definition — Specific fundamental relation and valid response charts
- `lem-fd-helmholtz-chart` · lemma — Local Helmholtz chart and partial-Legendre derivative identities
- `lem-fd-response-acoustic-algebra` · lemma — Response derivatives and linear acoustic sign
- `lem-fd-gibbs-entropy-residual` · lemma — Gibbs cancellation and entropy-production identity
- `lem-fd-newtonian-admissibility` · lemma — Newtonian/Fourier dissipation and exact coefficient conditions

### `fd-mf03-examples` — Linear isotropic symmetric stress classification — Examples (1 item(s))

- `ex-fdmath-negative-bulk-residual` · example — A negative bulk coefficient yields a negative quadratic residual

## Your seams

Your pages depend on another group's:

- `fd-x03` requires `fd-x01` (group h, batch 5)
- `fd-mf02` requires `fd-mf01` (group h, batch 2)

Another group's pages depend on yours:

- `fd-f02` (group a) requires your `fd-mf02`
- `fd-f03` (group b) requires your `fd-mf03`
- `fd-px03` (group c) requires your `fd-x03`

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
