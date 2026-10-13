# Step 4 batch reviewer — batch **63**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **63**. Step-5 owning group: **x**.
Return `group: "x"` and `batches: ["63"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 63 | `qm-photons-and-radiation-modes` | A | qm-identical-particles-and-exclusion, qm-math-fock-and-equilibrium, qm-math-composites, qm-math-controlled-dynamics, qm-framework-and-quantities, qm-state-geometry, qm-observables-and-born-probabilities, qm-measurement-and-instruments |
| 63 | `qm-photons-and-radiation-modes-examples` | B | qm-photons-and-radiation-modes, qm-framework-and-quantities, qm-state-geometry, qm-observables-and-born-probabilities, qm-math-controlled-dynamics, qm-math-fock-and-equilibrium, qm-math-composites, qm-measurement-and-instruments |

## Your content, in full

### `qm-photons-and-radiation-modes` — Qm Photons And Radiation Modes

- `lem-nrqm-photons-analyzer-projections-and-overlaps` · lemma — Analyzer projections of a two-dimensional polarisation space and their overlaps
- `lem-nrqm-photons-transverse-restricted-momentum-and-energy-multipliers` · lemma — Restricted momentum and energy multipliers of the transverse one-photon space
- `lem-nrqm-photons-fixed-mode-number-isometry` · lemma — The fixed-mode isometry of Fock space and the transfer of number and ladder operators
- `lem-nrqm-photons-transverse-fock-total-momentum` · lemma — Total momentum multipliers on transverse symmetric Fock sectors
- `post-nrqm-photons-radiation-extension-and-transverse-mode-assignment` · postulate — Radiation extension of the framework: transverse mode and photon assignments
- `def-nrqm-photons-framework-radiation-sector-and-quantum-assignments` · definition — The radiation sector of the framework: modes and the number, energy and momentum assignments
- `def-nrqm-photons-framework-fixed-mode-polarization-model` · definition — The fixed-mode polarisation model of the framework
- `pthm-nrqm-photons-fixed-mode-polarization-outcome-law` · physics-theorem — The analyser outcome law of the fixed-mode polarisation model: Born probabilities and the Malus ratio
- `pthm-nrqm-photons-one-photon-number-energy-and-momentum-laws` · physics-theorem — Number, energy and momentum laws of a one-photon preparation
- `def-nrqm-photons-framework-ideal-counting-and-detection-model` · definition — The declared ideal counting, energy-window and analyser detection models of the radiation sector
- `pthm-nrqm-photons-fixed-mode-number-and-energy-statistics` · physics-theorem — Number and energy statistics of a declared mode: number states, coherent states and the continuum thermal limitation
- `rem-nrqm-photons-scope-and-empirical-status` · remark — Scope and empirical status of the photons and radiation modes page

### `qm-photons-and-radiation-modes-examples` — Qm Photons And Radiation Modes — Examples

- `ex-nrqm-photons-malus-and-jones-analyzer-ratios` · example — Malus and Jones ratios of the declared analyser: the same cos^2 from the Born law and from a classical transverse amplitude
- `ex-nrqm-photons-single-mode-number-statistics-coherent-and-thermal` · example — Number statistics of a single declared mode: sharp, Poisson and geometric preparations
- `texp-nrqm-photons-classical-field-and-quantized-detection-comparison` · thought-experiment — A two-bin comparison of a declared classical field model and the quantised model: identical normalised laws do not discriminate
- `rem-nrqm-photons-examples-scope-limits` · remark — Scope of the photons and radiation modes examples page

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-photons-and-radiation-modes` requires `qm-identical-particles-and-exclusion`
- `qm-photons-and-radiation-modes` requires `qm-math-fock-and-equilibrium`
- `qm-photons-and-radiation-modes` requires `qm-math-composites`
- `qm-photons-and-radiation-modes` requires `qm-math-controlled-dynamics`
- `qm-photons-and-radiation-modes` requires `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes` requires `qm-state-geometry`
- `qm-photons-and-radiation-modes` requires `qm-observables-and-born-probabilities`
- `qm-photons-and-radiation-modes` requires `qm-measurement-and-instruments`
- `qm-photons-and-radiation-modes-examples` requires `qm-framework-and-quantities`
- `qm-photons-and-radiation-modes-examples` requires `qm-state-geometry`
- `qm-photons-and-radiation-modes-examples` requires `qm-observables-and-born-probabilities`
- `qm-photons-and-radiation-modes-examples` requires `qm-math-controlled-dynamics`
- `qm-photons-and-radiation-modes-examples` requires `qm-math-fock-and-equilibrium`
- `qm-photons-and-radiation-modes-examples` requires `qm-math-composites`
- `qm-photons-and-radiation-modes-examples` requires `qm-measurement-and-instruments`
- `qm-light-matter-and-spectral-transitions` requires `qm-photons-and-radiation-modes`
- `qm-light-matter-and-spectral-transitions-examples` requires `qm-photons-and-radiation-modes`
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
