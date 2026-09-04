---
id: ex-coordinate-formula-for-a-nonzero-lie-bracket
kind: example
title: "A coordinate computation of a nonzero Lie bracket"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-coordinate-formula-for-the-lie-bracket]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

On $\mathbb R$, let $X=d/dx$ and $Y=x\,d/dx$. Then

$$ [X,Y]=\frac{d}{dx}. $$

## Facts & Assumptions

**Given:** The vector fields $X=d/dx$ and $Y=x\,d/dx$ on $\mathbb R$.

[L1] The Lie bracket has the coordinate formula ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Verification

**Proof technique:** direct.

1.1 In the standard coordinate, the coefficients are $X^1=1$ and $Y^1=x$. Therefore [L1] gives $$ [X,Y]^1=X^1\partial_xY^1-Y^1\partial_xX^1=1\cdot 1-x\cdot 0=1. $$ [L1, given]

2.1 Hence $[X,Y]=d/dx$, so the Lie bracket is nonzero even though $X$ is constant. [step 1.1] ∎
