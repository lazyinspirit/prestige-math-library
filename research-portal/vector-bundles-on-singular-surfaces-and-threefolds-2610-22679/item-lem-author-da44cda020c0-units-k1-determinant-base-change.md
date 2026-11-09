---
title: Stable determinant commutes with ring maps
status: draft
research_item: lem-author-da44cda020c0-units-k1-determinant-base-change
dependency_level: 1
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

## Statement
For a unital homomorphism $f:A\to B$ of commutative unital rings, entrywise application of $f$ induces $\mathrm{GL}(A)^{\mathrm{ab}}\to\mathrm{GL}(B)^{\mathrm{ab}}$. The stable determinant homomorphisms commute with this map and with $f:A^\times\to B^\times$.

## Statement references
[lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

## Facts & Assumptions
**Given:** A unital homomorphism $f:A\to B$ of commutative unital rings.

**Goal:** Prove the stated naturality square.

[F1] Stable determinant is induced by the permutation formula and factors through abelianization. [lem-author-da44cda020c0-units-k1-stable-matrix-determinant](item-lem-author-da44cda020c0-units-k1-stable-matrix-determinant)

## Proof
**Proof technique:** Apply the ring homomorphism to the determinant formula.

1.1 If $MN=NM=I$, then $f(M)f(N)=f(N)f(M)=I$, so entrywise application gives compatible homomorphisms $\mathrm{GL}_n(A)\to\mathrm{GL}_n(B)$, hence a homomorphism of stable groups and of their abelianizations. A unit and its inverse likewise map to a unit and its inverse. [given, algebra]

2.1 Applying $f$ to the finite permutation formula gives $f(\det M)=\det(f(M))$. The equality is compatible with stabilization and passes to the abelianized groups by [F1]. This is the desired square. [F1, step 1.1, algebra] ∎
