# Step 5 adjudication — group **m**, run `advanced-qft-supersymmetry-build-2026-10-23`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 29 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `aqft-susy-math-foundations` | A | quantum-field-theory-mathematics | 957 | `hilbert-space-geometry-and-riesz-representation`, `spectral-measures-and-borel-functional-calculus`, `unbounded-self-adjoint-operators-and-stones-theorem`, `field-extensions-and-the-complex-numbers`, `countability-and-uncountability`, `foundations-of-the-real-numbers`, `orthonormal-bases-parseval-and-fourier-series`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `the-exponential-function` |
| 1 | `aqft-susy-math-foundations-examples` | B | quantum-field-theory-mathematics | 957 | `aqft-susy-math-foundations`, `foundations-of-the-real-numbers`, `hilbert-space-geometry-and-riesz-representation`, `countability-and-uncountability`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| 2 | `qftx-gauge-geometry` | A | quantum-field-theory-mathematics | 958 | `lie-groups-invariant-fields-and-the-exponential-map`, `lie-algebra-representations-enveloping-algebras-and-pbw`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `gauge-groups-and-representation-theory-interfaces`, `lie-subgroups-actions-and-homogeneous-spaces`, `countability-and-uncountability`, `the-group-algebra-and-representations`, `tangent-cotangent-and-the-differential`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `vector-fields-flows-and-lie-derivatives` |
| 2 | `qftx-gauge-geometry-examples` | B | quantum-field-theory-mathematics | 958 | `qftx-gauge-geometry`, `countability-and-uncountability`, `gauge-groups-and-representation-theory-interfaces`, `lie-groups-invariant-fields-and-the-exponential-map`, `compactness-in-metric-spaces` |
| 3 | `qftx-gauge-slice-mathematics` | A | quantum-field-theory-mathematics | 959 | `fubini-and-change-of-variables`, `inverse-and-implicit-function-theorems`, `qftx-gauge-geometry`, `qftx-sobolev-gauge-orbit-geometry`, `qftx-irreducible-connection-topology`, `qftx-gauge-group-sphere-homotopy`, `smooth-partitions-of-unity-and-exhaustions`, `countability-and-uncountability`, `lie-groups-invariant-fields-and-the-exponential-map`, `gauge-groups-and-representation-theory-interfaces`, `relations-functions-and-quotients` |
| 3 | `qftx-gauge-slice-mathematics-examples` | B | quantum-field-theory-mathematics | 959 | `qftx-gauge-slice-mathematics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `aqft-susy-math-foundations` — Super-Poincare Algebra and Positive Hilbert Representations (12 item(s))

- `def-qftx-super-poincare-algebra-4d` · definition — Four-dimensional real extended super-Poincare algebra
- `lem-qftx-super-poincare-graded-jacobi` · lemma — Graded Jacobi and real-form verification for the extended super-Poincare algebra
- `def-qftx-unitary-super-poincare-representation` · definition — Positive unitary super-Poincare representation with spectral-domain covariance
- `thm-qftx-supermultiplet-mass-degeneracy` · theorem — Mass is constant on an irreducible positive super-Poincare representation
- `thm-qftx-n-extended-central-charge-bounds` · theorem — Positive central-charge bounds on a massive rest representation fiber
- `def-qftx-superspace-grassmann-algebra` · definition — Four-dimensional N=1 superspace Grassmann algebra and Berezin integration
- `lem-qftx-grassmann-coefficient-calculus` · lemma — Associativity and coefficient calculus for the finite superspace Grassmann algebra
- `def-qftx-n1-chiral-superfield` · definition — Four-dimensional N=1 chiral superfield on flat superspace
- `lem-qftx-n1-chiral-superspace-identities` · lemma — Chiral-coordinate solution and supersymmetry covariance
- `lem-qftx-supercharge-positive-energy-pairing` · lemma — Positive-energy eigenspaces pair under an odd self-adjoint supercharge
- `def-qftx-graded-trace-class-index-data` · definition — Pure-point graded trace-class index data
- `thm-qftx-witten-index-beta-independence` · theorem — Beta independence of the pure-point supersymmetric heat supertrace

### `aqft-susy-math-foundations-examples` — Super-Poincare Algebra and Positive Hilbert Representations — Examples (4 item(s))

- `ex-qftx-n1-supercharge-oscillator` · example — Two-mode fermionic oscillator for the N=1 rest algebra
- `ex-qftx-n2-shortened-rest-fiber` · example — Explicit N=2 shortened rest fiber at central-charge saturation
- `ex-qftx-berezin-coefficient-extraction` · example — Ordered Berezin integral detects a sign in a permuted top monomial
- `ex-qftx-finite-witten-index-cancellation` · example — Finite positive-energy pair cancels from a nonzero Witten index

### `qftx-gauge-geometry` — Non-Abelian Principal-Connection Forms and Curvature (5 item(s))

- `def-qftx-nonabelian-gauge-data` · definition — Non-Abelian gauge data and bundle sectors
- `def-qftx-principal-connection-form` · definition — Principal connection 1-form from a horizontal distribution
- `def-qftx-lie-algebra-valued-form-bracket` · definition — Graded bracket of Lie-algebra-valued differential forms
- `lem-qftx-principal-curvature-cartan-bianchi` · lemma — Principal curvature, Cartan structure equation, and Bianchi identity
- `def-qftx-associated-covariant-derivative` · definition — Covariant derivative on an associated representation bundle

### `qftx-gauge-geometry-examples` — Non-Abelian Principal-Connection Forms and Curvature — Examples (2 item(s))

- `ex-qftx-su2-flat-pure-gauge-connection` · example — A nonzero pure-gauge potential with zero curvature
- `ex-qftx-su2-noncommuting-curvature` · example — Constant noncommuting potentials with nonzero curvature

### `qftx-gauge-slice-mathematics` — Local Gauge Slices and Faddeev–Popov Jacobians (4 item(s))

- `def-qftx-gauge-slice-and-faddeev-popov-operator` · definition — Finite-dimensional gauge slices and Faddeev–Popov operators
- `thm-qftx-local-faddeev-popov-slice-jacobian` · theorem — Local Faddeev–Popov slice Jacobian and orbit-intersection count
- `lem-qftx-smooth-principal-connection-exists` · lemma — Existence of a smooth principal connection on a compact SU(N) bundle
- `thm-qftx-singer-global-gauge-section-obstruction` · theorem — Singer obstruction to a global continuous gauge representative

### `qftx-gauge-slice-mathematics-examples` — Local Gauge Slices and Faddeev–Popov Jacobians — Examples (2 item(s))

- `ex-qftx-translation-gauge-slice-jacobian` · example — Translation action with a unit Faddeev–Popov Jacobian
- `ex-qftx-so2-gauge-slice-multiplicity` · example — SO(2) orbit with two slice intersections and a stabilizer at the origin

## Your seams

Your pages depend on another group's:

- `qftx-gauge-slice-mathematics` requires `qftx-sobolev-gauge-orbit-geometry` (group s, batch 56)
- `qftx-gauge-slice-mathematics` requires `qftx-irreducible-connection-topology` (group s, batch 57)
- `qftx-gauge-slice-mathematics` requires `qftx-gauge-group-sphere-homotopy` (group t, batch 58)

Another group's pages depend on yours:

- `qftx-nonabelian-yang-mills-model` (group a) requires your `qftx-gauge-geometry`
- `qftx-nonabelian-yang-mills-model-examples` (group a) requires your `qftx-gauge-geometry`
- `qftx-gauge-fixed-perturbation` (group a) requires your `qftx-gauge-slice-mathematics`
- `qftx-gauge-fixed-perturbation` (group a) requires your `qftx-gauge-geometry`
- `qftx-gauge-fixed-perturbation-examples` (group a) requires your `qftx-gauge-slice-mathematics`
- `qftx-yang-mills-instanton-physics` (group a) requires your `qftx-gauge-geometry`
- `aqft-eft-foundations` (group b) requires your `qftx-gauge-geometry`
- `aqft-eft-operators` (group b) requires your `qftx-gauge-geometry`
- `aqft-eft-operators-examples` (group b) requires your `qftx-gauge-geometry`
- `aqft-smeft-heft` (group c) requires your `qftx-gauge-geometry`
- `qftx-susy-algebra-and-multiplets` (group d) requires your `aqft-susy-math-foundations`
- `qftx-susy-algebra-and-multiplets-examples` (group d) requires your `aqft-susy-math-foundations`
- `qftx-susy-n1-superspace-and-actions` (group d) requires your `aqft-susy-math-foundations`
- `qftx-susy-n1-superspace-and-actions` (group d) requires your `qftx-gauge-geometry`
- `qftx-susy-n1-superspace-and-actions-examples` (group d) requires your `qftx-gauge-geometry`
- `qftx-susy-extended-actions` (group d) requires your `aqft-susy-math-foundations`
- `qftx-susy-ward-and-nonrenormalization` (group e) requires your `aqft-susy-math-foundations`
- `qftx-susy-moduli-and-dualities` (group e) requires your `aqft-susy-math-foundations`
- `qftx-susy-breaking-and-phenomenology` (group e) requires your `aqft-susy-math-foundations`
- `qftx-p-form-symmetries` (group f) requires your `qftx-gauge-geometry`
- `qftx-p-form-symmetries-examples` (group f) requires your `qftx-gauge-geometry`
- `qftx-global-anomalies-inflow` (group h) requires your `qftx-gauge-geometry`
- `aqft-susy-effective-theories` (group i) requires your `aqft-susy-math-foundations`
- `aqft-susy-effective-theories-examples` (group i) requires your `aqft-susy-math-foundations`
- `qftx-bps-solitons-monopoles` (group k) requires your `qftx-gauge-geometry`
- `qftx-bps-indices` (group l) requires your `aqft-susy-math-foundations`
- `qftx-nonabelian-brst-bv-mathematics` (group n) requires your `qftx-gauge-geometry`
- `qftx-instanton-topology-mathematics` (group n) requires your `qftx-gauge-geometry`
- `qftx-nonabelian-lattice-mathematics` (group n) requires your `qftx-gauge-geometry`
- `qftx-eft-operator-quotients` (group r) requires your `aqft-susy-math-foundations`
- `qftx-sobolev-gauge-orbit-geometry` (group s) requires your `qftx-gauge-geometry`
- `qftx-adhm-zero-fi-asd-correspondence` (group t) requires your `qftx-gauge-geometry`

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
