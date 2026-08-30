---
id: prop-images-and-coimages-of-chain-maps-are-computed-degreewise
kind: proposition
title: "Images and coimages of chain maps are computed degreewise"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-the-kernel-of-a-chain-map-is-computed-degreewise,
       lem-the-cokernel-of-a-chain-map-is-computed-degreewise,
       def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

For a chain map $f:C_\bullet\to D_\bullet$, the image complex and coimage
complex in $\operatorname{Ch}(\mathcal A)$ are obtained degreewise from the
images and coimages of the component maps $f_n$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] In any category with kernels and cokernels, the image is the kernel of the cokernel and the coimage is the cokernel of the kernel ([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[L2] Kernels of chain maps are computed degreewise ([[lem-the-kernel-of-a-chain-map-is-computed-degreewise]]).

[L3] Cokernels of chain maps are computed degreewise ([[lem-the-cokernel-of-a-chain-map-is-computed-degreewise]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], the kernel and cokernel complexes of $f$ have $n$th terms $\ker(f_n)$ and $\operatorname{coker}(f_n)$. Applying [L1] inside $\operatorname{Ch}(\mathcal A)$ therefore shows that the coimage and image complexes have $n$th terms $\operatorname{coker}(\ker f_n)$ and $\ker(\operatorname{coker} f_n)$. [L1, L2, L3]

2.1 Those are exactly the ordinary coimage and image objects of $f_n$ by [L1]. Hence the complex-level image and coimage are computed degreewise, and the canonical coimage-to-image map is the family of the component canonical maps. [L1, step 1.1] ∎
