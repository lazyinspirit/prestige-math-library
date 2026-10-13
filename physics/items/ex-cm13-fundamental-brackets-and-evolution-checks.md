---
id: ex-cm13-fundamental-brackets-and-evolution-checks
kind: example
title: "Fundamental brackets and Bracket evolution on explicit one-label data: $\\{x^a,H\\}=p_a/m$, $\\{p_a,H\\}=-U_{x^a}$, and the oscillator check"
status: published
origin: session
domain: physics
dependency_level: 23
deps: [def-cm13-poisson, def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-hamiltonian-field, pthm-cm13-hamiltonian-field-integrates-the-model-equations, pthm-cm13-bracket-identities, pthm-cm13-observable-evolution, pthm-cm12-mechanical-hyperregularity, def-cm12-hamiltonian, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-euclidean-inner-product]
dependency_roles:
  def-cm13-poisson: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  pthm-cm13-bracket-identities: physical-result
  pthm-cm13-observable-evolution: physical-result
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked computation of the bracket of a declared one-label potential presentation: the fundamental brackets of the canonical coordinates, the bracket of the coordinates with the branch Hamiltonian reproducing velocity and force, and the evolution identity and energy constancy on the isotropic oscillator instance. All quantities are model values of the declared idealization; no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.3, printed pages 94-95 (PDF pages 100-101): the fundamental brackets and the evolution formula $df/dt=\\{f,H\\}+\\partial f/\\partial t$; Section 4.5.1, printed pages 105-107 (PDF pages 111-113): the one-dimensional harmonic oscillator Hamiltonian and equations. The three-axis bracket computations below are local specializations"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2.2-5.3: the fundamental Poisson brackets of the coordinates and momenta and their role in the canonical condition"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Example

Declare the one-label model of the force branch
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$, a $C^{2}$ potential
$U:\mathbb R\times Q\to\mathbb R$ and no residual forces
([[def-cm01-configuration]], [[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]). By
[[pthm-cm12-mechanical-hyperregularity]] the presentation is hyperregular on
the Cartesian chart with $H(t,x,p)=\tfrac12m^{-1}\lvert p\rvert^{2}+U(t,x)$
([[def-cm12-hamiltonian]]), the two-form is
$\omega=\sum_{a=1}^{3}dx^{a}\wedge dp_{a}$
([[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]]) and the bracket
is [[def-cm13-poisson]]. Then:

1. the canonical coordinates satisfy the **fundamental brackets**
   $\{x^{a},x^{b}\}=0$, $\{p_{a},p_{b}\}=0$ and
   $\{x^{a},p_{b}\}=\delta^{a}_{b}$ for all $a,b\in\{1,2,3\}$
   ([[pthm-cm13-bracket-identities]] clause 5);
2. the brackets of the coordinates with the Hamiltonian recover the model's
   velocities and forces:
   $\{x^{a},H\}=H_{p_{a}}=m^{-1}p_{a}$ and
   $\{p_{a},H\}=-H_{x^{a}}=-U_{x^{a}}(t,x)$; hence Hamilton's equations read
   $\dot x^{a}=\{x^{a},H\}$, $\dot p_{a}=\{p_{a},H\}$
   ([[pthm-cm13-bracket-identities]] clause 4,
   [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] clause 1);
3. along every solution of the Hamiltonian system and for every $C^{1}$ phase
   function $f$, $\frac{d}{dt}f(t,x(t),p(t))=\partial_{t}f+\{f,H\}$
   ([[pthm-cm13-observable-evolution]] clause 1);
4. on the **isotropic oscillator instance** $U(x)=\tfrac12k\lvert x\rvert^{2}$
   with $k>0$, one has $\{p_{a},H\}=-kx^{a}$ and $\{H,H\}=0$, and every
   solution of the Hamiltonian system has constant
   $H=\tfrac12m^{-1}\lvert p\rvert^{2}+\tfrac12k\lvert x\rvert^{2}$ on its
   domain, the Hamiltonian form of the model's energy conservation
   ([[pthm-cm13-observable-evolution]] clause 2,
   [[pthm-cm12-mechanical-hyperregularity]]).

All quantities are model values of the declared idealization; no measurement
is reported.

## Facts & Assumptions

**Given:** The one-label model with its potential, the branch Hamiltonian $H$
and the bracket of the presentation on the Cartesian chart.

[F1] Model and Hamiltonian ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]]): $H(t,x,p)=\tfrac12m^{-1}\lvert p\rvert^{2}+U(t,x)$ with $H_{p}=m^{-1}p$ and $H_{x}=\nabla_{x}U$, and dimensions are read by the cited units item.

[F2] Bracket, field and equations ([[def-cm13-poisson]], [[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]], [[def-cm13-hamiltonian-field]], [[pthm-cm13-bracket-identities]], [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]], [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]): $\{f,g\}=\sum_{a}(f_{x^{a}}g_{p_{a}}-f_{p_{a}}g_{x^{a}})$, the coordinate functions satisfy the fundamental brackets, $\{f,g\}=X_{g}(f)$, and a curve solves the Hamiltonian system exactly when it satisfies $\dot x=H_{p}$, $\dot p=-H_{x}$.

[F3] Evolution identity ([[pthm-cm13-observable-evolution]]): along a solution, $\frac{d}{dt}f(t,z(t))=\partial_{t}f(t,z(t))+\{f_{t},H_{t}\}(z(t))$ for every $C^{1}$ phase function $f$; autonomous functions whose bracket with $H$ vanishes identically are constant along solutions.

[F4] Calculus ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-cm02-newtonian-flow]]): coordinate functions have the displayed partial derivatives, $\nabla_{x}\lvert x\rvert^{2}=2x$ and $\nabla_{p}\lvert p\rvert^{2}=2p$ in the Euclidean product, and the oscillator equation is $m x''=-\nabla_{x}U=-kx$.

## Verification

**Proof technique:** direct. Evaluate the coordinate formula of the bracket on the coordinate functions and on the Hamiltonian, then apply the evolution identity to the oscillator instance.

1.1 Fundamental brackets: by [F2] the bracket of two coordinate functions is computed from their constant or linear derivatives; explicitly $\{x^{a},x^{b}\}=\sum_{c}(\delta^{a}_{c}\cdot0-0\cdot\delta^{b}_{c})=0$, $\{p_{a},p_{b}\}=\sum_{c}(0\cdot\delta^{b}_{c}-\delta^{c}_{a}\cdot0)=0$ and $\{x^{a},p_{b}\}=\sum_{c}(\delta^{a}_{c}\delta^{c}_{b}-0)=\delta^{a}_{b}$; this is claim 1. [F2, F4, algebra]

1.2 Bracket with the Hamiltonian: by [F1] and [F2], $\{x^{a},H\}=\sum_{b}(\delta^{a}_{b}H_{p_{b}}-0\cdot H_{x^{b}})=H_{p_{a}}=m^{-1}p_{a}$ and $\{p_{a},H\}=\sum_{b}(0\cdot H_{p_{b}}-\delta^{b}_{a}H_{x^{b}})=-H_{x^{a}}=-U_{x^{a}}(t,x)$, so the Hamilton equations $\dot x^{a}=H_{p_{a}}$, $\dot p_{a}=-H_{x^{a}}$ read $\dot x^{a}=\{x^{a},H\}$, $\dot p_{a}=\{p_{a},H\}$; this is claim 2. [F1, F2, algebra]

2.1 Evolution and oscillator: [F3] gives claim 3 directly; for the oscillator instance [F4] gives $\{p_{a},H\}=-kx^{a}$ and skew-symmetry of [F2] gives $\{H,H\}=0$, so by [F3] $H$ is constant along every solution, which is claim 4. [step 1.2, F3, F4, algebra]

3.1 Collecting steps 1.1, 1.2 and 2.1 proves the four claims on the declared data. [step 1.1, step 1.2, step 2.1] ∎
