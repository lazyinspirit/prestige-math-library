---
id: prop-additive-functors-and-natural-transformations-form-a-preadditive-category
kind: proposition
title: "Additive functors and natural transformations form a preadditive category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-preadditive-category, def-additive-functor, def-functor-category, prop-size-of-functor-categories]
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
    - title: "Mike Prest, Modules as exact functors, Functor categories"
      url: "https://arxiv.org/pdf/1801.08015"
pipeline_run: frontier-20
---

## Statement

If $\mathcal C$ is small and $\mathcal D$ is preadditive, then the category
whose objects are additive functors $\mathcal C\to\mathcal D$ and whose
morphisms are natural transformations is preadditive.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and a preadditive category
$\mathcal D$.

[L1] The functor category has functors as objects and natural transformations as
morphisms ([[def-functor-category]]).

[L2] If the source is small and the target locally small, then the functor
category is locally small ([[prop-size-of-functor-categories]]).

[L3] In a preadditive category each hom-set is an abelian group and composition
is bilinear ([[def-preadditive-category]]).

[L4] A functor is additive exactly when each induced map on hom-sets is a group
homomorphism ([[def-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 Since a preadditive category is locally small by definition of its hom-sets, [L2] makes the natural transformations between any two additive functors $F,G:\mathcal C\to\mathcal D$ into a set. For $\alpha,\beta:F\Rightarrow G$, define $(\alpha+\beta)_A:=\alpha_A+\beta_A$ in $\mathcal D(FA,GA)$. The naturality square for $\alpha+\beta$ commutes because composition in $\mathcal D$ is bilinear by [L3]. Thus each hom-set is an abelian group under pointwise addition. [L1, L2, L3]

2.1 If $\beta:G\Rightarrow H$ and $\alpha:F\Rightarrow G$, then vertical composition satisfies $(\beta\alpha+\beta'\alpha')_A=(\beta_A\alpha_A+\beta'_A\alpha'_A)$, so fixing either factor and using bilinearity in $\mathcal D$ shows composition of natural transformations is bilinear. [L1, L3, step 1.1]

3.1 The underlying category structure comes from [L1], the hom-sets are abelian groups by step 1.1, and composition is bilinear by step 2.1. Hence the additive functors and natural transformations form a preadditive category. [L1, L4, step 1.1, step 2.1] ∎
