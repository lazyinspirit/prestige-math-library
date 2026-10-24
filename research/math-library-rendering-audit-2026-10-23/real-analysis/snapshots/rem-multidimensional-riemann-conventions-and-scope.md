---
id: rem-multidimensional-riemann-conventions-and-scope
kind: remark
title: "Conventions and proved scope for the Riemann integral in $\\mathbb{R}^m$ and Jordan content"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-null-and-content-zero-in-rn, def-jordan-inner-and-outer-content, cor-one-dimensional-and-multidimensional-riemann-agree, cor-one-dimensional-null-and-content-zero-agree, thm-lebesgue-criterion-in-rn, thm-jordan-boundary-criterion, def-riemann-integral-over-a-jordan-set, thm-lipschitz-images-of-null-sets-in-rn-are-null, thm-graphs-of-continuous-functions-have-content-zero]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Remarks

Throughout, $m\ge1$. Rectangles and grids are axis-parallel. The
multidimensional Darboux and tagged integrals are defined on nondegenerate
rectangles, and integration over a Jordan set chooses a nondegenerate bounding
rectangle. Degenerate rectangles still have geometric volume and Jordan
content $0$, but no competing integral convention is introduced for them.
Nullity in [[def-null-and-content-zero-in-rn]] uses cube covers, while Jordan
outer content in [[def-jordan-inner-and-outer-content]] uses arbitrary finite
rectangle covers. The one-dimensional dictionaries are
[[cor-one-dimensional-and-multidimensional-riemann-agree]] and
[[cor-one-dimensional-null-and-content-zero-agree]].

The historical Lebesgue criterion [[thm-lebesgue-criterion-in-rn]] uses only cover-nullity and no Lebesgue measure or integral. The proved image results are the equal-dimensional Lipschitz theorem [[thm-lipschitz-images-of-null-sets-in-rn-are-null]] and the graph theorem [[thm-graphs-of-continuous-functions-have-content-zero]]. No general continuously differentiable image theorem is asserted.

Jordan measurability is related to null boundaries by [[thm-jordan-boundary-criterion]]. Integration over a Jordan set uses the zero-extension convention of [[def-riemann-integral-over-a-jordan-set]]; no integration over arbitrary bounded sets is defined here.
