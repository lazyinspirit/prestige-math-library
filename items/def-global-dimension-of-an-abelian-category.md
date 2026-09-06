---
id: def-global-dimension-of-an-abelian-category
kind: definition
title: "Global dimension of an abelian category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-dimension-of-an-object]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Definition

If $\mathcal A$ has enough projectives (or the required projective resolutions are supplied), define
$$\operatorname{gl.dim}\mathcal A=\sup_{M\in\mathcal A}\operatorname{pd}(M)\in\mathbb N\cup\{\infty\}.$$
This is the projective formulation. An injective formulation is a theorem only under its separately stated existence hypotheses.
