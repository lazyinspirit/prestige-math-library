---
id: def-pullback-of-a-covariant-tensor-field
kind: definition
title: "The pullback of a covariant tensor field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-tensor-field,
       def-differential-of-a-smooth-map]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Definition

Let $F:M\to N$ be smooth, and let $T$ be a covariant $k$-tensor field on $N$.
Its **pullback** $F^*T$ is the covariant $k$-tensor field on $M$ defined by

$$ (F^*T)_p(v_1,\ldots,v_k):=T_{F(p)}(dF_pv_1,\ldots,dF_pv_k). $$
