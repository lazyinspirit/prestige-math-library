# Step 5 adjudication — group **aq**, run `physics-non-fluid-129-2026-10-21-r2`

You are the group Alpha for batches 122, 125, 127: 3 A/B pair(s), 6 page(s), 12 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **122**: `research/physics-non-fluid-129-2026-10-21-r2-batch-122-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **125**: `research/physics-non-fluid-129-2026-10-21-r2-batch-125-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **127**: `research/physics-non-fluid-129-2026-10-21-r2-batch-127-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 122 | `tgrx-relative-entropy-balance` | A | thermodynamics-and-general-relativity-mathematics | 941 | `tgr-mhs05`, `quantum-information-measures`, `qsm-states-ensembles`, `matrices-and-the-matrix-of-a-linear-map`, `bounded-linear-operators-and-quotient-spaces`, `the-logarithm-and-general-powers`, `series-and-nonnegative-tests`, `power-series-and-real-analytic-functions`, `the-derivative-and-mean-value-theorems`, `registers-tensor-products-and-partial-trace`, `inner-product-spaces-and-orthogonality` |
| 122 | `tgrx-relative-entropy-balance-examples` | B | thermodynamics-and-general-relativity-mathematics | 942 | `tgrx-relative-entropy-balance`, `the-logarithm-and-general-powers`, `the-derivative-and-mean-value-theorems` |
| 125 | `tgrx-finite-code-holography` | A | thermodynamics-and-general-relativity-mathematics | 947 | `tgrx-relative-entropy-balance`, `registers-tensor-products-and-partial-trace`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `qsm-states-ensembles`, `the-logarithm-and-general-powers` |
| 125 | `tgrx-finite-code-holography-examples` | B | thermodynamics-and-general-relativity-mathematics | 948 | `tgrx-finite-code-holography`, `the-logarithm-and-general-powers` |
| 127 | `tgrx-topological-entropy-models` | A | thermodynamics-and-general-relativity-mathematics | 951 | `tgrx-finite-code-holography`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `temperley-lieb-jones-wenzl-traces-and-quotients`, `temperley-lieb-root-of-unity-and-modular-representation-theory`, `matrices-and-the-matrix-of-a-linear-map`, `the-logarithm-and-general-powers`, `temperley-lieb-semisimplicity-and-generic-structure`, `linear-maps-rank-nullity-and-quotient-spaces` |
| 127 | `tgrx-topological-entropy-models-examples` | B | thermodynamics-and-general-relativity-mathematics | 952 | `tgrx-topological-entropy-models`, `the-logarithm-and-general-powers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tgrx-relative-entropy-balance` — Finite modular energy and entropy balance (3 item(s))

- `lem-tgrx-finite-matrix-entropy-variation` · lemma — Finite matrix entropy derivative at a faithful state
- `prop-tgrx-finite-modular-balance` · proposition — Finite relative entropy equals modular energy minus entropy
- `prop-tgrx-entropy-first-variation` · proposition — Finite-dimensional entropy first variation at a faithful state

### `tgrx-relative-entropy-balance-examples` — Finite modular energy and entropy balance — Examples (1 item(s))

- `ex-tgrx-qubit-first-variation` · example — Two-level entropy first variation

### `tgrx-finite-code-holography` — Exact finite algebra entropy identities and holography boundaries (2 item(s))

- `def-tgrx-sector-code` · definition — Direct-sum sector code entropy model
- `prop-tgrx-code-area-entropy` · proposition — Sector entropy and relative entropy identities

### `tgrx-finite-code-holography-examples` — Exact finite algebra entropy identities and holography boundaries — Examples (1 item(s))

- `ex-tgrx-two-sector-area` · example — Sector-dependent ancillary entropy

### `tgrx-topological-entropy-models` — Topological boundary state counts without universal gravity claims (4 item(s))

- `def-tgrx-finite-fusion-count-model` · definition — Finite fusion transfer count model
- `prop-tgrx-fusion-count-entropy` · proposition — Fusion path recursion and entropy
- `def-tgrx-tl-boundary-representation` · definition — Finite Hilbert boundary representation of Temperley-Lieb
- `prop-tgrx-tl-projector-entropy` · proposition — Jones-Wenzl image gives a finite maximally mixed sector

### `tgrx-topological-entropy-models-examples` — Topological boundary state counts without universal gravity claims — Examples (1 item(s))

- `ex-tgrx-count-is-not-area-law` · example — Fusion count alone leaves an entropy-to-scalar ratio undetermined

## Your seams

Your pages depend on another group's:

- `tgrx-relative-entropy-balance` requires `tgr-mhs05` (group ap, batch 113)

Another group's pages depend on yours:

- `tgrx-regulated-second-law` (group an) requires your `tgrx-relative-entropy-balance`
- `tgrx-ads-effective-boundaries` (group ao) requires your `tgrx-finite-code-holography`

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
