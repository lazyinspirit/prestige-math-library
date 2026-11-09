---
title: Local perfection implies quasi-coherent cohomology
status: published
research_item: lem-author-4f716d60801a-local-perfect-qc
dependency_level: 2
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model)
- [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support)
- [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input)
- [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. On any scheme, local equivalence to a bounded complex of finite locally free sheaves is independent of the chosen derived representative and local on the scheme. Every object satisfying it has quasi-coherent cohomology. The finite bounds may depend on the open set.

## Facts & Assumptions
**Given:** A scheme $X$ and a locally perfect object $E$ of $\mathcal D(X)$.

**Goal:** Prove well-definedness and quasi-coherence of its cohomology.

[F1] [thm-author-4f716d60801a-local-perfect-input](item-thm-author-4f716d60801a-local-perfect-input) gives invariance and locality of perfection.

[F2] [lem-author-4f716d60801a-finite-projective-model](item-lem-author-4f716d60801a-finite-projective-model) identifies finite locally free complexes on affine opens with finite-projective complexes, and [thm-author-4f716d60801a-affine-derived-input](item-thm-author-4f716d60801a-affine-derived-input) gives exactness of associated sheaf.

[F3] [lem-author-4f716d60801a-restriction-support](item-lem-author-4f716d60801a-restriction-support) gives commutation of restriction with cohomology.

## Proof
1.1 The local condition is invariant under derived equivalence and can be checked on an open cover by [F1]. Restricting a local representative to a smaller open set preserves its bounded finite locally free form. [F1, given]

2.1 Refine the local presentations to affine opens. By [F2], on each such open the representative is the associated sheaf of a bounded finite-projective complex. Exactness of associated sheaf identifies its cohomology with associated sheaves of module cohomology, which are quasi-coherent. By [F3] these are the restrictions of $H^n(E)$. Quasi-coherence is local on affine covers, so every $H^n(E)$ is quasi-coherent. The construction imposes no common global bound. [F2, F3, step 1.1] ∎
