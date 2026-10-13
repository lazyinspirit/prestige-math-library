# Step 5 adjudication — group **j**, run `physics-cm-qm-gr-79-2026-10-11`

You are the group Alpha for batches 29, 30, 31: 3 A/B pair(s), 6 page(s), 51 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **29**: `research/physics-cm-qm-gr-79-2026-10-11-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/physics-cm-qm-gr-79-2026-10-11-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/physics-cm-qm-gr-79-2026-10-11-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 29 | `cm13-symplectic-geometry-and-canonical-methods` | A | non-relativistic-classical-mechanics | 137 | `cm-math-numerical`, `cm12-legendre-transformation-and-hamiltonian-mechanics`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-canonical` |
| 29 | `cm13-symplectic-geometry-and-canonical-methods-examples` | B | non-relativistic-classical-mechanics | 138 | `cm13-symplectic-geometry-and-canonical-methods`, `cm12-legendre-transformation-and-hamiltonian-mechanics`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-canonical`, `cm-math-numerical` |
| 30 | `cm14-hamilton-jacobi-and-integrability` | A | non-relativistic-classical-mechanics | 139 | `cm-math-central`, `cm08-symmetry-noether-and-conditional-conservation`, `cm13-symplectic-geometry-and-canonical-methods`, `cm12-legendre-transformation-and-hamiltonian-mechanics`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm-math-canonical`, `cm-math-approximation` |
| 30 | `cm14-hamilton-jacobi-and-integrability-examples` | B | non-relativistic-classical-mechanics | 140 | `cm14-hamilton-jacobi-and-integrability`, `cm04-one-dimensional-conservative-and-dissipative-models`, `cm05-two-body-central-forces-and-gravitation`, `relations-functions-and-quotients`, `compactness`, `cm12-legendre-transformation-and-hamiltonian-mechanics`, `cm-math-canonical`, `cm02-forces-initial-data-and-newtonian-flow`, `cm01-framework-quantities-and-geometry`, `cm13-symplectic-geometry-and-canonical-methods`, `cm-math-central`, `cm07-stationary-action-and-lagrangian-dynamics`, `cm03-momentum-work-and-energy-balances` |
| 31 | `cm15-scattering-and-impulse-model-boundaries` | A | non-relativistic-classical-mechanics | 141 | `cm-math-continuum`, `cm05-two-body-central-forces-and-gravitation`, `cm-math-central`, `cm01-framework-quantities-and-geometry`, `cm03-momentum-work-and-energy-balances`, `cm-math-balances`, `cm02-forces-initial-data-and-newtonian-flow`, `cm-math-geometry` |
| 31 | `cm15-scattering-and-impulse-model-boundaries-examples` | B | non-relativistic-classical-mechanics | 142 | `cm15-scattering-and-impulse-model-boundaries`, `cm-math-central`, `cm01-framework-quantities-and-geometry`, `cm-math-balances`, `cm03-momentum-work-and-energy-balances`, `cm05-two-body-central-forces-and-gravitation`, `cm-math-continuum` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cm13-symplectic-geometry-and-canonical-methods` — Symplectic geometry and canonical methods (15 item(s))

- `def-cm13-two-form` · definition — The canonical one-form and the two-form of a potential presentation: $\lambda=p\cdot dx$ on the Cartesian momentum phase chart and the induced forms on each generalized-coordinate chart
- `pthm-cm13-two-form-is-symplectic` · physics-theorem — The two-form of a potential presentation is closed and nondegenerate, and each generalized-coordinate momentum chart carries the same symplectic structure: $\Phi_X^*\lambda=\sum P_a\,dq^a$ and $\Phi_X^*\omega=\sum dq^a\wedge dP_a$
- `def-cm13-canonical-form` · definition — Canonical coordinates and the canonical form of the two-form for a potential presentation: the coordinate expression $\omega=\sum_{a=1}^{m} d\theta^a\wedge d\theta^{m+a}$ with $m$ the chart's half-dimension, and the model's own momentum charts
- `def-cm13-hamiltonian-field` · definition — The Hamiltonian field of a phase function for a potential presentation: the unique field $X_f$ with $\iota_{X_f}\omega=df$, and $X_H=(H_p,-H_x)$ for the branch Hamiltonian
- `pthm-cm13-hamiltonian-field-integrates-the-model-equations` · physics-theorem — Integral curves of the presentation's Hamiltonian field are exactly the momentum-phase curves of the model's motions, in every chart; and the forced field is Hamiltonian exactly when the residual force has a velocity-independent potential
- `def-cm13-poisson` · definition — The Poisson bracket of phase functions of a potential presentation: $\{f,g\}=\omega(X_f,X_g)$ and the coordinate formula in each canonical chart
- `pthm-cm13-bracket-identities` · physics-theorem — The bracket of a potential presentation is bilinear, skew, a derivation in each slot, satisfies the Jacobi identity, and reproduces the fundamental brackets and the Hamiltonian field
- `pthm-cm13-observable-evolution` · physics-theorem — Evolution of phase functions along the model's Hamiltonian solutions: $df/dt=\partial_t f+\{f,H\}$, the first-integral criterion, and the closed bracket algebra of autonomous first integrals
- `def-cm13-canonical-map` · definition — Canonical maps of a potential presentation: pullback-preserving immersions and the equal-dimensional determinant and field-transport tests
- `pthm-cm13-flow-preservation` · physics-theorem — The Hamiltonian evolution of a potential presentation preserves the two-form, the bracket and the determinant on its actual time-slice domains, also when the Hamiltonian depends on time
- `pthm-cm13-dynamics-transport-under-canonical-maps` · physics-theorem — Equal-dimensional canonical transformations of a potential presentation conjugate Hamiltonian fields and transport systems and brackets
- `lem-cm13-poincare-cartan-annihilation-characterization` · lemma — A curve solves Hamilton's equations if and only if its velocity annihilates $d(p\cdot dq-H\,dt)$, with the three coordinate components computed
- `pthm-cm13-liouville` · physics-theorem — Liouville's theorem for a potential presentation: the phase-volume form $\omega^{3N}/(3N)!$ and the Lebesgue measure in each canonical chart are preserved by the Hamiltonian evolution on its actual domains
- `pthm-cm13-generating-functions` · physics-theorem — Generating functions for a potential presentation: first- and second-kind data generate canonical maps locally, the local converse under an invertible projection, and the time-dependent Hamiltonian $K=H+\partial_tS$
- `rem-cm13-locality-topology` · remark — Scope of the symplectic and canonical methods for a potential presentation: locality of generating functions, projections and determinant tests, absent global claims, and empirical status

### `cm13-symplectic-geometry-and-canonical-methods-examples` — Symplectic geometry and canonical methods — Examples (6 item(s))

- `ex-cm13-fundamental-brackets-and-evolution-checks` · example — Fundamental brackets and Bracket evolution on explicit one-label data: $\{x^a,H\}=p_a/m$, $\{p_a,H\}=-U_{x^a}$, and the oscillator check
- `ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks` · example — The isotropic oscillator of the model: explicit solution, the determinant and matrix tests on each two-dimensional block, and the area and energy checks
- `ex-cm13-free-particle-flow-generating-function` · example — The free particle of the model: the flow $Q=q+(t/m)p$ generated by the first-kind function $S_t(q,Q)=-m\lvert Q-q\rvert^{2}/(2t)$, the projection check and the exact change of $\lambda$
- `ex-cm13-point-transformation-generating-function-and-projection` · example — The point transformation of the model: the chart transition $(q,\pi)\mapsto(X(q),DX(q)^{-\mathsf T}\pi)$ is generated in the second kind, has a nowhere invertible $(q,Q)$-projection, and is contrasted with the momentum shift
- `ex-cm13-determinant-tests-for-linear-canonical-maps` · example — Determinant tests on explicit linear maps: $\det A=1$ is equivalent to canonicity in dimension two, and strictly weaker in dimension four (the volume-preserving shear)
- `ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical` · example — The velocity-Verlet step of the model's mechanical splitting is a canonical map of the presentation: exact flows of the drift and kick, unit determinant, and the oscillator check

### `cm14-hamilton-jacobi-and-integrability` — Hamilton–Jacobi and integrability (9 item(s))

- `def-cm14-hamilton-jacobi-equation` · definition — The Hamilton-Jacobi equation of a declared potential presentation: the class of action-dimension functions $S$ with $S_t+H(t,q,S_q)=0$ in one momentum chart
- `def-cm14-complete-integral` · definition — A complete integral of the model's Hamilton-Jacobi equation: nondegenerate mixed derivative, momentum map and Jacobi constants
- `def-cm14-involution` · definition — First integrals of the model's Hamiltonian and families in involution: the bracket criterion and differential independence
- `def-cm14-complete-integrability` · definition — Completely integrable data of a declared presentation: $n$ smooth phase functions with $F_1=H$, pairwise in involution and independent on the regular locus
- `pthm-cm14-hamilton-jacobi-characteristics` · physics-theorem — A complete integral of the model's Hamilton-Jacobi equation produces the model's motions, its Jacobi constants and local canonical $(\beta,\alpha)$ labels
- `pthm-cm14-regular-tori` · physics-theorem — Compact connected regular fibres of a completely integrable datum of the presentation are Lagrangian tori with a full period lattice
- `pthm-cm14-action-angle` · physics-theorem — Action-angle coordinates of a completely integrable presentation: period-one angles, action coordinates, $H=h(I)$ and linear motion on the tori
- `pthm-cm14-adiabatic-invariance` · physics-theorem — Adiabatic invariance of the action of a slowly varying one-frequency model: an order-$\varepsilon$ drift bound on the $O(1/\varepsilon)$ time scale
- `rem-cm14-scope-of-hamilton-jacobi-and-integrability` · remark — Scope of the Hamilton-Jacobi and integrability statements: locality, the fibre hypotheses, global obstructions and the frequency conventions

### `cm14-hamilton-jacobi-and-integrability-examples` — Hamilton–Jacobi and integrability — Examples (5 item(s))

- `ex-cm14-harmonic-oscillator-hamilton-jacobi-check` · example — The harmonic model worked through: an explicit complete integral, its characteristic motion, and the action-angle chart with $I=\oint p\,dx$ and period-one frequency $1/T$
- `ex-cm14-kepler-radial-action-check` · example — The gravitational two-body model on an elliptic orbit: two simple turning points of the effective potential and $J_{\mathrm a}'(E)=T/(2\pi)=\sqrt{\mu/\kappa}\,a^{3/2}$
- `cex-cm14-harmonic-model-critical-fibre` · counterexample — The zero-energy level of the harmonic model: a compact connected common level set of a completely integrable datum that is a point, not a torus
- `cex-cm14-free-particle-noncompact-fibre` · counterexample — A free label: a nonempty regular common level set of a completely integrable datum that is noncompact and has no period lattice
- `ex-cm14-oscillator-caustic-check` · example — The conjugate time of the harmonic model: the complete integral's mixed derivative is unbounded and the characteristic family refocuses at $\omega t\in\pi\mathbb Z$

### `cm15-scattering-and-impulse-model-boundaries` — Scattering and impulse model boundaries (8 item(s))

- `def-cm15-asymptotic-data` · definition — Scattering data of the central model class: the scattering motion, the impact parameter, the asymptotic directions, the deflection conventions and the uniform-incident preparation
- `def-cm15-cross-section` · definition — The differential and truncated total cross-sections of a deflection branch: densities, units, branch sums and the empirical qualifications of the uniform-incident reading
- `pthm-cm15-central-scattering` · physics-theorem — Finite-range central scattering in the model class: the scattering motion on all of time, the asymptotic velocities and impact parameter $b=J/\sqrt{2\mu E}$, the advance $\Delta$ with deflection $\pi-2\Delta$, and the cross-section of a deflection branch
- `pthm-cm15-rutherford-model` · physics-theorem — Repulsive Coulomb scattering in the model class: global non-colliding motion, the deflection map $\theta=2\arctan(\kappa/(2Eb))$, the Rutherford density $(\kappa/4E)^2\csc^4(\theta/2)$, finite angular cutoffs and the divergent ideal total
- `post-cm15-impulse` · postulate — Adopted impact and open-mass extensions of the force branch: the isolated reciprocal impulse model, the collinear restitution contact law and the open-body material accounting
- `pthm-cm15-impact-balance` · physics-theorem — Consequences of the adopted impact and open-mass models: continuity of total momentum, the smooth-force exclusion, the restitution solution with $\Delta K=-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$, and the open-body and rocket laws
- `pthm-cm15-control-volume-balance` · physics-theorem — The smooth open-flow model: moving-control-region mass and momentum balances, their material and fixed special cases, and the inlet/outlet decomposition reproducing the open-body and rocket laws
- `rem-cm15-model-boundaries` · remark — Scope of the scattering and impulse items: model boundaries, branch and cutoff qualifications, and the claims deliberately not made

### `cm15-scattering-and-impulse-model-boundaries-examples` — Scattering and impulse model boundaries — Examples (8 item(s))

- `ex-cm15-hard-sphere-reflection-check` · example — Elastic reflection from a fixed sphere: the branch $b=a\cos(\theta/2)$, the uniform density $a^2/4$ and the total $\pi a^2$ of a contact model
- `ex-cm15-rutherford-cutoff-check` · example — A declared-data Rutherford check: $\alpha=1$, $\theta=\pi/2$, $(\mathrm d\sigma/\mathrm d\Omega)=4\times10^{-24}\,\mathrm{m^2}$, the band values $\pi b(\theta_1)^2$ and the growth of the truncated total as $\theta_1\downarrow0$
- `cex-cm15-deflection-need-not-decrease` · counterexample — Smooth finite-range free scattering refutes global strict decrease; as a separate contact comparison, an attractive refracting shell with index $3/2$ has $\theta(b)=2(\arcsin(b/a)-\arcsin(2b/(3a)))$ strictly increasing, with a jump down to $0$ at grazing incidence
- `ex-cm15-impact-check` · example — A declared-data impact check: $m_1=2\,\mathrm{kg}$, $m_2=6\,\mathrm{kg}$, $v_1^-=3\,\mathrm{m\,s^{-1}}$, $v_2^-=-1\,\mathrm{m\,s^{-1}}$, with elastic, semi-elastic and sticking outcomes
- `cex-cm15-restitution-above-one-increases-energy` · counterexample — A coefficient of restitution above $1$ manufactures kinetic energy: $e=2$ on $m_1=m_2=1\,\mathrm{kg}$ with velocities $\pm1\,\mathrm{m\,s^{-1}}$ raises the kinetic energy by $3\,\mathrm{J}$ while the configuration is unchanged
- `cex-cm15-momentum-alone-does-not-fix-the-impact` · counterexample — Reciprocal impulses do not determine a collinear impact: the same incoming data admit the sticking outcome $v^+=0$ and the elastic outcome $(v_1^+,v_2^+)=(-3,1)\,\mathrm{m\,s^{-1}}$ with different impulses and energies
- `ex-cm15-rocket-check` · example — A declared rocket check: mass $3-t\,\mathrm{kg}$ and constant exhaust speed $2\,\mathrm{m\,s^{-1}}$ relative to the body give $v(t)=2\ln(3/(3-t))\,\mathrm{m\,s^{-1}}$ and show that $(mv)'=F$ fails
- `ex-cm15-control-volume-check` · example — A declared smooth open flow: the uniform expansion $\rho=\rho_0e^{-3\alpha t}$, $u=\alpha x$ satisfies the control-volume identities on fixed and material regions, and elbow port data illustrate the inlet/outlet decomposition

## Your seams

Your pages depend on another group's:

- `cm13-symplectic-geometry-and-canonical-methods` requires `cm-math-numerical` (group o, batch 10)
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i, batch 28)
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm13-symplectic-geometry-and-canonical-methods` requires `cm-math-canonical` (group m, batch 6)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i, batch 28)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm-math-canonical` (group m, batch 6)
- `cm13-symplectic-geometry-and-canonical-methods-examples` requires `cm-math-numerical` (group o, batch 10)
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-central` (group m, batch 5)
- `cm14-hamilton-jacobi-and-integrability` requires `cm08-symmetry-noether-and-conditional-conservation` (group h, batch 24)
- `cm14-hamilton-jacobi-and-integrability` requires `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i, batch 28)
- `cm14-hamilton-jacobi-and-integrability` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm14-hamilton-jacobi-and-integrability` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm14-hamilton-jacobi-and-integrability` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm14-hamilton-jacobi-and-integrability` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-canonical` (group m, batch 6)
- `cm14-hamilton-jacobi-and-integrability` requires `cm-math-approximation` (group n, batch 7)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm04-one-dimensional-conservative-and-dissipative-models` (group g, batch 20)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm05-two-body-central-forces-and-gravitation` (group g, batch 21)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm12-legendre-transformation-and-hamiltonian-mechanics` (group i, batch 28)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm-math-canonical` (group m, batch 6)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm-math-central` (group m, batch 5)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm07-stationary-action-and-lagrangian-dynamics` (group h, batch 23)
- `cm14-hamilton-jacobi-and-integrability-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-continuum` (group n, batch 8)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm05-two-body-central-forces-and-gravitation` (group g, batch 21)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-central` (group m, batch 5)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-balances` (group l, batch 2)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm02-forces-initial-data-and-newtonian-flow` (group f, batch 18)
- `cm15-scattering-and-impulse-model-boundaries` requires `cm-math-geometry` (group l, batch 1)
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm-math-central` (group m, batch 5)
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm01-framework-quantities-and-geometry` (group f, batch 17)
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm-math-balances` (group l, batch 2)
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm03-momentum-work-and-energy-balances` (group f, batch 19)
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm05-two-body-central-forces-and-gravitation` (group g, batch 21)
- `cm15-scattering-and-impulse-model-boundaries-examples` requires `cm-math-continuum` (group n, batch 8)

Another group's pages depend on yours:

- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm14-hamilton-jacobi-and-integrability`
- `cm16-stability-perturbations-and-chaos` (group k) requires your `cm13-symplectic-geometry-and-canonical-methods`

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
