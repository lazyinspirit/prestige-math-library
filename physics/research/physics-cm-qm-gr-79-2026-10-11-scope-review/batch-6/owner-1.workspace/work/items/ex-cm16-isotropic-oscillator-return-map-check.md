---
id: ex-cm16-isotropic-oscillator-return-map-check
kind: example
title: "The planar isotropic oscillator: the stroboscopic map at half period is minus the identity, every state is periodic, the periodic points are dense, and the map is neither mixing nor sensitive"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm16-stroboscopic-and-poincare-maps,
       def-cm16-chaos-list-for-model-maps,
       def-cm-topologically-mixing-dense-periodic-and-sensitive-maps,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       pthm-cm02-ivp,
       thm-sine-and-cosine-derivatives,
       thm-algebra-of-derivatives,
       def-euclidean-inner-product,
       def-metric-ball,
       def-cm01-units]
dependency_roles:
  def-cm16-stroboscopic-and-poincare-maps: formulation-prerequisite
  def-cm16-chaos-list-for-model-maps: formulation-prerequisite
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  pthm-cm02-ivp: physical-result
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the page's discrete-time vocabulary on the planar isotropic oscillator with unit mass and unit stiffness: the flow is an explicit rotation of each coordinate plane, the stroboscopic map at period pi is minus the identity, at period 2pi it is the identity, the Poincare first-return map to the section y=0, vy>0 is the identity, every state is periodic, periodic points are dense in the phase plane, and the map fails topological mixing and sensitivity, so it is not chaotic in the stated sense. The check is model-data substitution; it reports no measurement."
sources:
  references:
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.2 pp. 157-172: stroboscopic maps and the warning that dense periodic points alone do not make a map chaotic"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.3: the isotropic two-dimensional harmonic oscillator and its closed phase-plane orbits"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.3: return maps and the explicit distinction between periodic behaviour and chaos"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Example

**Declared model data.** Take two dimensionless labels in the plane, with
configuration domain $\Omega:=\mathbb R^2$, constant kinetic metric
$M:=I_2$ and potential $U(q):=\tfrac12\lVert q\rVert_2^2$ in the cartesian
chart $(x,y)$ of [[def-cm-mechanical-vector-field-and-energy-in-a-chart]].
The field is
$$G(x,y,v_x,v_y)=(v_x,v_y,-x,-y),$$
and the motion through $(x_0,y_0,v_{x0},v_{y0})$ is
$$x(t)=x_0\cos t+v_{x0}\sin t,\qquad v_x(t)=-x_0\sin t+v_{x0}\cos t,$$
and likewise in the $y$ coordinate. Consider the stroboscopic map $\Psi_P$ of
[[def-cm16-stroboscopic-and-poincare-maps]] clause (ii) for this autonomous
model, and the section $\Sigma_+:=\{y=0,\ v_y>0\}$ with its first-return map.

**Assertions to check.** (i) The displayed curves are the model's motions;
(ii) $\Psi_\pi=-\mathrm{id}$ and $\Psi_{2\pi}=\mathrm{id}$, so every state of
the model is periodic under the flow with period $2\pi$ and every point is a
periodic point of $\Psi_\pi$ with period dividing $2$; (iii) the first-return
map of $\Sigma_+$ is the identity; (iv) with the Euclidean metric of the
phase chart, $\Psi_\pi$ on $X:=\mathbb R^4$ is continuous and has dense
periodic points, but is not topologically mixing and has no sensitivity
constant, hence is not chaotic in the stated sense of
[[def-cm16-chaos-list-for-model-maps]].

## Facts & Assumptions

**Given:** the declared chart data $M=I_2$, $U(q)=\lVert q\rVert_2^2/2$, the field $G$ and the displayed motion formulas.

[L1] Uniqueness of motions ([[pthm-cm02-ivp]]): the chart field is continuous and state-locally-Lipschitz, so a globally defined curve solving the equation with given initial data is the model's maximal motion.

[L2] Calculus ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]]): $(\sin)'=\cos$, $(\cos)'=-\sin$, with the sum and constant-multiple rules, and $\cos(\pi)=-1$, $\sin(\pi)=0$, $\cos(2\pi)=1$, $\sin(2\pi)=0$.

[L3] The chaos list ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]): a map is chaotic in the stated sense exactly when it is continuous, topologically mixing, has dense periodic points and has sensitive dependence with a positive constant; the negation of topological mixing or of sensitivity therefore suffices to fail the list.

## Verification

**Proof technique:** direct.

1.1 Fields and motions: for $M=I_2$ and $U(q)=\lVert q\rVert_2^2/2$ the mechanical field is $G(q,v)=(v,-\nabla U(q))=(v,-q)$ ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]); differentiating the displayed coordinate formulas gives $\dot x=v_x$, $\dot v_x=-x$ and the same in $y$, and at $t=0$ the formulas reproduce the initial data, so by [L1] they are the model's motions and the flow of the model is the rotation of each coordinate plane by the angle $t$. [given, L1, L2, algebra]

2.1 Stroboscopic maps: evaluating step 1.1 at $t=\pi$ uses $\cos\pi=-1$, $\sin\pi=0$ and gives $\Psi_\pi(x,y,v_x,v_y)=(-x,-y,-v_x,-v_y)$; at $t=2\pi$ it gives the identity. Hence every state returns to itself after $2\pi$, and $\Psi_\pi$ is an involution, so every point of $X$ is a periodic point of $\Psi_\pi$ with period $1$ or $2$; in particular the periodic points are all of $X$ and are dense. [step 1.1, given, L2, algebra]

2.2 First return to $\Sigma_+$: a state with $y_0=0$ and $v_{y0}>0$ has $y(t)=v_{y0}\sin t$ and $v_y(t)=v_{y0}\cos t$, so $y(t)=0$ with $v_y(t)>0$ exactly at the even multiples of $\pi$, the first positive one being $t=2\pi$; the motion formulas at $t=2\pi$ give $(x,v_x)(2\pi)=(x_0,v_{x0})$, so the first-return map of $\Sigma_+$ is the identity on $\Sigma_+$. [step 1.1, given, L2, algebra]

3.1 Failure of mixing: let $Z\in X$ be a nonzero state with $\lVert Z\rVert_2>1$ and let $U:=B(Z,1)$ be the open Euclidean ball ([[def-metric-ball]]); then $U\cap(-U)=\emptyset$, and step 2.1 gives $\Psi_\pi^n(U)=U$ for even $n$ and $\Psi_\pi^n(U)=-U$ for odd $n$. Taking $V:=U$ in the mixing condition of [L3], the intersection $\Psi_\pi^n(U)\cap V$ is empty for every odd $n$; consequently no integer $N$ has $\Psi_\pi^n(U)\cap V\ne\emptyset$ for all $n\ge N$, and $\Psi_\pi$ is not topologically mixing on $X$. [step 2.1, L3, algebra]

4.1 Failure of sensitivity: for all states $Z,Z'$ and all $n\ge1$, step 2.1 gives $\lVert\Psi_\pi^n(Z)-\Psi_\pi^n(Z')\rVert_2=\lVert Z-Z'\rVert_2$ because each iterate is $\pm\mathrm{id}$, an isometry; hence for no $\delta>0$ can one find, for every $Z$ and every ball around $Z$, a nearby state whose iterate is $\delta$-separated. The sensitivity condition of [L3] fails, and with it the chaos list; the periodic-point and continuity clauses alone do not make $\Psi_\pi$ chaotic in the stated sense. [step 2.1, step 3.1, L3, algebra]

5.1 Reading: the explicit maps are model-data substitutions in dimensionless units; the section, return time and stroboscopic period are measured in the dimensionless frame time, and no measurement, sampling or empirical comparison is performed. [step 2.2, step 4.1, given, algebra] ∎

## Remarks

- **Why the check matters.** It exhibits a model whose stroboscopic map is continuous with dense periodic points yet fails two of the four clauses of the page's chaos list, showing that the list is a genuine restriction rather than a set of automatic consequences of periodicity. It is the discrete-time companion of the finite-time growth checks: rate zero everywhere ([[ex-cm16-linearization-and-growth-checks]]) and no chaos.

- **The return map.** On the regular section $\{y=0,\ v_y\ne0\}$ the first-return map sends $(x,v_x,v_y)$ to $(x,v_x,-v_y)$ after time $\pi$, and the composed return to $\Sigma_+$ is the identity; the section is transversal because $Dh\cdot G=v_y\ne0$ on it, in agreement with the transversality hypothesis of [[def-cm16-stroboscopic-and-poincare-maps]] clause (iii). For $\Sigma_+$, its closure is $\{y=0,v_y\ge0\}$; the only intermediate zero at time $\pi$ has $v_y=-v_{y0}<0$, so the open reference segment avoids that closure. For the regular two-sided section its closure is $\{y=0\}$, and no intermediate zero occurs before $\pi$. These observations also verify the proposition's extra first-return condition.
