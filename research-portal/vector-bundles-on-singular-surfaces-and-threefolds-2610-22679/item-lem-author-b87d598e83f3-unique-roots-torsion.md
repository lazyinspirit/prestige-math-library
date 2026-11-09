---
title: Unique divisibility excludes torsion
status: draft
research_item: lem-author-b87d598e83f3-unique-roots-torsion
dependency_level: 0
---

## Prerequisites

None.

## Statement
Let $G$ be an abelian group. Suppose that for every integer $n\geq1$, multiplication by $n$ is a bijection on $G$. Then $G$ is torsion-free: if $ng=0$ for some $n\geq1$, then $g=0$.

## Facts & Assumptions
**Given:** The abelian group and bijectivity hypotheses in the statement.

**Goal:** Prove the stated torsion-freeness.

## Proof
1.1 For any $n\geq1$, the multiplication map $n:G\to G$ is injective by the given bijectivity. It sends $0$ to $0$. [given]

2.1 If $ng=0$, then $ng=n0$; injectivity from step 1.1 gives $g=0$. This holds for every positive $n$, proving the claim. [step 1.1] ∎
