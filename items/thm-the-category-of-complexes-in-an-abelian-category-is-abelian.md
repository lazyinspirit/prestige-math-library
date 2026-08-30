---
id: thm-the-category-of-complexes-in-an-abelian-category-is-abelian
kind: theorem
title: "The category of complexes in an abelian category is abelian"
status: published
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abelian-category,
       lem-the-kernel-of-a-chain-map-is-computed-degreewise,
       lem-the-cokernel-of-a-chain-map-is-computed-degreewise,
       prop-images-and-coimages-of-chain-maps-are-computed-degreewise,
       thm-the-category-of-complexes-in-an-additive-category-is-additive]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Lemma 12.13.3"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Statement

If $\mathcal A$ is an abelian category, then $\operatorname{Ch}(\mathcal A)$ is
an abelian category.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$.

[L1] An abelian category is an additive category in which every morphism has a kernel and a cokernel, and every coimage-to-image comparison is an isomorphism ([[def-abelian-category]]).

[L2] $\operatorname{Ch}(\mathcal A)$ is additive ([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

[L3] Kernels and cokernels of chain maps are computed degreewise ([[lem-the-kernel-of-a-chain-map-is-computed-degreewise]], [[lem-the-cokernel-of-a-chain-map-is-computed-degreewise]]).

[L4] Images, coimages, and the coimage-to-image comparison of a chain map are computed degreewise ([[prop-images-and-coimages-of-chain-maps-are-computed-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], $\operatorname{Ch}(\mathcal A)$ is additive and every chain map has a kernel and a cokernel. [L2, L3]

1.2 Let $f:C\to D$ be a chain map. By [L4], the coimage-to-image comparison of $f$ is the family of the coimage-to-image comparisons of the component maps $f_n$. Each of those is an isomorphism by [L1], so the family is an isomorphism of complexes. Therefore the defining clauses of [L1] hold in $\operatorname{Ch}(\mathcal A)$. [L1, L4, algebra]

2.1 Steps 1.1 and 1.2 prove that $\operatorname{Ch}(\mathcal A)$ is abelian. [L1, step 1.1, step 1.2] ∎
