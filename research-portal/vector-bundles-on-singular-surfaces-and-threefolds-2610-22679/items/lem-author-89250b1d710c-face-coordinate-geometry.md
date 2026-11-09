---
id: lem-author-89250b1d710c-face-coordinate-geometry
kind: lemma
title: Coordinate faces of the algebraic simplex
status: draft
domain: mathematics
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $k$ be a field, $n\geq 0$, $\Delta^n=\operatorname{Spec}k[t_0,\ldots,t_n]/(\sum_a t_a-1)$, and $X$ a $k$-scheme. For a proper subset $I\subsetneq\{0,\ldots,n\}$, the coordinate face $F_I=V(t_i:i\in I)$ is canonically $\Delta^{n-|I|}$ after ordering the remaining coordinates. On each nonempty affine open of $X$, the coordinates indexed by $I$ form a regular sequence in any order: successive multiplication is injective and the final quotient is nonzero. Imposing all coordinates gives the empty scheme. If $\delta_i^n$ inserts zero at position $i$, then for $0\leq i<j\leq n$ and $n\geq2$, $\delta_j^n\delta_i^{n-1}=\delta_i^n\delta_{j-1}^{n-1}$.

## Facts & Assumptions

**Given:** The field, scheme, coordinates and index set in the Statement.

**Goal:** Establish the face descriptions, regular sequences and coordinate identities.

[F1] On an affine open $\operatorname{Spec}B\subset X$, the product ring is $B[t_0,\ldots,t_n]/(\sum t_a-1)$; quotienting by the indicated coordinates gives the face.

## Proof

1.1 Choose $b\notin I$. Eliminate $t_b$ using $t_b=1-\sum_{a\ne b}t_a$. The product ring becomes a polynomial ring in the remaining coordinates over $B$, and quotienting by the coordinates in $I$ leaves a polynomial ring in $n-|I|$ variables. For $B=k$ this gives the indicated simplex with its ordered barycentric coordinates. [F1, construct]

2.1 Multiplication by an indeterminate in a polynomial ring is injective by coefficient comparison. After quotienting by earlier distinct indeterminates, the remaining ring is again polynomial over $B$. Thus the sequence is regular in every order on a nonempty affine open. If all coordinates vanish, $\sum t_a=1$ becomes $0=1$, so the resulting scheme is empty. [step 1.1, algebra]

3.1 Both displayed composites insert zero in positions $i$ and $j$ and leave the other coordinates in their original order. Their coordinate maps agree, proving the identity and the lemma. [step 1.1, algebra] ∎
