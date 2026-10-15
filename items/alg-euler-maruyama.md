---
id: alg-euler-maruyama
kind: algorithm
title: "Euler–Maruyama recursion"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-axiom-of-choice, def-d-dimensional-brownian-motion]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Simo Särkkä and Arno Solin, Applied Stochastic Differential Equations, Algorithm 8.1"
      url: "https://users.aalto.fi/~asolin/sde-book/sde-book.pdf"
    - title: "Desmond J. Higham, Xuerong Mao, and Andrew M. Stuart, Strong Convergence of Euler-Type Methods for Nonlinear Stochastic Differential Equations, §2"
      url: "https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf"
    - title: "Tiejun Li, Lecture 16: Numerical SDEs: Basics, §1"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf"
---

## Definition

Assume the Axiom of Choice and use the finite-dimensional Brownian-motion
convention of [[def-d-dimensional-brownian-motion]]. Let the state dimension
$d$ and noise dimension $m$ be positive finite integers, and fix $T>0$ and
$N\in\mathbb N$ with $N\ge1$. Set $h=T/N>0$ and $t_k=kh$ for
$0\le k\le N$. Let
$b:[0,T]\times\mathbb R^d\to\mathbb R^d$ and
$\sigma:[0,T]\times\mathbb R^d\to\mathbb R^{d\times m}$ be jointly Borel.
Write $|\cdot|$ for the Euclidean norm and $\|\cdot\|_F$ for the Frobenius
norm. Suppose finite constants $L,K$ satisfy, for every $s,t\in[0,T]$ and
$x,y\in\mathbb R^d$,
$$|b(t,x)-b(t,y)|+\|\sigma(t,x)-\sigma(t,y)\|_F\le L|x-y|,$$
$$|b(t,x)|^2+\|\sigma(t,x)\|_F^2\le K^2(1+|x|^2),$$
and
$$|b(t,x)-b(s,x)|+\|\sigma(t,x)-\sigma(s,x)\|_F\le K(1+|x|)|t-s|^{1/2}.$$
Let $W$ be an adapted standard $m$-dimensional Brownian motion on a filtered
probability space, with $W_t-W_s$ independent of $\mathcal F_s$ and law
$N_m(0,(t-s)I_m)$ whenever $0\le s<t\le T$. Let $X_0$ be
$\mathcal F_0$-measurable, independent of future Brownian increments, and
$\mathbb E|X_0|^2<\infty$.

The **Euler–Maruyama algorithm** takes these data as input and returns
$Y_0,\ldots,Y_N$:

1. Set $Y_0=X_0$.
2. For $k=0,\ldots,N-1$, form $\Delta W_k=W_{t_{k+1}}-W_{t_k}$ and set
   $$Y_{k+1}=Y_k+b(t_k,Y_k)h+\sigma(t_k,Y_k)\Delta W_k.$$

The output is the grid approximation for the coefficient pair $(b,\sigma)$.
The companion step-process and interpolation definition uses this same grid
and endpoint convention.

## Remarks

This algorithm defines finite-dimensional recursions. Its definition alone
does not assert a convergence rate, density regularity, or a path-supremum
moment bound.
