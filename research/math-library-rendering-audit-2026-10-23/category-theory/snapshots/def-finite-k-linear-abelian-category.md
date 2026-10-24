---
id: def-finite-k-linear-abelian-category
kind: definition
title: "Finite k-linear abelian categories"
status: published
origin: pipeline
deps: [def-locally-finite-k-linear-abelian-category, def-simple-object, def-projective-object]
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
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definitions 1.8.5–1.8.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

A **finite $k$-linear abelian category** is a locally finite $k$-linear abelian
category with finitely many isomorphism classes of simple objects and enough
projectives: every simple object has a projective cover. This is an intrinsic
finiteness condition; it does not assert semisimplicity.
