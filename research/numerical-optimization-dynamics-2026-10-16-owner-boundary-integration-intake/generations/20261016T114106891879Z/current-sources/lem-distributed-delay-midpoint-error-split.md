---
id: lem-distributed-delay-midpoint-error-split
kind: lemma
title: "Distributed-delay midpoint error separates history and quadrature errors"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-distributed-delay-equation-and-window-integral
  - alg-distributed-delay-composite-midpoint-rule
  - lem-piecewise-linear-delay-history-error
  - thm-norm-inequality-for-the-vector-valued-integral
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
    - title: "Roland Pulch, Equivalent Systems for Differential Equations with Polynomially Distributed Delay, version 3"
      url: "https://arxiv.org/pdf/2408.09861v3"
---

## Statement

Let $I_K[y](t)$ be the distributed-delay integral from
[[def-distributed-delay-equation-and-window-integral]], let $h=\tau/m$, and
let $r$ be a positive multiple of $m$ with $\Delta=\tau/r$. At a grid query
time $t_n$, suppose the exact integrand
$g_n(\theta)=K(\theta)y(t_n-\theta)$ is $C^2$ on every quadrature cell with
$\|g_n''(\theta)\|_2\le M_g$, including one-sided endpoint derivatives. If
$\sup_{s\in[-\tau,T]}\|\widehat y_h(s)-y(s)\|_2\le E_h$, then the composite
midpoint rule of [[alg-distributed-delay-composite-midpoint-rule]] satisfies
$$\|I_K[y](t_n)-\widehat I_{K,h,r}(t_n)\|_2\le E_h\Delta\sum_{j=0}^{r-1}|K(\theta_j)|+\frac{M_g\tau\Delta^2}{24}.$$
Thus the first term is the error from the stored history at the quadrature
nodes, while the second is the quadrature remainder for the exact history. In
particular, [[lem-piecewise-linear-delay-history-error]] supplies
$E_h\le E+Mh^2/8$ under its piecewise-$C^2$ hypotheses.

## Facts & Assumptions

**Given:** A continuous kernel, the exact and stored histories, the grid-aligned composite midpoint rule, and the cellwise bound on $g_n''$.

[F1] The distributed-delay integral is $I_K[y](t)=\int_0^\tau K(\theta)y(t-\theta)\,d\theta$ ([[def-distributed-delay-equation-and-window-integral]]).

[F2] The algorithm evaluates $\widehat I_{K,h,r}(t_n)=\Delta\sum_{j<r}K(\theta_j)\widehat y_h(t_n-\theta_j)$ at midpoint nodes $\theta_j=(j+1/2)\Delta$ ([[alg-distributed-delay-composite-midpoint-rule]]).

[F3] The stored history has the cellwise error $\sup_s\|\widehat y_h(s)-y(s)\|_2\le E_h$; one sufficient bound is $E_h=E+Mh^2/8$ ([[lem-piecewise-linear-delay-history-error]]).

[F4] The norm of a vector integral is at most the integral of the norm, and a bounded derivative makes a vector function Lipschitz ([[thm-norm-inequality-for-the-vector-valued-integral]], [[cor-vector-valued-ftc-and-lipschitz-bound]]).

[F5] The Euclidean norm satisfies the triangle inequality ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

1.1 For each quadrature cell with midpoint $c_j$, the bound on $g_n''$ and [F4] give $g_n(\theta)=g_n(c_j)+(\theta-c_j)g_n'(c_j)+R_j(\theta)$ with $\|R_j(\theta)\|_2\le M_g|\theta-c_j|^2/2$. The linear term integrates to zero on the symmetric cell, so the error of this cell's midpoint rule is at most $\int_{-\Delta/2}^{\Delta/2}M_g s^2/2\,ds=M_g\Delta^3/24$. Summing the $r$ cell errors by [F5] gives $\|I_K[y](t_n)-\Delta\sum_{j<r}g_n(\theta_j)\|_2\le M_g r\Delta^3/24=M_g\tau\Delta^2/24$. [F1, F4, F5, given, algebra]

1.2 By [F2], [F3], and the triangle inequality [F5], the difference between the exact-history midpoint sum and the stored-history midpoint sum is bounded by $\Delta\sum_{j<r}|K(\theta_j)|\|y(t_n-\theta_j)-\widehat y_h(t_n-\theta_j)\|_2\le E_h\Delta\sum_{j<r}|K(\theta_j)|$. [F2, F3, F5, algebra]

2.1 The triangle inequality [F5] applied to steps 1.1 and 1.2 gives the stated sum of the history interpolation error and the exact-history quadrature remainder. [F5, step 1.1, step 1.2, algebra] ∎

