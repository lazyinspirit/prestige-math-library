---
id: pthm-cm17-chain-limit-of-the-string-model
kind: physics-theorem
title: "The continuum string model as the proved limit of the mass-spring chain, with explicit convergence and dispersion error"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [def-cm-cyclic-spring-chain, thm-cm-spring-chain-continuum-limit, thm-cm-spring-chain-dispersion-relation, lem-cm-second-difference-remainder-bound, def-cm17-continuum-body-and-units, def-cm01-units, def-cm-euclidean-spatial-calculus]
dependency_roles:
  def-cm-cyclic-spring-chain: mathematical-premise
  thm-cm-spring-chain-continuum-limit: mathematical-premise
  thm-cm-spring-chain-dispersion-relation: mathematical-premise
  lem-cm-second-difference-remainder-bound: mathematical-premise
  def-cm17-continuum-body-and-units: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-euclidean-spatial-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional on the adopted mass-spring chain with the stated mass and stiffness scaling: for every smooth periodic solution of the one-dimensional wave equation with speed c = square root of tension over linear density, the chain with node mass density-times-spacing and spring constant tension-over-spacing reproduces the sampled continuum motion with explicit uniform O(a^{3/2}) nodal error and O(a^2) interpolation error, and the chain's exact dispersion relation reduces to the continuum one with a fourth-order error in the spacing. The theorem justifies the string model as an approximation of the discrete mechanical model in this regime; it asserts no claim that the string model is exact for any material, and no measured constant."
sources:
  references:
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 6.1 (the chain of masses and springs, its Lagrangian and the continuum limit)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 6.2-6.5 (coupled oscillators, the discrete chain and its continuum/standing-wave limits)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Let $L>0$, let $\rho_\ell>0$ be a linear mass density and let $\tau_s>0$ be a
tension scale, both in the units of [[def-cm01-units]], and put
$c:=\sqrt{\tau_s/\rho_\ell}$, of dimension $[c]=\ell\tau^{-1}$
([[def-cm17-continuum-body-and-units]]). For an integer $N\ge2$ put
$a:=L/N$ and consider the cyclic spring chain of
[[def-cm-cyclic-spring-chain]] with parameter $c$ and spacing $a$,
equivalently the chain of $N$ nodes of mass $m=\rho_\ell a$ and spring
constant $k_s=\tau_s/a$; the two descriptions agree because
$c^2/a^2=k_s/m$. Let $[0,T_{\max}]$ be a compact time interval and let
$u:[0,T_{\max}]\times\mathbb R\to\mathbb R$ be $C^2$ in $t$ and $C^4$ in $x$,
$L$-periodic in $x$, and satisfy

$$u_{tt}=c^2u_{xx}\qquad\text{on }[0,T_{\max}]\times\mathbb R ,$$

with $M:=\sup|\partial_x^4u|<+\infty$ and $M_2:=\sup|\partial_x^2u|<+\infty$.
Let $q$ be the chain solution with the sampled initial data
$q_j(0)=u(0,ja)$, $q_j'(0)=u_t(0,ja)$, put $e_j(t):=q_j(t)-u(t,ja)$ and
$C:=c^2\sqrt L\,M/12$. Then:

**(i)** $q$ exists and is unique on $[0,T_{\max}]$, and for every
$t\in[0,T_{\max}]$

$$\|e(t)\|_a\le\frac{Ca^2t^2}{2},\qquad\|e'(t)\|_a\le Ca^2t,\qquad \max_j|e_j(t)|\le\frac{Ca^{3/2}t^2}{2},$$

in the discrete norm of [[def-cm-cyclic-spring-chain]]; consequently the
nodal displacements converge to the sampled continuum motion uniformly on
$[0,T_{\max}]$ as $a\to0$ with $L,T_{\max}$ fixed.

**(ii)** With $I_aq$ the piecewise-linear interpolation of the chain data on
the circle of circumference $L$,

$$\sup_{x\in[0,L]}|I_aq(t,x)-u(t,x)|\le\max_j|e_j(t)|+\frac{M_2a^2}{8}\qquad(0\le t\le T_{\max}),$$

so the interpolated chain displacement converges uniformly to the continuum
solution as $a\to0$.

**(iii)** For $A\ne0$ and cyclic wave numbers $\kappa Na\in2\pi\mathbb Z$, the travelling ansatz $q_j(t)=A\cos(\kappa ja-\omega t)$ solves the
chain equation if and only if $\omega^2=(4c^2/a^2)\sin^2(\kappa a/2)$, and for these solutions with
$|\kappa a|\le1$ one has $|\omega^2-c^2\kappa^2|\le c^2\kappa^4a^2/12$: the
continuum dispersion relation is the long-wave limit with an explicit
fourth-order error in the spacing.

The result justifies the continuum string model with speed $c$ as the proved
limit of the discrete mechanical chain in this regime; it asserts no
exactness of the string model for any material and no measured constant.

## Facts & Assumptions

**Given:** the data $L,\rho_\ell,\tau_s$, the speed $c=\sqrt{\tau_s/\rho_\ell}$; the spacing $a=L/N$; the smooth periodic solution $u$ of the wave equation; the sampled chain data.

[F1] Chain and comparison class ([[def-cm-cyclic-spring-chain]]): the chain is $q_j''=(c^2/a^2)(q_{j+1}-2q_j+q_{j-1})$ with discrete norm $\|\cdot\|_a$ and discrete differences; the comparison class is the $C^2_t,C^4_x$, $L$-periodic solutions of $u_{tt}=c^2u_{xx}$ with sampled initial data.

[F2] Continuum limit ([[thm-cm-spring-chain-continuum-limit]], [[lem-cm-second-difference-remainder-bound]]): under the stated hypotheses there is a unique solution $q$ on $[0,T_{\max}]$ with $\|e(t)\|_a\le Ca^2t^2/2$, $\|e'(t)\|_a\le Ca^2t$, $\max_j|e_j(t)|\le \tfrac12Ca^{3/2}t^2$ and the interpolation bound $\sup|I_aq-u|\le\max_j|e_j|+M_2a^2/8$, where $C=c^2\sqrt L\,M/12$.

[F3] Dispersion ([[thm-cm-spring-chain-dispersion-relation]]): for $A\ne0$ and $\kappa Na\in2\pi\mathbb Z$, the travelling cosine ansatz solves the chain equation if and only if $\omega^2=(4c^2/a^2)\sin^2(\kappa a/2)$, and when this dispersion relation holds and $|\kappa a|\le1$ the fourth-order bound $|\omega^2-c^2\kappa^2|\le c^2\kappa^4a^2/12$ holds.

[F4] Scaling ([[def-cm17-continuum-body-and-units]], [[def-cm01-units]]): the node mass $m=\rho_\ell a$ and spring constant $k_s=\tau_s/a$ give $k_s/m=(\tau_s/a)/(\rho_\ell a)=c^2/a^2$, so the mechanical chain has exactly the equation of [F1]; $c$ has the dimension of velocity.

## Proof

**Proof technique:** direct; identify the mechanical chain with the normalized chain of the cited mathematical items through the mass and stiffness scaling, then instantiate the continuum-limit and dispersion theorems.

1.1 Scaling: with $m=\rho_\ell a$ and $k_s=\tau_s/a$, the chain of nodes joined by springs of stiffness $k_s$ obeys $q_j''=(k_s/m)(q_{j+1}-2q_j+q_{j-1})=(c^2/a^2)(q_{j+1}-2q_j+q_{j-1})$ by [F4] and the definition of $c$; this is exactly the cyclic spring chain of [F1]. [given, F1, F4, algebra]

1.2 Clause (iii): the chain data have $N\ge2$, $a=L/N>0$ and $c>0$, and the travelling ansatz has the stated $A\ne0$ and cyclic compatibility $\kappa Na\in2\pi\mathbb Z$. Thus [F3] applies: the travelling cosines solve the cyclic chain equation if and only if $\omega^2=(4c^2/a^2)\sin^2(\kappa a/2)$. For such solutions the dispersion relation holds, so with $|\kappa a|\le1$ the same supplier gives the fourth-order error bound. This proves clause (iii) with every allowed cyclic mode retained. [given, F1, F3]

2.1 Clauses (i) and (ii): the hypotheses of [F2] are the data of the statement ($L$-periodic $C^2_t,C^4_x$ solution of the wave equation with finite $M,M_2$, and sampled initial data), and step 1.1 identifies the mechanical chain with the chain of [F1]; applying [F2] gives the existence and uniqueness of $q$ and the four displayed bounds, hence the nodal and interpolation convergence. [step 1.1, F1, F2]

3.1 Reading: the bounds of step 2.1 are uniform in $N= L/a$ and explicit in the smoothness data of $u$, so the continuum string model with speed $c$ is the proved limit of the mechanical chain in the stated regime; the dispersion identity of step 1.2 shows the discrete model carries a $O(a^2)$ correction absent from the continuum model. Nothing is asserted beyond the hypotheses: nonlinear springs, rough data and non-periodic boundary conditions are outside this theorem, and no measured value of $\rho_\ell$ or $\tau_s$ is used. [step 2.1, step 1.2, algebra] ∎

## Remarks

- **What the limit does and does not say.** The theorem compares the chain to
  a solution of the continuum wave equation and quantifies the difference;
  it does not derive the wave equation from Newton's laws alone, because the
  mass and stiffness scaling $m=\rho_\ell a$, $k_s=\tau_s/a$ is part of the
  adopted correspondence between discrete and continuum data, and the smooth
  periodic comparison class selects the regime. The string model is an
  idealization of the discrete mechanical system, with the stated error.

- **Exact solutions of the string model.** The chain-limit comparison
  presupposes a smooth solution $u$; the companion theorem of this page
  supplies such solutions from data (d'Alembert formula, fixed-end modes and
  the sine-series solution), so the two items together give a complete
  conditional statement about the string model and its discrete counterpart.
