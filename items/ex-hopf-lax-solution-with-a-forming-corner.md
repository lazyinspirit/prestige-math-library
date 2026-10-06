---
id: ex-hopf-lax-solution-with-a-forming-corner
kind: example
title: A Hopf--Lax solution with a forming corner from smooth data
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation
- cor-hopf-lax-preserves-a-modulus-of-continuity
- def-characteristic-crossing-and-caustic-for-first-order-pde
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- thm-intermediate-value
- cor-mean-value-theorem
- thm-derivative-of-exponential
- thm-chain-rule
- thm-algebra-of-derivatives
- lem-exponential-dominates-one-plus-x
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Example 2.4 and Section 5.4, printed pp. 67--68
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 1, characteristic crossing and caustics, printed pp. 2--6
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $H(p)=p^2/2$, $L(v)=v^2/2$, and $u_0(x)=e^{-x^2}-1$. Then $u_0$ is
smooth, bounded and uniformly continuous, with
$p_0(y):=u_0'(y)=-2ye^{-y^2}$ and $u_0''(y)=(4y^2-2)e^{-y^2}$. The
characteristic projection is $X_t(y)=y+tp_0(y)=y-2tye^{-y^2}$, and its lifted
value is $Z_t(y)=u_0(y)+\tfrac t2p_0(y)^2$. For $0\le t<\tfrac12$, $X_t$ is a
diffeomorphism of $\mathbb R$, and $u_{\rm cl}(X_t(y),t)=Z_t(y)$ is the
classical characteristic solution. At $t=\tfrac12$, $X_t'(0)=0$; for
$t>\tfrac12$, putting $s_t=\sqrt{\log(2t)}$ gives
$X_t(-s_t)=X_t(0)=X_t(s_t)=0$, so the characteristic projection is no longer
injective and its single-valued classical graph breaks down. The Hopf--Lax
formula
$$u(x,t)=\inf_{y\in\mathbb R}\left\{e^{-y^2}-1+\frac{|x-y|^2}{2t}\right\},\qquad t>0,$$
is finite, satisfies $-1\le u(x,t)\le0$, is uniformly continuous in $x$, and is
a viscosity solution of $u_t+\tfrac12u_x^2=0$ with initial datum $u_0$
([[thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation]],
[[cor-hopf-lax-preserves-a-modulus-of-continuity]]). For each fixed
$t>\tfrac12$, the minimisers at $x=0$ are exactly $y=\pm s_t$, and
$$u(0,t)=\frac{1+\log(2t)}{2t}-1.$$
For $x>0$ sufficiently close to $0$, the unique minimiser tends to $s_t$ as
$x\downarrow0$; for $x<0$ sufficiently close to $0$, it tends to $-s_t$ as
$x\uparrow0$. Thus the one-sided spatial derivatives tend to $-s_t/t$ from the
right and $s_t/t$ from the left, so $u(\cdot,t)$ is continuous but has a corner
at $x=0$.

## Verification

**Given:** The Hamiltonian $H(p)=p^2/2$ with Lagrangian $L(v)=v^2/2$, the datum $u_0(y)=e^{-y^2}-1$, its derivatives $p_0=u_0'$, $u_0''$, the characteristic data $X_t(y)=y+tp_0(y)$, $Z_t(y)=u_0(y)+\frac t2p_0(y)^2$, and the Hopf--Lax function $u=Q_tu_0$ ([[def-hopf-lax-operator]], [[def-characteristic-crossing-and-caustic-for-first-order-pde]]).

[F1] $Q_tu_0$ satisfies the bounds $-1\le Q_tu_0\le0$, is spatially uniformly continuous, and is a viscosity solution with datum $u_0$ ([[cor-hopf-lax-preserves-a-modulus-of-continuity]], [[thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation]]); the defining infimum is attained ([[lem-hopf-lax-infima-localise]]).

[F2] Differentiation rules for the elementary functions give $p_0(y)=-2ye^{-y^2}$, $p_0'(y)=(4y^2-2)e^{-y^2}$, and $X_t'(y)=1+tp_0'(y)=1-2te^{-y^2}+4ty^2e^{-y^2}$ ([[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

[F3] A continuous scalar function takes every value between its endpoint values ([[thm-intermediate-value]]), and for a differentiable scalar function on an interval there is a mean-value point ([[cor-mean-value-theorem]]). The bound $e^{y^2}\ge1+y^2$ from [[lem-exponential-dominates-one-plus-x]] gives $|y|e^{-y^2}\le|y|/(1+y^2)\to0$. The exponential is smooth and the elementary chain and algebra rules apply ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

**Proof technique:** explicit characteristic and minimiser computations.

1.1 Classical solution before the first singular time. For $0\le t<1/2$, [F2] gives $X_t'(y)\ge1-2t>0$. The mean value theorem [F3] makes $X_t$ strictly increasing, and $X_t(y)-y=-2tye^{-y^2}\to0$ at both infinities, so the intermediate value theorem gives a unique inverse $Y(x,t)$. This inverse is continuous jointly: near any fixed $(x,t)$, $X_t'$ has a positive lower bound, and the mean value theorem bounds changes in $Y$ by changes in $x$ and in $X_t(Y)$. Differentiating the identity $x=Y+tp_0(Y)$ by difference quotients then gives $Y_x=(1+tp_0'(Y))^{-1}$ and $Y_t=-p_0(Y)/(1+tp_0'(Y))$, continuously. Thus $u_{\rm cl}(x,t)=u_0(Y)+(t/2)p_0(Y)^2$ is $C^1$, with $u_{{\rm cl},x}=p_0(Y)$ and $u_{{\rm cl},t}=-p_0(Y)^2/2$, by substitution of these derivatives. It solves the equation and has the initial datum $u_0$. [F2, F3, algebra]

1.2 Breakdown of the projection. At $t=\tfrac12$ we have $X_t'(0)=1-2t=0$. For $t>\tfrac12$ put $s_t=\sqrt{\log(2t)}>0$; then $e^{-s_t^2}=1/(2t)$, so $X_t(\pm s_t)=\pm s_t-2t(\pm s_t)/(2t)=0=X_t(0)$, and the projection is not injective; it is locally decreasing near $y=0$ because $X_t'(0)=1-2t<0$. The loss of rank at $t=1/2$, $y=0$, is the caustic of [[def-characteristic-crossing-and-caustic-for-first-order-pde]]; the later equal projections show global folding, without asserting local noninjectivity at $y=0$ for $t>1/2$. [F2, algebra]

2.1 Bounds, minimisers at $x=0$, and the corner. By [F1] the Hopf--Lax function is finite, $-1\le u\le0$ and uniformly continuous in $x$. For $g_t(y):=e^{-y^2}-1+y^2/(2t)$ we have $g_t'(y)=y(1/t-2e^{-y^2})$, so for $t>\tfrac12$ the critical points are $0,\pm s_t$, with $g_t''(0)=1/t-2<0$ and $g_t''(\pm s_t)=2s_t^2/t>0$; since $g_t(y)\to\infty$ as $|y|\to\infty$ and $g_t(\pm s_t)=-1+(1+\log(2t))/(2t)<0=g_t(0)$ (since $g_t'(y)<0$ for $0<y<s_t$ and [F3] makes $g_t$ strictly decreasing there), the global minimisers of $g_t$ are exactly $\pm s_t$, and the value is $(1+\log(2t))/(2t)-1$. For $G_t(x,y):=u_0(y)+(x-y)^2/(2t)$ any minimiser obeys $|x-y|\le\sqrt{2t}$, so all minimisers for $|x|\le1$ lie in a fixed compact interval. For every neighbourhood of $\{-s_t,s_t\}$, the complement in this interval has a positive gap above $\min g_t$ by continuity and compact attainment [F1]; uniform convergence $G_t(x,\cdot)\to g_t$ on the interval forces every minimiser into that neighbourhood for all sufficiently small $|x|$. since $G_t(x,y)-G_t(x,-y)=-2xy/t$, a minimiser cannot be negative when $x>0$ nor positive when $x<0$, and $y=0$ is not a minimiser for $x\ne0$ because $\partial_yG_t(x,0)=-x/t\ne0$. Hence all minimisers have the sign of $x$ and, as $x\downarrow0$, they converge to $s_t$ (and to $-s_t$ as $x\uparrow0$). The stationarity equation is $x=F_t(y):=y-2tye^{-y^2}$ with $F_t'(\pm s_t)=2s_t^2>0$, so on small intervals around $\pm s_t$, $F_t'$ is bounded below by a positive constant. The mean value and intermediate value theorems [F3] give a unique local inverse there, and its difference quotient has derivative $1/F_t'(y)$, which is continuous. Since every minimiser is on the corresponding interval for small $|x|$, this inverse is the unique $C^1$ minimising branch on each punctured side. Along a branch the envelope derivative is $u_x=(x-y(x))/t$, whose one-sided limits are $-s_t/t$ (from the right) and $s_t/t$ (from the left); these unequal finite limits show that $u(\cdot,t)$ has a corner at $x=0$ while remaining continuous. [step 1.1, step 1.2, F1, F2, F3, algebra] ∎

## Remarks

- **What is claimed.** The computation identifies the minimisers and the
  one-sided derivatives at the corner; it does not assert local noninjectivity
  of $X_t$ near $y=0$, where $X_t'(0)<0$ and the map is locally decreasing, and
  it does not claim that the classical solution extends past $t=\tfrac12$.
