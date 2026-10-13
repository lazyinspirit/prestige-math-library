# Step 4 batch reviewer — batch **68**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **68**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["68"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 68 | `gr-curvature-and-tides` | A | gr-connections-and-free-fall, fundamental-trigonometric-identities, gr-framework-and-geometry, gr-tensors-and-observers |
| 68 | `gr-curvature-and-tides-examples` | B | gr-curvature-and-tides, gr-framework-and-geometry, gr-connections-and-free-fall, gr-tensors-and-observers |

## Your content, in full

### `gr-curvature-and-tides` — Curvature And Tides

- `def-gr-curvature-tensor-and-derived-tensors` · definition — The Riemann curvature operator and the derived Ricci, scalar and Einstein tensors
- `thm-gr-curvature-tensoriality-and-coordinate-formula` · theorem — Tensoriality of the curvature, its coordinate formula and its point-normal metric formula
- `thm-gr-curvature-algebraic-symmetries` · theorem — The algebraic symmetries of the curvature tensor and the symmetry of the Ricci and Einstein tensors
- `thm-gr-second-bianchi-and-divergence-free-einstein` · theorem — The second Bianchi identity and the vanishing divergence of the Einstein tensor
- `def-gr-jacobi-field-and-conjugate-instant` · definition — Jacobi fields, geodesic variations and conjugate instants along a geodesic
- `thm-gr-jacobi-equation-and-geodesic-deviation` · theorem — The Jacobi equation, geodesic deviation and the initial-value theory of Jacobi fields
- `lem-gr-conjugacy-via-the-exponential-map` · lemma — The differential of the exponential map and conjugacy along a geodesic
- `lem-gr-normal-index-form-factorization` · lemma — The normal index form before the first conjugate instant is positive definite
- `thm-gr-conjugacy-and-local-timelike-maximum` · theorem — Conjugacy, the exponential differential and the local proper-time maximum before the first conjugate instant
- `lem-gr-algebraic-curvature-vanishing-criterion` · lemma — A curvature tensor vanishes if the tidal operator vanishes for every timelike direction
- `pthm-gr-tidal-comparison` · physics-theorem — Free-fall congruences, tidal (curvature) relative acceleration and the flat comparison
- `rem-gr-curvature-tidal-scope-and-conventions` · remark — Conventions, units and scope for curvature and tidal quantities
- `ex-gr-curvature-in-a-point-normal-chart` · example — Curvature survives a first-order normal chart: an explicit metric, its normal form and its deviation field

### `gr-curvature-and-tides-examples` — Curvature And Tides — Examples

- `ex-gr-flat-metric-in-cylindrical-coordinates` · example — A flat metric with nowhere-zero Christoffel coefficients: flat space in cylindrical coordinates
- `ex-gr-curvature-of-a-product-with-a-round-sphere` · example — Curvature, Ricci, scalar and Einstein tensors of a metric with a round two-sphere factor
- `ex-gr-jacobi-fields-in-flat-space` · example — Jacobi fields in flat space are affine, and no geodesic has conjugate instants
- `ex-gr-conjugate-instant-on-a-round-sphere-factor` · example — An equator geodesic of the round-sphere factor: conjugate instant at distance pi with multiplicity one
- `cex-gr-symmetries-do-not-imply-bianchi` · counterexample — The exchange symmetries of a curvature-like tensor do not imply the first Bianchi identity
- `cex-gr-vanishing-tidal-operator-for-one-observer` · counterexample — A nonzero algebraic curvature tensor whose tidal operator vanishes for one timelike direction

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-curvature-and-tides` requires `gr-connections-and-free-fall`
- `gr-curvature-and-tides` requires `gr-framework-and-geometry`
- `gr-curvature-and-tides` requires `gr-tensors-and-observers`
- `gr-curvature-and-tides-examples` requires `gr-framework-and-geometry`
- `gr-curvature-and-tides-examples` requires `gr-connections-and-free-fall`
- `gr-curvature-and-tides-examples` requires `gr-tensors-and-observers`
- `gr-einstein-and-matter` requires `gr-curvature-and-tides`
- `gr-local-and-global-energy` requires `gr-curvature-and-tides`
- `gr-flat-and-newtonian-bridges` requires `gr-curvature-and-tides`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-curvature-and-tides`
- `gr-spherical-vacuum-model` requires `gr-curvature-and-tides`
- `gr-homogeneous-cosmology` requires `gr-curvature-and-tides`
- `gr-linearized-waves` requires `gr-curvature-and-tides`
- `gr-causal-and-initial-value-boundaries` requires `gr-curvature-and-tides`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` requires `gr-curvature-and-tides`
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
