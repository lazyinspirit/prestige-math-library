---
id: thm-the-homotopy-category-is-additive
kind: theorem
title: "The homotopy category is additive"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-category-of-chain-complexes, prop-null-homotopic-maps-form-a-two-sided-additive-ideal, thm-the-category-of-complexes-in-an-additive-category-is-additive, prop-finite-biproducts-of-complexes-are-computed-degreewise]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
pipeline_run: frontier-25
---

## Statement

If $\mathcal A$ is an additive category, then $K(\mathcal A)$ is an additive
category.

## Facts & Assumptions

**Given:** An additive category $\mathcal A$.

[L1] In $K(\mathcal A)$, morphisms are homotopy classes of chain maps ([[def-homotopy-category-of-chain-complexes]]).

[L2] Null-homotopic maps form a two-sided additive ideal ([[prop-null-homotopic-maps-form-a-two-sided-additive-ideal]]).

[L3] The category $\operatorname{Ch}(\mathcal A)$ is additive ([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

[L4] Finite biproducts of complexes are computed degreewise ([[prop-finite-biproducts-of-complexes-are-computed-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], each hom-set of $\operatorname{Ch}(\mathcal A)$ is an abelian group. Quotienting by the additive subgroup of null-homotopic maps from [L2] therefore gives an abelian group structure on each $\operatorname{Hom}_{K(\mathcal A)}(C,D)$ from [L1]. [L1, L2, L3, given, algebra]

2.1 The zero complex and the degreewise biproduct complex exist in $\operatorname{Ch}(\mathcal A)$ by [L3] and [L4]. Because [L2] is a two-sided ideal, the usual injections and projections descend to homotopy classes and still satisfy the biproduct identities in the quotient. Therefore $K(\mathcal A)$ has a zero object and finite biproducts, so it is additive. [L2, L3, L4, step 1.1, algebra] ∎
