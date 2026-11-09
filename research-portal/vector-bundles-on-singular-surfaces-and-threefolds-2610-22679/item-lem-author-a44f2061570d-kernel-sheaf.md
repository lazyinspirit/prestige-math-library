---
title: Pointwise kernels of abelian sheaves
status: published
research_item: lem-author-a44f2061570d-kernel-sheaf
dependency_level: 7
---

PDF p. 4: Derived Nisnevich and cdh sections

## Prerequisites

- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

## Statement
For a morphism $f:F\to G$ of abelian sheaves on a small site, the presheaf $K(U)=\ker(F(U)\to G(U))$ is a sheaf and is the categorical kernel of $f$ among abelian sheaves. A morphism of abelian sheaves is a natural transformation whose components are group homomorphisms.

## Facts & Assumptions

**Given:** A small site and a morphism $f:F\to G$ of abelian sheaves.

**Goal:** Establish the sheaf and kernel properties of the pointwise kernel $K$.

[F1] Covering-sieve matching families of an abelian sheaf have unique amalgamations. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) [lem-author-a44f2061570d-matching-groups](item-lem-author-a44f2061570d-matching-groups)

## Proof

**Proof technique:** Glue in the source sheaf and use uniqueness in the target sheaf.

1.1 A compatible family in $K$ glues uniquely to $s\in F(U)$ by [F1]. Its image $f(s)$ restricts to zero on the covering sieve, so uniqueness of amalgamation in $G$ gives $f(s)=0$. Thus $s\in K(U)$ and $K$ is a sheaf. [F1, given]

2.1 The inclusions $K(U)\subseteq F(U)$ form a natural transformation killed by $f$. Any sheaf morphism into $F$ killed by $f$ factors uniquely through these pointwise kernels, and the factor maps are natural. Thus $K$ has the categorical kernel universal property. [step 1.1, construct] ∎
