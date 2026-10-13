# Step 4 batch reviewer — batch **44**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **44**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["44"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 44 | `qm-state-geometry` | A | qm-framework-and-quantities, qm-math-composites |
| 44 | `qm-state-geometry-examples` | B | qm-state-geometry, construction-of-r-via-cauchy-sequences, qm-framework-and-quantities, qm-math-orbital-and-spin, qm-math-composites |

## Your content, in full

### `qm-state-geometry` — Qm State Geometry

- `def-nrqm-state-geometry-state-vectors-and-rays` · definition — State vectors, unit vectors, rays, normalization and phases of a Hilbert space
- `lem-nrqm-state-geometry-normalization-and-phase-classes` · lemma — Normalization, ray equivalence and the phase orbits of the unit sphere
- `lem-nrqm-state-geometry-ray-to-rank-one-projection` · lemma — Rays, unit vectors and rank-one Hilbert projections
- `def-nrqm-state-geometry-pure-mixed-states-and-purity` · definition — The state space: density operators, pure and mixed states, and purity
- `lem-nrqm-state-geometry-density-set-convex-and-complete` · lemma — The state space is convex, closed under countable mixtures, and complete in the trace norm
- `lem-nrqm-state-geometry-purity-criterion` · lemma — Purity, spectral weights and the criterion for a pure state
- `lem-nrqm-state-geometry-extreme-points-of-the-state-space` · lemma — The extreme points of the state space are exactly the pure states
- `def-nrqm-state-geometry-framework-state-space` · definition — The state space of the framework: preparations, pure rays and density operators
- `pthm-nrqm-state-geometry-pure-preparation-phase-invariance` · physics-theorem — Pure preparations are well defined by their rays, and phase factors do not change their states
- `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations` · physics-theorem — Statistical mixtures, spectral decompositions and the extremal role of pure preparations
- `rem-nrqm-state-geometry-scope-and-empirical-status` · remark — Scope audit of the state-geometry page: what is mathematics, what is adopted, and what is deferred

### `qm-state-geometry-examples` — Qm State Geometry — Examples

- `ex-nrqm-state-geometry-normalization-and-phase-check` · example — A two-dimensional normalization and phase computation
- `ex-nrqm-state-geometry-finite-spin-bloch-ball` · example — The state space of a two-level finite-spin system is the Bloch ball
- `ex-nrqm-state-geometry-fixed-mode-two-level-states` · example — Pure and mixed states of a fixed two-level internal space
- `ex-nrqm-state-geometry-coherent-versus-mixed-preparation` · example — A coherent two-level preparation and the equal statistical mixture are different states
- `ex-nrqm-state-geometry-nonunique-preparation-ensembles` · example — One two-level state from two different preparation ensembles
- `cex-nrqm-state-geometry-zero-vector-is-not-a-preparation` · counterexample — The zero vector determines no pure preparation and no state
- `rem-nrqm-state-geometry-examples-scope-limits` · remark — What the worked checks of the companion page establish

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-state-geometry` requires `qm-framework-and-quantities`
- `qm-state-geometry` requires `qm-math-composites`
- `qm-state-geometry-examples` requires `qm-framework-and-quantities`
- `qm-state-geometry-examples` requires `qm-math-orbital-and-spin`
- `qm-state-geometry-examples` requires `qm-math-composites`
- `qm-observables-and-born-probabilities` requires `qm-state-geometry`
- `qm-observables-and-born-probabilities-examples` requires `qm-state-geometry`
- `qm-measurement-and-instruments` requires `qm-state-geometry`
- `qm-measurement-and-instruments-examples` requires `qm-state-geometry`
- `qm-autonomous-dynamics` requires `qm-state-geometry`
- `qm-autonomous-dynamics-examples` requires `qm-state-geometry`
- `qm-massive-particle-kinematics` requires `qm-state-geometry`
- `qm-uncertainty-and-compatibility` requires `qm-state-geometry`
- `qm-harmonic-oscillator` requires `qm-state-geometry`
- `qm-symmetries-and-conservation` requires `qm-state-geometry`
- `qm-symmetries-and-conservation-examples` requires `qm-state-geometry`
- `qm-angular-momentum-and-spin` requires `qm-state-geometry`
- `qm-angular-momentum-and-spin-examples` requires `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states` requires `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-state-geometry`
- `qm-bell-models-and-measurement-limits` requires `qm-state-geometry`
- `qm-identical-particles-and-exclusion` requires `qm-state-geometry`
- `qm-identical-particles-and-exclusion-examples` requires `qm-state-geometry`
- `qm-central-potentials-and-hydrogen` requires `qm-state-geometry`
- `qm-controlled-approximations` requires `qm-state-geometry`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-state-geometry`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-state-geometry`
- `qm-three-dimensional-scattering` requires `qm-state-geometry`
- `qm-many-body-and-equilibrium-models` requires `qm-state-geometry`
- `qm-photons-and-radiation-modes` requires `qm-state-geometry`
- `qm-photons-and-radiation-modes-examples` requires `qm-state-geometry`
- `qm-light-matter-and-spectral-transitions` requires `qm-state-geometry`
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
