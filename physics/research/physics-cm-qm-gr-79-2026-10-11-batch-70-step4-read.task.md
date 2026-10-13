# Step 4 batch reviewer — batch **70**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **70**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["70"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 70 | `gr-local-and-global-energy` | A | gr-einstein-and-matter, gr-framework-and-geometry, gr-tensors-and-observers, gr-connections-and-free-fall, gr-curvature-and-tides |
| 70 | `gr-local-and-global-energy-examples` | B | gr-local-and-global-energy, gr-einstein-and-matter, gr-framework-and-geometry, gr-connections-and-free-fall, gr-tensors-and-observers |

## Your content, in full

### `gr-local-and-global-energy` — Local And Global Energy

- `def-gr-observer-energy-momentum-current` · definition — The observer split of a symmetric two-tensor: energy density, energy-momentum current, flux and stress
- `lem-gr-observer-energy-momentum-decomposition` · lemma — The orthogonal observer decomposition of a symmetric two-tensor and its uniqueness
- `def-gr-measured-energy-density-flux-and-stress` · definition — Physical reading of the observer split: measured energy density, energy flux and momentum density, and measured stress
- `def-gr-congruence-acceleration-and-expansion` · definition — Acceleration, expansion and the along-congruence derivative of an observer congruence
- `lem-gr-congruence-acceleration-and-expansion-properties` · lemma — Spatiality and curve identity of the acceleration, the divergence form of the expansion, and the along-congruence derivative
- `lem-gr-energy-momentum-current-divergence` · lemma — Divergence of the measured energy-momentum current and the finite-chain balance identity
- `lem-gr-killing-congruence-kinematics-and-energy-current` · lemma — Kinematics of a timelike Killing congruence and conservation of the redshift-weighted energy current
- `def-gr-killing-energy-charge` · definition — The timelike Killing current and the charge of a three-chain
- `pthm-gr-local-energy-balance` · physics-theorem — Local energy balance of the measured current and conservation of the Killing charge in stationary models
- `rem-gr-no-universal-global-energy` · remark — Absence of a universal global energy: observer dependence, no local gravitational energy, and deferred asymptotic masses
- `rem-gr-local-and-global-energy-scope-and-deferrals` · remark — Scope and status of the local-and-global-energy page: what is defined, what is conditional, and what is deferred

### `gr-local-and-global-energy-examples` — Local And Global Energy — Examples

- `ex-gr-translating-dust-measured-energy-and-balance` · example — A translating dust in flat space: measured energy density, flux and the local balance
- `ex-gr-boost-congruence-energy-balance-in-flat-space` · example — A boost-Killing congruence in flat space: acceleration source and conservation of the redshift-weighted energy current
- `ex-gr-perfect-fluid-energy-equation-from-the-local-balance` · example — The perfect-fluid energy equation recovered from the local energy balance
- `ex-gr-killing-energy-charge-of-a-static-dust` · example — The Killing energy of a static dust in flat space and its conservation across slices
- `cex-gr-measured-energy-density-depends-on-the-observer` · counterexample — The measured energy density of a fixed tensor depends on the observer congruence
- `cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density` · counterexample — A divergence-free symmetric tensor with negative measured energy density

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gr-local-and-global-energy` requires `gr-einstein-and-matter`
- `gr-local-and-global-energy` requires `gr-framework-and-geometry`
- `gr-local-and-global-energy` requires `gr-tensors-and-observers`
- `gr-local-and-global-energy` requires `gr-connections-and-free-fall`
- `gr-local-and-global-energy` requires `gr-curvature-and-tides`
- `gr-local-and-global-energy-examples` requires `gr-einstein-and-matter`
- `gr-local-and-global-energy-examples` requires `gr-framework-and-geometry`
- `gr-local-and-global-energy-examples` requires `gr-connections-and-free-fall`
- `gr-local-and-global-energy-examples` requires `gr-tensors-and-observers`
- `gr-spherical-vacuum-model` requires `gr-local-and-global-energy`
- `gr-linearized-waves` requires `gr-local-and-global-energy`
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
