---
id: thm-convex-kkt-sufficiency-and-normal-cone-certificate
kind: theorem
title: Convex KKT conditions certify a global minimum and an outward normal
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - def-kkt-residual-and-normal-cone
  - thm-differentiable-convex-functions-and-gradient-inequality
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
      locator: Chapter 5, Sections 5.1–5.2, printed pp. 215–227, weak duality and KKT certificates; Chapter 3, Section 3.1.3, convex gradient inequality.
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.4, printed pp. 348–350, convex programs and global optimality.
---

## Statement

Let $m\ge0$ be an integer. Let $U\subseteq\mathbb R^n$ be open and convex,
and suppose the objective $f:U\to\mathbb R$ and inequalities
$g_i:U\to\mathbb R$ $(1\le i\le m)$ are differentiable and convex.
Let the equalities be $Ax=b$ and define the feasible set
$C=\{x\in U:Ax=b,\ g_i(x)\le0\ (1\le i\le m)\}$. If a feasible tuple
$(x_*,\nu,\lambda)$ satisfies the KKT conditions with $\lambda\ge0$, then
$x_*$ is a global minimizer over the feasible set $C$. Moreover,
$-\nabla f(x_*)\in N_C(x_*)$, where the normal cone has the convention of
[[def-kkt-residual-and-normal-cone]].

## Facts & Assumptions

**Given:** The convex program, feasible KKT tuple, and normal-cone
definition.

[F1] For differentiable convex $\varphi$ on an open convex set,
$\varphi(y)\ge\varphi(x)+\nabla\varphi(x)^T(y-x)$
([[thm-differentiable-convex-functions-and-gradient-inequality]]).

[F2] The normal cone is
$N_C(x)=\{v:\langle v,y-x\rangle\le0\text{ for every }y\in C\}$
([[def-kkt-residual-and-normal-cone]]).

## Proof

1.1 Fix any feasible $y$ and put $d=y-x_*$. Then $Ad=0$. KKT stationarity gives $\nabla f(x_*)^Td=-\sum_i\lambda_i\nabla g_i(x_*)^Td$. If $\lambda_i=0$ its term is zero. If $\lambda_i>0$, complementarity gives $g_i(x_*)=0$, and [F1] applied to $g_i$ gives $\nabla g_i(x_*)^Td\le g_i(y)\le0$. Hence $\nabla f(x_*)^Td\ge0$. [given, F1, algebra]

2.1 Applying [F1] to $f$ yields $f(y)\ge f(x_*)+\nabla f(x_*)^Td\ge f(x_*)$. Since $y$ was arbitrary, $x_*$ is globally minimizing. Step 1.1 also gives $\langle-\nabla f(x_*),y-x_*\rangle\le0$ for every feasible $y$, which is exactly $-\nabla f(x_*)\in N_C(x_*)$ by [F2]. [step 1.1, F1, F2, algebra] ∎
