---
id: thm-abelian-groups-form-an-abelian-category
kind: theorem
title: "Abelian groups form an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-abelian-groups-are-z-modules, def-abelian-category, prop-modules-and-homomorphisms-form-category-rmod, def-module-homomorphism-kernel-image-and-cokernel, thm-first-isomorphism-theorem-modules, thm-rmod-is-complete-and-cocomplete]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
    - title: "The Stacks Project, Section 12.5"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

The category $\mathbf{Ab}$ of abelian groups and homomorphisms is an abelian
category.

## Facts & Assumptions

**Given:** The category $\mathbf{Ab}$ of abelian groups.

[L1] Abelian groups and $\mathbb Z$-modules have the same objects and
morphisms ([[prop-abelian-groups-are-z-modules]]).

[L2] For every ring $R$, the category $R\text{-}\mathbf{Mod}$ is complete and
cocomplete
([[prop-modules-and-homomorphisms-form-category-rmod]],
[[thm-rmod-is-complete-and-cocomplete]]).

[L3] For a module homomorphism, the kernel, image, and cokernel are the usual
submodule and quotient constructions
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L4] The first isomorphism theorem for modules identifies $M/\ker f$ with
$\operatorname{im}(f)$
([[thm-first-isomorphism-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mathbf{Ab}$ is the same category as $\mathbb Z\text{-}\mathbf{Mod}$. The hom-sets are therefore abelian groups under pointwise addition, and by [L2] finite products and coproducts exist and are the usual direct sums. So $\mathbf{Ab}$ is additive. [L1, L2]

2.1 Again by [L1], kernels and cokernels in $\mathbf{Ab}$ are the module kernels and cokernels from [L3]. The coimage of a homomorphism is $G/\ker f$, its image is the usual image subgroup, and [L4] identifies them canonically. Hence the AB1 and AB2 clauses of [[def-abelian-category]] hold, so $\mathbf{Ab}$ is abelian. [L1, L3, L4] ∎
