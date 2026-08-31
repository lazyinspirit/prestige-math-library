---
id: def-wedge-product-of-differential-forms
kind: definition
title: "The wedge product of differential forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-differential-k-form,
       def-wedge-product-of-alternating-covectors]
justified_by: [prop-differential-forms-form-a-graded-commutative-algebra]
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
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Definition

Let $\alpha\in\Omega^k(M)$ and $\beta\in\Omega^\ell(M)$. Their **wedge product**
is the differential form defined pointwise by

$$
(\alpha\wedge\beta)_p:=\alpha_p\wedge\beta_p\in\operatorname{Alt}^{k+\ell}(T_pM).
$$

The next proposition verifies that this pointwise field is smooth.
