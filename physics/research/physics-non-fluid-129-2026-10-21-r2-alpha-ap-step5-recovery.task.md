# Step 5 adjudication — group **ap**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 113, 115, 119: 3 A/B pair(s), 6 page(s), 13 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **113**: `research/physics-non-fluid-129-2026-10-21-r2-batch-113-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **115**: `research/physics-non-fluid-129-2026-10-21-r2-batch-115-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **119**: `research/physics-non-fluid-129-2026-10-21-r2-batch-119-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-non-fluid-129-2026-10-21-r2-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 113 | `tgr-mhs05` | A | thermodynamics-and-general-relativity-mathematics | 923 | `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `linear-independence-bases-and-dimension`, `registers-tensor-products-and-partial-trace`, `the-spectral-theorem-and-singular-value-decomposition`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `quantum-information-measures`, `the-logarithm-and-general-powers`, `the-exponential-function`, `foundations-of-the-real-numbers` |
| 113 | `tgr-mhs05-examples` | B | thermodynamics-and-general-relativity-mathematics | 924 | `tgr-mhs05`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, `the-logarithm-and-general-powers`, `the-exponential-function` |
| 115 | `tgrx-thermal-geometry` | A | thermodynamics-and-general-relativity-mathematics | 927 | `tgr-et01`, `tgr-et02`, `riemannian-metrics-length-distance-and-volume` |
| 115 | `tgrx-thermal-geometry-examples` | B | thermodynamics-and-general-relativity-mathematics | 928 | `tgrx-thermal-geometry` |
| 119 | `tgrx-collapse-scattering` | A | thermodynamics-and-general-relativity-mathematics | 935 | `tgr-mhs02`, `tgr-mhs03`, `outward-rounded-interval-and-ball-arithmetic` |
| 119 | `tgrx-collapse-scattering-examples` | B | thermodynamics-and-general-relativity-mathematics | 936 | `tgrx-collapse-scattering` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgr-mhs05` — Finite-regulator entropy mathematics (3 item(s))

- `def-tgr-finite-cutoff-outside-entropy` · definition — Finite-regulator outside density and entropy
- `lem-tgr-finite-cutoff-mode-entropy-growth` · lemma — Finite mode cutoffs can have unbounded entropy
- `lem-tgr-renormalization-finite-part-ambiguity` · lemma — Finite subtraction ambiguity

### `tgr-mhs05-examples` — Finite-regulator entropy mathematics — Examples (1 item(s))

- `ex-tgr-generalized-entropy-not-monotone-from-definition` · example — Additive entropy definition does not imply monotonicity

### `tgrx-thermal-geometry` — Thermal vorticity and global equilibrium obstructions (5 item(s))

- `def-tgrx-thermal-vorticity` · definition — Thermal vorticity and equilibrium domain
- `def-tgrx-period-of-one-form` · definition — Period of a smooth one-form along a closed curve
- `lem-tgrx-compensator-implies-exact` · lemma — A global potential compensator makes the contracted field exact
- `lem-tgrx-exact-one-form-zero-period` · lemma — An exact one-form has zero period on every closed curve
- `prop-tgrx-equilibrium-obstructions` · proposition — Rotation and charged equilibrium obstruction

### `tgrx-thermal-geometry-examples` — Thermal vorticity and global equilibrium obstructions — Examples (1 item(s))

- `ex-tgrx-rotating-annulus` · example — Rigid bath and nonexact electric period

### `tgrx-collapse-scattering` — Collapse ray tracing and greybody separation (2 item(s))

- `def-tgrx-exponential-ray-channel` · definition — Specified chiral collapse channel
- `prop-tgrx-collapse-channel-spectrum` · proposition — Exponential channel thermality and greybody filtered occupations

### `tgrx-collapse-scattering-examples` — Collapse ray tracing and greybody separation — Examples (1 item(s))

- `ex-tgrx-greybody-nonplanck` · example — Frequency filtering changes a thermal spectrum

## Your seams

Another group's pages depend on yours:

- `tgr-phs05` (group al) requires your `tgr-mhs05`
- `tgrx-hydrostatic-functional` (group al) requires your `tgrx-thermal-geometry`
- `tgrx-hawking-approximation` (group am) requires your `tgrx-collapse-scattering`
- `tgrx-relative-entropy-balance` (group aq) requires your `tgr-mhs05`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-non-fluid-129-2026-10-21-r2-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-non-fluid-129-2026-10-21-r2`

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
