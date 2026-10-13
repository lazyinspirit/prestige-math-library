---
id: ex-cm08-pair-potential-charges-check
kind: example
title: "A two-label pair-potential model: translation, rotation, boost and energy charges verified on the model class and on an explicit rigid-rotation motion"
status: published
origin: session
domain: physics
dependency_level: 19
deps: [post-cm02-interactions, post-cm02-force-superposition, def-cm03-potential-and-mechanical-energy, def-cm03-centre-of-mass-and-momenta, def-cm02-newtonian-flow, pthm-cm08-translation, pthm-cm08-rotation, pthm-cm08-boost-boundary, pthm-cm08-time-energy, def-cm08-symmetry-of-the-mechanical-lagrangian, def-cm07-action-and-mechanical-lagrangian, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-euclidean-inner-product, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-interval, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-cm01-configuration, def-cm01-units]
dependency_roles:
  post-cm02-interactions: physical-assumption
  post-cm02-force-superposition: physical-assumption
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm08-translation: physical-result
  pthm-cm08-rotation: physical-result
  pthm-cm08-boost-boundary: physical-result
  pthm-cm08-time-energy: physical-result
  def-cm08-symmetry-of-the-mechanical-lagrangian: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the conservation statements of the pair on a two-label pair-potential model: for a potential depending on the labels through a C^2 function of the squared separation, the pair force is antisymmetric and central; the translation condition of the momentum theorem and the rotation condition of the angular-momentum theorem hold identically for every field direction and axis; the momentum, angular-momentum, boost and energy charges are therefore conserved along every motion of this global potential model; and an explicit rigid-rotation motion for the attractive Hooke-type potential psi(s)=c0+kappa s is verified together with its charges and a numerical instance. Here c0 has energy units and kappa has energy-per-length-squared units. All values are model values of the declared idealization; the example reports no measurement and asserts no property of any physical pair interaction."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1, printed pages 24-26 (PDF pages 30-32): the closed system of particles with pair potential V(|r_i - r_j|) has translation and rotation symmetries, giving total linear and angular momentum conservation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.3, printed pages 12-14 (PDF pages 15-17): the centre-of-mass momentum for potentials independent of the centre-of-mass coordinate, and rotational invariance about a symmetry axis with the conserved n . sum_i r_i x m_i v_i"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.4, chapter pages 10-11 (PDF pages 28-29): angular momentum conservation in the central-force example of the cyclic-coordinate mechanism"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Declare a two-label model of the force branch
[[post-cm02-force-superposition]] with $N=2$, masses $m_{1},m_{2}>0$, total
mass $M:=m_{1}+m_{2}$ and reduced mass $\mu:=m_{1}m_{2}/M$, time window
$I_{0}=\mathbb R$, configuration domain
$Q=\{(x_{1},x_{2})\in(\mathbb R^{3})^{2}:x_{1}\ne x_{2}\}$ (open), and let
$\psi:(0,\infty)\to\mathbb R$ be of class $C^{2}$; its argument is the
squared separation of dimension $\ell^{2}$, and its values have energy
dimension. Adopt the potential

$$U(x_{1},x_{2}):=\psi\bigl(s(x)\bigr),\qquad s(x):=\lvert x_{1}-x_{2}\rvert^{2},$$

of dimension $\mu\ell^{2}\tau^{-2}$, so that the model is a global potential
model $d\equiv0$ of [[def-cm03-potential-and-mechanical-energy]]. Verify:

For the translation family use a dimensionless direction and a length-valued
parameter; for rotations use a dimensionless generator and a parameter in
radians; for time translations use a parameter in seconds; for boosts use a
dimensionless direction and a velocity-valued parameter. In the explicit
potential below, $c_{0}$ has energy units
$\mathrm{kg\,m^{2}\,s^{-2}}$ and $\kappa$ has units
$\mathrm{kg\,s^{-2}}$ (energy per squared length).

1. **gradients and pair reading.** For every $x\in Q$,

$$\nabla_{x_{1}}U(x)=2\psi'\bigl(s(x)\bigr)\,(x_{1}-x_{2}),\qquad \nabla_{x_{2}}U(x)=-2\psi'\bigl(s(x)\bigr)\,(x_{1}-x_{2});$$

   so the model invokes the external-plus-pair presentation of
   [[post-cm02-interactions]] with $F_{i}^{\mathrm{ext}}=0$ and a single pair
   force $F_{12}=-F_{21}=-2\psi'(s)(x_{1}-x_{2})$ that is antisymmetric and
   central.
2. **translation.** $\sum_{i}\nabla_{x_{i}}U=0$ identically, so the
   differential condition of [[pthm-cm08-translation]] holds for every
   $a\in\mathbb R^{3}$; consequently $P$ and the boost charge
   $a\cdot(tP-M X(t))$ of [[pthm-cm08-boost-boundary]] are constant along
   every motion and the centre of mass moves uniformly.
3. **rotation.** For every $a\in\mathbb R^{3}$,
   $\sum_{i}\langle a\times x_{i},\nabla_{x_{i}}U\rangle=0$ identically, so the
   condition of [[pthm-cm08-rotation]] holds for every axis; consequently the
   total angular momentum $J=\sum_{i}x_{i}\times m_{i}x_{i}'$ is constant
   along every motion.
4. **energy.** $U$ has no explicit time dependence, so the mechanical energy
   $E=K+U$ is constant along every motion by [[pthm-cm08-time-energy]].
5. **explicit rigid-rotation motion (Hooke-type pair).** Specialise to
   $\psi(s)=c_{0}+\kappa s$ with constants $c_{0}\in\mathbb R$ and
   $\kappa>0$, and put $\Omega:=\sqrt{2\kappa/\mu}$, $X_{0}\in\mathbb R^{3}$,
   $e(t):=(\cos\Omega t,\sin\Omega t,0)$, $r_{1}:=(\mu/m_{1})\rho$ and
   $r_{2}:=-(\mu/m_{2})\rho$ for a constant $\rho>0$; $X_{0}$ and $\rho$
   have length dimension and $\Omega$ has dimension $\tau^{-1}$. Then
   $x_{i}(t):=X_{0}+r_{i}e(t)$ defines a motion of the model on $\mathbb R$, and
   along it $P\equiv0$, $J=\Omega\mu\rho^{2}(0,0,1)$ and $E=c_{0}+2\kappa\rho^{2}$ are constant.
6. **numerical instance.** For $m_{1}=m_{2}=1\,\mathrm{kg}$, $\kappa=1\,\mathrm{kg}\,\mathrm s^{-2}$,
   $\rho=1\,\mathrm m$, $c_{0}=0\,\mathrm{J}$, $X_{0}=0$: $\mu=\tfrac12$, $\Omega=2\,\mathrm s^{-1}$,
   $r_{1}=\tfrac12\,\mathrm m$, $r_{2}=-\tfrac12\,\mathrm m$ and at $t=0$ one
   has $x_{1}=(\tfrac12,0,0)$, $x_{2}=(-\tfrac12,0,0)$,
   $x_{1}'=(0,1,0)$, $x_{2}'=(0,-1,0)$ in the stated units, $P=0$,
   $J=(0,0,1)\,\mathrm{kg}\,\mathrm m^{2}\,\mathrm s^{-1}$ and
   $E=2\,\mathrm J$; also $\nabla_{x_{1}}U(0)=2\kappa(x_{1}-x_{2})=(2,0,0)$
   in newtons and $\nabla_{x_{2}}U(0)=(-2,0,0)$.

All values are model values of the declared idealization; no measurement is
reported and no property of a physical pair interaction is asserted.

## Facts & Assumptions

**Given:** The two-label model, the pair potential $U=\psi\circ s$, the specialization $\psi=c_{0}+\kappa s$, the rigid-rotation data and the numerical instance.

[F1] Model data and potential branch ([[post-cm02-force-superposition]], [[post-cm02-interactions]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm01-configuration]]): $Q$ is open in $(\mathbb R^{3})^{2}$, $U$ is $C^{2}$ with $F_{i}=-\nabla_{x_{i}}U$ and $d\equiv0$; the external-plus-pair presentation with $F_{12}=F_{1}=-\nabla_{x_{1}}U$ and $F_{21}=F_{2}$ is available, and antisymmetry means $F_{21}=-F_{12}$.

[F2] Momentum, centre of mass and angular momentum ([[def-cm03-centre-of-mass-and-momenta]]): $M=m_{1}+m_{2}$ is the scalar total mass, $X(t)=M^{-1}(m_{1}x_{1}(t)+m_{2}x_{2}(t))$ is the centre-of-mass curve, $P=\sum_{i}m_{i}x_{i}'$, $J=\sum_{i}x_{i}\times m_{i}x_{i}'$, and a motion satisfies $m_{i}x_{i}''=F_{i}$ ([[def-cm02-newtonian-flow]]).

[F3] The conservation statements ([[pthm-cm08-translation]], [[pthm-cm08-rotation]], [[pthm-cm08-boost-boundary]], [[pthm-cm08-time-energy]], [[def-cm08-symmetry-of-the-mechanical-lagrangian]]): under the differential conditions, $a\cdot P$ and $a\cdot J$ are constant along every motion of the global potential branch for each $a$, the boost charge is constant under the translation condition, and the mechanical energy is constant when $\partial_{t}U\equiv0$ and $d\equiv0$; for the boost family its parameter has velocity units and its charge has dimension $\mu\ell$.

[F4] Calculus of the potential ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): the gradient of $x\mapsto\lvert x_{1}-x_{2}\rvert^{2}$ in the first block is $2(x_{1}-x_{2})$ and in the second block $-2(x_{1}-x_{2})$, and the chain rule gives the displayed gradients of $U=\psi\circ s$.

[F5] Cross-product algebra ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]): bilinearity, alternation, orthogonality of $u\times v$ to both factors, and $\langle a,u\times w\rangle=\langle a\times u,w\rangle$.

[F6] Trigonometry and the rigid-rotation calculations ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-cm01-units]]): $e$ is $C^{\infty}$ with time derivative $e'(t)=\Omega(-\sin\Omega t,\cos\Omega t,0)$, so $e(t)\times e'(t)=\Omega (0,0,1)$; also $\lvert e(t)\rvert=1$, $e''(t)=-\Omega^{2}e(t)$, and the reduced-mass identities are $r_{1}-r_{2}=\rho$, $m_{1}r_{1}+m_{2}r_{2}=0$, $m_{1}r_{1}^{2}+m_{2}r_{2}^{2}=\mu\rho^{2}$, and $\Omega^{2}\mu=2\kappa$.

## Verification

**Proof technique:** direct; compute the gradients of the pair potential from the chain rule, verify the invariance sums by cross-product algebra, check the rigid-rotation curve against the equations of motion and evaluate all charges symbolically and numerically.

1.1 Clause 1: writing $s(x)=\lvert x_{1}-x_{2}\rvert^{2}=(x_{1}-x_{2})\cdot(x_{1}-x_{2})$, the chain rule gives $\nabla_{x_{1}}s=2(x_{1}-x_{2})$ and $\nabla_{x_{2}}s=-2(x_{1}-x_{2})$; composing with $\psi'$ gives the displayed gradients, and $F_{12}:=-\nabla_{x_{1}}U=-2\psi'(s)(x_{1}-x_{2})=-F_{21}$ is antisymmetric and parallel to $x_{1}-x_{2}$ because $x_{1}\ne x_{2}$ on $Q$. [F1, F4, algebra]

1.2 Clause 4: $\partial_{t}U\equiv0$ because $U$ does not depend on $t$, and $d\equiv0$; hence the energy clause of [F3] gives that $E=K+U$ is constant along every motion. [F1, F3]

1.3 Clause 5, the rigid-rotation curve is a motion: with $x_{i}(t)=X_{0}+r_{i}e(t)$ one has $x_{1}-x_{2}=(r_{1}-r_{2})e(t)=\rho\,e(t)$, so $s=\rho^{2}$ is constant and, for $\psi(s)=c_{0}+\kappa s$, $F_{1}=-2\psi'(\rho^{2})\rho\,e(t)=-2\kappa\rho\,e(t)$ and $F_{2}=2\kappa\rho\,e(t)$. Also $x_{i}''=-\Omega^{2}r_{i}e(t)$. For label 1, $m_{1}x_{1}''=-m_{1}\Omega^{2}(\mu/m_{1})\rho e=-\mu\Omega^{2}\rho e=-2\kappa\rho e=F_{1}$; for label 2, $m_{2}x_{2}''=m_{2}\Omega^{2}(\mu/m_{2})\rho e=\mu\Omega^{2}\rho e=2\kappa\rho e=F_{2}$. Both equations of motion hold on $\mathbb R$ because $\Omega^{2}\mu=2\kappa$. [F1, F2, F4, F6, algebra]

2.1 Clause 2: by step 1.1, $\sum_{i}\nabla_{x_{i}}U=2\psi'(s)(x_{1}-x_{2})-2\psi'(s)(x_{1}-x_{2})=0$ for every $x\in Q$, which is the translation-invariance condition of [F3] for every $a$; hence clause 5 of [[pthm-cm08-translation]] gives that $P$ is constant along every motion, clause 2 of [[pthm-cm08-boost-boundary]] gives the same for $a\cdot(tP-M X(t))$, and clause 3 of that item gives the uniform motion of the centre of mass. [F1, F3, step 1.1, algebra]

2.2 Clause 3: for every $a$ and $x$, using [F5] and step 1.1, $$\sum_{i}\bigl\langle a\times x_{i},\nabla_{x_{i}}U\bigr\rangle=2\psi'(s)\bigl(\langle a\times x_{1},x_{1}-x_{2}\rangle-\langle a\times x_{2},x_{1}-x_{2}\rangle\bigr)=2\psi'(s)\bigl\langle a\times(x_{1}-x_{2}),x_{1}-x_{2}\bigr\rangle=0,$$ because the cross product is orthogonal to its second factor by [F5]; this is the condition of [[pthm-cm08-rotation]] for every axis $a$, so $J$ is constant along every motion. [F3, F5, step 1.1, algebra]

2.3 Clause 5, the charges: along the motion of step 1.3, $x_{i}'=r_{i}e'$ and therefore $P=\sum_{i}m_{i}r_{i}e'=e'\sum_{i}m_{i}r_{i}=0$ because $m_{1}r_{1}+m_{2}r_{2}=0$; the angular momentum is $$J=\sum_{i}m_{i}\bigl(X_{0}+r_{i}e\bigr)\times\bigl(r_{i}e'\bigr)=X_{0}\times\Bigl(e'\sum_{i}m_{i}r_{i}\Bigr)+\Bigl(\sum_{i}m_{i}r_{i}^{2}\Bigr)(e\times e')=\Omega\mu\rho^{2}(0,0,1),$$ constant because $e\times e'=\Omega (0,0,1)$; the energy is $$E=\tfrac12\Bigl(\sum_{i}m_{i}r_{i}^{2}\Bigr)\Omega^{2}+c_{0}+\kappa\rho^{2}=\tfrac12\mu\rho^{2}\Omega^{2}+c_{0}+\kappa\rho^{2}=c_{0}+2\kappa\rho^{2},$$ because $\Omega^{2}\mu=2\kappa$ by step 1.3; and the boost charge is $a\cdot(tP-M X(t))=-M a\cdot X_{0}$, constant, with dimension $\mu\ell$. [F2, F5, F6, step 1.3, algebra]

3.1 Clause 6, numerical instance: with $m_{1}=m_{2}=1\,\mathrm{kg}$, $\kappa=1\,\mathrm{kg}\,\mathrm{s}^{-2}$, $\rho=1\,\mathrm{m}$ and $c_{0}=0\,\mathrm{J}$ one has $\mu=\tfrac12\,\mathrm{kg}$ and $\Omega=\sqrt{2\kappa/\mu}=\sqrt4=2\,\mathrm{s}^{-1}$, $r_{1}=\tfrac12\,\mathrm{m}$, $r_{2}=-\tfrac12\,\mathrm{m}$, so $x_{1}=(\tfrac12,0,0)\,\mathrm{m}$, $x_{2}=(-\tfrac12,0,0)\,\mathrm{m}$ and $x_{1}'=(0,\tfrac12\Omega,0)=(0,1,0)\,\mathrm{m}\,\mathrm{s}^{-1}$, $x_{2}'=(0,-1,0)\,\mathrm{m}\,\mathrm{s}^{-1}$ at $t=0$; then $P=(0,0,0)$, $J=\Omega\mu\rho^{2}(0,0,1)=(0,0,1)\,\mathrm{kg}\,\mathrm{m}^{2}\,\mathrm{s}^{-1}$ and $E=c_{0}+2\kappa\rho^{2}=2\,\mathrm{J}$, while $\nabla_{x_{1}}U(0)=2\kappa(x_{1}-x_{2})=(2,0,0)\,\mathrm{N}$ and $\nabla_{x_{2}}U(0)=(-2,0,0)\,\mathrm{N}$, so $F_{1}=(-2,0,0)\,\mathrm{N}$ and $F_{2}=(2,0,0)\,\mathrm{N}$ as required. [step 1.1, step 2.3, F6, algebra]

4.1 Clauses 1, 2, 3 and 4 are steps 1.1, 2.1, 2.2 and 1.2, and clause 5 with its numerical instance is steps 1.3, 2.3 and 3.1; the example exhibits a pair-potential model on which all four charges of this page are available and verifies them on an explicit motion; it reports no measurement. [step 1.1, step 1.2, step 1.3, step 2.3, step 3.1] ∎

## Remarks

- **Both routes agree here.** For this model the pair presentation is antisymmetric and central, so the balance theorems [[pthm-cm03-momentum-balance]] and [[pthm-cm03-angular-momentum-balance]] also apply and yield the same conservation statements under their own hypotheses. The Noether route verified here uses the potential presentation; the two are independent deductions, and the example checks the hypotheses of both at once.

- **Representative of the potential.** The additive constant $c_{0}$ enters the energy statement but not the forces; the numerical instance fixes $c_{0}=0$ as a declared normalization, in the sense of clause (c) of [[def-cm03-potential-and-mechanical-energy]]. No physical meaning is attached to the value $E=0$.
