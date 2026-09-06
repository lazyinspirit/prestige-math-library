---
id: prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor
kind: proposition
title: "The coordinate formula for the Lie derivative of a covariant tensor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lie-derivative-is-a-derivation-of-the-tensor-algebra, prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields, prop-coordinate-vector-fields-commute]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

For a covariant $k$-tensor $T=T_{i_1\cdots i_k}dx^{i_1}\otimes\cdots\otimes dx^{i_k}$, $$ (\mathcal L_XT)_{i_1\cdots i_k}=X^j\partial_jT_{i_1\cdots i_k}+\sum_a(\partial_{i_a}X^j)T_{i_1\cdots j\cdots i_k}. $$

## Facts & Assumptions

**Given:** The manifolds, forms, vector fields, maps, and coordinates explicitly named in the statement.

[F1] The preceding result states that The Lie derivative obeys $\mathcal L_X(S\otimes T)=(\mathcal L_XS)\otimes T+S\otimes(\mathcal L_XT)$ and commutes with every natural contraction. ([[thm-lie-derivative-is-a-derivation-of-the-tensor-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Evaluate the tensor derivation formula on $\partial_{i_1},\ldots,\partial_{i_k}$ and differentiate the component function along $X$. [F1, given]

2.1 Since $\mathcal L_X\partial_i=[X,\partial_i]=-(\partial_iX^j)\partial_j$, moving the input terms to the other side gives the displayed plus-sign formula. [step 1.1] ∎

