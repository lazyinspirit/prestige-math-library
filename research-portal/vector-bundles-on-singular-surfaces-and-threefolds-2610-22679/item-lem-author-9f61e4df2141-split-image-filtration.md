---
title: Image filtration for a split tower
status: draft
research_item: lem-author-9f61e4df2141-split-image-filtration
dependency_level: 6
---

## Prerequisites

- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting)

## Statement
Let $F^\bullet E$ be equivalent as an augmented tower to the tail tower of a family $(G_j)_{j\geq0}$, including an equivalence $E\simeq\bigoplus_{j\geq0}G_j$. For every integer $n$ and $q\geq0$, the image of $\pi_nF^qE\to\pi_nE$ is the image of the canonical tail inclusion $\pi_n(\bigoplus_{j\geq q}G_j)\to\pi_n(\bigoplus_{j\geq0}G_j)$. Moreover the quotient of this image by the corresponding image at $q+1$ is naturally $\pi_nG_q$. This statement does not require identifying homotopy groups of an infinite coproduct with a direct sum.

## Facts & Assumptions
**Given:** The augmented tower equivalence, an integer $n$, and $q\geq0$.

**Goal:** Identify the image filtration and its successive quotient.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) defines image filtration groups.

[F2] [lem-author-9f61e4df2141-tail-splitting](item-lem-author-9f61e4df2141-tail-splitting) identifies the finite decomposition of each tail.

## Proof
1.1 The commutative augmentation square in the specified equivalence identifies the two displayed images. The tail inclusion has a retraction induced by identity maps on summands indexed at least $q$ and zero maps on the others; thus its map on homotopy groups is injective. [F1, given, construct]

2.1 By [F2], $T^q\simeq T^{q+1}\oplus G_q$. Applying $\pi_n$ to this finite biproduct gives $\pi_nT^q\cong\pi_nT^{q+1}\oplus\pi_nG_q$. Under the injection from step 1.1, the quotient of the two successive images is consequently $\pi_nG_q$, naturally in the specified splitting. [F2, step 1.1] ∎
