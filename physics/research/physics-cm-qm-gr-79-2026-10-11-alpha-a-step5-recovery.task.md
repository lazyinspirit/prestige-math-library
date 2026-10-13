# Step 5 adjudication — group **a**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 65, 66, 67: 3 A/B pair(s), 6 page(s), 63 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **65**: `research/physics-cm-qm-gr-79-2026-10-11-batch-65-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **66**: `research/physics-cm-qm-gr-79-2026-10-11-batch-66-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **67**: `research/physics-cm-qm-gr-79-2026-10-11-batch-67-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 65 | `gr-framework-and-geometry` | A | general-relativity | 233 | `countability-and-uncountability`, `dual-spaces-bilinear-forms-and-inertia`, `linear-independence-bases-and-dimension`, `rn-as-a-normed-space`, `the-inverse-function-theorem-completed`, `the-total-derivative`, `vector-fields-flows-and-lie-derivatives`, `connectedness`, `inner-product-spaces-and-orthogonality`, `matrices-and-the-matrix-of-a-linear-map`, `smooth-manifolds-and-smooth-maps`, `tangent-cotangent-and-the-differential`, `the-determinant-of-a-linear-operator`, `topological-spaces-and-continuity`, `connections-levi-civita-and-parallel-transport`, `sr-spacetime-primitives`, `monotone-sequences-and-cauchy-completeness`, `the-logarithm-and-general-powers`, `properties-of-the-integral-and-the-working-ftc`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `riemann-curvature-and-riemannian-submanifolds` |
| 65 | `gr-framework-and-geometry-examples` | B | general-relativity | 234 | `gr-framework-and-geometry`, `geodesics-the-exponential-map-completeness-and-hopf-rinow` |
| 66 | `gr-tensors-and-observers` | A | general-relativity | 235 | `gr-framework-and-geometry`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `roots-and-rational-powers`, `the-exterior-derivative-and-cartan-calculus` |
| 66 | `gr-tensors-and-observers-examples` | B | general-relativity | 236 | `gr-tensors-and-observers`, `gr-framework-and-geometry` |
| 67 | `gr-connections-and-free-fall` | A | general-relativity | 237 | `gr-tensors-and-observers`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `improper-integrals`, `inverse-and-implicit-function-theorems`, `monotone-sequences-and-cauchy-completeness`, `picard-lindelof-and-first-order-odes`, `properties-of-the-integral-and-the-working-ftc`, `rank-theorems-and-embedded-submanifolds`, `smooth-partitions-of-unity-and-exhaustions`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-logarithm-and-general-powers`, `gr-framework-and-geometry`, `rn-as-a-normed-space`, `compactness-in-metric-spaces`, `the-fundamental-theorems-of-calculus` |
| 67 | `gr-connections-and-free-fall-examples` | B | general-relativity | 238 | `gr-connections-and-free-fall`, `gr-framework-and-geometry` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gr-framework-and-geometry` — Framework And Geometry (15 item(s))

- `def-gr-smooth-covariant-two-tensor-field` · definition — Smooth covariant 2-tensor fields on a smooth manifold
- `lem-gr-covariant-two-tensor-transformation-law` · lemma — Chart independence and the transformation law of a smooth covariant 2-tensor field
- `def-gr-smooth-lorentzian-objects` · definition — Smooth time-oriented Lorentzian four-manifolds: the geometric objects of the model
- `def-gr-inverse-metric-and-musical-isomorphisms` · definition — The inverse metric, musical isomorphisms and index raising
- `lem-gr-inverse-metric-is-smooth` · lemma — Smoothness and transformation of the inverse-metric components
- `def-gr-metric-selected-connection` · definition — Metric compatibility, torsion freedom and the metric-selected connection class
- `def-gr-si-unit-and-coordinate-conventions` · definition — SI unit and coordinate conventions of the classical gravitational framework
- `lem-gr-future-causal-classification-by-a-timelike-field` · lemma — Classification of future and past causal vectors by a timelike field
- `lem-gr-connection-conditions-in-chart-components` · lemma — Torsion freedom and metric compatibility in chart components
- `def-gr-stress-energy-tensor-field` · definition — Stress-energy tensor field of a model
- `def-gr-energy-conditions` · definition — The pointwise energy conditions WEC, NEC, DEC and SEC
- `lem-gr-timelike-fields-define-equal-or-opposite-future-cones` · lemma — Two time orientations agree or are opposite on each connected set
- `post-gr-spacetime-and-classical-domain` · postulate — Adopted spacetime model and classical domain of the gravitational framework
- `post-gr-field-and-matter-assumptions` · postulate — Adopted matter-content assumptions: fields, equations, stress-energy and energy conditions
- `rem-gr-primitive-and-derived-status` · remark — Primitive, adopted and derived status of the objects of the framework page

### `gr-framework-and-geometry-examples` — Framework And Geometry — Examples (7 item(s))

- `ex-gr-minkowski-chart-as-a-lorentzian-manifold` · example — The constant Minkowski metric as a smooth time-oriented Lorentzian manifold
- `ex-gr-spherical-coordinates-flat-metric-components` · example — Flat metric components in a spherical coordinate chart
- `ex-gr-flat-connection-is-metric-selected` · example — The coordinate connection of the flat chart is metric-selected
- `cex-gr-torsion-free-does-not-imply-metric-compatible` · counterexample — A torsion-free connection that is not metric-compatible
- `ex-gr-unit-conventions-for-two-time-coordinates` · example — Component units of the flat metric in length and time coordinates
- `cex-gr-symmetric-nondegenerate-field-need-not-be-lorentzian` · counterexample — A smooth symmetric nondegenerate 2-tensor field of inertia (2,2,0)
- `ex-gr-reversing-the-timelike-field-reverses-future` · example — Reversing the time orientation reverses the future cone

### `gr-tensors-and-observers` — Tensors And Observers (17 item(s))

- `lem-gr-tensor-bundle-coordinate-construction` · lemma — The tensor bundle on a smooth four-manifold from coordinate evaluations
- `def-gr-tensor-fields-and-components` · definition — Tensor fields of type (r,s) on a Lorentzian four-manifold and their components
- `def-gr-observer-and-rest-space` · definition — Observers, rest spaces and the spatial projection at an event
- `def-gr-observer-congruence-and-adapted-charts` · definition — Observer congruences, their observer curves and adapted charts
- `lem-gr-tensor-component-transformation-law` · lemma — The component transformation law of a smooth tensor field
- `lem-gr-contraction-of-smooth-tensor-fields` · lemma — Contraction of a smooth tensor field is a smooth tensor field
- `lem-gr-observer-projection-decomposition` · lemma — The observer rest-space decomposition and the spatial projection
- `lem-gr-observer-pairing-with-future-causal-vectors` · lemma — Pairing of an observer with future causal vectors
- `def-gr-local-frame-and-tetrad-fields` · definition — Local frame fields, coordinate frames and tetrad fields
- `lem-gr-tetrad-change-of-basis-is-lorentz` · lemma — The change between two future-directed tetrads is a Lorentz matrix
- `thm-gr-local-lorentz-tetrad-existence` · theorem — Existence of a smooth future-directed tetrad field near every event
- `thm-gr-observer-relative-velocity-decomposition` · theorem — Relative velocity decomposition of a future unit timelike vector
- `cor-gr-adapted-chart-existence` · corollary — Every congruence admits a local adapted chart
- `prop-gr-rest-space-integrability-criterion` · proposition — Smoothness of the rest-space family and its Frobenius integrability criterion
- `def-gr-observer-relative-energy-and-momentum` · definition — Observer-relative energy, spatial momentum and rest mass of a tangent vector
- `lem-gr-observer-energy-momentum-identities` · lemma — Positivity, relative-velocity identities and the mass shell of observer-relative energy and momentum
- `rem-gr-chart-tetrad-congruence-and-observer-distinctions` · remark — Charts, frames, tetrads, congruences and observers are distinct objects

### `gr-tensors-and-observers-examples` — Tensors And Observers — Examples (7 item(s))

- `ex-gr-mixed-tensor-transformation-and-contraction` · example — A mixed tensor field: components in two charts and the invariance of its trace
- `ex-gr-boosted-constant-tetrad-field` · example — A constant boosted tetrad field on flat spacetime and an adapted chart
- `ex-gr-shearing-congruence-tetrad-and-adapted-chart` · example — A shearing observer congruence on flat spacetime: tetrad, adapted chart and non-coordinate frame
- `ex-gr-observer-relative-velocity-of-a-boost` · example — The relative-velocity decomposition of a boost, checked in an explicit tetrad
- `ex-gr-observer-energy-of-a-boosted-test-body` · example — Observer energy, spatial momentum and mass shell of a boosted test body
- `cex-gr-tetrad-field-need-not-be-a-coordinate-frame` · counterexample — A tetrad field that is not the coordinate frame of any chart
- `cex-gr-shearing-congruence-rest-spaces-not-integrable` · counterexample — A congruence whose rest spaces are not tangent to any local hypersurfaces

### `gr-connections-and-free-fall` — Connections And Free Fall (11 item(s))

- `def-gr-timelike-worldline-and-proper-time` · definition — Timelike worldlines, proper time, length and four-velocity on a Lorentzian four-manifold
- `lem-gr-proper-time-reparametrization-and-four-velocity` · lemma — Proper time is well defined and reparametrization invariant; the four-velocity is its unit tangent
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` · theorem — Existence and uniqueness of the metric-selected connection of a nondegenerate metric, and its extension to tensor fields
- `lem-gr-parallel-transport-and-geodesic-speed` · lemma — Covariant differentiation along curves: metric pairing, parallel transport and geodesic speed
- `thm-gr-local-geodesics-and-exponential-map` · theorem — The geodesic initial-value problem and the exponential map of the metric-selected connection
- `thm-gr-point-normal-and-exponential-coordinate-charts` · theorem — Point-normal and exponential coordinate charts of the metric-selected connection
- `lem-gr-first-variation-of-proper-time` · lemma — First variation of the length of a timelike curve: stationarity is the geodesic equation
- `thm-gr-lorentz-gauss-lemma-and-normal-maximum` · theorem — The Lorentzian Gauss lemma and the radial maximum of proper time
- `post-gr-ideal-clocks-and-free-fall` · postulate — Adopted clock, free-fall and light-ray assumptions of the classical gravitational framework
- `pthm-gr-free-fall-worldline-is-determined-by-initial-data` · physics-theorem — The free-fall worldline of an ideal test body is determined by its initial event and four-velocity
- `rem-gr-normal-coordinates-and-local-inertial-frames-scope` · remark — Scope of normal coordinates and of the local-inertial-frame reading

### `gr-connections-and-free-fall-examples` — Connections And Free Fall — Examples (6 item(s))

- `ex-gr-flat-space-geodesics-and-proper-time` · example — Geodesics, proper time and parallel transport of the flat model
- `ex-gr-levi-civita-connection-of-a-conformal-metric` · example — The metric-selected connection of a conformal metric, verified by the defining identities
- `ex-gr-nonaffine-geodesic-parametrization` · example — A geodesic image with a non-affine parameter, and the equation of a pregeodesic
- `cex-gr-geodesics-do-not-determine-the-connection` · counterexample — Torsion-free connections with the same geodesic images need not coincide
- `ex-gr-radial-timelike-maximum-in-flat-space` · example — The radial proper-time maximum checked on an explicit family of wiggly curves in flat space
- `cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish` · counterexample — A chart with the point-normal first-order form whose second metric derivatives do not vanish

## Your seams

Another group's pages depend on yours:

- `gr-curvature-and-tides` (group b) requires your `gr-connections-and-free-fall`
- `gr-curvature-and-tides` (group b) requires your `gr-framework-and-geometry`
- `gr-curvature-and-tides` (group b) requires your `gr-tensors-and-observers`
- `gr-curvature-and-tides-examples` (group b) requires your `gr-framework-and-geometry`
- `gr-curvature-and-tides-examples` (group b) requires your `gr-connections-and-free-fall`
- `gr-curvature-and-tides-examples` (group b) requires your `gr-tensors-and-observers`
- `gr-einstein-and-matter` (group b) requires your `gr-framework-and-geometry`
- `gr-einstein-and-matter` (group b) requires your `gr-connections-and-free-fall`
- `gr-einstein-and-matter` (group b) requires your `gr-tensors-and-observers`
- `gr-einstein-and-matter-examples` (group b) requires your `gr-framework-and-geometry`
- `gr-einstein-and-matter-examples` (group b) requires your `gr-connections-and-free-fall`
- `gr-local-and-global-energy` (group b) requires your `gr-framework-and-geometry`
- `gr-local-and-global-energy` (group b) requires your `gr-tensors-and-observers`
- `gr-local-and-global-energy` (group b) requires your `gr-connections-and-free-fall`
- `gr-local-and-global-energy-examples` (group b) requires your `gr-framework-and-geometry`
- `gr-local-and-global-energy-examples` (group b) requires your `gr-connections-and-free-fall`
- `gr-local-and-global-energy-examples` (group b) requires your `gr-tensors-and-observers`
- `gr-flat-and-newtonian-bridges` (group c) requires your `gr-framework-and-geometry`
- `gr-flat-and-newtonian-bridges` (group c) requires your `gr-tensors-and-observers`
- `gr-flat-and-newtonian-bridges` (group c) requires your `gr-connections-and-free-fall`
- `gr-flat-and-newtonian-bridges-examples` (group c) requires your `gr-framework-and-geometry`
- `gr-flat-and-newtonian-bridges-examples` (group c) requires your `gr-connections-and-free-fall`
- `gr-flat-and-newtonian-bridges-examples` (group c) requires your `gr-tensors-and-observers`
- `gr-spherical-vacuum-model` (group c) requires your `gr-framework-and-geometry`
- `gr-spherical-vacuum-model` (group c) requires your `gr-connections-and-free-fall`
- `gr-spherical-vacuum-model` (group c) requires your `gr-tensors-and-observers`
- `gr-spherical-vacuum-model-examples` (group c) requires your `gr-tensors-and-observers`
- `gr-spherical-vacuum-model-examples` (group c) requires your `gr-framework-and-geometry`
- `gr-homogeneous-cosmology` (group c) requires your `gr-framework-and-geometry`
- `gr-homogeneous-cosmology` (group c) requires your `gr-connections-and-free-fall`
- `gr-homogeneous-cosmology` (group c) requires your `gr-tensors-and-observers`
- `gr-homogeneous-cosmology-examples` (group c) requires your `gr-framework-and-geometry`
- `gr-homogeneous-cosmology-examples` (group c) requires your `gr-tensors-and-observers`
- `gr-linearized-waves` (group d) requires your `gr-framework-and-geometry`
- `gr-linearized-waves` (group d) requires your `gr-tensors-and-observers`
- `gr-linearized-waves` (group d) requires your `gr-connections-and-free-fall`
- `gr-linearized-waves-examples` (group d) requires your `gr-framework-and-geometry`
- `gr-linearized-waves-examples` (group d) requires your `gr-tensors-and-observers`
- `gr-causal-and-initial-value-boundaries` (group d) requires your `gr-framework-and-geometry`
- `gr-causal-and-initial-value-boundaries` (group d) requires your `gr-connections-and-free-fall`
- `gr-causal-and-initial-value-boundaries` (group d) requires your `gr-tensors-and-observers`
- `gr-causal-and-initial-value-boundaries-examples` (group d) requires your `gr-connections-and-free-fall`
- `gr-causal-and-initial-value-boundaries-examples` (group d) requires your `gr-framework-and-geometry`
- `gr-causal-and-initial-value-boundaries-examples` (group d) requires your `gr-tensors-and-observers`
- `gr-experimental-interface` (group d) requires your `gr-framework-and-geometry`
- `gr-experimental-interface` (group d) requires your `gr-connections-and-free-fall`
- `gr-experimental-interface` (group d) requires your `gr-tensors-and-observers`
- `gr-experimental-interface-examples` (group d) requires your `gr-framework-and-geometry`
- `gr-experimental-interface-examples` (group d) requires your `gr-tensors-and-observers`
- `gr-experimental-interface-examples` (group d) requires your `gr-connections-and-free-fall`
- `gr-gr13-convex-normal-neighborhoods` (group e) requires your `gr-framework-and-geometry`
- `gr-gr13-convex-normal-neighborhoods` (group e) requires your `gr-tensors-and-observers`
- `gr-gr13-convex-normal-neighborhoods` (group e) requires your `gr-connections-and-free-fall`
- `gr-gr13-convex-normal-neighborhoods-examples` (group e) requires your `gr-connections-and-free-fall`
- `gr-gr13-convex-normal-neighborhoods-examples` (group e) requires your `gr-framework-and-geometry`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `gr-connections-and-free-fall`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `gr-framework-and-geometry`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `gr-tensors-and-observers`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` (group e) requires your `gr-framework-and-geometry`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` (group e) requires your `gr-connections-and-free-fall`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples` (group e) requires your `gr-connections-and-free-fall`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples` (group e) requires your `gr-framework-and-geometry`

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
