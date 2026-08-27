---
id: thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive
kind: theorem
title: "A left or right exact functor between abelian categories is automatically additive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-exact-and-right-exact-functor, def-abelian-category, thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2(1)"
      url: "https://stacks.math.columbia.edu/tag/010N"
pipeline_run: frontier-21
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be a functor between abelian categories. If $F$
is left exact or right exact, then $F$ is additive.

## Facts & Assumptions

**Given:** A functor $F:\mathcal A\to\mathcal B$ between abelian categories.

[L1] Left exact means preserving finite limits, and right exact means
preserving finite colimits
([[def-left-exact-and-right-exact-functor]]).

[L2] Abelian categories are additive
([[def-abelian-category]]).

[L3] A functor between additive categories is additive exactly when it
preserves finite biproducts
([[thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ is left exact, then by [L1] it preserves the zero object and binary products. In an additive category, products are biproducts by [L2], so $F$ preserves finite biproducts. [L1, L2, L3]

1.2 If $F$ is right exact, then by [L1] it preserves the zero object and binary coproducts. Again [L2] identifies those with finite biproducts, so $F$ preserves finite biproducts. [L1, L2, L3]

2.1 In either case, [L3] applies and shows that $F$ is additive. [L3, step 1.1, step 1.2] ∎
