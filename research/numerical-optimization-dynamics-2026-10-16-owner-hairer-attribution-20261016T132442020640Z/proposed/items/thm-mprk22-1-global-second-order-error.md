---
id: thm-mprk22-1-global-second-order-error
kind: theorem
title: "MPRK22(1) has global second-order error on a compact positive tube"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-mprk22-1
  - thm-mprk22-1-positive-conservative
  - lem-mprk22-1-positive-tube-local-error-and-stability
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-finite-conservative-production-destruction-system
  - def-first-order-ode-initial-value-problem-and-solution
  - def-euclidean-inner-product
  - thm-global-error-from-one-step-defect-and-stability
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the proof applies a finite-grid error recurrence."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefan Kopecz and Andreas Meister, On order conditions for modified Patankar-Runge-Kutta schemes, §3.2"
      url: "https://arxiv.org/pdf/1702.04589"
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
verification:
  precheck: pass
---

## Statement

Let $T>0$, $N\ge1$, $h=T/N$, and $t_n=nh$. Use sets $U,V$ satisfying the domain and regularity hypotheses of [[lem-mprk22-1-positive-tube-local-error-and-stability]], and let $K\subset U$ be a compact positive tube. Let $y:[0,T]\to U$ solve the finite conservative PDS [[def-finite-conservative-production-destruction-system]], set $y_0=y(0)$, and compute each step with [[alg-mprk22-1]]. Suppose the exact solution, all numerical states, and every MPRK22(1) stage remain in the common compact tube $K$, and $h\le h_0$ for the local constants in that lemma. Then a constant $C_T$, independent of $N$, satisfies

$$\max_{0\le n\le N}\|y_n-y(t_n)\|_2\le C_T h^2.$$

This is a fixed-time, compact-tube convergence result; it does not assert a uniform error constant as the tube approaches a zero denominator or as stiffness parameters vary.

## Facts & Assumptions

**Given:** A solution of the finite PDS on $[0,T]$, exact initial data, the uniform grid, and the common-tube and step-size hypotheses above.

[F1] [[def-finite-conservative-production-destruction-system]]: the ODE has the paired internal transfer form used by the methods.

[F2] [[def-first-order-ode-initial-value-problem-and-solution]]: the exact trajectory solves the stated first-order IVP.

[F3] [[alg-mprk22-1]]: every step uses the Patankar Euler stage followed by the averaged-rate linear solve.

[F4] [[thm-mprk22-1-positive-conservative]]: positive inputs whose stage lies in $\Omega_+$ give uniquely defined positive stages and outputs for every $h>0$.

[F5] [[lem-mprk22-1-positive-tube-local-error-and-stability]]: on the stated smooth positive tube and for $h\le h_0$, the exact-start defect is bounded by $Ch^3$ and the step map has Lipschitz factor $1+Lh$.

[F6] [[thm-global-error-from-one-step-defect-and-stability]]: for a fixed uniform grid, exact initial data, a common compact tube containing all states and stages, a uniform exact-start defect $Ch^{p+1}$, and one-step factor $1+Lh$, the global error is bounded by its stated exponential recurrence estimate of order $h^p$.

## Proof

1.1 Since $K\subset U\subset\Omega\cap(0,\infty)^m$ and all iterates and stages remain in $K$, every rate evaluation in [F3], including the evaluation at each stage, is in $\Omega_+$; [F4] gives exact solvability and positivity independently of the order estimate. By [F5], the exact-start defect is uniformly at most $Ch^3$ and the one-step stability factor is $1+Lh$. The exact initial error is zero, and the common-tube assumption is exactly the remaining tube hypothesis of [F6]. [given, F1, F2, F3, F4, F5, F6]

2.1 Apply [F6] with $p=2$ and $C_0=0$. Its $L>0$ case gives $C(\exp(LT)-1)h^2/L$ and its $L=0$ case gives $CTh^2$. In either case the coefficient is independent of $N$, proving the asserted global $O(h^2)$ error. [F5, F6, step 1.1, algebra] ∎
