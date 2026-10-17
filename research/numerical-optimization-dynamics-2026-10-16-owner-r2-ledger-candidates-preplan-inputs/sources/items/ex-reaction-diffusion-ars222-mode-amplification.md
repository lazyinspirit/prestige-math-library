---
id: ex-reaction-diffusion-ars222-mode-amplification
kind: example
title: "ARS(2,2,2) amplification on a two-cell reaction-diffusion grid"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-ars222-additive-tableau-and-stages
  - lem-ars222-coefficient-identities
  - prop-ars222-bivariate-stability-region
  - def-matrix-product-and-identity-matrix
  - thm-of-square-roots
  - lem-of-square-monotone
aliases: []
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lorenzo Pareschi and Giovanni Russo, Implicit-explicit Runge-Kutta schemes and applications to hyperbolic systems with relaxation"
      url: "https://arxiv.org/pdf/1009.2757"
      locator: "§2.1 and §3, additive Runge–Kutta order and scalar stability, PDF pp. 2–5."
generation:
  role: example
---

## Example

Consider the two-cell no-flux graph diffusion matrix
$$L=\begin{pmatrix}-1&1\\1&-1\end{pmatrix}$$
and the linear reaction-diffusion semidiscretization $y'=\rho y+D Ly$ with reaction rate $\rho=1$, diffusion coefficient $D=10$. Treat reaction explicitly and diffusion implicitly in [[def-ars222-additive-tableau-and-stages]]. The constant mode has amplification $221/200>1$, matching its reaction growth. With step $h=1/10$, the nonconstant mode has amplification
$$R(1/10,-2)=\frac{661/200-(11/5)\sqrt2}{11-6\sqrt2},$$
which lies strictly between $0$ and $9/80$. This is a two-mode scalar calculation for a finite grid; it makes no nonnormal-matrix or PDE stability assertion.

## Facts & Assumptions

**Given:** The matrix $L$, reaction rate, diffusion coefficient, step size, and the ARS(2,2,2) tableau.

[F1] [[def-ars222-additive-tableau-and-stages]]: the explicit component is evaluated in the explicit tableau and the diffusion component is solved in the diagonally implicit tableau.

[F2] [[prop-ars222-bivariate-stability-region]]: for scalar eigenvalues $z_a,z_b$ with $1-\gamma z_b\ne0$, the ARS amplification is the stated rational function $R(z_a,z_b)$.

[F3] [[lem-ars222-coefficient-identities]]: $\gamma=1-1/\sqrt2$, $1-2\gamma=\sqrt2-1$, and $1/2-\gamma^2=\sqrt2-1$.

[F4] [[def-matrix-product-and-identity-matrix]]: matrix multiplication is evaluated entrywise by row-by-column multiplication.

[F5] [[thm-of-square-roots]] and [[lem-of-square-monotone]]: $\sqrt2$ is positive, and $a^2<b^2$ for $0\le a<b$.

## Proof

1.1 Direct multiplication gives $Lv_0=0$ for $v_0=(1,1)^T$ and $Lv_1=-2v_1$ for $v_1=(1,-1)^T$. These vectors are linearly independent, so they form a basis of $\mathbb R^2$ and diagonalize both $a(y)=y$ and $b(y)=10Ly$. [F4, algebra]

2.1 On each span $\mathbb Rv_j$, every stage equation in [F1] remains in that span. The implicit denominators are $1$ on $v_0$ and $1+20\gamma h>0$ on $v_1$, so the stage solves are unique there. Hence [F2] applies with $z_a=h$ and $z_b=0$ or $z_b=-20h$, respectively. [F1, F2, F3, step 1.1, algebra]

3.1 For $v_0$ and $h=1/10$, $z_b=0$, so [F2] gives $R(1/10,0)=1+\frac1{10}+\frac1{200}=\frac{221}{200}>1.$ This mode grows under the positive reaction term. [F2, step 2.1, algebra]

4.1 For $v_1$, $z_b=-2$. Substituting [F3] into [F2] gives the displayed fraction, with denominator $(1+2\gamma)^2=(3-\sqrt2)^2=11-6\sqrt2$. By [F5], $7/5<\sqrt2<3/2$: squaring the positive endpoints gives $49/25<2<9/4$. Thus the numerator is greater than $1/200$ and less than $9/40$, while the denominator is greater than $2$. Consequently $0<R(1/10,-2)<9/80<1$. [F2, F3, F5, step 2.1, algebra] ∎

