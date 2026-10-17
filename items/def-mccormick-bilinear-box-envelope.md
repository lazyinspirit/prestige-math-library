---
id: def-mccormick-bilinear-box-envelope
kind: definition
title: McCormick envelope for a bilinear term on a box
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §16"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "A. Tsoukalas and A. Mitsos, Multivariate McCormick relaxations, §5"
      url: "https://repub.eur.nl/pub/131549/Repub_131549_O-A.pdf"
---

## Definition

Let $x\in[l_x,u_x]$ and $y\in[l_y,u_y]$, where all four endpoints are finite and ordered, and let $w$ be an additional real variable representing the product $xy$. The **McCormick polytope** for this box is the set of $(x,y,w)$ satisfying the box bounds and
$$ w\ge l_xy+l_yx-l_xl_y,\qquad w\ge u_xy+u_yx-u_xu_y $$
$$ w\le u_xy+l_yx-u_xl_y,\qquad w\le l_xy+u_yx-l_xu_y $$
The term **McCormick envelope** will mean this polytope. Its exact relation to the convex hull of the product graph is established by the local bilinear-hull result.

