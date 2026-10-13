# Step 4 batch reviewer — batch **65**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **65**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["65"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 65 | `gr-framework-and-geometry` | A | countability-and-uncountability, dual-spaces-bilinear-forms-and-inertia, linear-independence-bases-and-dimension, rn-as-a-normed-space, the-inverse-function-theorem-completed, the-total-derivative, vector-fields-flows-and-lie-derivatives, connectedness, inner-product-spaces-and-orthogonality, matrices-and-the-matrix-of-a-linear-map, smooth-manifolds-and-smooth-maps, tangent-cotangent-and-the-differential, the-determinant-of-a-linear-operator, topological-spaces-and-continuity, connections-levi-civita-and-parallel-transport, sr-spacetime-primitives, monotone-sequences-and-cauchy-completeness, the-logarithm-and-general-powers, properties-of-the-integral-and-the-working-ftc, geodesics-the-exponential-map-completeness-and-hopf-rinow, riemann-curvature-and-riemannian-submanifolds |
| 65 | `gr-framework-and-geometry-examples` | B | gr-framework-and-geometry, geodesics-the-exponential-map-completeness-and-hopf-rinow |

## Your content, in full

### `gr-framework-and-geometry` — Framework And Geometry

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

### `gr-framework-and-geometry-examples` — Framework And Geometry — Examples

- `ex-gr-minkowski-chart-as-a-lorentzian-manifold` · example — The constant Minkowski metric as a smooth time-oriented Lorentzian manifold
- `ex-gr-spherical-coordinates-flat-metric-components` · example — Flat metric components in a spherical coordinate chart
- `ex-gr-flat-connection-is-metric-selected` · example — The coordinate connection of the flat chart is metric-selected
- `cex-gr-torsion-free-does-not-imply-metric-compatible` · counterexample — A torsion-free connection that is not metric-compatible
- `ex-gr-unit-conventions-for-two-time-coordinates` · example — Component units of the flat metric in length and time coordinates
- `cex-gr-symmetric-nondegenerate-field-need-not-be-lorentzian` · counterexample — A smooth symmetric nondegenerate 2-tensor field of inertia (2,2,0)
- `ex-gr-reversing-the-timelike-field-reverses-future` · example — Reversing the time orientation reverses the future cone

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-tensors-and-observers` requires `gr-framework-and-geometry`
- `gr-tensors-and-observers-examples` requires `gr-framework-and-geometry`
- `gr-connections-and-free-fall` requires `gr-framework-and-geometry`
- `gr-connections-and-free-fall-examples` requires `gr-framework-and-geometry`
- `gr-curvature-and-tides` requires `gr-framework-and-geometry`
- `gr-curvature-and-tides-examples` requires `gr-framework-and-geometry`
- `gr-einstein-and-matter` requires `gr-framework-and-geometry`
- `gr-einstein-and-matter-examples` requires `gr-framework-and-geometry`
- `gr-local-and-global-energy` requires `gr-framework-and-geometry`
- `gr-local-and-global-energy-examples` requires `gr-framework-and-geometry`
- `gr-flat-and-newtonian-bridges` requires `gr-framework-and-geometry`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-framework-and-geometry`
- `gr-spherical-vacuum-model` requires `gr-framework-and-geometry`
- `gr-spherical-vacuum-model-examples` requires `gr-framework-and-geometry`
- `gr-homogeneous-cosmology` requires `gr-framework-and-geometry`
- `gr-homogeneous-cosmology-examples` requires `gr-framework-and-geometry`
- `gr-linearized-waves` requires `gr-framework-and-geometry`
- `gr-linearized-waves-examples` requires `gr-framework-and-geometry`
- `gr-causal-and-initial-value-boundaries` requires `gr-framework-and-geometry`
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-framework-and-geometry`
- `gr-experimental-interface` requires `gr-framework-and-geometry`
- `gr-experimental-interface-examples` requires `gr-framework-and-geometry`
- `gr-gr13-convex-normal-neighborhoods` requires `gr-framework-and-geometry`
- `gr-gr13-convex-normal-neighborhoods-examples` requires `gr-framework-and-geometry`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` requires `gr-framework-and-geometry`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` requires `gr-framework-and-geometry`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability-examples` requires `gr-framework-and-geometry`
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
