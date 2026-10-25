# Step 5 adjudication — group **a**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 19, 20, 21: 3 A/B pair(s), 6 page(s), 15 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `qftx-nonabelian-yang-mills-model` | A | advanced-qft-and-supersymmetry | 975 | `qftx-gauge-geometry`, `qft-c01`, `countability-and-uncountability`, `lie-groups-invariant-fields-and-the-exponential-map`, `compactness-in-metric-spaces`, `gauge-groups-and-representation-theory-interfaces`, `sr-forces-and-continuum` |
| 19 | `qftx-nonabelian-yang-mills-model-examples` | B | advanced-qft-and-supersymmetry | 975 | `qftx-nonabelian-yang-mills-model`, `qftx-gauge-geometry` |
| 20 | `qftx-gauge-fixed-perturbation` | A | advanced-qft-and-supersymmetry | 976 | `qftx-gauge-slice-mathematics`, `qftx-nonabelian-brst-bv-mathematics`, `qftx-nonabelian-yang-mills-model`, `qftx-gauge-geometry` |
| 20 | `qftx-gauge-fixed-perturbation-examples` | B | advanced-qft-and-supersymmetry | 976 | `qftx-gauge-fixed-perturbation`, `qftx-gauge-slice-mathematics`, `qftx-nonabelian-brst-bv-mathematics` |
| 21 | `qftx-yang-mills-instanton-physics` | A | advanced-qft-and-supersymmetry | 977 | `qftx-nonabelian-yang-mills-model`, `qftx-instanton-topology-mathematics`, `countability-and-uncountability`, `qftx-gauge-geometry`, `gauge-groups-and-representation-theory-interfaces`, `relations-functions-and-quotients` |
| 21 | `qftx-yang-mills-instanton-physics-examples` | B | advanced-qft-and-supersymmetry | 977 | `qftx-yang-mills-instanton-physics`, `qftx-instanton-topology-mathematics`, `integration-of-forms-and-the-general-stokes-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-nonabelian-yang-mills-model` — Classical Non-Abelian Yang–Mills Model (4 item(s))

- `lem-qftx-su2-compact-nonabelian-invariant-form` · lemma — Compactness and normalized invariant form for SU(2)
- `post-qftx-nonabelian-yang-mills-model` · postulate — Classical pure SU(2) Yang–Mills model
- `pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance` · physics-theorem — Gauge invariance of the classical pure SU(2) Yang–Mills action
- `pthm-qftx-nonabelian-yang-mills-euler-lagrange` · physics-theorem — Source-free Euler–Lagrange equation for the classical SU(2) Yang–Mills action

### `qftx-nonabelian-yang-mills-model-examples` — Classical Non-Abelian Yang–Mills Model — Examples (3 item(s))

- `ex-qftx-su2-noncommuting-yang-mills-action-density` · example — A noncommuting SU(2) configuration with nonzero Yang–Mills density
- `ex-qftx-su2-pure-gauge-yang-mills-action` · example — A nonzero pure-gauge potential with zero Yang–Mills density
- `ex-qftx-su2-null-wave-yang-mills-solution` · example — A nonzero null plane-wave solution of the pure SU(2) model

### `qftx-gauge-fixed-perturbation` — Gauge Fixing and Formal Perturbative Yang–Mills (2 item(s))

- `def-qftx-formal-perturbative-yang-mills-data` · definition — Formal Perturbative Yang–Mills Renormalization Data
- `pthm-qftx-perturbative-yang-mills-st-identity` · physics-theorem — Conditional Slavnov–Taylor Identity and Counterterm Classification

### `qftx-gauge-fixed-perturbation-examples` — Gauge Fixing and Formal Perturbative Yang–Mills — Examples (2 item(s))

- `ex-qftx-finite-orbit-faddeev-popov-jacobian` · example — A Finite Orbit with Two Gauge-Condition Intersections
- `ex-qftx-brst-exact-lorenz-gauge-term` · example — A BRST-Exact Lorenz-Gauge Functional

### `qftx-yang-mills-instanton-physics` — Yang–Mills Topological Sectors and Instanton Interpretation (2 item(s))

- `post-qftx-euclidean-yang-mills-model` · postulate — Independent classical Euclidean SU(2) Yang–Mills model
- `def-qftx-euclidean-yang-mills-sector` · definition — Euclidean Yang–Mills sectors and instanton interpretation

### `qftx-yang-mills-instanton-physics-examples` — Yang–Mills Topological Sectors and Instanton Interpretation — Examples (2 item(s))

- `ex-qftx-euclidean-trivial-vacuum-sector` · example — The trivial Euclidean vacuum lies in the zero-charge sector
- `ex-qftx-bpst-instanton-formal-sector-weight` · example — A charge-one BPST saddle and its formal sector weight

## Your seams

Your pages depend on another group's:

- `qftx-nonabelian-yang-mills-model` requires `qftx-gauge-geometry` (group m, batch 2)
- `qftx-nonabelian-yang-mills-model-examples` requires `qftx-gauge-geometry` (group m, batch 2)
- `qftx-gauge-fixed-perturbation` requires `qftx-gauge-slice-mathematics` (group m, batch 3)
- `qftx-gauge-fixed-perturbation` requires `qftx-nonabelian-brst-bv-mathematics` (group n, batch 4)
- `qftx-gauge-fixed-perturbation` requires `qftx-gauge-geometry` (group m, batch 2)
- `qftx-gauge-fixed-perturbation-examples` requires `qftx-gauge-slice-mathematics` (group m, batch 3)
- `qftx-gauge-fixed-perturbation-examples` requires `qftx-nonabelian-brst-bv-mathematics` (group n, batch 4)
- `qftx-yang-mills-instanton-physics` requires `qftx-instanton-topology-mathematics` (group n, batch 5)
- `qftx-yang-mills-instanton-physics` requires `qftx-gauge-geometry` (group m, batch 2)
- `qftx-yang-mills-instanton-physics-examples` requires `qftx-instanton-topology-mathematics` (group n, batch 5)

Another group's pages depend on yours:

- `aqft-eft-foundations` (group b) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-susy-n1-superspace-and-actions` (group d) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-susy-n1-superspace-and-actions-examples` (group d) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-susy-extended-actions` (group d) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-susy-extended-actions-examples` (group d) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-susy-moduli-and-dualities` (group e) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-bps-solitons-monopoles` (group k) requires your `qftx-nonabelian-yang-mills-model`
- `qftx-bps-solitons-monopoles-examples` (group k) requires your `qftx-nonabelian-yang-mills-model`

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

# Step 5 batch adjudication, `advanced-qft-supersymmetry-build-2026-10-23`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
