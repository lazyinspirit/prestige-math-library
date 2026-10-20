---
id: def-gan-jensen-shannon-divergence
kind: definition
title: Density-defined Jensen–Shannon divergence
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-gan-minimax-objective
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-natural-logarithm
  - thm-coordinatewise-measurability-into-r-n
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
justified_by:
  - lem-gan-jensen-shannon-divergence-nonnegative-and-equality
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ian J. Goodfellow et al., Generative Adversarial Nets, arXiv:1406.2661v1"
      url: "https://arxiv.org/pdf/1406.2661"
    - title: "Yingzhen Li, Lecture notes on generative adversarial networks (GANs), Deep Learning (Winter 2022, Imperial College London)"
      url: "https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf"
verification:
  precheck: n/a
---

## Definition

In the common-density setting, put $m=(p+q)/2$. Additivity and nonnegative homogeneity of the integral give $\int m\,d\mu=1$. Define $r=p/m$ and $s=q/m$ where $m>0$, and define $r=s=0$ where $m=0$; then $0\le r,s\le2$ and $r+s=2$ wherever $m>0$. Let $\phi(0)=0$ and $\phi(t)=t\ln t$ for $t>0$. The density-defined Jensen–Shannon divergence is
$$
\operatorname{JS}_\mu(P,Q):=\frac12\int m\phi(r)\,d\mu+\frac12\int m\phi(s)\,d\mu.
$$
The integrals are finite, and this formula is the average of the two density-relative-entropy terms from $p$ and $q$ to the mixture density $m$.

## Definition references

[[def-gan-minimax-objective|Common-density setting and probability laws]]

[[def-integrable-real-and-complex-functions-and-their-integrals|Lebesgue integrability of signed functions]]

[[def-natural-logarithm|Natural logarithm]]

[[thm-coordinatewise-measurability-into-r-n|Coordinatewise measurability into Euclidean space]]

[[thm-composition-with-borel-functions-preserves-measurability|Composition with a Borel map]]

[[thm-arithmetic-and-lattice-operations-preserve-measurability|Measurability of arithmetic and products]]

[[cor-additivity-of-the-nonnegative-lebesgue-integral|Additivity of the nonnegative integral]]

[[prop-order-and-scalar-rules-for-the-nonnegative-integral|Nonnegative homogeneity of the integral]]

[Goodfellow et al., §4.1, equations (5)–(6), complete 9-page paper](https://arxiv.org/pdf/1406.2661)

[Li, §1.2, equation (11), complete 6-page lecture note](https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf)
