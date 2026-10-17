---
id: thm-sqp-reduced-bfgs-superlinear-under-dm
kind: theorem
title: "Reduced-BFGS SQP is locally superlinear under reduced Dennis-More and inverse bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-sqp-reduced-bfgs-kkt-step
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
      locator: "Chapter 18 §18.10, Theorems 18.5–18.8, printed pp. 563–564 / PDF pp. 581–582; projected Dennis–Moré and reduced-Hessian rates."
---

## Statement

Let $F_A$ be the active KKT map defined in
[[alg-sqp-exact-hessian-newton-step]]. Let the program be $C^2$, with a
correct locally identified active set,
LICQ, strict complementarity, and the second-order sufficient condition.
Assume the active KKT map $F_A$ has a locally Lipschitz Jacobian near the
solution. At each nonterminal iterate let $P_k$ project onto
$\ker A_k$, where $A_k=Dc_A(x_k)$ is the Jacobian of the identified
active constraints. Set $z_k=(x_k,\mu_k)$,
$F_k=F_A(z_k)$, $J_k=DF_A(z_k)$, and
$s_k=(p_k,\delta\mu_k)$ for the computed reduced-BFGS step. Let $H_k$ be
the exact Lagrangian Hessian and $B_k$ the symmetric positive-definite
model. Suppose the reduced-BFGS KKT matrices
$\widetilde J_k$ are nonsingular with
$\sup_k\|\widetilde J_k^{-1}\|_2<\infty$, and the reduced Dennis–Moré
condition holds along the computed primal steps $p_k$:
$$\frac{\|P_k(B_k-H_k)P_kp_k\|_2}{\|p_k\|_2}\longrightarrow0 \quad\text{whenever }p_k\ne0.$$
Also assume the exact Newton residual ratios satisfy
$\|J_ks_k+F_k\|_2\le\bar\eta\|F_k\|_2$ for every nonterminal $k$, for
some fixed $\bar\eta<1$.
Then full steps of [[alg-sqp-reduced-bfgs-kkt-step]] started sufficiently
near the KKT pair converge superlinearly, unless an exact root is reached
first. No globalization or global BFGS convergence claim is made.

## Facts & Assumptions

**Given:** The active KKT regularity hypotheses, symmetric positive
definite models, uniform inverse bound, and the reduced Dennis–Moré limit.

[F1] [[def-inequality-constrained-program-and-kkt-geometry]] defines the
active KKT equations and the $g\le0$ multiplier convention.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] makes
the exact KKT Jacobian nonsingular under LICQ and positive reduced curvature.

[F3] [[alg-sqp-reduced-bfgs-kkt-step]] replaces only the tangent Hessian
block by $H_k+P_k(B_k-H_k)P_k$ and solves the resulting KKT system.

[F4] [[thm-inexact-newton-local-forcing-rates]] gives local superlinear
convergence when the Newton residual is $o(\|F_k\|_2)$ and the exact root
Jacobian is invertible with locally Lipschitz derivative.

[A1] The program is $C^2$, LICQ and strict complementarity hold at the
solution, the reduced Hessian is positive on the tangent space, the active
KKT map has a locally Lipschitz Jacobian, the approximate KKT inverse norms
are uniformly bounded, the stated reduced Dennis–Moré ratios tend to zero,
and all exact Newton residual ratios are bounded by $\bar\eta<1$.

## Proof

1.1 Set $z_k=(x_k,\mu_k)$ and $F_k=F(z_k)$ for the active KKT map. The exact Jacobian $J_k=DF(z_k)$ has upper-left block $H_k$. By [F3], the computed step $s_k=(p_k,\delta\mu_k)$ solves $\widetilde J_ks_k=-F_k$, where $\widetilde J_k$ differs from $J_k$ only by replacing that block with $H_k+P_k(B_k-H_k)P_k$. Hence the exact Newton residual is $$r_k:=J_ks_k+F_k=\binom{-P_k(B_k-H_k)P_kp_k}{0}.$$ [given, F1, F3, algebra]

2.1 The inverse bound gives $\|s_k\|_2\le C\|F_k\|_2$ and therefore $\|p_k\|_2\le C\|F_k\|_2$. The Dennis–Moré condition supplies numbers $\delta_k\to0$ with $\|r_k\|_2\le\delta_k\|p_k\|_2$ whenever $p_k\ne0$; therefore $\|r_k\|_2\le C\delta_k\|F_k\|_2$. At a zero primal step the displayed residual is zero, so the same conclusion holds. [given, step 1.1, algebra]

3.1 LICQ and the second-order condition make $J_*$ nonsingular by [F2], as in the exact-Hessian result. The Jacobian is locally Lipschitz by [A1]. Thus the steps satisfy the inexact-Newton equation with forcing factor $\eta_k:=\|r_k\|_2/\|F_k\|_2$ when $F_k\ne0$, and $\eta_k:=0$ when $F_k=0$. Assumption [A1] gives $\eta_k\le\bar\eta<1$, while step 2.1 gives $\eta_k\le C\delta_k\to0$. [A1, F2, F4, step 2.1]

4.1 Apply [F4] to the combined primal-dual variable. Starting sufficiently near the root, the full steps remain local and converge superlinearly. If an exact root is reached, no further convergence assertion is needed; if the algorithm reports a failed solve, its nonsingularity hypotheses have failed and this theorem does not apply. [F3, F4, step 3.1] ∎
