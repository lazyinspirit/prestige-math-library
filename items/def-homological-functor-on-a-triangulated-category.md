---
id: def-homological-functor-on-a-triangulated-category
kind: definition
title: "Homological functor on a triangulated category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-triangulated-category, def-additive-functor, def-abelian-category]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.5"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Definition

For a triangulated category $\mathcal T$ and abelian category $\mathcal A$, an
additive covariant functor $H:\mathcal T\to\mathcal A$ is **homological** if
$H(X)\to H(Y)\to H(Z)$ is exact for every distinguished triangle. TR2 then
gives the long exact continuation through all translates.

