# Step 4 batch reviewer — batch **9**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **9**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["9"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 9 | `cm-math-rigid` | A | cm-math-balances, cm-math-geometry, the-lebesgue-integral-and-the-convergence-theorems, the-spectral-theorem-and-singular-value-decomposition, measures-and-their-basic-properties, sigma-algebras-and-borel-sets, gaussian-elimination-and-row-reduction, sine-cosine-and-the-definition-of-pi, the-exponential-function, the-logarithm-and-general-powers |
| 9 | `cm-math-rigid-examples` | B | cm-math-rigid, measures-and-their-basic-properties, sine-cosine-and-the-definition-of-pi, the-exponential-function, the-logarithm-and-general-powers |

## Your content, in full

### `cm-math-rigid` — Cm Math Rigid

- `lem-cm-matrix-curve-derivative-rules` · lemma — Derivative rules for differentiable matrix-valued curves, and skewness of $R^{\mathsf T}R'$ for a curve in $SO(3)$
- `lem-cm-skew-matrix-cross-product-correspondence` · lemma — The skew-matrix/cross-product correspondence $[\omega]_\times z=\omega\times z$ and its conjugation law $R[\omega]_\times R^{\mathsf T}=[R\omega]_\times$
- `def-cm-mass-distribution-and-inertia-matrix` · definition — Mass distributions on $\mathbb R^3$: total mass, first moment and inertia matrix
- `lem-cm-mass-moments-are-finite` · lemma — Finiteness of the moments of a bounded finite Borel measure on $\mathbb R^3$
- `def-cm-rigid-placement-and-body-angular-velocity` · definition — Rigid placements, body and spatial angular velocity, and material velocities
- `lem-cm-inertia-matrix-properties` · lemma — Symmetry, the quadratic identity $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu$, and the positive-definiteness criterion for the inertia matrix
- `thm-cm-rigid-kinetic-energy-and-angular-momentum` · theorem — Kinetic energy and angular momentum of a rigid placement: $K=\tfrac12m\lVert c'\rVert_2^2+\tfrac12\omega^{\mathsf T}I\omega$ and $L_c=RI\omega$
- `cor-cm-principal-axes-of-the-inertia-matrix` · corollary — Principal axes and principal moments of the inertia matrix, and positivity in the nondegenerate case
- `thm-cm-euler-equations-and-torque-free-invariants` · theorem — Euler's equations $I\omega'+\omega\times I\omega=R^{\mathsf T}\tau$ under an adopted torque balance, and the torque-free invariants and principal-axis equations
- `thm-cm-stability-of-extreme-principal-axes` · theorem — Lyapunov stability of spin about the largest and smallest principal axes of the torque-free top
- `thm-cm-instability-of-the-intermediate-axis` · theorem — Instability of spin about the intermediate principal axis of the torque-free top
- `thm-cm-linearized-torque-free-euler-equations` · theorem — Linearization of the torque-free Euler system at a principal-axis spin, and the oscillatory/exponential dichotomy
- `lem-cm-coordinate-rotation-matrices` · lemma — The coordinate rotation matrices $R_z(a)$ and $R_y(a)$: values in $SO(3)$, composition law, and derivatives
- `def-cm-euler-angle-parametrization-and-heavy-top-system` · definition — The Euler-angle parametrization and the heavy symmetric top system
- `thm-cm-heavy-top-reduction` · theorem — Reduction of the heavy symmetric top system: conserved momenta, one-dimensional $\theta$ equation and conserved reduced energy
- `lem-cm-euler-angle-angular-velocity` · lemma — Angular velocity in Euler angles: $\omega_3=\psi'+\varphi'\cos\theta$ and $\omega_1^2+\omega_2^2=\theta'^2+\varphi'^2\sin^2\theta$

### `cm-math-rigid-examples` — Cm Math Rigid — Examples

- `ex-cm-inertia-tensors-of-point-masses` · example — Finite point-mass inertia matrices computed and checked against the positivity criterion
- `ex-cm-torque-free-spin-checks` · example — Finite checks of the torque-free spin results: stability certificates, an escape-time bound, and the linearized dichotomy
- `ex-cm-euler-angle-and-heavy-top-checks` · example — Finite checks of the Euler-angle parametrization, the angular-velocity formula and a steady precession of the heavy top

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-rigid` requires `cm-math-balances`
- `cm-math-rigid` requires `cm-math-geometry`
- `cm03-momentum-work-and-energy-balances` requires `cm-math-rigid`
- `cm06-regular-constraints-and-moving-frames` requires `cm-math-rigid`
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-rigid`
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm-math-rigid`
- `cm11-rigid-body-dynamics-and-stability` requires `cm-math-rigid`
- `cm11-rigid-body-dynamics-and-stability-examples` requires `cm-math-rigid`
- `cm-math-verification` requires `cm-math-rigid`
- `cm-math-verification-examples` requires `cm-math-rigid`
- `qm-math-orbital-and-spin` requires `cm-math-rigid`
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
