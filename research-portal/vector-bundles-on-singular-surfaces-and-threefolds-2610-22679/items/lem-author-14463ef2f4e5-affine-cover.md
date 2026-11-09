---
id: lem-author-14463ef2f4e5-affine-cover
kind: lemma
title: Valuative dimension can be computed on an affine cover
status: draft
domain: mathematics
deps:
  - def-valuative-dimension-and-boundedness
  - lem-author-14463ef2f4e5-valuation-center
  - math:def-scheme-over-base
dependency_roles:
  def-valuative-dimension-and-boundedness: mathematical-premise
  lem-author-14463ef2f4e5-valuation-center: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement
If $X=\bigcup_{i\in I}U_i$ is an affine open cover with $U_i=\operatorname{Spec}A_i$, then $\dim_v X=\sup_i\dim_v A_i$, with empty supremum $-1$.

## Facts & Assumptions
**Given:** A scheme $X$ and an affine open cover as in the statement.

**Goal:** Compare the supremum over all affine opens with that over the given cover.

[F1] The scheme valuative dimension is the supremum over all affine opens, and the ring valuative dimension is the supremum over prime quotients and their valuation overrings. [[def-valuative-dimension-and-boundedness]]

[F2] A valuation overring is local and the prime quotient maps locally at its center into it. [[lem-author-14463ef2f4e5-valuation-center]]

## Proof
1.1 The supremum over the cover is at most $\dim_v X$ by [F1]. Conversely, take an arbitrary affine open $U=\operatorname{Spec}A$, a prime $\mathfrak p\subset A$ and a valuation overring $V$ of $A/\mathfrak p$. The induced map $\operatorname{Spec}V\to U$ has closed point $x$ equal to the contraction of the maximal ideal of $V$. Choose a cover member $U_i=\operatorname{Spec}B$ containing $x$. Every point of $\operatorname{Spec}V$ specializes to its closed point, and an open containing a specialization contains its generization. Hence the map has image in $U_i$ and factors through it as a scheme morphism. [F1, F2, given, choose]

2.1 The corresponding homomorphism $B\to V$ has prime kernel $\mathfrak r$, since $V$ is a domain. The generic point of $\operatorname{Spec}V$ maps to the point represented by $\mathfrak p$ in $U$ and by $\mathfrak r$ in $U_i$; therefore the fraction fields of $A/\mathfrak p$ and $B/\mathfrak r$ identify with the residue field of that common point. Under this identification $V$ contains $B/\mathfrak r$, so it is a valuation overring of that quotient. Thus $\dim V\leq\dim_v B\leq\sup_i\dim_v A_i$. Taking both suprema in [F1] proves the reverse inequality. The empty-cover case is immediate. [F1, step 1.1, algebra] ∎
