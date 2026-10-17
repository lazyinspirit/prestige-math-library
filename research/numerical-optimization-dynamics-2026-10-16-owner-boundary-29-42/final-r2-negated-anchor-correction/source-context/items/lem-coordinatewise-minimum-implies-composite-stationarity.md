---
id: lem-coordinatewise-minimum-implies-composite-stationarity
kind: lemma
title: "Coordinatewise minima of a separable convex composite are global minima"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-proper-closed-convex-function-on-rn
  - def-extended-real-epsilon-subdifferential
  - def-euclidean-inner-product
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - thm-gradient-represents-directional-derivatives-and-steepest-ascent
  - thm-differentiable-convex-functions-and-gradient-inequality
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "P. Tseng, Convergence of a Block Coordinate Descent Method for Nondifferentiable Minimization, §4"
      url: "https://www.mit.edu/~dimitrib/PTseng/papers/archive/bcr_jota.pdf"
    - title: "Stephen J. Wright, Coordinate Descent Algorithms, §3.3"
      url: "https://arxiv.org/html/1502.04759v1"
---

## Statement

Let $f:\mathbb R^d\to\mathbb R$ be differentiable and convex, and let $B_1,\ldots,B_n$ be a partition of the coordinate labels $\{1,\ldots,d\}$ into nonempty blocks, with $n\ge1$. Let $g(x)=\sum_{i=1}^n g_i(x_{B_i})$ be proper, closed and convex, with each $g_i$ proper, closed and convex on its block. Set $F=f+g$. If $F(x)<+\infty$ and $x$ globally minimizes every block slice $u\mapsto F(x_{-i},u)$, where $(x_{-i},u)$ means replace block $B_i$ of $x$ by $u$ and keep all other blocks fixed, then
$$-\nabla_i f(x)\in\partial g_i(x_{B_i})\quad(1\le i\le n),\qquad -\nabla f(x)\in\partial g(x),$$
and $x$ is a global minimizer of $F$. For an extended-real convex $h$, $p\in\partial h(a)$ means $h(z)\ge h(a)+\langle p,z-a\rangle$ for every $z$.

## Facts & Assumptions

**Given:** The finite block partition, the functions and the coordinatewise minimizing point in the Statement.

[F1] [[def-extended-real-epsilon-subdifferential]]: $p\in\partial h(a)$ exactly when $h(z)\ge h(a)+\langle p,z-a\rangle$ for every $z$ in the full Euclidean space.

[F2] [[def-proper-closed-convex-function-on-rn]]: each $g_i$ is convex and has nonempty effective domain; closed epigraph is lower semicontinuity in this convention.

[F3] [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]: for a totally differentiable scalar function, the directional derivative in direction $v$ is $\langle\nabla f(x),v\rangle$.

[F4] [[thm-differentiable-convex-functions-and-gradient-inequality]]: convex differentiability gives $f(z)\ge f(x)+\langle\nabla f(x),z-x\rangle$.

[F5] Identify block label $j\in\{1,\ldots,d\}$ with standard coordinate $j-1$; let $U_i$ insert a block displacement into those coordinates, and define $\nabla_i f(x)$ as the entries of $\nabla f(x)$ on $B_i$, in increasing order. By [[lem-finite-sum-laws]] and [[def-euclidean-inner-product]], finite block sums add and the full inner product is the sum of the block inner products, so $\langle\nabla f(x),U_i h\rangle=\langle\nabla_i f(x),h\rangle$.

[A1] $f$ is differentiable and convex, $g=\sum_i g_i$ is proper closed convex, $F(x)<+\infty$, and $x$ minimizes each exact one-block slice.

## Proof

1.1 Fix a block $i$, a point $z_i$ with $g_i(z_i)<+\infty$, and put $h=z_i-x_{B_i}$. For $0<t<1$, block minimality and convexity of $g_i$ give $0\le f(x+U_i(th))-f(x)+g_i(x_{B_i}+th)-g_i(x_{B_i})\le f(x+U_i(th))-f(x)+t[g_i(z_i)-g_i(x_{B_i})]$. Rearranging, dividing by $t>0$, and taking $t\downarrow0$, [F3] and [F5] give $g_i(z_i)-g_i(x_{B_i})\ge-\langle\nabla f(x),U_i h\rangle=-\langle\nabla_i f(x),z_i-x_{B_i}\rangle$. For $g_i(z_i)=+\infty$ the same subgradient inequality is automatic. Thus $-\nabla_i f(x)\in\partial g_i(x_{B_i})$ by [F1]. [A1, F1, F2, F3, F5, given, algebra]

2.1 For any $z=(z_{B_i})_i$, sum the block inequalities from step 1.1; [F5] gives $g(z)\ge g(x)-\sum_i\langle\nabla_i f(x),z_{B_i}-x_{B_i}\rangle=g(x)-\langle\nabla f(x),z-x\rangle$. By [F1], this says $-\nabla f(x)\in\partial g(x)$. [F1, F5, step 1.1, algebra]

3.1 By [F4], $f(z)\ge f(x)+\langle\nabla f(x),z-x\rangle$. Adding the inequality in step 2.1 gives $F(z)\ge F(x)$ for every $z$, so $x$ is globally minimizing and all the stated stationarity inclusions hold. [A1, F4, step 2.1, algebra] ∎

