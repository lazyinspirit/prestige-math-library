# Step 4 batch reviewer — batch **60**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **60**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["60"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 60 | `qm-driven-dynamics-and-adiabatic-limits` | A | qm-controlled-approximations, qm-framework-and-quantities, qm-state-geometry, qm-observables-and-born-probabilities, qm-autonomous-dynamics, qm-math-composites, qm-math-controlled-dynamics, qm-math-orbital-and-spin, qm-harmonic-oscillator, qm-central-potentials-and-hydrogen, qm-math-coulomb |
| 60 | `qm-driven-dynamics-and-adiabatic-limits-examples` | B | qm-driven-dynamics-and-adiabatic-limits, qm-math-orbital-and-spin, qm-framework-and-quantities, qm-observables-and-born-probabilities, qm-state-geometry, qm-harmonic-oscillator, qm-math-controlled-dynamics |

## Your content, in full

### `qm-driven-dynamics-and-adiabatic-limits` — Qm Driven Dynamics And Adiabatic Limits

- `def-nrqm-driven-dynamics-framework-driven-model` · definition — The declared driven model: prescribed time-dependent energy families, propagator evolution and the two-level drive models
- `def-nrqm-driven-dynamics-framework-interaction-picture` · definition — The interaction picture of the declared driven model: readings, the interaction propagator and picture equivalence of outcome laws
- `lem-nrqm-driven-dynamics-two-level-rotating-frame` · lemma — The two-level rotating frame: conjugation identities, the transformed families and invariance of the level populations
- `pthm-nrqm-driven-dynamics-bounded-norm-propagator` · physics-theorem — The bounded norm-continuous driven model: unique unitary propagator, Dyson truncation budget and outcome-law error
- `pthm-nrqm-driven-dynamics-mild-propagator-and-pictures` · physics-theorem — The bounded-control driven model: mild propagator, interaction-picture evolution and equivalence of the two readings
- `pthm-nrqm-driven-dynamics-first-order-transition-amplitude` · physics-theorem — First-order transition amplitudes for a bounded control: Dyson remainder, the sinusoidal drive with its co- and counter-rotating parts, and the outcome-probability error
- `pthm-nrqm-driven-dynamics-common-domain-propagator` · physics-theorem — The common-domain driven model: strong propagator with domain invariance, and the driven oscillator as its declared instance
- `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi` · physics-theorem — The circularly driven two-level model: exact rotating-frame reduction, Rabi populations, resonance and inversion times
- `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error` · physics-theorem — The linearly driven two-level model: rotating-wave approximation with an explicit finite-time error contract and the averaged Rabi populations
- `def-nrqm-driven-dynamics-framework-adiabatic-protocol` · definition — The declared adiabatic protocol model: slow parameter, followed spectral subspace, uniform gap and leakage probability
- `pthm-nrqm-driven-dynamics-finite-adiabatic-leakage` · physics-theorem — Finite-dimensional gapped protocol: the 1/T leakage estimate, the intertwining propagator and the Born leakage probability
- `pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage` · physics-theorem — The slowly varying one-centre Coulomb source: verified uniform gap of the n-th level and the 1/T leakage estimate
- `rem-nrqm-driven-dynamics-scope-and-empirical-status` · remark — Scope and empirical status of the page: what is adopted, what is proved, and what is excluded

### `qm-driven-dynamics-and-adiabatic-limits-examples` — Qm Driven Dynamics And Adiabatic Limits — Examples

- `ex-nrqm-driven-dynamics-circular-drive-exact-populations` · example — Worked Rabi populations of the circularly driven two-level model: quarter-inversion, pi-pulse and detuned checks
- `ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget` · example — Worked rotating-wave error budget for the linearly driven two-level model: dimensionless instantiation and averaged Rabi check
- `ex-nrqm-driven-dynamics-ammonia-two-level-resonance` · example — The two-level inversion model in an oscillating field: resonance, averaged Rabi inversion and its error contract
- `ex-nrqm-driven-dynamics-driven-oscillator-coherent-response` · example — The driven oscillator: exact classical response of a coherent preparation and stationary fluctuations
- `rem-nrqm-driven-dynamics-examples-scope-limits` · remark — What the examples check, what they do not contain, and the empirical status of the companion page

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-controlled-approximations`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-state-geometry`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-observables-and-born-probabilities`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-autonomous-dynamics`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-composites`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-controlled-dynamics`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-orbital-and-spin`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-harmonic-oscillator`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-central-potentials-and-hydrogen`
- `qm-driven-dynamics-and-adiabatic-limits` requires `qm-math-coulomb`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-math-orbital-and-spin`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-framework-and-quantities`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-observables-and-born-probabilities`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-state-geometry`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-harmonic-oscillator`
- `qm-driven-dynamics-and-adiabatic-limits-examples` requires `qm-math-controlled-dynamics`
- `qm-light-matter-and-spectral-transitions` requires `qm-driven-dynamics-and-adiabatic-limits`
- `qm-light-matter-and-spectral-transitions-examples` requires `qm-driven-dynamics-and-adiabatic-limits`
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
