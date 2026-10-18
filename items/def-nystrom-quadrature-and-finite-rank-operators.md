---
id: def-nystrom-quadrature-and-finite-rank-operators
kind: definition
title: Nyström quadrature operators and their reconstructed equations
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - alg-composite-midpoint-rule
  - def-continuous-real-functions-on-a-compact-metric-space
  - thm-c-k-complete-in-the-sup-metric
  - thm-heine-borel-rn
  - def-riemann-stieltjes-sum-and-integral
  - thm-continuous-implies-integrable
  - def-norm-and-normed-space
  - def-banach-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Method 3.12 and equations (3.18)–(3.23), printed pp. 60–61."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.4.1"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Chapter 1, §1.4.1, printed pp. 14–15."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $X:=C([0,1],\mathbb R)$ be the real continuous functions on $[0,1]$
([[def-continuous-real-functions-on-a-compact-metric-space]]) with the supremum
norm $\|u\|_\infty:=\sup_{0\le x\le1}|u(x)|$. The interval $[0,1]$ is a
nonempty compact metric space by [[thm-heine-borel-rn]]. Pointwise addition and real scalar multiplication preserve continuity. The supremum is finite by [[thm-c-k-complete-in-the-sup-metric]]; the pointwise absolute-value inequalities give $\|u+v\|_\infty\le\|u\|_\infty+\|v\|_\infty$ and $\|cu\|_\infty=|c|\|u\|_\infty$, and $\|u\|_\infty=0$ holds exactly when $u=0$. Thus this is a real norm ([[def-norm-and-normed-space]]). Its induced metric is the complete supremum metric of [[thm-c-k-complete-in-the-sup-metric]], so $X$ is Banach ([[def-banach-space]]). Fix a continuous real kernel
$k:[0,1]^2\to\mathbb R$. The integral $\int_0^1$ below is the ordinary Riemann
integral, equivalently the Riemann–Stieltjes integral with integrator $y\mapsto y$
([[def-riemann-stieltjes-sum-and-integral]]). For $u\in X$, define
$$(Ku)(x):=\int_0^1 k(x,y)u(y)\,dy,\qquad 0\le x\le1.$$
The integrand is continuous in $y$, so this integral exists by
[[thm-continuous-implies-integrable]].

A finite quadrature rule on $[0,1]$ consists of an integer $m\ge1$, nodes
$y_1,\ldots,y_m\in[0,1]$, and real weights $w_1,\ldots,w_m$. It acts on a
function $g$ defined at the nodes by
$$Q(g):=\sum_{j=1}^m w_jg(y_j).$$
Its Nyström operator is the finite-sum rule
$$(K_Q u)(x):=Q\bigl(k(x,\cdot)u(\cdot)\bigr)        =\sum_{j=1}^m w_jk(x,y_j)u(y_j).$$
In particular, for the composite midpoint rule with $N\ge1$ panels,
$h:=1/N$, $y_j:=(j+\tfrac12)h$ for $0\le j<N$, and $w_j=h$, the operator
is denoted $K_N$. The nodes and weights are those of
[[alg-composite-midpoint-rule]].

For a right-hand side $f\in X$, the Nyström equation is
$$u_Q-K_Qu_Q=f.$$
This definition asserts neither consistency nor convergence of $K_Q$ to $K$.
