---
id: thm-na-bluestein-chirp-phase-error-separate-from-fft-error
kind: theorem
title: "Bluestein chirp-phase error is bounded separately from FFT-convolution error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 16
deps: [alg-na-computed-fast-transforms-and-convolution, thm-na-computed-fft-convolution-error-bound, thm-na-certified-unit-circle-phase-enclosure, lem-na-bluestein-chirp-convolution-factorization, lem-na-complex-product-six-operation-roundoff-bound, lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product, thm-finite-parseval-and-plancherel, def-cyclic-convolution-on-z-mod-n, def-counting-inner-product-on-complex-functions-on-z-mod-n, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nicholas J. Higham, Accuracy and Stability of Numerical Algorithms, 2nd ed., Chapter 24, pp. 452–457"
      url: https://pages.stat.wisc.edu/~bwu62/771/hingham2002.pdf
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 5 §5.2"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $N\ge2$ be prime, $M\ge2N-1$ a power of two, and $K=2N-1$. Use the Bluestein representation of [[lem-na-bluestein-chirp-convolution-factorization]]. Suppose every certified chirp phase has absolute error at most $0<\tau\le1/4$, $u\le1/16$, $E\ge0$, the modulation and demodulation products succeed under the six-operation complex model, and the computed cyclic convolution satisfies $\|\widehat c-\widehat a*_M\widehat b\|_2\le\sqrt M E\|\widehat a\|_2\|\widehat b\|_2$. Put $\delta=\tau+3u(1+\tau)$ and $H=\delta(2+\delta)+E(1+\delta)^2$. Then the computed **unnormalised** length-$N$ DFT output $\widehat X$ satisfies

$$
\|\widehat X-X\|_2\le\sqrt{MK}\,[\delta+(1+\delta)H]\,\|x\|_2.
$$

The term $\delta$ records chirp enclosure and chirp multiplication roundoff; $E$ records the separate FFT, pointwise-product, inverse, and cyclic-convolution scaling error. No mixed-radix stability claim is inferred.

## Facts & Assumptions

**Given:** A prime $N\ge2$, $M\ge2N-1$ a power of two, $x\in\mathbb C^N$, a successful Bluestein computation, and the bounds $\tau,u,E$ in the Statement.

[F1] The exact unnormalised DFT is $X_k=\gamma_k(a*_Mb)_k$, where $a_j=\alpha_jx_j$, $\alpha_j=e^{-\pi ij^2/N}$, $b_{[t]_M}=\beta_t=e^{\pi it^2/N}$, and $\gamma_k=e^{-\pi ik^2/N}$ ([[lem-na-bluestein-chirp-convolution-factorization]]).

[F2] The certified phase algorithm gives $|\widehat\alpha_j-\alpha_j|\le\tau$, $|\widehat\beta_t-\beta_t|\le\tau$, and $|\widehat\gamma_k-\gamma_k|\le\tau$; all exact chirp moduli equal $1$ ([[thm-na-certified-unit-circle-phase-enclosure]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F3] A successful complex multiplication contributes at most $3u|z||w|$ absolute error ([[lem-na-complex-product-six-operation-roundoff-bound]]).

[F4] For length-$M$ vectors, $\|a*_Mb\|_2\le\sqrt M\|a\|_2\|b\|_2$, and Parseval preserves norms under $\mathcal F_M$ and its inverse ([[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]], [[thm-finite-parseval-and-plancherel]], [[def-counting-inner-product-on-complex-functions-on-z-mod-n]]).

[F5] The computed cyclic convolution satisfies $\|\widehat c-\widehat a*_M\widehat b\|_2\le\sqrt M E\|\widehat a\|_2\|\widehat b\|_2$ ([[thm-na-computed-fft-convolution-error-bound]]).

[F6] For length-$M$ vectors, $\|u\odot v\|_2\le\|u\|_2\|v\|_2$: after squaring, the product $(\sum_k|u_k|^2)(\sum_k|v_k|^2)$ contains the terms $|u_k|^2|v_k|^2$ and only additional nonnegative cross terms.

[F7] The Euclidean norm on $\mathbb C^M$ is subadditive ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-counting-inner-product-on-complex-functions-on-z-mod-n]]).

## Proof

1.1 Let $\widehat a_j=\operatorname{fl}_{\mathbb C}(\widehat\alpha_jx_j)$ on $0\le j<N$ and zero elsewhere. By [F2]–[F3], $|\widehat a_j-a_j|\le(\tau+3u(1+\tau))|x_j|=\delta|x_j|$, so $\|\widehat a-a\|_2\le\delta\|x\|_2$ and $\|\widehat a\|_2\le(1+\delta)\|x\|_2$. The vector $b$ has exactly $K$ unit-modulus entries; [F2] gives $\|\widehat b-b\|_2\le\tau\sqrt K\le\delta\sqrt K$ and $\|\widehat b\|_2\le(1+\delta)\sqrt K$. [given, F2, F3, algebra]

2.1 By bilinearity, $\widehat a*_M\widehat b-a*_Mb=(\widehat a-a)*_M\widehat b+a*_M(\widehat b-b)$. Applying the exact convolution formula [F4], Parseval, and the pointwise product bound [F6] gives $\|\widehat a*_M\widehat b-a*_Mb\|_2\le\sqrt M(\|\widehat a-a\|_2\|\widehat b\|_2+\|a\|_2\|\widehat b-b\|_2)\le\sqrt{MK}\,\delta(2+\delta)\|x\|_2$ by step 1.1. The computed-convolution error [F5] is at most $\sqrt{MK}E(1+\delta)^2\|x\|_2$. Thus, with $c=a*_Mb$ and $\widehat c$ the computed convolution, $\|\widehat c-c\|_2\le\sqrt{MK}H\|x\|_2$; [F4] and step 1.1 give $\|c\|_2\le\sqrt{MK}\|x\|_2$, so $\|\widehat c\|_2\le\sqrt{MK}(1+H)\|x\|_2$ by [F7]. [F1, F2, F4, F5, F6, F7, step 1.1, algebra]

3.1 The output is the componentwise rounded product $\widehat X_k=\operatorname{fl}_{\mathbb C}(\widehat\gamma_k\widehat c_k)$. By [F2]–[F3], $|\widehat X_k-\gamma_k\widehat c_k|\le\delta|\widehat c_k|$; since $|\gamma_k|=1$, step 2.1 and subadditivity [F7] give $\|\widehat X-X\|_2\le\delta\|\widehat c\|_2+\|\widehat c-c\|_2\le\sqrt{MK}[\delta(1+H)+H]\|x\|_2=\sqrt{MK}[\delta+(1+\delta)H]\|x\|_2$. This is the claimed separated chirp and convolution bound. [F1, F2, F3, F7, step 2.1, algebra] ∎
