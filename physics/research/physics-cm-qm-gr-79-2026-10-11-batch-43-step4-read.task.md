# Step 4 batch reviewer — batch **43**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **43**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["43"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 43 | `qm-framework-and-quantities` | A | qm-math-magnetic-and-detection, cm-math-geometry, qm-math-composites, qm-math-orbital-and-spin |
| 43 | `qm-framework-and-quantities-examples` | B | qm-framework-and-quantities, qm-math-magnetic-and-detection, qm-math-composites, qm-math-orbital-and-spin, cm-math-geometry, qm-math-fock-and-equilibrium |

## Your content, in full

### `qm-framework-and-quantities` — Qm Framework And Quantities

- `def-nrqm-framework-newtonian-spacetime` · definition — The Newtonian spacetime arena of the framework
- `def-nrqm-framework-galilei-transformations` · definition — The Galilean transformations of the coordinate space
- `lem-nrqm-framework-galilei-transformations-form-a-group` · lemma — The Galilean transformations form a group of bijections of the coordinate space
- `def-nrqm-framework-inertial-frames` · definition — Inertial frames of the framework and the class of frame changes
- `def-nrqm-framework-classical-apparatus-trajectories` · definition — Classical apparatus and preparation trajectories of the framework
- `def-nrqm-framework-quantities-and-units` · definition — Dimensions, SI unit conventions and quantity types of the framework
- `lem-nrqm-framework-ccr-on-the-schwartz-core` · lemma — Canonical commutation relations of position and momentum on the Schwartz core
- `post-nrqm-framework-state-and-composition` · postulate — State and composition postulate P1: Hilbert spaces, preparations and composite systems
- `post-nrqm-framework-observable-and-probability` · postulate — Observable and probability postulate P2: self-adjoint observables, spectral probability and finite unsharp outcomes
- `post-nrqm-framework-ideal-conditional-measurement` · postulate — Ideal conditional measurement postulate P3: the projective Lueders update and discarded outcomes
- `post-nrqm-framework-autonomous-dynamics` · postulate — Autonomous dynamics postulate P4: self-adjoint generators and unitary evolution
- `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle` · postulate — Kinematics and massive-particle model postulate P5: Newtonian frames and one-particle operators
- `post-nrqm-framework-identical-particles-and-spin` · postulate — Identical-particle and spin assignments P6: permutation sectors and finite-spin representations
- `post-nrqm-framework-preparation-and-apparatus` · postulate — Preparation and apparatus postulate P7: declared preparations, isolation and sampling assumptions
- `rem-nrqm-framework-assumption-classes-and-scope` · remark — Assumption classes and scope of the framework: P1-P7, the extension postulates and what is excluded
- `rem-nrqm-framework-primitive-and-derived-status` · remark — Primitive, adopted and derived quantities of the framework

### `qm-framework-and-quantities-examples` — Qm Framework And Quantities — Examples

- `ex-nrqm-framework-dimension-bookkeeping` · example — Dimension bookkeeping for the quantities and laws of the framework
- `ex-nrqm-framework-quantity-type-checks` · example — Type checks: rays, density operators, mixtures, local quantities and outcome laws
- `cex-nrqm-framework-zero-mass-has-no-self-adjoint-limit` · counterexample — The massive free-particle family has no strong zero-mass limit on Schwartz states
- `cex-nrqm-framework-quadratic-shear-is-not-galilean` · counterexample — A smooth time-dependent translation chart need not be an inertial frame
- `cex-nrqm-framework-mean-position-can-fail-to-exist` · counterexample — The mean position of a normalized state need not exist
- `rem-nrqm-framework-examples-scope-limits` · remark — What the example and counterexample checks of this companion page establish

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-framework-and-quantities` requires `qm-math-magnetic-and-detection`
- `qm-framework-and-quantities` requires `cm-math-geometry`
- `qm-framework-and-quantities` requires `qm-math-composites`
- `qm-framework-and-quantities` requires `qm-math-orbital-and-spin`
- `qm-framework-and-quantities-examples` requires `qm-math-magnetic-and-detection`
- `qm-framework-and-quantities-examples` requires `qm-math-composites`
- `qm-framework-and-quantities-examples` requires `qm-math-orbital-and-spin`
- `qm-framework-and-quantities-examples` requires `cm-math-geometry`
- `qm-framework-and-quantities-examples` requires `qm-math-fock-and-equilibrium`
- `qm-state-geometry` requires `qm-framework-and-quantities`
- `qm-state-geometry-examples` requires `qm-framework-and-quantities`
- `qm-observables-and-born-probabilities` requires `qm-framework-and-quantities`
- `qm-observables-and-born-probabilities-examples` requires `qm-framework-and-quantities`
- `qm-measurement-and-instruments` requires `qm-framework-and-quantities`
- `qm-measurement-and-instruments-examples` requires `qm-framework-and-quantities`
- `qm-autonomous-dynamics` requires `qm-framework-and-quantities`
- `qm-autonomous-dynamics-examples` requires `qm-framework-and-quantities`
- `qm-massive-particle-kinematics` requires `qm-framework-and-quantities`
- `qm-massive-particle-kinematics-examples` requires `qm-framework-and-quantities`
- `qm-interference-and-local-detection` requires `qm-framework-and-quantities`
- `qm-interference-and-local-detection-examples` requires `qm-framework-and-quantities`
- `qm-uncertainty-and-compatibility` requires `qm-framework-and-quantities`
- `qm-uncertainty-and-compatibility-examples` requires `qm-framework-and-quantities`
- `qm-one-dimensional-potentials` requires `qm-framework-and-quantities`
- `qm-one-dimensional-potentials-examples` requires `qm-framework-and-quantities`
- `qm-harmonic-oscillator` requires `qm-framework-and-quantities`
- `qm-harmonic-oscillator-examples` requires `qm-framework-and-quantities`
- `qm-symmetries-and-conservation` requires `qm-framework-and-quantities`
- `qm-symmetries-and-conservation-examples` requires `qm-framework-and-quantities`
- `qm-angular-momentum-and-spin` requires `qm-framework-and-quantities`
- `qm-angular-momentum-and-spin-examples` requires `qm-framework-and-quantities`
- `qm-composites-entanglement-and-reduced-states` requires `qm-framework-and-quantities`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-framework-and-quantities`
- `qm-bell-models-and-measurement-limits` requires `qm-framework-and-quantities`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-framework-and-quantities`
- `qm-identical-particles-and-exclusion` requires `qm-framework-and-quantities`
- `qm-identical-particles-and-exclusion-examples` requires `qm-framework-and-quantities`
- `qm-central-potentials-and-hydrogen` requires `qm-framework-and-quantities`
- `qm-central-potentials-and-hydrogen-examples` requires `qm-framework-and-quantities`
- `qm-controlled-approximations` requires `qm-framework-and-quantities`
- `qm-controlled-approximations-examples` requires `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-framework-and-quantities`
- `qm-three-dimensional-scattering` requires `qm-framework-and-quantities`
- `qm-three-dimensional-scattering-examples` requires `qm-framework-and-quantities`
- `qm-many-body-and-equilibrium-models` requires `qm-framework-and-quantities`
- `qm-many-body-and-equilibrium-models-examples` requires `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes` requires `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes-examples` requires `qm-framework-and-quantities`
- `qm-light-matter-and-spectral-transitions` requires `qm-framework-and-quantities`
- `qm-light-matter-and-spectral-transitions-examples` requires `qm-framework-and-quantities`
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
