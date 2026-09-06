---
id: def-double-of-a-smooth-manifold-with-boundary
kind: definition
title: "The double of a smooth manifold with boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-smooth-collar-of-a-manifold-boundary]
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

The double $DM$ is the quotient of the labelled disjoint union $M_+\sqcup M_-$ by $(p,+)\sim(p,-)$ precisely for $p\in\partial M$. The labels remain part of the construction.
