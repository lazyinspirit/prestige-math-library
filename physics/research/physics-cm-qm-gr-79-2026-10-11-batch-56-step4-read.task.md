# Step 4 batch reviewer — batch **56**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **56**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["56"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 56 | `qm-bell-models-and-measurement-limits` | A | qm-composites-entanglement-and-reduced-states, qm-math-orbital-and-spin, qm-math-composites, qm-framework-and-quantities, qm-state-geometry, qm-observables-and-born-probabilities, qm-massive-particle-kinematics, qm-measurement-and-instruments, qm-angular-momentum-and-spin |
| 56 | `qm-bell-models-and-measurement-limits-examples` | B | qm-bell-models-and-measurement-limits, qm-math-composites, qm-composites-entanglement-and-reduced-states, qm-angular-momentum-and-spin, qm-math-orbital-and-spin, qm-framework-and-quantities |

## Your content, in full

### `qm-bell-models-and-measurement-limits` — Qm Bell Models And Measurement Limits

- `def-nrqm-bell-binary-correlation-models` · definition — Binary correlation models: setting-indexed tables of two-valued outcome laws, marginals and the CHSH functional
- `def-nrqm-bell-local-response-representation` · definition — Local-response representations of a binary correlation model: one setting-independent specification space and per-station response laws
- `prop-nrqm-bell-local-representations-are-no-signalling` · proposition — Local-response representability implies setting-independent marginals
- `thm-nrqm-bell-local-representations-satisfy-chsh` · theorem — The CHSH bound for every binary correlation model admitting a local-response representation
- `lem-nrqm-bell-setting-independent-selection-closure` · lemma — Conditioning on a setting-independent selection preserves local-response representability and the CHSH bound
- `lem-nrqm-bell-singlet-pairings` · lemma — Singlet pairings: the joint laws of the two spin-half factors along two directions
- `def-nrqm-bell-declared-spin-arrangement` · definition — Declared spin correlation arrangement of the framework: two spin-half factors, four directions, joint sign tables and local-response models
- `texp-nrqm-bell-singlet-arrangement-contrast` · thought-experiment — The singlet arrangement: directional sign tables, CHSH value 2 sqrt 2 and the failure of local-response models at violating settings
- `pthm-nrqm-bell-tsirelson-bound-for-arrangements` · physics-theorem — Tsirelson bound for every declared spin correlation arrangement of the framework
- `rem-nrqm-bell-boundaries-and-comparison-scope` · remark — Measurement-model boundaries of the singlet-local comparison: what the no-go excludes and what it does not
- `rem-nrqm-bell-scope-and-empirical-status` · remark — Scope and empirical status of the Bell-models page: conditional model results and the deferred experiment destination

### `qm-bell-models-and-measurement-limits-examples` — Qm Bell Models And Measurement Limits — Examples

- `ex-nrqm-bell-worked-angles-and-product-mixture` · example — Worked Bell angles: the singlet against the EPR product mixture at the same directions
- `texp-nrqm-bell-finite-sample-chsh` · thought-experiment — Finite samples of a declared arrangement: the CHSH estimator, its concentration and the limits of a finite-sample verdict
- `rem-nrqm-bell-selection-loss-and-fair-sampling` · remark — Selection and loss: the precise hypothesis under which the CHSH bound transfers to recorded pairs
- `rem-nrqm-bell-examples-scope-limits` · remark — Scope of the examples page: conditional computations, no experiment, and the deferred Bell-test destination

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-bell-models-and-measurement-limits` requires `qm-composites-entanglement-and-reduced-states`
- `qm-bell-models-and-measurement-limits` requires `qm-math-orbital-and-spin`
- `qm-bell-models-and-measurement-limits` requires `qm-math-composites`
- `qm-bell-models-and-measurement-limits` requires `qm-framework-and-quantities`
- `qm-bell-models-and-measurement-limits` requires `qm-state-geometry`
- `qm-bell-models-and-measurement-limits` requires `qm-observables-and-born-probabilities`
- `qm-bell-models-and-measurement-limits` requires `qm-massive-particle-kinematics`
- `qm-bell-models-and-measurement-limits` requires `qm-measurement-and-instruments`
- `qm-bell-models-and-measurement-limits` requires `qm-angular-momentum-and-spin`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-math-composites`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-composites-entanglement-and-reduced-states`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-angular-momentum-and-spin`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-math-orbital-and-spin`
- `qm-bell-models-and-measurement-limits-examples` requires `qm-framework-and-quantities`
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
