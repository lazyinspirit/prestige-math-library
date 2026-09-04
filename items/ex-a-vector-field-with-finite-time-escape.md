---
id: ex-a-vector-field-with-finite-time-escape
kind: example
title: "The vector field x^2 d/dx has finite-time escape"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-complete-vector-field, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

The vector field $X=x^2\,d/dx$ on $\mathbb R$ has integral curves

$$ \gamma_{x_0}(t)=\frac{x_0}{1-x_0t}. $$

For $x_0>0$ this solution blows up at $t=1/x_0$, so $X$ is not complete.

## Facts & Assumptions

**Given:** The vector field $X=x^2\,d/dx$ on $\mathbb R$.

[L1] Completeness is equivalent to having a global flow ([[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]]).

## Verification

**Proof technique:** direct.

1.1 The curve $\gamma_{x_0}(t)=x_0/(1-x_0t)$ satisfies $\gamma_{x_0}(0)=x_0$ and $\gamma_{x_0}'(t)=\gamma_{x_0}(t)^2$, so it is the integral curve through $x_0$. [given]

2.1 For $x_0>0$, the denominator vanishes at $t=1/x_0$, so this integral curve is not defined for all real times. Hence [L1] shows that $X$ is not complete. [L1, step 1.1] ∎
