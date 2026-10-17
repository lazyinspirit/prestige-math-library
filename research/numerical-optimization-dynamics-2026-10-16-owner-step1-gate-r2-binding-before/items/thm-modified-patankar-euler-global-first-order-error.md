---
id: thm-modified-patankar-euler-global-first-order-error
kind: theorem
title: "Modified Patankar Euler converges globally with first-order error on a positive tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-modified-patankar-euler
  - def-finite-conservative-production-destruction-system
  - lem-modified-patankar-euler-positive-tube-local-error-and-stability
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-first-order-ode-initial-value-problem-and-solution
  - def-euclidean-inner-product
  - thm-global-error-from-one-step-defect-and-stability
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; this is a finite-grid error recurrence."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobias Embree, Lecture Notes on Numerical Analysis, global error analysis for one-step methods"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
verification:
  precheck: pass
---

## Statement

Let $T>0$, $N\ge1$, $h=T/N$, and $t_n=nh$. Let $y:[0,T]\to U$ solve the ODE of a finite conservative PDS [[def-finite-conservative-production-destruction-system]], where the rates are $C^2$ on an open neighborhood in $\Omega$ of the compact positive tube $K\subset U$ of [[lem-modified-patankar-euler-positive-tube-local-error-and-stability]]. Let $y_0=y(0)$ and obtain $y_{n+1}$ by [[alg-modified-patankar-euler]] with $\sigma_i=(y_n)_i$. Suppose the exact path and every numerical state lie in the common compact tube $K$, and $h\le h_0$ for the local constants in that lemma. Then there is a constant $C_T$, independent of $N$, such that

$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le C_T h.$$

The conclusion is conditional on the stated positive compact tube; positivity and mass conservation alone do not establish that a trajectory remains in such a tube for a prescribed interval.

## Facts & Assumptions

**Given:** A solution of the finite PDS on $[0,T]$, exact initial data, a fixed uniform grid, and the assumption that exact and numerical states stay in the common compact positive tube $K$.

[F1] [[def-finite-conservative-production-destruction-system]]: the ODE has finite paired internal transfer rates.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact trajectory is a solution of the stated first-order IVP on its interval.

[F3] [[alg-modified-patankar-euler]]: the standard first-order step uses $\sigma_i=(y_n)_i$ and solves its frozen-rate linear system.

[F4] [[lem-modified-patankar-euler-positive-tube-local-error-and-stability]]: on $K$ and for $h\le h_0$, the exact-start defect is at most $Ch^2$ and the step map is Lipschitz with factor $1+Lh$.

[F5] [[thm-global-error-from-one-step-defect-and-stability]]: on a fixed grid and a common compact tube containing the exact path and numerical states, initial error $C_0h^p$, exact-start defect $Ch^{p+1}$, and one-step factor $1+Lh$ imply a uniform global $O(h^p)$ error with the stated exponential constant.

## Proof

1.1 The assumption $y_n\in K\subset(0,\infty)^m$ makes every standard denominator $\sigma_i=(y_n)_i$ positive, so [F3] is admissible at every step. By [F4] the local defect is bounded by $Ch^2$ and the one-step map has factor $1+Lh$, with constants independent of $n$ and $N$. The initial error is zero, and the tube hypothesis supplies the common-tube condition of [F5]. [given, F1, F2, F3, F4, F5]

2.1 Apply [F5] with $p=1$ and $C_0=0$. If $L>0$, its bound is $C(\exp(LT)-1)h/L$; if $L=0$, it is $CTh$. Both are $C_T h$ for a constant independent of $N$. [F5, step 1.1, algebra] ∎
