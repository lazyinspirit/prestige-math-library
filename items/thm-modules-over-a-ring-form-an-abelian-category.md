---
id: thm-modules-over-a-ring-form-an-abelian-category
kind: theorem
title: "Modules over a ring form an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-abelian-category, prop-modules-and-homomorphisms-form-category-rmod, def-module-homomorphism-kernel-image-and-cokernel, thm-first-isomorphism-theorem-modules, thm-rmod-is-complete-and-cocomplete]
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
pipeline_run: frontier-21
---

## Statement

For every ring $R$, the category $R\text{-}\mathbf{Mod}$ of left $R$-modules is
an abelian category.

## Facts & Assumptions

**Given:** A ring $R$.

[L1] Left $R$-modules and their homomorphisms form a category
([[prop-modules-and-homomorphisms-form-category-rmod]]).

[L2] The category $R\text{-}\mathbf{Mod}$ is complete and cocomplete
([[thm-rmod-is-complete-and-cocomplete]]).

[L3] Module kernels, images, and cokernels are the usual ones
([[def-module-homomorphism-kernel-image-and-cokernel]]).

[L4] The first isomorphism theorem for modules identifies the coimage with the
image
([[thm-first-isomorphism-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 The hom-set of module homomorphisms is an abelian group under pointwise addition, and [L2] gives finite products and coproducts, namely the usual direct sums. So $R\text{-}\mathbf{Mod}$ is additive. [L1, L2]

2.1 Every module homomorphism has the kernel and cokernel from [L3], and [L4] identifies $M/\ker f$ with $\operatorname{im}(f)$. Thus $R\text{-}\mathbf{Mod}$ satisfies the defining AB1 and AB2 clauses of [[def-abelian-category]], so it is abelian. [L3, L4] ∎
