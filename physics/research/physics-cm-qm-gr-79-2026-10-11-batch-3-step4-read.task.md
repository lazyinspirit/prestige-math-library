# Step 4 batch reviewer — batch **3**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **3**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["3"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 3 | `cm-math-dynamics` | A | cm-math-balances, cm-math-geometry, mixed-partials-taylor-and-extrema, modules-over-a-pid-and-canonical-forms, the-complex-exponential-and-eulers-formula, the-spectral-theorem-and-singular-value-decomposition, complexification-realification-and-real-structures, diagonalisation-and-the-minimal-polynomial, continuity-ivt-evt-and-uniform-continuity, euclidean-ordinary-differential-equations-with-smooth-dependence, finite-dimensional-normed-spaces-and-riesz-lemma, hamiltonian-mechanics-and-completely-integrable-systems, improper-integrals, inverse-and-implicit-function-theorems, limits-of-real-functions, measure-preserving-transformations-and-poincare-recurrence, monoids-groups-and-subgroups, norming-and-separation-under-hahn-banach, polynomial-rings-and-roots, sard-theorem-and-transversality, sequences-and-limits, series-and-nonnegative-tests, sine-cosine-and-the-definition-of-pi, strongly-continuous-semigroups-and-hille-yosida, suprema-and-infima, the-determinant-of-a-linear-operator, the-logarithm-and-general-powers, topological-spaces-and-continuity |
| 3 | `cm-math-dynamics-examples` | B | cm-math-dynamics, finite-probability-and-the-probabilistic-method, the-exponential-function, the-derivative-and-mean-value-theorems, cm-math-geometry |

## Your content, in full

### `cm-math-dynamics` — Cm Math Dynamics

- `def-cm-local-flow-of-an-autonomous-system` · definition — The local flow of an autonomous first-order system
- `lem-cm-local-flow-composition-law` · lemma — The local flow is a partial one-parameter group: identity, composition and inverse-time laws
- `lem-cm-continuous-dependence-on-initial-data` · lemma — Continuous and Lipschitz dependence on the initial condition on a Picard-Lindelof cylinder
- `thm-cm-smooth-dependence-and-the-variational-equation` · theorem — C¹ dependence of an autonomous flow on the initial condition, and the variational equation
- `cor-cm-flow-domain-open-and-flow-is-c1` · corollary — The flow domain of a C¹ autonomous field is open and the flow is C¹ on it
- `prop-cm-first-return-map-is-a-local-c1-diffeomorphism` · proposition — A transversal return of a C¹ flow yields a local C¹ Poincaré map, with inverse given by the reversed crossing
- `def-cm-finite-time-tangent-growth-rate-and-lyapunov-exponent` · definition — Finite-time tangent growth rates and Lyapunov exponents of a C¹ flow
- `def-cm-bilateral-shift-space-and-cylinders` · definition — The bilateral two-symbol shift space, its metric, its shift map and its cylinder sets
- `lem-cm-bilateral-shift-metric-and-sequential-compactness` · lemma — The bilateral shift metric is a metric, cylinders are its basic balls, and the shift space is sequentially compact
- `def-cm-topologically-mixing-dense-periodic-and-sensitive-maps` · definition — Topological mixing, dense periodic points, sensitive dependence, and the stated chaos list
- `thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive` · theorem — The bilateral two-symbol shift is continuous, topologically mixing, has dense periodic points and is sensitive; it is chaotic in the stated sense
- `rem-cm-recurrence-scope-for-mechanical-systems` · remark — Scope of Poincaré recurrence for mechanical systems: finite invariant volume and complete return maps
- `thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism` · theorem — Exponential dichotomy for a hyperbolic endomorphism: invariant stable and unstable subspaces with exponential estimates
- `thm-cm-exponential-stability-by-a-lyapunov-quadratic-form` · theorem — An equilibrium whose linearisation has all eigenvalues in the open left half-plane is locally exponentially stable
- `thm-cm-instability-of-a-hyperbolic-saddle` · theorem — A hyperbolic equilibrium whose linearisation has an eigenvalue with positive real part is unstable
- `def-cm-mechanical-vector-field-and-energy-in-a-chart` · definition — The mechanical first-order field, Lagrangian and energy of a configuration-dependent kinetic metric in a chart
- `lem-cm-energy-conservation-for-the-mechanical-system` · lemma — Energy is conserved along solutions of the mechanical system with a configuration-dependent kinetic metric
- `lem-cm-positive-definite-matrix-square-roots` · lemma — Positive definite symmetric matrices have positive definite square roots, and the congruence M^{-1/2} K M^{-1/2} preserves symmetry and positivity
- `lem-cm-strict-minimum-has-positive-semidefinite-hessian` · lemma — A C² local minimum has vanishing gradient and positive semidefinite Hessian
- `thm-cm-quadratic-mode-decomposition` · theorem — Decoupling of the constant-coefficient quadratic system $Mq''+Kq=0$ into normal modes, with the zero-mode and energy identities
- `thm-cm-energy-stability-of-a-strict-minimum` · theorem — A strict local minimum of the potential gives a Lyapunov stable equilibrium of the mechanical system, by energy conservation
- `prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium` · proposition — Linearisation of the mechanical system at an equilibrium: M(q_0) xi'' + D²U(q_0) xi = 0, and the small-oscillation quadratic model
- `rem-cm-scope-of-energy-stability-and-quadratic-modes` · remark — Scope of the quadratic-mode and energy-stability results: exact quadratic model versus linearisation approximation

### `cm-math-dynamics-examples` — Cm Math Dynamics — Examples

- `ex-cm-flow-of-a-linear-system-is-the-matrix-exponential` · example — The flow and variational equation of a linear system: Phi(t,a)=e^{tA}a
- `ex-cm-coupled-oscillator-modes` · example — Two coupled equal masses: mode frequencies sqrt(k/m) and sqrt((k+2c)/m), and the free zero mode when k=0
- `ex-cm-planar-harmonic-oscillator-return-map` · example — The Poincaré return map of the planar isotropic oscillator on the line y=0 is the reflection x->-x
- `ex-cm-bilateral-shift-finite-checks` · example — Explicit mixing, periodic and sensitivity checks in the bilateral shift
- `ex-cm-jordan-block-dichotomy-computed` · example — Computed dichotomy constants for a Jordan block and for a diagonal sink-source
- `cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions` · counterexample — A non-hyperbolic equilibrium with no positive eigenvalue can still be unstable: x'=x^3

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-dynamics` requires `cm-math-balances`
- `cm-math-dynamics` requires `cm-math-geometry`
- `cm-math-dynamics-examples` requires `cm-math-geometry`
- `cm04-one-dimensional-conservative-and-dissipative-models` requires `cm-math-dynamics`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` requires `cm-math-dynamics`
- `cm09-coupled-oscillations-and-approximation` requires `cm-math-dynamics`
- `cm09-coupled-oscillations-and-approximation-examples` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos` requires `cm-math-dynamics`
- `cm16-stability-perturbations-and-chaos-examples` requires `cm-math-dynamics`
- `cm18-measurement-uncertainty-and-later-bridges` requires `cm-math-dynamics`
- `cm-math-variations` requires `cm-math-dynamics`
- `cm-math-variations-examples` requires `cm-math-dynamics`
- `cm-math-canonical` requires `cm-math-dynamics`
- `cm-math-approximation` requires `cm-math-dynamics`
- `cm-math-approximation-examples` requires `cm-math-dynamics`
- `cm-math-continuum` requires `cm-math-dynamics`
- `cm-math-numerical` requires `cm-math-dynamics`
- `cm-math-chaos` requires `cm-math-dynamics`
- `cm-math-chaos-examples` requires `cm-math-dynamics`
- `cm-math-kam` requires `cm-math-dynamics`
- `cm-math-rotation-double-cover` requires `cm-math-dynamics`
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
