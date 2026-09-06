---
id: def-direct-sum-total-complex-on-finite-diagonals
kind: definition
title: "The direct-sum total complex on finite diagonals"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hom-double-complex-of-a-projective-and-an-injective-resolution, lem-the-two-hom-double-complex-differentials-commute-before-signing]
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

For the first-quadrant Hom bicomplex $K$, put
$$\operatorname{Tot}^{n}K=\bigoplus_{p+q=n}K^{p,q},\qquad D|_{K^{p,q}}=h^{p,q}+(-1)^p v^{p,q}.$$
Each diagonal has precisely $n+1$ possible bidegrees, so this direct sum is finite. Consequently there is no choice here between direct-sum and product totalisations.
