---
id: thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation
kind: theorem
title: The Hopf--Lax formula solves the Hamilton--Jacobi Cauchy problem
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- thm-hopf-lax-dynamic-programming-semigroup
- lem-finite-valued-convex-hamiltonian-equals-its-biconjugate
- cor-hopf-lax-preserves-a-modulus-of-continuity
- cor-hopf-lax-is-a-contraction-in-the-supremum-norm
- def-viscosity-subsolution-and-supersolution
- def-metric-uniform-continuity
- thm-comparison-for-autonomous-convex-superlinear-hamiltonians
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2 Section 5.4, assumptions (2.18), Theorem 2.23 and its complete proof, printed pp. 67--68. The direct viscosity verification is supplied here; Theorem 2.22, printed p. 67, records the related path value function result.
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Sections 2--3, first-order jets and viscosity test definitions, printed pp. 6--12 (test-function background); the Hopf--Lax verification is proved locally.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $H:\mathbb R^n\to\mathbb R$ be finite-valued, continuous, convex, and
superlinear, with Legendre transform $L$, and let
$u_0:\mathbb R^n\to\mathbb R$ be bounded and uniformly continuous. Define
$u(x,t):=Q_tu_0(x)$ by [[def-hopf-lax-operator]]. Then $u$ is a bounded
uniformly continuous function on $\mathbb R^n\times[0,T]$ for every $T>0$, and:
(1) $u$ is a viscosity solution of $u_t+H(Du)=0$ in
$\mathbb R^n\times(0,\infty)$; (2) $u$ attains the initial datum locally
uniformly,
$$\sup_{x\in K}|u(x,t)-u_0(x)|\longrightarrow0\qquad(t\downarrow0)$$
for every compact $K\subseteq\mathbb R^n$; (3) $u$ is the unique bounded
uniformly continuous viscosity solution of the Cauchy problem with datum
$u_0$; (4) $u$ satisfies the dynamic-programming relation
$Q_{t+s}u_0=Q_tQ_su_0$ of
[[thm-hopf-lax-dynamic-programming-semigroup]]. No choice principle is used.

## Facts & Assumptions

**Given:** A finite continuous convex superlinear $H$ with Legendre transform $L$, a bounded uniformly continuous datum $u_0$ with bounded modulus $\omega$ (replace any given modulus by its minimum with $2\|u_0\|_\infty$), and $u=Q_tu_0$.

[F1] For $t>0$, $Q_tu_0(x)=\inf_y\{u_0(y)+tL((x-y)/t)\}$, the infimum being attained, and $L$ is real-valued on $\mathbb R^n$ ([[def-hopf-lax-operator]], [[lem-hopf-lax-infima-localise]]).

[F2] $Q_{t+s}u_0=Q_t(Q_su_0)$ for all $t,s\ge0$ ([[thm-hopf-lax-dynamic-programming-semigroup]]).

[F3] $H=L^*$, that is $H(p)=\sup_v(p\cdot v-L(v))$ ([[lem-finite-valued-convex-hamiltonian-equals-its-biconjugate]]).

[F4] $Q_tu_0$ has the modulus $\omega$ of $u_0$, and $|Q_tu_0(x)-Q_tv_0(x)|\le\|u_0-v_0\|_\infty$ ([[cor-hopf-lax-preserves-a-modulus-of-continuity]], [[cor-hopf-lax-is-a-contraction-in-the-supremum-norm]]).

[F5] Comparison for autonomous convex superlinear Hamiltonians: bounded uniformly continuous subsolutions and supersolutions of $u_t+H(Du)=0$ on $\mathbb R^n\times[0,T]$ with ordered continuous initial traces satisfy the comparison inequality ([[thm-comparison-for-autonomous-convex-superlinear-hamiltonians]]).

## Proof

**Proof technique:** the dynamic-programming inequality in both directions, the biconjugacy $H=L^*$, and comparison for uniqueness.

1.1 Boundedness and uniform continuity. For every $x$ and $t\ge0$ we have $\inf u_0-tH(0)\le u(x,t)\le\|u_0\|_\infty+tL(0)$: the upper bound is the competitor $y=x$ in [F1], and the lower bound follows from $L\ge-H(0)$. By [F4] the map $x\mapsto u(x,t)$ is uniformly continuous with modulus $\omega$ uniformly in $t$. For $t\ge s\ge0$, [F2] and [F4] give $|u(x,t)-u(x,s)|\le\|Q_{t-s}u_0-u_0\|_\infty$; and $\|Q_\tau u_0-u_0\|_\infty\to0$ as $\tau\downarrow0$, since $Q_\tau u_0\le u_0+\tau L(0)$ and $Q_\tau u_0(x)\ge u_0(x)-\sup_v\{\omega(\tau|v|)-\tau L(v)\}$, the supremum tending to $0$ as follows. For $a>0$, set $M=\|u_0\|_\infty$ and choose $A=(2M+1)/a$. Superlinearity and continuity of $L$ give $b\ge0$ with $L(v)\ge A|v|-b$ everywhere. If $\tau|v|\ge a$, then $\omega(\tau|v|)-\tau L(v)\le-1+b\tau$; if $\tau|v|<a$, then $L(v)\ge-H(0)$ gives the bound $\omega(a)+\tau H(0)$. Thus the limsup of the supremum is at most $\omega(a)$, which tends to zero as $a\downarrow0$; its liminf is at least zero by the competitor $v=0$ and $\omega(0)=0$. Hence $u$ is bounded and uniformly continuous on each strip $\mathbb R^n\times[0,T]$. [F1, F2, F4, algebra]

1.2 The subsolution inequality. Let $\phi\in C^1$ and let $u-\phi$ have a strict local maximum at $(x_0,t_0)$ with $t_0>0$. Fix $v\in\mathbb R^n$ and small $h>0$, put $y:=x_0-hv$, and use the dynamic-programming identity $u(x_0,t_0)=Q_h(Q_{t_0-h}u_0)(x_0)\le u(y,t_0-h)+hL(v)$, the inequality coming from the competitor $y$ in the infimum defining $Q_h$. The contact inequality at $(x_0,t_0)$ gives $u(y,t_0-h)\le u(x_0,t_0)-\phi(x_0,t_0)+\phi(y,t_0-h)$, and combining the two gives $\phi(x_0,t_0)-\phi(x_0-hv,t_0-h)\le hL(v)$. Dividing by $h$ and letting $h\downarrow0$ yields $\phi_t(x_0,t_0)+\langle D\phi(x_0,t_0),v\rangle\le L(v)$ for every $v$; taking the supremum over $v$ and using $H=L^*$ of [F3] gives $\phi_t(x_0,t_0)+H(D\phi(x_0,t_0))\le0$. Non-strict maxima are handled by strictification, so $u$ is a viscosity subsolution. [F2, F3, algebra]

2.1 The supersolution inequality. Let $u-\phi$ have a strict local minimum at $(x_0,t_0)$ with $t_0>0$. By [F1] there is a minimiser $y$ of $u_0(y)+t_0L((x_0-y)/t_0)$; put $v:=(x_0-y)/t_0$, so that $u(x_0,t_0)=u_0(y)+t_0L(v)$. For $0<h<t_0$ put $z_h:=y+\frac{t_0-h}{t_0}(x_0-y)$, so that $(z_h-y)/(t_0-h)=v$ and $z_h\to x_0$. The dynamic-programming identity at $(z_h,t_0-h)$ with the competitor $y$ gives $u(z_h,t_0-h)\le u_0(y)+(t_0-h)L(v)=u(x_0,t_0)-hL(v)$, hence $u(x_0,t_0)-u(z_h,t_0-h)\ge hL(v)$. The contact inequality at the local minimum gives $u(z_h,t_0-h)\ge u(x_0,t_0)-\phi(x_0,t_0)+\phi(z_h,t_0-h)$; combining, $\phi(x_0,t_0)-\phi(z_h,t_0-h)\ge hL(v)$. Dividing by $h$ and letting $h\downarrow0$ along $z_h\to x_0$ gives $\phi_t(x_0,t_0)+\langle D\phi(x_0,t_0),v\rangle\ge L(v)$, and since $H(D\phi)=\sup_w(\langle D\phi,w\rangle-L(w))\ge\langle D\phi,v\rangle-L(v)$ by [F3], we get $\phi_t+H(D\phi)\ge0$. Hence $u$ is a viscosity supersolution, and with step 1.2 it is a viscosity solution of $u_t+H(Du)=0$. [F1, F2, F3, step 1.2, algebra]

2.2 The initial trace. For $\tau>0$ and every $x$, $Q_\tau u_0(x)\le u_0(x)+\tau L(0)$ and $Q_\tau u_0(x)\ge u_0(x)-\sup_v\{\omega(\tau|v|)-\tau L(v)\}$, and the latter supremum tends to $0$ by the bounded-modulus estimate in step 1.1; hence $\sup_{\mathbb R^n}|Q_\tau u_0-u_0|\to0$, which is the stated locally uniform (indeed uniform) attainment of the initial datum. [F1, step 1.1, algebra]

3.1 Uniqueness and the semigroup. Any bounded uniformly continuous viscosity solution of the Cauchy problem with datum $u_0$ is comparable with $u$ by [F5], in both orders, because both are bounded uniformly continuous and have the same continuous initial trace; hence $u$ is the unique such solution. Property (4) is [F2]. [step 1.2, step 2.1, F2, F5] ∎ 