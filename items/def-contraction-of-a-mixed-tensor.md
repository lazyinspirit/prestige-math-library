---
id: def-contraction-of-a-mixed-tensor
kind: definition
title: "The contraction of a mixed tensor"
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

Let $T$ be a type $(r,s)$ tensor on $V$ with $r,s\ge 1$. Contracting the first
contravariant slot against the first covariant slot gives the type
$(r-1,s-1)$ tensor $\operatorname{ctr}(T)$ defined intrinsically by

$$ \operatorname{ctr}(T)(\alpha_2,\ldots,\alpha_r,v_2,\ldots,v_s) :=\sum_i T(e^i,\alpha_2,\ldots,\alpha_r,e_i,v_2,\ldots,v_s), $$

where $(e_i)$ is any basis of $V$ and $(e^i)$ its dual basis. The next lemma
shows that this formula is basis-independent.
