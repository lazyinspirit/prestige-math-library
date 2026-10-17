---
id: ex-ill-conditioned-design-stability-versus-forward-error
kind: example
title: "An ill conditioned design with large forward sensitivity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-computed-full-rank-least-squares-backward-stability
  - thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number
  - def-condition-number-of-a-nonsingular-linear-system
  - def-induced-matrix-p-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Fundamentals of Numerical Computation, QR factorization and least squares"
      url: https://fncbook.com/qr/
    - title: "Fundamentals of Numerical Computation, normal equations"
      url: https://fncbook.com/normaleqns/
    - title: "Stuart and Voss, Matrix Analysis and Algorithms, Warwick lecture notes"
      url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
---

## Statement

Let A=diag(1,2^-40), with condition number 2^40. For b=(1,0)^T the unique solution is x=(1,0)^T; for b-tilde=(1,2^-40)^T it is x-tilde=(1,1)^T. The relative data change is 2^-40 while the relative solution change is 1. Thus backward stability does not imply small forward error for an ill-conditioned design.

## Facts & Assumptions
**Given:** the diagonal design and right-hand sides.

[F1] [[thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number]]: full-column-rank least squares has a unique minimizer.

[F2] [[thm-computed-full-rank-least-squares-backward-stability]]: its guarantee controls perturbations of data under its hypotheses.

[F3] [[def-condition-number-of-a-nonsingular-linear-system]]: $\kappa_2(A)=\|A\|_2\|A^{-1}\|_2$.

[F4] [[def-induced-matrix-p-norm]]: $\|M\|_2=\sup_{\|z\|_2=1}\|Mz\|_2$.

## Proof

1.1 Direct multiplication by A^-1=diag(1,2^40) gives x=A^-1b=(1,0)^T and x-tilde=A^-1b-tilde=(1,1)^T; uniqueness follows from [F1]. [given, F1, algebra]

2.1 The input difference and x norm are both measured against unit vectors: ||b-tilde-b||_2/||b||_2=2^-40 and ||x-tilde-x||_2/||x||_2=1. [step 1.1, algebra]

3.1 For every $z$, $\|Az\|_2^2=z_1^2+2^{-80}z_2^2\le\|z\|_2^2$, with equality at $e_1$, so [F4] gives $\|A\|_2=1$. Likewise $\|A^{-1}z\|_2^2=z_1^2+2^{80}z_2^2\le2^{80}\|z\|_2^2$, with equality at $e_2$, hence $\|A^{-1}\|_2=2^{40}$. Thus [F3] gives $\kappa_2(A)=2^{40}$. The exact data calculation proves order-one forward change under a relative $2^{-40}$ right-hand-side perturbation; backward stability [F2] alone is not a forward-accuracy guarantee. [step 1.1, step 2.1, F2, F3, F4, algebra] ∎