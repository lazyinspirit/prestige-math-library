# Step 4 batch reviewer — batch **38**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **38**. Step-5 owning group: **y**.
Return `group: "y"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `qm-math-intervals-and-contacts` | A | qm-math-oscillator, absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, completeness-and-uniform-continuity, complex-power-series-and-analytic-functions, continuity-ivt-evt-and-uniform-continuity, finite-dimensional-normed-spaces-and-riesz-lemma, fubini-and-change-of-variables, linear-independence-bases-and-dimension, picard-lindelof-and-first-order-odes, sine-cosine-and-the-definition-of-pi, smooth-approximation-and-sobolev-extension, smooth-partitions-of-unity-and-exhaustions, the-riemann-integral, uniform-spaces, qm-math-composites |
| 38 | `qm-math-intervals-and-contacts-examples` | B | qm-math-intervals-and-contacts, qm-math-oscillator |

## Your content, in full

### `qm-math-intervals-and-contacts` — Qm Math Intervals And Contacts

- `def-nrqm-intervals-hilbert-sobolev-spaces` · definition — One-dimensional Sobolev spaces on intervals
- `lem-nrqm-intervals-weak-derivative-ac-representative` · lemma — Absolutely continuous representative of an L2 function with L2 weak derivative
- `lem-nrqm-intervals-endpoint-trace-and-half-line-decay` · lemma — Endpoint trace bound and decay of H1 functions
- `lem-nrqm-intervals-integration-by-parts` · lemma — Integration by parts and the endpoint-vanishing space on intervals
- `thm-nrqm-intervals-sine-on-completeness` · theorem — Completeness of the Dirichlet sine system on an interval
- `lem-nrqm-intervals-free-line-resolvent` · lemma — The free-line resolvent kernel and its inverse operator
- `thm-nrqm-intervals-dirichlet-diagonal-domain-identification` · theorem — Identification of the Dirichlet Laplacian with the sine diagonal operator
- `lem-nrqm-intervals-compact-resolvent-eigenbasis` · lemma — Self-adjoint operators with compact resolvent: eigenbasis and discrete spectrum
- `thm-nrqm-intervals-twisted-periodic-momentum-domain` · theorem — The twisted-periodic momentum operator on an interval
- `thm-nrqm-intervals-bounded-interval-perturbation-compact-resolvent` · theorem — Bounded perturbations of the interval Dirichlet Laplacian
- `thm-nrqm-intervals-regular-ivp-parameter-series` · theorem — Regular interval IVP: existence, a priori bound and entire spectral-parameter dependence
- `thm-nrqm-intervals-prufer-energy-monotonicity` · theorem — Prufer angle for the interval equation and strict monotonicity in the energy
- `thm-nrqm-intervals-dirichlet-nodal-theorem` · theorem — Dirichlet eigenvalues, simplicity and the nodal theorem on an interval
- `thm-nrqm-intervals-delta-interface-operator` · theorem — The one-dimensional delta interface operator
- `thm-nrqm-intervals-delta-rank-one-resolvent` · theorem — Rank-one resolvent formula for the delta interface operator
- `thm-nrqm-intervals-delta-unique-bound-state` · theorem — The unique negative eigenvalue of the attractive delta interface operator
- `thm-nrqm-intervals-separated-robin-green-resolvent` · theorem — Green resolvent for separated Robin boundary conditions
- `thm-nrqm-intervals-robin-simple-complete-spectrum` · theorem — Simple complete spectrum of the separated Robin realisation
- `thm-nrqm-intervals-barrier-transfer-and-thick-limit-error` · theorem — Rectangular barrier: transmission coefficients and the thick-barrier error
- `thm-nrqm-intervals-finite-well-root-conditions-and-bound-count` · theorem — Finite square well: root conditions, simplicity and the bound-state count

### `qm-math-intervals-and-contacts-examples` — Qm Math Intervals And Contacts — Examples

- `ex-nrqm-intervals-contacts-dirichlet-momentum-failure` · example — Dirichlet momentum failure
- `ex-nrqm-intervals-contacts-separated-box-degeneracy` · example — Separated-box degeneracy
- `ex-nrqm-intervals-contacts-attractive-contact-energy` · example — Attractive contact energy

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-math-intervals-and-contacts` requires `qm-math-oscillator`
- `qm-math-intervals-and-contacts` requires `qm-math-composites`
- `qm-math-intervals-and-contacts-examples` requires `qm-math-oscillator`
- `qm-massive-particle-kinematics-examples` requires `qm-math-intervals-and-contacts`
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-intervals-and-contacts`
- `qm-one-dimensional-potentials` requires `qm-math-intervals-and-contacts`
- `qm-one-dimensional-potentials-examples` requires `qm-math-intervals-and-contacts`
- `qm-math-coulomb` requires `qm-math-intervals-and-contacts`
- `qm-math-controlled-dynamics` requires `qm-math-intervals-and-contacts`
- `qm-math-magnetic-and-detection` requires `qm-math-intervals-and-contacts`
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
