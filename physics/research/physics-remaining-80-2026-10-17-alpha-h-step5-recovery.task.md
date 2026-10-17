# Step 5 adjudication — group **h**, run `physics-remaining-80-2026-10-17`

You are the group Alpha for batches 2, 3, 25: 3 A/B pair(s), 6 page(s), 29 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/physics-remaining-80-2026-10-17-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/physics-remaining-80-2026-10-17-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **25**: `research/physics-remaining-80-2026-10-17-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-remaining-80-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `emg-mg02` | A | einstein-maxwell-models-mathematics | 439 | `emg-mg01`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `the-de-rham-theorem-and-degree`, `construction-of-r-via-cauchy-sequences`, `foundations-of-the-real-numbers`, `suprema-and-infima`, `metric-spaces`, `roots-and-rational-powers`, `the-logarithm-and-general-powers`, `countability-and-uncountability`, `limits-of-real-functions`, `sequences-and-limits`, `topology-of-r`, `smooth-manifolds-and-smooth-maps`, `morse-critical-points-hessians-and-indices`, `connections-levi-civita-and-parallel-transport`, `riemannian-metrics-length-distance-and-volume`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `the-inverse-function-theorem-completed`, `the-derivative-and-mean-value-theorems`, `the-zfc-axioms-and-basic-set-constructions`, `relations-functions-and-quotients`, `limsup-and-subsequential-limits`, `measures-and-their-basic-properties`, `measurable-functions-and-simple-approximation`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-fundamental-theorems-of-calculus`, `the-riemann-integral`, `properties-of-the-integral-and-the-working-ftc`, `the-total-derivative`, `the-complex-exponential-and-eulers-formula`, `fundamental-trigonometric-identities`, `complex-differentiability-and-cauchy-riemann`, `sigma-algebras-and-borel-sets`, `integration-of-forms-and-the-general-stokes-theorem` |
| 2 | `emg-mg02-examples` | B | einstein-maxwell-models-mathematics | 440 | `emg-mg02` |
| 3 | `emg-mg03` | A | einstein-maxwell-models-mathematics | 441 | `emg-mg02`, `gr-einstein-and-matter`, `subspaces-products-and-quotients`, `topological-spaces-and-continuity`, `construction-of-r-via-cauchy-sequences`, `countability-axioms-and-cardinal-functions`, `smooth-manifolds-and-smooth-maps`, `gr-framework-and-geometry`, `manifolds-with-boundary-collars-and-orientations`, `tensor-fields-exterior-algebra-and-differential-forms`, `vector-fields-flows-and-lie-derivatives`, `topology-of-r`, `countability-and-uncountability`, `compactness-in-metric-spaces`, `compactness`, `emg-mg01`, `gr-tensors-and-observers`, `gr-connections-and-free-fall`, `smooth-partitions-of-unity-and-exhaustions`, `integration-of-forms-and-the-general-stokes-theorem`, `the-riemann-integral-in-rn-and-jordan-content`, `properties-of-the-integral-and-the-working-ftc`, `fubini-and-change-of-variables`, `the-de-rham-theorem-and-degree`, `power-series-and-real-analytic-functions`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison` |
| 3 | `emg-mg03-examples` | B | einstein-maxwell-models-mathematics | 442 | `emg-mg03`, `the-divergence-theorem-and-classical-stokes` |
| 25 | `emg-s02` | A | einstein-maxwell-models | 485 | `emg-ms03`, `emg-s01` |
| 25 | `emg-s02-examples` | B | einstein-maxwell-models | 486 | `emg-s02` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `emg-mg02` — Local potentials and smooth circle-bundle connection data (14 item(s))

- `def-emg-finite-real-supremum-domain` · definition — Finite-real supremum and infimum domain
- `def-emg-real-metric-axiom-convention` · definition — Real metric and pseudometric convention
- `lem-emg-metric-axioms-imply-nonnegativity` · lemma — Metric nonnegativity from the three axioms
- `def-emg-explicit-power-regimes` · definition — Explicit rational and real power regimes
- `lem-emg-positive-square-root-smoothness` · lemma — The positive square-root branch is smooth
- `lem-emg-sequence-limit-criterion-with-choice` · lemma — Sequence-limit criterion with explicit choice use
- `def-emg-boundaryless-completeness-domain` · definition — Boundaryless domain for geometric completeness
- `def-emg-set-size-and-class-schema` · definition — Set-sized objects and definable-class schemas
- `def-emg-extended-pointwise-product` · definition — Extended pointwise product with zero at infinite factors
- `def-emg-lp-class-and-representative` · definition — Lp classes and explicit representatives
- `def-emg-local-potentials-and-circle-data` · definition — Local potentials and smooth circle-bundle connection data
- `lem-emg-local-potential-construction` · lemma — Radial primitives for closed one- and two-forms
- `lem-emg-circle-connection-gluing` · lemma — Circle gluing, curvature and connection variations
- `lem-emg-sphere-flux-holonomy` · lemma — Sphere winding, nonexact curvature and flat holonomy

### `emg-mg02-examples` — Local potentials and smooth circle-bundle connection data — Examples (1 item(s))

- `ex-emgmath-monopole-patch-flux` · example — Nonexact sphere flux and circle winding

### `emg-mg03` — Sourced Maxwell sign and current conservation (5 item(s))

- `lem-emg-scaled-three-torus-smooth` · lemma — The scaled three-torus as a smooth compact flat spatial manifold
- `lem-emg-maxwell-current-forms` · lemma — Sourced Maxwell sign and current conservation
- `lem-emg-maxwell-action-variation` · lemma — Compact potential and metric variation of the Maxwell action
- `lem-emg-gauss-finite-chain` · lemma — Gauss charge and finite-chain flux balance
- `lem-emg-maxwell-observer-stress` · lemma — Maxwell stress tensor in an observer frame

### `emg-mg03-examples` — Sourced Maxwell sign and current conservation — Examples (1 item(s))

- `ex-emgmath-compact-neutrality` · example — Compact boundaryless Gauss neutrality

### `emg-s02` — Harmonic static multicenter electrovac model (6 item(s))

- `pthm-emg-xs-geometric-to-si-model` · physics-theorem — Geometric electrovac data solve the selected SI equations
- `pthm-emg-xs-mp-model` · physics-theorem — Harmonic static multicenter electrovac model
- `pthm-emg-xs-mp-extremal` · physics-theorem — Single-center extremal charged model correspondence
- `pthm-emg-xs-br-model` · physics-theorem — Constant-radius charged product model
- `pthm-emg-xs-br-limit` · physics-theorem — Local SI model limit from extremal RN to Bertotti–Robinson
- `pthm-emg-xs-null-wave-model` · physics-theorem — Exact coupled electromagnetic null-wave model

### `emg-s02-examples` — Harmonic static multicenter electrovac model — Examples (2 item(s))

- `texp-emg-xs-null-curvature` · thought-experiment — Nonzero null-wave field and curvature with four specified scalar contractions vanishing
- `texp-emg-xs-two-center-model` · thought-experiment — Two-center ideal static charged configuration

## Your seams

Your pages depend on another group's:

- `emg-s02` requires `emg-ms03` (group l, batch 23)
- `emg-s02` requires `emg-s01` (group g, batch 24)

Another group's pages depend on yours:

- `emg-g02` (group f) requires your `emg-mg02`
- `emg-g03` (group f) requires your `emg-mg03`
- `emg-mg04` (group i) requires your `emg-mg03`
- `emg-mg04` (group i) requires your `emg-mg02`
- `emg-ms01` (group k) requires your `emg-mg03`
- `emg-ms01` (group k) requires your `emg-mg02`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-remaining-80-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-remaining-80-2026-10-17`

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
