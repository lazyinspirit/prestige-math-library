---
id: cex-shrinking-rectangles-have-integral-one
kind: counterexample
title: "Shrinking rectangles converge pointwise to zero while every integral equals one"
status: published
origin: session
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-darboux-integral, thm-finitely-many-discontinuities-integrable, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, thm-additivity-over-subintervals, def-oriented-integral, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §4.4"
      url: "https://open.umn.edu/opentextbooks/textbooks/174"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** if Riemann-integrable functions on $[0,1]$ converge
pointwise to $0$, then their integrals converge to $0$.

For $k\in\mathbb{N}$ put $a_k:=\iota(k+1)$, the positive canonical natural in
$\mathbb{R}$, and define

$$r_k(x):=\begin{cases}a_k,&0<x\le1/a_k,\\0,&x=0\text{ or }1/a_k<x\le1.\end{cases}$$

Then $r_k\to0$ pointwise while $\int_0^1r_k=1$ for every $k$.

## Facts & Assumptions

**Given:** The functions $r_k$ in the Statement, with $a_k=\iota(k+1)>0$.

[L1] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$; canonical naturals increase and their positive reciprocals decrease ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] A bounded function on a closed interval with only finitely many possible discontinuities is Riemann integrable ([[thm-finitely-many-discontinuities-integrable]], [[def-darboux-integral]]).

[L3] Changing an integrable function at finitely many points preserves its integrability and integral ([[lem-changing-a-function-at-finitely-many-points]]).

[L4] A constant $c$ has integral $c(v-u)$ on $[u,v]$, and integrals add over adjacent subintervals, including the oriented convention at coincident endpoints ([[lem-integral-elementary-bounds]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L5] Pointwise convergence of $(f_k)$ to $f$ means that for every $x$ and every $\varepsilon>0$ there is an $N$ such that $k\ge N$ implies $|f_k(x)-f(x)|<\varepsilon$; uniform convergence requires one such $N$ for every $x$ simultaneously ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $r_k$ is bounded and is continuous except possibly at $0$ and $1/a_k$, so it is integrable by [L2]. [L2]

1.2 Let $q_k$ equal $a_k$ on $[0,1/a_k]$ and $0$ on $(1/a_k,1]$. The functions $q_k$ and $r_k$ differ only at $0$, so they have the same integral by [L3]. [L3, construct]

1.3 At $x=0$ one has $r_k(0)=0$ for all $k$. If $x>0$, choose $N$ with $1/\iota(N)<x$; for $k\ge N$, monotonicity of the canonical naturals gives $1/a_k<x$, hence $r_k(x)=0$. Thus $r_k\to0$ pointwise. [L1, L5, choose]

1.4 To see explicitly that the convergence is not uniform, take $\varepsilon:=1/2$. For every proposed $N\in\mathbb N$, choose $k:=N$ and $x_N:=1/a_N$; then $|r_N(x_N)-0|=a_N\ge1>\varepsilon$. Thus the uniform quantifier condition in [L5] fails. [given, L1, L5]

2.1 By [L3] and [L4], endpoint values do not affect either piece, and splitting at $1/a_k$ when it lies in the interior, with the coincident-endpoint convention otherwise, gives $\int_0^1q_k=a_k(1/a_k)+0=1$. [step 1.2, L3, L4, algebra]

3.1 Steps 1.2 and 2.1 give $\int_0^1r_k=1$ for every $k$, whereas the integral of the zero function is $0$. [step 1.2, step 2.1, L3, L4]

4.1 The sequence therefore converges pointwise to $0$ but its integrals do not converge to the integral of the limit, refuting the claim. [step 1.3, step 3.1] ∎
