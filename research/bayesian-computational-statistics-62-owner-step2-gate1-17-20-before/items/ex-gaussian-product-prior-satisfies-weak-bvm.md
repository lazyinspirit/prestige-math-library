---
id: ex-gaussian-product-prior-satisfies-weak-bvm
kind: example
title: A Gaussian wavelet product prior covered by the weak BvM theorem
status: draft
origin: pipeline
dependency_level: 4
deps:
  - lem-wavelet-product-prior-is-l2-valued
  - def-countable-choice
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

Let $\varphi(u)=(2\pi)^{-1/2}e^{-u^2/2}$ be the standard normal density, take any $\alpha>0$, and use the product prior scales $\sigma_l=2^{-l(\alpha+1/2)}$ on a wavelet basis with $2^l$ coefficients at level $l\ge0$. Let the truth have coefficients $\theta_{0,lk}=\sigma_l$, so $r_{lk}=1$ for every $(l,k)$. With $M=1$ and $\tau=2$, all density and coefficient hypotheses of the weak BvM theorem hold.

## Facts & Assumptions

**Given:** The stated wavelet basis, the standard normal coefficient density, the scale $\sigma_l$, and the truth coefficients $\theta_{0,lk}=\sigma_l$.

[F1] [[lem-wavelet-product-prior-is-l2-valued]]: For $\alpha>0$ and a coefficient density with finite second moment, the wavelet series defines an $L^2$ random element.

[F2] [[thm-weak-nonparametric-bernstein-von-mises-for-product-priors]]: The weak BvM conclusion holds when the truth's normalized coefficients are bounded by $M<\tau$, the prior density is bounded above and bounded below on $(-\tau,\tau)$, has finite second moment, and is continuous at each normalized truth coefficient.

[A1] [[def-countable-choice]]: Countable choice is assumed for the $L^2$ prior construction in [F1]; the full posterior kernel is supplied by the model input of [F2], and no full Axiom of Choice is needed for the bounded-Lipschitz conclusion.

## Verification

**Given:** Countable choice, $\alpha>0$, $\sigma_l=2^{-l(\alpha+1/2)}$, $\theta_{0,lk}=\sigma_l$, and $\varphi(u)=(2\pi)^{-1/2}e^{-u^2/2}$.

1.1 The normal density is bounded and continuous, is bounded below by $(2\pi)^{-1/2}e^{-2}$ on $(-2,2)$, and has finite second moment $1$. The normalized truth coefficients all equal $r_{lk}=1$, hence $\sup_{l,k}|r_{lk}|=1\le M=1<\tau=2$. [given, algebra]

1.2 The deterministic truth series is in $L^2$ because orthogonality gives $\sum_{l\ge0}\sum_{k\in K_l}\theta_{0,lk}^2=\sum_{l\ge0}2^l\sigma_l^2=\sum_{l\ge0}2^{-2\alpha l}<\infty$. The prior is likewise $L^2$-valued by [F1] under [A1]. [A1, F1, given, algebra]

2.1 All hypotheses of [F2] now hold, including continuity at each $r_{lk}=1$; therefore for every $\delta>1/2$ the scaled posterior converges to canonical white noise in the bounded-Lipschitz metric of $H(\delta)$. [F2, step 1.1, step 1.2] ∎
