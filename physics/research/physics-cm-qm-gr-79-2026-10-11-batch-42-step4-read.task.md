# Step 4 batch reviewer — batch **42**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **42**. Step-5 owning group: **aa**.
Return `group: "aa"` and `batches: ["42"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 42 | `qm-math-magnetic-and-detection` | A | qm-math-orbital-and-spin, qm-math-intervals-and-contacts, sobolev-poincare-and-morrey-inequalities, the-lp-spaces-holder-minkowski-and-riesz-fischer, product-measures-and-the-fubini-tonelli-theorems, unbounded-self-adjoint-operators-and-stones-theorem, qm-math-composites |
| 42 | `qm-math-magnetic-and-detection-examples` | B | qm-math-magnetic-and-detection, improper-and-parameter-dependent-multiple-integrals |

## Your content, in full

### `qm-math-magnetic-and-detection` — Qm Math Magnetic And Detection

- `def-nrqm-magnetic-and-detection-position-and-momentum-operators` · definition — Position and momentum operators on Euclidean L2
- `lem-nrqm-magnetic-and-detection-weak-product-rule` · lemma — Weak product rule for a bounded coefficient with bounded weak derivative
- `lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint` · lemma — Self-adjointness, Fourier representation and translation identities of position and momentum
- `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator` · definition — Bounded-coefficient magnetic Schrodinger operator
- `thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator` · theorem — Self-adjointness of the bounded-coefficient magnetic Schrodinger operator
- `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation` · theorem — Gauge multiplication preserves H2 and transports the magnetic momentum
- `thm-nrqm-magnetic-and-detection-gauge-transported-propagator` · theorem — Gauge transported propagator for the bounded-coefficient magnetic operator
- `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation` · theorem — Smooth local continuity equation and its integrated forms
- `thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws` · theorem — Coherent and incoherent two-path bin laws and the marker overlap
- `thm-nrqm-magnetic-and-detection-covariance-refined-uncertainty` · theorem — Covariance-refined preparation uncertainty without operator products
- `thm-nrqm-magnetic-and-detection-maximal-domain-position-and-momentum-uncertainty` · theorem — Position-momentum uncertainty on the maximal domains of the line
- `thm-nrqm-magnetic-and-detection-galilean-covariance` · theorem — Galilean boost covariance of the Schrodinger model with bounded potential
- `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws` · theorem — Conserved spectral probability laws for commuting observables and stationary eigenrays
- `thm-nrqm-magnetic-and-detection-graph-domain-ehrenfest-and-timescale` · theorem — Graph-domain Ehrenfest identities and the conditional timescale bound
- `thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force` · theorem — Conditional Stern-Gerlach force for a spin-coupled bounded field model

### `qm-math-magnetic-and-detection-examples` — Qm Math Magnetic And Detection — Examples

- `ex-nrqm-magnetic-and-detection-gauge-phase-units` · example — Gauge phase periodicity, a linear gauge, and the dimension vector of q chi over hbar
- `ex-nrqm-magnetic-and-detection-finite-dark-bin-probability` · example — A dark bin of positive length has positive coherent probability
- `ex-nrqm-magnetic-and-detection-preparation-spread-versus-error` · example — Gaussian preparation spread and an independent additive reading error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-math-magnetic-and-detection` requires `qm-math-orbital-and-spin`
- `qm-math-magnetic-and-detection` requires `qm-math-intervals-and-contacts`
- `qm-math-magnetic-and-detection` requires `qm-math-composites`
- `qm-framework-and-quantities` requires `qm-math-magnetic-and-detection`
- `qm-framework-and-quantities-examples` requires `qm-math-magnetic-and-detection`
- `qm-observables-and-born-probabilities` requires `qm-math-magnetic-and-detection`
- `qm-observables-and-born-probabilities-examples` requires `qm-math-magnetic-and-detection`
- `qm-autonomous-dynamics` requires `qm-math-magnetic-and-detection`
- `qm-autonomous-dynamics-examples` requires `qm-math-magnetic-and-detection`
- `qm-massive-particle-kinematics` requires `qm-math-magnetic-and-detection`
- `qm-uncertainty-and-compatibility` requires `qm-math-magnetic-and-detection`
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-magnetic-and-detection`
- `qm-symmetries-and-conservation` requires `qm-math-magnetic-and-detection`
- `qm-angular-momentum-and-spin` requires `qm-math-magnetic-and-detection`
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
