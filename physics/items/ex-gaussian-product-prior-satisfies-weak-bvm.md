---
id: ex-gaussian-product-prior-satisfies-weak-bvm
kind: example
title: A Gaussian wavelet product prior covered by the weak BvM theorem
status: published
origin: pipeline
dependency_level: 4
deps:
  - lem-wavelet-product-prior-is-l2-valued
  - def-countable-choice
  - def-negative-sobolev-space-for-white-noise
  - thm-riesz-fischer-completeness-of-l-p
  - lem-density-normal-laws-and-square-summable-gaussian-series
  - thm-weak-nonparametric-bernstein-von-mises-for-product-priors
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Condition 1 and Theorem 9, printed pp. 2013–2014 and 2019–2020"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Condition 7.3.11 and Theorem 7.3.19, printed pp. 584 and 595–596"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Example

Let $\varphi(u)=(2\pi)^{-1/2}e^{-u^2/2}$ be the standard normal density, take any $\alpha>0$, and use the product prior scales $\sigma_l=2^{-l(\alpha+1/2)}$ on an $S$-regular wavelet basis with $2^l$ coefficients at level $l\ge0$, as in the weak BvM theorem. Let the truth have coefficients $\theta_{0,lk}=\sigma_l$, so $r_{lk}=1$ for every $(l,k)$. With $M=1$ and $\tau=2$, all density and coefficient hypotheses of the weak BvM theorem hold.

## Facts & Assumptions

**Given:** The stated $S$-regular wavelet basis, the standard normal coefficient density, the scale $\sigma_l$, and the truth coefficients $\theta_{0,lk}=\sigma_l$.

[F1] [[lem-wavelet-product-prior-is-l2-valued]]: For $\alpha>0$ and a coefficient density with finite second moment, the wavelet series defines an $L^2$ random element.

[F2] [[def-negative-sobolev-space-for-white-noise]]: The chosen $S$-regular wavelet system is a complete orthonormal basis of $L^2([0,1])$.

[F3] [[thm-riesz-fischer-completeness-of-l-p]]: Under countable choice, $L^2([0,1])$ is complete.

[F4] [[lem-density-normal-laws-and-square-summable-gaussian-series]]: The standard normal density has mean $0$ and variance $1$.

[F5] [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]: For the stated $S$-regular wavelet basis, under countable choice and with the supplied white-noise model and posterior kernel, the weak BvM conclusion holds when the truth's normalized coefficients are bounded by $M<\tau$, the prior density is bounded above and bounded below on $(-\tau,\tau)$, has finite second moment, and is continuous at each normalized truth coefficient.

[A1] [[def-countable-choice]]: Countable choice supplies the $L^2$ completeness in [F3] and the prior construction in [F1]; the full posterior kernel is supplied by the model input of [F5], and no full Axiom of Choice is needed for the bounded-Lipschitz conclusion.

## Verification

**Given:** Countable choice, the stated $S$-regular wavelet basis, $\alpha>0$, $\sigma_l=2^{-l(\alpha+1/2)}$, $\theta_{0,lk}=\sigma_l$, $\varphi(u)=(2\pi)^{-1/2}e^{-u^2/2}$, and the white-noise experiment and supplied full posterior kernel of [F5].

1.1 The standard normal density is bounded and continuous, and [F4] gives its second moment $1$. For $|u|<2$, $e^{-u^2/2}>e^{-2}$, so $\varphi(u)\ge(2\pi)^{-1/2}e^{-2}>0$. The normalized truth coefficients all equal $r_{lk}=1$, hence $\sup_{l,k}|r_{lk}|=1\le M=1<\tau=2$. [F4, given, algebra]

1.2 Let $f_N=\sum_{0\le l\le N}\sum_{k\in K_l}\sigma_l\psi_{lk}$. By [F2], for $M>N$ orthogonality gives $\|f_M-f_N\|_2^2=\sum_{N<l\le M}2^l\sigma_l^2=\sum_{N<l\le M}2^{-2\alpha l}$, whose tail tends to zero. Completeness [F3] and [A1] give a limit $f_0\in L^2([0,1])$; continuity of each coefficient functional yields $\langle f_0,\psi_{lk}\rangle=\sigma_l$. The prior is likewise $L^2$-valued by [F1] under [A1]. [A1, F1, F2, F3, given, algebra]

2.1 With the stated $S$-regular basis and supplied posterior kernel, all hypotheses of [F5] now hold, including continuity at each $r_{lk}=1$; therefore for every $\delta>1/2$ the scaled posterior converges to canonical white noise in the bounded-Lipschitz metric of $H(\delta)$, in probability under the fixed-truth data law. [A1, F2, F5, given, step 1.1, step 1.2] ∎
