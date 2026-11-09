---
title: Evaluation preserves kernels
status: published
research_item: lem-author-a44f2061570d-evaluation-left-exact
dependency_level: 8
---

PDF p. 4: Derived Nisnevich and cdh sections

## Prerequisites

- [lem-author-a44f2061570d-kernel-sheaf](item-lem-author-a44f2061570d-kernel-sheaf)

## Statement
For an object $U$ of a small site, evaluation $F\mapsto F(U)$ is additive and preserves kernels of morphisms of abelian sheaves. Consequently, once the category of abelian sheaves is known to be abelian, evaluation is left exact: it preserves exact sequences of the form $0\to F'\to F\to F''$.

## Facts & Assumptions

**Given:** An object $U$ of a small site.

**Goal:** Prove the stated properties of evaluation.

[F1] Kernels of abelian sheaf morphisms are computed objectwise. [lem-author-a44f2061570d-kernel-sheaf](item-lem-author-a44f2061570d-kernel-sheaf)

## Proof

**Proof technique:** Evaluate the kernel universal property.

1.1 Addition of morphisms of abelian sheaves is defined componentwise, so evaluation preserves sums and the zero morphism. By [F1], evaluating a kernel gives the kernel of the evaluated homomorphism. [F1, given]

2.1 In an abelian category, exactness of $0\to F'\to F\to F''$ means that $F'\to F$ identifies $F'$ with the kernel of $F\to F''$. Step 1.1 therefore gives exactness after evaluation in abelian groups. [step 1.1, assume-hyp] ∎
