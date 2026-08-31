---
id: def-pullback-of-a-differential-form
kind: definition
title: "The pullback of a differential form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pullback-of-a-covariant-tensor-field,
       def-smooth-differential-k-form]
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

Let $F:M\to N$ be smooth, and let $\omega\in\Omega^k(N)$. The **pullback**
$F^*\omega$ is the pullback of $\omega$ viewed as an alternating covariant
$k$-tensor field:

$$
(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k).
$$
