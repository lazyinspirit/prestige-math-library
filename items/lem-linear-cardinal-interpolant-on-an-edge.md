---
id: lem-linear-cardinal-interpolant-on-an-edge
kind: lemma
title: "The affine edge interpolant is the unique degree-at-most-one cardinal polynomial"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 0
proof_strategy: direct
deps: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mark de Berg et al., Computational Geometry: Algorithms and Applications, 3rd ed., Chapter 9"
      url: "https://ics-websites.science.uu.nl/geobook/interpolation.pdf"
---

## Statement

Let $F$ be a field, let $a,b\in F$ with $a\ne b$, and let $y_0,y_1\in F$. The unique polynomial $P\in F[X]$ of degree at most one with $P(a)=y_0$ and $P(b)=y_1$ is
$$P(X)=y_0+(y_1-y_0)\frac{X-a}{b-a}.$$

## Facts & Assumptions

**Given:** A field $F$, distinct nodes $a,b\in F$, and data $y_0,y_1\in F$.

[A1] Addition, subtraction, multiplication, and division by a nonzero field element satisfy the field axioms.

[A2] $a\ne b$, so $b-a$ is nonzero.

## Proof

1.1 The displayed expression has degree at most one. Substitution gives $P(a)=y_0$ and $P(b)=y_0+(y_1-y_0)=y_1$. [given, A1, A2, algebra]

2.1 Write any degree-at-most-one interpolant as $Q(X)=\alpha+\beta X$. Its two value equations imply $\beta(b-a)=y_1-y_0$, so $\beta=(y_1-y_0)/(b-a)$; then $\alpha=y_0-\beta a$. These coefficients are uniquely determined and give exactly the polynomial in step 1.1. [given, A1, A2, step 1.1, algebra] ∎
