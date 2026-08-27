---
id: cex-an-exact-functor-need-not-be-faithful
kind: counterexample
title: "An exact functor need not be faithful"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories, def-abelian-category, prop-a-small-product-of-preadditive-categories-is-preadditive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7"
      url: "https://stacks.math.columbia.edu/tag/010N"
pipeline_run: frontier-21
---

## Statement refuted

Every exact functor between abelian categories is faithful.

## Facts & Assumptions

**Given:** Two nonzero abelian categories $\mathcal A$ and $\mathcal B$, and an
object $Y$ of $\mathcal B$ with $1_Y\neq0_{Y,Y}$.

[L1] A finite product of preadditive categories is preadditive
([[prop-a-small-product-of-preadditive-categories-is-preadditive]]).

[L2] Abelian categories are additive and have kernels, cokernels, and
coimage-image isomorphisms
([[def-abelian-category]]).

[L3] Exact means additive, left exact, and right exact
([[def-exact-functor-between-abelian-categories]]).

## Counterexample

1.1 The product category $\mathcal A\times\mathcal B$ is preadditive by [L1], and its zero object, kernels, cokernels, finite biproducts, and canonical coimage-image maps are all computed componentwise from the corresponding structures in the two factors. Since both factors satisfy [L2], the product does too. The projection $\pi_1:\mathcal A\times\mathcal B\to\mathcal A$ preserves those componentwise constructions, so it is exact in the sense of [L3]. [L1, L2, L3]

2.1 The endomorphism $(0,1_Y):(0,Y)\to(0,Y)$ is nonzero in $\mathcal A\times\mathcal B$, but $\pi_1(0,1_Y)=0$. So $\pi_1$ is not faithful. Therefore the refuted claim is false. [given, step 1.1] ∎
