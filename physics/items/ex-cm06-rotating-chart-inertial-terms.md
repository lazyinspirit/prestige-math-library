---
id: ex-cm06-rotating-chart-inertial-terms
kind: example
title: "All four inertial terms checked on explicit data, and the exact return to an inertial chart"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm06-moving-frame, pthm-cm06-inertial-forces, post-cm02-force-superposition, def-cm02-newtonian-flow, post-cm01-frames, def-cm01-velocity-acceleration, def-cm01-units, lem-cm-moving-frame-acceleration-identity, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-cross-product-in-r3, def-euclidean-inner-product, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm06-moving-frame: formulation-prerequisite
  pthm-cm06-inertial-forces: physical-result
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  lem-cm-moving-frame-acceleration-identity: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked finite check of the moving-chart equation of the framework: a zero-force one-label model observed in a chart with a uniformly accelerated rotation angle and a uniformly accelerated reference curve; the four inertial terms are evaluated term by term at one time and compared with the inertial-chart acceleration of the motion, a chart with nonzero angular velocity is identified as non-inertial by the criterion, and an explicit chart with affine reference curve and constant rotation is checked to reproduce the inertial-frame description. All values are model values; the example reports no measurement."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 6.1-6.2, Eqs. (6.4)-(6.5), printed pages 94-95 (PDF pages 100-101): the acceleration transfer to a rotating frame and the Coriolis, centrifugal and Euler terms"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 4.6, Eqs. (4.88)-(4.92), chapter pages 21-23 (PDF pages 76-78): velocity and acceleration transfer and the four inertial-force terms, with the frame-motion terms a0 and omega-dot"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.1.1, printed pages 47-49 (PDF pages 53-55): the angular velocity of a rotating basis in the convention R^T Rdot"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m=1\,\mathrm{kg}$, time
window $I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and the
**zero force map**
$$F:I_{0}\times Q\times\mathbb R^{3}\longrightarrow\mathbb R^{3},\qquad F(t,\mathbf x,\mathbf v)\equiv0$$
(admissible: constant, hence of the standing regularity), in a fixed inertial frame $F$ with adapted coordinates $(t,x)$
([[post-cm01-frames]], [[def-cm01-units]]). For real parameters
$\omega_{0},\beta,\gamma$, vectors $a_{0},v_{c}\in\mathbb R^{3}$ and
[[def-cm06-moving-frame]] data, take $\theta$ to be a dimensionless angle in
radians, with $[\omega_{0}]=\tau^{-1}$, $[\beta]=\tau^{-2}$,
$[\gamma]=\ell\tau^{-2}$, $[a_{0,j}]=\ell$ and
$[v_{c,j}]=\ell\tau^{-1}$ for each spatial component $j$:
$$\theta(t):=\omega_{0}t+\tfrac12\beta t^{2},\qquad R(t):=\begin{pmatrix}\cos\theta(t)&-\sin\theta(t)&0\\ \sin\theta(t)&\cos\theta(t)&0\\ 0&0&1\end{pmatrix},\qquad c(t):=a_{0}+v_{c}t+\tfrac12\gamma t^{2}e_{1},$$
consider the motion $x(t):=x_{0}+v\,t$ of the zero-force model with
$x_{0}=(1,0,0)\,\mathrm m$, $v=(0,1,0)\,\mathrm{m}\,\mathrm{s}^{-1}$, its
moving-chart coordinate curve $y(t)=R(t)^{\mathsf T}(x(t)-c(t))$, and the
inertial-terms field
$\tau(t,y,\dot y)=-\bigl(2\omega(t)\times\dot y+\omega'(t)\times y+\omega(t)\times(\omega(t)\times y)+R(t)^{\mathsf T}c''(t)\bigr)$.

Then, for the parameter values $\omega_{0}=2\,\mathrm s^{-1}$,
$\beta=1\,\mathrm s^{-2}$, $\gamma=3\,\mathrm m\,\mathrm s^{-2}$ and
$a_{0}=v_{c}=0$:

1. $R(t)\in SO(3)$ is $C^{\infty}$ and $\Omega=R^{\mathsf T}R'$ has the
   angular velocity $\omega(t)=\theta'(t)e_{3}=(2+t)e_{3}$ and
   $\omega'(t)=e_{3}$, while $c''(t)=(3,0,0)$;
2. $y(0)=e_{1}$, $\dot y(0)=-e_{2}$, and the inertial-chart acceleration of
   the motion gives $\ddot y(0)=-3e_{1}-e_{2}$ (in units
   $\mathrm m\,\mathrm s^{-2}$);
3. the four inertial terms at $t=0$ are $-2\omega\times\dot y=-4e_{1}$,
   $-\omega'\times y=-e_{2}$, $-\omega\times(\omega\times y)=+4e_{1}$ and
   $-R^{\mathsf T}c''=-3e_{1}$, and their sum is $\tau(0,y(0),\dot y(0))=-3e_{1}-e_{2}=\ddot y(0)$;
   clause 1 of [[pthm-cm06-inertial-forces]] therefore holds at $t=0$ for
   these data, with $m\ddot y=R^{\mathsf T}F+m\tau=m\tau$;
4. because $\omega\not\equiv0$, clause 3 of that theorem identifies the chart
   as **not** inertial; and with the alternative parameters
   $\omega_{0}=\beta=\gamma=0$, $a_{0}=(1,0,0)$,
   $v_{c}=(0,1,0)$, the chart has constant rotation $R\equiv I_{3}$ and affine
   reference curve, hence vanishing inertial terms, and the same motion has
   $\ddot y\equiv0$ in the chart, which is the inertial-frame description
   with $y(t)=x(t)-a_{0}-v_{c}t$.

All values are model values in the declared coordinates; the example reports
no measurement and asserts nothing about any apparatus.

## Facts & Assumptions

**Given:** The constants and parameters of the Example, the zero-force model, the moving chart $(I,c,R)$ with $I=\mathbb R$, the motion $x(t)=x_{0}+vt$, and the curve $y(t)=R(t)^{\mathsf T}(x(t)-c(t))$.

[F1] The chart ([[def-cm06-moving-frame]]): $R(t)\in SO(3)$ with $\Omega=R^{\mathsf T}R'$ skew and unique representing vector $\omega$, $\Omega z=\omega\times z$; $y$ is the moving-chart coordinate curve; $\tau$ is the inertial-terms field of clause (d).

[F2] The moving-chart equation ([[pthm-cm06-inertial-forces]] clauses 1,2,3): $m\ddot y_{i}=R^{\mathsf T}F_{i}+m\tau$ along a motion; the inertial terms vanish identically exactly when $R$ is constant and $c$ is affine, in which case the chart is an inertial frame's chart and the equation reduces to the covariance law.

[F3] The zero-force model and its motions: $F\equiv0$ is of class $C^{1}$ with the standing regularity; $x(t)=x_{0}+vt$ is a motion of the model in the sense of [[def-cm02-newtonian-flow]] clause (c), because $m\ddot x=0=F$ ([[post-cm02-force-superposition]], [[def-cm01-velocity-acceleration]]).

[F4] Rotation and trigonometry: $R(t)$ as displayed lies in $SO(3)$ with $R^{\mathsf T}R=I_{3}$; the derivatives of sine and cosine, the identity $\sin^{2}+\cos^{2}=1$, the chain rule and the componentwise algebra of derivatives; the cross product of the standard basis ([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]], [[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-cross-product-in-r3]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]]).

[F5] The kinematic identity of the chart ([[lem-cm-moving-frame-acceleration-identity]] clause 3): $R^{\mathsf T}x''=y''+2\omega\times y'+\omega'\times y+\omega\times(\omega\times y)+R^{\mathsf T}c''$ for the curves of the chart; and $\|Rz\|_{2}=\|z\|_{2}$.

[F6] Intervals and constants ([[def-interval]]); the chart's data are defined for all $t\in\mathbb R$.

## Verification

**Proof technique:** direct; compute the chart quantities, evaluate the two sides of the moving-chart equation on explicit data at one time, and check the inertial and non-inertial cases against the criterion.

1.1 Chart quantities: $R(t)$ is the rotation about $e_{3}$ by the angle $\theta(t)$, so $R(t)^{\mathsf T}R(t)=I_{3}$ and $\det R(t)=\cos^{2}\theta+\sin^{2}\theta=1$ by [F4], and $R$ is $C^{\infty}$ because sine, cosine and the polynomial $\theta$ are on the interval $I=\mathbb R$ ([F6]); differentiating $\Omega=R^{\mathsf T}R'$ gives $$\Omega(t)=\theta'(t)\begin{pmatrix}0&-1&0\\ 1&0&0\\ 0&0&0\end{pmatrix},\qquad\text{so}\qquad \omega(t)=\theta'(t)e_{3}=(2+t)e_{3},\qquad \omega'(t)=e_{3}$$ for the parameter values of the Example, and $c''(t)=\gamma e_{1}=3e_{1}$. [F1, F4, F6, given, algebra]

1.2 The motion and its chart acceleration at $t=0$: the curve $x(t)=x_{0}+vt$ has $x''=0$, so it is a motion of the zero-force model by [F3]. At $t=0$ one has $\theta(0)=0$, $R(0)=I_{3}$, $c(0)=0$ and $c'(0)=0$, so $y(0)=x_{0}=e_{1}$ and, differentiating $y=R^{\mathsf T}(x-c)$ at $t=0$ with $\Omega(0)=2\,[e_{3}]_{\times}$, $\dot y(0)=-\Omega(0)y(0)+x'(0)-c'(0)=-2e_{3}\times e_{1}+e_{2}=-2e_{2}+e_{2}=-e_{2}$. Differentiating once more at $t=0$, $\ddot y(0)=-\bigl(\Omega(0)^{2}+\Omega'(0)\bigr)y(0)-2\Omega(0)\dot y(0)+x''(0)-c''(0)$, using $\Omega'(0)=\theta''(0)[e_{3}]_{\times}=[e_{3}]_{\times}$ and $\Omega(0)^{2}=4[e_{3}]_{\times}^{2}$ with $[e_{3}]_{\times}e_{1}=e_{2}$, $[e_{3}]_{\times}e_{2}=-e_{1}$: $-\bigl(\Omega^{2}+\Omega'\bigr)y(0)=4e_{1}-e_{2}$, $-2\Omega(0)\dot y(0)=-4[e_{3}]_{\times}(-e_{2})=-4e_{1}$ and $-c''(0)=-3e_{1}$, so $\ddot y(0)=-3e_{1}-e_{2}$. [F3, F4, given, algebra]

2.1 The four inertial terms at $t=0$ and the identity: with $\omega(0)=2e_{3}$, $\omega'(0)=e_{3}$, $R(0)=I_{3}$, $y(0)=e_{1}$, $\dot y(0)=-e_{2}$ and $c''(0)=3e_{1}$ from steps 1.1 and 1.2, the four terms of $\tau$ are $-2\omega\times\dot y=-4(e_{3}\times(-e_{2}))=-4e_{1}$, $-\omega'\times y=-(e_{3}\times e_{1})=-e_{2}$, $-\omega\times(\omega\times y)=-2e_{3}\times(2e_{3}\times e_{1})=-4(e_{3}\times e_{2})=4e_{1}$ and $-R^{\mathsf T}c''=-3e_{1}$; their sum is $\tau(0,e_{1},-e_{2})=-4e_{1}-e_{2}+4e_{1}-3e_{1}=-3e_{1}-e_{2}$, which equals $\ddot y(0)$ of step 1.2, so $m\ddot y(0)=m\tau(0,e_{1},-e_{2})$ and clause 1 of [F2] holds at $t=0$ for these data (with $F=0$). [F2, F4, step 1.1, step 1.2, algebra]

2.2 The inertial case checked: with $\omega_{0}=\beta=\gamma=0$, $a_{0}=(1,0,0)$ and $v_{c}=(0,1,0)$ one has $\theta\equiv0$, $R\equiv I_{3}$ and $c(t)=a_{0}+v_{c}t$ affine, so $\omega\equiv0$, $\omega'\equiv0$ and $c''\equiv0$; the inertial terms vanish identically by [F2] clause 3, and the chart is the adapted chart of the inertial frame related to $F$ by the Galilean transformation $y=Qx+v_{*}t+a_{0*}$ with $Q=I_{3}$, $v_{*}=-v_{c}=(0,-1,0)$ and $a_{0*}=-a_{0}=(-1,0,0)$. For the same motion $x(t)=x_{0}+vt$ one gets $y(t)=x_{0}-a_{0}+(v-v_{c})t=(0,0,0)$ and $\ddot y\equiv0$, consistent with $m\ddot y=R^{\mathsf T}F+m\tau=0$. [F2, F3, F5, step 1.1, algebra]

2.3 The chart is not inertial: since $\omega(t)=(2+t)e_{3}$ is not identically zero on $I=\mathbb R$, $R$ is not constant, so by clause 3 of [F2] the inertial terms do not vanish identically and the chart is not the adapted chart of an inertial frame; the four-term computation of the preceding check exhibits the nonvanishing explicitly at $t=0$. [F1, F2, step 1.1]

3.1 The Example's clauses are proved: clause 1 is step 1.1, clauses 2 and 3 are steps 1.2 and 2.1, the non-inertial verdict is step 2.3, and the exact return to an inertial chart is step 2.2. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Reading the terms.** On this data the Coriolis term and the centrifugal term cancel ($-4e_{1}+4e_{1}=0$) and the Euler and translational terms add, so the example is a check of the individual terms rather than of any one of them. A motion with $\dot y$ not aligned as here separates the Coriolis contribution; the companion pendulum and bead examples do not use a moving chart at all.

- **No equivalence principle.** The non-inertial chart's terms are computed from its own motion data; nothing in the example compares them with a gravitational field, and the zero-force model remains force-free in every chart.
