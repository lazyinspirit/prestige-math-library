---
title: Residue fields and normalization point degrees
status: published
research_item: lem-algebraically-closed-residue-fields
dependency_level: 0
---

PDF p. 7: Smooth point generator; PDF p. 13: Normalization pushforward

## Prerequisites

- [math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)
- [math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)

## Statement
Let $k$ be an algebraically closed field. Every closed point of a finite-type $k$-scheme has residue field canonically equal to $k$ via its structure map. If $f:Y\to X$ is a finite surjective morphism between finite-type $k$-schemes, then the fiber over each closed point $x\in X$ is a nonempty finite set of closed points of $Y$. Each such point $y$ has residue field $k$, and its zero-cycle pushforward is $f_*[y]=[x]$.

Here a zero-cycle is a finite integral linear combination of closed points. For a finite morphism, the pushforward of a closed point is defined by $f_*[y]=[\kappa(y):\kappa(f(y))][f(y)]$; the field degree is finite. A finite morphism is one whose inverse image of every affine open $\operatorname{Spec}A$ is affine, say $\operatorname{Spec}B$, with $B$ a finite $A$-module.

## Statement references
[math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)

## Facts & Assumptions
[F1] For algebraically closed $k$, every maximal ideal of $k[t_1,\ldots,t_n]$ is an evaluation ideal and has quotient $k$ ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)).

[F2] For a finite family of pairwise comaximal ideals, the quotient map to the product of the quotient rings is surjective ([math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)).

## Proof
**Given:** An algebraically closed field $k$ and the finite-type schemes and finite surjective morphism in the statement.

**Goal:** Prove the residue-field assertion and the stated description and pushforward of each closed fiber.

1.1 Let $z$ be a closed point of a finite-type $k$-scheme and choose an affine open neighborhood $\operatorname{Spec}A$ of $z$. The point is closed in that open, so it corresponds to a maximal ideal $\mathfrak m$ of $A$. Since $A$ is a finitely generated $k$-algebra, write $A=k[t_1,\ldots,t_n]/I$. The inverse image of $\mathfrak m$ is maximal in the polynomial ring. By [F1], its quotient is $k$, with the identification induced by the structure map. Hence $\kappa(z)=A/\mathfrak m$ is canonically $k$. [given, F1, choose]

2.1 Let $x\in X$ be closed and choose an affine neighborhood $U=\operatorname{Spec}A$, with $x$ represented by $\mathfrak m$. By finiteness, $f^{-1}(U)=\operatorname{Spec}B$ for a finite $A$-algebra $B$. The fiber over $x$ is $\operatorname{Spec}C$, where $C=B\otimes_A\kappa(x)=B/\mathfrak mB$ is a finite-dimensional $k$-algebra by step 1.1. Surjectivity makes this fiber nonempty, so $C\ne0$. If $\mathfrak p$ is a prime of $C$, then $C/\mathfrak p$ is a finite-dimensional domain over $k$; multiplication by any nonzero element is an injective, hence surjective, linear map, so $C/\mathfrak p$ is a field. Thus every prime of $C$ is maximal. [given, step 1.1, choose, algebra]

3.1 Distinct maximal ideals of $C$ are pairwise comaximal. For any finite collection of them, the Chinese remainder map of [F2] from $C$ onto the product of their nonzero residue fields is surjective. Consequently the number in any such collection is at most $\dim_k C$, so $\operatorname{Spec}C$ is finite. Every point $y$ in this fiber is closed in the fiber because its prime is maximal, and the fiber is closed in $Y$ because $x$ is closed in $X$; hence $y$ is closed in $Y$. Step 1.1 gives $\kappa(y)=k$ compatibly with $\kappa(x)=k$. [F2, step 2.1, step 1.1, algebra]

4.1 The fiber is nonempty by surjectivity and finite by step 3.1. For each of its points, the induced extension $\kappa(x)\to\kappa(y)$ is identified with the identity of $k$, so its degree is one. The definition of zero-cycle pushforward therefore gives $f_*[y]=[x]$. [given, step 3.1, algebra] ∎
