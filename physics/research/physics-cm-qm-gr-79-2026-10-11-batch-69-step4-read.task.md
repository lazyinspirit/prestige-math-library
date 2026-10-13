# Step 4 batch reviewer — batch **69**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **69**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["69"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 69 | `gr-einstein-and-matter` | A | gr-curvature-and-tides, the-de-rham-theorem-and-degree, cm-math-continuum, gr-framework-and-geometry, gr-connections-and-free-fall, gr-tensors-and-observers |
| 69 | `gr-einstein-and-matter-examples` | B | gr-einstein-and-matter, gr-framework-and-geometry, gr-connections-and-free-fall |

## Your content, in full

### `gr-einstein-and-matter` — Einstein And Matter

- `def-gr-metric-volume-form-and-current-flux` · definition — The metric volume form, current flux through 3-faces and finite-chain charges
- `lem-gr-metric-volume-form-patching-and-face-normal` · lemma — Chart independence of the metric volume form, its value on orthonormal frames, and the unit normal and density of a non-null hyperplane
- `lem-gr-metric-divergence-and-density-formula` · lemma — The derivative of the metric density and the chart formula for the divergence of a vector field
- `thm-gr-density-divergence-and-finite-chain-flux` · theorem — Divergence, Stokes flux balance and the non-null face formula for a Lorentzian current
- `lem-gr-lorentzian-perturbations-remain-lorentzian` · lemma — Lorentzian metrics are stable under small compactly supported symmetric perturbations
- `lem-gr-compact-variation-coefficient-vanishing` · lemma — A continuous symmetric coefficient orthogonal to every compactly supported variation vanishes
- `def-gr-hilbert-stress-energy-tensor` · definition — The Hilbert stress-energy tensor of a metric-dependent action
- `lem-gr-hilbert-tensor-uniqueness` · lemma — Uniqueness of the Hilbert stress-energy tensor
- `thm-gr-compact-metric-and-timelike-curve-variation` · theorem — First variation of the Einstein-Hilbert density under compactly supported metric variations, and of the timelike length functional
- `def-gr-killing-field` · definition — Killing fields of a Lorentzian metric
- `thm-gr-killing-and-on-shell-matter-identities` · theorem — Killing fields and conserved currents, and on-shell conservation of the Hilbert stress-energy tensor
- `def-gr-scalar-field-matter-model` · definition — The scalar-field matter model of the classical gravitational framework
- `prop-gr-scalar-field-stress-energy-conservation` · proposition — First variation, Hilbert tensor and conservation of the scalar-field model
- `def-gr-dust-matter-model` · definition — The dust matter model: rest density, four-velocity, stress-energy and dust system
- `def-gr-perfect-fluid-matter-model` · definition — The perfect-fluid matter model: rest energy density, pressure, four-velocity and stress-energy
- `prop-gr-dust-and-perfect-fluid-conservation-equations` · proposition — Divergence-free dust is exactly the dust system, and divergence-free perfect fluid is exactly the fluid equations
- `post-gr-classical-gravitational-action` · postulate — Adopted classical gravitational action and variational field law
- `post-gr-einstein-field-law` · postulate — Adopted Einstein field equation in the direct-equation presentation
- `pthm-gr-adopted-action-and-einstein-equations` · physics-theorem — Stationarity of the adopted total action is equivalent to the Einstein equation with the framework's coupling
- `pthm-gr-einstein-consistency-and-energy-conditions` · physics-theorem — Consistency conditions of the adopted field law: conservation, trace, parameter variation and the energy conditions of a perfect fluid
- `rem-gr-einstein-matter-scope-and-conventions` · remark — Scope and conventions of the Einstein-and-matter page: presentations, matter sectors and open obligations

### `gr-einstein-and-matter-examples` — Einstein And Matter — Examples

- `ex-gr-metric-volume-density-and-flux-in-flat-coordinates` · example — Metric density, volume form and current flux of the flat metric in the identity chart
- `ex-gr-flux-balance-for-a-divergence-free-current` · example — A divergence-free current with nonzero face-flux density: J=x^1∂_2 in flat space
- `ex-gr-dust-conservation-in-flat-space` · example — Dust in flat space: a conserved homogeneous model and a nonconserved time-dependent density
- `ex-gr-null-gradient-scalar-field-conservation` · example — A scalar field with null-or-zero gradient in flat space: equation of motion and conservation
- `ex-gr-killing-current-for-a-static-dust-in-flat-space` · example — The Killing current of a static dust congruence in flat space
- `cex-gr-energy-conditions-do-not-imply-conservation` · counterexample — The weak energy condition does not imply conservation of a prescribed stress-energy tensor
- `cex-gr-divergence-free-does-not-force-zero-flux` · counterexample — A divergence-free current with nonzero flux through a timelike 3-simplex
- `ex-gr-perfect-fluid-energy-conditions` · example — Energy-condition verdicts for dust, radiation and the cosmological effective fluid

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-einstein-and-matter` requires `gr-curvature-and-tides`
- `gr-einstein-and-matter` requires `cm-math-continuum`
- `gr-einstein-and-matter` requires `gr-framework-and-geometry`
- `gr-einstein-and-matter` requires `gr-connections-and-free-fall`
- `gr-einstein-and-matter` requires `gr-tensors-and-observers`
- `gr-einstein-and-matter-examples` requires `gr-framework-and-geometry`
- `gr-einstein-and-matter-examples` requires `gr-connections-and-free-fall`
- `gr-local-and-global-energy` requires `gr-einstein-and-matter`
- `gr-local-and-global-energy-examples` requires `gr-einstein-and-matter`
- `gr-flat-and-newtonian-bridges` requires `gr-einstein-and-matter`
- `gr-flat-and-newtonian-bridges-examples` requires `gr-einstein-and-matter`
- `gr-spherical-vacuum-model` requires `gr-einstein-and-matter`
- `gr-homogeneous-cosmology` requires `gr-einstein-and-matter`
- `gr-linearized-waves` requires `gr-einstein-and-matter`
- `gr-causal-and-initial-value-boundaries` requires `gr-einstein-and-matter`
- `gr-gr13-convex-normal-neighborhoods` requires `gr-einstein-and-matter`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` requires `gr-einstein-and-matter`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples` requires `gr-einstein-and-matter`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` requires `gr-einstein-and-matter`
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
