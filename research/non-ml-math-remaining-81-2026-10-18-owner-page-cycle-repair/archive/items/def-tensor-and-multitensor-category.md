---
id: def-tensor-and-multitensor-category
kind: definition
title: "Tensor and multitensor categories"
status: published
origin: pipeline
deps: [def-locally-finite-k-linear-abelian-category, def-monoidal-category, def-rigid-object-and-rigid-monoidal-category]
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

A **multitensor category over $k$** is a locally finite $k$-linear abelian,
rigid monoidal category whose tensor product is $k$-bilinear in both variables.
A **tensor category** is a multitensor category for which
$\operatorname{End}(\mathbf1)\cong k$ as $k$-algebras.
