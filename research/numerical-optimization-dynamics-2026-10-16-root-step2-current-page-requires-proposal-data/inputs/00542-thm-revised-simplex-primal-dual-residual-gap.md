---
id: thm-revised-simplex-primal-dual-residual-gap
kind: theorem
title: "Primal-dual residual gap bound for a simplex candidate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-revised-simplex-standard-form-linear-program
  - alg-revised-simplex-residual-audit
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 2
proof_strategy: direct
sources:
  references:
    - title: "David Bindel, CS 6210: Sums, Dots, and Error in Linear Systems, residual-based bounds"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.1 and 4.3"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
---

## Statement

For a standard-form problem and finite candidate vectors $x,y$, let $r_p=Ax-b$, $r_d=c-A^{\mathsf T}y$, and $g=c^{\mathsf T}x-b^{\mathsf T}y$, as computed exactly by [[alg-revised-simplex-residual-audit]]. Then
$$g=x^{\mathsf T}r_d+y^{\mathsf T}r_p,$$
and consequently
$$|g|\le \|x\|_1\|r_d\|_\infty+\|y\|_1\|r_p\|_\infty.$$
Here $\|z\|_1=\sum_i|z_i|$ and $\|z\|_\infty=\max_i|z_i|$, with both norms equal to zero on the empty vector. This bounds the primal-dual objective difference for the stored data; when either vector is infeasible it does not bound distance to an optimal value. If $Ax=b$, $x\ge0$, $c-A^{\mathsf T}y\ge0$, and $g=0$, then $x$ is optimal.

## Facts & Assumptions

**Given:** A standard-form problem, finite $x,y$, and the exact audit outputs for those stored values.

[F1] [[def-revised-simplex-standard-form-linear-program]]: Its feasible set is $P(A,b)=\{x\in\mathbb R^n:Ax=b,\ x_j\ge0\text{ for every }j\}$, and a feasible $x$ is optimal if $c^{\mathsf T}x\le c^{\mathsf T}z$ for every $z\in P(A,b)$.

[F2] [[alg-revised-simplex-residual-audit]]: Otherwise use exact integer/rational arithmetic to compute $r_p=A\hat x-b$, $r_d=c-A^{\mathsf T}\hat y$, and $g=c^{\mathsf T}\hat x-b^{\mathsf T}\hat y$.

## Proof


1.1 Expanding the right-hand side and cancelling the two equal scalar products gives $x^{\mathsf T}(c-A^{\mathsf T}y)+y^{\mathsf T}(Ax-b)=c^{\mathsf T}x-b^{\mathsf T}y=g$. [F1, F2, algebra]

2.1 The triangle inequality and $|x^{\mathsf T}r_d|\le\sum_i|x_i|\|r_d\|_\infty$ give $|g|\le\|x\|_1\|r_d\|_\infty+\|y\|_1\|r_p\|_\infty$. The norms and residuals are exact values on the stored data, not tolerance-based tests. [step 1.1, F2, algebra]

3.1 If $x$ is primal feasible and $y$ has $A^{\mathsf T}y\le c$, then every feasible $z$ satisfies $c^{\mathsf T}z\ge y^{\mathsf T}Az=y^{\mathsf T}b$. The stated $g=0$ makes $c^{\mathsf T}x=y^{\mathsf T}b$, so $x$ attains this lower bound and is optimal. [F1, given, step 1.1, algebra] ∎
