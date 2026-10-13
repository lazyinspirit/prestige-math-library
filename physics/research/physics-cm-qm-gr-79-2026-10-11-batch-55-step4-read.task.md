# Step 4 batch reviewer — batch **55**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **55**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["55"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 55 | `qm-composites-entanglement-and-reduced-states` | A | qm-angular-momentum-and-spin, qm-measurement-and-instruments, compactness, qm-math-composites, qm-state-geometry, qm-framework-and-quantities, qm-observables-and-born-probabilities, qm-massive-particle-kinematics |
| 55 | `qm-composites-entanglement-and-reduced-states-examples` | B | qm-composites-entanglement-and-reduced-states, qm-angular-momentum-and-spin, qm-measurement-and-instruments, qm-observables-and-born-probabilities, qm-state-geometry, qm-math-composites, qm-framework-and-quantities, qm-math-orbital-and-spin, qm-massive-particle-kinematics |

## Your content, in full

### `qm-composites-entanglement-and-reduced-states` — Qm Composites Entanglement And Reduced States

- `lem-nrqm-composites-local-pvm-tensor-extension` · lemma — Local PVM extension: tensoring a projection-valued measure with the identity
- `lem-nrqm-composites-pure-state-separability-criterion` · lemma — Pure-state separability is equivalent to being a product: a Schmidt overlap witness
- `def-nrqm-composites-separable-and-entangled-states` · definition — Product vectors, separable states and entangled states of a two-factor composite
- `def-nrqm-composites-framework-composite-systems-and-local-readouts` · definition — Composite systems of the framework: product bases, local readouts, local effects and local instruments
- `def-nrqm-composites-framework-reduced-preparations` · definition — Reduced preparations of a declared composite: the subsystem states of the framework
- `pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement` · physics-theorem — Schmidt reduction of a pure composite preparation, purity of the subsystems, and the product criterion
- `pthm-nrqm-composites-local-readout-laws-and-reduced-preparations` · physics-theorem — Local readout laws and reduced preparations: the subsystem state determines, and is determined by, the local statistics
- `pthm-nrqm-composites-local-statistics-of-products-and-entangled-preparations` · physics-theorem — Factorization of local statistics for product preparations, and its failure for non-product pure preparations
- `pthm-nrqm-composites-local-instruments-and-no-signalling` · physics-theorem — Local instruments and no-signalling: operations on one factor do not change the other factor's local statistics
- `def-nrqm-composites-marker-model-and-fringe-visibility` · definition — Declared marked two-component model: path components, marker states, phase family, detection weights and fringe visibility
- `pthm-nrqm-composites-marker-overlap-and-visibility-bound` · physics-theorem — Marker overlap contracts the cross term: the detection law and the visibility bound of an overlap-normalized marked model
- `rem-nrqm-composites-scope-and-empirical-status` · remark — Scope and empirical status of the composites page: adopted readings, derived results, and deferred content

### `qm-composites-entanglement-and-reduced-states-examples` — Qm Composites Entanglement And Reduced States — Examples

- `texp-nrqm-composites-singlet-correlations` · thought-experiment — The spin singlet of two declared spin-half factors: directional correlations, perfect anti-correlation and setting-independent marginals
- `ex-nrqm-composites-marker-overlap-visibility` · example — A two-cell marked model: the fringe visibility equals the marker overlap exactly
- `ex-nrqm-composites-improper-versus-proper-mixtures` · example — Improper and proper mixtures with the same reduced preparation: the singlet marginal versus a fair random mixture
- `rem-nrqm-composites-examples-scope-limits` · remark — Scope of the composites examples page: what the singlet, marker and mixture computations establish

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-composites-entanglement-and-reduced-states` requires `qm-angular-momentum-and-spin`
- `qm-composites-entanglement-and-reduced-states` requires `qm-measurement-and-instruments`
- `qm-composites-entanglement-and-reduced-states` requires `qm-math-composites`
- `qm-composites-entanglement-and-reduced-states` requires `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states` requires `qm-framework-and-quantities`
- `qm-composites-entanglement-and-reduced-states` requires `qm-observables-and-born-probabilities`
- `qm-composites-entanglement-and-reduced-states` requires `qm-massive-particle-kinematics`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-angular-momentum-and-spin`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-measurement-and-instruments`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-observables-and-born-probabilities`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-state-geometry`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-math-composites`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-framework-and-quantities`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-math-orbital-and-spin`
- `qm-composites-entanglement-and-reduced-states-examples` requires `qm-massive-particle-kinematics`
- `qm-bell-models-and-measurement-limits` requires `qm-composites-entanglement-and-reduced-states`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-composites-entanglement-and-reduced-states`
- `qm-identical-particles-and-exclusion` requires `qm-composites-entanglement-and-reduced-states`
- `qm-central-potentials-and-hydrogen` requires `qm-composites-entanglement-and-reduced-states`
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
