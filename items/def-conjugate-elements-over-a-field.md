---
id: def-conjugate-elements-over-a-field
kind: definition
title: "Conjugate algebraic elements over a field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
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

Let $\alpha$ and $\beta$ be elements of field extensions of $F$, both
algebraic over $F$. They are **conjugate over $F$** when they have the same
minimal polynomial over $F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]),
or equivalently when $\beta$ is a root of the minimal polynomial of $\alpha$.
The relation is relative to the chosen base field. Relative embeddings and
automorphisms are those of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]].
