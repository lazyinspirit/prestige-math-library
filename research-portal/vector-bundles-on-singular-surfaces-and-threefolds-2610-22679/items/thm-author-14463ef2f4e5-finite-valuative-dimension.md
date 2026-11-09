---
id: thm-author-14463ef2f4e5-finite-valuative-dimension
kind: theorem
title: Finite valuative dimension for noetherian and finite type schemes
status: draft
domain: mathematics
deps:
  - def-valuative-dimension-and-boundedness
  - lem-author-14463ef2f4e5-noetherian-quotient
  - lem-author-14463ef2f4e5-finite-type-dimension
  - lem-author-14463ef2f4e5-affine-cover
  - thm-author-14463ef2f4e5-noetherian-valuative-input
  - math:def-axiom-of-choice
dependency_roles:
  def-valuative-dimension-and-boundedness: mathematical-premise
  lem-author-14463ef2f4e5-noetherian-quotient: mathematical-premise
  lem-author-14463ef2f4e5-finite-type-dimension: mathematical-premise
  lem-author-14463ef2f4e5-affine-cover: mathematical-premise
  thm-author-14463ef2f4e5-noetherian-valuative-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 8
---

## Statement
Assume the Axiom of Choice. A noetherian scheme of finite Krull dimension has finite valuative dimension, bounded above by its Krull dimension. Every scheme of finite type over a field has finite valuative dimension. A noetherian scheme here is one covered by finitely many affine spectra of noetherian rings. Its Krull dimension is the supremum of the lengths of strict chains of irreducible closed subsets; the empty scheme has dimension $-1$. A scheme of finite type over a field has a finite affine cover by spectra of finitely generated algebras over that field.

## Facts & Assumptions
**Given:** Choice, and either a noetherian scheme $X$ of finite Krull dimension $d$, or a scheme $X$ of finite type over a field $k$.

**Goal:** Prove finite valuative dimension in both cases and the bound in the first case.

[F1] For a noetherian domain, valuative dimension equals Krull dimension. [[thm-author-14463ef2f4e5-noetherian-valuative-input]]

[F2] A prime quotient of a noetherian ring is a noetherian domain and has dimension at most that of the ring. [[lem-author-14463ef2f4e5-noetherian-quotient]]

[F3] Under Choice a finitely generated algebra over a field is noetherian and has finite Krull dimension. [[lem-author-14463ef2f4e5-finite-type-dimension]] [[math:def-axiom-of-choice]]

[F4] The valuative dimension of a scheme is the supremum of the valuative dimensions of the rings in any affine open cover. [[lem-author-14463ef2f4e5-affine-cover]]

## Proof
1.1 Let $A$ be a noetherian ring. For each prime $\mathfrak p$, [F2] makes $A/\mathfrak p$ a noetherian domain of dimension at most $\dim A$. By [F1], its valuative dimension equals its Krull dimension. Taking the supremum over prime quotients gives $\dim_v A\leq\dim A$, including the zero-ring convention. [F1, F2, given]

2.1 For an affine open $U=\operatorname{Spec}A$ of a scheme $X$ of dimension $d$, a strict chain of primes in $A$ gives a strict chain of irreducible closed subsets of $U$ in reverse order. Taking their closures in $X$ gives a strict chain of irreducible closed subsets: intersecting each closure with the open set $U$ recovers the original closed subset. Therefore $\dim A\leq d$. If $X$ is noetherian, choose its finite noetherian affine cover. Step 1.1 bounds each cover member's valuative dimension by $d$, and [F4] gives $\dim_v X\leq d$. The empty scheme satisfies the same assertion by convention. [F4, given, step 1.1]

3.1 If $X$ is finite type over $k$, choose a finite affine cover by spectra of finitely generated $k$-algebras. By [F3] each coordinate ring is noetherian of finite dimension, so step 1.1 gives a finite bound for its valuative dimension. The maximum of these finitely many bounds is finite, and [F4] gives the result. The empty cover gives dimension $-1$. [F3, F4, given, step 1.1, choose] ∎
