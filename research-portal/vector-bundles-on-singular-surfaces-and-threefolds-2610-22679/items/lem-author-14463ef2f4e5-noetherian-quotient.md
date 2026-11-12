---
id: lem-author-14463ef2f4e5-noetherian-quotient
kind: lemma
title: Prime quotients of noetherian rings
status: published
domain: mathematics
deps:
  - lem-author-14463ef2f4e5-quotient-dimension
  - math:def-commutative-ring
  - math:def-left-right-and-two-sided-ideal
  - math:def-prime-and-maximal-ideals
  - math:def-quotient-ring
  - math:def-zero-divisor-and-integral-domain
  - math:def-krull-dimension-of-a-ring
  - math:def-generated-and-principal-ideals
  - math:thm-generated-ideal-description-in-a-commutative-ring
  - math:prop-canonical-quotient-ring-map
  - math:thm-correspondence-theorem-ideals
dependency_roles:
  lem-author-14463ef2f4e5-quotient-dimension: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-left-right-and-two-sided-ideal: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:def-quotient-ring: mathematical-premise
  math:def-zero-divisor-and-integral-domain: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-generated-and-principal-ideals: mathematical-premise
  math:thm-generated-ideal-description-in-a-commutative-ring: mathematical-premise
  math:prop-canonical-quotient-ring-map: mathematical-premise
  math:thm-correspondence-theorem-ideals: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement
If $A$ is a noetherian ring and $\mathfrak p$ is prime, then $A/\mathfrak p$ is a noetherian domain and $\dim(A/\mathfrak p)\leq\dim A$. Here noetherian means that every ideal is finitely generated.

## Statement references
[[math:def-commutative-ring]]

[[math:def-left-right-and-two-sided-ideal]]

[[math:def-prime-and-maximal-ideals]]

[[math:def-quotient-ring]]

[[math:def-zero-divisor-and-integral-domain]]

[[math:def-krull-dimension-of-a-ring]]

[[math:def-generated-and-principal-ideals]]

## Facts & Assumptions
**Given:** A noetherian commutative ring $A$ and a prime ideal $\mathfrak p$.

**Goal:** Establish the domain, noetherian and dimension assertions for the quotient.

[F1] A quotient has Krull dimension at most that of its ring. [[lem-author-14463ef2f4e5-quotient-dimension]] For a nonzero commutative ring, Krull dimension is the supremum of lengths of strict chains of prime ideals. [[math:def-krull-dimension-of-a-ring]]

[F2] An ideal is an additive subgroup closed under multiplication by ring elements. The ideal $(a_1,\ldots,a_n)$ is the smallest ideal containing the listed elements; in a commutative ring its elements are precisely sums $\sum_{i=1}^n r_i a_i$, with the empty sum equal to $0$. An ideal is finitely generated if it equals $(a_1,\ldots,a_n)$ for some finite list. [[math:def-left-right-and-two-sided-ideal]] [[math:def-generated-and-principal-ideals]] [[math:thm-generated-ideal-description-in-a-commutative-ring]]

[F3] A prime ideal is proper and satisfies $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$. A domain is a commutative ring with $1\ne0$ and no zero divisors. [[math:def-prime-and-maximal-ideals]] [[math:def-zero-divisor-and-integral-domain]]

[F4] The quotient has coset multiplication $(a+\mathfrak p)(b+\mathfrak p)=ab+\mathfrak p$. The map $q:A\to A/\mathfrak p$, $q(a)=a+\mathfrak p$, is a surjective ring homomorphism with kernel $\mathfrak p$. [[math:def-quotient-ring]] [[math:prop-canonical-quotient-ring-map]]

[F5] For every ideal $J$ of $A/\mathfrak p$, the inverse image $q^{-1}(J)$ is an ideal of $A$ containing $\mathfrak p$, and $q(q^{-1}(J))=J$. [[math:thm-correspondence-theorem-ideals]]

## Proof
1.1 By [F3], $\mathfrak p$ is proper, so $1\notin\mathfrak p$ and [F4] gives $q(1)\ne q(0)$. If $q(a)q(b)=0$, then $ab\in\mathfrak p$ by [F4]; [F3] gives $a\in\mathfrak p$ or $b\in\mathfrak p$, hence $q(a)=0$ or $q(b)=0$. Commutativity descends from $A$ by the coset multiplication in [F4], so $A/\mathfrak p$ is a domain. Now let $J$ be any ideal of $A/\mathfrak p$. By [F5], $K=q^{-1}(J)$ is an ideal of $A$. Noetherianity gives $K=(a_1,\ldots,a_n)$ for some finite list. For $y\in J$, [F5] gives $x\in K$ with $y=q(x)$, and [F2] writes $x=\sum_{i=1}^n r_i a_i$. Thus $y=\sum_{i=1}^n q(r_i)q(a_i)$. Conversely, each $q(a_i)$ lies in $J$, and the ideal properties in [F2] put every such sum in $J$. Therefore $J=(q(a_1),\ldots,q(a_n))$, including the empty-list case, and $A/\mathfrak p$ is noetherian. [F2, F3, F4, F5, given, algebra]

2.1 Applying [F1] to $I=\mathfrak p$ gives the dimension inequality. [F1, given, step 1.1] ∎
