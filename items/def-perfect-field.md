---
id: def-perfect-field
kind: definition
title: "Perfect fields: every irreducible polynomial is separable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-repeated-root-and-separable-polynomial, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).
