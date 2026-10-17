---
id: thm-na-computed-fft-convolution-error-bound
kind: theorem
title: "Computed FFT convolution error separates transform, product, inverse, and final-scale terms"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 15
deps: [alg-na-computed-fft-cyclic-and-linear-convolution, thm-na-computed-unitary-radix-two-fft-error-bound, lem-na-complex-product-six-operation-roundoff-bound, lem-na-zero-padding-removes-linear-convolution-aliasing, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, def-standard-relative-floating-point-model-and-unit-roundoff, thm-finite-parseval-and-plancherel, thm-finite-fourier-inversion, def-cyclic-convolution-on-z-mod-n, def-counting-inner-product-on-complex-functions-on-z-mod-n, def-complex-conjugate-real-imaginary-part-and-modulus, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24 and Problem 24.1, pp. 453–457"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 13 §13.1"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $M=2^q$ with integer $q\ge0$ and let $a,b\in\mathbb C^M$ be the arrays actually transformed by [[alg-na-computed-fft-cyclic-and-linear-convolution]] (zero-padded in linear mode). Assume all operations succeed, $u\le1/16$, the twiddle certificates satisfy $\epsilon_\ell\le\epsilon_{\rm tw}\le1/4$, and put $\eta=10u+\epsilon_{\rm tw}$, $\rho=(1+\eta)^q-1$, $\epsilon_p=3u$, $\epsilon_s=2u+u^2$, and $\lambda=2\rho+\rho^2+\epsilon_p(1+\rho)^2$. If $c=a*_M b$ is the exact unnormalised cyclic convolution, then the computed length-$M$ result $\widehat c$ satisfies

$$
\|\widehat c-c\|_2\le\sqrt M\left[\lambda+\rho(1+\lambda)+\epsilon_s(1+\rho)(1+\lambda)\right]\|a\|_2\|b\|_2.
$$

In linear mode, the same right side bounds the error of the first $n+m-1$ outputs relative to the exact linear convolution, because zero padding removes cyclic aliasing. This is a conditional error estimate, not an unconditional success certificate.

## Facts & Assumptions

**Given:** The successful computation, length-$M$ input arrays, unitary transforms $A=\mathcal F_Ma$ and $B=\mathcal F_Mb$, $u,\epsilon_{\rm tw}$, and the constants in the Statement.

[F1] The transform and inverse-transform errors satisfy $\|\widehat A-A\|_2\le\rho\|a\|_2$, $\|\widehat B-B\|_2\le\rho\|b\|_2$, and $\|\widehat z-\mathcal F_M^{-1}\widehat p\|_2\le\rho\|\widehat p\|_2$ ([[thm-na-computed-unitary-radix-two-fft-error-bound]], [[thm-finite-fourier-inversion]]).

[F2] For vectors $u,v\in\mathbb C^M$, $\|u\odot v\|_2\le\|u\|_2\|v\|_2$, since $\sum_k|u_k|^2|v_k|^2\le(\sum_k|u_k|^2)(\sum_k|v_k|^2)$ ([[def-counting-inner-product-on-complex-functions-on-z-mod-n]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] Finite Parseval gives $\|A\|_2=\|a\|_2$, $\|B\|_2=\|b\|_2$, and $\|\mathcal F_M^{-1}z\|_2=\|z\|_2$; the cyclic convolution identity is $a*_Mb=\sqrt M\,\mathcal F_M^{-1}(A\odot B)$ ([[thm-finite-parseval-and-plancherel]], [[thm-finite-fourier-inversion]], [[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]]).

[F4] Each pointwise complex product error is at most $3u|\widehat A_k||\widehat B_k|$ ([[lem-na-complex-product-six-operation-roundoff-bound]]).

[F5] Put $s=\operatorname{fl}(\sqrt M)$. The model gives $|s-\sqrt M|\le u\sqrt M$ and each componentwise rounded product with $s$ has error at most $u|s z_j|$. Thus the combined scale error is at most $[u(1+u)+u]\sqrt M\|z\|_2=(2u+u^2)\sqrt M\|z\|_2=\epsilon_s\sqrt M\|z\|_2$ on a successful normal-range result ([[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], [[def-standard-relative-floating-point-model-and-unit-roundoff]]).

[F6] The Euclidean norm on $\mathbb C^M$ is subadditive, by expansion of its square and Cauchy–Schwarz ([[def-counting-inner-product-on-complex-functions-on-z-mod-n]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

1.1 Write $\widehat A=A+d_A$ and $\widehat B=B+d_B$. By [F1], $\|d_A\|_2\le\rho\|a\|_2$ and $\|d_B\|_2\le\rho\|b\|_2$, while [F3] gives $\|A\|_2=\|a\|_2$ and $\|B\|_2=\|b\|_2$. Expand $\widehat A\odot\widehat B-A\odot B=d_A\odot B+A\odot d_B+d_A\odot d_B$. Applying [F2] termwise bounds this transform perturbation by $(2\rho+\rho^2)\|a\|_2\|b\|_2$. For the rounded products, [F4] gives coordinate errors $|e_{p,k}|\le\epsilon_p|\widehat A_k||\widehat B_k|$; squaring and using [F2] yields $\|e_p\|_2\le\epsilon_p\|\widehat A\|_2\|\widehat B\|_2\le\epsilon_p(1+\rho)^2\|a\|_2\|b\|_2$. Thus $\|\widehat p-A\odot B\|_2\le\lambda\|a\|_2\|b\|_2$ and, by [F2], $\|\widehat p\|_2\le(1+\lambda)\|a\|_2\|b\|_2$. [given, F1, F2, F3, F4, algebra]

2.1 Let $z=\mathcal F_M^{-1}(A\odot B)=c/\sqrt M$ and let $\widehat z$ be the computed inverse result before final scaling. By Parseval [F3], $\|\mathcal F_M^{-1}(\widehat p-A\odot B)\|_2=\|\widehat p-A\odot B\|_2$; by the inverse part of [F1], $\|\widehat z-\mathcal F_M^{-1}\widehat p\|_2\le\rho\|\widehat p\|_2$. Subadditivity [F6] and step 1.1 give $\|\widehat z-z\|_2\le[\lambda+\rho(1+\lambda)]\|a\|_2\|b\|_2$. Also $\|\widehat z\|_2\le(1+\rho)\|\widehat p\|_2\le(1+\rho)(1+\lambda)\|a\|_2\|b\|_2$. [step 1.1, F1, F3, F6, algebra]

3.1 The exact scaled target is $\sqrt M z=c$. By [F5], scaling $\widehat z$ incurs at most $\epsilon_s\sqrt M\|\widehat z\|_2$ additional error. Subadditivity [F6] and step 2.1 therefore give $\|\widehat c-c\|_2\le\sqrt M[\lambda+\rho(1+\lambda)+\epsilon_s(1+\rho)(1+\lambda)]\|a\|_2\|b\|_2$, as claimed. In linear mode, [[lem-na-zero-padding-removes-linear-convolution-aliasing]] identifies the exact first $n+m-1$ cyclic entries with the linear convolution, and coordinate restriction cannot increase the Euclidean norm. [step 2.1, F5, F6, algebra] ∎
