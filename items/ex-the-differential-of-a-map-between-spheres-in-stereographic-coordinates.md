---
id: ex-the-differential-of-a-map-between-spheres-in-stereographic-coordinates
kind: example
title: "The differential of a map between spheres in stereographic coordinates"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-coordinate-formula-for-the-differential]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Example

For the smooth map $F:S^1\to S^1$, $F(e^{it})=e^{2it}$, the stereographic coordinate representative is the rational map $u\mapsto 2u/(1-u^2)$ on the overlap where both sides are defined. Its differential is multiplication by the derivative $2(1+u^2)/(1-u^2)^2$.

## Facts & Assumptions

**Given:** The degree-two map on the circle and compatible stereographic charts.

[L1] The differential in coordinates is given by the Jacobian of the coordinate representative ([[thm-coordinate-formula-for-the-differential]]).

## Verification

**Proof technique:** direct.

1.1 In stereographic coordinates, the map is $u\mapsto 2u/(1-u^2)$. [given]

2.1 Differentiating this rational function gives $2(1+u^2)/(1-u^2)^2$, so [L1] identifies this scalar as the matrix of the differential in the chosen one-dimensional bases. [L1, step 1.1]

3.1 Hence the differential is explicitly computed by the coordinate formula. [step 2.1] ∎
