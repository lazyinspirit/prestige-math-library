---
id: def-birational-equivalence-varieties
kind: definition
title: "Birational maps and birational equivalence of classical affine varieties"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rational-map-varieties]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, paragraph after Proposition 5.38"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §3.2"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $X$ and $Y$ be classical affine varieties.

A rational map $\eta:X \dashrightarrow Y$ is **birational** when there exists a
rational map $\theta:Y \dashrightarrow X$ such that
$$ \theta\circ\eta=\operatorname{id}_X\qquad\text{and}\qquad \eta\circ\theta=\operatorname{id}_Y $$
as rational maps.

The varieties $X$ and $Y$ are **birationally equivalent** when such a birational
map exists.
