# Step 5 adjudication — group **n**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 7, 8, 9: 3 A/B pair(s), 6 page(s), 83 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **7**: `research/physics-cm-qm-gr-79-2026-10-11-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **8**: `research/physics-cm-qm-gr-79-2026-10-11-batch-8-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **9**: `research/physics-cm-qm-gr-79-2026-10-11-batch-9-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/physics-cm-qm-gr-79-2026-10-11-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `cm-math-approximation` | A | non-relativistic-classical-mechanics-mathematics | 93 | `cm-math-dynamics`, `bounded-linear-operators-and-quotient-spaces`, `complex-differentiability-and-cauchy-riemann`, `field-extensions-and-the-complex-numbers`, `the-exponential-function`, `the-fundamental-theorems-of-calculus`, `cm-math-balances` |
| 7 | `cm-math-approximation-examples` | B | non-relativistic-classical-mechanics-mathematics | 94 | `cm-math-approximation`, `darboux-lhopital-and-taylor`, `monotone-functions-and-discontinuities`, `cm-math-balances`, `cm-math-dynamics` |
| 8 | `cm-math-continuum` | A | non-relativistic-classical-mechanics-mathematics | 95 | `cm-math-dynamics`, `euclidean-surface-measure-divergence-and-green-identities`, `fejer-and-poisson-summability-of-fourier-series`, `product-measures-and-the-fubini-tonelli-theorems`, `uniform-convergence-of-functions`, `cm-math-geometry` |
| 8 | `cm-math-continuum-examples` | B | non-relativistic-classical-mechanics-mathematics | 96 | `cm-math-continuum`, `cm-math-geometry` |
| 9 | `cm-math-rigid` | A | non-relativistic-classical-mechanics-mathematics | 97 | `cm-math-balances`, `cm-math-geometry`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-spectral-theorem-and-singular-value-decomposition`, `measures-and-their-basic-properties`, `sigma-algebras-and-borel-sets`, `gaussian-elimination-and-row-reduction`, `sine-cosine-and-the-definition-of-pi`, `the-exponential-function`, `the-logarithm-and-general-powers` |
| 9 | `cm-math-rigid-examples` | B | non-relativistic-classical-mechanics-mathematics | 98 | `cm-math-rigid`, `measures-and-their-basic-properties`, `sine-cosine-and-the-definition-of-pi`, `the-exponential-function`, `the-logarithm-and-general-powers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm-math-approximation` — Cm Math Approximation (17 item(s))

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

### `cm-math-approximation-examples` — Cm Math Approximation — Examples (8 item(s))

- `ex-cm-oscillator-cases-computed` · example — Five worked initial value problems for the homogeneous oscillator across the discriminant, degenerate and repulsive cases
- `ex-cm-resonant-forcing-and-amplitude-peak` · example — Resonant forcing at $\Omega=\omega_0$ and the two regimes of the amplitude maximum
- `ex-cm-uniform-force-and-linear-drag` · example — Constant forcing: free fall and the approach to terminal velocity under linear drag
- `ex-cm-pendulum-linearization-bound-check` · example — Finite-time linearization bound for the planar pendulum with explicit constants
- `ex-cm-averaging-oscillatory-deviation-check` · example — Averaging estimate on $[0,100]$ for the scalar equation $x'=\varepsilon\cos t$
- `ex-cm-adiabatic-drift-check` · example — An exactly solvable adiabatic branch: $K=I+\varepsilon I\cos\theta$ and comparison with the drift bound
- `cex-cm-nonuniqueness-without-state-lipschitz` · counterexample — Continuity alone does not give uniqueness: $x'=\sqrt{|x|}$ through the origin
- `ex-cm-domain-escape-in-finite-time` · example — A bounded field whose solution leaves the domain in finite time: $x'=v$, $v'=0$ on $(0,\infty)\times(-2,2)$

### `cm-math-continuum` — Cm Math Continuum (32 item(s))

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

### `cm-math-continuum-examples` — Cm Math Continuum — Examples (7 item(s))

- `ex-cm-transport-of-a-translating-uniform-flow` · example — Transport of a translating rigid region: the rate integral vanishes for a travelling profile
- `ex-cm-elastic-plane-wave-speeds-and-energy` · example — A longitudinal plane wave in the isotropic elastic model: dispersion check and strain energy at explicit parameters
- `ex-cm-string-modes-and-tail-constants` · example — The first sine mode with matched velocity data: exact solution and the numerical tail bound $8(N+1)^{-4}$
- `cex-cm-sine-tail-bound-fails-for-rough-data` · counterexample — FALSE: the $O(N^{-4})$ sine-tail bound holds for every continuous odd periodic function. A $C^1$ datum with coefficients $n^{-3}$ refutes it
- `ex-cm-burgers-riemann-checks` · example — Riemann data $u_L=3$, $u_R=1$: shock speed and entropy coefficients, and a rarefaction check
- `ex-cm-couette-poiseuille-numbers` · example — Numerical checks for channel flows: $h=\eta=1$, $G=12$ gives flux $1$ and centre speed $3/2$, and $V=2$ gives shear $2$
- `ex-cm-spring-chain-mode-and-limit-check` · example — A four-node cyclic chain mode with $a=c=1$: exact ODE check, dispersion value $\omega^2=2$, and the continuum error bound

### `cm-math-rigid` — Cm Math Rigid (16 item(s))

- `lem-cm-matrix-curve-derivative-rules` · lemma — Derivative rules for differentiable matrix-valued curves, and skewness of $R^{\mathsf T}R'$ for a curve in $SO(3)$
- `lem-cm-skew-matrix-cross-product-correspondence` · lemma — The skew-matrix/cross-product correspondence $[\omega]_\times z=\omega\times z$ and its conjugation law $R[\omega]_\times R^{\mathsf T}=[R\omega]_\times$
- `def-cm-mass-distribution-and-inertia-matrix` · definition — Mass distributions on $\mathbb R^3$: total mass, first moment and inertia matrix
- `lem-cm-mass-moments-are-finite` · lemma — Finiteness of the moments of a bounded finite Borel measure on $\mathbb R^3$
- `def-cm-rigid-placement-and-body-angular-velocity` · definition — Rigid placements, body and spatial angular velocity, and material velocities
- `lem-cm-inertia-matrix-properties` · lemma — Symmetry, the quadratic identity $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu$, and the positive-definiteness criterion for the inertia matrix
- `thm-cm-rigid-kinetic-energy-and-angular-momentum` · theorem — Kinetic energy and angular momentum of a rigid placement: $K=\tfrac12m\lVert c'\rVert_2^2+\tfrac12\omega^{\mathsf T}I\omega$ and $L_c=RI\omega$
- `cor-cm-principal-axes-of-the-inertia-matrix` · corollary — Principal axes and principal moments of the inertia matrix, and positivity in the nondegenerate case
- `thm-cm-euler-equations-and-torque-free-invariants` · theorem — Euler's equations $I\omega'+\omega\times I\omega=R^{\mathsf T}\tau$ under an adopted torque balance, and the torque-free invariants and principal-axis equations
- `thm-cm-stability-of-extreme-principal-axes` · theorem — Lyapunov stability of spin about the largest and smallest principal axes of the torque-free top
- `thm-cm-instability-of-the-intermediate-axis` · theorem — Instability of spin about the intermediate principal axis of the torque-free top
- `thm-cm-linearized-torque-free-euler-equations` · theorem — Linearization of the torque-free Euler system at a principal-axis spin, and the oscillatory/exponential dichotomy
- `lem-cm-coordinate-rotation-matrices` · lemma — The coordinate rotation matrices $R_z(a)$ and $R_y(a)$: values in $SO(3)$, composition law, and derivatives
- `def-cm-euler-angle-parametrization-and-heavy-top-system` · definition — The Euler-angle parametrization and the heavy symmetric top system
- `thm-cm-heavy-top-reduction` · theorem — Reduction of the heavy symmetric top system: conserved momenta, one-dimensional $\theta$ equation and conserved reduced energy
- `lem-cm-euler-angle-angular-velocity` · lemma — Angular velocity in Euler angles: $\omega_3=\psi'+\varphi'\cos\theta$ and $\omega_1^2+\omega_2^2=\theta'^2+\varphi'^2\sin^2\theta$

### `cm-math-rigid-examples` — Cm Math Rigid — Examples (3 item(s))

- `ex-cm-inertia-tensors-of-point-masses` · example — Finite point-mass inertia matrices computed and checked against the positivity criterion
- `ex-cm-torque-free-spin-checks` · example — Finite checks of the torque-free spin results: stability certificates, an escape-time bound, and the linearized dichotomy
- `ex-cm-euler-angle-and-heavy-top-checks` · example — Finite checks of the Euler-angle parametrization, the angular-velocity formula and a steady precession of the heavy top

## Your seams

Your pages depend on another group's:

- `cm-math-approximation` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-approximation` requires `cm-math-balances` (group l, batch 2)
- `cm-math-approximation-examples` requires `cm-math-balances` (group l, batch 2)
- `cm-math-approximation-examples` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-continuum` requires `cm-math-dynamics` (group l, batch 3)
- `cm-math-continuum` requires `cm-math-geometry` (group l, batch 1)
- `cm-math-continuum-examples` requires `cm-math-geometry` (group l, batch 1)
- `cm-math-rigid` requires `cm-math-balances` (group l, batch 2)
- `cm-math-rigid` requires `cm-math-geometry` (group l, batch 1)

Another group's pages depend on yours:

- `gr-einstein-and-matter` (group b) requires your `cm-math-continuum`
- `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof` (group e) requires your `cm-math-continuum`
- `cm02-forces-initial-data-and-newtonian-flow` (group f) requires your `cm-math-approximation`
- `cm02-forces-initial-data-and-newtonian-flow-examples` (group f) requires your `cm-math-approximation`
- `cm03-momentum-work-and-energy-balances` (group f) requires your `cm-math-rigid`
- `cm04-one-dimensional-conservative-and-dissipative-models` (group g) requires your `cm-math-approximation`
- `cm04-one-dimensional-conservative-and-dissipative-models-examples` (group g) requires your `cm-math-approximation`
- `cm06-regular-constraints-and-moving-frames` (group g) requires your `cm-math-rigid`
- `cm09-coupled-oscillations-and-approximation` (group h) requires your `cm-math-approximation`
- `cm09-coupled-oscillations-and-approximation-examples` (group h) requires your `cm-math-approximation`
- `cm10-rigid-body-configuration-and-inertia` (group i) requires your `cm-math-rigid`
- `cm10-rigid-body-configuration-and-inertia-examples` (group i) requires your `cm-math-rigid`
- `cm11-rigid-body-dynamics-and-stability` (group i) requires your `cm-math-rigid`
- `cm11-rigid-body-dynamics-and-stability-examples` (group i) requires your `cm-math-rigid`
- `cm14-hamilton-jacobi-and-integrability` (group j) requires your `cm-math-approximation`
- `cm15-scattering-and-impulse-model-boundaries` (group j) requires your `cm-math-continuum`
- `cm15-scattering-and-impulse-model-boundaries-examples` (group j) requires your `cm-math-continuum`
- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm-math-approximation`
- `cm17-classical-continua-with-explicit-constitutive-assumptions` (group k) requires your `cm-math-continuum`
- `cm17-classical-continua-with-explicit-constitutive-assumptions-examples` (group k) requires your `cm-math-continuum`
- `cm-math-verification` (group o) requires your `cm-math-approximation`
- `cm-math-verification` (group o) requires your `cm-math-rigid`
- `cm-math-verification-examples` (group o) requires your `cm-math-rigid`
- `cm-math-verification-examples` (group o) requires your `cm-math-approximation`
- `cm-math-fluid` (group p) requires your `cm-math-continuum`
- `qm-math-orbital-and-spin` (group y) requires your `cm-math-rigid`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/physics-cm-qm-gr-79-2026-10-11-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

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

# Step 5 batch adjudication, `physics-cm-qm-gr-79-2026-10-11`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
