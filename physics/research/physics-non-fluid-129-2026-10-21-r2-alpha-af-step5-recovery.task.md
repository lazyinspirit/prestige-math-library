# Step 5 adjudication — group **af**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 81, 82, 83: 3 A/B pair(s), 6 page(s), 12 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **81**: `research/physics-non-fluid-129-2026-10-21-r2-batch-81-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **82**: `research/physics-non-fluid-129-2026-10-21-r2-batch-82-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **83**: `research/physics-non-fluid-129-2026-10-21-r2-batch-83-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 81 | `qftx-hall-bps-wall-crossing` | A | quantum-field-theory-mathematics | 859 | `hall-stability-dt-bps-and-wall-crossing`, `qftx-ribbon-braid-representations`, `cohomological-hall-algebras-and-quiver-correspondences`, `motivic-hall-algebras-and-integration` |
| 81 | `qftx-hall-bps-wall-crossing-examples` | B | quantum-field-theory-mathematics | 860 | `qftx-hall-bps-wall-crossing` |
| 82 | `qftx-categorified-line-operators` | A | quantum-field-theory-mathematics | 861 | `qftx-ribbon-braid-representations`, `rouquier-complexes-and-categorical-braid-relations`, `type-a-soergel-bimodules-and-hecke-categorification`, `homological-gaussian-elimination` |
| 82 | `qftx-categorified-line-operators-examples` | B | quantum-field-theory-mathematics | 862 | `qftx-categorified-line-operators`, `type-a-soergel-bimodules-and-hecke-categorification`, `homological-gaussian-elimination` |
| 83 | `qftx-spectral-tube-analyticity` | A | quantum-field-theory-mathematics | 863 | `qft-mc02`, `spectral-measures-and-borel-functional-calculus`, `cm-math-numerical` |
| 83 | `qftx-spectral-tube-analyticity-examples` | B | quantum-field-theory-mathematics | 864 | `qftx-spectral-tube-analyticity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-hall-bps-wall-crossing` — Hall factorization, stability chambers and conditional BPS spectrum generators (3 item(s))

- `def-qftx-hall-spectrum-generator` · definition — Finite-quiver Hall spectrum generators
- `prop-qftx-hall-spectrum-invariance` · proposition — Hall wall crossing preserves the completed spectrum generators
- `def-qftx-cy3-bps-integration-contract` · definition — CY3, CoHA, and protected-state extension contract

### `qftx-hall-bps-wall-crossing-examples` — Hall factorization, stability chambers and conditional BPS spectrum generators — Examples (1 item(s))

- `ex-qftx-a-two-hall-flags` · example — A2 Hall factorization counts extension flags

### `qftx-categorified-line-operators` — Categorified braid lines, grading and decategorification (3 item(s))

- `def-qftx-categorified-line-model` · definition — Categorified braid-line model with an explicit realization boundary
- `prop-qftx-categorified-braid-euler` · proposition — The exact grading shift survives braid decategorification
- `def-qftx-klr-defect-action-contract` · definition — KLR categorical action contract for line-changing data

### `qftx-categorified-line-operators-examples` — Categorified braid lines, grading and decategorification — Examples (1 item(s))

- `cex-qftx-euler-class-loses-extension-data` · counterexample — A vanishing Euler class does not imply contractibility of a Soergel complex

### `qftx-spectral-tube-analyticity` — Positive-energy tube analyticity and discrete-symmetry proof interfaces (3 item(s))

- `def-qftx-joint-spectrum-input` · definition — Positive-energy joint spectral input
- `thm-qftx-spectral-tube-holomorphy` · theorem — Positive spectrum gives bounded future-tube continuation
- `def-qftx-cpt-spin-statistics-interface` · definition — CPT and spin-statistics proof interface

### `qftx-spectral-tube-analyticity-examples` — Positive-energy tube analyticity and discrete-symmetry proof interfaces — Examples (1 item(s))

- `ex-qftx-positive-frequency-tube` · example — One positive frequency decays in the future imaginary direction

## Your seams

Your pages depend on another group's:

- `qftx-hall-bps-wall-crossing` requires `qftx-ribbon-braid-representations` (group ad, batch 75)
- `qftx-categorified-line-operators` requires `qftx-ribbon-braid-representations` (group ad, batch 75)

Another group's pages depend on yours:

- `qftx-massive-scattering-estimates` (group ag) requires your `qftx-spectral-tube-analyticity`

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
