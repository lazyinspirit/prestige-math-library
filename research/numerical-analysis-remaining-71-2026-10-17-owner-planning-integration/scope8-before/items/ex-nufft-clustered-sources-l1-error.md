---
id: ex-nufft-clustered-sources-l1-error
kind: example
title: Clustered sources and absolute l1 error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms-examples
dependency_level: 6
proof_strategy: direct
deps:
  - def-nufft-transform-types-and-mode-conventions
  - def-nufft-finite-array-norms
  - thm-nufft-gaussian-gridding-error-and-type2-adjoint
  - def-countable-choice
  - def-real-elementary-functions-and-domains
  - lem-elementary-power-series-converge-uniformly-on-bounded-sets
  - thm-complex-exponential-addition-and-real-extension
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-sine-and-cosine-derivatives
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-ftc-second-part
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Statement

Let $0<\delta<1/4$, take the one-dimensional type-1 data
$$x_0=1/4,\qquad x_1=1/4+\delta,\qquad c_0=1,\quad c_1=-1,$$
and include mode $k=1$. For every real $\delta$ in this range, $\|c\|_1=2$ while
$$F_1=e^{-\pi i/2}(1-e^{-2\pi i\delta}),\qquad |F_1|\le2\pi\delta.$$
Thus this exact Fourier coefficient tends to zero as the source points cluster, although the coefficient l1 norm remains $2$. The dyadic subfamily, for example $\delta=2^{-n}$ with $n\ge3$, consists of admissible exact input coordinates and also tends to zero. For any such dyadic datum for which the algorithm has a successful run, the theorem gives an absolute l1-scaled error certificate; the exact family has no positive lower bound on $|F_1|$ from which that certificate alone yields a relative-error guarantee.

## Facts & Assumptions

**Given:** $0<\delta<1/4$, the displayed two-source type-1 data, and a mode box with $K_1\ge1$.

[A1] [[def-countable-choice]]: the successful-run error theorem assumes Countable Choice through the Gaussian Poisson-summation supplier.

[F1] [[def-nufft-transform-types-and-mode-conventions]]: $F_1=\sum_jc_je^{-2\pi i x_j}$.

[F2] [[thm-nufft-gaussian-gridding-error-and-type2-adjoint]]: for any successful type-1 run on admissible finite dyadic data, the error is bounded absolutely by $\epsilon_{\rm ana}\|c\|_1+B_{\rm round}$; success is conditional on the supplied candidate and arithmetic controls.

[F3] [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], and [[thm-sine-and-cosine-derivatives]]: the complex exponential is additive-to-multiplicative, $e^{it}=\cos t+i\sin t$, $|e^{it}|=1$, and $(\sin t)'=\cos t$.

[F4] [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]: $|\cos t|\le1$ for real $t$.

[F5] [[lem-elementary-power-series-converge-uniformly-on-bounded-sets]], [[def-real-elementary-functions-and-domains]], and [[thm-ftc-second-part]]: cosine is continuous and integrable on each compact interval, the integral obeys $|\int_a^b h|\le|b-a|\max|h|$, and integrating the derivative of sine gives $\sin t=\int_0^t\cos s\,ds$.

[F6] [[def-real-elementary-functions-and-domains]]: $\pi=4\int_0^1(1+s^2)^{-1}\,ds\ge2>0$.

[F7] [[def-nufft-finite-array-norms]]: $\|c\|_1=\sum_j|c_j|$ for the displayed two-entry array.

[F8] [[lem-complex-conjugation-and-modulus-laws]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $|zw|=|z||w|$, $|i|=1$, and $|a|=a$ for $a\ge0$.

## Proof

1.1 Since $c_0=1$ and $c_1=-1$, [F7] gives $\|c\|_1=|1|+|-1|=2$. For mode $1$, substitute the source locations into [F1] to obtain $F_1=e^{-2\pi i/4}-e^{-2\pi i(1/4+\delta)}=e^{-\pi i/2}(1-e^{-2\pi i\delta}).$ This is a direct factorization of the exact two-term sum. [given, F1, F7, algebra]

2.1 Put $t=\pi\delta$. By the complex exponential addition law and [F3], $1-e^{-2it}=e^{-it}(e^{it}-e^{-it})=e^{-it}(2i\sin t),$ so $|1-e^{-2it}|=2|\sin t|$ by [F3] and [F8]. From [F3]–[F5], for $t\ge0$ we have $|\sin t|=\left|\int_0^t\cos s\,ds\right|\le t\max_{0\le s\le t}|\cos s|\le t.$ Since $t=\pi\delta>0$ by [F6] and $|e^{-\pi i/2}|=1$, step 1.1 yields $|F_1|\le2t=2\pi\delta$. Taking the dyadic sequence $\delta=2^{-n}$ with $n\ge3$ shows that admissible exact input coefficients can have $|F_1|$ arbitrarily small while step 1.1 keeps $\|c\|_1=2$ by [F7]. Whenever a successful run is available for one of these inputs, [F2] gives an absolute bound without division by $|F_1|$; thus the certificate alone supplies no uniform relative-error estimate without an additional lower bound on the exact output. [A1, F2, F3, F4, F5, F6, F7, F8, step 1.1, algebra] ∎
