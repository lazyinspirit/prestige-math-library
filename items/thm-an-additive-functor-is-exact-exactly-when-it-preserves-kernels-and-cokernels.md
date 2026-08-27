---
id: thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels
kind: theorem
title: "An additive functor is exact exactly when it preserves kernels and cokernels"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories, thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels, thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2"
      url: "https://stacks.math.columbia.edu/tag/010N"
pipeline_run: frontier-21
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an additive functor between abelian
categories. Then $F$ is exact if and only if it preserves kernels and
cokernels.

## Facts & Assumptions

**Given:** An additive functor $F:\mathcal A\to\mathcal B$ between abelian
categories.

[L1] An additive functor between additive categories is left exact exactly when
it preserves kernels
([[thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels]]).

[L2] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L3] Exact means additive, left exact, and right exact
([[def-exact-functor-between-abelian-categories]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ is exact, then [L3] says it is left exact and right exact. The left-exact half and [L1] show that $F$ preserves kernels. Applying the same argument to $F^{\mathrm{op}}:\mathcal A^{\mathrm{op}}\to\mathcal B^{\mathrm{op}}$ and using [L2] shows that $F$ preserves cokernels as well. [L1, L2, L3]

2.1 Conversely, assume $F$ preserves kernels and cokernels. By [L1], kernel preservation makes $F$ left exact. Passing to opposites and using [L2], cokernel preservation makes $F$ right exact. Since $F$ is additive by hypothesis, [L3] shows that $F$ is exact. [L1, L2, L3] ∎
