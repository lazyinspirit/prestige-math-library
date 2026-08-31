---
id: fs-l-one-half-with-its-p-functional-is-a-normed-space
kind: false-statement
title: "FALSE: $L^{1/2}$ with its $p$-functional is a normed space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-half-norm-fails-the-triangle-inequality-on-two-indicators, def-norm-and-normed-space]
proof_strategy: "Refute with the explicit 1/2-triangle-inequality failure on two indicators."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.16"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

The space $L^{1/2}(\mu)$ with the functional $\|\,\cdot\,\|_{1/2}$ is a normed
space.

## Facts & Assumptions

**Given:** The explicit half-norm triangle-inequality failure.

[L1] The previous counterexample exhibits functions with
$$\|f+g\|_{1/2}>\|f\|_{1/2}+\|g\|_{1/2}$$
([[cex-half-norm-fails-the-triangle-inequality-on-two-indicators]]).

[L2] A normed space requires a norm, hence the triangle inequality
([[def-norm-and-normed-space]]).

## Refutation

**Proof technique:** Refute with the explicit $1/2$-triangle-inequality
failure on two indicators.

1.1 The functions from [L1] violate the triangle inequality required by [L2]. [L1, L2]

2.1 Therefore $L^{1/2}(\mu)$ with $\|\,\cdot\,\|_{1/2}$ is not a normed space. [step 1.1]
∎
