---
id: ex-qftx-berezin-coefficient-extraction
kind: example
title: Ordered Berezin integral detects a sign in a permuted top monomial
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-superspace-grassmann-algebra
  - lem-qftx-grassmann-coefficient-calculus
dependency_roles:
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  lem-qftx-grassmann-coefficient-calculus: mathematical-premise
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§4.1, printed pp. 31–33, anticommuting coordinates and ordered Berezin integration."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.7, printed pp. 97–99, coefficient-extraction integration and generator order."
verification:
  precheck: pending
---

## Example

In the ordered algebra with generators $\theta^1,\theta^2,\bar\theta^{\dot1},\bar\theta^{\dot2}$ and measure $d^4\theta=d\bar\theta^{\dot2}d\bar\theta^{\dot1}d\theta^2d\theta^1$, let

$$f=c\,\theta^1\bar\theta^{\dot1}\theta^2\bar\theta^{\dot2}+d\,\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2},\qquad c,d\in\mathbb C.$$

Then $\int d^4\theta\,f=d-c$.

## Example references

[Martin, §4.1](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §3.7](https://arxiv.org/pdf/hep-th/0108200).

Four-dimensional N=1 superspace Grassmann algebra and Berezin integration: [[def-qftx-superspace-grassmann-algebra]].

Associativity and coefficient calculus for the finite superspace Grassmann algebra: [[lem-qftx-grassmann-coefficient-calculus]].

## Facts & Assumptions

**Given:** The ordered four-generator algebra, the displayed polynomial, and the ordered four-variable coefficient-extraction measure.

[F1] [[def-qftx-superspace-grassmann-algebra]]: $\theta^i\theta^j=-\theta^j\theta^i$ for distinct ordered generators, and the measure extracts the coefficient of $\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2}$.

[F2] [[lem-qftx-grassmann-coefficient-calculus]]: the signed basis product is associative and the ordered four-variable integral is a well-defined linear functional equal to top-coefficient extraction.

## Verification


**Given:** [F1], [F2], and the polynomial in the Example.

1.1 In the first monomial, moving $\theta^2$ left past $\bar\theta^{\dot1}$ makes one transposition and contributes a minus sign. Thus $\theta^1\bar\theta^{\dot1}\theta^2\bar\theta^{\dot2}=-\theta^1\theta^2\bar\theta^{\dot1}\bar\theta^{\dot2}$, so the ordered top coefficient of $f$ is $-c+d$. [F1, algebra]

2.1 By [F2], the ordered measure returns exactly that top coefficient; hence $\int d^4\theta\,f=d-c$. The result depends on the stated measure order and generator convention. [F1, F2, step 1.1] ∎
