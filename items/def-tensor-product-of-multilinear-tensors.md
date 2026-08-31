---
id: def-tensor-product-of-multilinear-tensors
kind: definition
title: "The tensor product of multilinear tensors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-type-r-s-tensor-on-a-finite-dimensional-vector-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Definition

Let $S$ be a type $(r,s)$ tensor and $T$ a type $(r',s')$ tensor on the same
finite-dimensional vector space $V$. Their **tensor product** is the type
$(r+r',s+s')$ tensor $S\otimes T$ defined by

$$ (S\otimes T)(\alpha_1,\ldots,\alpha_{r+r'},v_1,\ldots,v_{s+s'}) :=S(\alpha_1,\ldots,\alpha_r,v_1,\ldots,v_s)\,T(\alpha_{r+1},\ldots,\alpha_{r+r'},v_{s+1},\ldots,v_{s+s'}). $$
