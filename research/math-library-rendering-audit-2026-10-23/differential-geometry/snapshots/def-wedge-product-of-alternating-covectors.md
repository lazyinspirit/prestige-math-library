---
id: def-wedge-product-of-alternating-covectors
kind: definition
title: "The wedge product of alternating covectors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alternating-k-covectors,
       def-symmetrization-and-alternation-operators,
       def-tensor-product-of-multilinear-tensors]
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
---

## Definition

If $\alpha\in\operatorname{Alt}^k(V)$ and $\beta\in\operatorname{Alt}^\ell(V)$,
their **wedge product** is

$$ \alpha\wedge\beta:=\frac{(k+\ell)!}{k!\,\ell!}\operatorname{Alt}(\alpha\otimes\beta). $$

Equivalently,

$$ (\alpha\wedge\beta)(v_1,\ldots,v_{k+\ell}) =\sum_{\sigma\in\operatorname{Sh}(k,\ell)}\operatorname{sgn}(\sigma)\, \alpha(v_{\sigma(1)},\ldots,v_{\sigma(k)})\beta(v_{\sigma(k+1)},\ldots,v_{\sigma(k+\ell)}), $$

where $\operatorname{Sh}(k,\ell)$ is the set of $(k,\ell)$-shuffles.
