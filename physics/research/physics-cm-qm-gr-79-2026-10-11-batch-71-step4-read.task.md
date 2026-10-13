# Step 4 batch reviewer — batch **71**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **71**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["71"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 71 | `gr-flat-and-newtonian-bridges` | A | gr-einstein-and-matter, compactness, darboux-lhopital-and-taylor, the-divergence-theorem-and-classical-stokes, volumes-of-elementary-solids-and-solids-of-revolution, wave-equation-representation-formulas, gr-framework-and-geometry, gr-tensors-and-observers, gr-connections-and-free-fall, gr-curvature-and-tides |
| 71 | `gr-flat-and-newtonian-bridges-examples` | B | gr-flat-and-newtonian-bridges, lie-subgroups-actions-and-homogeneous-spaces, group-actions-and-cayleys-theorem, gr-curvature-and-tides, gr-framework-and-geometry, gr-einstein-and-matter, gr-connections-and-free-fall, gr-tensors-and-observers |

## Your content, in full

### `gr-flat-and-newtonian-bridges` — Flat And Newtonian Bridges

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

### `gr-flat-and-newtonian-bridges-examples` — Flat And Newtonian Bridges — Examples

- `ex-gr-linearized-curvature-of-the-diagonal-perturbation` · example — First-order curvature of the diagonal perturbation h_00 = -2 phi, h_ij = -2 phi delta_ij for the explicit potential phi = |x|^2/2
- `ex-gr-minkowski-free-fall-and-clock-identities` · example — Straight timelike geodesics of the flat model: constant coordinate velocity, four-velocity and the clock-reading identity
- `ex-gr-observer-velocity-expansion-numeric-check` · example — An exact observer-relative energy and momentum computation at relative speed c/2, with the expansion bounds of the low-velocity lemma checked by exact rational comparison
- `ex-gr-weak-field-poisson-quadratic-potential` · example — Explicit stationary weak-field data with a dimensionless quadratic potential: exact Poisson source and the first-order Einstein coefficient
- `ex-gr-scaled-newtonian-harmonic-trajectory` · example — The scaled Newtonian comparison system for the quadratic potential: explicit harmonic solutions, a compact convex range and the hypotheses of the scaled trajectory theorem
- `cex-gr-first-order-vacuum-is-not-exact-vacuum` · counterexample — A first-order vacuum family whose exact metric has nonzero Ricci tensor at order epsilon^2: a harmonic diagonal perturbation with phi = x^1
- `cex-gr-flat-quotient-is-not-globally-minkowski` · counterexample — A flat Lorentzian four-manifold that is not isometric to Minkowski space: the rolled-up flat model R^4 / Z by a timelike translation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-flat-and-newtonian-bridges` requires `gr-einstein-and-matter`
- `gr-flat-and-newtonian-bridges` requires `gr-framework-and-geometry`
- `gr-flat-and-newtonian-bridges` requires `gr-tensors-and-observers`
- `gr-flat-and-newtonian-bridges` requires `gr-connections-and-free-fall`
- `gr-flat-and-newtonian-bridges` requires `gr-curvature-and-tides`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-curvature-and-tides`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-framework-and-geometry`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-einstein-and-matter`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-connections-and-free-fall`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-tensors-and-observers`
- `gr-spherical-vacuum-model` requires `gr-flat-and-newtonian-bridges`
- `gr-linearized-waves` requires `gr-flat-and-newtonian-bridges`
- `gr-linearized-waves-examples` requires `gr-flat-and-newtonian-bridges`
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

# Step 4 Alpha batch reviewer — read-only digest, `physics-cm-qm-gr-79-2026-10-11`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.
