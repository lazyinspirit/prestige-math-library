---
id: ex-importance-sampling-finite-mean-infinite-second-moment
kind: example
title: An unbiased importance-sampling weight can have infinite second moment
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-rare-event-efficiency-criteria
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-is-unbiased
  - thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: n/a
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §§3.1–3.3"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Example

Let $\Omega=\{1,2,\ldots\}$, $P(k)=c_2/k^2$, and $Q(k)=c_3/k^3$, where $c_s=(\sum_{k=1}^{\infty}k^{-s})^{-1}$. For $A_m=\{k\ge m\}$, the ordinary importance-sampling contribution is unbiased and integrable, but its second moment is infinite.

## Facts & Assumptions

**Given:** The probability mass functions above, the event $A_m$ for fixed $m\ge1$, and proposal law $Q$.

[F1] [[alg-importance-sampling]]: The single-draw contribution is $\mathbf1_{A_m}(X)P(X)/Q(X)$ for $X\sim Q$.

[F2] [[thm-ordinary-importance-sampling-is-unbiased]]: If the target event law is absolutely continuous with respect to the proposal and the weighted contribution is integrable, its expectation is $P(A_m)$.

[F3] [[thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment]]: A finite weighted second moment is a sufficient condition for finite variance.

[F4] [[def-rare-event-efficiency-criteria]]: Efficiency criteria record whether the second moment is finite; finite variance is not implied by unbiasedness alone.

## Verification

**Proof technique:** direct.

1.1 Both constants are finite and positive because the defining series converge for exponents $2$ and $3$, and $Q(k)>0$ for every $k$; hence $P\ll Q$. The likelihood ratio is $P(k)/Q(k)=(c_2/c_3)k$. [given, algebra]

2.1 By [F1], $ \mathbb E_Q Z=\sum_{k=m}^{\infty}\frac{c_3}{k^3}\frac{c_2}{c_3}k =c_2\sum_{k=m}^{\infty}k^{-2}=P(A_m)\in(0,\infty), $ so [F2] confirms unbiasedness. [F1, F2, step 1.1, algebra]

3.1 The second moment is $ \mathbb E_Q Z^2=\sum_{k=m}^{\infty}\frac{c_3}{k^3}\left(\frac{c_2}{c_3}k\right)^2 =\frac{c_2^2}{c_3}\sum_{k=m}^{\infty}\frac1k=\infty $ by divergence of the harmonic tail. Thus the weighted second-moment hypothesis in [F3] is absent and this unbiased estimator has infinite variance; [F4] therefore rules out describing its second-moment efficiency as finite. [F3, F4, step 1.1, algebra] ∎
