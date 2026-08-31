---
id: fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis
kind: false-statement
title: "A tensor is not determined by its values on diagonal tuples without symmetry"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-type-r-s-tensor-on-a-finite-dimensional-vector-space,
       prop-symmetrization-and-alternation-are-projections]
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

**False claim:** a tensor is determined by its values on diagonal tuples
$(v,\ldots,v)$ without any symmetry hypothesis.

## Facts & Assumptions

**Given:** On $V=\mathbb R^2$, the bilinear forms $B_1(x,y)=x_1y_2$ and $B_2(x,y)=x_2y_1$.

[F1] Bilinear forms are type $(0,2)$ tensors ([[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]).

## Refutation
**Proof technique:** direct.

1.1 By [F1], both $B_1$ and $B_2$ are tensors of the same type. They are distinct because $B_1(e_1,e_2)=1$ while $B_2(e_1,e_2)=0$. [F1, given]

1.2 For every $v=(a,b)\in\mathbb R^2$, one has $B_1(v,v)=ab=B_2(v,v)$. Thus the two tensors agree on every diagonal pair $(v,v)$. [given, algebra]

2.1 Therefore diagonal values alone do not determine a general tensor. [step 1.1, step 1.2] ∎