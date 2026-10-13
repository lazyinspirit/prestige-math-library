# Step 4 batch reviewer — batch **54**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **54**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["54"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 54 | `qm-angular-momentum-and-spin` | A | qm-symmetries-and-conservation, qm-uncertainty-and-compatibility, cm-math-rotation-double-cover, cm-math-geometry, cm-math-central, qm-massive-particle-kinematics, qm-math-orbital-and-spin, qm-framework-and-quantities, qm-observables-and-born-probabilities, qm-state-geometry, qm-math-composites, qm-autonomous-dynamics, qm-math-magnetic-and-detection |
| 54 | `qm-angular-momentum-and-spin-examples` | B | qm-angular-momentum-and-spin, qm-framework-and-quantities, qm-massive-particle-kinematics, qm-observables-and-born-probabilities, qm-state-geometry, qm-math-orbital-and-spin, qm-autonomous-dynamics |

## Your content, in full

### `qm-angular-momentum-and-spin` — Qm Angular Momentum And Spin

- `lem-nrqm-angular-momentum-product-flow-generator` · lemma — Self-adjointness and the flow of a self-adjoint operator perturbed by a bounded operator commuting with its flow
- `lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action` · lemma — The SU(2) lift of the spatial rotation action on the component-valued wave-function space and its coordinate generators
- `lem-nrqm-angular-momentum-orbital-casimir-identity` · lemma — The orbital Casimir identity: the restrictions of the orbital generators to the degree-l blocks are spin-l models
- `def-nrqm-angular-momentum-framework-angular-momentum-observables` · definition — Orbital, spin and total angular momentum of the massive spin-s model: assigned sharp observables, units and readings
- `post-nrqm-angular-momentum-magnetic-moment-coupling` · postulate — Effective magnetic-moment coupling of the finite-spin model: gyromagnetic parameter, magnetic moment and Zeeman energy operator
- `pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws` · physics-theorem — Spin spectra and outcome laws of the massive spin-s model: directional components, the Casimir law and the spin-half probabilities
- `pthm-nrqm-angular-momentum-orbital-eigenstates-and-quantum-numbers` · physics-theorem — Orbital angular momentum eigenstates of the massive model: spherical harmonics, the l,m quantum numbers and the Casimir value
- `pthm-nrqm-angular-momentum-total-conservation` · physics-theorem — Conservation of total angular momentum for a spin-independent rotation-invariant bounded-potential dynamics
- `pthm-nrqm-angular-momentum-zeeman-precession` · physics-theorem — Spin precession and the Zeeman splitting in a uniform magnetic field: Larmor angular frequency and the conservation of one component
- `pthm-nrqm-angular-momentum-stern-gerlach-conditional-force` · physics-theorem — The conditional Stern-Gerlach force prediction of the spin-half Zeeman model: transverse momentum rate in a smooth bounded gradient field
- `pthm-nrqm-angular-momentum-two-spin-composition` · physics-theorem — Composition of two spin labels: total spin operators, the Clebsch-Gordan block decomposition and the spin-half singlet
- `rem-nrqm-angular-momentum-scope-and-empirical-status` · remark — What the angular momentum and spin page adopts, proves and does not claim

### `qm-angular-momentum-and-spin-examples` — Qm Angular Momentum And Spin — Examples

- `ex-nrqm-angular-momentum-spin-half-directional-probabilities` · example — Spin-half outcome probabilities along an arbitrary direction: the Bloch parametrization and worked cases
- `ex-nrqm-angular-momentum-l-eigenfunctions` · example — Orbital angular momentum eigenfunctions: the low spherical harmonics of the massive model
- `ex-nrqm-angular-momentum-zeeman-toy-model` · example — The two-level Zeeman toy model: sector energies, level splitting and spin precession
- `texp-nrqm-angular-momentum-stern-gerlach-splitting` · thought-experiment — The idealized Stern-Gerlach splitting: transverse momentum separation of the two spin sectors under a window hypothesis
- `rem-nrqm-angular-momentum-examples-scope-limits` · remark — What the angular momentum examples establish and what they do not

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-angular-momentum-and-spin` requires `qm-symmetries-and-conservation`
- `qm-angular-momentum-and-spin` requires `qm-uncertainty-and-compatibility`
- `qm-angular-momentum-and-spin` requires `cm-math-rotation-double-cover`
- `qm-angular-momentum-and-spin` requires `cm-math-geometry`
- `qm-angular-momentum-and-spin` requires `cm-math-central`
- `qm-angular-momentum-and-spin` requires `qm-massive-particle-kinematics`
- `qm-angular-momentum-and-spin` requires `qm-math-orbital-and-spin`
- `qm-angular-momentum-and-spin` requires `qm-framework-and-quantities`
- `qm-angular-momentum-and-spin` requires `qm-observables-and-born-probabilities`
- `qm-angular-momentum-and-spin` requires `qm-state-geometry`
- `qm-angular-momentum-and-spin` requires `qm-math-composites`
- `qm-angular-momentum-and-spin` requires `qm-autonomous-dynamics`
- `qm-angular-momentum-and-spin` requires `qm-math-magnetic-and-detection`
- `qm-angular-momentum-and-spin-examples` requires `qm-framework-and-quantities`
- `qm-angular-momentum-and-spin-examples` requires `qm-massive-particle-kinematics`
- `qm-angular-momentum-and-spin-examples` requires `qm-observables-and-born-probabilities`
- `qm-angular-momentum-and-spin-examples` requires `qm-state-geometry`
- `qm-angular-momentum-and-spin-examples` requires `qm-math-orbital-and-spin`
- `qm-angular-momentum-and-spin-examples` requires `qm-autonomous-dynamics`
- `qm-composites-entanglement-and-reduced-states` requires `qm-angular-momentum-and-spin`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-angular-momentum-and-spin`
- `qm-bell-models-and-measurement-limits` requires `qm-angular-momentum-and-spin`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-angular-momentum-and-spin`
- `qm-identical-particles-and-exclusion-examples` requires `qm-angular-momentum-and-spin`
- `qm-controlled-approximations-examples` requires `qm-angular-momentum-and-spin`
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
