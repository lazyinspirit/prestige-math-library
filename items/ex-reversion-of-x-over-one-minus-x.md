---
id: ex-reversion-of-x-over-one-minus-x
kind: example
title: "The compositional inverse of $x/(1-x)$ is $x/(1+x)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-compositional-inverse, thm-formal-composition-laws, thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Example

Over every commutative ring,

$$f(x)=\frac{x}{1-x}=x+x^2+x^3+\cdots$$

has compositional inverse

$$g(x)=\frac{x}{1+x}=x-x^2+x^3-x^4+\cdots.$$

## Facts & Assumptions

**Given:** Formal inverse existence from [[thm-formal-compositional-inverse]], composition laws from [[thm-formal-composition-laws]], the unit criterion [[thm-formal-power-series-unit-criterion]], and coefficient convolution and extensionality from [[prop-coefficient-extraction-linearity-and-extensionality]].

## Verification

**Proof technique:** simplify both admissible compositions.

1.1 Both $f$ and $g$ have zero constant coefficient and unit linear coefficient. Formal substitution and ring algebra give $f\circ g=g/(1-g)=x$ because $1-g=(1+x)^{-1}$, and $g\circ f=f/(1+f)=x$ because $1+f=(1-x)^{-1}$. [given]

2.1 Thus $g$ is a two-sided compositional inverse of $f$, and uniqueness gives the claim. Multiplying $\sum_{n\ge0}x^n$ by $1-x$, and $\sum_{n\ge0}(-1)^nx^n$ by $1+x$, gives constant coefficient $1$ and every later coefficient $0$; extensionality and inverse uniqueness give the two displayed expansions. Equivalently, the inverse equation $(1+x)g=x$ yields $[x]g=1$ and the alternating recursion $[x^n]g=-[x^{n-1}]g$ for $n\ge2$. These calculations also hold in the zero ring. [step 1.1, given] ∎
