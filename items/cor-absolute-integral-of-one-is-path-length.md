---
id: cor-absolute-integral-of-one-is-path-length
kind: corollary
title: "The absolute line integral of the constant function 1 is the length of the path"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-absolute-line-integral-over-a-rectifiable-path, def-arc-length-function]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

For every rectifiable contour $\gamma$,
$$\int_\gamma 1\,|dz|=L(\gamma).$$

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma:[a,b]\to\mathbb C$.

[L1] The absolute line integral is $\int_a^b|f(\gamma(t))|\,ds_\gamma(t)$ ([[def-absolute-line-integral-over-a-rectifiable-path]]).

[L2] The arc-length function satisfies $s_\gamma(a)=0$ and $s_\gamma(b)=L(\gamma)$ ([[def-arc-length-function]]).

## Proof

**Proof technique:** direct.

1.1 With $f\equiv1$, [L1] becomes $\int_a^b1\,ds_\gamma=s_\gamma(b)-s_\gamma(a)$. [L1, algebra]

2.1 Substitute [L2] to obtain $L(\gamma)$. Singleton and constant paths have both sides $0$. [step 1.1, L2] ∎
