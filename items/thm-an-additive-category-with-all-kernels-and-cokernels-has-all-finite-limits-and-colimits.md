---
id: thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits
kind: theorem
title: "An additive category with all kernels and cokernels has all finite limits and colimits"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-additive-category, thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct, thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference, cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference, thm-finite-limit-and-colimit-criteria]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

If an additive category has a kernel and a cokernel for every morphism, then it
has all finite limits and all finite colimits.

## Facts & Assumptions

**Given:** An additive category $\mathcal C$ in which every morphism has a
kernel and a cokernel.

[L1] An additive category has finite biproducts and is preadditive
([[def-additive-category]]).

[L2] In a preadditive category, finite products are biproducts
([[thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct]]).

[L3] Equalizers are kernels of differences, and coequalizers are cokernels of
differences
([[thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference]],
[[cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference]]).

[L4] Finite limits are equivalent to finite products and equalizers, and
finite colimits to finite coproducts and coequalizers
([[thm-finite-limit-and-colimit-criteria]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the category already has finite biproducts, hence finite products and finite coproducts. [L1, L2]

1.2 By hypothesis every morphism has a kernel and a cokernel. Therefore [L3] gives an equalizer and a coequalizer for every parallel pair. [L3]

2.1 Combining steps 1.1 and 1.2 with the finite-(co)limit criteria of [L4] yields all finite limits and all finite colimits. [L4, step 1.1, step 1.2] ∎
