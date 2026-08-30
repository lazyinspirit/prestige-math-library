---
id: thm-the-category-of-complexes-in-an-additive-category-is-additive
kind: theorem
title: "The category of complexes in an additive category is additive"
status: draft
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category,
       def-biproduct,
       def-chain-map]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Romyar Sharifi, Homological Algebra, Proposition 2.7.5"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-24
---

## Statement

Let $\operatorname{Ch}(\mathcal A)$ denote the category whose objects are
\mathbb Z-graded objects of $\mathcal A$ equipped with differentials
$d_n:C_n\to C_{n-1}$ satisfying $d_{n-1}d_n=0$, and whose morphisms are chain
maps. If $\mathcal A$ is an additive category, then
$\operatorname{Ch}(\mathcal A)$ is an additive category.

## Facts & Assumptions

**Given:** An additive category $\mathcal A$.

[L1] An additive category has a zero object and finite biproducts ([[def-additive-category]]).

[L2] A biproduct is a common product-coproduct object ([[def-biproduct]]).

[L3] A chain map is a degreewise family commuting with the differentials ([[def-chain-map]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal A$ is additive, [L1] includes the preadditive structure that supplies zero morphisms, so the displayed chain-complex condition is meaningful in $\mathcal A$. The zero object of $\mathcal A$ from [L1] therefore gives the zero complex, which is a zero object of $\operatorname{Ch}(\mathcal A)$ because every chain map to or from it is forced degreewise. [L1, L3]

1.2 For chain complexes $C$ and $D$, let $(C\oplus D)_n:=C_n\oplus D_n$ using the biproducts from [L1]. Define the differential by $d_n^{C\oplus D}:=d_n^C\oplus d_n^D$. Then $(d_{n-1}^C\oplus d_{n-1}^D)(d_n^C\oplus d_n^D)=0$, so this is a chain complex, and the degreewise injections and projections are chain maps. By [L2], they make $C\oplus D$ a biproduct in $\operatorname{Ch}(\mathcal A)$. [L1, L2, L3, algebra]

2.1 Addition of chain maps is defined degreewise on the additive hom-groups of $\mathcal A$, and the chain-map equation is preserved because composition is bilinear. Together with steps 1.1 and 1.2, [L1] shows that $\operatorname{Ch}(\mathcal A)$ is additive. [L1, L3, step 1.1, step 1.2, algebra] ∎
