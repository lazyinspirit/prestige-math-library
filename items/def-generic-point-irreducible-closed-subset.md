---
id: def-generic-point-irreducible-closed-subset
kind: definition
title: "Generic points of irreducible closed subsets"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-affine-scheme, def-irreducible-topological-space-and-subset, thm-irreducible-closed-subsets-and-prime-ideals, lem-closure-of-a-point-is-its-vanishing-set]
verification:
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

A point $x$ is a **generic point** of a closed subset $Z$ if
$\overline{\{x\}}=Z$. For a prime $\mathfrak p$ of $A$, the point
$\mathfrak p$ is generic for $V(\mathfrak p)$.
