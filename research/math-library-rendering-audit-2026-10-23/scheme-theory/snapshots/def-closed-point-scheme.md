---
id: def-closed-point-scheme
kind: definition
title: "Closed points of an affine scheme"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, cor-closed-points-of-spectrum-are-maximal-ideals]
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "James S. Milne, Algebraic Geometry, 10.24"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Definition

A point $x$ of a scheme is **closed** when $\{x\}$ is closed in its underlying
topology. Assuming the Axiom of Choice, the closed points of
$\operatorname{Spec}A$ are exactly the maximal ideals of $A$.
