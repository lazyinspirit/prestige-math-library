---
title: Functorial finite coefficients for derived complexes
status: published
research_item: lem-author-b747b28c359f-derived-finite-coefficients
dependency_level: 4
---

PDF p. 4: Definition 2.2

## Prerequisites

- [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)

## Statement
For $C\in D(\mathbb Z)$ and a positive integer $n$, put $C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$. This construction and its cohomology groups are functorial in $C$. For every integer $i$ there is a natural short exact sequence
$$0\to H^i(C)/nH^i(C)\to H^i(C/n)\to H^{i+1}(C)[n]\to0,$$
where $H^{i+1}(C)[n]$ is the subgroup annihilated by $n$.

## Facts & Assumptions

[F1] [lem-derived-coefficient-exact-sequence](item-lem-derived-coefficient-exact-sequence) identifies derived tensoring with $\mathbb Z/n$ with the cone of multiplication by $n$ and supplies the displayed natural exact sequence for complexes.

[F2] Cohomology is a functor on $D(\mathbb Z)$ ([lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)).

## Proof

**Given:** $C\in D(\mathbb Z)$ and a positive integer $n$.

**Goal:** Establish functoriality and the exact sequence.

1.1 Choose a complex representing $C$. By [F1], its multiplication-by-$n$ cone represents $C\otimes^{\mathbf L}\mathbb Z/n$. Derived tensor product is a functor on the derived category; applying [F2] gives functorial cohomology groups, independent of the representative. [F1, F2]

2.1 Apply the natural exact sequence of [F1] to the representative. Step 1.1 identifies its terms with the displayed derived-category terms and transports naturality to maps in $D(\mathbb Z)$. This proves the assertion. [F1, step 1.1] ∎
