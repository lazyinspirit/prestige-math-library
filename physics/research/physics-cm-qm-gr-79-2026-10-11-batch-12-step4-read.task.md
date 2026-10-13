# Step 4 batch reviewer — batch **12**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **12**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["12"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 12 | `cm-math-verification` | A | cm-math-approximation, cm-math-rigid, cm-math-variations, darboux-lhopital-and-taylor |
| 12 | `cm-math-verification-examples` | B | cm-math-verification, cm-math-variations, cm-math-rigid, cm-math-approximation |

## Your content, in full

### `cm-math-verification` — Cm Math Verification

- `def-cm-second-variation-of-the-action` · definition — The fixed-endpoint second variation of a time-dependent action at a curve
- `lem-cm-second-variation-formula` · lemma — The second variation of a time-dependent action: twice differentiability of the fixed-endpoint family and the Hessian integral formula
- `prop-cm-oscillator-second-variation-signs` · proposition — Second variation of the oscillator action on a finite interval: both signs for $T>\pi/\omega$ and the value at $T=\pi/\omega$
- `prop-cm-oscillator-boundary-value-nonuniqueness` · proposition — The undamped oscillator: Dirichlet non-uniqueness at $T=n\pi/\omega$ despite unique initial-value solutions
- `def-cm-inertia-tensor-about-a-point` · definition — The inertia tensor of a finite bounded Borel measure about any point of $\mathbb R^3$
- `lem-cm-inertia-tensor-about-a-point-is-finite` · lemma — Finiteness and a uniform bound for the entries of the inertia tensor about an arbitrary point
- `thm-cm-parallel-axis-theorem` · theorem — Parallel-axis theorem: the inertia tensor about a displaced point of a centred mass distribution
- `prop-cm-two-mass-spring-modes` · proposition — Two equal masses with two outer springs and a coupling spring: eigenmodes, decoupling and the explicit normal frequencies
- `prop-cm-pendulum-small-angle-linearization-bound` · proposition — The pendulum field near the downward equilibrium: bounded force derivative, cubic remainder and the finite-time small-angle error bound
- `rem-cm-verification-scope-and-limits` · remark — Scope and limits of the verification items on this page

### `cm-math-verification-examples` — Cm Math Verification — Examples

- `ex-cm-oscillator-saddle-second-variation-checks` · example — An explicit saddle of the oscillator action at $T=2\pi$: the two variations $\sin(t/2)$ and $\sin(3t/2)$
- `ex-cm-oscillator-boundary-value-nonuniqueness-check` · example — Two distinct oscillator solutions with the same zero endpoints at $T=\pi$, and their common action value
- `ex-cm-parallel-axis-two-point-masses` · example — Parallel-axis theorem checked on two equal point masses on the third axis
- `ex-cm-two-mass-modes-numerical-check` · example — Two-mass spring eigenmodes at explicit parameters: eigenrelations, a mode solution, and the zero-frequency case
- `ex-cm-pendulum-linearization-error-check` · example — The pendulum linearisation bound at $g=l=1$: exact error expression for the data $\delta=1/100$, $T=1$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-verification` requires `cm-math-approximation`
- `cm-math-verification` requires `cm-math-rigid`
- `cm-math-verification` requires `cm-math-variations`
- `cm-math-verification-examples` requires `cm-math-variations`
- `cm-math-verification-examples` requires `cm-math-rigid`
- `cm-math-verification-examples` requires `cm-math-approximation`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-verification`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-verification`
- `cm07-stationary-action-and-lagrangian-dynamics` requires `cm-math-verification`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-verification`
- `cm10-rigid-body-configuration-and-inertia` requires `cm-math-verification`
- `cm10-rigid-body-configuration-and-inertia-examples` requires `cm-math-verification`
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
