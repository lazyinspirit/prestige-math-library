---
id: rem-characteristics-do-not-select-a-post-crossing-weak-solution
kind: remark
title: "Characteristics do not select a post-crossing weak solution"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-characteristic-crossing-and-caustic-for-first-order-pde]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part III: Analysis of Partial Differential Equations"
      url: "https://giacomoageno.github.io/LectureNotesAPDE.pdf"
---

A crossing makes the characteristic projection fail to define a single-valued
classical graph.  It does not by itself choose a continuation: entropy
conditions for conservation laws and viscosity inequalities for Hamilton–Jacobi
equations are extra selection principles.  No such weak-solution theorem is
claimed here.
