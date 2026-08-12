---
id: def-product-of-finite-probability-spaces
kind: definition
title: "The finite product of finite probability spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-probability-space-and-event, def-product-of-an-indexed-family, def-finite-sum]
justified_by: [thm-product-probability-has-independent-coordinate-events]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Definitions 4.3-4.5"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Definition

Let $((\Omega_i,w_i))_{i\in I}$ be a finite indexed family of finite probability spaces. Their **product probability space** has outcome set
$$\Omega:=\prod_{i\in I}\Omega_i$$
and assigns $\omega=(\omega_i)_{i\in I}$ the weight
$$w(\omega):=\prod_{i\in I}w_i(\omega_i).$$
For $I=\varnothing$, the product outcome set is the singleton containing the empty function and its weight is the empty product $1$. Normalization and independence of coordinate events are proved in [[thm-product-probability-has-independent-coordinate-events]].
