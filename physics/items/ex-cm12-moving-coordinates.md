---
id: ex-cm12-moving-coordinates
kind: example
title: "Moving coordinates: the substituted Hamiltonian of a spring on a uniformly moving support, its conservation and the non-conservation of the mechanical energy"
status: draft
origin: session
domain: physics
dependency_level: 20
deps: [def-cm12-hyperregularity, def-cm12-hamiltonian, def-cm12-cotangent-momentum, pthm-cm12-energy-time, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, pthm-cm07-coordinate-covariance-of-the-equations, pthm-cm07-euler-lagrange-equations, def-cm03-potential-and-mechanical-energy, def-cm03-centre-of-mass-and-momenta, pthm-cm03-energy-balance, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-configuration, def-cm01-units, prop-cm-mechanical-chart-lagrangian-is-hyperregular, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-invertible-euclidean-linear-map, def-linear-map, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-derivative, def-interval, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, def-cm-legendre-map-in-a-time-dependent-chart]
dependency_roles:
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  pthm-cm12-energy-time: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  pthm-cm07-coordinate-covariance-of-the-equations: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
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
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the Hamiltonian description in a time-dependent chart: a one-label model with a spring whose equilibrium point is attached to a support moving uniformly at a prescribed velocity, described in the co-moving coordinate; the substituted Lagrangian has a velocity-linear term, the substituted Hamiltonian is conserved, it differs from the model's mechanical energy by the product of the support velocity and the momentum, and the mechanical energy changes at the rate of the explicit time dependence of the potential. All quantities are model values of the declared idealization; no measurement is reported."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 14-15 (PDF pages 17-18): the mass on a spring attached to a cart moving at constant speed, with p' = m xdot' + m v_0 = p, H' = (p' - m v_0)^2/(2m) + k x'^2/2 - m v_0^2/2, H' conserved and H' not equal to the energy"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.2 and Section 4.1, printed pages 13-16 and 80-87 (PDF pages 19-22 and 86-93): changing coordinate systems for Lagrange's equations and the Hamiltonian formulation of particle mechanics"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2 and 10.1, chapter pages 1-4 and 1-3: generalized coordinates for a particle and the Hamiltonian of a one-degree-of-freedom system"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Example

Declare the one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and potential
$U(t,x):=\tfrac12k\bigl(x_{1}-v_{0}t-c\bigr)^{2}$ with constants $k>0$,
$v_{0}\in\mathbb R$ and $c\in\mathbb R$, and no residual forces: the label is
attached by a spring of stiffness $k$ to a support whose position is the
prescribed function $v_{0}t+c$, so the force map is
$F=\bigl(-k(x_{1}-v_{0}t-c),0,0\bigr)$ and the mechanical Lagrangian is
$L=K-U$ with $K(v)=\tfrac12m\lvert v\rvert_{2}^{2}$
([[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]). Introduce the **co-moving
coordinates**
$X(t,y):=\bigl(y_{1}+v_{0}t+c,\ y_{2},\ y_{3}\bigr)$, a time-dependent
coordinate map with $X_{q}=I_{3}$, and the substituted Lagrangian
$L'(t,y,w):=L\bigl(t,X(t,y),\,X_{t}(t,y)+X_{q}(t,y)w\bigr)$. This $L'$ is a generic fibre-full time-dependent Lagrangian chart of [[def-cm-legendre-map-in-a-time-dependent-chart]]; it need not be a $K-U$ presentation in a static coordinate map. The model units are $[k]=\mu\tau^{-2}$ (newtons per metre), $[v_0]=\ell\tau^{-1}$ (metres per second), $[c]=[y_0]=\ell$ (metres), $[q]=\mu\ell\tau^{-1}$ (momentum, kilograms metres per second), and $[\omega]=\tau^{-1}$ (radians per second with dimensionless radians). Here $y_0$ and $q$ are initial co-moving position and first momentum, respectively. Then:
 
1. $L'(t,y,w)=\tfrac12m\bigl(w_{1}+v_{0}\bigr)^{2}+\tfrac12m\bigl(w_{2}^{2}+w_{3}^{2}\bigr)-\tfrac12ky_{1}^{2}$,
   its fibre derivative is
   $$p'=L'_{w}(t,y,w)=\bigl(m(w_{1}+v_{0}),\ mw_{2},\ mw_{3}\bigr),$$
   and the coordinate change reproduces the model's equation: a $C^{2}$ curve
   $y$ satisfies the Euler-Lagrange equation of $L'$ exactly when
   $x(t)=X(t,y(t))$ satisfies $m\ddot x_{1}=-k(x_{1}-v_{0}t-c)$, $m\ddot x_{2}=m\ddot x_{3}=0$
   ([[pthm-cm07-coordinate-covariance-of-the-equations]]).
2. $L'$ is hyperregular on its chart with inverse branch
   $w=\bigl(p'_{1}/m-v_{0},\ p'_{2}/m,\ p'_{3}/m\bigr)$ and Hamiltonian
   $$H'(t,y,p')=\frac{p'_{1}{}^{2}}{2m}-v_{0}p'_{1}+\frac{p'_{2}{}^{2}}{2m}+\frac{p'_{3}{}^{2}}{2m}+\frac{k}{2}y_{1}^{2} =\frac{\bigl(p'_{1}-mv_{0}\bigr)^{2}}{2m}+\frac{k}{2}y_{1}^{2}+\frac{p'_{2}{}^{2}+p'_{3}{}^{2}}{2m}-\frac{mv_{0}^{2}}{2},$$
   so that on the first coordinate the momentum $p'_{1}$ equals the inertial
   momentum $p_{1}=m\dot x_{1}$ of [[def-cm12-cotangent-momentum]] while the
   branch velocity is shifted,
   $\dot y_{1}=p'_{1}/m-v_{0}$.
3. Hamilton's equations of $H'$ are
   $\dot y_{1}=p'_{1}/m-v_{0}$, $\dot p'_{1}=-ky_{1}$, $\dot y_{i}=p'_{i}/m$,
   $\dot p'_{i}=0$ for $i=2,3$; they imply $m\ddot y_{1}=-ky_{1}$, equivalently
   $m\ddot x_{1}=-k(x_{1}-v_{0}t-c)$, so the co-moving description is
   equivalent to the model's motion and the induced curve $x$ is a motion
   ([[def-cm02-newtonian-flow]]).
4. along the solutions the Hamiltonian $H'$ is conserved — it has no explicit
   time dependence in the co-moving chart — while the model's mechanical
   energy $E=K+U$ is **not**: on the first axis
   $$H'=E-v_{0}p'_{1},\qquad E'(t)=-kv_{0}y_{1}(t),$$
   so a solution with $v_{0}y_{1}(t)\neq0$ has $H'$ constant and $E$ strictly
   monotone there; with data $y_{1}(0)=y_{0}$, $p'_{1}(0)=q$ and
   $\omega:=\sqrt{k/m}$ the explicit solution is
   $$y_{1}(t)=y_{0}\cos\omega t+\frac{q-mv_{0}}{m\omega}\sin\omega t,\qquad p'_{1}(t)=-m\omega y_{0}\sin\omega t+\bigl(q-mv_{0}\bigr)\cos\omega t+mv_{0}.$$
 
All quantities are model values of the declared idealization; the moving
support is a prescribed external mechanism, and no measurement is reported.

## Facts & Assumptions

**Given:** The one-label model with the moving-support spring potential, the co-moving coordinate map $X$, the substituted Lagrangian $L'$ with its momentum $p'$ and Hamiltonian $H'$, and the initial data $y_{0},q$ of clause 4.
 
[F1] Model and Lagrangian data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm02-newtonian-flow]]): the model has $L=K-U$ with $K(v)=\tfrac12m\lvert v\rvert_{2}^{2}$, $U$ of class $C^{2}$, no residual forces, and motions solving $m\ddot x_{i}=F_{i}(t,x,\dot x)$; dimensions are read by [[def-cm01-units]].
 
[F2] Rheonomic coordinate covariance ([[pthm-cm07-coordinate-covariance-of-the-equations]], [[pthm-cm07-euler-lagrange-equations]]): for a $C^{3}$ coordinate map $X(t,q)$ with invertible $X_{q}$ and substituted Lagrangian $\widetilde L(t,q,v)=L(t,X,X_{t}+X_{q}v)$, one has $E_{\widetilde L}(q)=X_{q}^{\mathsf T}E_{L}(x)$ along induced curves, so the substituted Euler-Lagrange equation is equivalent to the model's potential-part equation.
 
[F3] Hyperregularity and branch Hamiltonian ([[prop-cm-mechanical-chart-lagrangian-is-hyperregular]], [[def-cm-legendre-map-in-a-time-dependent-chart]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-invertible-euclidean-linear-map]], [[def-linear-map]], [[def-matrix-product-and-identity-matrix]]): a fibre-full $C^{2}$ chart of the form $\tfrac12v^{\mathsf T}Gv+A\cdot v-V$ with $G$ symmetric positive definite has fibre derivative $Gv+A$, is hyperregular with inverse $v=G^{-1}(p-A)$, and has branch Hamiltonian $\tfrac12(p-A)\cdot G^{-1}(p-A)+V$.
 
[F4] Energy data ([[pthm-cm12-energy-time]], [[pthm-cm03-energy-balance]], [[def-cm03-centre-of-mass-and-momenta]], [[def-cm03-potential-and-mechanical-energy]]): in the inertial Cartesian chart the model's mechanical energy is $K+U$ along a curve; along a motion it satisfies $E'(t)=\partial_{t}U(t,x(t))+\sum_{i}\langle\mathfrak d_{i},x_{i}'\rangle$, here $\partial_{t}U=-kv_{0}(x_{1}-v_{0}t-c)$.
 
[F5] Calculus of the displayed data ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-derivative]], [[def-interval]], [[def-euclidean-inner-product]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]]): the standard derivative rules for sums, products, composites and the trigonometric functions apply to the displayed curves.



## Verification

**Proof technique:** direct; substitute the co-moving coordinate map, identify the resulting chart as a mechanical chart Lagrangian with a linear velocity term, and evaluate its branch, Hamilton equations, conservation identity and explicit solution.

1.1 The map $X(t,y)=(y_{1}+v_{0}t+c,y_{2},y_{3})$ is of class $C^{3}$ with $X_{q}=I_{3}$ invertible everywhere, so [F2] applies; computing the substitution gives $L'(t,y,w)=\tfrac12m(w_{1}+v_{0})^{2}+\tfrac12m(w_{2}^{2}+w_{3}^{2})-\tfrac12ky_{1}^{2}$ and, by [F2], the substituted Euler-Lagrange equation is equivalent to $m\ddot x_{1}=-k(x_{1}-v_{0}t-c)$, $m\ddot x_{2}=m\ddot x_{3}=0$; its fibre derivative is $p'=(m(w_{1}+v_{0}),mw_{2},mw_{3})$, which is clause 1. [F1, F2, F5, algebra]

2.1 The first-coordinate block of $L'$ has the form $\tfrac12mw_{1}^{2}+mv_{0}w_{1}-V(y_{1})$ with $V=\tfrac12ky_{1}^{2}-\tfrac12mv_{0}^{2}$, and the remaining blocks have the same form with $G=m$, $A=0$, $V=0$; by [F3] the chart is hyperregular with $w_{1}=p'_{1}/m-v_{0}$, $w_{i}=p'_{i}/m$, and branch Hamiltonian $H'=p'_{1}{}^{2}/(2m)-v_{0}p'_{1}+\tfrac12ky_{1}^{2}+(p'_{2}{}^{2}+p'_{3}{}^{2})/(2m)$, which is clause 2 in its two displayed forms. [F3, step 1.1, algebra]

3.1 Differentiating the first form of $H'$ in step 2.1 gives $H'_{p'_{1}}=p'_{1}/m-v_{0}$, $H'_{y_{1}}=ky_{1}$ and, for $i=2,3$, $H'_{p'_{i}}=p'_{i}/m$, $H'_{y_{i}}=0$; hence Hamilton's equations are $\dot y_{1}=p'_{1}/m-v_{0}$, $\dot p'_{1}=-ky_{1}$ and $\dot y_{i}=p'_{i}/m$, $\dot p'_{i}=0$ for $i=2,3$; differentiating the first and substituting the second gives $m\ddot y_{1}=-ky_{1}$, and since $\dot x_{1}=\dot y_{1}+v_{0}=p'_{1}/m$ and $x_{1}-v_{0}t-c=y_{1}$, this is exactly the model's equation of step 1.1, so the induced curve is a motion. [F2, F3, F5, step 1.1, step 2.1, algebra]

4.1 Along a motion $x$ one has $E=K+U=\tfrac12m\lvert\dot x\rvert^2+\tfrac12ky_1^2=\lvert p'\rvert^2/(2m)+\tfrac12ky_1^2$ and therefore $H'=E-v_{0}p'_{1}$; from [F4] applied to the present potential, $\partial_{t}U(t,x(t))=-kv_{0}(x_{1}(t)-v_{0}t-c)=-kv_{0}y_{1}(t)$, and $d\equiv0$, so $E'(t)=-kv_{0}y_{1}(t)$; the displayed identity is clause 4's first formula. [F4, step 2.1, step 3.1, algebra]

4.2 The displayed curves satisfy $y_{1}(0)=y_{0}$ and $p'_{1}(0)=q$, and by [F5] their derivatives are $\dot y_{1}=-y_{0}\omega\sin\omega t+((q-mv_{0})/m)\cos\omega t$ and $\dot p'_{1}=-m\omega^{2}y_{0}\cos\omega t-\omega(q-mv_{0})\sin\omega t=-ky_{1}(t)$, using $\omega^{2}=k/m$; moreover $\dot y_{1}=p'_{1}/m-v_{0}$ and the other coordinates are free, so the displayed pair solves the Hamilton system of step 3.1 with the prescribed data. [F5, step 3.1, algebra]

5.1 $H'$ has no explicit dependence on $t$ in the co-moving chart, and along solutions of step 3.1 its total derivative is $H'_{y_{1}}\dot y_{1}+H'_{p'_{1}}\dot p'_{1}=(ky_{1})(p'_{1}/m-v_{0})+(p'_{1}/m-v_{0})(-ky_{1})=0$; the remaining momentum terms have derivatives $(p'_i/m)\dot p'_i=0$ for $i=2,3$ by step 3.1; hence $H'$ is conserved while $E'=-kv_{0}y_{1}$ need not vanish. [step 3.1, step 4.1, algebra]

6.1 Conclusion: clauses 1-4 are verified on the declared data; the co-moving chart is a time-dependent chart of the same model, its Hamiltonian is conserved and differs from the mechanical energy by $v_{0}p'_{1}$, and the energy balance of the model is the reported non-conservation. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 4.2] ∎

## Remarks

- **Chart change, not a constraint.** The co-moving coordinates are a
  time-dependent coordinate map of the same configuration domain, covered by
  the covariance theorem for rheonomic coordinate changes; they are not a
  generalized-coordinate map [[def-cm07-generalized-coordinates-and-forces]]
  of the constrained-configuration type, and no ideal reaction is involved.
  The support's motion is prescribed external data of the potential, so its
  energy exchange is not modeled here.
 
- **Two conserved quantities, one energy.** The co-moving Hamiltonian $H'$ is
  conserved because the substituted Lagrangian has no explicit time
  dependence in the moving chart, while the mechanical energy changes at the
  rate of the explicit time dependence of the inertial potential. The two
  quantities coincide only in the inertial chart, as [[pthm-cm12-energy-time]]
  states; the identity $H'=E-v_{0}p'_{1}$ here is the model instance of the
  momentum shift familiar from the moving-cart computation of Stewart's
  Section 1.2.
