---
id: cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference
kind: corollary
title: "In a preadditive category, the coequalizer of a parallel pair is the cokernel of their difference"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference, thm-the-opposite-of-a-preadditive-category-is-preadditive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-20
---

## Statement

Let $f,g:A\rightrightarrows B$ be morphisms in a preadditive category. Then a
coequalizer of $f$ and $g$ is exactly a cokernel of $f-g$, and conversely.

## Facts & Assumptions

**Given:** Parallel morphisms $f,g:A\rightrightarrows B$ in a preadditive
category.

[L1] In a preadditive category, equalizers are kernels of differences
([[thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference]]).

[L2] The opposite of a preadditive category is preadditive
([[thm-the-opposite-of-a-preadditive-category-is-preadditive]]).

## Proof

**Proof technique:** direct.

1.1 In the opposite category, the pair $f,g:A\rightrightarrows B$ becomes a parallel pair $f^{\mathrm{op}},g^{\mathrm{op}}:B\rightrightarrows A$. By [L2], that opposite category is again preadditive. [L2]

2.1 Applying [L1] there says that an equalizer of $f^{\mathrm{op}}$ and $g^{\mathrm{op}}$ is a kernel of $f^{\mathrm{op}}-g^{\mathrm{op}}$. Translating back to the original category exchanges equalizers with coequalizers and kernels with cokernels. [L1, step 1.1]

3.1 Therefore a coequalizer of $f$ and $g$ is exactly a cokernel of $f-g$. [step 2.1] ∎
