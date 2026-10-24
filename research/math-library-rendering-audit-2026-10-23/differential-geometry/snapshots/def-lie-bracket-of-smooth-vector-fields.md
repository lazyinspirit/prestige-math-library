---
id: def-lie-bracket-of-smooth-vector-fields
kind: definition
title: "The Lie bracket of smooth vector fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-action-of-a-vector-field-on-smooth-functions]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $X$ and $Y$ be smooth vector fields on $M$. Their **Lie bracket** is the
operator on smooth functions defined by

$$ [X,Y]f:=X(Yf)-Y(Xf). $$

The next results show that this commutator is again induced by a smooth vector
field on $M$.
