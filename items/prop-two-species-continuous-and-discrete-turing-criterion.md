---
id: prop-two-species-continuous-and-discrete-turing-criterion
kind: proposition
title: Two-species continuous and discrete dispersion criteria
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
aliases: []
deps:
  - def-semilinear-reaction-diffusion-system
  - def-periodic-reaction-diffusion-grid
  - lem-periodic-heat-difference-amplification-symbol
justified_by: []
proof_strategy: direct
axiom_base: No choice axiom is used; the calculation is finite-dimensional mode-by-mode linear algebra.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Luca Doria, Numerical Algorithms, lecture notes, Johannes Gutenberg-Universität Mainz, 2022
      url: https://www.staff.uni-mainz.de/doria/NumAlg/NumAlg.pdf
      locator: "§§10.7–10.8, PDF pp. 150–153: two-species diffusion-dependent mode matrices and the reaction-diffusion model example."
verification:
  precheck: pass
---

## Statement

Let $F\in C^1$ and let $y_*\in\mathbb R^2$ be a homogeneous equilibrium, $F(y_*)=0$. Set $J=DF(y_*)=(J_{ij})$, assume $\operatorname{tr}J<0$ and $\det J>0$, and let $D=\operatorname{diag}(d_1,d_2)$ with $d_1,d_2>0$. For any spatial eigenfunction of $-\Delta$ with eigenvalue $\lambda\ge0$, the linearized reaction-diffusion mode has matrix $J-\lambda D$. For the continuous rectangular torus, $\lambda=\lambda_k=\sum_j(2\pi k_j/L_j)^2$ with $k\in\mathbb Z^d$. For the periodic grid of [[def-periodic-reaction-diffusion-grid]], the mode indexed by $\ell$ has $\lambda=\lambda_{h,\ell}=4\sum_jh_j^{-2}\sin^2(\pi\ell_j/N_j)$, with $0\le\ell_j<N_j$.

Define
$$
\beta_T=d_2J_{11}+d_1J_{22},\qquad q(\lambda)=\det(J-\lambda D)=d_1d_2\lambda^2-\beta_T\lambda+\det J.
$$
For either domain or grid and each actual mode, $J-\lambda D$ has a positive-real-part eigenvalue exactly when $q(\lambda)<0$; it is Hurwitz exactly when $q(\lambda)>0$, and has a zero eigenvalue when $q(\lambda)=0$. Thus the continuous or discrete linear instability criterion tests the actual corresponding spectrum. If all nonnegative $\lambda$ are regarded as continuously available, then a diffusion-driven unstable band exists exactly when $\beta_T>0$ and $\beta_T^2>4d_1d_2\det J$; its endpoints are
$$
\lambda_\pm=\frac{\beta_T\pm\sqrt{\beta_T^2-4d_1d_2\det J}}{2d_1d_2}.
$$
On a bounded torus or a finite grid, the band criterion alone is not enough: at least one actual Laplacian eigenvalue must lie strictly between $\lambda_-$ and $\lambda_+$.

## Facts & Assumptions

**Given:** The smooth two-component reaction field, homogeneous equilibrium, kinetic Jacobian $J$, positive diagonal diffusivities, and either a continuous periodic rectangular domain or the finite periodic grid.

[F1] [[def-semilinear-reaction-diffusion-system]]: the diffusion matrix is diagonal and the reaction term is local, so linearization at a homogeneous equilibrium gives $w_t=D\Delta w+Jw$.

[F2] [[def-periodic-reaction-diffusion-grid]]: the positive centered heat stencil is $A_h^{\rm per}$ and the diffusion generator is its negative times $D$.

[F3] [[lem-periodic-heat-difference-amplification-symbol]]: on a periodic rectangular grid the Fourier modes form a basis and the positive heat stencil has eigenvalues $4\sum_jh_j^{-2}\sin^2(\pi\ell_j/N_j)$ when the directional diffusivities are one.

## Proof

1.1 Write $u=y_*+\varepsilon w$. Differentiability of $F$ gives $F(y_*+\varepsilon w)=F(y_*)+\varepsilon Jw+o(\varepsilon)=\varepsilon Jw+o(\varepsilon)$, so the linearized equation is $w_t=D\Delta w+Jw$. For a continuous torus mode $w(t,x)=a(t)e^{2\pi i\sum_jk_jx_j/L_j}$, direct differentiation gives $\Delta w=-\lambda_kw$ and hence $a'=(J-\lambda_kD)a$. [F1, given, construct, algebra]

1.2 For every $\lambda\ge0$, $\operatorname{tr}(J-\lambda D)=\operatorname{tr}J-\lambda(d_1+d_2)<0$. Expanding the $2\times2$ determinant gives $\det(J-\lambda D)=(J_{11}-\lambda d_1)(J_{22}-\lambda d_2)-J_{12}J_{21}=d_1d_2\lambda^2-\beta_T\lambda+\det J=q(\lambda)$. [given, algebra]

2.1 For the grid, insert a Fourier vector from [F3] into the linearized finite system. By [F2] its diffusion part multiplies that mode by $-D\lambda_{h,\ell}$; the reaction Jacobian acts on the species coordinate by $J$. Therefore the mode coefficient satisfies $a'=(J-\lambda_{h,\ell}D)a$. The basis assertion in [F3] ensures these are the actual grid mode matrices. [F2, F3, step 1.1, algebra]

2.2 The characteristic polynomial of a real $2\times2$ matrix $A$ is $\mu^2-\operatorname{tr}(A)\mu+\det(A)$. If $\operatorname{tr}(A)<0$ and $\det(A)<0$, its discriminant $\operatorname{tr}(A)^2-4\det(A)$ is positive and the real roots have negative product, so one is positive. If $\operatorname{tr}(A)<0$ and $\det(A)>0$, real roots have negative sum and positive product, so both are negative; nonreal roots are conjugate with real part $\operatorname{tr}(A)/2<0$. If the determinant is zero, one eigenvalue is zero and the other is the trace, which is negative. Applying these alternatives to $A=J-\lambda D$ proves the mode tests in the Statement. [step 1.2, algebra]

3.1 Since $d_1d_2>0$ and $\det J>0$, the upward-opening quadratic $q$ is negative at some $\lambda\ge0$ exactly when its minimum occurs at a positive point and its discriminant is strictly positive. Its minimizer is $\beta_T/(2d_1d_2)$, so the first condition is $\beta_T>0$; its discriminant is $\beta_T^2-4d_1d_2\det J$, so the second condition is the strict inequality in the Statement. Under these conditions both roots are positive because their sum is $\beta_T/(d_1d_2)>0$ and product is $\det J/(d_1d_2)>0$, and factorization gives $q<0$ precisely between them. The mode tests from step 2.2 then prove the continuous-spectrum and finite-grid criteria without replacing either actual spectrum by all real wavenumbers. [step 1.2, step 2.2, algebra] ∎
