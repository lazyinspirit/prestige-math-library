# Step 4 batch reviewer — batch **22**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **22**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["22"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 22 | `cm06-regular-constraints-and-moving-frames` | A | cm-math-variations, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-balances, cm-math-geometry, cm-math-rigid |
| 22 | `cm06-regular-constraints-and-moving-frames-examples` | B | cm06-regular-constraints-and-moving-frames, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-variations, cm03-momentum-work-and-energy-balances, cm-math-geometry |

## Your content, in full

### `cm06-regular-constraints-and-moving-frames` — Regular constraints and moving frames

- `def-cm06-holonomic-constraint-model` · definition — Holonomic-constraint models of the force branch: constraint data, the constrained equation, virtual displacements and the scleronomic/rheonomic distinction
- `post-cm06-ideal-reaction-law` · postulate — Adopted ideal-reaction law for holonomic constraints: the d'Alembert condition, its scope and its limits
- `pthm-cm06-multiplier-balance` · physics-theorem — Ideal holonomic constraints determine the reaction: multiplier form, explicit acceleration, unique constrained motions and the reaction-power identity
- `pthm-cm06-rheonomic-power` · physics-theorem — Reaction work and mechanical-energy balance for ideal holonomic constraints: vanishing power for scleronomic constraints and the rheonomic work term
- `def-cm06-moving-frame` · definition — Moving spatial charts of an inertial frame: rotating and translating coordinates, angular velocity and inertial terms
- `pthm-cm06-inertial-forces` · physics-theorem — The equation of motion in a moving chart: inertial terms, inertial forces, and when it restricts to an inertial chart
- `def-cm06-nonholonomic-model` · definition — Velocity-constraint (nonholonomic) models of the force branch: constant-rank constraint laws, the d'Alembert reaction and holonomic equivalence
- `rem-cm06-dalembert-vakonomic-distinction` · remark — The d'Alembert and vakonomic prescriptions are different models: what is proved, what is adopted, and which questions are open

### `cm06-regular-constraints-and-moving-frames-examples` — Regular constraints and moving frames — Examples

- `ex-cm06-bead-on-a-rotating-wire` · example — A bead on a uniformly rotating straight wire: the rheonomic ideal constraint, its reaction, and the work it performs
- `ex-cm06-pendulum-tension-and-reaction-power` · example — The planar pendulum as an ideal holonomic model: the multiplier, the tension and the vanishing reaction power of a scleronomic constraint
- `ex-cm06-rotating-chart-inertial-terms` · example — All four inertial terms checked on explicit data, and the exact return to an inertial chart
- `ex-cm06-rolling-disk-model-comparison` · example — Rolling as distinct models: the planar ideal no-slip disk against frictionless sliding, and the contact capability condition

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-variations`
- `cm06-regular-constraints-and-moving-frames` requires `cm03-momentum-work-and-energy-balances`
- `cm06-regular-constraints-and-moving-frames` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm06-regular-constraints-and-moving-frames` requires `cm01-framework-quantities-and-geometry`
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-balances`
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-geometry`
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-rigid`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm01-framework-quantities-and-geometry`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm-math-variations`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm-math-geometry`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm06-regular-constraints-and-moving-frames`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm06-regular-constraints-and-moving-frames`
- `cm11-rigid-body-dynamics-and-stability` requires `cm06-regular-constraints-and-moving-frames`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm06-regular-constraints-and-moving-frames`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm06-regular-constraints-and-moving-frames`
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
