# Step 4 batch reviewer — batch **19**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **19**. Step-5 owning group: **f**.
Return `group: "f"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `cm03-momentum-work-and-energy-balances` | A | cm02-forces-initial-data-and-newtonian-flow, line-integrals-and-the-gradient-theorem, cm-math-rigid, cm01-framework-quantities-and-geometry, cm-math-balances, cm-math-geometry |
| 19 | `cm03-momentum-work-and-energy-balances-examples` | B | cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry |

## Your content, in full

### `cm03-momentum-work-and-energy-balances` — Momentum, work and energy balances

- `def-cm03-centre-of-mass-and-momenta` · definition — Total mass, total momentum, centre of mass, angular momentum, torque, kinetic energy, power and work of a particle model in an inertial frame
- `pthm-cm03-centre-of-mass-and-kinetic-splitting` · physics-theorem — Total momentum equals total mass times centre-of-mass velocity, and the kinetic energy splits into centre-of-mass and relative parts (two-body reduced mass)
- `pthm-cm03-momentum-balance` · physics-theorem — Total momentum balance and centre-of-mass equation for a model with antisymmetric pair forces
- `pthm-cm03-angular-momentum-balance` · physics-theorem — Angular momentum balance about a fixed or moving reference point, the internal torque sum, and the centrality case
- `pthm-cm03-work-energy` · physics-theorem — Power of the total force and the work-energy theorem: $K'=\mathcal P$ and $K(t_1)-K(t_0)=W([t_0,t_1])$ along a motion
- `def-cm03-potential-and-mechanical-energy` · definition — Potential presentations of a force model, potential and mechanical energy, closed versus exact force fields, local potentials and equipotential level sets
- `pthm-cm03-energy-balance` · physics-theorem — Mechanical energy balance for a potential presentation: $E'=\partial_tU$ plus the residual power, conservation for a static potential with no residual forces, and the integrated work form
- `pthm-cm03-frame-transformations` · physics-theorem — Transformation of the state quantities under a change of inertial frame: centre of mass, total momentum, kinetic energy, angular momentum, torque, power, work and mechanical energy
- `rem-cm03-conservation-scope` · remark — Status audit and scope of the balance page: conditional conservation, open systems, frames, potential normalization and empirical boundaries

### `cm03-momentum-work-and-energy-balances-examples` — Momentum, work and energy balances — Examples

- `ex-cm03-two-body-hooke-model-check` · example — A two-body Hooke model with an exact circular relative motion: momentum, kinetic splitting, moving-origin angular momentum, energy conservation and the kinetic boost law checked on explicit data
- `ex-cm03-driven-mechanical-energy-balance` · example — A driven one-dimensional model with a time-dependent potential and a residual force: the mechanical-energy balance, the integrated work form and the normalization ambiguity computed on explicit data
- `cex-cm03-centrality-is-not-necessary-for-angular-momentum-conservation` · counterexample — Non-central antisymmetric pair forces with vanishing internal torque sum: the centrality clause is not necessary for angular-momentum conservation
- `cex-cm03-closed-force-field-without-a-global-potential` · counterexample — A closed model force field on an annular domain without a global potential energy: mechanical energy is available only locally

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm03-momentum-work-and-energy-balances` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm03-momentum-work-and-energy-balances` requires `cm-math-rigid`
- `cm03-momentum-work-and-energy-balances` requires `cm01-framework-quantities-and-geometry`
- `cm03-momentum-work-and-energy-balances` requires `cm-math-balances`
- `cm03-momentum-work-and-energy-balances` requires `cm-math-geometry`
- `cm03-momentum-work-and-energy-balances-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm03-momentum-work-and-energy-balances-examples` requires `cm01-framework-quantities-and-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm03-momentum-work-and-energy-balances`
- `cm05-two-body-central-forces-and-gravitation` requires `cm03-momentum-work-and-energy-balances`
- `cm05-two-body-central-forces-and-gravitation-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm06-regular-constraints-and-moving-frames` requires `cm03-momentum-work-and-energy-balances`
- `cm06-regular-constraints-and-moving-frames-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm03-momentum-work-and-energy-balances`
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm09-coupled-oscillations-and-approximation` requires `cm03-momentum-work-and-energy-balances`
- `cm10-rigid-body-configuration-and-inertia` requires `cm03-momentum-work-and-energy-balances`
- `cm11-rigid-body-dynamics-and-stability` requires `cm03-momentum-work-and-energy-balances`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm03-momentum-work-and-energy-balances`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm03-momentum-work-and-energy-balances`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm14-hamilton-jacobi-and-integrability` requires `cm03-momentum-work-and-energy-balances`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm03-momentum-work-and-energy-balances`
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm03-momentum-work-and-energy-balances`
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
