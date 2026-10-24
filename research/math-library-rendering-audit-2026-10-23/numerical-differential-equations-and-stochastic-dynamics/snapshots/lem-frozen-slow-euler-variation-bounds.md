---
id: lem-frozen-slow-euler-variation-bounds
title: "Block variation bounds for a frozen-slow Euler step"
kind: lemma
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-frozen-slow-explicit-fast-euler
  - def-first-order-ode-initial-value-problem-and-solution
  - def-vector-valued-derivative-and-integral
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-monotonicity-of-the-integral
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael Günther and Adrian Sandu, Multirate Methods for Ordinary Differential Equations, CSL-TR-25-5 (2025)"
      url: "https://vtechworks.lib.vt.edu/bitstreams/107ab78d-834d-44a8-9cc8-566d7f2a2911/download"
    - title: "Michael Günther, Numerical Analysis and Simulation I — Ordinary Differential Equations, Chapter 4: Multirate Schemes (lecture notes, 2017/18)"
      url: "https://acm.uni-wuppertal.de/fileadmin/mathe/www-num/teaching/ode_1819/script_1819.pdf"
---

## Statement

Let $r,s,m$ be positive integers, $H>0$, $h=H/m$, $\Omega\subseteq\mathbb R^{r+s}$ open, and let $F=(f,g):\Omega\to\mathbb R^r\times\mathbb R^s$ be continuous. Use the product Euclidean norm $\|(x,z)\|_2^2=\|x\|_2^2+\|z\|_2^2$. Let $S\subseteq\Omega$, and suppose $\|F(u)\|_2\le M$ for all $u\in S$, where $M\ge0$. Let $U:[0,H]\to\Omega$ be an exact solution of $U'=F(U)$, and run [[alg-frozen-slow-explicit-fast-euler]] from $U(0)=(x_0,z_0)$ with $U([0,H])\subseteq S$ and every frozen state $(x_0,z_j)\in S$. Then
$$\|U(b)-U(a)\|_2\le M(b-a)\quad(0\le a\le b\le H),\qquad \|z_j-z_0\|_2\le jhM\quad(0\le j\le m).$$

## Facts & Assumptions

**Given:** The dimensions, macro and micro steps, field bound, exact solution, and admissible microstates in the Statement.

[F1] View the autonomous field as $\widehat F(t,u):=F(u)$ on $\mathbb R\times\Omega$. An exact IVP solution then satisfies its Volterra equation on every subinterval, with the value at the left endpoint as initial data ([[def-first-order-ode-initial-value-problem-and-solution]], [[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[F2] For an integrable vector field on an increasing interval, $\|\int_a^b V(t)\,dt\|_2\le\int_a^b\|V(t)\|_2$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F3] At each fast-loop iteration whose pre-update state $(x_0,z_j)$ lies in $D$, the procedure sets $z_{j+1}=z_j+h g(x_0,z_j)$, with the same frozen $x_0$ at every microstep ([[alg-frozen-slow-explicit-fast-euler]]). If all $m$ pre-update states lie in $D$, all loop updates are performed even when the final state $(x^+,z_m)$ is outside $D$ and the procedure consequently returns `domain-exit`.

[F4] If an integrable real-valued function $w$ satisfies $0\le w\le C$ on $[a,b]$, then $\int_a^b w\le C(b-a)$ ([[thm-monotonicity-of-the-integral]], claim 3).

[A1] $U([0,H])\subseteq S$ and every microstate $(x_0,z_j)$ belongs to $S$, where $F$ is bounded by $M$.

## Proof

1.1 Fix $0\le a\le b\le H$. If $a=b$, the oriented integral is zero and the bound holds. Suppose $a<b$. Apply [F1] to the restriction of $U$ with initial time $a$, then [F2], [A1], and [F4]: $$\|U(b)-U(a)\|_2=\left\|\int_a^b F(U(t))\,dt\right\|_2\le\int_a^b\|F(U(t))\|_2\,dt\le M(b-a).$$ Here $\|F(U(t))\|_2$ is integrable by [F2] and lies between $0$ and $M$ by [A1]. [F1, F2, F4, A1, algebra]

2.1 By [F3] and [A1], $\|z_{j+1}-z_j\|_2=h\|g(x_0,z_j)\|_2\le h\|F(x_0,z_j)\|_2\le hM$, since a block projection has norm at most the product norm. Starting with $z_0-z_0=0$ and summing these $j$ increments gives $\|z_j-z_0\|_2\le jhM$ for every $0\le j\le m$. [F3, A1, induction, algebra] ∎
