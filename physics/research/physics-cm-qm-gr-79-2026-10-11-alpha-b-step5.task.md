# Step 5 adjudication — group **b**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 68, 69, 70: 3 A/B pair(s), 6 page(s), 65 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **68**: `research/physics-cm-qm-gr-79-2026-10-11-batch-68-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/physics-cm-qm-gr-79-2026-10-11-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **70**: `research/physics-cm-qm-gr-79-2026-10-11-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 68 | `gr-curvature-and-tides` | A | general-relativity | 239 | `gr-connections-and-free-fall`, `fundamental-trigonometric-identities`, `gr-framework-and-geometry`, `gr-tensors-and-observers` |
| 68 | `gr-curvature-and-tides-examples` | B | general-relativity | 240 | `gr-curvature-and-tides`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers` |
| 69 | `gr-einstein-and-matter` | A | general-relativity | 241 | `gr-curvature-and-tides`, `the-de-rham-theorem-and-degree`, `cm-math-continuum`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers` |
| 69 | `gr-einstein-and-matter-examples` | B | general-relativity | 242 | `gr-einstein-and-matter`, `gr-framework-and-geometry`, `gr-connections-and-free-fall` |
| 70 | `gr-local-and-global-energy` | A | general-relativity | 243 | `gr-einstein-and-matter`, `gr-framework-and-geometry`, `gr-tensors-and-observers`, `gr-connections-and-free-fall`, `gr-curvature-and-tides` |
| 70 | `gr-local-and-global-energy-examples` | B | general-relativity | 244 | `gr-local-and-global-energy`, `gr-einstein-and-matter`, `gr-framework-and-geometry`, `gr-connections-and-free-fall`, `gr-tensors-and-observers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gr-curvature-and-tides` — Curvature And Tides (13 item(s))

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

### `gr-curvature-and-tides-examples` — Curvature And Tides — Examples (6 item(s))

- `ex-gr-flat-metric-in-cylindrical-coordinates` · example — A flat metric with nowhere-zero Christoffel coefficients: flat space in cylindrical coordinates
- `ex-gr-curvature-of-a-product-with-a-round-sphere` · example — Curvature, Ricci, scalar and Einstein tensors of a metric with a round two-sphere factor
- `ex-gr-jacobi-fields-in-flat-space` · example — Jacobi fields in flat space are affine, and no geodesic has conjugate instants
- `ex-gr-conjugate-instant-on-a-round-sphere-factor` · example — An equator geodesic of the round-sphere factor: conjugate instant at distance pi with multiplicity one
- `cex-gr-symmetries-do-not-imply-bianchi` · counterexample — The exchange symmetries of a curvature-like tensor do not imply the first Bianchi identity
- `cex-gr-vanishing-tidal-operator-for-one-observer` · counterexample — A nonzero algebraic curvature tensor whose tidal operator vanishes for one timelike direction

### `gr-einstein-and-matter` — Einstein And Matter (21 item(s))

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

### `gr-einstein-and-matter-examples` — Einstein And Matter — Examples (8 item(s))

- `ex-gr-metric-volume-density-and-flux-in-flat-coordinates` · example — Metric density, volume form and current flux of the flat metric in the identity chart
- `ex-gr-flux-balance-for-a-divergence-free-current` · example — A divergence-free current with nonzero face-flux density: J=x^1∂_2 in flat space
- `ex-gr-dust-conservation-in-flat-space` · example — Dust in flat space: a conserved homogeneous model and a nonconserved time-dependent density
- `ex-gr-null-gradient-scalar-field-conservation` · example — A scalar field with null-or-zero gradient in flat space: equation of motion and conservation
- `ex-gr-killing-current-for-a-static-dust-in-flat-space` · example — The Killing current of a static dust congruence in flat space
- `cex-gr-energy-conditions-do-not-imply-conservation` · counterexample — The weak energy condition does not imply conservation of a prescribed stress-energy tensor
- `cex-gr-divergence-free-does-not-force-zero-flux` · counterexample — A divergence-free current with nonzero flux through a timelike 3-simplex
- `ex-gr-perfect-fluid-energy-conditions` · example — Energy-condition verdicts for dust, radiation and the cosmological effective fluid

### `gr-local-and-global-energy` — Local And Global Energy (11 item(s))

- `def-gr-observer-energy-momentum-current` · definition — The observer split of a symmetric two-tensor: energy density, energy-momentum current, flux and stress
- `lem-gr-observer-energy-momentum-decomposition` · lemma — The orthogonal observer decomposition of a symmetric two-tensor and its uniqueness
- `def-gr-measured-energy-density-flux-and-stress` · definition — Physical reading of the observer split: measured energy density, energy flux and momentum density, and measured stress
- `def-gr-congruence-acceleration-and-expansion` · definition — Acceleration, expansion and the along-congruence derivative of an observer congruence
- `lem-gr-congruence-acceleration-and-expansion-properties` · lemma — Spatiality and curve identity of the acceleration, the divergence form of the expansion, and the along-congruence derivative
- `lem-gr-energy-momentum-current-divergence` · lemma — Divergence of the measured energy-momentum current and the finite-chain balance identity
- `lem-gr-killing-congruence-kinematics-and-energy-current` · lemma — Kinematics of a timelike Killing congruence and conservation of the redshift-weighted energy current
- `def-gr-killing-energy-charge` · definition — The timelike Killing current and the charge of a three-chain
- `pthm-gr-local-energy-balance` · physics-theorem — Local energy balance of the measured current and conservation of the Killing charge in stationary models
- `rem-gr-no-universal-global-energy` · remark — Absence of a universal global energy: observer dependence, no local gravitational energy, and deferred asymptotic masses
- `rem-gr-local-and-global-energy-scope-and-deferrals` · remark — Scope and status of the local-and-global-energy page: what is defined, what is conditional, and what is deferred

### `gr-local-and-global-energy-examples` — Local And Global Energy — Examples (6 item(s))

- `ex-gr-translating-dust-measured-energy-and-balance` · example — A translating dust in flat space: measured energy density, flux and the local balance
- `ex-gr-boost-congruence-energy-balance-in-flat-space` · example — A boost-Killing congruence in flat space: acceleration source and conservation of the redshift-weighted energy current
- `ex-gr-perfect-fluid-energy-equation-from-the-local-balance` · example — The perfect-fluid energy equation recovered from the local energy balance
- `ex-gr-killing-energy-charge-of-a-static-dust` · example — The Killing energy of a static dust in flat space and its conservation across slices
- `cex-gr-measured-energy-density-depends-on-the-observer` · counterexample — The measured energy density of a fixed tensor depends on the observer congruence
- `cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density` · counterexample — A divergence-free symmetric tensor with negative measured energy density

## Your seams

Your pages depend on another group's:

- `gr-curvature-and-tides` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-curvature-and-tides` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-curvature-and-tides` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-curvature-and-tides-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-curvature-and-tides-examples` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-curvature-and-tides-examples` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-einstein-and-matter` requires `cm-math-continuum` (group n, batch 8)
- `gr-einstein-and-matter` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-einstein-and-matter` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-einstein-and-matter` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-einstein-and-matter-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-einstein-and-matter-examples` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-local-and-global-energy` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-local-and-global-energy` requires `gr-tensors-and-observers` (group a, batch 66)
- `gr-local-and-global-energy` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-local-and-global-energy-examples` requires `gr-framework-and-geometry` (group a, batch 65)
- `gr-local-and-global-energy-examples` requires `gr-connections-and-free-fall` (group a, batch 67)
- `gr-local-and-global-energy-examples` requires `gr-tensors-and-observers` (group a, batch 66)

Another group's pages depend on yours:

- `gr-flat-and-newtonian-bridges` (group c) requires your `gr-einstein-and-matter`
- `gr-flat-and-newtonian-bridges` (group c) requires your `gr-curvature-and-tides`
- `gr-flat-and-newtonian-bridges-examples` (group c) requires your `gr-curvature-and-tides`
- `gr-flat-and-newtonian-bridges-examples` (group c) requires your `gr-einstein-and-matter`
- `gr-spherical-vacuum-model` (group c) requires your `gr-local-and-global-energy`
- `gr-spherical-vacuum-model` (group c) requires your `gr-curvature-and-tides`
- `gr-spherical-vacuum-model` (group c) requires your `gr-einstein-and-matter`
- `gr-homogeneous-cosmology` (group c) requires your `gr-einstein-and-matter`
- `gr-homogeneous-cosmology` (group c) requires your `gr-curvature-and-tides`
- `gr-linearized-waves` (group d) requires your `gr-local-and-global-energy`
- `gr-linearized-waves` (group d) requires your `gr-einstein-and-matter`
- `gr-linearized-waves` (group d) requires your `gr-curvature-and-tides`
- `gr-causal-and-initial-value-boundaries` (group d) requires your `gr-einstein-and-matter`
- `gr-causal-and-initial-value-boundaries` (group d) requires your `gr-curvature-and-tides`
- `gr-gr13-convex-normal-neighborhoods` (group e) requires your `gr-einstein-and-matter`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `gr-curvature-and-tides`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `gr-einstein-and-matter`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof-examples` (group e) requires your `gr-einstein-and-matter`
- `gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability` (group e) requires your `gr-einstein-and-matter`

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
