---
title: External affine derived and perfect comparisons
status: draft
research_item: thm-author-4f716d60801a-affine-derived-input
dependency_level: 0
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. Let $A$ be a commutative unital ring and $X=\operatorname{Spec}A$. Degreewise associated sheaf induces an equivalence $D(A)\to D_{\mathrm{qc}}(X)$, where the target is the full subcategory of $D(\mathcal O_X)$ whose cohomology sheaves are quasi-coherent. The associated object of an $A$-complex is locally perfect if and only if the complex is isomorphic in $D(A)$ to a bounded complex of finitely generated projective modules.

## Source contract
**Given:** $A$ and $X$ as above, and possibly unbounded complexes.

**Goal:** Record the classical affine comparison and its perfection criterion.

[F1] The cited Stacks Lemma 36.3.5 gives the derived equivalence.

[F2] The cited Stacks Lemma 36.10.7 gives the perfection criterion; the ring convention is that of [math:def-perfect-complex-over-a-ring](https://alphabetamath.cc/item/def-perfect-complex-over-a-ring).

## External input
Import [F1] and [F2] with the stated reading limits. This item asserts a classical derived equivalence; the enhanced comparison is established separately for the actual induced functor.
