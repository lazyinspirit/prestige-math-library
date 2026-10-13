---
id: ex-cm02-constant-field-projectile
kind: example
title: "Projectile motion in the constant-field model: planar parabolic trajectory, flight time and level range for stated model data"
status: published
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, ex-cm02-uniform-field, post-cm02-drag, post-cm01-worldlines, def-cm01-velocity-acceleration, def-cm01-units, def-vector-valued-derivative-and-integral, def-derivative, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-double-angle-and-power-reduction-identities]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  ex-cm02-uniform-field: formulation-prerequisite
  post-cm02-drag: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-double-angle-and-power-reduction-identities: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked computation inside the constant-field model of [[ex-cm02-uniform-field]]: for a stated initial position, speed and launch angle and a declared constant field parameter, the trajectory is planar and parabolic, the return-to-launch-height time and the level range are computed from the model, and the motion is the unique maximal motion through the datum. The item asserts no measured value of any field strength or launch parameter, models no medium and no drag, and records that the constant-field description of a realistic field is an approximation."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 1-2 (PDF pages 4-5): the equation of motion with initial position and velocity data"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Tong, Dynamics and Relativity, Section 2.1, printed page 12 (PDF page 18): uniform gravitational field F=-mg, potential V=mgz and the quadratic solution; Section 2.3.2, printed page 24 (PDF page 30): the near-surface approximation for height z much smaller than planetary radius R"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter page 5 (PDF page 9): the gravity law as additional adopted model input"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Fix an inertial frame $(o,u,(b_1,b_2,b_3))$ and its adapted coordinates
as in [[def-cm01-velocity-acceleration]]. Write
$e_1=(1,0,0)$, $e_2=(0,1,0)$ and $e_3=(0,0,1)$ for the standard
coordinate basis of $\mathbb R^3$. Throughout, $x:\mathbb R\to\mathbb R^3$
is the coordinate position curve, with coordinate velocity $\dot x$ and
coordinate acceleration $\ddot x$; its associated worldline is
$\gamma(t)=o+tu+\sum_{j=1}^3x_j(t)b_j$, and its spatial displacement from
the frame origin at time $t$ is $\sum_jx_j(t)b_j\in K$, where $K$ is the
spatial displacement space of that definition.

Work in the constant-field model of [[ex-cm02-uniform-field]] with one label
of mass $m>0$, time window $\mathbb R$, configuration domain
$Q=\mathbb R^{3}$, and declared field parameter

$$\mathbf g=-g\,e_{3},\qquad g>0,\qquad [g]=\ell\tau^{-2}$$

([[def-cm01-units]]), so that the force map is $F(t,x,v)=m\mathbf g$ and the
equation of motion is $\ddot x(t)=-g\,e_{3}$. Fix the initial datum

$$x(0)=0,\qquad \dot x(0)=v_{0}\bigl(\cos\alpha\,e_{1}+\sin\alpha\,e_{3}\bigr), \qquad v_{0}>0,\qquad 0<\alpha<\pi/2 .$$

Verify: the unique maximal motion through the datum is

$$x(t)=\bigl(v_{0}\cos\alpha\bigr)t\,e_{1} +\Bigl(v_{0}\sin\alpha\,t-\tfrac12g\,t^{2}\Bigr)e_{3},$$

its trajectory lies in the plane $\operatorname{span}(e_{1},e_{3})$, and for
this model the return-to-launch-height time and the level range are

$$T_{\mathrm f}=\frac{2v_{0}\sin\alpha}{g},\qquad R_{\mathrm{range}}=\frac{v_{0}^{2}\sin(2\alpha)}{g}.$$

The level range and flight time are model quantities computed from the
declared parameters: no measured value of $g$, $v_{0}$ or $\alpha$ is
asserted, no medium and no drag are included, and the constant-field
description of a realistic field is an approximation recorded with the model.

## Facts & Assumptions

**Given:** The constant-field model with its parameters and the initial datum above.

[L1] The constant-field model is a force model of the branch [[post-cm02-force-superposition]], with the explicit solution formula $x(t)=x_{0}+v_{0}t+\frac12\mathbf g t^{2}$ for the datum $(x_{0},v_{0})$, its uniqueness as the maximal motion, and its frame covariance: [[ex-cm02-uniform-field]] claims 1-4, whose proofs use [[def-cm02-newtonian-flow]] and [[pthm-cm02-ivp]].

[L2] Componentwise differentiation of $\mathbb R^{3}$-valued curves ([[def-vector-valued-derivative-and-integral]], [[def-derivative]]): sums and scalar multiples are differentiated termwise ([[thm-algebra-of-derivatives]]), $(t^{2})'=2t$ and $(t)'=1$ ([[lem-derivative-of-a-power]]).

[L3] The double-angle identity $\sin(2\alpha)=2\sin\alpha\cos\alpha$ ([[thm-double-angle-and-power-reduction-identities]]).

[L4] Dimensions and units ([[def-cm01-units]]): $[g]=\ell\tau^{-2}$, $[T_{\mathrm f}]=\tau$ and $[R_{\mathrm{range}}]=\ell$, read through the dimension rules for quotients and products.

## Verification

**Proof technique:** direct; specialize the uniform-field solution to the projectile datum, then compute the trajectory geometry, the return time and the range, and record the model scope.

1.1 The datum's coordinate triples are $x_{0}=0\in\mathbb R^3$ and $v_{0}^{\flat}=v_{0}\cos\alpha\,e_{1}+v_{0}\sin\alpha\,e_{3}\in\mathbb R^3$; the constant-field model with $N=1$, $m_{1}=m$ and $\mathbf g=-g\,e_{3}\in\mathbb R^3$ is a force model of [[post-cm02-force-superposition]] by [[ex-cm02-uniform-field]] claim 1, and by its claim 2 the unique maximal motion through $(x_{0},v_{0}^{\flat})$ is $x(t)=v_{0}^{\flat}t-\frac12g\,t^{2}e_{3}$, which is the displayed formula; its maximal interval is all of $\mathbb R$. [given, L1, algebra]

1.2 Direct verification of the formula, independently of [L1]: differentiating componentwise by [L2] gives $\dot x(t)=v_{0}\cos\alpha\,e_{1}+(v_{0}\sin\alpha-g\,t)e_{3}$ and $\ddot x(t)=-g\,e_{3}=F(t,x(t),\dot x(t))/m$; the initial values are $x(0)=0$ and $\dot x(0)=v_{0}(\cos\alpha\,e_{1}+\sin\alpha\,e_{3})$, so the curve is a motion of the model by [[def-cm02-newtonian-flow]] clause (c), and by [[pthm-cm02-ivp]] clause 2 it is the only motion through the datum on any interval containing $0$. [given, L1, L2, algebra]

2.1 Planarity: the coefficient of $e_{2}$ in $x(t)$ is $0$ for every $t$, so the coordinate trajectory lies in the plane spanned by $e_{1}$ and $e_{3}$; equivalently $\langle x(t),e_{2}\rangle=0$ for all $t$ for the standard Euclidean inner product on $\mathbb R^3$. Its spatial displacement therefore lies in $\operatorname{span}(b_1,b_3)\subseteq K$ under the declared coordinate map. Since $v_0\cos\alpha>0$, eliminating $t=x_{1}/(v_{0}\cos\alpha)$ from the $e_{3}$-component gives $x_{3}=\tan\alpha\,x_{1}-\frac{g}{2v_{0}^{2}\cos^{2}\alpha}x_{1}^{2}$; its quadratic coefficient is nonzero because $g>0$, so this is a parabola in the stated plane. [step 1.1, given, algebra]

3.1 Return time and range: the height above the launch level is $h(t):=v_{0}\sin\alpha\,t-\frac12g\,t^{2}$; for $g>0$ and $v_{0}\sin\alpha>0$ one has $h(t)=0$ exactly when $t=0$ or $t=\frac{2v_{0}\sin\alpha}{g}=:T_{\mathrm f}$, so $T_{\mathrm f}$ is the positive return-to-launch-height time; the first coordinate at that time is $v_{0}\cos\alpha\,T_{\mathrm f}=\frac{2v_{0}^{2}\sin\alpha\cos\alpha}{g}=\frac{v_{0}^{2}\sin(2\alpha)}{g}$ by [L3], the displayed range $R_{\mathrm{range}}$. [step 2.1, L3, algebra]

4.1 Dimensions and scope: $[g]=\ell\tau^{-2}$ so $[T_{\mathrm f}]=\ell\tau^{-1}/(\ell\tau^{-2})=\tau$ and $[R_{\mathrm{range}}]=\ell^{2}\tau^{-2}/(\ell\tau^{-2})=\ell$, consistent with [[def-cm01-units]]; the computation uses no drag term, so it does not describe motion through a medium (compare the drag model [[post-cm02-drag]]), and a realistic gravitational field is constant only as an approximation, so treating a measured local field strength as the parameter $g$ is an empirical premise with its own conditions and uncertainty. [step 3.1, given, L4, algebra] ∎

## Remarks

- **What is and is not model output.** The parabola, the flight time and the range are conditional consequences of the adopted constant-field model and the stated datum; they are not measurements, and agreement with a reported observation would test the combined model, apparatus and calibration assumptions rather than prove the model.

- **The trajectory is planar but the model is three-dimensional.** The motion is the restriction to a two-dimensional plane of the three-dimensional model motion; the third direction plays no role for this datum but is part of the model's state space.
