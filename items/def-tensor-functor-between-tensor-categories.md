---
id: def-tensor-functor-between-tensor-categories
kind: definition
title: "Tensor functors between tensor categories"
status: draft
origin: pipeline
deps: [def-tensor-and-multitensor-category, def-lax-strong-and-strict-monoidal-functor]
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
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definition 4.2.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

A **tensor functor** between tensor categories over $k$ is a $k$-linear,
exact, faithful strong monoidal functor. Its tensor and unit structure maps are
therefore isomorphisms.
