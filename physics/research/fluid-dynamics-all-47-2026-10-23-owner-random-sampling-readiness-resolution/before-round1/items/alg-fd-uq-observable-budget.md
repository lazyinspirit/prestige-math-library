---
id: alg-fd-uq-observable-budget
title: IID sampling budget for a numerically biased observable
kind: algorithm
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-fd-random-fluid-observable
  - thm-fd-observable-sampling-bias-split
dependency_roles:
  def-fd-random-fluid-observable: mathematical-premise
  thm-fd-observable-sampling-bias-split: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 2, §§2.1–2.2"
      url: "https://artowen.su.domains/mc/Ch-intro.pdf"
    - title: "NASA Glenn Research Center, Uncertainty and Error in CFD Simulations"
      url: "https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html"
---

## Definition

**Input:** A numerical output law $Y_h$ from the definition of a random fluid observable; an oracle that returns mutually independent samples with the law of $Y_h$; a finite bias allocation $\epsilon_b\ge0$; a finite variance upper bound $V_h\ge0$; a sampling allocation $\epsilon_s>0$; a failure allocation $\delta\in(0,1)$; and a certificate. Here a certificate means a separate proof or argument establishing that $Y$ and $Y_h$ have finite means, $Y_h$ has finite variance, $|\mathbb E[Y_h]-\mathbb E[Y]|\le\epsilon_b$, $\operatorname{Var}(Y_h)\le V_h$, and the oracle returns IID samples with the stated law. The algorithm does not check the mathematical validity of that certificate.

**Procedure:** If the certificate or oracle is absent, return `not-certified` and no sample-size or error guarantee. If a supplied numeric value is not finite or is outside its stated range, return `invalid-input`. Otherwise set

$$N:=\max\left\{1,\left\lceil\frac{V_h}{\delta\epsilon_s^2}\right\rceil\right\}.$$

Request $N$ independent samples $Y_{h,1},\ldots,Y_{h,N}$ from the oracle and compute $\widehat\theta_{h,N}:=N^{-1}\sum_{j=1}^N Y_{h,j}$. Return `conditional-budget` together with $N$, $\widehat\theta_{h,N}$, total absolute tolerance $\epsilon_b+\epsilon_s$, failure bound $\delta$, and root-mean-square upper bound $\sqrt{V_h/N+\epsilon_b^2}$. The returned guarantees are conditional on the supplied certificates and IID sampling law. The procedure does not estimate or certify the numerical bias or variance bound from the sample or from mesh refinement. If the observable is dimensional, both tolerance allocations use its fixed output unit, $V_h$ uses the squared unit, and $\delta$ is dimensionless.

## Definition references

[Art B. Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 2, §§2.1–2.2](https://artowen.su.domains/mc/Ch-intro.pdf)

[NASA Glenn Research Center, *Uncertainty and Error in CFD Simulations*](https://www.grc.nasa.gov/WWW/wind/valid/tutorial/errors.html)
