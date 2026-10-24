---
id: def-inseparable-degree
kind: definition
title: "The inseparable degree $[K:F]_i=[K:F]/[K:F]_s$ of a finite extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-separable-degree-divides-extension-degree, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

For a finite extension $K/F$ ([[def-extension-degree-and-finite-extension]]),
the **inseparable degree** is the natural number

$$[K:F]_i:=\frac{[K:F]}{[K:F]_s}.$$

The quotient is an integer because
[[thm-separable-degree-divides-extension-degree]] proves that the separable
degree divides the ordinary degree.
