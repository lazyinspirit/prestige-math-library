---
id: pthm-fd-control-volume-balances
kind: physics-theorem
title: "Moving control-volume mass and momentum"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - pthm-fd-material-mass-continuity
  - pthm-fd-continuous-source-local-balances
  - lem-fd-moving-control-volume-transport
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-axiom-of-choice
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  pthm-fd-material-mass-continuity: physical-result
  pthm-fd-continuous-source-local-balances: physical-result
  lem-fd-moving-control-volume-transport: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "C1 control-region motion with relative normal flux u-w and smooth field traces; no boundary-layer or control-surface model is inferred."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§4.6.1–§4.6.4, printed pp. 152–156."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/4bbeb3c0de9503422b6049d2f9760af9_13transthm.pdf"
      locator: "§1.3, complete 4-page moving-volume transport derivation."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf"
      locator: "§1.5, complete 2-page material momentum derivation."
---

## Statement

Use a classical Cartesian inertial frame and SI units. Let $I\subseteq\mathbb R$ be a nonempty open time interval in seconds, let $C_0\subseteq\mathbb R^3$ be a nonempty bounded open region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $X:I\times U_C\to\mathbb R^3$ be a $C^2$ family of orientation-preserving diffeomorphisms (bijections onto open images with $C^2$ inverses and positive Jacobian determinant) on an open neighborhood $U_C\supseteq\overline{C_0}$. Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous. The moving control region is $C(t):=X_t(C_0)$; its boundary velocity is $w(t,X(t,\xi)):=\partial_tX(t,\xi)$ in metres per second. Let $\Omega_t$ be the open fluid region and $\mathcal O:=\{(t,x):t\in I,\ x\in\Omega_t\}$ be open; assume $\overline{C(t)}\subset\Omega_t$ for every $t$. The fields $\rho:\mathcal O\to(0,\infty)$ and $u:\mathcal O\to\mathbb R^3$ are $C^1$, $b:\mathcal O\to\mathbb R^3$ is continuous, and $\sigma:\mathcal O\to\mathbb R^{3\times3}$ is $C^1$. Their units are respectively kilograms per cubic metre, metres per second, metres per second squared and pascals. Let $n$ be the outward Euclidean unit normal and use Euclidean surface measure, with chart density $\sqrt{\det(DY^{\mathsf T}DY)}$. Set $(u\otimes u)_{ij}:=u_i u_j$ and $(\operatorname{div}\sigma)_i:=\sum_j\partial_{x_j}\sigma_{ij}$. Use traction $t=\sigma n$. Assume the adopted single-component continuum mass and momentum balances in the following explicit local material sense. For every $(t_0,x_0)\in\mathcal O$, there exist an open interval $K$ containing $0$ with $t_0+K\subset I$, a nonempty bounded open $C^1$ reference region $B$ containing $x_0$, an open neighborhood $U_B$ of $\overline B$, and $\chi\in C^2(K\times U_B;\mathbb R^3)$ with orientation-preserving $C^2$ diffeomorphic slices, positive Jacobian, and $\chi(0,a)=a$. Require $(t_0+s,\chi(s,a))\in\mathcal O$ and $u(t_0+s,\chi(s,a))=\partial_s\chi(s,a)$ for $s\in K,a\in U_B$. On every material subregion $\chi_s(V)$ with nonempty bounded open $V\Subset B$ and one-sided $C^1$ graph boundary, require the mass equality $\int_{\chi_s(V)}\rho(t_0+s,x)\,dx=\int_V\rho(t_0,a)\,da$ and the material linear-momentum balance with the same fields $\rho,u,b,\sigma$ evaluated at time $t_0+s$, body-force density $\rho b$, and traction $\sigma n$. No angular or total-energy balance is needed. Assume also the Axiom of Choice.

Then every such $C(t)$ satisfies

$$\frac{d}{dt}\int_{C(t)}\rho\,dx=-\int_{\partial C(t)}\rho\,(u-w)\cdot n\,dS,$$

$$\frac{d}{dt}\int_{C(t)}\rho u\,dx=\int_{C(t)}\rho b\,dx+\int_{\partial C(t)}\sigma n\,dS-\int_{\partial C(t)}\rho u\,\bigl((u-w)\cdot n\bigr)\,dS.$$

Only the normal component $w\cdot n$ enters these balances. If $C(t)$ is material, so $w\cdot n=u\cdot n$ on its boundary, the relative mass and advective-momentum fluxes vanish. The conclusion is a conditional model deduction; it asserts no existence of a flow satisfying the balances.

## Statement references

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §4.6.1–§4.6.4](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Mei, MIT OpenCourseWare, *Kinematic Transport Theorem*, §1.3](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/4bbeb3c0de9503422b6049d2f9760af9_13transthm.pdf)

[Mei, MIT OpenCourseWare, *Law of Momentum Conservation*, §1.5](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf)

## Facts & Assumptions

**Given:** The moving region, fields, regularity, units and conventions in the Statement; the adopted mass and momentum balances; and the Axiom of Choice.

[A1] [[post-fd-continuum-balances]]: mass and linear momentum are balanced on every admissible smooth material region, with body-force density $\rho b$ and contact traction $\sigma n$.

[F1] [[pthm-fd-material-mass-continuity]]: the adopted material mass integral implies $\partial_t\rho+\operatorname{div}(\rho u)=0$ for positive $C^1$ density and the stated $C^2$ motion.

[F2] [[pthm-fd-continuous-source-local-balances]]: its mechanical-only interface gives conservative local momentum under pointwise mass continuity, positive $C^1$ density, the velocity induced by the stated $C^2$ material motion, $C^1$ stress, continuous body acceleration and the material linear-momentum balance. Thermal fields and angular or total-energy balances are unnecessary for this conclusion.

[F3] [[lem-fd-moving-control-volume-transport]]: for a $C^1$ field and the stated moving $C^1$ region, $\frac d{dt}\int_{C(t)}g=\int_{C(t)}\partial_tg+\int_{\partial C(t)}g\,w\cdot n\,dS$.

[F4] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under countable choice, the divergence theorem holds on a bounded $C^1$ domain for a $C^1$ vector field on its closure.

[F5] [[def-axiom-of-choice]]: every set-indexed family of nonempty sets admits a choice function.

[F6] [[def-fd-quantity-and-frame-conventions]]: the velocity, density, body acceleration, traction and stress use the classical inertial and SI conventions in the Statement.

## Proof

1.1 For any countable family of nonempty sets, [F5] supplies a choice function on the set of its distinct members; composing with the sequence gives a choice from each indexed member. Thus the $\mathrm{AC}_\omega$ hypotheses in [F2] and [F4] follow from the Axiom of Choice. [given, F5, algebra]

2.1 Fix any $(t_0,x_0)\in\mathcal O$ and use its local material chart from the Statement. Write $\widetilde f(s,x)=f(t_0+s,x)$ for each field $f$. On $K$, the chart is a normalized $C^2$ motion on $U_B$, with $x_0\in B$, positive $C^1$ reference density $\rho_0(a)=\rho(t_0,a)$ on $\overline B$, and its induced velocity $\widetilde u$. The local material mass equality is exactly the hypothesis of [F1], so continuity holds on $\{(s,x):x\in\chi_s(B)\}$. The given field regularity holds on the chart’s ambient swept open set, while continuity and the adopted momentum balance hold on its balanced region. Its mechanical-only conclusion [F2], under step 1.1, therefore gives local momentum at $(s,x)=(0,x_0)$. Since $\partial_s\widetilde f=\partial_tf$ at corresponding events, and $(t_0,x_0)$ was arbitrary, both local equations hold throughout $\mathcal O$. Thus
$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \partial_t(\rho u)+\operatorname{div}(\rho u\otimes u-\sigma)=\rho b.$$
[given, A1, F1, F2, F6, step 1.1]

3.1 By [F3], the time derivative of the mass in $C(t)$ equals $\int_{C(t)}\partial_t\rho+\int_{\partial C(t)}\rho w\cdot n$. Substitute continuity from step 2.1 and apply [F4] to $\rho u$. The result is $-\int_{\partial C(t)}\rho(u-w)\cdot n\,dS$, the first formula. [given, F3, F4, step 1.1, step 2.1]

3.2 Apply [F3] componentwise to $\rho u$ and substitute the momentum equation from step 2.1. Apply [F4] to each row of $\rho u\otimes u-\sigma$. Since $(\rho u\otimes u-\sigma)n=\rho u(u\cdot n)-\sigma n$, the boundary-velocity term $\rho u(w\cdot n)$ combines with the advective flux to give $-\rho u((u-w)\cdot n)$. This is the second formula. [given, F3, F4, step 1.1, step 2.1, algebra]

4.1 The formulas contain $w$ only through $w\cdot n$. If $w\cdot n=u\cdot n$, both relative-flux integrands vanish pointwise. [given, step 3.1, step 3.2] ∎

