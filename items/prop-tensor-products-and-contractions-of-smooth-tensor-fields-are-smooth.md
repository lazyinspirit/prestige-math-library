---
id: prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth
kind: proposition
title: "Tensor products and contractions of smooth tensor fields are smooth"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear,
       lem-contraction-is-independent-of-the-basis-formula,
       prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

The tensor product of smooth tensor fields is smooth. If a smooth mixed tensor
field has at least one contravariant and one covariant slot, then contracting
its first contravariant slot against its first covariant slot is smooth.

## Facts & Assumptions

**Given:** Smooth tensor fields $S$ and $T$, and a smooth mixed tensor field $R$ with at least one covariant and one contravariant slot.

[L1] Tensor-field smoothness is equivalent to smoothness of the local coefficient functions ([[prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components]]).

[L2] Tensor product is bilinear, and contraction is basis-independent ([[prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear]], [[lem-contraction-is-independent-of-the-basis-formula]]).

## Proof
**Proof technique:** direct.

1.1 In any chart, [L1] identifies $S$, $T$, and $R$ with families of smooth coefficient functions. By [L2], the coefficients of $S\otimes T$ are finite sums of products of the coefficients of $S$ and $T$. Those are smooth. [L1, L2, given, algebra]

1.2 In the same chart, [L2] writes each contracted coefficient of $R$ as a finite sum of coordinate coefficients of $R$. Because the contraction formula is basis-independent, these chartwise definitions glue. The resulting coefficient functions are smooth by [L1]. [L1, L2, given, algebra]

2.1 Therefore tensor products and the contraction defined above preserve smoothness. [step 1.1, step 1.2] ∎
