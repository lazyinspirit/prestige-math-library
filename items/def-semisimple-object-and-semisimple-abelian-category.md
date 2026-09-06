---
id: def-semisimple-object-and-semisimple-abelian-category
kind: definition
title: "Semisimple objects and semisimple abelian categories"
status: draft
origin: pipeline
deps: [def-abelian-category, def-simple-object]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Catherine Meusburger, Tensor Categories, Definition 8.1.4"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf"
---

## Definition

An object of an abelian category is **semisimple** if it is a finite direct sum
of simple objects. The category is **semisimple** if every object is
semisimple. Thus the zero object is semisimple, as the empty direct sum.
