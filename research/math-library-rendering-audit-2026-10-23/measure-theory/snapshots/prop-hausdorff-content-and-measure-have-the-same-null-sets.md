---
id: "prop-hausdorff-content-and-measure-have-the-same-null-sets"
kind: "proposition"
title: "Content and measure have the same null sets"
deps: ["def-hausdorff-measure", "prop-zero-dimensional-hausdorff-measure-counts"]
verification:
  audited: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Proposition 1.2.6; Fremlin 264Xa
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

For a subset $A$ of any metric space and finite $s\ge0$,

$$\mathcal H^s_\infty(A)=0\quad\Longleftrightarrow\quad(\forall\delta\in(0,\infty))\ \mathcal H^s_\delta(A)=0\quad\Longleftrightarrow\quad\mathcal H^s(A)=0.$$

This is equality of null-set classes, not equality of the set functions.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] $\mathcal H^s$ is the supremum of finite-scale contents, each at least the unrestricted content. [[def-hausdorff-measure]]

## Proof

1.1 Suppose $s>0$ and $\mathcal H^s_\infty(A)=0$. Given finite $\delta>0$ and $\varepsilon>0$, take a cover with cost less than $\min(\varepsilon,\delta^s)$. Each diameter is strictly below $\delta$, so $\mathcal H^s_\delta(A)<\varepsilon$. Therefore every scale value is zero. [F1]

1.2 When $s=0$, any nonempty member costs one. Content less than one forces the empty family, hence $A=\varnothing$. All its scale values are zero. This deals with empty and singleton possibilities without division by the exponent. [F1]

2.1 If all finite-scale values vanish their supremum vanishes. Conversely, a zero supremum forces all those nonnegative values, and then the smaller unrestricted content, to vanish. These implications complete both equivalences. [F1, step 1.1, step 1.2] ∎
