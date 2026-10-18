---
id: thm-native-interpolation-projection-and-power-function
kind: theorem
title: "Native Matérn interpolation is an orthogonal projection with power function"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-rbf-kernels-sites-and-augmented-interpolation
  - def-normalized-matern-spectral-kernel
  - def-bessel-potential-space-and-restriction-quotient
  - lem-rbf-augmented-system-is-invertible
  - lem-matern-spectral-integral-and-normalization
  - lem-matern-native-space-fourier-identity-and-positive-definiteness
  - lem-restricted-matern-native-space-is-sobolev
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rasmussen and Williams, Gaussian Processes for Machine Learning, Chapter
        4, equations (4.5)–(4.8)"
      url: "https://gaussianprocess.org/gpml/chapters/RW4.pdf"
    - title: "Gregory E. Fasshauer, MATH 590: Meshfree Methods, Chapter 13, pp. 18–25"
      url: "https://math.iit.edu/~fass/Notes590_Ch13Print.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume full AC conservatively for the declared Hilbert projection dependencies. Let $X=(x_1,\ldots,x_N)\subset\Omega$ be distinct and nonempty, and let $\mathcal H_k(\Omega)$ be the restricted Matérn native RKHS. For every $f\in\mathcal H_k(\Omega)$, the unique kernel interpolant $s_Xf=\sum_jc_jk(\cdot-x_j)$ is the orthogonal projection of $f$ onto $V_X=\operatorname{span}\{k(\cdot-x_j):1\le j\le N\}$. Define
$$P_X(x)=\|(I-\Pi_X)k(\cdot-x)\|_{\mathcal H_k(\Omega)},$$
where $\Pi_X$ is that projection. Then for every $x\in\Omega$,
$$|f(x)-s_Xf(x)|\le P_X(x)\|f\|_{\mathcal H_k(\Omega)},\qquad P_X(x)^2=k(0)-k_X(x)^*K_X^{-1}k_X(x)\ge0.$$
where $K_X=(k(x_i-x_j))$ and $k_X(x)=(k(x_i-x))_{i=1}^N$.

## Facts & Assumptions

**Given:** Full AC, a finite nonempty distinct site list $X\subset\Omega$, and $f\in\mathcal H_k(\Omega)$.

[F1] The restricted native space is a Hilbert RKHS; its kernel sections reproduce evaluation and its norm is the quotient native norm. ([[lem-restricted-matern-native-space-is-sobolev]])

[F2] The Matérn Gram matrix on distinct sites is strictly positive definite, hence invertible; $k(0)=1$. ([[lem-matern-native-space-fourier-identity-and-positive-definiteness]], [[lem-matern-spectral-integral-and-normalization]])

[F3] Finite-dimensional subspaces of a Hilbert space are closed, orthogonal projection is self-adjoint and contractive, and orthogonal residuals satisfy Pythagoras. ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]])

[F4] Cauchy--Schwarz holds in every real or complex inner-product space. ([[thm-cauchy-schwarz-in-an-inner-product-space]])

[A1] Full AC is carried conservatively for the projection suppliers' declared choice branch. ([[def-axiom-of-choice]], [[def-countable-choice]])



**Proof technique:** Hilbert projection and Cauchy--Schwarz.

## Proof

**Proof technique:** Hilbert projection and Cauchy--Schwarz.

**Given:** The hypotheses above.

1.1 The span $V_X$ has finite dimension and is therefore closed. Let $\Pi_Xf$ be the orthogonal projection of $f$ onto $V_X$. For each site $x_i$, the residual is orthogonal to $k(\cdot-x_i)$; by reproduction [F1], $(f-\Pi_Xf)(x_i)=0$. Thus $\Pi_Xf$ interpolates the data. Its coefficients solve $K_Xc=(f(x_i))_i$, which has a unique solution by [F2], so it is the unique kernel interpolant. [F1, F2, F3, A1]

2.1 Put $e=f-s_Xf=(I-\Pi_X)f$. Self-adjointness of $I-\Pi_X$ and reproduction give $$e(x)=\langle e,k(\cdot-x)\rangle=\langle e,(I-\Pi_X)k(\cdot-x)\rangle.$$ Cauchy--Schwarz [F4] yields $|e(x)|\le\|e\|P_X(x)\le\|f\|P_X(x)$ by contractivity of the orthogonal projection. [F1, F3, F4, step 1.1, algebra]

3.1 The projection of $k(\cdot-x)$ has the form $\sum_jv_jk(\cdot-x_j)$. Reproduction and orthogonality at all sites give $K_Xv=k_X(x)$, so $v=K_X^{-1}k_X(x)$ by [F2]. Expanding the squared residual norm and using this equation gives $$P_X(x)^2=\|k(\cdot-x)\|^2-\|\Pi_Xk(\cdot-x)\|^2=k(0)-k_X(x)^*K_X^{-1}k_X(x).$$ It is nonnegative because it is a squared norm. [F1, F2, F3, step 1.1, algebra] ∎
