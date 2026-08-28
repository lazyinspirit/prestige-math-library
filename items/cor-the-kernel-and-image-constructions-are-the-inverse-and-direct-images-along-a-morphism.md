---
id: cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism
kind: corollary
title: "Kernel and image are the inverse and direct images along a morphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-direct-image-and-inverse-image-of-a-subobject, def-subobject-and-quotient-object, def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Section VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-22
---

## Statement

Let $f:A\to A'$ be a morphism in an abelian category.

1. The inverse image of the zero subobject of $A'$ along $f$ is $\ker(f)$.
2. The direct image of the identity subobject of $A$ along $f$ is
   $\operatorname{im}(f)$.

## Facts & Assumptions

**Given:** A morphism $f:A\to A'$.

[L1] Inverse image is defined by pullback and direct image by ordinary image
factorization ([[def-the-direct-image-and-inverse-image-of-a-subobject]]).

[L2] A subobject is represented by a monomorphism; in particular $0\to A'$ and
$1_A:A\to A$ represent the zero and total subobjects
([[def-subobject-and-quotient-object]]).

[L3] The ordinary image of a morphism is defined as the kernel of a cokernel
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 Pulling back the zero subobject $0\to A'$ along $f$ produces exactly the kernel square of $f$, so by [L1] and [L2] the inverse image $f^*(0)$ is $\ker(f)$. [L1, L2]

1.2 The direct image of the identity subobject $1_A$ is, by [L1], the image of the composite $A\xrightarrow{1_A}A\xrightarrow f A'$, which is just the image of $f$ in the sense of [L3]. [L1, L2, L3]

2.1 Therefore kernels and images are exactly inverse and direct images along the morphism $f$. [step 1.1, step 1.2] ∎
