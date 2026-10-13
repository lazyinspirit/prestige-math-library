# Step 4 batch reviewer — batch **50**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **50**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["50"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 50 | `qm-uncertainty-and-compatibility` | A | qm-massive-particle-kinematics, qm-measurement-and-instruments, qm-math-composites, qm-math-magnetic-and-detection, qm-framework-and-quantities, qm-observables-and-born-probabilities, qm-state-geometry |
| 50 | `qm-uncertainty-and-compatibility-examples` | B | qm-uncertainty-and-compatibility, the-heat-kernel-and-the-cauchy-problem, improper-and-parameter-dependent-multiple-integrals, qm-massive-particle-kinematics, qm-observables-and-born-probabilities, qm-math-composites, qm-framework-and-quantities, qm-math-orbital-and-spin, qm-math-intervals-and-contacts, qm-autonomous-dynamics, qm-math-magnetic-and-detection, qm-measurement-and-instruments |

## Your content, in full

### `qm-uncertainty-and-compatibility` — Qm Uncertainty And Compatibility

- `def-nrqm-uncertainty-strong-spectral-commutation` · definition — Strong spectral commutation of self-adjoint operators
- `lem-nrqm-uncertainty-schrodinger-robertson-anticommutator-bound` · lemma — The Schroedinger-Robertson bound in anticommutator form and the Robertson bound on product domains
- `def-nrqm-uncertainty-preparation-spread` · definition — Preparation variance and spread of an assigned sharp observable
- `lem-nrqm-uncertainty-bounded-borel-calculus-of-commuting-operators` · lemma — Bounded Borel calculus of strongly commuting self-adjoint operators
- `thm-nrqm-uncertainty-joint-pvm-criterion` · theorem — Strong spectral commutation, joint projection-valued measures and bounded Borel calculus
- `lem-nrqm-uncertainty-product-domain-commutator-identity` · lemma — The position-momentum commutator identity on the product domain
- `lem-nrqm-uncertainty-approximation-by-product-domain-vectors` · lemma — Approximation of Q-P graph-domain vectors by product-domain vectors
- `pthm-nrqm-uncertainty-robertson-relation` · physics-theorem — The Robertson relation for preparation spreads of assigned sharp observables
- `pthm-nrqm-uncertainty-position-momentum-relation` · physics-theorem — The position-momentum preparation relation of the massive spin-s model
- `pthm-nrqm-uncertainty-compatible-sharp-observables-and-joint-law` · physics-theorem — Compatible sharp observables, their joint law and the ideal joint instrument
- `pthm-nrqm-uncertainty-position-momentum-incompatible` · physics-theorem — Position and momentum of the massive model have no joint sharp observable
- `rem-nrqm-uncertainty-scope-and-empirical-status` · remark — What the uncertainty and compatibility page adopts, proves and does not claim

### `qm-uncertainty-and-compatibility-examples` — Qm Uncertainty And Compatibility — Examples

- `ex-nrqm-uncertainty-gaussian-minimum-spread` · example — The Gaussian family attains the position-momentum bound in the massive model
- `texp-nrqm-uncertainty-spin-half-incompatibility` · thought-experiment — Spin one half: spread identity, incompatible component outcomes and saturated Robertson bounds
- `cex-nrqm-uncertainty-commutator-zero-on-a-core-is-not-spectral-compatibility` · counterexample — A commutator vanishing on a dense invariant domain does not imply strong spectral commutation
- `rem-nrqm-uncertainty-energy-time-caveat` · remark — Time is not an observable of the framework: the conditional timescale bound
- `rem-nrqm-uncertainty-error-disturbance-distinction` · remark — Preparation spread, apparatus resolution and disturbance are different objects
- `rem-nrqm-uncertainty-examples-scope-limits` · remark — What the examples companion records and what it does not

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `qm-uncertainty-and-compatibility` requires `qm-massive-particle-kinematics`
- `qm-uncertainty-and-compatibility` requires `qm-measurement-and-instruments`
- `qm-uncertainty-and-compatibility` requires `qm-math-composites`
- `qm-uncertainty-and-compatibility` requires `qm-math-magnetic-and-detection`
- `qm-uncertainty-and-compatibility` requires `qm-framework-and-quantities`
- `qm-uncertainty-and-compatibility` requires `qm-observables-and-born-probabilities`
- `qm-uncertainty-and-compatibility` requires `qm-state-geometry`
- `qm-uncertainty-and-compatibility-examples` requires `qm-massive-particle-kinematics`
- `qm-uncertainty-and-compatibility-examples` requires `qm-observables-and-born-probabilities`
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-composites`
- `qm-uncertainty-and-compatibility-examples` requires `qm-framework-and-quantities`
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-orbital-and-spin`
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-intervals-and-contacts`
- `qm-uncertainty-and-compatibility-examples` requires `qm-autonomous-dynamics`
- `qm-uncertainty-and-compatibility-examples` requires `qm-math-magnetic-and-detection`
- `qm-uncertainty-and-compatibility-examples` requires `qm-measurement-and-instruments`
- `qm-harmonic-oscillator` requires `qm-uncertainty-and-compatibility`
- `qm-harmonic-oscillator-examples` requires `qm-uncertainty-and-compatibility`
- `qm-angular-momentum-and-spin` requires `qm-uncertainty-and-compatibility`
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
