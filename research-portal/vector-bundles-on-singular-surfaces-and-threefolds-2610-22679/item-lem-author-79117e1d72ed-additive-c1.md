---
title: The actual EM first Chern class is additive and natural
status: draft
research_item: lem-author-79117e1d72ed-additive-c1
dependency_level: 10
---

PDF p. 2: Motivic projective bundle property; PDF p. 8: Orientation for the splitting principle

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1)

## Statement
For every qcqs scheme $X$ over a field, define $c_1$ to be the degree-two map of EM Definition5.2. Then $c_1:\operatorname{Pic}(X)\to H^{2,1}(X)$ is a natural group homomorphism. In particular $c_1(L\otimes M)=c_1(L)+c_1(M)$, $c_1(\mathcal O_X)=0$, and $c_1(L^\vee)=-c_1(L)$.

## Facts & Assumptions
[F1] [thm-author-79117e1d72ed-em-multiplication-c1](item-thm-author-79117e1d72ed-em-multiplication-c1) supplies the actual natural map $R\Gamma_{\rm Nis}(X,\mathbb G_m)[-1]\to C_1(X)$, and its source degree two identifies with $\operatorname{Pic}(X)$ under tensor product.

[F2] [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme) defines this group and identifies its inverse with duality.

## Proof
**Given:** $X,L,M$ as stated.

**Goal:** Justify this definition, additivity and naturality.

1.1 Apply $H^2$ to the map in [F1]. A map in the derived category induces an abelian-group homomorphism on cohomology, so its Picard map is additive for the tensor-product group law. It is well-defined on line-bundle isomorphism classes. This defines precisely the EM class, without replacing it by a K-zero line-class map. [F1, F2, construct]

2.1 A group homomorphism sends the identity to zero and inverses to negatives. Thus the three identities hold by [F2]. The square of complexes for any pullback commutes by [F1]; its degree-two square gives $f^*c_1(L)=c_1(f^*L)$. [F1, F2, step 1.1] ∎
