# Step 4 batch reviewer — batch **59**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **59**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["59"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 59 | `qm-controlled-approximations` | A | qm-central-potentials-and-hydrogen, qm-harmonic-oscillator, qm-math-fock-and-equilibrium, qm-math-controlled-dynamics, qm-framework-and-quantities, qm-state-geometry, qm-observables-and-born-probabilities, qm-autonomous-dynamics, qm-massive-particle-kinematics, qm-one-dimensional-potentials, qm-math-coulomb |
| 59 | `qm-controlled-approximations-examples` | B | qm-controlled-approximations, qm-framework-and-quantities, qm-observables-and-born-probabilities, qm-central-potentials-and-hydrogen, qm-math-coulomb, qm-math-orbital-and-spin, qm-angular-momentum-and-spin, qm-massive-particle-kinematics, qm-one-dimensional-potentials |

## Your content, in full

### `qm-controlled-approximations` — Qm Controlled Approximations

- `lem-nrqm-approximations-scaled-line-model-correspondence` · lemma — Nondimensionalisation of the one-dimensional stationary equation and of the WKB exponent
- `lem-nrqm-approximations-finite-rank-gapped-cluster-projection` · lemma — Finite-rank gapped spectral cluster under a bounded perturbation
- `def-nrqm-approximations-framework-variational-trial-model` · definition — The declared variational trial reading: assigned energy observable, form domain, trial value, bottom and gap
- `def-nrqm-approximations-framework-perturbed-family-model` · definition — The declared perturbed-family model: bounded self-adjoint perturbation, isolated gapped label and followed spectral label
- `def-nrqm-approximations-framework-wkb-regime-model` · definition — The declared WKB regime model: nondimensionalised line equation, turning points, phase integrals and the declared barrier transmission reading
- `post-nrqm-approximations-static-finite-level-dipole-coupling` · postulate — Static finite-level electric-dipole coupling: compressed dipole of the declared two-body Coulomb model in a uniform field
- `pthm-nrqm-approximations-variational-bounds-and-min-max` · physics-theorem — Variational trial bounds, gap-overlap control and the min-max characterisation of the declared model's discrete eigenvalues
- `pthm-nrqm-approximations-nondegenerate-perturbation-expansion` · physics-theorem — Nondegenerate stationary perturbation of a simple gapped label: first- and second-order coefficients and an explicit cubic remainder
- `pthm-nrqm-approximations-degenerate-first-order-splitting` · physics-theorem — Degenerate stationary perturbation: the perturbed eigenvalues stay within 4 lambda^2 v^2/g of the first-order shifts, and no branch relaxation is asserted
- `pthm-nrqm-approximations-wkb-allowed-region-error` · physics-theorem — WKB approximation on an allowed interval of the declared regime model: explicit Gronwall error bound away from turning points
- `pthm-nrqm-approximations-turning-point-connection` · physics-theorem — Airy connection across a single simple turning point of the declared regime model, with envelope error control
- `pthm-nrqm-approximations-barrier-transmission-asymptotics` · physics-theorem — Separated smooth-barrier tunnelling: the declared transmission coefficient is exp(-2S/h) up to explicit small-h and barrier-thickness errors
- `rem-nrqm-approximations-scope-and-empirical-status` · remark — What the controlled-approximations page adopts, proves and does not claim: gaps, branch populations, turning points and the static-Stark limitation

### `qm-controlled-approximations-examples` — Qm Controlled Approximations — Examples

- `ex-nrqm-approximations-two-level-finite-gap-correction` · example — A two-level finite-gap model: exact eigenvalues, the second-order correction and a finite check of the cubic remainder bound
- `ex-nrqm-approximations-stark-finite-level-shift` · example — A finite-level static Stark model: vanishing first-order shift, exact quadratic splitting and a finite check of the remainder bound
- `ex-nrqm-approximations-zeeman-multiplet-splitting` · example — A spin-one multiplet in a uniform field: the exact Zeeman spectrum and degenerate first-order check
- `ex-nrqm-approximations-smooth-barrier-tunnelling-limits` · example — Tunnelling asymptotic limits: the smooth-barrier semiclassical limit and the exact rectangular prefactor comparison
- `rem-nrqm-approximations-examples-scope-limits` · remark — What the controlled-approximations examples establish and what they do not

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-controlled-approximations` requires `qm-central-potentials-and-hydrogen`
- `qm-controlled-approximations` requires `qm-harmonic-oscillator`
- `qm-controlled-approximations` requires `qm-math-fock-and-equilibrium`
- `qm-controlled-approximations` requires `qm-math-controlled-dynamics`
- `qm-controlled-approximations` requires `qm-framework-and-quantities`
- `qm-controlled-approximations` requires `qm-state-geometry`
- `qm-controlled-approximations` requires `qm-observables-and-born-probabilities`
- `qm-controlled-approximations` requires `qm-autonomous-dynamics`
- `qm-controlled-approximations` requires `qm-massive-particle-kinematics`
- `qm-controlled-approximations` requires `qm-one-dimensional-potentials`
- `qm-controlled-approximations` requires `qm-math-coulomb`
- `qm-controlled-approximations-examples` requires `qm-framework-and-quantities`
- `qm-controlled-approximations-examples` requires `qm-observables-and-born-probabilities`
- `qm-controlled-approximations-examples` requires `qm-central-potentials-and-hydrogen`
- `qm-controlled-approximations-examples` requires `qm-math-coulomb`
- `qm-controlled-approximations-examples` requires `qm-math-orbital-and-spin`
- `qm-controlled-approximations-examples` requires `qm-angular-momentum-and-spin`
- `qm-controlled-approximations-examples` requires `qm-massive-particle-kinematics`
- `qm-controlled-approximations-examples` requires `qm-one-dimensional-potentials`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-controlled-approximations`
- `qm-three-dimensional-scattering` requires `qm-controlled-approximations`
- `qm-many-body-and-equilibrium-models` requires `qm-controlled-approximations`
- `qm-light-matter-and-spectral-transitions` requires `qm-controlled-approximations`
- `qm-light-matter-and-spectral-transitions-examples` requires `qm-controlled-approximations`
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
