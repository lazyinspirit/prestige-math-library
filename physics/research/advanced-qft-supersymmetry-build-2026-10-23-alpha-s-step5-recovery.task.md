# Step 5 adjudication — group **s**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 23, 56, 57: 3 A/B pair(s), 6 page(s), 16 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **23**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **56**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 23 | `qftx-yang-mills-clay-problem` | A | quantum-field-theory-mathematics | 979 | — |
| 23 | `qftx-yang-mills-clay-problem-examples` | B | quantum-field-theory-mathematics | 979 | `qftx-yang-mills-clay-problem` |
| 56 | `qftx-sobolev-gauge-orbit-geometry` | A | quantum-field-theory-mathematics | 958.25 | `qftx-gauge-geometry`, `banach-space-differential-calculus-and-banach-manifolds`, `compact-laplace-type-operators-and-hodge-representatives`, `compact-operators-and-riesz-schauder-theory`, `gauge-groups-and-representation-theory-interfaces`, `relations-functions-and-quotients`, `sobolev-poincare-and-morrey-inequalities`, `unitary-representations-positive-type-and-gns`, `picard-lindelof-and-first-order-odes`, `interior-and-boundary-sobolev-elliptic-regularity` |
| 56 | `qftx-sobolev-gauge-orbit-geometry-examples` | B | quantum-field-theory-mathematics | 958.25 | `qftx-sobolev-gauge-orbit-geometry`, `relations-functions-and-quotients` |
| 57 | `qftx-irreducible-connection-topology` | A | quantum-field-theory-mathematics | 958.5 | `qftx-sobolev-gauge-orbit-geometry`, `compactness`, `higher-homotopy-groups-and-cofiber-sequences`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `rank-theorems-and-embedded-submanifolds`, `relations-functions-and-quotients`, `countability-and-uncountability` |
| 57 | `qftx-irreducible-connection-topology-examples` | B | quantum-field-theory-mathematics | 958.5 | `qftx-irreducible-connection-topology`, `relations-functions-and-quotients`, `qftx-sobolev-gauge-orbit-geometry` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `qftx-yang-mills-clay-problem` — Clay Four-Dimensional Yang–Mills Existence and Mass Gap (1 item(s))

- `op-qftx-clay-4d-yang-mills-existence-mass-gap` · open-problem — Four-dimensional Yang–Mills existence and mass gap

### `qftx-yang-mills-clay-problem-examples` — Clay Four-Dimensional Yang–Mills Existence and Mass Gap — Examples (2 item(s))

- `ex-qftx-clay-two-global-forms-same-algebra` · example — Two global forms with the same simple Lie algebra
- `ex-qftx-clay-finite-one-plaquette-regulator` · example — A finite one-plaquette SU(2) regulator

### `qftx-sobolev-gauge-orbit-geometry` — Sobolev and Smooth Gauge-Orbit Geometry (5 item(s))

- `def-qftx-smooth-sobolev-gauge-configuration` · definition — Smooth and Sobolev configuration and reduced gauge spaces
- `lem-qftx-gauge-sobolev-calculus` · lemma — Sobolev gauge calculus and smooth gauge action
- `lem-qftx-gauge-stabilizer-and-properness` · lemma — Gauge stabilizers and properness of the Sobolev action
- `lem-qftx-covariant-laplacian-sobolev-splitting` · lemma — Rough-coefficient covariant Green inverse and Coulomb splitting
- `thm-qftx-sobolev-smooth-irreducible-gauge-bundle` · theorem — Sobolev and smooth irreducible gauge-orbit principal bundles

### `qftx-sobolev-gauge-orbit-geometry-examples` — Sobolev and Smooth Gauge-Orbit Geometry — Examples (2 item(s))

- `ex-qftx-covariantly-constant-stabilizer` · example — Central stabilizer and based stabilizer comparison
- `ex-qftx-coulomb-chart-linearization` · example — Coulomb chart linearization and derivative loss

### `qftx-irreducible-connection-topology` — Topology of Irreducible Connection Spaces (5 item(s))

- `lem-qftx-complex-grassmannian-compactness` · lemma — Compactness of the finite complex Grassmannian
- `lem-qftx-holonomy-incidence-codimension` · lemma — Dimension of the finite holonomy incidence manifold
- `lem-qftx-irreducible-finite-holonomy-witness` · lemma — Finite holonomy witnesses for irreducibility
- `lem-qftx-relative-finite-parameter-irreducible-avoidance` · lemma — Relative finite-parameter avoidance of reducible connections
- `thm-qftx-irreducible-connections-weak-contractibility` · theorem — Weak contractibility of the irreducible connection locus

### `qftx-irreducible-connection-topology-examples` — Topology of Irreducible Connection Spaces — Examples (1 item(s))

- `ex-qftx-relative-affine-disk-filling` · example — Affine filling and the exact reducible-locus repair step

## Your seams

Your pages depend on another group's:

- `qftx-sobolev-gauge-orbit-geometry` requires `qftx-gauge-geometry` (group m, batch 2)

Another group's pages depend on yours:

- `qftx-gauge-slice-mathematics` (group m) requires your `qftx-sobolev-gauge-orbit-geometry`
- `qftx-gauge-slice-mathematics` (group m) requires your `qftx-irreducible-connection-topology`
- `qftx-gauge-group-sphere-homotopy` (group t) requires your `qftx-sobolev-gauge-orbit-geometry`
- `qftx-gauge-group-sphere-homotopy-examples` (group t) requires your `qftx-sobolev-gauge-orbit-geometry`

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
