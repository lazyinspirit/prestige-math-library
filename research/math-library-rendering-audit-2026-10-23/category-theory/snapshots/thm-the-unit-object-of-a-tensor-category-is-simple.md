---
id: thm-the-unit-object-of-a-tensor-category-is-simple
kind: theorem
title: "The unit object of a tensor category is simple"
status: published
origin: pipeline
deps: [thm-the-unit-object-of-a-multitensor-category-is-semisimple, def-tensor-and-multitensor-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Theorem 4.3.8(i)"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

The unit object of a tensor category is simple.

## Facts & Assumptions

**Given:** A tensor category $\mathcal C$.

[F1] The unit is semisimple in every multitensor category ([[thm-the-unit-object-of-a-multitensor-category-is-semisimple]]).

[F2] In a tensor category $\operatorname{End}(\mathbf1)\cong k$ ([[def-tensor-and-multitensor-category]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], write $\mathbf1$ as a finite direct sum of simple objects. A decomposition with at least two nonzero summands supplies a nontrivial idempotent projection in $\operatorname{End}(\mathbf1)$. [F1, given]

2.1 But [F2] identifies this endomorphism algebra with the field $k$, whose only idempotents are $0$ and $1$. Thus there is one nonzero summand, and $\mathbf1$ is simple. [step 1.1, F2] ∎
