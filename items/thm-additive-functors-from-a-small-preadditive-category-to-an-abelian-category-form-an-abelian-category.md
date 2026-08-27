---
id: thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category
kind: theorem
title: "Additive functors from a small preadditive category to an abelian category form an abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-abelian-category, prop-additive-functors-and-natural-transformations-form-a-preadditive-category, prop-size-of-functor-categories, thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra, §1.6"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.5"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 5.1"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

If $\mathcal C$ is a small preadditive category and $\mathcal A$ is abelian,
then the category of additive functors $\mathcal C\to\mathcal A$ and natural
transformations is abelian.

## Facts & Assumptions

**Given:** A small preadditive category $\mathcal C$ and an abelian category
$\mathcal A$.

[L1] Additive functors and natural transformations form a preadditive category
([[prop-additive-functors-and-natural-transformations-form-a-preadditive-category]]).

[L2] The smallness of $\mathcal C$ makes the relevant functor categories locally
small ([[prop-size-of-functor-categories]]).

[L3] Limits and colimits in functor categories are computed pointwise
([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]]).

[L4] Abelian categories are additive and have pointwise kernels, cokernels, and
coimage-image isomorphisms
([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the additive functors already form a preadditive category. The zero functor is additive, and binary biproducts are computed pointwise because [L4] gives biproducts in $\mathcal A$ and [L3] computes them pointwise. So the additive functor category is additive. [L1, L3, L4]

2.1 Let $\eta:F\Rightarrow G$ be a natural transformation. By [L3], its kernel and cokernel in the ambient functor category are computed pointwise, and the pointwise constructions lie in $\mathcal A$. Because $\mathcal C$ is preadditive and $F,G$ are additive, the induced structure maps on those pointwise kernels and cokernels are again additive by uniqueness in the kernel and cokernel universal properties. The canonical coimage-to-image map is likewise computed pointwise and is an isomorphism at each object by [L4]. Therefore the additive functor category satisfies the axioms of an abelian category. [L2, L3, L4, step 1.1] ∎
