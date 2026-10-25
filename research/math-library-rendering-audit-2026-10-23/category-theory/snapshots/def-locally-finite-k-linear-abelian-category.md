---
id: def-locally-finite-k-linear-abelian-category
kind: definition
title: "Locally finite k-linear abelian categories"
status: published
origin: pipeline
deps: [def-k-linear-category-and-k-linear-functor, def-abelian-category, def-object-of-finite-length, def-small-locally-small-and-large-category]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 1.8.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Catherine Meusburger, Tensor Categories, Definition 8.1.7"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf"
---

## Definition

A **locally finite $k$-linear abelian category** is a locally small $k$-linear
abelian category in which every object has finite length and every hom-space is
finite-dimensional over $k$.
