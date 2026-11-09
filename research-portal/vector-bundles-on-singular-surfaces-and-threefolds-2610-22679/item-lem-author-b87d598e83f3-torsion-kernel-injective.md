---
title: A torsion kernel in a uniquely divisible group vanishes
status: draft
research_item: lem-author-b87d598e83f3-torsion-kernel-injective
dependency_level: 1
---

## Prerequisites

- [lem-author-b87d598e83f3-unique-roots-torsion](item-lem-author-b87d598e83f3-unique-roots-torsion)

## Statement
Let $f:G\to H$ be a homomorphism of abelian groups. If multiplication by each positive integer is bijective on $G$, and every element of $\ker f$ is killed by some positive integer, then $f$ is injective.

## Facts & Assumptions
**Given:** The homomorphism and hypotheses in the statement.

**Goal:** Prove injectivity.

[F1] [lem-author-b87d598e83f3-unique-roots-torsion](item-lem-author-b87d598e83f3-unique-roots-torsion) proves that $G$ is torsion-free under the stated hypothesis.

## Proof
1.1 Every element of $\ker f$ is torsion by hypothesis, so [F1] makes it zero. Thus $\ker f=0$. [F1, given]

2.1 If $f(a)=f(b)$, then $a-b\in\ker f=0$ by step 1.1, hence $a=b$. Therefore $f$ is injective. [step 1.1, algebra] ∎
