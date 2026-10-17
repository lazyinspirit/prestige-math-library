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
the fold point $(0,0)$. The section/Newton algebra below holds for every $h>0$; the explicitly certified local continuation realization uses $0<h<1/16$.

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

2.1 For the local realization choose $0<h<1/16$, seed center $(0,0)$, radius $R_0=h/4$, and $G_{-1}(x,\lambda)=(x^2-\lambda,x)$. Its residual is zero, the Jacobian $\begin{bmatrix}0&-1\\1&0\end{bmatrix}$ has inverse norm $1$, and the Jacobian is $2$-Lipschitz. Therefore $q=2R_0<1$ and the zero-residual contraction certificate [F3] validates the seed. Use the branch graph $(x,x^2)$ for $|x|\le1/4$, reparameterized by $s(x)=\int_0^x\sqrt{1+4u^2}\,du$. Its unit tangent is $(1,2x)/\sqrt{1+4x^2}$ and the previous normal $(1,0)$ has dot product at least $\kappa=2/\sqrt5$. The forward arclength is at least $1/4$. All zeros in $V=\{(x,\lambda):|x|<1/4\}$ lie on this chart. The seed ball lies in $V$; with $a=1$, $h>R_0$ and $h+R_0<5/64<\kappa/4$, the algorithm's offset and chart-length checks pass. [F1, F3, F4, step 1.1, given, choose, algebra]

2.2 Choose the unit section normal $\tau=(1,0)$ and predictor $z_p=(h,0)$. The augmented residual is $$G_h(x,\lambda)=(x^2-\lambda,x-h),$$ whose unique zero is $(h,h^2)$. Its derivative there is $$DG_h(h,h^2)=\begin{bmatrix}2h&-1\\1&0\end{bmatrix},$$ with determinant $1$; the section is transverse since its normal has positive dot product $1/\sqrt{1+4h^2}$ with the unit branch tangent $(1,2h)/\sqrt{1+4h^2}$. [F2, step 1.1, given, algebra]

3.1 At the predictor, $G_h(h,0)=(h^2,0)$ and $$DG_h(h,0)=\begin{bmatrix}2h&-1\\1&0\end{bmatrix}.$$ Solving $DG_h(h,0)\,s=-G_h(h,0)$ gives $s=(0,h^2)$, so one exact Newton correction reaches $(h,h^2)$ and makes the augmented residual zero. For the positive step in the statement, this is one exact update through the fold's turning parameter. [F2, step 2.2, algebra]

4.1 For $0<h<1/16$, the inverse bordered matrix at the corrected center is $\begin{bmatrix}0&1\\-1&2h\end{bmatrix}$, with operator norm at most its Frobenius norm $\sqrt{2+4h^2}<2$. Take $\widehat\beta=2$ and $0<R_1<\min\{h/8,1/32\}$. The whole corrected ball lies in $V$ because $h+R_1<1/4$. The residual and evaluation errors are zero and the Jacobian is $2$-Lipschitz, so $q=4R_1<1$ and $\beta\rho=0\le(1-q)R_1$. This supplies the actual root-ball and chart certificate, not merely nonsingularity. With $N_{\rm req}=N_s=1$, $N_c=1$, and exact callbacks, step 3.1 computes the certified next point in one update. [F3, F4, step 2.1, step 2.2, step 3.1, given, choose, algebra]

5.1 The section root is therefore certifiable locally, and the normal remains transverse on a small chart. Under the explicit seed and small-step conditions of steps 2.1 and 4.1, this gives a finite local continuation step through $(0,0)$ even though $\lambda'(0)=0$; it asserts nothing about other components. [F4, step 1.1, step 2.2, step 4.1] ∎
