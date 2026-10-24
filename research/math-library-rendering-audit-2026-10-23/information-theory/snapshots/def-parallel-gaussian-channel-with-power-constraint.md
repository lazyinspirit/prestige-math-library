---
id: def-parallel-gaussian-channel-with-power-constraint
kind: definition
title: Finite-dimensional additive Gaussian channel with average power
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-axiom-of-choice, def-multivariate-normal-law, thm-nondegenerate-multivariate-normal-law-has-density, def-natural-logarithm]
justified_by: []
aliases: []
axiom_use: AC is inherited from the multivariate-normal construction; no additional choice is used by the channel definition.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.3"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §17.3"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
    - title: "David J. C. MacKay, Information Theory, Inference, and Learning Algorithms, Chapter 12 §12.3"
      url: https://www.geophysik.uni-muenchen.de/~igel/Inv-II/Others/Mackay/information_theory.pdf
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]]. Fix an integer $d\ge1$ and a real symmetric positive-definite matrix $K\in\mathbb R^{d\times d}$. The **$d$-dimensional additive Gaussian channel with power budget $P\ge0$** has input and output spaces $\mathbb R^d$ and single-use law
$$Y=X+Z,\qquad Z\sim N_d(0,K),\qquad Z\perp X.$$
At each use a fresh independent copy of $Z$ is added, so the channel is memoryless. The input cost is $c(x)=\|x\|_2^2$. A length-$n$ deterministic code with $M$ equiprobable messages meets the **average block power constraint** $P$ when
$$\frac1{nM}\sum_{m=1}^M\sum_{t=1}^n\|x_t(m)\|_2^2\le P.$$
Rates are measured in nats per vector use. The noise law is [[def-multivariate-normal-law]]; positive definiteness of $K$ gives the Lebesgue density stated in [[thm-nondegenerate-multivariate-normal-law-has-density]]. The scalar case $d=1$ is the real AWGN channel. Rates use the natural logarithm [[def-natural-logarithm]].
