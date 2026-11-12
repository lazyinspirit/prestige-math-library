---
title: Positive roots suffice for divisibility
status: published
research_item: lem-author-9ab3274efad8-positive-roots
dependency_level: 0
---

PDF p. 13: Divisibility of the Picard group

## Prerequisites

- [math:def-divisible-module-over-an-integral-domain](https://alphabetamath.cc/item/def-divisible-module-over-an-integral-domain)
- [math:def-group](https://alphabetamath.cc/item/def-group)


## Statement
An abelian group is divisible if and only if, for every positive integer n, multiplication by n is surjective.

An abelian group is written additively. Multiplication by n means repeated addition, extended to negative integers using additive inverses. A map is surjective if every element of its codomain has a preimage.

## Facts & Assumptions

[F1] An abelian group $A$ is divisible if and only if for every nonzero integer $m$ and every $a\in A$ there is $b\in A$ with $mb=a$ ([math:def-divisible-module-over-an-integral-domain](https://alphabetamath.cc/item/def-divisible-module-over-an-integral-domain)).

[F2] An abelian group has an associative and commutative addition, an identity $0$, and for every element $b$ a unique additive inverse $-b$ with $b+(-b)=0$ ([math:def-group](https://alphabetamath.cc/item/def-group)).

**Given:** An abelian group A.

**Goal:** Prove the stated equivalence.

## Proof

1.1 If A is divisible, apply [F1] with $m=n$ for each positive $n$ to obtain surjectivity. [F1, given]

2.1 Conversely, assume each positive multiplication map is surjective. Fix a nonzero integer $m$ and $a\in A$, set $n=|m|>0$, and choose $b\in A$ with $nb=a$. If $m>0$, then $mb=a$. If $m=-n<0$, associativity and commutativity allow pairing the $n$ copies of $b$ with the $n$ copies of $-b$, giving $nb+n(-b)=0$. Uniqueness of additive inverses gives $n(-b)=-(nb)$, so the definition of negative multiplication gives $m(-b)=-\bigl(n(-b)\bigr)=-(-(nb))=nb=a$. Thus every nonzero integer multiplication map is surjective, and [F1] implies divisibility. [F1, F2, given, choose, algebra] ∎
