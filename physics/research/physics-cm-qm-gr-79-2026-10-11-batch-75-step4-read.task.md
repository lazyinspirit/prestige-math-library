# Step 4 batch reviewer — batch **75**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **75**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["75"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 75 | `gr-causal-and-initial-value-boundaries` | A | gr-einstein-and-matter, absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, bounded-variation-and-riemann-stieltjes, compactness, lie-subgroups-actions-and-homogeneous-spaces, differentiation-of-monotone-functions-and-the-vitali-covering-theorem, gr-framework-and-geometry, gr-connections-and-free-fall, gr-tensors-and-observers, gr-curvature-and-tides, the-lebesgue-integral-and-the-convergence-theorems |
| 75 | `gr-causal-and-initial-value-boundaries-examples` | B | gr-causal-and-initial-value-boundaries, gr-connections-and-free-fall, gr-framework-and-geometry, gr-tensors-and-observers |

## Your content, in full

### `gr-causal-and-initial-value-boundaries` — Causal And Initial Value Boundaries

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

### `gr-causal-and-initial-value-boundaries-examples` — Causal And Initial Value Boundaries — Examples

- `ex-gr-minkowski-level-sets-and-causal-double-cones` · example — Worked Minkowski slice: Cauchy level sets, causal double cones and the compact diamond
- `ex-gr-flat-slab-vertical-line-proper-time` · example — Worked vertical geodesics of the open flat slab: affine parameter, limit point and proper time
- `ex-gr-radial-focusing-in-flat-minkowski` · example — Sharp radial focusing in flat Minkowski space: equality in the Raychaudhuri bound without a singularity
- `cex-gr-flat-cylinder-has-a-closed-timelike-curve` · counterexample — A flat time-oriented Lorentzian four-manifold with a closed timelike curve
- `cex-gr-spacelike-hypersurface-need-not-be-cauchy` · counterexample — A spacelike hypersurface of a globally hyperbolic model that is not a Cauchy hypersurface
- `cex-gr-achronal-set-need-not-be-acausal` · counterexample — An achronal set that is not acausal: two null-related points

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-causal-and-initial-value-boundaries` requires `gr-einstein-and-matter`
- `gr-causal-and-initial-value-boundaries` requires `gr-framework-and-geometry`
- `gr-causal-and-initial-value-boundaries` requires `gr-connections-and-free-fall`
- `gr-causal-and-initial-value-boundaries` requires `gr-tensors-and-observers`
- `gr-causal-and-initial-value-boundaries` requires `gr-curvature-and-tides`
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-connections-and-free-fall`
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-framework-and-geometry`
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-tensors-and-observers`
- `gr-gr13-convex-normal-neighborhoods` requires `gr-causal-and-initial-value-boundaries`
- `gr-gr13-convex-normal-neighborhoods-examples` requires `gr-causal-and-initial-value-boundaries`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` requires `gr-causal-and-initial-value-boundaries`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` requires `gr-causal-and-initial-value-boundaries`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples` requires `gr-causal-and-initial-value-boundaries`
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
