---
id: thm-critical-cone-equivalence-under-kkt
kind: theorem
title: Critical directions are tangent to every positively weighted active inequality
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-inequality-constrained-program-and-kkt-geometry
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.4, printed pp. 342–343, equations (12.52)–(12.54), the critical-cone characterization.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Section 5.5, complementary slackness and KKT conditions.
---

## Statement

Let $(x,\nu,\lambda)$ satisfy the KKT conditions for the program of
[[def-inequality-constrained-program-and-kkt-geometry]]. For every
$d\in\mathcal L_C(x)$,
$$
\nabla f(x)^Td=0\quad\Longleftrightarrow\quad Dg_i(x)d=0\text{ for every }i\in I(x)\text{ with }\lambda_i>0.
$$
Thus the critical cone is the linearized cone with equality imposed on each
positively weighted active inequality.

## Facts & Assumptions

**Given:** A KKT tuple and a vector in its linearized cone.

[F1] KKT stationarity is
$\nabla f+Dh^T\nu+Dg^T\lambda=0$, with $\lambda\ge0$ and
$\lambda_i g_i(x)=0$
([[def-inequality-constrained-program-and-kkt-geometry]]).

## Proof

1.1 For $d\in\mathcal L_C(x)$, the equality term in stationarity vanishes, and inactive multipliers vanish by complementarity. Therefore $\nabla f(x)^Td=-\sum_{i\in I(x)}\lambda_iDg_i(x)d$. Every summand on the right is nonnegative because $\lambda_i\ge0$ and $Dg_i(x)d\le0$. [given, F1, algebra]

2.1 The sum in step 1.1 is zero exactly when each term with $\lambda_i>0$ is zero; because each such term is nonnegative, this is equivalent to $Dg_i(x)d=0$ for every positively weighted active index. That is the claimed equivalence and critical-cone description. [step 1.1, algebra] ∎
