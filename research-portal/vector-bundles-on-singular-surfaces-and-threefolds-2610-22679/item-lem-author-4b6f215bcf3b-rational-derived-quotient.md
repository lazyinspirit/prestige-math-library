---
title: Finite derived quotients of rational complexes vanish
status: published
research_item: lem-author-4b6f215bcf3b-rational-derived-quotient
dependency_level: 2
---

PDF p. 6: Finite-coefficient comparison

## Prerequisites

- [lem-author-4b6f215bcf3b-rational-complex-multiplication](item-lem-author-4b6f215bcf3b-rational-complex-multiplication)
- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)

## Statement
Let $C$ be an object of $D(\mathbb Z)$ isomorphic to the underlying complex of a complex of $\mathbb Q$-vector spaces, and let $n>0$ be an integer. Then $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ is zero in $D(\mathbb Z)$. The derived tensor product is the total tensor product computed with a K-flat replacement; zero in $D(\mathbb Z)$ means an acyclic complex.

## Facts & Assumptions
**Given:** $C$ and $n$ as stated.

**Goal:** Show $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\simeq0$.

[F1] Multiplication by $n$ is an isomorphism on the underlying complex of a complex of $\mathbb Q$-vector spaces. [lem-author-4b6f215bcf3b-rational-complex-multiplication](item-lem-author-4b6f215bcf3b-rational-complex-multiplication)

[F2] The derived tensor product with $\mathbb Z/n$ is represented by the mapping cone of multiplication by $n$. Its cohomology lies in the natural exact sequence of [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence).

## Proof
1.1 Transporting [F1] across the given isomorphism shows that multiplication by $n$ induces an automorphism of every $H^i(C)$. [F1, given]

2.1 In [F2], both $H^i(C)/nH^i(C)$ and $H^{i+1}(C)[n]$ therefore vanish. The exact sequence gives $H^i(C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n)=0$ for every $i$. Hence the derived quotient is zero. [F2, step 1.1] ∎
