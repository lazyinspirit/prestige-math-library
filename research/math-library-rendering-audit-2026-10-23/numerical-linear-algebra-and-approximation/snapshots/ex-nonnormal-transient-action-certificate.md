---
id: ex-nonnormal-transient-action-certificate
kind: example
title: "A nonnormal action grows transiently while its Arnoldi residual certificate remains valid"
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
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - thm-complex-exponential-addition-and-real-extension
  - thm-derivative-of-exponential
  - thm-chain-rule
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-continuous-implies-integrable
  - lem-exponential-series-has-infinite-radius
  - lem-phi-series-converges-absolutely
  - lem-logarithmic-norm-bounds-the-matrix-exponential
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
    - title: "Nicholas J. Higham, What Is the Logarithmic Norm?"
      url: "https://nhigham.com/2022/01/18/what-is-the-logarithmic-norm/"
      locator: "Theorems 3 and 6, logarithmic-norm exponential bound and Euclidean formula."
---

## Statement

Let $A=\begin{bmatrix}-1&3\\0&-1\end{bmatrix}$, $v=e_2$, $t=1$, and use one exact Arnoldi step. Compute the exact action and projection, its residual certificate, and the logarithmic-norm growth bound.

## Facts & Assumptions

**Given:** The stated real matrix, starting vector, time, and exact-arithmetic Arnoldi run with $m=1$.

[F1] [[def-arnoldi-process]] and [[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]: Arnoldi starts with $q_1=v/\|v\|_2$ and represents $Aq_1=H_1q_1+h_{2,1}q_2$ for a nonzero residual.

[F2] [[alg-arnoldi-exponential-and-phi-actions]]: the exact one-step exponential projection is $\|v\|_2V_1e^{tH_1}e_1$.

[F3] [[def-phi-functions-by-everywhere-convergent-series]] and [[lem-phi-series-converges-absolutely]]: scalar and matrix exponentials are given by their absolutely convergent power series; in particular $e^A=\sum_{j\ge0}A^j/j!$ and $\exp(-1)=\sum_{j\ge0}(-1)^j/j!$.

[F4] [[def-logarithmic-norm-for-complex-matrices]] and [[lem-logarithmic-norm-bounds-the-matrix-exponential]]: $\mu_2(A)$ is the largest eigenvalue of $(A+A^*)/2$, and $\|e^{\tau A}\|_2\le e^{\tau\mu_2(A)}$ for $\tau\ge0$.

[F5] [[thm-arnoldi-exponential-action-error-bound]]: the exact action error is the initial mismatch term plus the oriented integral of $e^{(t-s)A}(AV-VH)c(s)$; its norm is bounded by the logarithmic-norm-weighted residual integral, with no added $D$, $\Omega$, or reduced-action term when these are zero.

[F6] [[def-real-exponential-function-and-e]] and [[lem-exponential-series-has-infinite-radius]]: $e=\sum_{j\ge0}1/j!$.

[F7] [[cor-exponential-reciprocal-and-positivity]]: for every real $x$, $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$.

[F8] [[thm-complex-exponential-addition-and-real-extension]]: the complex exponential satisfies its addition law and agrees with the real exponential on real inputs.

[F9] [[thm-derivative-of-exponential]]: $(\exp x)'=\exp x$ for real $x$.

[F10] [[thm-chain-rule]]: differentiating an exponential composed with a real affine map multiplies by the affine slope.

[F11] [[cor-vector-valued-ftc-and-lipschitz-bound]]: for a continuously differentiable real scalar function, the definite integral equals the endpoint difference of an antiderivative.

[F12] [[thm-continuous-implies-integrable]]: every continuous real-valued function on a nondegenerate closed bounded interval is Riemann integrable.

## Proof

1.1 With $q_1=e_2$, $H_1=e_2^*Ae_2=-1$ and $Ae_2-H_1e_2=3e_1$, so $h_{2,1}=3$ and $q_2=e_1$. Therefore [F2] gives the projection $e^{-1}e_2$, where [F8] identifies this scalar value with the real exponential. [given, F1, F2, F8, algebra]

2.1 Write $A=-I+N$, where $N=\begin{bmatrix}0&3\\0&0\end{bmatrix}$ and $N^2=0$. For $j=1$, $A=(-1)I+N$; if $A^j=(-1)^jI+j(-1)^{j-1}N$, multiplying by $-I+N$ and using $N^2=0$ yields $A^{j+1}=(-1)^{j+1}I+(j+1)(-1)^jN$. Thus induction proves the formula for all $j\ge1$. Substituting into [F3] and using absolute convergence to reindex gives $e^A=\sum_{j\ge0}A^j/j!=\left(\sum_{j\ge0}(-1)^j/j!\right)I+\left(\sum_{j\ge1}(-1)^{j-1}/(j-1)!\right)N=e^{-1}(I+N)$. By [F8], the scalar complex value at $-1$ is the real $e^{-1}$, and [F7] gives $e^{-1}=1/e$. Thus $e^Ae_2=e^{-1}(3e_1+e_2)$ and the exact projection error is $3/e$. For every $j\ge1$, the $j-1$ factors $2,\ldots,j$ in $j!$ are at least $2$, so $j!\ge2^{j-1}$, strictly for $j\ge3$; hence [F6] gives $e=1+\sum_{j\ge1}1/j!<1+\sum_{j\ge1}2^{-(j-1)}=3<\sqrt{10}$. Positivity and reciprocity in [F7] now give $\|e^Ae_2\|_2=\sqrt{10}/e>1$, so the action grows in norm from the unit initial vector. [given, F3, F6, F7, F8, step 1.1, algebra, induction]

3.1 The Hermitian part is $\begin{bmatrix}-1&3/2\\3/2&-1\end{bmatrix}$, with eigenvalues $1/2$ and $-5/2$, hence by [F4] $\mu_2(A)=1/2$. The semigroup bound in [F4] is $\|e^{\tau A}\|_2\le e^{\tau/2}$. In the residual estimate $c(s)=e^{-s}$, so [F5] gives $\|e^Ae_2-e^{-1}e_2\|_2\le\int_0^1 3e^{(1-s)/2}e^{-s}\,ds$. By [F8], the integrand is $3e^{1/2}e^{-3s/2}$, which is continuous on $[0,1]$ and integrable by [F12]. An antiderivative of $e^{-3s/2}$ is $-(2/3)e^{-3s/2}$ by [F9] and [F10]; [F11] then evaluates the bound as $2e^{1/2}(1-e^{-3/2})$. For the exact residual identity in [F5], $Ne_1=0$ gives $e^{(1-s)A}e_1=e^{-(1-s)}e_1$. The addition law [F8] makes the residual integrand the constant vector $3e^{-1}e_1$, whose coordinates are continuous and integrable by [F12]; [F11] gives $\int_0^1e^{(1-s)A}(3e^{-s}e_1)\,ds=(3/e)e_1$, consistent with the exact error. The certificate remains valid in this nonnormal case, while the positive logarithmic norm allows transient growth. [given, F4, F5, F8, F9, F10, F11, F12, step 1.1, algebra] ∎
