# Step 5 adjudication — group **d**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 74, 75, 76: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **74**: `research/physics-cm-qm-gr-79-2026-10-11-batch-74-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **75**: `research/physics-cm-qm-gr-79-2026-10-11-batch-75-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **76**: `research/physics-cm-qm-gr-79-2026-10-11-batch-76-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-cm-qm-gr-79-2026-10-11-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 74 | `gr-linearized-waves` | A | general-relativity | 251 | `construction-of-r-via-cauchy-sequences`, `gr-local-and-global-energy`, `gr-flat-and-newtonian-bridges`, `gr-framework-and-geometry`, `gr-tensors-and-observers`, `gr-einstein-and-matter`, `gr-curvature-and-tides`, `gr-connections-and-free-fall` |
| 74 | `gr-linearized-waves-examples` | B | general-relativity | 252 | `gr-linearized-waves`, `gr-flat-and-newtonian-bridges`, `gr-framework-and-geometry`, `gr-tensors-and-observers` |
| 75 | `gr-causal-and-initial-value-boundaries` | A | general-relativity | 253 | `gr-einstein-and-matter`, `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus`, `bounded-variation-and-riemann-stieltjes`, `compactness`, `lie-subgroups-actions-and-homogeneous-spaces`, `differentiation-of-monotone-functions-and-the-vitali-covering-theorem`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers`, `gr-curvature-and-tides`, `the-lebesgue-integral-and-the-convergence-theorems` |
| 75 | `gr-causal-and-initial-value-boundaries-examples` | B | general-relativity | 254 | `gr-causal-and-initial-value-boundaries`, `gr-connections-and-free-fall`, `gr-framework-and-geometry`, `gr-tensors-and-observers` |
| 76 | `gr-experimental-interface` | A | general-relativity | 255 | `gr-homogeneous-cosmology`, `gr-linearized-waves`, `gr-spherical-vacuum-model`, `further-trigonometric-identities-and-inverses`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers` |
| 76 | `gr-experimental-interface-examples` | B | general-relativity | 256 | `gr-experimental-interface`, `gr-homogeneous-cosmology`, `gr-framework-and-geometry`, `gr-tensors-and-observers`, `gr-connections-and-free-fall` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gr-linearized-waves` — Linearized Waves (12 item(s))

- `def-gr-plane-wave-perturbation` · definition — Plane-wave perturbations of the flat linearization: planar profiles, wave covectors, amplitudes, TT form and the linearized field equations
- `def-gr-wave-screen-and-tt-projection` · definition — The wave screen of an observer and propagation direction, and the transverse-traceless projection of a symmetric two-tensor
- `lem-gr-null-phase-coordinate` · lemma — The phase coordinate u = x^0 - x^3 is null and profile functions are flat-harmonic and constant along its transport curves
- `lem-gr-tt-screen-projector` · lemma — The screen and spatial projectors are orthogonal projections of rank two and three, and the TT projection is the orthogonal projection onto the two-dimensional transverse-traceless space
- `lem-gr-plane-wave-gauge-decomposition` · lemma — Harmonic-gauge plane-wave amplitudes split uniquely into a pure plane-wave gauge part and a transverse-traceless representative, with a two-dimensional space of polarizations
- `thm-gr-tt-plane-wave-solutions` · theorem — TT plane waves with arbitrary bounded profiles solve the linearized vacuum equations, are in harmonic gauge, and give Lorentzian small-amplitude metrics with a quadratic Einstein-tensor residual
- `thm-gr-tt-plane-wave-curvature` · theorem — First-order curvature of the flat linearization and of TT plane waves, its gauge invariance and its contraction to the linearized Ricci tensor
- `pthm-gr-linearized-field-equations` · physics-theorem — Linearized field equations as the first-order consequence of the adopted field law, with the harmonic-gauge wave reduction and the quadratic residual control
- `def-gr-linearized-wave-regime-and-detector-coupling` · definition — The linearized-wave approximation regime and an ideal two-body detector with a prescribed finite arm path
- `pthm-gr-plane-wave-polarizations` · physics-theorem — Plane-wave polarizations of the linearized vacuum model: two phase coefficients for each of two polarization types
- `pthm-gr-plane-wave-tidal-detector-response` · physics-theorem — Response of ideal test bodies and of the ideal two-body detector to a TT plane wave: free-fall worldlines, first-order relative acceleration and strain
- `rem-gr-linearized-wave-scope-and-deferred` · remark — Scope, status and deferred material of the linearized-waves page: what the model predicts, what is idealization and what is not covered

### `gr-linearized-waves-examples` — Linearized Waves — Examples (5 item(s))

- `ex-gr-sinusoidal-tt-plane-wave` · example — An explicit sinusoidal TT plane wave: harmonic gauge, linearized vacuum equations, curvature components and detector strain
- `ex-gr-tt-screen-projection-computation` · example — Explicit screen projection of a symmetric spatial tensor: projection, transverse-traceless part, amplitudes and idempotence
- `ex-gr-plane-wave-regauge-to-tt` · example — Regauging an explicit harmonic-gauge plane-wave amplitude to transverse-traceless form
- `cex-gr-subluminal-planar-profile-not-a-vacuum-wave` · counterexample — A transverse-traceless planar profile travelling slower than light fails the linearized vacuum equations
- `cex-gr-half-trace-subtraction-on-the-rest-space` · counterexample — The half-trace subtraction with the rank-three spatial projector is not trace-free

### `gr-causal-and-initial-value-boundaries` — Causal And Initial Value Boundaries (22 item(s))

- `def-gr-causal-curves-and-reachability` · definition — Causal curves, chronological and causal reachability, and inextendibility
- `lem-gr-causal-curve-calculus` · lemma — Chart independence, concatenation, reparametrization and transitivity for causal curves
- `def-gr-causal-conditions-and-global-hyperbolicity` · definition — Chronology, causality, strong causality, global hyperbolicity and time functions
- `lem-gr-temporal-functions-and-time-functions` · lemma — Temporal functions are time functions, and time functions forbid closed causal curves
- `def-gr-spacelike-hypersurfaces-and-cauchy-sets` · definition — Spacelike hypersurfaces, acausal sets, Cauchy sets, domains of dependence and Cauchy horizons
- `def-gr-spacelike-initial-data-and-constraints` · definition — Spacelike initial data, the constraint equations, developments and maximal developments
- `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form` · lemma — The future unit normal, induced metric and second fundamental form of a spacelike hypersurface
- `lem-gr-constraint-projections` · lemma — The normal and normal-tangential projections of the field equation are the constraint equations
- `def-gr-geodesic-congruence-and-kinematics` · definition — Geodesic congruences and their expansion, shear and vorticity
- `lem-gr-kinematic-decomposition-identities` · lemma — Rest-space character of the kinematic fields and the double contraction of B
- `lem-gr-contracted-commutator-identity` · lemma — The commutator of covariant derivatives on a vector field and its contracted component identity
- `thm-gr-timelike-raychaudhuri-and-local-focusing` · theorem — The Raychaudhuri equation for a geodesic congruence and finite-time focusing
- `lem-gr-maximal-geodesics-and-extension` · lemma — Convergent causal ends are extendible, maximal geodesics have no limit, and Cauchy sets are acausal
- `lem-gr-constant-component-chart-flatness` · lemma — A chart with constant metric components has vanishing metric-selected Christoffel symbols and curvature
- `def-gr-flat-minkowski-model-and-inertial-charts` · definition — The flat model: Minkowski space R^4, its standard Lorentz form, inertial charts and cone sets
- `lem-gr-flat-inertial-cone-criterion-and-sums` · lemma — The causal cones of the flat model in inertial coordinates, and closure of the future cone under sums
- `lem-gr-flat-time-monotonicity-and-lipschitz-graphs` · lemma — Monotonicity of inertial time and the Lipschitz graph property for causal curves in the flat model
- `thm-gr-minkowski-cauchy-and-global-hyperbolicity` · theorem — The flat model is globally hyperbolic and its inertial level sets are Cauchy hypersurfaces
- `lem-gr-quotient-by-isometric-free-proper-action` · lemma — Quotients of Lorentzian manifolds by free proper isometric discrete actions
- `thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set` · theorem — The flat cylinder model: closed timelike curves, total viciousness and no Cauchy set
- `thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice` · theorem — The open flat slab: an incomplete timelike geodesic, a Cauchy slice and global hyperbolicity
- `rem-gr-causal-and-initial-value-scope` · remark — Scope and status of the causal and initial-value material: model conditions, predictions and deferred theorems

### `gr-causal-and-initial-value-boundaries-examples` — Causal And Initial Value Boundaries — Examples (6 item(s))

- `ex-gr-minkowski-level-sets-and-causal-double-cones` · example — Worked Minkowski slice: Cauchy level sets, causal double cones and the compact diamond
- `ex-gr-flat-slab-vertical-line-proper-time` · example — Worked vertical geodesics of the open flat slab: affine parameter, limit point and proper time
- `ex-gr-radial-focusing-in-flat-minkowski` · example — Sharp radial focusing in flat Minkowski space: equality in the Raychaudhuri bound without a singularity
- `cex-gr-flat-cylinder-has-a-closed-timelike-curve` · counterexample — A flat time-oriented Lorentzian four-manifold with a closed timelike curve
- `cex-gr-spacelike-hypersurface-need-not-be-cauchy` · counterexample — A spacelike hypersurface of a globally hyperbolic model that is not a Cauchy hypersurface
- `cex-gr-achronal-set-need-not-be-acausal` · counterexample — An achronal set that is not acausal: two null-related points

### `gr-experimental-interface` — Experimental Interface (3 item(s))

- `def-gr-observation-and-analysis-architecture` · definition — Model configurations, interface readouts, operational models, data records and the analysis vocabulary of the experiment interface
- `lem-gr-reciprocal-ratio-window` · lemma — The reciprocal ratio map $a\mapsto a_*/a$: strict decrease, inverse, and the exact preimages of points and closed intervals
- `rem-gr-primary-report-research-queue` · remark — Primary-report research queue for the gravitational framework: redshift, propagation delay, light deflection, perihelion advance, binary timing and interferometric strain

### `gr-experimental-interface-examples` — Experimental Interface — Examples (2 item(s))

- `ex-gr-cosmological-redshift-interface-record-window` · example — Worked instance of the interface vocabulary on the cosmological redshift slot: an explicit de Sitter ray family, an operational model and the exact window of an illustrative bounded record
- `cex-gr-bounded-redshift-record-does-not-identify-the-parameter` · counterexample — Counterexample: a bounded one-point record of the cosmological redshift slot does not determine the emitter scale factor

## Your seams

Your pages depend on another group's:

- `gr-linearized-waves` requires `gr-local-and-global-energy` (group b, batch 70)
- `gr-linearized-waves` requires `gr-flat-and-newtonian-bridges` (group c, batch 71)
- `gr-linearized-waves` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-linearized-waves` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-linearized-waves` requires `gr-einstein-and-matter` (group b, batch 69)
- `gr-linearized-waves` requires `gr-curvature-and-tides` (group b, batch 68)
- `gr-linearized-waves` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-linearized-waves-examples` requires `gr-flat-and-newtonian-bridges` (group c, batch 71)
- `gr-linearized-waves-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-linearized-waves-examples` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-causal-and-initial-value-boundaries` requires `gr-einstein-and-matter` (group b, batch 69)
- `gr-causal-and-initial-value-boundaries` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-causal-and-initial-value-boundaries` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-causal-and-initial-value-boundaries` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-causal-and-initial-value-boundaries` requires `gr-curvature-and-tides` (group b, batch 68)
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-experimental-interface` requires `gr-homogeneous-cosmology` (group c, batch 73)
- `gr-experimental-interface` requires `gr-spherical-vacuum-model` (group c, batch 72)
- `gr-experimental-interface` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-experimental-interface` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-experimental-interface` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-experimental-interface-examples` requires `gr-homogeneous-cosmology` (group c, batch 73)
- `gr-experimental-interface-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-experimental-interface-examples` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-experimental-interface-examples` requires `gr-connections-and-free-fall` (group a, batch 67)

Another group's pages depend on yours:

- `gr-gr13-convex-normal-neighborhoods` (group e) requires your `gr-causal-and-initial-value-boundaries`
- `gr-gr13-convex-normal-neighborhoods-examples` (group e) requires your `gr-causal-and-initial-value-boundaries`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `gr-causal-and-initial-value-boundaries`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` (group e) requires your `gr-causal-and-initial-value-boundaries`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples` (group e) requires your `gr-causal-and-initial-value-boundaries`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-cm-qm-gr-79-2026-10-11-judge.jsonl` yourself before reporting nothing to do —
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

# Historical Step-5 closure recovery, `physics-cm-qm-gr-79-2026-10-11`

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
