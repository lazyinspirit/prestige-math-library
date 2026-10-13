# Step 4 batch reviewer — batch **28**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **28**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `cm12-legendre-transformation-and-hamiltonian-mechanics` | A | cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm-math-variations, cm01-framework-quantities-and-geometry, cm06-regular-constraints-and-moving-frames |
| 28 | `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` | B | cm12-legendre-transformation-and-hamiltonian-mechanics, cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm06-regular-constraints-and-moving-frames, cm-math-variations |

## Your content, in full

### `cm12-legendre-transformation-and-hamiltonian-mechanics` — Legendre transformation and Hamiltonian mechanics

- `def-cm12-cotangent-momentum` · definition — The momentum of a potential presentation: the fibre derivative of the mechanical Lagrangian, the Cartesian momentum Mv and generalized momenta
- `def-cm12-regularity` · definition — Velocity-regular potential presentations: the velocity Hessian of the mechanical Lagrangian, regular states and regular charts
- `def-cm12-hyperregularity` · definition — Hyperregular potential presentations and their inverse Legendre branches in the model's charts
- `def-cm12-hamiltonian` · definition — The Hamiltonian of a hyperregular potential presentation: the Legendre transform of the mechanical Lagrangian, its domain and its dimensions
- `pthm-cm12-local-legendre` · physics-theorem — The velocity Hessian of the mechanical Lagrangian and the local invertibility of its Legendre map in every chart of the model
- `pthm-cm12-mechanical-hyperregularity` · physics-theorem — Every potential presentation is hyperregular in its charts, with inverse branch $v = \mathsf M^{-1}p$ (or $G(q)^{-1}p$) and the explicit kinetic-plus-potential Hamiltonian
- `pthm-cm12-hamilton-equivalence` · physics-theorem — Hamilton's equations of the mechanical presentation are equivalent to the model's equation of motion, with residual forces as momentum sources and the coordinate form on every chart
- `pthm-cm12-energy-time` · physics-theorem — The mechanical Hamiltonian is the model's energy in the inertial chart, its balance is the energy balance, and the substituted-chart Hamiltonian is the energy of time-independent coordinates
- `rem-cm12-singular-models` · remark — Scope of the Legendre transformation: singular velocity Hessians, regular versus hyperregular presentations, and the excluded constraint theory

### `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` — Legendre transformation and Hamiltonian mechanics — Examples

- `ex-cm12-mechanical-legendre-positive-metric` · example — Positive kinetic metric: the fibre map $p = \mathsf Mv$, the Hamiltonian and Hamilton's equations on explicit one- and two-label data
- `ex-cm12-pendulum-legendre` · example — The planar pendulum in Hamiltonian form: kinetic metric $ml^{2}$, substituted Hamiltonian $p^{2}/(2ml^{2}) - mgl\cos\theta$ and the reduced equation
- `ex-cm12-shifted-momentum` · example — Shifted momentum from a total-derivative modification: $p' = p + F_x$, $H' = H - F_t$ and unchanged motion on explicit data
- `ex-cm12-regular-not-surjective` · example — Regular but not hyperregular: the Lagrangian $e^{v}$, its branch $H(p)=p\ln p-p$ on $p>0$ and the absent inverse at nonpositive momenta
- `ex-cm12-moving-coordinates` · example — Moving coordinates: the substituted Hamiltonian of a spring on a uniformly moving support, its conservation and the non-conservation of the mechanical energy

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm03-momentum-work-and-energy-balances`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm-math-variations`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm01-framework-quantities-and-geometry`
- `cm12-legendre-transformation-and-hamiltonian-mechanics` requires `cm06-regular-constraints-and-moving-frames`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm01-framework-quantities-and-geometry`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm06-regular-constraints-and-moving-frames`
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` requires `cm-math-variations`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm14-hamilton-jacobi-and-integrability` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
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
