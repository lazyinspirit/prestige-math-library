---
id: thm-sqp-exact-hessian-local-quadratic-convergence
kind: theorem
title: "Exact-Hessian SQP converges quadratically on the identified active KKT system"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-sqp-exact-hessian-newton-step
  - def-inequality-constrained-program-and-kkt-geometry
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
  - thm-inexact-newton-local-forcing-rates
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: "Chapter 18 §18.10, Assumption 18.2(a) and Theorem 18.4, printed pp. 562–563 / PDF pp. 580–581; exact-Hessian local quadratic convergence."
---

## Statement

Let $x_*$ be a KKT point of a $C^2$ nonlinear program, with multiplier
$\mu_*=(\nu_*,\lambda_{*,I})$ and active set $I=I(x_*)$. Assume LICQ,
strict complementarity $\lambda_{*,i}>0$ for every $i\in I$, and the
second-order sufficient condition
$$d^T\nabla^2_{xx}L(x_*,\mu_*)d>0 \quad\text{for every nonzero critical direction }d.$$
Assume also that the active KKT map $F_A$ has a locally Lipschitz
Jacobian: on some ball, $\|DF_A(z)-DF_A(z\prime)\|_2\le L\|z-z\prime\|_2$.
Once the correct active set is used, exact arithmetic full steps of
[[alg-sqp-exact-hessian-newton-step]], started sufficiently close to
$(x_*,\mu_*)$, are well-defined and converge quadratically to that pair.
This is the local full-step Newton result; it does not assert acceptance by
an L1 merit line search.

## Facts & Assumptions

**Given:** The smooth program, a KKT pair, LICQ, strict complementarity,
the stated second-order sufficient condition, a locally identified active
set, and the locally Lipschitz Jacobian hypothesis.

[F1] [[def-inequality-constrained-program-and-kkt-geometry]] defines the
KKT system, LICQ, active set, and critical cone in the $g\le0$ convention.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]]: if
active rows are independent and the Lagrangian Hessian is positive on their
null space, the active KKT Jacobian is nonsingular.

[F3] [[alg-sqp-exact-hessian-newton-step]] solves the exact Newton equation
for the active KKT map and takes the full step.

[F4] [[thm-inexact-newton-local-forcing-rates]] gives local quadratic
convergence for a $C^1$ root map with Lipschitz Jacobian and invertible root
Jacobian when the Newton residual is zero.

[A1] The program is $C^2$, LICQ holds, all active inequality multipliers
are strictly positive, the Lagrangian Hessian is positive on every
nonzero critical direction, and the active KKT map has a locally
Lipschitz Jacobian near the root.

## Proof

1.1 Let $A$ stack equality rows and active inequality rows at $x_*$. For $d\in\ker A$, $d$ is linearly feasible and has zero derivative on every active inequality. Conversely, if $d$ is in the critical cone, stationarity gives $\nabla f(x_*)^Td=-\sum_{i\in I}\lambda_{*,i}Dg_i(x_*)d$; each $Dg_i(x_*)d\le0$, so equality to zero and strict positivity of every $\lambda_{*,i}$ force each such derivative to vanish. Thus the critical cone is exactly $\ker A$. The stated second-order condition gives positive curvature on $\ker A$, and LICQ gives independent rows. [given, F1, algebra]

2.1 Define $F(x,\mu)=(\nabla_xL(x,\mu),c_A(x))$. Its derivative at the root is the active KKT block matrix, nonsingular by [F2] and step 1.1. By [A1], this derivative is locally Lipschitz on a small ball. The exact step of [F3] satisfies $DF(x_k,\mu_k)s_k+F(x_k,\mu_k)=0$. Apply [F4] to the combined primal-dual variable: for a sufficiently close starting pair, all full steps are defined, remain local, and converge quadratically. [given, A1, F2, F3, F4, step 1.1, algebra] ∎
