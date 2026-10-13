# Step 4 batch reviewer — batch **32**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **32**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["32"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 32 | `cm16-stability-perturbations-and-chaos` | A | cm-math-chaos, cm-math-kam, cm09-coupled-oscillations-and-approximation, cm14-hamilton-jacobi-and-integrability, cm02-forces-initial-data-and-newtonian-flow, cm-math-dynamics, cm01-framework-quantities-and-geometry, cm-math-geometry, cm-math-approximation, cm13-symplectic-geometry-and-canonical-methods |
| 32 | `cm16-stability-perturbations-and-chaos-examples` | B | cm16-stability-perturbations-and-chaos, cm-math-dynamics, cm01-framework-quantities-and-geometry, cm02-forces-initial-data-and-newtonian-flow, cm-math-chaos, cm04-one-dimensional-conservative-and-dissipative-models, cm-math-balances, cm-math-kam |

## Your content, in full

### `cm16-stability-perturbations-and-chaos` — Stability, perturbations and chaos

- `def-cm16-flow-equilibria-and-invariant-sets` · definition — The model vocabulary of stability and chaos: the associated flow of a declared force model, equilibria, periodic and homoclinic orbits, and invariant sets
- `def-cm16-stability-and-hyperbolicity-concepts` · definition — Stability vocabulary of the model: Lyapunov, asymptotic and orbital stability, linear stability of equilibria and periodic orbits, and hyperbolicity of equilibria and fixed points
- `pthm-cm16-energy-stability-and-instability` · physics-theorem — Energy stability and instability of the mechanical model at an equilibrium: the strict minimum is Lyapunov stable, a negative Hessian eigenvalue gives linear instability, a strictly concave potential gives nonlinear instability, and exact energy conservation rules out attraction
- `pthm-cm16-variational-equation-and-linearization` · physics-theorem — Linearisation along a motion of the mechanical model: the flow derivative solves the variational equation, with Lipschitz dependence, the constant-metric second-order form, and the conditional finite-time error bound of the linear approximation
- `def-cm16-finite-time-growth-rates` · definition — Finite-time tangent growth rates and Lyapunov exponents of the model's flow: the rate per unit time of a transported deviation, with its existence convention and its limits
- `def-cm16-stroboscopic-and-poincare-maps` · definition — The stroboscopic map of a periodic model and the Poincare return map of a transversal section: domains, iterates, fixed points and the local C1 diffeomorphism property
- `def-cm16-chaos-list-for-model-maps` · definition — Chaos in the stated sense for maps of the model: topological mixing, dense periodic points and sensitive dependence, as one precise list among several
- `pthm-cm16-hyperbolic-linearization` · physics-theorem — Hyperbolic linearisation of an equilibrium of the model: exponential dichotomy of the linearised flow, local exponential asymptotic stability in the stable case, and instability in the saddle case
- `pthm-cm16-two-rotor-kam` · physics-theorem — The two-rotor model: a positive-measure family of invariant Lagrangian tori with Diophantine frequencies for sufficiently small coupling, with the explicit units and the stated scope
- `pthm-cm16-separatrix-splitting-and-horseshoe` · physics-theorem — A smooth periodically forced one-label Cartesian model with a transverse homoclinic horseshoe: the physical stroboscopic map has a compact invariant set conjugate to the shift, chaotic in the stated sense
- `pthm-cm16-recurrence-for-finite-volume-models` · physics-theorem — Poincare recurrence for the model's Hamiltonian flow on a bounded invariant set of finite phase volume: almost every state of any Borel subset returns to it infinitely often
- `rem-cm16-scope-of-stability-and-chaos` · remark — Scope of the stability, perturbation and chaos statements: conditional model deductions, the limits of finite-time and numerical evidence, and the empirical qualifications

### `cm16-stability-perturbations-and-chaos-examples` — Stability, perturbations and chaos — Examples

- `ex-cm16-pendulum-equilibrium-checks` · example — The ideal pendulum on declared data: strict minimum and Lyapunov stability at the downward equilibrium, negative Hessian and instability at the upward equilibrium, the exact linearised eigenvalues and oscillation frequency, and failure of attraction
- `ex-cm16-linearization-and-growth-checks` · example — Two declared linear models worked through: the harmonic flow has zero finite-time growth in every direction, while the repulsive linear model has exact rates $\pm1$ and the positive Lyapunov exponent $1$ at its equilibrium
- `ex-cm16-isotropic-oscillator-return-map-check` · example — The three-dimensional isotropic oscillator: the stroboscopic map at half period is minus the identity, every state is periodic, the periodic points are dense, and the map is neither mixing nor sensitive
- `ex-cm16-pulse-horseshoe-data-check` · example — The pulsed horseshoe on declared data: $a=100$, the radicand box $[74,126]$, the contraction factor $1/\sqrt{74}$, the fixed points $1\pm\sqrt{101}$, and the physical bounds of the coded states at $\ell_0=1\,\mathrm m$, $m=1\,\mathrm{kg}$, $\omega_0=2\pi\,\mathrm{s^{-1}}$
- `cex-cm16-positive-growth-is-not-chaos` · counterexample — A positive Lyapunov exponent at a hyperbolic equilibrium does not produce a chaotic invariant set of the time-one map: the three-dimensional repulsive model has rate $1$ and no compact invariant set with more than one point
- `cex-cm16-stability-does-not-imply-attraction` · counterexample — Lyapunov stability does not imply attraction: the harmonic model is stable at its equilibrium while every nonzero datum keeps its distance and never converges
- `ex-cm16-recurrence-volume-check` · example — A trapped one-label model: the compact energy sublevel of the radial quartic potential is invariant with finite phase volume, so the recurrence theorem applies, while the free model's energy sublevels are unbounded and the hypothesis fails
- `ex-cm16-two-rotor-kam-units-check` · example — Unit restoration and scale checks for the two-rotor KAM statement: the scaling identities at $\mathcal I=E_0=1$, the physical angular frequencies, the exclusion of rational frequency labels, and the equal-rescaling invariance

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm16-stability-perturbations-and-chaos` requires `cm-math-chaos`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-kam`
- `cm16-stability-perturbations-and-chaos` requires `cm09-coupled-oscillations-and-approximation`
- `cm16-stability-perturbations-and-chaos` requires `cm14-hamilton-jacobi-and-integrability`
- `cm16-stability-perturbations-and-chaos` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos` requires `cm01-framework-quantities-and-geometry`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-geometry`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-approximation`
- `cm16-stability-perturbations-and-chaos` requires `cm13-symplectic-geometry-and-canonical-methods`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm01-framework-quantities-and-geometry`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm02-forces-initial-data-and-newtonian-flow`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-chaos`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm04-one-dimensional-conservative-and-dissipative-models`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-balances`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-kam`
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
