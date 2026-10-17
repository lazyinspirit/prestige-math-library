---
id: thm-first-order-kkt-necessity-under-mfcq
kind: theorem
title: MFCQ gives KKT multipliers at a smooth local minimizer
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-mfcq-linearized-cone-equals-bouligand-tangent-cone
  - thm-farkas-alternative-for-finite-linear-systems
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
      locator: Chapter 12, Sections 12.2–12.5, printed pp. 327–353; KKT under LICQ and the statement that MFCQ also supplies first-order multipliers. The inequality sign convention is translated.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Farkas and duality sections; finite-dimensional alternatives are separated from the local nonlinear argument.
---

## Statement

For the $C^2$ problem of
[[def-inequality-constrained-program-and-kkt-geometry]], if $x_*$ is a local
minimizer and MFCQ holds at $x_*$, then there exist
$\nu\in\mathbb R^p$ and $\lambda\in\mathbb R^m_+$ such that
$(x_*,\nu,\lambda)$ satisfies the KKT system.

## Facts & Assumptions

**Given:** The program, feasible local minimizer $x_*$, and MFCQ at $x_*$.

[F1] Under MFCQ, the tangent and linearized cones at $x_*$ are equal
([[thm-mfcq-linearized-cone-equals-bouligand-tangent-cone]]).

[F2] For a matrix $B$ and vector $c$, either $Bz=c$ has a solution
$z\ge0$, or there is $d$ with $B^Td\ge0$ and $c^Td<0$, but not both
([[thm-farkas-alternative-for-finite-linear-systems]]).

## Proof

1.1 Every $d\in T_C(x_*)$ satisfies $\nabla f(x_*)^Td\ge0$. For $d=0$ this is immediate. Otherwise take a defining sequence $x_*+t_kd_k\in C$, with $t_k\downarrow0$ and $d_k\to d$. For large $k$, local minimality gives $f(x_*+t_kd_k)-f(x_*)\ge0$. Differentiability gives $f(x_*+t_kd_k)-f(x_*)=t_k\nabla f(x_*)^Td_k+o(t_k)$; divide by $t_k$ and pass to the limit. [given, algebra]

2.1 By [F1] and step 1.1, $\nabla f(x_*)^Td\ge0$ for every $d\in\mathcal L_C(x_*)$. Form a matrix $B$ with columns $\nabla h_j(x_*),-\nabla h_j(x_*)$ for each equality and $-\nabla g_i(x_*)$ for each active inequality, and set $c=\nabla f(x_*)$. If alternative 1 of [F2] failed, alternative 2 would give $B^Td\ge0$ and $c^Td<0$. The paired equality columns force $Dh(x_*)d=0$, while the inequality columns force $Dg_i(x_*)d\le0$ for every active $i$, so $d\in\mathcal L_C(x_*)$, contradicting step 1.1. Thus there are nonnegative coefficients representing $c$ as a combination of the columns of $B$. [F1, F2, step 1.1, construct]

3.1 Write the equality-column coefficients as $\alpha_j,\beta_j\ge0$ and the active inequality coefficients as $\lambda_i\ge0$. The representation from step 2.1 is $\nabla f(x_*)=Dh(x_*)^T(\alpha-\beta)-Dg_{I(x_*)}(x_*)^T\lambda_I$. Set $\nu=-(\alpha-\beta)$ and set $\lambda_i=0$ for inactive $i$. Then stationarity holds. Feasibility holds because $x_*\in C$; dual feasibility holds by construction; and complementarity holds because active constraints vanish while inactive multipliers are zero. These are exactly the KKT conditions. [step 2.1, given, algebra] ∎
