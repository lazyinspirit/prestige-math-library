---
id: ex-stiff-diagonal-arnoldi-action
kind: example
title: "A one-dimensional Arnoldi projection misses a slow mode of a stiff diagonal matrix"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-arnoldi-exponential-and-phi-actions
  - def-arnoldi-process
  - def-logarithmic-norm-for-complex-matrices
  - def-phi-functions-by-everywhere-convergent-series
  - cor-exponential-is-a-bijection-onto-positive-reals
  - thm-complex-exponential-addition-and-real-extension
  - thm-derivative-of-exponential
  - thm-chain-rule
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-continuous-implies-integrable
  - thm-arnoldi-exponential-action-error-bound
  - thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Nicholas J. Higham and Lijing Lin, Functions of Matrices: A Short Course"
      url: "https://eprints.maths.manchester.ac.uk/2067/01/covered/MIMS_ep2013_73.pdf"
      locator: "Section 7.1, Arnoldi projection for matrix-function actions."
    - title: "Jitse Niesen and Will M. Wright, A Krylov subspace algorithm for evaluating the phi-functions appearing in exponential integrators"
      url: "https://arxiv.org/pdf/0907.4631"
      locator: "Section 3.1, Arnoldi projection and residual representation."
---

## Statement

Let $A=\operatorname{diag}(-100,-1)$, $v=(1,1)^{\mathsf T}$, $t=1/10$, and use one Arnoldi step ($m=1$). Compute the projected exponential action, compare it exactly with $e^{tA}v$, and evaluate the residual-integral bound.

## Facts & Assumptions

**Given:** The stated real diagonal matrix, nonzero starting vector, time, and exact-arithmetic Arnoldi run with $m=1$.

[F1] [[def-arnoldi-process]] and [[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]: the first Arnoldi vector is $q_1=v/\|v\|_2$, $H_1=q_1^*Aq_1$, and $Aq_1=H_1q_1+h_{2,1}q_2$ when the residual is nonzero.

[F2] [[alg-arnoldi-exponential-and-phi-actions]]: for $k=0$, the exact projected action is $\|v\|_2 V_1e^{tH_1}e_1$.

[F3] [[thm-arnoldi-exponential-action-error-bound]]: with exact Arnoldi and exact reduced action, zero initial mismatch, and $D=\Omega=0$, the error is bounded by the semigroup-weighted integral of $h_{2,1}|e_1^*c(s)|$, where $c(s)=e^{sH_1}\|v\|_2e_1$.

[F4] [[def-phi-functions-by-everywhere-convergent-series]]: the diagonal exponential acts entrywise by the scalar exponential series.

[F5] [[def-logarithmic-norm-for-complex-matrices]]: $\mu_2(A)$ is the largest eigenvalue of the Hermitian part $(A+A^*)/2$.

[F6] [[cor-exponential-is-a-bijection-onto-positive-reals]]: the real exponential is injective on $\mathbb R$.

[F7] [[thm-complex-exponential-addition-and-real-extension]]: the complex exponential satisfies its addition law and agrees with the real exponential on real inputs.

[F8] [[thm-derivative-of-exponential]]: $(\exp x)'=\exp x$ for real $x$.

[F9] [[thm-chain-rule]]: differentiating a scalar exponential composed with a real affine map multiplies by that affine slope.

[F10] [[cor-vector-valued-ftc-and-lipschitz-bound]]: for a continuously differentiable real scalar function, its definite integral is the endpoint difference of an antiderivative.

[F11] [[thm-continuous-implies-integrable]]: a continuous real-valued function on a nondegenerate closed bounded interval is Riemann integrable.

## Proof

1.1 We have $\|v\|_2=\sqrt2$ and $q_1=(1,1)^{\mathsf T}/\sqrt2$. Thus $H_1=q_1^*Aq_1=-101/2$. The Arnoldi residual is $Aq_1-H_1q_1=(-99,99)^{\mathsf T}/(2\sqrt2)$, so its norm is $99/2$ and its normalization is $q_2=(-1,1)^{\mathsf T}/\sqrt2$. [given, F1, algebra]

2.1 By [F2], the projected action is $\sqrt2 q_1e^{-101/20}=e^{-101/20}(1,1)^{\mathsf T}$. By [F4], the exact action is $(e^{-10},e^{-1/10})^{\mathsf T}$. Its exact error vector is $(e^{-10}-e^{-101/20},e^{-1/10}-e^{-101/20})^{\mathsf T}$, which is nonzero because [F7] identifies these real-argument complex exponentials with the real exponential, and $-1/10\ne-101/20$ with injectivity from [F6]. [given, step 1.1, F2, F4, F6, F7, algebra]

3.1 The matrix is Hermitian with largest eigenvalue $-1$, so [F5] gives $\mu_2(A)=-1$. Here $c(s)=\sqrt2e^{-101s/2}$ and the initial mismatch $v-\sqrt2q_1$ is zero. By [F3], the certificate is $\|e^{tA}v-V_1e^{tH_1}\sqrt2e_1\|_2\le\int_0^{1/10}e^{-(1/10-s)}(99/2)\sqrt2e^{-101s/2}\,ds$. By the addition law [F7] its integrand is $e^{-1/10}(99/2)\sqrt2e^{-99s/2}$, a continuous real function on $[0,1/10]$ and hence integrable by [F11]. The antiderivative $-(2/99)e^{-99s/2}$ follows from [F8] and [F9]; applying [F10] yields the bound $\sqrt2e^{-1/10}(1-e^{-99/20})$. Thus the slow component $e^{-1/10}$ is missed by the one-dimensional projection even though the residual certificate applies. [given, F3, F5, F7, F8, F9, F10, F11, step 1.1, algebra] ∎
