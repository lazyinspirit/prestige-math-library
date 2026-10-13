# Step 4 batch reviewer — batch **23**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **23**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["23"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 23 | `cm07-stationary-action-and-lagrangian-dynamics` | A | cm-math-verification, cm06-regular-constraints-and-moving-frames, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm03-momentum-work-and-energy-balances, cm-math-variations |
| 23 | `cm07-stationary-action-and-lagrangian-dynamics-examples` | B | cm07-stationary-action-and-lagrangian-dynamics, cm02-forces-initial-data-and-newtonian-flow, cm03-momentum-work-and-energy-balances, cm01-framework-quantities-and-geometry, cm-math-variations, cm06-regular-constraints-and-moving-frames |

## Your content, in full

### `cm07-stationary-action-and-lagrangian-dynamics` — Stationary action and Lagrangian dynamics

- `def-cm07-action-and-mechanical-lagrangian` · definition — The action functional of a force model with a potential presentation: the mechanical Lagrangian, its chart instance and its dimensions
- `pthm-cm07-first-variation-and-euler-lagrange-expression` · physics-theorem — The first variation of the mechanical action and the Euler-Lagrange expression in model terms
- `pthm-cm07-euler-lagrange-equations` · physics-theorem — The stationary-action criterion and the potential-part Euler-Lagrange equation
- `pthm-cm07-newton-equivalence` · physics-theorem — Stationary curves of the mechanical action are exactly the restrictions of the model's motions (global potential branch)
- `pthm-cm07-coordinate-covariance-of-the-equations` · physics-theorem — Time-dependent coordinate maps transform the potential-part equation into the substituted Euler-Lagrange equation
- `pthm-cm07-boundary-terms-and-gauge` · physics-theorem — Total-derivative Lagrangians, the potential representative and scaling: invariant stationary curves with endpoint terms
- `def-cm07-generalized-coordinates-and-forces` · definition — Generalized-coordinate maps of the model, the substituted Lagrangian, the kinetic metric and generalized forces
- `lem-cm07-immersion-euler-lagrange-transport` · lemma — Transport of the Euler-Lagrange expression under a C^3 map: E of the substituted Lagrangian is the Jacobian-transpose multiple of E of the ambient Lagrangian
- `pthm-cm07-lagrangian-reduction-of-ideal-constraints` · physics-theorem — Ideal scleronomic holonomic constraints: the substituted Lagrange equations are equivalent to the constrained model equation
- `rem-cm07-scope-and-singular-warnings` · remark — Scope of the stationary-action formulation: no minimisation, regular mechanical Lagrangians, no general velocity-constraint equivalence and empirical status

### `cm07-stationary-action-and-lagrangian-dynamics-examples` — Stationary action and Lagrangian dynamics — Examples

- `ex-cm07-free-particle-straight-lines` · example — The free particle: the unique stationary curve between fixed endpoints is the straight uniform motion, and it minimises the action
- `ex-cm07-oscillator-stationary-saddle-check` · example — The harmonic oscillator on a long interval: the stationary curve is neither a local minimum nor a local maximum
- `ex-cm07-polar-coordinate-kinetic-metric-check` · example — Cylindrical coordinates for one label: the kinetic metric m diag(1, r^2, 1) and the coordinate form of the model's equation
- `ex-cm07-total-derivative-gauge-check` · example — A total-derivative Lagrangian on explicit data: the endpoint term and the unchanged equations
- `ex-cm07-nonholonomic-unrestricted-action-fails` · example — The unrestricted action principle fails for the normalized nonholonomic relation $z_s = x y_s$: the d'Alembert motion is not vakonomic
- `ex-cm07-pendulum-constraint-elimination-check` · example — The planar pendulum by constraint elimination: kinetic metric, Lagrange equation and the ideal reaction recovered

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm-math-verification`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm06-regular-constraints-and-moving-frames`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm01-framework-quantities-and-geometry`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm-math-variations`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm01-framework-quantities-and-geometry`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm-math-variations`
- `cm07-stationary-action-and-lagrangian-dynamics-examples` requires `cm06-regular-constraints-and-moving-frames`
- `cm08-symmetry-noether-and-conditional-conservation` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm08-symmetry-noether-and-conditional-conservation-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm09-coupled-oscillations-and-approximation` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm14-hamilton-jacobi-and-integrability` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm07-stationary-action-and-lagrangian-dynamics`
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
