---
id: cor-divisor-dirichlet-series-zeta-square
kind: corollary
title: "The divisor-counting Dirichlet series is the square of the zeta Dirichlet series on Re s greater than 1"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-divisor-counting-function, thm-dirichlet-series-multiplication-convolution, prop-divisor-functions-under-dirichlet-convolution]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.8"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Statement

For $\Re s>1$,

$$\sum_{n \ge 1} \tau(n)n^{-s} = \zeta(s)^2,$$

where $\zeta(s)=\sum_{n \ge 1} n^{-s}$.

## Facts & Assumptions

**Given:** A complex number $s$ with $\Re s>1$.

[L1] The divisor-counting function satisfies $\tau=\mathbf 1*\mathbf 1$
([[prop-divisor-functions-under-dirichlet-convolution]],
[[def-divisor-counting-function]]).

[L2] Products of absolutely convergent Dirichlet series multiply by Dirichlet
convolution ([[thm-dirichlet-series-multiplication-convolution]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L2] to the constant-one function gives $\zeta(s)^2 = \sum_{n \ge 1} (\mathbf 1 * \mathbf 1)(n)n^{-s}.$ [L2, given, algebra]

2.1 By [L1], the coefficient $(\mathbf 1 * \mathbf 1)(n)$ is exactly $\tau(n)$, so step 1.1 is the claimed identity. [L1, step 1.1, algebra] ∎
