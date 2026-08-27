---
id: thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse
kind: theorem
title: "A semiadditive category is preadditive exactly when every morphism has an additive inverse"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-semiadditive-category, def-preadditive-category, thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]
justified_by: []
aliases: []
landmark: true
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2, Exercise 2.4"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "Peter Freyd, Abelian Categories, Exercise 2A.2"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-20
---

## Statement

A semiadditive category is preadditive if and only if every morphism has an
additive inverse for the canonical commutative-monoid law on its hom-set.

## Facts & Assumptions

**Given:** A semiadditive category $\mathcal C$.

[L1] A semiadditive category has finite biproducts and therefore a canonical
commutative-monoid enrichment with bilinear composition
([[def-semiadditive-category]]).

[L2] A preadditive category is exactly a category whose hom-sets are abelian
groups and whose composition is bilinear ([[def-preadditive-category]]).

[L3] A bilinear commutative-monoid enrichment compatible with fixed finite
biproducts is unique
([[thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal C$ is preadditive. [L2, L3]
For parallel $f,g:A\to B$, product uniqueness gives
$\langle f,g\rangle=i_1f+i_2g$, and bilinearity gives
$\nabla\langle f,g\rangle=f+g$. Thus the hom-group addition is compatible with
the biproduct diagrams and equals the canonical law by [L3]. Every
hom-set is an abelian group by [L2], so every morphism has an inverse for the
canonical law. [L2, L3]

1.2 Conversely, assume every morphism in $\mathcal C$ has an additive inverse for the commutative-monoid law from [L1]. Then every hom-set is a commutative monoid in which each element has an inverse, hence an abelian group. The bilinearity of composition is already part of [L1]. [L1]

2.1 Therefore the hom-sets are abelian groups with bilinear composition exactly when every morphism has an additive inverse, which is the definition of preadditivity in [L2]. [L1, L2, step 1.1, step 1.2] ∎
