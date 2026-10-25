---
id: ex-segre-p1-times-p1-quadric
kind: example
title: The Segre image of P1 times P1 is a quadric surface
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-segre-image-rank-one-minors, cor-projective-variety-product-exists]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, 6.26
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

For $([s:t],[u:v])\in\mathbf P^1\times\mathbf P^1$, Segre gives
$$[z_{00}:z_{01}:z_{10}:z_{11}]=[su:sv:tu:tv].$$
The sole $2\times2$ minor is $z_{00}z_{11}-z_{01}z_{10}$, so the image is the quadric surface $V_+(z_{00}z_{11}-z_{01}z_{10})\subseteq\mathbf P^3$. On $z_{00}\ne0$, its inverse sends $[z]$ to $([z_{00}:z_{10}],[z_{00}:z_{01}])$; the other three charts give the analogous formulas.
