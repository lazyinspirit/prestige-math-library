---
title: Unique divisibility is invariant under group isomorphism
status: published
research_item: lem-author-b87d598e83f3-isomorphism-transfers-roots
dependency_level: 0
---

## Prerequisites

None.

## Statement
Let $u:G\to H$ be an isomorphism of abelian groups. If multiplication by every positive integer is bijective on $G$, then the same is true on $H$.

## Facts & Assumptions
**Given:** The isomorphism and bijectivity hypotheses in the statement.

**Goal:** Transfer bijectivity to $H$.

## Proof
1.1 For each integer $n\geq1$, homomorphism compatibility gives $n_H=u\circ n_G\circ u^{-1}$. [given, algebra]

2.1 Each factor on the right is bijective, so $n_H$ is bijective. This holds for every positive integer, as required. [step 1.1] ∎
