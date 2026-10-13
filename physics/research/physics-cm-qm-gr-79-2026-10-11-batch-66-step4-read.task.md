# Step 4 batch reviewer — batch **66**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **66**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["66"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 66 | `gr-tensors-and-observers` | A | gr-framework-and-geometry, distributions-integral-manifolds-and-the-frobenius-theorem, roots-and-rational-powers, the-exterior-derivative-and-cartan-calculus |
| 66 | `gr-tensors-and-observers-examples` | B | gr-tensors-and-observers, gr-framework-and-geometry |

## Your content, in full

### `gr-tensors-and-observers` — Tensors And Observers

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

### `gr-tensors-and-observers-examples` — Tensors And Observers — Examples

- `ex-gr-mixed-tensor-transformation-and-contraction` · example — A mixed tensor field: components in two charts and the invariance of its trace
- `ex-gr-boosted-constant-tetrad-field` · example — A constant boosted tetrad field on flat spacetime and an adapted chart
- `ex-gr-shearing-congruence-tetrad-and-adapted-chart` · example — A shearing observer congruence on flat spacetime: tetrad, adapted chart and non-coordinate frame
- `ex-gr-observer-relative-velocity-of-a-boost` · example — The relative-velocity decomposition of a boost, checked in an explicit tetrad
- `ex-gr-observer-energy-of-a-boosted-test-body` · example — Observer energy, spatial momentum and mass shell of a boosted test body
- `cex-gr-tetrad-field-need-not-be-a-coordinate-frame` · counterexample — A tetrad field that is not the coordinate frame of any chart
- `cex-gr-shearing-congruence-rest-spaces-not-integrable` · counterexample — A congruence whose rest spaces are not tangent to any local hypersurfaces

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-tensors-and-observers` requires `gr-framework-and-geometry`
- `gr-tensors-and-observers-examples` requires `gr-framework-and-geometry`
- `gr-connections-and-free-fall` requires `gr-tensors-and-observers`
- `gr-curvature-and-tides` requires `gr-tensors-and-observers`
- `gr-curvature-and-tides-examples` requires `gr-tensors-and-observers`
- `gr-einstein-and-matter` requires `gr-tensors-and-observers`
- `gr-local-and-global-energy` requires `gr-tensors-and-observers`
- `gr-local-and-global-energy-examples` requires `gr-tensors-and-observers`
- `gr-flat-and-newtonian-bridges` requires `gr-tensors-and-observers`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-tensors-and-observers`
- `gr-spherical-vacuum-model` requires `gr-tensors-and-observers`
- `gr-spherical-vacuum-model-examples` requires `gr-tensors-and-observers`
- `gr-homogeneous-cosmology` requires `gr-tensors-and-observers`
- `gr-homogeneous-cosmology-examples` requires `gr-tensors-and-observers`
- `gr-linearized-waves` requires `gr-tensors-and-observers`
- `gr-linearized-waves-examples` requires `gr-tensors-and-observers`
- `gr-causal-and-initial-value-boundaries` requires `gr-tensors-and-observers`
- `gr-causal-and-initial-value-boundaries-examples` requires `gr-tensors-and-observers`
- `gr-experimental-interface` requires `gr-tensors-and-observers`
- `gr-experimental-interface-examples` requires `gr-tensors-and-observers`
- `gr-gr13-convex-normal-neighborhoods` requires `gr-tensors-and-observers`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` requires `gr-tensors-and-observers`
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
