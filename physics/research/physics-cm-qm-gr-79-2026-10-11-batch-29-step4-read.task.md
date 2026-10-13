# Step 4 batch reviewer — batch **29**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **29**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["29"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 29 | `cm13-symplectic-geometry-and-canonical-methods` | A | cm-math-numerical, cm12-legendre-transformation-and-hamiltonian-mechanics, cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-canonical |
| 29 | `cm13-symplectic-geometry-and-canonical-methods-examples` | B | cm13-symplectic-geometry-and-canonical-methods, cm12-legendre-transformation-and-hamiltonian-mechanics, cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-canonical, cm-math-numerical |

## Your content, in full

### `cm13-symplectic-geometry-and-canonical-methods` — Symplectic geometry and canonical methods

- `def-cm13-two-form` · definition — The canonical one-form and the two-form of a potential presentation: $\lambda=p\cdot dx$ on the Cartesian momentum phase chart and the induced forms on each generalized-coordinate chart
- `pthm-cm13-two-form-is-symplectic` · physics-theorem — The two-form of a potential presentation is closed and nondegenerate, and each generalized-coordinate momentum chart carries the same symplectic structure: $\Phi_X^*\lambda=\sum P_a\,dq^a$ and $\Phi_X^*\omega=\sum dq^a\wedge dP_a$
- `def-cm13-canonical-form` · definition — Canonical coordinates and the canonical form of the two-form for a potential presentation: the coordinate expression $\omega=\sum_{a=1}^{m} d\theta^a\wedge d\theta^{m+a}$ with $m$ the chart's half-dimension, and the model's own momentum charts
- `def-cm13-hamiltonian-field` · definition — The Hamiltonian field of a phase function for a potential presentation: the unique field $X_f$ with $\iota_{X_f}\omega=df$, and $X_H=(H_p,-H_x)$ for the branch Hamiltonian
- `pthm-cm13-hamiltonian-field-integrates-the-model-equations` · physics-theorem — Integral curves of the presentation's Hamiltonian field are exactly the momentum-phase curves of the model's motions, in every chart; and the forced field is Hamiltonian exactly when the residual force has a velocity-independent potential
- `def-cm13-poisson` · definition — The Poisson bracket of phase functions of a potential presentation: $\{f,g\}=\omega(X_f,X_g)$ and the coordinate formula in each canonical chart
- `pthm-cm13-bracket-identities` · physics-theorem — The bracket of a potential presentation is bilinear, skew, a derivation in each slot, satisfies the Jacobi identity, and reproduces the fundamental brackets and the Hamiltonian field
- `pthm-cm13-observable-evolution` · physics-theorem — Evolution of phase functions along the model's Hamiltonian solutions: $df/dt=\partial_t f+\{f,H\}$, the first-integral criterion, and the closed bracket algebra of autonomous first integrals
- `def-cm13-canonical-map` · definition — Canonical maps of a potential presentation: pullback-preserving immersions and the equal-dimensional determinant and field-transport tests
- `pthm-cm13-flow-preservation` · physics-theorem — The Hamiltonian evolution of a potential presentation preserves the two-form, the bracket and the determinant on its actual time-slice domains, also when the Hamiltonian depends on time
- `pthm-cm13-dynamics-transport-under-canonical-maps` · physics-theorem — Equal-dimensional canonical transformations of a potential presentation conjugate Hamiltonian fields and transport systems and brackets
- `lem-cm13-poincare-cartan-annihilation-characterization` · lemma — A curve solves Hamilton's equations if and only if its velocity annihilates $d(p\cdot dq-H\,dt)$, with the three coordinate components computed
- `pthm-cm13-liouville` · physics-theorem — Liouville's theorem for a potential presentation: the phase-volume form $\omega^{3N}/(3N)!$ and the Lebesgue measure in each canonical chart are preserved by the Hamiltonian evolution on its actual domains
- `pthm-cm13-generating-functions` · physics-theorem — Generating functions for a potential presentation: first- and second-kind data generate canonical maps locally, the local converse under an invertible projection, and the time-dependent Hamiltonian $K=H+\partial_tS$
- `rem-cm13-locality-topology` · remark — Scope of the symplectic and canonical methods for a potential presentation: locality of generating functions, projections and determinant tests, absent global claims, and empirical status

### `cm13-symplectic-geometry-and-canonical-methods-examples` — Symplectic geometry and canonical methods — Examples

- `ex-cm13-fundamental-brackets-and-evolution-checks` · example — Fundamental brackets and Bracket evolution on explicit one-label data: $\{x^a,H\}=p_a/m$, $\{p_a,H\}=-U_{x^a}$, and the oscillator check
- `ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks` · example — The isotropic oscillator of the model: explicit solution, the determinant and matrix tests on each two-dimensional block, and the area and energy checks
- `ex-cm13-free-particle-flow-generating-function` · example — The free particle of the model: the flow $Q=q+(t/m)p$ generated by the first-kind function $S_t(q,Q)=-m\lvert Q-q\rvert^{2}/(2t)$, the projection check and the exact change of $\lambda$
- `ex-cm13-point-transformation-generating-function-and-projection` · example — The point transformation of the model: the chart transition $(q,\pi)\mapsto(X(q),DX(q)^{-\mathsf T}\pi)$ is generated in the second kind, has a nowhere invertible $(q,Q)$-projection, and is contrasted with the momentum shift
- `ex-cm13-determinant-tests-for-linear-canonical-maps` · example — Determinant tests on explicit linear maps: $\det A=1$ is equivalent to canonicity in dimension two, and strictly weaker in dimension four (the volume-preserving shear)
- `ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical` · example — The velocity-Verlet step of the model's mechanical splitting is a canonical map of the presentation: exact flows of the drift and kick, unit determinant, and the oscillator check

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm-math-numerical`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm03-momentum-work-and-energy-balances`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm01-framework-quantities-and-geometry`
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm-math-canonical`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm12-legendre-transformation-and-hamiltonian-mechanics`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm03-momentum-work-and-energy-balances`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm01-framework-quantities-and-geometry`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm-math-canonical`
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm-math-numerical`
- `cm14-hamilton-jacobi-and-integrability` requires `cm13-symplectic-geometry-and-canonical-methods`
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm13-symplectic-geometry-and-canonical-methods`
- `cm16-stability-perturbations-and-chaos` requires `cm13-symplectic-geometry-and-canonical-methods`
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
