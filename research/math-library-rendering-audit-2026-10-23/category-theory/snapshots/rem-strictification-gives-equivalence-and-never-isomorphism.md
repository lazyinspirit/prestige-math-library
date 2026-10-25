---
id: rem-strictification-gives-equivalence-and-never-isomorphism
kind: remark
title: "Strictification gives equivalence, not on-the-nose identification"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-mac-lane-strictification, rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified, def-skeletal-category-and-skeleton]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remarks 2.8.6 and 2.8.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Remark

[[thm-mac-lane-strictification]] proves that every monoidal category is
**equivalent** to a strict one, not that it is already strict after a harmless
renaming of objects. This is exactly the distinction highlighted by
[[rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified]]:
forcing specified isomorphisms to become identities can change the category.

The same boundary also separates strictness from skeletality. A
[[def-skeletal-category-and-skeleton|skeletal]] category is one in which
isomorphic objects are equal; a skeleton of a given category is a full
skeletal subcategory obtained by choosing one representative from each
isomorphism class. Strictification instead builds an equivalent monoidal
category functorially from the original one. Passing to a skeleton and
strictifying are different operations, and they need not be achievable
simultaneously.
