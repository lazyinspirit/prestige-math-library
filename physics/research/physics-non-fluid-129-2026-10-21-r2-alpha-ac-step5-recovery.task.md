# Step 5 adjudication — group **ac**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 71, 72, 73: 3 A/B pair(s), 6 page(s), 16 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **71**: `research/physics-non-fluid-129-2026-10-21-r2-batch-71-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **72**: `research/physics-non-fluid-129-2026-10-21-r2-batch-72-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **73**: `research/physics-non-fluid-129-2026-10-21-r2-batch-73-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 71 | `qftx-photon-helicity` | A | quantum-field-theory-mathematics | 839 | `qft-mg01`, `qft-mf01`, `integration-of-forms-and-the-general-stokes-theorem` |
| 71 | `qftx-photon-helicity-examples` | B | quantum-field-theory-mathematics | 840 | `qftx-photon-helicity` |
| 72 | `qftx-photon-angular-momentum` | A | quantum-field-theory-mathematics | 841 | `qftx-photon-helicity`, `qft-mf01` |
| 72 | `qftx-photon-angular-momentum-examples` | B | quantum-field-theory-mathematics | 842 | `qftx-photon-angular-momentum`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 73 | `qftx-photon-paraxial` | A | quantum-field-theory-mathematics | 843 | `qftx-photon-angular-momentum`, `qftx-photon-helicity`, `trigonometric-and-oscillatory-examples-in-one-variable`, `countability-and-uncountability` |
| 73 | `qftx-photon-paraxial-examples` | B | quantum-field-theory-mathematics | 844 | `qftx-photon-paraxial` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-photon-helicity` — Photon helicity bundles and exact transverse rotations (4 item(s))

- `lem-qftx-photon-invariant-measure-isometry` · lemma — The mass-shell weighted transverse space matches the Lebesgue transverse space
- `def-qftx-photon-helicity-bundle` · definition — Transverse one-photon space and helicity projectors
- `thm-qftx-photon-rotations-helicity` · theorem — Transverse rotations preserve helicity and generate total angular momentum
- `prop-qftx-helicity-chern-obstruction` · proposition — Helicity line bundles have nonzero Chern number

### `qftx-photon-helicity-examples` — Photon helicity bundles and exact transverse rotations — Examples (1 item(s))

- `cex-qftx-fixed-polarization-tensor-factor` · counterexample — A fixed Cartesian polarization is not a global transverse helicity frame

### `qftx-photon-angular-momentum` — Projected spin, orbital angular momentum and gauge-aware generators (5 item(s))

- `lem-qftx-measurable-helicity-scalarization` · lemma — Measurable scalarization of the transverse helicity fibers
- `def-qftx-photon-projected-angular` · definition — Projected photon spin and orbital operators
- `lem-qftx-photon-rotation-test-core` · lemma — The smooth transverse domain is a core for photon rotation generators
- `thm-qftx-photon-projected-commutators` · theorem — Projected angular parts are not two independent rotation algebras
- `prop-qftx-photon-fock-angular-lift` · proposition — Second-quantized total rotations and helicity counts

### `qftx-photon-angular-momentum-examples` — Projected spin, orbital angular momentum and gauge-aware generators — Examples (1 item(s))

- `ex-qftx-nonparaxial-spin-projection` · example — A conical helicity packet has reduced axial spin projection

### `qftx-photon-paraxial` — Controlled paraxial spin–orbital labels and nonparaxial corrections (4 item(s))

- `def-qftx-paraxial-cone` · definition — Forward cone and regular north-patch helicity gauge
- `lem-qftx-paraxial-vortex-packet-existence` · lemma — Finite-bandwidth vortex packets are rotation eigenvectors
- `prop-qftx-paraxial-spin-error` · proposition — Axial spin approaches helicity with a quantitative cone bound
- `prop-qftx-spin-to-orbit-constraint` · proposition — Axial symmetry constrains spin-to-orbital conversion

### `qftx-photon-paraxial-examples` — Controlled paraxial spin–orbital labels and nonparaxial corrections — Examples (1 item(s))

- `ex-qftx-vortex-paraxial-label` · example — A finite-energy vortex packet and its cone-bounded labels

## Your seams

Another group's pages depend on yours:

- `qftx-photon-counting` (group x) requires your `qftx-photon-helicity`

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
