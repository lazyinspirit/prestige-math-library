# Step 4 batch reviewer — batch **62**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **62**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["62"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 62 | `qm-many-body-and-equilibrium-models` | A | qm-controlled-approximations, qm-identical-particles-and-exclusion, order-zorn-and-the-axiom-of-choice, square-integrable-kernels-and-hilbert-schmidt-compactness, qm-math-composites, qm-math-fock-and-equilibrium, qm-massive-particle-kinematics, qm-observables-and-born-probabilities, qm-autonomous-dynamics, qm-framework-and-quantities, qm-state-geometry, qm-math-oscillator |
| 62 | `qm-many-body-and-equilibrium-models-examples` | B | qm-many-body-and-equilibrium-models, qm-observables-and-born-probabilities, qm-framework-and-quantities, qm-identical-particles-and-exclusion, qm-math-fock-and-equilibrium, qm-autonomous-dynamics |

## Your content, in full

### `qm-many-body-and-equilibrium-models` — Qm Many Body And Equilibrium Models

- `lem-nrqm-many-body-one-body-reduction-trace-law` · lemma — The one-body reduction trace law of the finite-mode permutation sectors
- `lem-nrqm-many-body-two-level-thermal-formulas` · lemma — Closed formulas for the two-level canonical weights, mean energy, entropy and free energy
- `lem-nrqm-many-body-cc-bounded-spatial-realization` · lemma — CC realization of the bounded spatial operator on a finite-component H² domain
- `lem-nrqm-many-body-finite-spin-product-identification` · lemma — Finite spin components of an N-fold spatial tensor product
- `lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion` · lemma — Fixed-particle-number occupation bases and the countable-mode partition criterion
- `lem-nrqm-many-body-spectral-mean-and-defined-trace-product` · lemma — Spectral first moments and trace products with a density operator
- `def-nrqm-many-body-framework-declared-fixed-n-model` · definition — The declared fixed-N many-body model: species sector, one-particle data, interaction and the sector energy observable
- `def-nrqm-many-body-framework-one-body-reduced-operator` · definition — The declared one-body reduced operator and the one-body readout of a sector preparation
- `def-nrqm-many-body-framework-entropy-and-free-energy` · definition — Entropy, the Boltzmann constant and the free-energy functional of the declared finite-sector model
- `post-nrqm-many-body-canonical-equilibrium-ensemble` · postulate — The canonical equilibrium-ensemble assumption: the Gibbs preparation of a declared model at assigned temperature
- `pthm-nrqm-many-body-noninteracting-sector-diagonalization` · physics-theorem — Diagonalisation of the non-interacting finite-mode sector: occupation eigenvalues, partition sum and ground energy
- `pthm-nrqm-many-body-one-body-readout-law` · physics-theorem — The one-body readout law: sector means of summed bounded one-particle quantities and their reduced forms
- `pthm-nrqm-many-body-exchange-energy-splitting` · physics-theorem — Direct and exchange contributions to a two-fermion mean energy and the repulsive-Coulomb ordering
- `pthm-nrqm-many-body-thermal-equilibrium-characterization` · physics-theorem — The canonical preparation as the unique free-energy minimiser of the declared finite-sector model
- `pthm-nrqm-many-body-thermal-occupation-predictions` · physics-theorem — Thermal occupation means of the declared free-mode models: Bose and Fermi factors, product convergence and dilute remainders
- `pthm-nrqm-many-body-unitary-evolution-preserves-entropy` · physics-theorem — Unitary evolution preserves entropy and cannot produce the canonical preparation from a different one
- `rem-nrqm-many-body-scope-and-empirical-status` · remark — Scope and empirical status of the many-body and equilibrium models

### `qm-many-body-and-equilibrium-models-examples` — Qm Many Body And Equilibrium Models — Examples

- `ex-nrqm-many-body-two-site-bond-thermal-ensemble` · example — The two-site bond model: exact canonical weights, mean energy, entropy and free energy of one particle on two sites
- `ex-nrqm-many-body-finite-mode-noninteracting-thermal-ensemble` · example — Finite-mode non-interacting thermal ensembles: two fermions in three modes and two bosons in two modes
- `ex-nrqm-many-body-gas-statistics-dilute-limits` · example — Free-mode statistics at low occupation: exact dilute identities, a finite arithmetic check and two convergence examples
- `texp-nrqm-many-body-two-site-no-thermalization` · thought-experiment — A site-localised preparation of the two-site bond model never becomes canonical, and its readouts need not take their thermal means
- `rem-nrqm-many-body-examples-scope-limits` · remark — What the companion examples and the thought experiment establish

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-many-body-and-equilibrium-models` requires `qm-controlled-approximations`
- `qm-many-body-and-equilibrium-models` requires `qm-identical-particles-and-exclusion`
- `qm-many-body-and-equilibrium-models` requires `qm-math-composites`
- `qm-many-body-and-equilibrium-models` requires `qm-math-fock-and-equilibrium`
- `qm-many-body-and-equilibrium-models` requires `qm-massive-particle-kinematics`
- `qm-many-body-and-equilibrium-models` requires `qm-observables-and-born-probabilities`
- `qm-many-body-and-equilibrium-models` requires `qm-autonomous-dynamics`
- `qm-many-body-and-equilibrium-models` requires `qm-framework-and-quantities`
- `qm-many-body-and-equilibrium-models` requires `qm-state-geometry`
- `qm-many-body-and-equilibrium-models` requires `qm-math-oscillator`
- `qm-many-body-and-equilibrium-models-examples` requires `qm-observables-and-born-probabilities`
- `qm-many-body-and-equilibrium-models-examples` requires `qm-framework-and-quantities`
- `qm-many-body-and-equilibrium-models-examples` requires `qm-identical-particles-and-exclusion`
- `qm-many-body-and-equilibrium-models-examples` requires `qm-math-fock-and-equilibrium`
- `qm-many-body-and-equilibrium-models-examples` requires `qm-autonomous-dynamics`
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
