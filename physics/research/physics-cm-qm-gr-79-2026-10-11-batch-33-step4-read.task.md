# Step 4 batch reviewer — batch **33**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **33**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `cm17-classical-continua-with-explicit-constitutive-assumptions` | A | cm-math-fluid, cm07-stationary-action-and-lagrangian-dynamics, cm-math-geometry, cm01-framework-quantities-and-geometry, cm-math-continuum |
| 33 | `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` | B | cm17-classical-continua-with-explicit-constitutive-assumptions, cm-math-continuum, cm01-framework-quantities-and-geometry, cm-math-fluid, cm-math-geometry |

## Your content, in full

### `cm17-classical-continua-with-explicit-constitutive-assumptions` — Classical continua with explicit constitutive assumptions

- `def-cm17-continuum-body-and-units` · definition — Continuum body data, the fixed inertial frame and the dimensions of the fields
- `post-cm17-continuum-kinematic-model` · postulate — Adopted continuum kinematic model: body data, smooth motions as families of label worldlines, the continuum idealization and frame covariance
- `def-cm17-density-and-mass` · definition — The density field of the continuum model and the mass of a material subregion
- `post-cm17-mass-balance` · postulate — Adopted mass balance: the mass of every material subregion is constant in time
- `pthm-cm17-transport-and-material-derivative` · physics-theorem — The transport identity and the material derivative along label worldlines for the adopted continuum model
- `pthm-cm17-continuity-equation` · physics-theorem — The continuity equation of the continuum model: local form of mass balance, the material form, and the incompressibility reading
- `def-cm17-traction-and-stress` · definition — Traction fields and stress matrices of the continuum model, with units and sign conventions
- `post-cm17-contact-force-model` · postulate — Adopted force model of the continuum branch: continuous body forces and Cauchy contact tractions
- `post-cm17-momentum-balance` · postulate — Adopted balance principles of the continuum model: force and couple-free torque balance on every admissible region
- `pthm-cm17-stress-matrix-and-symmetry` · physics-theorem — Existence, uniqueness and symmetry of the stress matrix from the adopted balance principles
- `pthm-cm17-momentum-equation` · physics-theorem — The momentum equation of the continuum model: local form rho D_t u = rho b + div sigma
- `post-cm17-linear-elastic-constitutive` · postulate — Adopted isotropic linear elastic constitutive model with its small-strain regime and strain energy
- `pthm-cm17-linear-elastic-equation-of-motion` · physics-theorem — The displacement equation of the linear elastic branch: rho_0 partial_t^2 xi = rho_0 b + mu_s Laplacian xi + (lambda + mu_s) grad div xi
- `pthm-cm17-elastic-plane-wave-speeds` · physics-theorem — Plane elastic waves in the adopted model: the dispersion condition and the longitudinal and transverse speeds
- `post-cm17-fluid-constitutive` · postulate — Adopted fluid constitutive branches: incompressible Newtonian, barotropic inviscid, and the periodic-cell idealization
- `pthm-cm17-incompressible-periodic-local-evolution` · physics-theorem — Local existence, uniqueness and pressure reconstruction for the incompressible fluid model on the periodic cell
- `pthm-cm17-chain-limit-of-the-string-model` · physics-theorem — The continuum string model as the proved limit of the mass-spring chain, with explicit convergence and dispersion error
- `pthm-cm17-string-wave-solutions` · physics-theorem — The string model: d'Alembert solutions, fixed-end modes and uniqueness for the adopted one-dimensional continuum
- `rem-cm17-boundary-regularity-and-scope` · remark — Boundary data, regularity limits and open scopes of the continuum page, and the model-versus-nature reading

### `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` — Classical continua with explicit constitutive assumptions — Examples

- `ex-cm17-uniform-expansion-transport-check` · example — Worked check of the transport identity and the continuity equation on a uniform expansion
- `ex-cm17-elastic-plane-wave-and-energy-check` · example — A longitudinal plane wave in the linear elastic branch: stress, equation of motion and strain energy computed
- `ex-cm17-string-modes-and-tail-check` · example — Two-mode fixed-end string: exact solution, d'Alembert cross-check and the O(N^{-4}) tail bound at N=1
- `ex-cm17-spring-chain-limit-numbers` · example — Chain versus string on the normalized standing wave: exact discrete error, the N=100 bounds, and physical circumference 2π m
- `ex-cm17-riemann-shock-and-rarefaction-check` · example — A Riemann shock and a rarefaction of the scalar model: explicit weak solutions, entropy coefficients and initial trace
- `ex-cm17-channel-flow-and-no-slip-check` · example — Poiseuille and Couette channel flows of the viscous branch: explicit profiles, flux and wall data
- `ex-cm17-periodic-shear-exact-solution-check` · example — Periodic shear fields: an exact steady Euler solution, failure for the viscous branch, and the classification of steady periodic shears
- `cex-cm17-traction-symmetry-without-stress-matrix` · counterexample — FALSE: the reversed-normal convention alone makes a continuous traction field a stress matrix. The field t(n)=|n_1|n refutes it

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-fluid`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm01-framework-quantities-and-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-continuum`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-continuum`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm01-framework-quantities-and-geometry`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-fluid`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-geometry`
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
