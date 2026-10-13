# Step 4 batch reviewer — batch **72**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **72**. Step-5 owning group: **c**.
Return `group: "c"` and `batches: ["72"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 72 | `gr-spherical-vacuum-model` | A | gr-flat-and-newtonian-bridges, gr-local-and-global-energy, hausdorff-via-the-diagonal, riemannian-metrics-length-distance-and-volume, gr-framework-and-geometry, gr-connections-and-free-fall, gr-tensors-and-observers, gr-curvature-and-tides, gr-einstein-and-matter |
| 72 | `gr-spherical-vacuum-model-examples` | B | gr-spherical-vacuum-model, the-exponential-function, gr-tensors-and-observers, gr-framework-and-geometry |

## Your content, in full

### `gr-spherical-vacuum-model` — Spherical Vacuum Model

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

### `gr-spherical-vacuum-model-examples` — Spherical Vacuum Model — Examples

- `ex-gr-schwarzschild-isotropic-weak-field-comparison` · example — Explicit isotropic-to-areal conversion and the second-order coefficient mismatch of the Schwarzschild exterior
- `ex-gr-schwarzschild-static-clock-ratio-explicit` · example — Explicit static clock-rate ratios of the Schwarzschild exterior at r = 2s and r = 4s
- `ex-gr-schwarzschild-circular-orbit-thresholds-explicit` · example — Explicit circular-orbit data of the Schwarzschild exterior at the ISCO radius 3s and the photon-sphere radius 3s/2
- `ex-gr-schwarzschild-extension-horizon-data` · example — Explicit metric, orientation and curvature data of the advanced-chart extension at the horizon r = s
- `ex-gr-kruskal-cone-and-radial-values` · example — Explicit causal-cone and radial-derivative checks in the Kruskal model at the horizon for s = 1 m
- `cex-gr-exterior-charts-do-not-cover-the-extension` · counterexample — The exterior Schwarzschild charts do not cover the horizon-crossing extension: the regular horizon point (v, r) = (0, s)

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-spherical-vacuum-model` requires `gr-flat-and-newtonian-bridges`
- `gr-spherical-vacuum-model` requires `gr-local-and-global-energy`
- `gr-spherical-vacuum-model` requires `gr-framework-and-geometry`
- `gr-spherical-vacuum-model` requires `gr-connections-and-free-fall`
- `gr-spherical-vacuum-model` requires `gr-tensors-and-observers`
- `gr-spherical-vacuum-model` requires `gr-curvature-and-tides`
- `gr-spherical-vacuum-model` requires `gr-einstein-and-matter`
- `gr-spherical-vacuum-model-examples` requires `gr-tensors-and-observers`
- `gr-spherical-vacuum-model-examples` requires `gr-framework-and-geometry`
- `gr-experimental-interface` requires `gr-spherical-vacuum-model`
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
