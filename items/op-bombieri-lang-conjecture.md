---
id: op-bombieri-lang-conjecture
kind: open-problem
title: Bombieri–Lang non-density conjecture for varieties of general type
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-global-field
  - def-variety-of-general-type-over-number-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Bjorn Poonen, Rational Points on Varieties, Chapter 9 §9.5.3
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
      locator: Chapter 9 §9.5.3, the Bombieri–Lang non-density conjecture.
    - title: Junyi Xie, arXiv:2607.02165
      url: https://arxiv.org/pdf/2607.02165
      locator: Introduction, Conjecture 1.1 and the separate function-field results.
---

## Open problem

For every number field $K$ and every smooth projective geometrically integral variety $X/K$ of positive dimension and general type, prove that the set $X(K)$ of $K$-rational points is not Zariski dense in $X$; equivalently, its Zariski closure is a proper closed subset of $X$.

## Open problem references

[[def-global-field]]

[[def-variety-of-general-type-over-number-field]]

[Bjorn Poonen, *Rational Points on Varieties*, Chapter 9 §9.5.3](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Junyi Xie, arXiv:2607.02165, Conjecture 1.1](https://arxiv.org/pdf/2607.02165)

## Facts & Assumptions

**Given:** A number field $K$ and a smooth projective geometrically integral positive-dimensional variety $X/K$.

[F1] General type means positive asymptotic growth of pluricanonical sections as defined on the local A-page helper. ([[def-variety-of-general-type-over-number-field]])

[A1] The library's canonical-line-bundle interface uses AC. ([[def-axiom-of-choice]])

## Status

Poonen records this as the Bombieri–Lang conjecture. Xie's 2026 preprint states the number-field non-density conjecture and treats its function-field analogue separately; the reported function-field results do not prove this number-field statement. The stronger Lang finiteness conjecture is not included here.
