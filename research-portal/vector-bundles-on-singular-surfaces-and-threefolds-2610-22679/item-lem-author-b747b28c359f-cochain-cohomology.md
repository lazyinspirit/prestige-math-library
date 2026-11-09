---
title: Cohomology of a cochain complex
status: published
research_item: lem-author-b747b28c359f-cochain-cohomology
dependency_level: 0
---

PDF p. 4: Definition 2.2

## Prerequisites

- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

## Statement
For a cochain complex $C$ of abelian groups and an integer $i$, the quotient $H^i(C)=\ker(d^i:C^i\to C^{i+1})/\operatorname{im}(d^{i-1}:C^{i-1}\to C^i)$ is an abelian group.

A cochain complex consists of abelian groups $C^i$ and homomorphisms $d^i$ satisfying $d^{i+1}d^i=0$. Elements of the kernel are cocycles and elements of the image are coboundaries.

## Facts & Assumptions

[F1] A cochain differential squares to zero, as in [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category).

## Proof

**Given:** A cochain complex $C$ and an integer $i$.

**Goal:** Show that the displayed quotient is an abelian group.

1.1 By [F1], every coboundary in degree $i$ is a cocycle. The kernel and image are subgroups of the abelian group $C^i$, so the image is a normal subgroup of the kernel. [F1]

2.1 The quotient by that subgroup therefore inherits a well-defined abelian group operation. This is $H^i(C)$. [step 1.1] ∎
