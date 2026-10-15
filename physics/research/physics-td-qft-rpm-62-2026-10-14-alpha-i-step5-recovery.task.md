# Step 5 adjudication — group **i**, run `physics-td-qft-rpm-62-2026-10-14`

You are the group Alpha for batches 46, 47, 48: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **46**: `research/physics-td-qft-rpm-62-2026-10-14-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **47**: `research/physics-td-qft-rpm-62-2026-10-14-batch-47-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **48**: `research/physics-td-qft-rpm-62-2026-10-14-batch-48-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 46 | `qft-mx02` | A | quantum-field-theory-mathematics | 531 | `euclidean-surface-measure-divergence-and-green-identities`, `qft-mg03`, `qft-mx01` |
| 46 | `qft-mx02-examples` | B | quantum-field-theory-mathematics | 532 | `qft-mx02` |
| 47 | `qft-mx03` | A | quantum-field-theory-mathematics | 533 | `euclidean-surface-measure-divergence-and-green-identities`, `qft-mg03`, `qft-mx01`, `qft-mf01` |
| 47 | `qft-mx03-examples` | B | quantum-field-theory-mathematics | 534 | `qft-mx03` |
| 48 | `qft-mx04` | A | quantum-field-theory-mathematics | 535 | `qft-mx01` |
| 48 | `qft-mx04-examples` | B | quantum-field-theory-mathematics | 536 | `qft-mx04` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qft-mx02` — Clifford traces and normalized spin completeness (6 item(s))

- `def-qft-example-two-body-phase-space-data` · definition — Two-body phase-space and formal coefficient data
- `lem-qft-example-spin-trace-completeness` · lemma — Clifford traces and normalized spin completeness
- `lem-qft-example-two-body-phase-space` · lemma — Complete two-body phase space and coefficient flux map
- `thm-qft-example-massive-tree-annihilation` · theorem — Full-mass unpolarized formal pair-production coefficient
- `cor-qft-example-scalar-tree-coefficients` · corollary — Scalar symmetry factors and decay coefficient units
- `lem-qft-example-dirac-pauli-square` · lemma — Minimal Dirac magnetic square and formal Pauli benchmark

### `qft-mx02-examples` — Clifford traces and normalized spin completeness — Examples (3 item(s))

- `ex-qftmath-x04` · example — Massless formal annihilation angular contrast
- `ex-qftmath-x05` · example — Two-body symmetry factors and massless daughter rate units
- `ex-qftmath-x09` · example — Formal Dirac spin coefficient in a uniform field

### `qft-mx03` — Soft-current angular norm and exact cutoff coherent model (3 item(s))

- `lem-qft-example-four-dimensional-radial-measure` · lemma — Four-dimensional radial measure from two polar planes
- `lem-qft-example-cutoff-integrals-and-series` · lemma — Finite UV subtraction and a divergent factorial toy series
- `thm-qft-example-soft-current-angular-coherent` · theorem — Soft-current angular norm and exact cutoff coherent model

### `qft-mx03-examples` — Soft-current angular norm and exact cutoff coherent model — Examples (2 item(s))

- `ex-qftmath-x06` · example — Worked mathematical example B06 — a cutoff coherent soft state
- `ex-qftmath-x07` · example — Worked mathematical example B07 — subtraction and a factorial series

### `qft-mx04` — Ideal linear Penning mode-frequency invariant (2 item(s))

- `lem-qft-example-penning-frequency-invariant` · lemma — Ideal linear Penning mode-frequency invariant
- `lem-qft-example-deterministic-ratio-error` · lemma — Deterministic ratio error and Taylor remainder

### `qft-mx04-examples` — Ideal linear Penning mode-frequency invariant — Examples (1 item(s))

- `ex-qftmath-x08` · example — Hypothetical calibration error interval

## Your seams

Your pages depend on another group's:

- `qft-mx02` requires `qft-mg03` (group h, batch 45)
- `qft-mx02` requires `qft-mx01` (group g, batch 41)
- `qft-mx03` requires `qft-mg03` (group h, batch 45)
- `qft-mx03` requires `qft-mx01` (group g, batch 41)
- `qft-mx03` requires `qft-mf01` (group f, batch 37)
- `qft-mx04` requires `qft-mx01` (group g, batch 41)

Another group's pages depend on yours:

- `qft-x02` (group c) requires your `qft-mx02`
- `qft-x03` (group c) requires your `qft-mx03`
- `qft-x03` (group c) requires your `qft-mx04`

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
