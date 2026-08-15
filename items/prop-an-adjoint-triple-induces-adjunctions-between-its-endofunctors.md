---
id: prop-an-adjoint-triple-induces-adjunctions-between-its-endofunctors
kind: proposition
title: 'An adjoint triple induces adjunctions between its associated endofunctors'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-triple, thm-adjunctions-compose]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Exercise 4.1.iv'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

If $L\dashv M\dashv R$, with $L,R:\mathcal D\to\mathcal C$ and $M:\mathcal C\to\mathcal D$, then

$$LM\dashv RM\quad\text{on }\mathcal C,$$

and

$$ML\dashv MR\quad\text{on }\mathcal D.$$

These adjunctions use the composite units and counits and require no local-smallness hypothesis.

## Facts & Assumptions

**Given:** An adjoint triple $L\dashv M\dashv R$.

[L1] An adjoint triple supplies adjunctions $L\dashv M$ and $M\dashv R$ with the displayed functor types ([[def-adjoint-triple]]).

[L2] If $F\dashv G$ and $F'\dashv G'$, then $F'F\dashv GG'$ with the composite unit and counit formulas ([[thm-adjunctions-compose]]).

## Proof

**Proof technique:** direct.

1.1 Compose $M\dashv R$ with $L\dashv M$ in [L2]. The left composite is $LM:\mathcal C\to\mathcal C$ and the right composite is $RM:\mathcal C\to\mathcal C$, so $LM\dashv RM$. [L1, L2]

1.2 Compose $L\dashv M$ with $M\dashv R$ in [L2]. The left composite is $ML:\mathcal D\to\mathcal D$ and the right composite is $MR:\mathcal D\to\mathcal D$, so $ML\dashv MR$. [L1, L2]

2.1 In each case the unit is obtained by inserting the second unit between the first unit's functors, and the counit by inserting the first counit between the second counit's functors, exactly as in [L2]. Since [L2] uses unit-counit data, neither construction requires hom-sets. [step 1.1, step 1.2, L2] ∎
