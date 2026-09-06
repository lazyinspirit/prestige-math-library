---
id: def-fusion-and-multifusion-category
kind: definition
title: "Fusion and multifusion categories"
status: published
origin: pipeline
deps: [def-finite-k-linear-abelian-category, def-semisimple-object-and-semisimple-abelian-category, def-tensor-and-multitensor-category]
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
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 4.1.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

A **multifusion category** is a finite semisimple multitensor category. A
**fusion category** is a finite semisimple tensor category. In particular the
unit of a fusion category is simple, whereas a multifusion unit may split.
