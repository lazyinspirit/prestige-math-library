---
id: thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor
kind: theorem
title: 'The free-monoid functor is left adjoint to the underlying-set functor'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-words-satisfy-the-free-monoid-universal-property, thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]
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
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

The assignment $X\mapsto X^*$ of the finite-word monoid extends to a functor $(-)^*:\mathbf{Set}\to\mathbf{Mon}$ and is left adjoint to the underlying-set functor $U:\mathbf{Mon}\to\mathbf{Set}$.

## Facts & Assumptions

**Given:** A set $X$ and its finite-word monoid $X^*$.

[L1] The one-letter map $i_X:X\to X^*$ is universal: every function $X\to U(M)$ extends uniquely to a monoid homomorphism $X^*\to M$ ([[lem-words-satisfy-the-free-monoid-universal-property]]).

[L2] Chosen objectwise universal arrows assemble uniquely into a left adjoint ([[thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]]).

## Proof

**Proof technique:** direct.

1.1 For a function $a:X\to Y$, let $a^*:X^*\to Y^*$ be the unique monoid homomorphism extending the one-letter function $i_Ya$. [L1, construct]

1.2 Restriction to letters and the extension in [L1] are inverse, naturally identifying monoid homomorphisms $X^*\to M$ with functions $X\to U(M)$. [L1]

2.1 Uniqueness in [L1] gives $(1_X)^*=1_{X^*}$ and $(ba)^*=b^*a^*$, since each pair agrees on all one-letter words. Thus $(-)^*$ is a functor and $i_X$ is natural. [step 1.1, L1]

3.1 Therefore $(X^*,i_X)$ is a universal arrow from $X$ to $U$, and [L2] gives $(-)^*\dashv U$, including the empty-set case. [step 1.1, step 2.1, step 1.2, L2] ∎
