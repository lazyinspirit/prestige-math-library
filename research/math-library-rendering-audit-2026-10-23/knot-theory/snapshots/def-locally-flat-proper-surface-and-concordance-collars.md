---
id: def-locally-flat-proper-surface-and-concordance-collars
kind: definition
title: "Locally flat proper surfaces and concordance collars"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1, printed p.322"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, Definition 1.9, and §3.1, printed pp.2–3 and 10"
---

## Definition

Let $X$ be a four-dimensional manifold with boundary and let $W$ be a compact surface with boundary. An embedding $e:(W,\partial W)\to(X,\partial X)$ is proper when $e^{-1}(\partial X)=\partial W$. It is locally flat at an interior point of $W$ when there are neighborhoods of the point and its image and a homeomorphism of pairs from those neighborhoods to $(\mathbb R^4,\mathbb R^2)$, with the standard linear plane $\mathbb R^2\subset\mathbb R^4$. It is locally flat at a boundary point when there are such neighborhoods and a homeomorphism of pairs to $(\mathbb R^4_+,\mathbb R^2_+)$, where $\mathbb R^4_+=\{x_4\geq0\}$ and $\mathbb R^2_+=\{x_2=x_3=0,\ x_4\geq0\}$; the line $\partial\mathbb R^2_+$ lies in $\partial\mathbb R^4_+$. A collar of a boundary circle of $W$ is an embedding of that circle times $[0,\varepsilon)$ into $W$ that is the identity on the circle at parameter $0$; a concordance collar is required to agree with the corresponding product collar of the ambient end. A smooth proper surface has the analogous smooth charts and collars, which are also topological locally flat charts.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented knots and the standard product ambient space]]

