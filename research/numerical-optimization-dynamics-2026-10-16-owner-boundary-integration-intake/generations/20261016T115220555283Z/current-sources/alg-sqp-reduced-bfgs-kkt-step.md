---
id: alg-sqp-reduced-bfgs-kkt-step
kind: algorithm
title: "Reduced-BFGS SQP KKT step with projected Hessian error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-sqp-linearized-quadratic-subproblem
  - def-inequality-constrained-program-and-kkt-geometry
  - alg-sqp-exact-hessian-newton-step
  - lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature
  - def-bfgs-curvature-pair-and-update-formulas
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
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
      locator: "Chapter 18 §18.4, printed pp. 538–542 / PDF pp. 556–560, and §18.10, Theorems 18.7–18.8, printed pp. 563–564 / PDF pp. 581–582; quasi-Newton models and reduced-Hessian convergence."
---

## Definition

Let $c_A(x)$ stack the equality and identified active constraints, and let
$A=Dc_A(x)$ have full row rank. Set
$$P=I-A^T(AA^T)^{-1}A$$
when $A$ has positive row count and $P=I$ when it has zero rows. Given the
exact Lagrangian Hessian $H$ and a symmetric positive-definite full-memory
BFGS matrix $B$, define
$$H_{\rm red}=H+P(B-H)P.$$
Solve the active KKT system with $H_{\rm red}$ in its upper-left block and
right-hand side $-F_A(x,\mu)$ as in
[[alg-sqp-exact-hessian-newton-step]]. If the rows are dependent or the
solve fails, return `kkt-solve-failure`.

For a curvature pair $(s,y)$ with $s^Ty>0$, the optional next-model update
is
$$B^+=B-\frac{(Bs)(Bs)^T}{s^TBs}+\frac{yy^T}{s^Ty};$$
if $s^Ty\le0$, skip the update and retain $B$. The curvature pair is defined
as in [[def-bfgs-curvature-pair-and-update-formulas]].

## Facts & Assumptions

**Given:** An identified active set with independent rows, its SQP KKT
residual $F_A$, exact Lagrangian Hessian $H$, and $B\succ0$.

[F1] [[def-sqp-linearized-quadratic-subproblem]] fixes the active-row
KKT block convention.

[F2] [[lem-sqp-kkt-matrix-nonsingularity-under-reduced-curvature]] states
that reduced positive curvature and independent rows imply nonsingularity.

[F3] [[def-bfgs-curvature-pair-and-update-formulas]] defines the BFGS
curvature pair and update.

[F4] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: if $B\succ0$
and $s^Ty>0$, the BFGS update is symmetric positive definite.

[F5] [[def-inequality-constrained-program-and-kkt-geometry]] fixes the
active set and the Lagrangian multiplier convention used in $F_A$.

[A1] The current active rows are independent, and the supplied BFGS model
is symmetric positive definite.

## Proof

1.1 Full row rank gives $AP=0$, $P^T=P$, and $Pz=z$ for $z\in\ker A$; these follow by multiplying out the displayed projector. Hence for every $z\in\ker A$, $z^TH_{\rm red}z=z^TBz>0$. Applying [F2] to $H_{\rm red}$ shows that the KKT solve is nonsingular. [given, F1, F2, F5, algebra]

2.1 If $s^Ty>0$, the update in [F3] is symmetric and remains positive definite by [F4]. If $s^Ty\le0$, the algorithm retains the already positive-definite $B$. Thus every successful model update preserves the stated $B\succ0$ invariant. [given, F3, F4, step 1.1] ∎
