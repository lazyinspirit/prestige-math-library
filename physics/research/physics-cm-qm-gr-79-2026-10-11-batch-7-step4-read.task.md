# Step 4 batch reviewer — batch **7**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **7**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["7"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 7 | `cm-math-approximation` | A | cm-math-dynamics, bounded-linear-operators-and-quotient-spaces, complex-differentiability-and-cauchy-riemann, field-extensions-and-the-complex-numbers, the-exponential-function, the-fundamental-theorems-of-calculus, cm-math-balances |
| 7 | `cm-math-approximation-examples` | B | cm-math-approximation, darboux-lhopital-and-taylor, monotone-functions-and-discontinuities, cm-math-balances, cm-math-dynamics |

## Your content, in full

### `cm-math-approximation` — Cm Math Approximation

- `def-cm-oscillator-model-and-phase-system` · definition — The damped driven oscillator model: second-order equation, phase-plane system and characteristic data
- `def-cm-averaging-data-and-averaged-field` · definition — Periodic averaging data: the average field, the oscillatory part and the periodic deviation
- `def-cm-parameter-dependent-action-angle-branch` · definition — A one-frequency parameter-dependent action-angle branch, its transformed Hamiltonian and its drift generator
- `lem-cm-convolution-differentiation` · lemma — Differentiation of a variable-limit convolution integral with a C-one matrix kernel
- `thm-cm-homogeneous-oscillator-solution-classification` · theorem — The homogeneous damped oscillator: solution classification by the discriminant and uniqueness for initial data
- `prop-cm-oscillator-degenerate-and-repulsive-cases` · proposition — The degenerate and repulsive oscillator: solutions for k=0 and the explicit growing solution for k<0
- `cor-cm-variation-of-constants-for-linear-systems` · corollary — Variation of constants for $z'=Az+b(t)$ via the matrix exponential
- `cor-cm-homogeneous-oscillator-decay` · corollary — Strictly damped homogeneous oscillator with $k>0$: every solution tends to zero
- `thm-cm-forced-oscillator-variation-of-constants` · theorem — The forced oscillator with $k\ge0$: unique global solution and the convolution (Green's function) formula
- `cor-cm-forced-modal-oscillator-response` · corollary — Forced quadratic system $Mq''+Kq=\varphi(t)$: decoupled forced modes and the convolution solution
- `thm-cm-forced-oscillator-sinusoidal-response` · theorem — Sinusoidal forcing: the steady response, its amplitude and phase, and resonance at $\Omega=\sqrt{k/m}$
- `prop-cm-oscillator-amplitude-maximum` · proposition — The amplitude of the sinusoidally forced damped oscillator: location and value of its maximum
- `lem-cm-averaging-data-basic-bounds` · lemma — Elementary bounds for the periodic average, the deviation and its time derivative
- `thm-cm-finite-time-linearization-error-bound` · theorem — Finite-time linearization error bound: quadratic remainder, exponential growth bound and the variation-of-constants estimate
- `thm-cm-averaging-for-fast-periodic-oscillations` · theorem — Averaging for fast periodic oscillations: order-$\varepsilon$ agreement on the $O(1/\varepsilon)$ time scale
- `thm-cm-adiabatic-invariant-drift-bound` · theorem — Adiabatic action drift bound: order-$\varepsilon$ change of the action on the $O(1/\varepsilon)$ time scale
- `rem-cm-approximation-scope-and-limits` · remark — Scope and limits of the oscillator, linearization, averaging and adiabatic items on this page

### `cm-math-approximation-examples` — Cm Math Approximation — Examples

- `ex-cm-oscillator-cases-computed` · example — Five worked initial value problems for the homogeneous oscillator across the discriminant, degenerate and repulsive cases
- `ex-cm-resonant-forcing-and-amplitude-peak` · example — Resonant forcing at $\Omega=\omega_0$ and the two regimes of the amplitude maximum
- `ex-cm-uniform-force-and-linear-drag` · example — Constant forcing: free fall and the approach to terminal velocity under linear drag
- `ex-cm-pendulum-linearization-bound-check` · example — Finite-time linearization bound for the planar pendulum with explicit constants
- `ex-cm-averaging-oscillatory-deviation-check` · example — Averaging estimate on $[0,100]$ for the scalar equation $x'=\varepsilon\cos t$
- `ex-cm-adiabatic-drift-check` · example — An exactly solvable adiabatic branch: $K=I+\varepsilon I\cos\theta$ and comparison with the drift bound
- `cex-cm-nonuniqueness-without-state-lipschitz` · counterexample — Continuity alone does not give uniqueness: $x'=\sqrt{|x|}$ through the origin
- `ex-cm-domain-escape-in-finite-time` · example — A bounded field whose solution leaves the domain in finite time: $x'=v$, $v'=0$ on $(0,\infty)\times(-2,2)$

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-approximation` requires `cm-math-dynamics`
- `cm-math-approximation` requires `cm-math-balances`
- `cm-math-approximation-examples` requires `cm-math-balances`
- `cm-math-approximation-examples` requires `cm-math-dynamics`
- `cm02-forces-initial-data-and-newtonian-flow` requires `cm-math-approximation`
- `cm02-forces-initial-data-and-newtonian-flow-examples` requires `cm-math-approximation`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-approximation`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-approximation`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-approximation`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-approximation`
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-approximation`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-approximation`
- `cm-math-verification` requires `cm-math-approximation`
- `cm-math-verification-examples` requires `cm-math-approximation`
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
