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

For a real standard-form problem with $A\in\mathbb R^{m\times n}$ and candidate vectors $x\in\mathbb R^n$, $y\in\mathbb R^m$, define $r_p=Ax-b$, $r_d=c-A^{\mathsf T}y$, and $g=c^{\mathsf T}x-b^{\mathsf T}y$. When the data and candidates are finite stored binary floating-point values, [[alg-revised-simplex-residual-audit]] computes precisely these quantities, interpreting the stored values as exact dyadic rationals. For all the stated real data,
$$g=x^{\mathsf T}r_d+y^{\mathsf T}r_p,$$
and consequently
$$|g|\le \|x\|_1\|r_d\|_\infty+\|y\|_1\|r_p\|_\infty.$$
Here $\|z\|_1=\sum_i|z_i|$ and $\|z\|_\infty=\max_i|z_i|$, with both norms equal to zero on the empty vector. This bounds the primal-dual objective difference; when either vector is infeasible it does not bound distance to an optimal value. If $Ax=b$, $x\ge0$, $c-A^{\mathsf T}y\ge0$, and $g=0$, then $x$ is optimal.

## Facts & Assumptions

**Given:** A real standard-form problem, dimension-matched real vectors $x,y$, and the residuals and gap defined in the Statement.

[F1] [[def-revised-simplex-standard-form-linear-program]]: Its feasible set is $P(A,b)=\{x\in\mathbb R^n:Ax=b,\ x_j\ge0\text{ for every }j\}$, and a feasible $x$ is optimal if $c^{\mathsf T}x\le c^{\mathsf T}z$ for every $z\in P(A,b)$.

[F2] [[alg-revised-simplex-residual-audit]]: For dimension-matched finite stored binary data and candidates, exact integer/rational arithmetic computes $r_p=A\hat x-b$, $r_d=c-A^{\mathsf T}\hat y$, and $g=c^{\mathsf T}\hat x-b^{\mathsf T}\hat y$. The status `verified-optimal-for-stored-data` is returned exactly when $\hat x\ge0$, $r_p=0$, $r_d\ge0$, and $g=0$.

## Proof


1.1 Expanding the right-hand side and cancelling the two equal scalar products gives $x^{\mathsf T}(c-A^{\mathsf T}y)+y^{\mathsf T}(Ax-b)=c^{\mathsf T}x-b^{\mathsf T}y=g$. [given, algebra]

2.1 The triangle inequality and $|x^{\mathsf T}r_d|\le\sum_i|x_i|\|r_d\|_\infty$ give $|g|\le\|x\|_1\|r_d\|_\infty+\|y\|_1\|r_p\|_\infty$. The same calculation holds for empty vectors with the stated zero norms. [given, step 1.1, algebra]

3.1 If $x$ is primal feasible and $y$ has $A^{\mathsf T}y\le c$, then every feasible $z$ satisfies $c^{\mathsf T}z\ge y^{\mathsf T}Az=y^{\mathsf T}b$. The stated $g=0$ makes $c^{\mathsf T}x=y^{\mathsf T}b$, so $x$ attains this lower bound and is optimal. In particular, every `verified-optimal-for-stored-data` output of the audit certifies optimality for its stored data, because its exact tests are these hypotheses. [F1, F2, given, step 1.1, algebra] ∎
