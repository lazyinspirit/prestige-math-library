---
id: def-f-related-vector-fields
kind: definition
title: "F-related vector fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-global-differential-or-tangent-map]
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

Let $F:M\to N$ be a smooth map, let $X$ be a smooth vector field on $M$, and let
$Y$ be a smooth vector field on $N$. One says that $X$ and $Y$ are
**$F$-related** if

$$ dF_p(X_p)=Y_{F(p)} $$

for every $p\in M$.

This is the correct comparison notion for vector fields along a general smooth
map. A genuine pushforward of a vector field is defined later only when $F$ is a
diffeomorphism.
