# Step 4 batch reviewer — batch **8**, run `physics-cm-qm-gr-79-2026-10-11`

You are the only reviewer for batch **8**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["8"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 8 | `cm-math-continuum` | A | cm-math-dynamics, euclidean-surface-measure-divergence-and-green-identities, fejer-and-poisson-summability-of-fourier-series, product-measures-and-the-fubini-tonelli-theorems, uniform-convergence-of-functions, cm-math-geometry |
| 8 | `cm-math-continuum-examples` | B | cm-math-continuum, cm-math-geometry |

## Your content, in full

### `cm-math-continuum` — Cm Math Continuum

- `def-cm-euclidean-spatial-calculus` · definition — Euclidean spatial calculus: gradient, divergence and material derivative
- `def-cm-continuum-motion` · definition — Continuum motions, spatial velocity, material acceleration and swept regions
- `lem-cm-determinant-derivative-along-a-matrix-curve` · lemma — The derivative of the determinant along an invertible C¹ matrix curve: $(\det A)'=\det A\;\operatorname{tr}(A^{-1}A')$
- `lem-cm-localization-of-vanishing-integrals` · lemma — Localization: a continuous function whose integrals vanish over a neighbourhood-basis family is identically zero
- `thm-cm-transport-theorem` · theorem — The transport theorem for a $C^2$ family of diffeomorphisms: $\frac{d}{dt}\int_{\psi_t(B)}f=\int_{\psi_t(B)}(\partial_tf+\operatorname{div}(fw))$
- `thm-cm-local-mass-balance` · theorem — Local mass balance: conservation on every material subregion implies $\partial_t\rho+\operatorname{div}(\rho u)=0$
- `thm-cm-local-momentum-balance` · theorem — Local momentum balance: $\rho D_tu=\rho b+\operatorname{div}\sigma$ from the integral balance on every material subregion
- `thm-cm-traction-is-given-by-a-stress-matrix` · theorem — A continuous traction field balanced on every piecewise $C^1$ region is given by a continuous stress matrix, and $t(-n)=-t(n)$
- `thm-cm-stress-matrix-is-symmetric` · theorem — Angular-momentum balance without couples forces the stress matrix to be symmetric
- `thm-cm-control-volume-balance` · theorem — Control-volume balance: mass and momentum rates for a moving non-material region
- `def-cm-linear-elastic-constitutive-law` · definition — The small-strain isotropic linear elastic constitutive law and its strain energy
- `lem-cm-isotropic-elastic-strain-energy-positivity` · lemma — The isotropic elastic strain energy is $\mu|e_0|_F^2+(\lambda/2+\mu/3)(\operatorname{tr}e)^2$, hence positive definite under $\mu>0$, $\lambda+2\mu/3>0$
- `thm-cm-plane-elastic-waves` · theorem — Exact plane-wave solutions of the isotropic linear elastic model, with longitudinal and transverse speeds
- `def-cm-fluid-constitutive-models` · definition — Incompressible Newtonian and barotropic inviscid fluid constitutive models
- `thm-cm-barotropic-momentum-and-bernoulli` · theorem — Barotropic inviscid momentum in gradient form, Bernoulli along streamlines and the irrotational constant
- `thm-cm-kelvin-circulation` · theorem — Kelvin circulation: the circulation around a smooth material loop is constant in the barotropic inviscid model
- `thm-cm-dalembert-formula-and-string-solutions` · theorem — d'Alembert's formula solves the wave equation, is the unique $C^2$ solution, and the fixed-end sine modes solve it exactly
- `def-cm-cyclic-spring-chain` · definition — The cyclic spring chain, its discrete energy, and the smooth periodic comparison class
- `thm-cm-spring-chain-dispersion-relation` · theorem — Exact dispersion relation $\omega^2=(4c^2/a^2)\sin^2(\kappa a/2)$ for the cyclic chain and its continuum error bound
- `lem-cm-second-difference-remainder-bound` · lemma — The centered second difference differs from the second derivative by at most $Ma^2/12$ when $|u''''|\le M$
- `lem-cm-discrete-periodic-summation-by-parts` · lemma — Discrete periodic summation by parts, the scaled Cauchy-Schwarz inequality, and the discrete energy identity
- `thm-cm-spring-chain-continuum-limit` · theorem — Finite-time continuum limit of the cyclic spring chain: uniform $O(a^{3/2})$ nodal and uniform interpolation convergence
- `thm-cm-burgers-characteristics-and-gradient-blowup` · theorem — The method of characteristics for $u_t+uu_x=0$ and the finite blow-up time of the gradient
- `def-cm-scalar-conservation-law-weak-and-entropy-solution` · definition — Weak and entropy solutions of the scalar conservation law $u_t+(u^2/2)_x=0$
- `thm-cm-burgers-riemann-shock-and-rarefaction` · theorem — Riemann shock and rarefaction waves for $u_t+(u^2/2)_x=0$ are weak solutions, and the shock is an entropy solution
- `thm-cm-plane-couette-and-poiseuille-flows` · theorem — Exact plane Poiseuille and Couette flows of the incompressible Newtonian model, with flux and ansatz uniqueness
- `def-cm-sine-coefficients-of-periodic-functions` · definition — Sine coefficients, sine series and the odd periodic extension
- `lem-cm-cosine-sine-orthogonality-and-odd-extension` · lemma — Sine orthogonality on a half period and the full-period integrals of odd $2L$-periodic functions
- `lem-cm-fejer-completeness-for-continuous-periodic-functions` · lemma — Fejer completeness: a continuous one-periodic function with all integrals against the characters vanishing is zero
- `lem-cm-uniform-convergence-with-derivatives-on-a-rectangle` · lemma — Uniform convergence of a $C^2$ sequence with its first and second derivatives on a rectangle passes $C^2$ regularity and termwise differentiation to the limit
- `lem-cm-sine-coefficient-decay-by-integration-by-parts` · lemma — Repeated integration by parts gives $|b_n(F)|\le 2L^5M_5/(\pi^5n^5)$ for odd $2L$-periodic $C^5$ functions and $|b_n(G)|\le 2L^4M_4/(\pi^4n^4)$ for $C^4$
- `thm-cm-smooth-string-fourier-series-solution` · theorem — The smooth fixed-end string: the sine series solves the wave equation with the given data, uniquely, with an explicit tail bound

### `cm-math-continuum-examples` — Cm Math Continuum — Examples

- `ex-cm-transport-of-a-translating-uniform-flow` · example — Transport of a translating rigid region: the rate integral vanishes for a travelling profile
- `ex-cm-elastic-plane-wave-speeds-and-energy` · example — A longitudinal plane wave in the isotropic elastic model: dispersion check and strain energy at explicit parameters
- `ex-cm-string-modes-and-tail-constants` · example — The first sine mode with matched velocity data: exact solution and the numerical tail bound $8(N+1)^{-4}$
- `cex-cm-sine-tail-bound-fails-for-rough-data` · counterexample — FALSE: the $O(N^{-4})$ sine-tail bound holds for every continuous odd periodic function. A $C^1$ datum with coefficients $n^{-3}$ refutes it
- `ex-cm-burgers-riemann-checks` · example — Riemann data $u_L=3$, $u_R=1$: shock speed and entropy coefficients, and a rarefaction check
- `ex-cm-couette-poiseuille-numbers` · example — Numerical checks for channel flows: $h=\eta=1$, $G=12$ gives flux $1$ and centre speed $3/2$, and $V=2$ gives shear $2$
- `ex-cm-spring-chain-mode-and-limit-check` · example — A four-node cyclic chain mode with $a=c=1$: exact ODE check, dispersion value $\omega^2=2$, and the continuum error bound

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `cm-math-continuum` requires `cm-math-dynamics`
- `cm-math-continuum` requires `cm-math-geometry`
- `cm-math-continuum-examples` requires `cm-math-geometry`
- `gr-einstein-and-matter` requires `cm-math-continuum`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` requires `cm-math-continuum`
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-continuum`
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm-math-continuum`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` requires `cm-math-continuum`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` requires `cm-math-continuum`
- `cm-math-fluid` requires `cm-math-continuum`
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
