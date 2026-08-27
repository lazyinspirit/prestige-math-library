---
id: thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference
kind: theorem
title: "In a preadditive category, the equalizer of a parallel pair is the kernel of their difference"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, def-equalizers-and-coequalizers, def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-20
---

## Statement

Let $f,g:A\rightrightarrows B$ be morphisms in a preadditive category. Then an
equalizer of $f$ and $g$ is exactly a kernel of the difference $f-g$, and
conversely.

## Facts & Assumptions

**Given:** Parallel morphisms $f,g:A\rightrightarrows B$ in a preadditive
category.

[L1] In a preadditive category each hom-set is an abelian group and composition
is bilinear ([[def-preadditive-category]]).

[L2] An equalizer of $f$ and $g$ is a universal morphism $e:E\to A$ with
$fe=ge$ ([[def-equalizers-and-coequalizers]]).

[L3] A kernel of a morphism $h$ is an equalizer of $h$ and the zero morphism
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 For any morphism $e:E\to A$, bilinearity in [L1] gives $(f-g)e=fe-ge$. Therefore $fe=ge$ if and only if $(f-g)e=0$. [L1]

2.1 By [L2], the universal property of an equalizer of $f$ and $g$ says exactly that every $h:X\to A$ with $fh=gh$ factors uniquely through $e$. By step 1.1 this is the same as asking that every $h$ with $(f-g)h=0$ factor uniquely through $e$. [L2, step 1.1]

3.1 The condition in step 2.1 is precisely the kernel universal property from [L3]. So equalizers of $f$ and $g$ and kernels of $f-g$ are the same data. [L3, step 2.1] ∎
