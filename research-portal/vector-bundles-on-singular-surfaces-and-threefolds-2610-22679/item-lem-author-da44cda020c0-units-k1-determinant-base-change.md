---
title: Stable determinant commutes with ring maps
status: published
research_item: lem-author-da44cda020c0-units-k1-determinant-base-change
dependency_level: 1
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)
- [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)
- [math:def-ring-matrix-product-identity-and-transpose](https://alphabetamath.cc/item/def-ring-matrix-product-identity-and-transpose)
- [math:thm-derived-subgroup-is-characteristic-and-abelianization-is-universal](https://alphabetamath.cc/item/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal)


## Statement
For a unital homomorphism $f:A\to B$ of commutative unital rings, entrywise application of $f$ induces $\mathrm{GL}(A)^{\mathrm{ab}}\to\mathrm{GL}(B)^{\mathrm{ab}}$. The stable determinant homomorphisms commute with this map and with $f:A^\times\to B^\times$.

## Statement references
[lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

[math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[math:def-ring-matrix-product-identity-and-transpose](https://alphabetamath.cc/item/def-ring-matrix-product-identity-and-transpose)

[math:thm-derived-subgroup-is-characteristic-and-abelianization-is-universal](https://alphabetamath.cc/item/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal)

## Facts & Assumptions
**Given:** A unital homomorphism $f:A\to B$ of commutative unital rings.

**Goal:** Prove the stated naturality square.

[F1] Stable determinant is induced by the permutation formula and factors through abelianization. [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

[F2] A unital ring homomorphism preserves addition, multiplication and $1$. Consequently it preserves $0$ and additive inverses: $f(0)+f(0)=f(0)$ gives $f(0)=0$, and $f(a)+f(-a)=f(0)=0$ gives $f(-a)=-f(a)$. [math:def-ring-homomorphism](https://alphabetamath.cc/item/def-ring-homomorphism)

[F3] Matrix products are given by finite sums of products of entries, and $I_n$ has diagonal entries $1$ and off-diagonal entries $0$. [math:def-ring-matrix-product-identity-and-transpose](https://alphabetamath.cc/item/def-ring-matrix-product-identity-and-transpose)

[F4] The abelianization of a group is an abelian quotient, and every homomorphism into an abelian group factors uniquely through the source's abelianization. [math:thm-derived-subgroup-is-characteristic-and-abelianization-is-universal](https://alphabetamath.cc/item/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal)

## Proof
**Proof technique:** Apply the ring homomorphism to the determinant formula.

1.1 Write $f(M)$ for entrywise application. By [F2] and [F3], $f(MN)=f(M)f(N)$ and $f(I_n)=I_n$. If $MN=NM=I_n$, then $f(M)f(N)=f(N)f(M)=I_n$. Entrywise application therefore gives homomorphisms $\mathrm{GL}_n(A)\to\mathrm{GL}_n(B)$; the identity $f(\operatorname{diag}(M,1))=\operatorname{diag}(f(M),1)$ makes them compatible with the stable groups of [F1]. Compose the resulting homomorphism $\mathrm{GL}(A)\to\mathrm{GL}(B)$ with the abelianization quotient of the target. By [F4] this composite factors uniquely through $\mathrm{GL}(A)^{\mathrm{ab}}$, giving the asserted induced map. A unit and its inverse likewise map to a unit and its inverse; multiplicativity in [F2] makes $f:A^\times\to B^\times$ a homomorphism. [given, F1, F2, F3, F4, algebra]

2.1 Applying $f$ to the finite permutation formula gives $f(\det M)=\det(f(M))$: [F2] preserves each finite sum and product, including the signs $1$ and $-1$. The equality is compatible with stabilization and passes to the abelianized groups by [F1] and step 1.1. This is the desired square. [F1, F2, step 1.1, algebra] ∎
