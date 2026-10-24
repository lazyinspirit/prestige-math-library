---
id: lem-segre-map-well-defined-injective
kind: lemma
title: The Segre map is well defined and injective
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-segre-map]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, The Segre map, §6i
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The Segre point map is a well-defined injective map of point sets. This
includes $m=0$ or $n=0$.

## Facts & Assumptions

**Given:** Representatives $x\ne0$ and $y\ne0$.

## Proof

1.1 Replacing $x,y$ by $\lambda x,\mu y$ replaces every coordinate $x_i y_j$ by the single nonzero scalar $\lambda\mu$ times it. Some product $x_{i_0}y_{j_0}$ is nonzero, so these coordinates define a well-defined projective point. [given, algebra]

2.1 Choose $i_0,j_0$ with $x_{i_0}\ne0$ and $y_{j_0}\ne0$. From a projective matrix $[z_{ij}]$ in the image, the ratios $z_{ij_0}:z_{i_0j_0}$ recover $[x_i]$, and $z_{i_0j}:z_{i_0j_0}$ recover $[y_j]$. [step 1.1, algebra]

3.1 Thus equal Segre images have equal two projective factors. The same calculation works when one factor has one homogeneous coordinate, proving the endpoint cases. [step 2.1] ∎
