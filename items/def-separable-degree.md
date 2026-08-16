---
id: def-separable-degree
kind: definition
title: "The separable degree $[K:F]_s$ as a count of embeddings into an algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, def-algebraic-closure, def-extension-degree-and-finite-extension, thm-existence-of-algebraic-closures, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, def-finite-cardinality]
justified_by: [thm-separable-degree-is-independent-of-the-algebraic-closure]
aliases: []
landmark: true
verification:
  precheck: n/a
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

Let $K/F$ be a finite field extension
([[def-extension-degree-and-finite-extension]]) and let $\Omega/F$ be an
algebraic closure. Assuming Choice, such a field exists by
[[thm-existence-of-algebraic-closures]]. The
**separable degree** of $K/F$ is

$$[K:F]_s:=\left|\operatorname{Hom}_F(K,\Omega)\right|,$$

where $\operatorname{Hom}_F$ denotes the set of $F$-embeddings of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:
a finite $F$-basis generates $K$, an embedding is determined by the images of
those finitely many generators, and each image is among the finitely many roots
of its minimal polynomial by
[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].
Thus its cardinality is defined by [[def-finite-cardinality]]. The value is
independent of the chosen algebraic closure by
[[thm-separable-degree-is-independent-of-the-algebraic-closure]].
