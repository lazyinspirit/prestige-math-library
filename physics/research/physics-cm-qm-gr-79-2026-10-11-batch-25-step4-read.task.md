# Step 4 batch reviewer — batch **25**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **25**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["25"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 25 | `cm09-coupled-oscillations-and-approximation` | A | cm04-one-dimensional-conservative-and-dissipative-models, cm07-stationary-action-and-lagrangian-dynamics, cm03-momentum-work-and-energy-balances, cm02-forces-initial-data-and-newtonian-flow, cm01-framework-quantities-and-geometry, cm-math-dynamics, cm-math-approximation, cm-math-geometry |
| 25 | `cm09-coupled-oscillations-and-approximation-examples` | B | cm09-coupled-oscillations-and-approximation, cm-math-verification, cm01-framework-quantities-and-geometry, cm-math-approximation, cm-math-dynamics, cm-math-geometry, cm04-one-dimensional-conservative-and-dissipative-models |

## Your content, in full

### `cm09-coupled-oscillations-and-approximation` — Coupled oscillations and approximation

- `def-cm09-coupled-quadratic-model` · definition — The coupled quadratic oscillator model: mass metric, stiffness, generalized force, modal vocabulary and the small-oscillation model at a mechanical equilibrium
- `pthm-cm09-free-modes-and-degeneracy` · physics-theorem — The free coupled quadratic model: global existence, the complete modal classification, mode energies, intrinsic degenerate mode subspaces, boundedness and the unstable direction
- `pthm-cm09-linearization-at-a-strict-minimum` · physics-theorem — Small oscillations at a strict minimum: the linearized model, its normal modes and the Lyapunov stability of the nonlinear equilibrium
- `pthm-cm09-linearization-error-bound` · physics-theorem — Finite-time error control for the small-oscillation approximation: the quadratic remainder of the mechanical field and the variation-of-constants bound
- `pthm-cm09-forced-modal-response` · physics-theorem — The forced coupled quadratic model: modal responses, resonance, and boundedness for positive definite stiffness off resonance
- `pthm-cm09-averaging-for-weak-damping` · physics-theorem — Averaging for a weakly damped oscillator: the rotating-frame amplitude, the averaged exponential energy decay and the order-$\varepsilon$ bound on the $O(1/\varepsilon)$ time scale
- `rem-cm09-zero-modes-degeneracy-and-scope` · remark — Scope of the coupled quadratic model: zero modes, degenerate eigenspaces, unstable quadratic directions and the limits of the approximation statements

### `cm09-coupled-oscillations-and-approximation-examples` — Coupled oscillations and approximation — Examples

- `ex-cm09-two-mass-spring-modes` · example — Two coupled masses on a line: the in-phase and anti-phase normal modes, their frequencies, mode-energies and the zero-stiffness translation mode
- `ex-cm09-triatomic-translation-zero-mode` · example — A linear triatomic chain: the translation zero mode, the antisymmetric stretch and the symmetric stretch, with the corrected frequency comparison
- `ex-cm09-double-pendulum-linear-modes` · example — The equal-arm double pendulum in the linear approximation: the slow same-side mode, the fast opposite-side mode and the bounded modal motions
- `ex-cm09-degenerate-oscillator-subspace` · example — A doubly degenerate quadratic model: every direction is a mode, the modal basis is not intrinsic, and coupling splits the double frequency
- `ex-cm09-unstable-quadratic-mode` · example — The inverted pendulum about its upward equilibrium: the negative modal stiffness, the exponential quadratic mode and the nonlinear instability
- `ex-cm09-forced-resonant-mode-check` · example — A drive along the in-phase pattern of the two-mass chain: resonance exactly at that mode's frequency and a bounded steady response off resonance
- `ex-cm09-weak-damping-averaging-check` · example — An explicit weakly damped oscillator: the averaging constants and the energy-decay bound over five thousand seconds (about 796 undamped periods)
- `ex-cm09-cubic-potential-error-check` · example — A cubic-potential chart system: the exact quadratic remainder, the explicit error constants and a checked finite-time bound

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm09-coupled-oscillations-and-approximation` requires `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm09-coupled-oscillations-and-approximation` requires `cm07-stationary-action-and-lagrangian-dynamics`
- `cm09-coupled-oscillations-and-approximation` requires `cm03-momentum-work-and-energy-balances`
- `cm09-coupled-oscillations-and-approximation` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm09-coupled-oscillations-and-approximation` requires `cm01-framework-quantities-and-geometry`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-dynamics`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-approximation`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-geometry`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-verification`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm01-framework-quantities-and-geometry`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-approximation`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-dynamics`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-geometry`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm16-stability-perturbations-and-chaos` requires `cm09-coupled-oscillations-and-approximation`
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
