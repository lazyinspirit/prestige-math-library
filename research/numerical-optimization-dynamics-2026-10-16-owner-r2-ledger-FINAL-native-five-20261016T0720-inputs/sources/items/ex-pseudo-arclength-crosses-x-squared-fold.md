---
id: ex-pseudo-arclength-crosses-x-squared-fold
kind: example
title: 'Pseudo arclength crosses the fold $x^2-\lambda=0$'
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - thm-pseudo-arclength-local-newton-correction
  - thm-simple-fold-lyapunov-schmidt-parameterization
  - thm-augmented-residual-contraction-certificate
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $F(x,\lambda)=x^2-\lambda$, the solution curve is
$(x,\lambda)=(s,s^2)$. At its fold $(0,0)$, the natural parameter $\lambda$
turns around, while an $x$-normal pseudo-arclength section crosses the fold.

## Facts & Assumptions

**Given:** $F(x,\lambda)=x^2-\lambda$ on $\mathbb R^2$, a step $h>0$, and
the fold point $(0,0)$.

[F1] [[thm-simple-fold-lyapunov-schmidt-parameterization]]: for a simple
fold, $\lambda''(0)=-w^TF_{xx}[v,v]/(w^TF_\lambda)$ and the solution curve
has tangent $(v,0)$ in the normalized fold parameter.

[F2] [[thm-pseudo-arclength-local-newton-correction]]: at a regular solution
point, a transverse augmented section has an invertible bordered derivative
and its exact Newton corrections are locally quadratic.

[F3] [[thm-augmented-residual-contraction-certificate]]: if the strict
contraction inequalities hold for an augmented residual on a closed ball,
that ball contains exactly one zero and the theorem gives its center error
bound.

[F4] [[alg-pseudo-arclength-continuation-with-certified-local-corrector]]:
a finite continuation step is accepted only after its section-root
certificate passes; a finite trace claims no global branch completeness.

## Verification

**Proof technique:** direct.

1.1 At $(0,0)$, $F_x=0$, $F_\lambda=-1$, and $F_{xx}=2$. With $v=w=1$, $a=-1$ and $b=2$, so [F1] gives $\lambda''(0)=2$. The full derivative is $DF(x,\lambda)=[2x,-1]$, which has rank $1$ everywhere, and at the fold its unit kernel tangent is $t=(1,0)$. [F1, given, algebra]

2.1 Choose the unit section normal $\tau=(1,0)$ and predictor $z_p=(h,0)$. The augmented residual is $$G_h(x,\lambda)=(x^2-\lambda,x-h),$$ whose unique zero is $(h,h^2)$. Its derivative there is $$DG_h(h,h^2)=\begin{bmatrix}2h&-1\\1&0\end{bmatrix},$$ with determinant $1$; the section is transverse since its normal has positive dot product $1/\sqrt{1+4h^2}$ with the unit branch tangent $(1,2h)/\sqrt{1+4h^2}$. [F2, step 1.1, given, algebra]

3.1 At the predictor, $G_h(h,0)=(h^2,0)$ and $$DG_h(h,0)=\begin{bmatrix}2h&-1\\1&0\end{bmatrix}.$$ Solving $DG_h(h,0)\,s=-G_h(h,0)$ gives $s=(0,h^2)$, so one exact Newton correction reaches $(h,h^2)$ and makes the augmented residual zero. For the positive step in the statement, this is one exact update through the fold's turning parameter. [F2, step 2.1, algebra]

3.2 At the corrected center the residual and evaluation errors are zero, and the bordered Jacobian is invertible by step 2.1. Its derivative is Lipschitz on every bounded ball, so choose a sufficiently small positive radius to make $q<1$; the residual term is zero, hence the ball condition $\beta\rho\le(1-q)R$ holds. [F3, step 2.1, algebra]

4.1 The section root is therefore certifiable locally, and the normal remains transverse on a small chart. This gives a finite local continuation step through $(0,0)$ even though $\lambda'(0)=0$; it asserts nothing about other components. [F4, step 1.1, step 2.1, step 3.2] ∎
