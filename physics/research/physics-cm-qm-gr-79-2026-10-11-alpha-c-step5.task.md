# Step 5 adjudication — group **c**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 71, 72, 73: 3 A/B pair(s), 6 page(s), 72 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **71**: `research/physics-cm-qm-gr-79-2026-10-11-batch-71-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **72**: `research/physics-cm-qm-gr-79-2026-10-11-batch-72-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **73**: `research/physics-cm-qm-gr-79-2026-10-11-batch-73-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 71 | `gr-flat-and-newtonian-bridges` | A | general-relativity | 245 | `gr-einstein-and-matter`, `compactness`, `darboux-lhopital-and-taylor`, `the-divergence-theorem-and-classical-stokes`, `volumes-of-elementary-solids-and-solids-of-revolution`, `wave-equation-representation-formulas`, `gr-framework-and-geometry`, `gr-tensors-and-observers`, `gr-connections-and-free-fall`, `gr-curvature-and-tides` |
| 71 | `gr-flat-and-newtonian-bridges-examples` | B | general-relativity | 246 | `gr-flat-and-newtonian-bridges`, `lie-subgroups-actions-and-homogeneous-spaces`, `group-actions-and-cayleys-theorem`, `gr-curvature-and-tides`, `gr-framework-and-geometry`, `gr-einstein-and-matter`, `gr-connections-and-free-fall`, `gr-tensors-and-observers` |
| 72 | `gr-spherical-vacuum-model` | A | general-relativity | 247 | `gr-flat-and-newtonian-bridges`, `gr-local-and-global-energy`, `hausdorff-via-the-diagonal`, `riemannian-metrics-length-distance-and-volume`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers`, `gr-curvature-and-tides`, `gr-einstein-and-matter` |
| 72 | `gr-spherical-vacuum-model-examples` | B | general-relativity | 248 | `gr-spherical-vacuum-model`, `the-exponential-function`, `gr-tensors-and-observers`, `gr-framework-and-geometry` |
| 73 | `gr-homogeneous-cosmology` | A | general-relativity | 249 | `gr-einstein-and-matter`, `riemannian-metrics-length-distance-and-volume`, `riemann-curvature-and-riemannian-submanifolds`, `the-exponential-function`, `riemannian-comparison-theorems`, `the-seifert-van-kampen-theorem`, `the-fundamental-group`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `connections-levi-civita-and-parallel-transport`, `connectedness`, `the-derivative-and-mean-value-theorems`, `the-logarithm-and-general-powers`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers`, `gr-curvature-and-tides` |
| 73 | `gr-homogeneous-cosmology-examples` | B | general-relativity | 250 | `gr-homogeneous-cosmology`, `construction-of-r-via-cauchy-sequences`, `gr-framework-and-geometry`, `gr-tensors-and-observers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gr-flat-and-newtonian-bridges` — Flat And Newtonian Bridges (18 item(s))

- `def-gr-minkowski-model-and-inertial-chart` · definition — The flat model spacetime: the Minkowski metric on R^4 and its inertial chart
- `lem-gr-flat-model-connection-curvature-and-geodesics` · lemma — The flat model: vanishing connection and curvature, translation Killing fields and straight geodesics
- `def-gr-flat-linearized-perturbation` · definition — Flat linearized perturbations: families, trace reversal, gauge transformation and harmonic gauge
- `thm-gr-flat-linearized-curvature-and-gauge` · theorem — First-order curvature of a flat linearized family, gauge transformations and the quadratic remainder
- `thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge` · theorem — All-space smooth wave equation with zero data, and harmonic gauge on flat space
- `def-gr-stationary-weak-field-data` · definition — Stationary weak-field data: the diagonal ansatz, its bounds, stationarity and the Einstein-family condition
- `lem-gr-weak-field-admissibility-and-inverse-bounds` · lemma — Stationarity, timelikeness and uniform inverse-metric bounds for stationary weak-field data
- `lem-gr-weak-field-christoffel-bounds` · lemma — Uniform Christoffel-symbol bounds for stationary weak-field data
- `thm-gr-weak-field-einstein-stress-hierarchy` · theorem — The weak-field Einstein hierarchy: linearized Einstein tensor, stress components and the Poisson equation
- `lem-gr-weak-field-geodesic-acceleration` · lemma — Coordinate-time acceleration of weak-field geodesics: the Newtonian leading term with uniform error
- `thm-gr-weak-field-scaled-trajectory-limit` · theorem — Scaled trajectory limit: weak-field geodesics converge to the Newtonian system at rate O(epsilon)
- `lem-gr-observer-relative-velocity-expansions` · lemma — Low-velocity expansions of observer energy and momentum with uniform error bounds
- `thm-gr-vanishing-curvature-implies-locally-minkowski` · theorem — Vanishing curvature on a normal neighborhood is a local isometry to Minkowski space
- `def-gr-newtonian-comparison-model-and-identification` · definition — The Newtonian comparison model and the weak-field correspondence identification
- `pthm-gr-minkowski-vacuum-model` · physics-theorem — The Minkowski vacuum model with Lambda = 0: field law, free-fall kinematics and clock readings
- `pthm-gr-uniform-weak-slow-correspondence` · physics-theorem — The controlled weak-field slow-motion correspondence with the Newtonian comparison model
- `rem-gr-local-flatness-versus-global-flatness` · remark — Local flatness at a point, vanishing curvature and global Minkowski geometry are three different statements
- `rem-gr-flat-bridge-scope-and-limits` · remark — Scope and empirical status of the flat and Newtonian bridge page

### `gr-flat-and-newtonian-bridges-examples` — Flat And Newtonian Bridges — Examples (7 item(s))

- `ex-gr-linearized-curvature-of-the-diagonal-perturbation` · example — First-order curvature of the diagonal perturbation h_00 = -2 phi, h_ij = -2 phi delta_ij for the explicit potential phi = |x|^2/2
- `ex-gr-minkowski-free-fall-and-clock-identities` · example — Straight timelike geodesics of the flat model: constant coordinate velocity, four-velocity and the clock-reading identity
- `ex-gr-observer-velocity-expansion-numeric-check` · example — An exact observer-relative energy and momentum computation at relative speed c/2, with the expansion bounds of the low-velocity lemma checked by exact rational comparison
- `ex-gr-weak-field-poisson-quadratic-potential` · example — Explicit stationary weak-field data with a dimensionless quadratic potential: exact Poisson source and the first-order Einstein coefficient
- `ex-gr-scaled-newtonian-harmonic-trajectory` · example — The scaled Newtonian comparison system for the quadratic potential: explicit harmonic solutions, a compact convex range and the hypotheses of the scaled trajectory theorem
- `cex-gr-first-order-vacuum-is-not-exact-vacuum` · counterexample — A first-order vacuum family whose exact metric has nonzero Ricci tensor at order epsilon^2: a harmonic diagonal perturbation with phi = x^1
- `cex-gr-flat-quotient-is-not-globally-minkowski` · counterexample — A flat Lorentzian four-manifold that is not isometric to Minkowski space: the rolled-up flat model R^4 / Z by a timelike translation

### `gr-spherical-vacuum-model` — Spherical Vacuum Model (21 item(s))

- `def-gr-schwarzschild-exterior-model` · definition — The Schwarzschild exterior model datum: domain, metric, mass parameter and time orientation
- `lem-gr-schwarzschild-metric-properties` · lemma — The Schwarzschild exterior datum is a smooth time-oriented Lorentzian four-manifold
- `lem-gr-schwarzschild-christoffel-symbols` · lemma — Christoffel symbols of the Schwarzschild exterior metric in product charts
- `lem-gr-schwarzschild-ricci-and-einstein-tensors` · lemma — Curvature components and the vanishing of the Ricci and Einstein tensors of the Schwarzschild exterior metric
- `lem-gr-schwarzschild-curvature-and-kretschmann-scalar` · lemma — Orthonormal-frame curvature components and the Kretschmann scalar 12s^2/r^6 of the Schwarzschild exterior metric
- `lem-gr-schwarzschild-extension-chart` · lemma — Smooth horizon-crossing extension of the Schwarzschild exterior metric in the advanced chart
- `lem-gr-schwarzschild-isotropic-coordinate-form` · lemma — The isotropic coordinate form of the Schwarzschild exterior metric and the isothermal radius shift
- `lem-gr-schwarzschild-static-congruence-and-clock-rates` · lemma — The static observer congruence of the Schwarzschild exterior model: unit field, integral curves, acceleration and clock-rate ratios
- `lem-gr-schwarzschild-timelike-geodesic-reduction` · lemma — Conserved quantities and equatorial radial reduction of timelike geodesics of the Schwarzschild exterior model
- `lem-gr-schwarzschild-circular-orbits-and-photon-sphere` · lemma — Circular timelike geodesics, their radial-potential stability threshold, and the photon sphere at r = 3s/2
- `def-gr-kruskal-model-data` · definition — The Kruskal model datum: domain, implicit radial function, metric and time orientation
- `lem-gr-kruskal-model-properties` · lemma — Kruskal model properties: smooth radial function, Lorentzian metric, four-region isometries, vacuum and Kretschmann scalar
- `lem-gr-kruskal-causal-escape-and-trapping` · lemma — The causal cone, the escape horizon and decreasing areal radius in the Kruskal model
- `lem-gr-warped-spherical-christoffel-and-ricci` · lemma — The warped product of a two-dimensional Lorentzian base with a round sphere: Christoffel symbols and Ricci tensor
- `lem-gr-warped-base-vacuum-reduction` · lemma — Two-dimensional base identities for the warped spherical metric: pure-trace Ricci, the vacuum reduction and the extra Killing field
- `thm-gr-local-birkhoff-warped-product` · theorem — Local Birkhoff theorem: a vacuum warped product with a round sphere factor is locally Schwarzschild with an extra Killing field
- `pthm-gr-schwarzschild-vacuum-model` · physics-theorem — The Schwarzschild exterior vacuum model: field law, static clock readings and the mass parameter
- `pthm-gr-schwarzschild-stationary-redshift` · physics-theorem — Restricted redshift prediction of the Schwarzschild vacuum model: the observer-energy ratio between static observers
- `pthm-gr-schwarzschild-circular-orbit-predictions` · physics-theorem — Restricted geodesic predictions of the Schwarzschild vacuum model: circular free-fall orbits, the stability threshold and the photon sphere
- `rem-gr-schwarzschild-horizon-and-singularity` · remark — Horizon versus singularity in the Schwarzschild model: a chart breakdown, a smooth null surface and a curvature obstruction
- `rem-gr-schwarzschild-scope-and-limits` · remark — Scope and status of the spherical vacuum model page

### `gr-spherical-vacuum-model-examples` — Spherical Vacuum Model — Examples (6 item(s))

- `ex-gr-schwarzschild-isotropic-weak-field-comparison` · example — Explicit isotropic-to-areal conversion and the second-order coefficient mismatch of the Schwarzschild exterior
- `ex-gr-schwarzschild-static-clock-ratio-explicit` · example — Explicit static clock-rate ratios of the Schwarzschild exterior at r = 2s and r = 4s
- `ex-gr-schwarzschild-circular-orbit-thresholds-explicit` · example — Explicit circular-orbit data of the Schwarzschild exterior at the ISCO radius 3s and the photon-sphere radius 3s/2
- `ex-gr-schwarzschild-extension-horizon-data` · example — Explicit metric, orientation and curvature data of the advanced-chart extension at the horizon r = s
- `ex-gr-kruskal-cone-and-radial-values` · example — Explicit causal-cone and radial-derivative checks in the Kruskal model at the horizon for s = 1 m
- `cex-gr-exterior-charts-do-not-cover-the-extension` · counterexample — The exterior Schwarzschild charts do not cover the horizon-crossing extension: the regular horizon point (v, r) = (0, s)

### `gr-homogeneous-cosmology` — Homogeneous Cosmology (16 item(s))

- `lem-gr-constant-rescaling-preserves-levi-civita-and-curvature` · lemma — Constant metric rescaling preserves the connection and Ricci tensor and inversely scales scalar and sectional curvature
- `def-gr-flrw-spatial-model` · definition — The constant-curvature spatial model of a homogeneous cosmology
- `lem-gr-constant-curvature-three-manifold-ricci` · lemma — Constant-curvature three-manifolds: equivalence of constant sectional curvature, the tensor identity and the Ricci condition
- `def-gr-flrw-model-data` · definition — FLRW model data: warped product metric, cosmic time, comoving congruence, scale factor and Hubble parameter
- `lem-gr-flrw-metric-and-comoving-data` · lemma — The FLRW metric is smooth Lorentzian; comoving curves are unit-speed observers and cosmic time is their proper time; the slices carry the scaled spatial metric
- `lem-gr-flrw-christoffel-symbols` · lemma — Christoffel symbols of the FLRW metric in product charts
- `lem-gr-flrw-comoving-congruence-expansion` · lemma — The comoving congruence is geodesic; its expansion is three Hubble parameters per unit conversion constant
- `lem-gr-flrw-ricci-and-einstein-tensors` · lemma — Ricci, scalar and Einstein tensors of the FLRW metric in product charts
- `def-gr-flrw-friedmann-system` · definition — The Friedmann, acceleration and continuity equations of an FLRW model datum
- `prop-gr-flrw-equation-equivalences` · proposition — Equivalence of the Friedmann and acceleration systems, and the derivation of acceleration from Friedmann and continuity where the Hubble parameter does not vanish
- `post-gr-flrw-homogeneous-cosmological-model` · postulate — Adopted homogeneous and isotropic cosmological model with a comoving perfect fluid
- `pthm-gr-flrw-field-equations-reduction` · physics-theorem — Reduction of the field equations of the homogeneous cosmological model to the Friedmann and acceleration equations, with derived continuity
- `pthm-gr-flrw-power-law-solutions` · physics-theorem — The flat barotropic power-law solutions of the homogeneous cosmological field equations
- `pthm-gr-flrw-de-sitter-solutions` · physics-theorem — An expanding flat vacuum solution for positive cosmological parameter and non-existence for negative parameter
- `pthm-gr-flrw-cosmological-redshift` · physics-theorem — Cosmological redshift: the observer-energy ratio of a null geodesic between comoving observers is the inverse scale-factor ratio
- `rem-gr-flrw-observation-and-model-dependence` · remark — Scope and empirical status of the homogeneous cosmological model: model predictions, reported observations and statistical inference are distinct

### `gr-homogeneous-cosmology-examples` — Homogeneous Cosmology — Examples (4 item(s))

- `ex-gr-flrw-flat-power-law-check` · example — Direct check of the flat power-law data against the Friedmann-system equations
- `ex-gr-flrw-de-sitter-system-check` · example — Direct check of the flat vacuum data with a cosmological parameter against the Friedmann-system equations
- `cex-gr-flrw-static-matter-not-a-flat-solution` · counterexample — A static flat matter datum satisfying the spatial-component and continuity equations but not the Friedmann equation
- `ex-gr-flrw-redshift-conservation-check` · example — An explicit null geodesic in an exponentially expanding flat FLRW datum: constant aV^t and the observer-energy ratio

## Your seams

Your pages depend on another group's:

- `gr-flat-and-newtonian-bridges` requires `gr-einstein-and-matter` (group b, batch 69)
- `gr-flat-and-newtonian-bridges` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-flat-and-newtonian-bridges` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-flat-and-newtonian-bridges` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-flat-and-newtonian-bridges` requires `gr-curvature-and-tides` (group b, batch 68)
- `gr-flat-and-newtonian-bridges-examples` requires `gr-curvature-and-tides` (group b, batch 68)
- `gr-flat-and-newtonian-bridges-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-flat-and-newtonian-bridges-examples` requires `gr-einstein-and-matter` (group b, batch 69)
- `gr-flat-and-newtonian-bridges-examples` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-flat-and-newtonian-bridges-examples` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-spherical-vacuum-model` requires `gr-local-and-global-energy` (group b, batch 70)
- `gr-spherical-vacuum-model` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-spherical-vacuum-model` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-spherical-vacuum-model` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-spherical-vacuum-model` requires `gr-curvature-and-tides` (group b, batch 68)
- `gr-spherical-vacuum-model` requires `gr-einstein-and-matter` (group b, batch 69)
- `gr-spherical-vacuum-model-examples` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-spherical-vacuum-model-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-homogeneous-cosmology` requires `gr-einstein-and-matter` (group b, batch 69)
- `gr-homogeneous-cosmology` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-homogeneous-cosmology` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-homogeneous-cosmology` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-homogeneous-cosmology` requires `gr-curvature-and-tides` (group b, batch 68)
- `gr-homogeneous-cosmology-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-homogeneous-cosmology-examples` requires `gr-tensors-and-observers` (group a, batch 66)

Another group's pages depend on yours:

- `gr-linearized-waves` (group d) requires your `gr-flat-and-newtonian-bridges`
- `gr-linearized-waves-examples` (group d) requires your `gr-flat-and-newtonian-bridges`
- `gr-experimental-interface` (group d) requires your `gr-homogeneous-cosmology`
- `gr-experimental-interface` (group d) requires your `gr-spherical-vacuum-model`
- `gr-experimental-interface-examples` (group d) requires your `gr-homogeneous-cosmology`

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

# Step 5 batch adjudication, `physics-cm-qm-gr-79-2026-10-11`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
