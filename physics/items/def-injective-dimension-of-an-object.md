---
id: def-injective-dimension-of-an-object
kind: definition
title: "Injective dimension of an object"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-injective-resolution-in-an-abelian-category, def-length-of-a-resolution]
verification:
  audited: 2026-09-06
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

Assume injective resolutions are supplied or exist in the relevant class. The **injective dimension** of $N$ is
$$\operatorname{id}(N)=\inf\{d\geq0:N\text{ has an injective resolution of length }d\},$$
with value $\infty$ if there is no finite such resolution. A length-zero injective resolution exists exactly when $N$ is injective.
