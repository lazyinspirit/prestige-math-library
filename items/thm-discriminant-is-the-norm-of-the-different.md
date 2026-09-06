---
id: thm-discriminant-is-the-norm-of-the-different
kind: theorem
title: "The discriminant is the norm of the different"
status: draft
origin: pipeline
deps: [def-different-of-a-number-field, def-absolute-norm-of-an-ideal, thm-number-field-discriminant-is-well-defined-and-nonzero]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Keith Conrad, The Different Ideal, Theorem 4.8"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf"
---

## Statement

$N\mathfrak D_K=|d_K|$.

## Proof

**Given:** an integral basis and its trace Gram matrix $G$.

1.1 The dual lattice is obtained from the original basis by the inverse matrix $G^{-1}$, hence its index relative to $\mathcal O_K$ has absolute determinant $|\det G|$. [given, algebra]

2.1 Since $\det G=d_K$ and the different is the inverse codifferent, its norm is that same positive index. [step 1.1, algebra] ∎
