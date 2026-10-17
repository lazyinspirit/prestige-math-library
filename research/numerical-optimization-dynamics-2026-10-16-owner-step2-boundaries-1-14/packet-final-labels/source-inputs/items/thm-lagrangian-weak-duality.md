---
id: thm-lagrangian-weak-duality
kind: theorem
title: Every Lagrangian dual feasible pair is a lower-bound certificate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-convex-program-duality-and-slater-condition
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Section 5.1, printed pp. 215–221; the Lagrangian dual function and weak-duality lower bound.
    - title: "Zhiyuan Li, Convex Optimization, Lecture 5: Lagrange Multipliers and KKT"
      url: https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-5___-Lagrange-Multipliers-and-KKT/
      locator: Theorem 5.1 and complete proof in the weak-duality section.
---

## Statement

For the convex program and Lagrangian dual of
[[def-convex-program-duality-and-slater-condition]], every primal feasible
$x$ and every dual feasible $(\lambda,\nu)$ satisfy
$$q(\lambda,\nu)\le f_0(x).$$
Consequently, when the primal feasible set is nonempty, $d^*\le p^*$.

## Facts & Assumptions

**Given:** A primal feasible point and a dual feasible multiplier pair.

[F1] On the common domain,
$L(x,\lambda,\nu)=f_0(x)+\lambda^Tg(x)+\nu^T(Ax-b)$ and
$q(\lambda,\nu)=\inf_x L(x,\lambda,\nu)$, with $\lambda\ge0$
([[def-convex-program-duality-and-slater-condition]]).

## Proof

1.1 Since $x$ is feasible, $Ax-b=0$ and $g_i(x)\le0$. Since $\lambda_i\ge0$, this gives $L(x,\lambda,\nu)=f_0(x)+\sum_i\lambda_i g_i(x)\le f_0(x)$. The infimum defining $q$ is no larger than this particular Lagrangian value, so $q(\lambda,\nu)\le f_0(x)$. [given, F1, algebra]

2.1 The bound in step 1.1 holds for every primal feasible $x$ and every dual feasible pair. Taking the infimum over primal feasible $x$ and the supremum over dual feasible pairs gives $d^*\le p^*$ when the primal set is nonempty. [step 1.1, algebra] ∎
