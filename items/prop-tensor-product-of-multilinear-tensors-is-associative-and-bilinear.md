---
id: prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear
kind: proposition
title: "Tensor product of multilinear tensors is associative and bilinear"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tensor-product-of-multilinear-tensors]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

On a finite-dimensional real vector space, the tensor product of multilinear
tensors is associative and bilinear in each factor.

## Facts & Assumptions

**Given:** Tensors $R,S,T$ on the same finite-dimensional real vector space and scalars $a,b$.

[F1] The tensor product is defined by multiplying the two factor values on concatenated arguments ([[def-tensor-product-of-multilinear-tensors]]).

## Proof
**Proof technique:** direct.

1.1 Fix a list of arguments of the right total type. By [F1], $((R\otimes S)\otimes T)$ evaluates on that list as the product of the three separate values $R(\cdots)S(\cdots)T(\cdots)$. [F1, given, algebra]
1.2 The same formula [F1] gives exactly the same scalar for $R\otimes(S\otimes T)$ on the same list of arguments. Hence $(R\otimes S)\otimes T=R\otimes(S\otimes T)$. [F1, given, algebra]
1.3 Again by [F1], $((aR+bS)\otimes T)(\cdots)=(aR+bS)(\cdots)\,T(\cdots)=a(R\otimes T)(\cdots)+b(S\otimes T)(\cdots)$, and the same computation in the second slot gives bilinearity there as well. [F1, given, algebra]
2.1 Therefore the tensor product is associative and bilinear in each factor. [step 1.2, step 1.3] ∎
