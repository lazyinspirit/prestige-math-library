---
id: def-hom-double-complex-of-a-projective-and-an-injective-resolution
kind: definition
title: "The Hom double complex of projective and injective resolutions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ext-via-an-injective-resolution-of-the-second-variable, def-ext-via-a-projective-resolution-of-the-first-variable]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Definition

For supplied resolutions $P_\bullet(M)\to M$ and $N\to I^\bullet(N)$, define the first-quadrant bigraded object
$$K^{p,q}=\operatorname{Hom}_{\mathcal A}(P_p(M),I^q(N))\qquad(p,q\geq0).$$
Its horizontal and vertical maps are
$$h^{p,q}(f)=f\circ d_{P,p+1},\qquad v^{p,q}(f)=d_I^q\circ f.$$
They have bidegrees $(1,0)$ and $(0,1)$ respectively. The first-quadrant restriction is part of the definition used below.
