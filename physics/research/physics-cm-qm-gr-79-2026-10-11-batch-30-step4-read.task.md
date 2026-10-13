# Step 4 batch reviewer — batch **30**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **30**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["30"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 30 | `cm14-hamilton-jacobi-and-integrability` | A | cm-math-central, cm08-symmetry-noether-and-conditional-conservation, cm13-symplectic-geometry-and-canonical-methods, cm12-legendre-transformation-and-hamiltonian-mechanics, cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-canonical, cm-math-approximation |
| 30 | `cm14-hamilton-jacobi-and-integrability-examples` | B | cm14-hamilton-jacobi-and-integrability, cm04-one-dimensional-conservative-and-dissipative-models, cm05-two-body-central-forces-and-gravitation, relations-functions-and-quotients, compactness, cm12-legendre-transformation-and-hamiltonian-mechanics, cm-math-canonical, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm13-symplectic-geometry-and-canonical-methods, cm-math-central, cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances |

## Your content, in full

### `cm14-hamilton-jacobi-and-integrability` — Hamilton–Jacobi and integrability

- `def-cm14-hamilton-jacobi-equation` · definition — The Hamilton-Jacobi equation of a declared potential presentation: the class of action-dimension functions $S$ with $S_t+H(t,q,S_q)=0$ in one momentum chart
- `def-cm14-complete-integral` · definition — A complete integral of the model's Hamilton-Jacobi equation: nondegenerate mixed derivative, momentum map and Jacobi constants
- `def-cm14-involution` · definition — First integrals of the model's Hamiltonian and families in involution: the bracket criterion and differential independence
- `def-cm14-complete-integrability` · definition — Completely integrable data of a declared presentation: $n$ smooth phase functions with $F_1=H$, pairwise in involution and independent on the regular locus
- `pthm-cm14-hamilton-jacobi-characteristics` · physics-theorem — A complete integral of the model's Hamilton-Jacobi equation produces the model's motions, its Jacobi constants and local canonical $(\beta,\alpha)$ labels
- `pthm-cm14-regular-tori` · physics-theorem — Compact connected regular fibres of a completely integrable datum of the presentation are Lagrangian tori with a full period lattice
- `pthm-cm14-action-angle` · physics-theorem — Action-angle coordinates of a completely integrable presentation: period-one angles, action coordinates, $H=h(I)$ and linear motion on the tori
- `pthm-cm14-adiabatic-invariance` · physics-theorem — Adiabatic invariance of the action of a slowly varying one-frequency model: an order-$\varepsilon$ drift bound on the $O(1/\varepsilon)$ time scale
- `rem-cm14-scope-of-hamilton-jacobi-and-integrability` · remark — Scope of the Hamilton-Jacobi and integrability statements: locality, the fibre hypotheses, global obstructions and the frequency conventions

### `cm14-hamilton-jacobi-and-integrability-examples` — Hamilton–Jacobi and integrability — Examples

- `ex-cm14-harmonic-oscillator-hamilton-jacobi-check` · example — The harmonic model worked through: an explicit complete integral, its characteristic motion, and the action-angle chart with $I=\oint p\,dx$ and period-one frequency $1/T$
- `ex-cm14-kepler-radial-action-check` · example — The gravitational two-body model on an elliptic orbit: two simple turning points of the effective potential and $J_{\mathrm a}'(E)=T/(2\pi)=\sqrt{\mu/\kappa}\,a^{3/2}$
- `cex-cm14-harmonic-model-critical-fibre` · counterexample — The zero-energy level of the harmonic model: a compact connected common level set of a completely integrable datum that is a point, not a torus
- `cex-cm14-free-particle-noncompact-fibre` · counterexample — A free label: a nonempty regular common level set of a completely integrable datum that is noncompact and has no period lattice
- `ex-cm14-oscillator-caustic-check` · example — The conjugate time of the harmonic model: the complete integral's mixed derivative is unbounded and the characteristic family refocuses at $\omega t\in\pi\mathbb Z$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-central`
- `cm14-hamilton-jacobi-and-integrability` requires `cm08-symmetry-noether-and-conditional-conservation`
- `cm14-hamilton-jacobi-and-integrability` requires `cm13-symplectic-geometry-and-canonical-methods`
- `cm14-hamilton-jacobi-and-integrability` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm14-hamilton-jacobi-and-integrability` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm14-hamilton-jacobi-and-integrability` requires `cm03-momentum-work-and-energy-balances`
- `cm14-hamilton-jacobi-and-integrability` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm14-hamilton-jacobi-and-integrability` requires `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-canonical`
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-approximation`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm05-two-body-central-forces-and-gravitation`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm-math-canonical`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm01-framework-quantities-and-geometry`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm13-symplectic-geometry-and-canonical-methods`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm-math-central`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm16-stability-perturbations-and-chaos` requires `cm14-hamilton-jacobi-and-integrability`
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
