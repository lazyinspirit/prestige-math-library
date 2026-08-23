---
id: def-category-of-models-for-an-algebraic-theory
kind: definition
title: "Categories of models for algebraic theories"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finitary-functor-and-finitary-monad, def-monadic-and-strictly-monadic-functor]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.5.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

A **category of models for an algebraic theory** is a category $\mathcal A$ equipped with a monadic functor $U:\mathcal A\to\mathbf{Set}$ whose induced monad on $\mathbf{Set}$ is finitary ([[def-monadic-and-strictly-monadic-functor]], [[def-finitary-functor-and-finitary-monad]]).

Equivalently, up to the comparison equivalence over $\mathbf{Set}$, it is the Eilenberg–Moore category of a finitary monad on sets. The phrase records the finitary monadic presentation as part of the data; it does not choose such a presentation for an arbitrary category.
