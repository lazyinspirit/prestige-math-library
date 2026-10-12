---
id: ex-cm12-shifted-momentum
kind: example
title: "Shifted momentum from a total-derivative modification: $p' = p + F_x$, $H' = H - F_t$ and unchanged motion on explicit data"
status: draft
origin: session
domain: physics
dependency_level: 19
deps: [def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm12-hamilton-equivalence, def-cm07-action-and-mechanical-lagrangian, pthm-cm07-boundary-terms-and-gauge, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, pthm-cm02-ivp, def-cm-legendre-map-in-a-time-dependent-chart, def-ck-euclidean-maps-and-diffeomorphisms, def-linear-map, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-boundary-terms-and-gauge: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the momentum shift produced by a total-derivative modification of a declared potential presentation: for a one-label model with mass m and a C^2 gauge function F(t,x) = alpha t x_1, the modified chart Lagrangian has fibre derivative p' = p + alpha t e_1, shifted Hamiltonian H' = H - alpha x_1 read at the shifted momentum, and Hamilton system equivalent to the original one; an explicit free-particle computation shows H' differs from the mechanical energy while the motion is unchanged. All quantities are model values of the declared idealization; no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 2.5.7 and 4.1.3, printed pages 37 and 84-85 (PDF pages 43 and 90-91): adding a total derivative leaves the equations of motion unchanged, and the electromagnetic case in which the canonical momentum p = m r-dot + eA differs from the mechanical momentum"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 14-15 (PDF pages 17-18): the moving-cart example in which p' = m xdot' + m v_0 = p and the new Hamiltonian differs from the energy but is conserved"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2 and 9.3: the Legendre transform with a velocity-linear term and equivalent Lagrangians differing by a total time derivative"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Example

Declare the one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$, a $C^{2}$ potential
$U:\mathbb R\times Q\to\mathbb R$ and no residual forces; write
$L(t,x,v)=\tfrac12m\lvert v\rvert_{2}^{2}-U(t,x)$ for its mechanical
Lagrangian ([[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]). Fix a real parameter $\alpha$
and the $C^{2}$ function $F(t,x):=\alpha\,t\,x_{1}$, and define

$$L'(t,x,v):=L(t,x,v)+F_{t}(t,x)+F_{x}(t,x)\cdot v=L(t,x,v)+\alpha x_{1}+\alpha t\,v_{1}.$$

Then:

1. $L'$ is a fibre-full $C^{2}$ time-dependent Lagrangian chart with
   velocity gradient $L'_{v}(t,x,v)=mv+\alpha t\,e_{1}$, $e_{1}=(1,0,0)$; the
   fibre map $v\mapsto L'_{v}(t,x,v)$ is a $C^{2}$ bijection of $\mathbb R^{3}$
   onto itself with inverse $v=(p'-\alpha t\,e_{1})/m$, so $L'$ is
   hyperregular on its chart ([[def-cm12-hyperregularity]]) and its fibre
   derivative is the **shifted momentum**
   $$p'=p+\alpha t\,e_{1},\qquad p=mv,$$
   which differs from the mechanical momentum $mv$ whenever $\alpha t\neq0$.
2. the Hamiltonian of the branch of $L'$ is
   $$H'(t,x,p')=\frac{\lvert p'-\alpha t\,e_{1}\rvert_{2}^{2}}{2m}+U(t,x)-\alpha x_{1}=H\bigl(t,x,p'-\alpha t\,e_{1}\bigr)-\alpha x_{1},$$
   where $H$ is the Hamiltonian of the presentation
   ([[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]]);
3. the Hamilton systems of $H$ and $H'$ are equivalent under the shift
   $p'=p+\alpha t\,e_{1}$: $\dot x=H'_{p'}=(p'-\alpha t\,e_{1})/m$ and
   $\dot p'=-H'_{x}=-\nabla_{x}U+\alpha e_{1}$ hold exactly when
   $\dot x=p/m$ and $\dot p=-\nabla_{x}U$ hold, so both systems have the same
   $x$-curves, namely the motions of the model
   ([[pthm-cm12-hamilton-equivalence]],
   [[pthm-cm07-boundary-terms-and-gauge]]); the Euler-Lagrange expressions
   coincide, $E_{L'}(x)=E_{L}(x)$, and the actions differ by the endpoint
   value $\alpha\bigl(b\,x_{1}(b)-a\,x_{1}(a)\bigr)$;
4. on the explicit free data $m=1$, $U\equiv0$, $\alpha=1$,
   $x(0)=0$, $v(0)=(q,0,0)$ with $q>0$, the curves
   $x(t)=(qt,0,0)$ and $p'(t)=(q+t,0,0)$ solve the shifted Hamilton system,
   and along them
   $$H'\bigl(t,x(t),p'(t)\bigr)=\tfrac12q^{2}-qt,\qquad K(t)+U\bigl(t,x(t)\bigr)=\tfrac12q^{2},$$
   so $H'$ differs from the mechanical energy for $t\neq0$ although the
   motion of the model is unchanged.

All quantities are model values of the declared idealization; no measurement
is reported.

## Facts & Assumptions

**Given:** The one-label model with its potential, the mechanical Lagrangian $L$, the gauge function $F(t,x)=\alpha tx_{1}$, the modified chart Lagrangian $L'$, and the momentum curves $p=mv$, $p'=L'_{v}$.

[F1] Model and Lagrangian data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]]): $L=K-U$ with $K(v)=\tfrac12v\cdot\mathsf Mv$, $\mathsf Mv=mv$ for one label, $U$ of class $C^{2}$ and the standing regularity of the force branch; dimensions are read by [[def-cm01-units]].

[F2] Mechanical Legendre data ([[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]], [[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]]): $p=\mathsf Mv=mv$, the presentation is hyperregular with $v=p/m$ and $H(t,x,p)=\lvert p\rvert_{2}^{2}/(2m)+U(t,x)$; a fibre-full $C^{2}$ chart is hyperregular when its fibre velocity map is a bijection with a $C^{2}$ inverse, and the Hamiltonian of the branch is $p\cdot v-L$ on that branch ([[def-cm-legendre-map-in-a-time-dependent-chart]]).

[F3] Gauge behaviour ([[pthm-cm07-boundary-terms-and-gauge]]): for a $C^{2}$ function $F$ on a slab around a compact interval, the modified Lagrangian $L+F_{t}+F_{x}\cdot v$ is $C^{2}$, has the same Euler-Lagrange expression as $L$ on every admissible curve, and its action differs from that of $L$ by $F(b,x(b))-F(a,x(a))$; consequently the stationary curves and the model's equation of motion are unchanged.

[F4] Equivalence theorem ([[pthm-cm12-hamilton-equivalence]]): on the global potential branch the motions of the model are exactly the curves whose momentum pairs satisfy Hamilton's equations of the branch Hamiltonian.

[F5] Initial-value theory and calculus ([[def-cm02-newtonian-flow]], [[pthm-cm02-ivp]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-linear-map]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]]): differentiability classes are closed under the displayed algebra, linear and quadratic functions have their standard gradients, and every initial datum of the model has a unique maximal motion.



## Verification

**Proof technique:** direct; compute the modified velocity gradient and its inverse, evaluate the branch Hamiltonian, compare the two Hamilton systems under the momentum shift, and evaluate the free solution.

1.1 The function $F(t,x)=\alpha tx_{1}$ has $F_{t}=\alpha x_{1}$ and $F_{x}=\alpha t\,e_{1}$, so $L'=L+\alpha x_{1}+\alpha tv_{1}$ is $C^{2}$ by [F5]; its velocity gradient is $L'_{v}=mv+\alpha t\,e_{1}$, which for fixed $(t,x)$ is the affine bijection $v\mapsto mv+\alpha te_{1}$ of $\mathbb R^{3}$ with $C^{2}$ inverse $v=(p'-\alpha te_{1})/m$; by [F2] this is exactly hyperregularity of the fibre-full chart $L'$ and identifies the fibre derivative $p'=mv+\alpha te_{1}=p+\alpha te_{1}$ as the shifted momentum. [F1, F2, F5, algebra]

2.1 With $v=(p'-\alpha te_{1})/m$ one has $p'\cdot v-L'(t,x,v)=\tfrac12m\lvert v\rvert_{2}^{2}-U(t,x)-\alpha x_{1}=\lvert p'-\alpha te_{1}\rvert_{2}^{2}/(2m)+U(t,x)-\alpha x_{1}$, because the terms $\alpha tv_{1}$ of $L'$ and $p'\cdot v$ differ by $(\alpha te_{1})\cdot v$; hence $H'(t,x,p')=H(t,x,p'-\alpha te_{1})-\alpha x_{1}$, which is clause 2. [F1, F2, step 1.1, algebra]

3.1 From step 2.1 the partial derivatives are $H'_{p'}=(p'-\alpha te_{1})/m$ and $H'_{x}=-\nabla_{x}U+\alpha e_{1}$; substituting $p'=p+\alpha te_{1}$ gives $H'_{p'}=p/m$ and $H'_{x}=-\nabla_{x}U+\alpha e_{1}$, so the system $\dot x=H'_{p'}$, $\dot p'=-H'_{x}$ is equivalent to $\dot x=p/m$, $\dot p=-\nabla_{x}U+\alpha e_{1}-\alpha e_{1}=-\nabla_{x}U$, the Hamilton system of $H$; this is the equivalence of clause 3 and it exhibits the same $x$-curves. [F2, step 2.1, algebra]

4.1 By [F3] the Euler-Lagrange expression of $L'$ equals that of $L$ on every admissible curve and the actions differ by the displayed endpoint value; hence the stationary curves of $L'$ and the model's equation of motion are unchanged, and by [F4] both Hamilton systems of step 3.1 describe exactly the model's motions. [F3, F4, step 3.1]

4.2 On the free data of clause 4 the shifted system of step 3.1 reads $\dot x=p'/m-e_{1}\cdot t/m$ with $m=1$, $\alpha=1$ and $U\equiv0$, so $\dot x=p'-te_{1}$ and $\dot p'=e_{1}$; the curves $x(t)=(qt,0,0)$, $p'(t)=(q+t,0,0)$ satisfy $\dot x=(q,0,0)=p'-te_{1}$ and $\dot p'=(1,0,0)=e_{1}$, with $x(0)=0$ and $p'(0)=(q,0,0)$; along them $H'=\tfrac12(q+t-t)^{2}-qt=\tfrac12q^{2}-qt$ while $K+U=\tfrac12\lvert\dot x\rvert_{2}^{2}=\tfrac12q^{2}$. [F5, step 3.1, algebra]

5.1 Conclusion: clauses 1-4 are verified on the declared data; the shifted momentum and Hamiltonian describe the same model motion, and the explicit data show that the chart Hamiltonian need not be the mechanical energy once a velocity-linear term is present. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **The shift is exactly the gauge derivative.** The general pattern is
  $p'=p+F_{x}(t,x)$ and $H'(t,x,p')=H(t,x,p'-F_{x}(t,x))-F_{t}(t,x)$: the
  momentum is translated by the gradient of the added function and the
  Hamiltonian is corrected by its time derivative. The modified
  Lagrangian is hyperregular but is **not** the mechanical Lagrangian of the
  presentation, and $p'$ is not the momentum $\mathsf Mv$ of
  [[def-cm12-cotangent-momentum]]; it is the fibre derivative of the modified
  chart, which is why the Hamiltonian of the modified chart is not the
  mechanical energy.

- **Source check.** Tong's Section 2.5.7 records the invariance of the
  equations under addition of a total derivative, and his Section 4.1.3
  electromagnetic example exhibits a canonical momentum differing from the
  mechanical one by a gradient term; Stewart's Section 1.2 moving-cart
  computation exhibits the same pattern with a constant gradient and shows
  that the shifted Hamiltonian can be conserved while the mechanical energy
  is not. The computation above is the model instance of those statements;
  no electromagnetic interpretation of the parameter $\alpha$ is claimed.
