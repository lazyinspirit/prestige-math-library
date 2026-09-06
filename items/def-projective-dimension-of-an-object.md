---
id: def-projective-dimension-of-an-object
kind: definition
title: "Projective dimension of an object"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-resolution-in-an-abelian-category, def-length-of-a-resolution]
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

Assume projective resolutions are supplied or exist in the relevant class. The **projective dimension** of $M$ is
$$\operatorname{pd}(M)=\inf\{d\geq0:M\text{ has a projective resolution of length }d\},$$
with value $\infty$ if this set is empty. A length-zero projective resolution exists exactly when $M$ is projective.
