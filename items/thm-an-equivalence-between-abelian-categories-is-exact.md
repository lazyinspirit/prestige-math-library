---
id: thm-an-equivalence-between-abelian-categories-is-exact
kind: theorem
title: "An equivalence between abelian categories is exact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-equivalence-and-adjoint-equivalence-of-categories, prop-equivalences-preserve-reflect-and-create-limits-and-colimits, def-left-exact-and-right-exact-functor, def-exact-functor-between-abelian-categories, thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts, def-abelian-category]
justified_by: []
aliases: []
landmark: false
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
    - title: "Emily Riehl, Category Theory in Context, Lemma 3.4.5 and Definition 3.4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-21
---

## Statement

Every equivalence between abelian categories is exact.

## Facts & Assumptions

**Given:** An equivalence $F:\mathcal A\to\mathcal B$ between abelian
categories.

[L1] Equivalences preserve all limits and colimits that exist
([[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]]).

[L2] Abelian categories are additive
([[def-abelian-category]]).

[L3] A functor between additive categories is additive exactly when it
preserves finite biproducts
([[thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts]]).

[L4] Exact means additive, left exact, and right exact
([[def-left-exact-and-right-exact-functor]],
[[def-exact-functor-between-abelian-categories]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the functor $F$ preserves finite limits and finite colimits. So by [L4] it is left exact and right exact. In particular it preserves finite products and finite coproducts. [L1, L4]

2.1 Since the source and target are additive by [L2], those finite products and coproducts are finite biproducts. Therefore step 1.1 lets [L3] conclude that $F$ is additive. Together with step 1.1, that is exactly the definition of exactness in [L4]. [L2, L3, L4, step 1.1] ∎
