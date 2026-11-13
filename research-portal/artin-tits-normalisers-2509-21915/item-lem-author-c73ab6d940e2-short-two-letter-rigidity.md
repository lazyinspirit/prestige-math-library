---
title: Rigidity of two-letter words below braid length
status: published
research_item: lem-author-c73ab6d940e2-short-two-letter-rigidity
dependency_level: 6
---

## Prerequisites

- [lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence)
- [math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)


## Statement

Let $M$ be the positive monoid of a spherical Artin system with finite standard generating set $S$ and Coxeter matrix $(m_{st})$. Fix distinct $a,b\in S$ with braid parameter $m=m_{ab}<\infty$. Every word supported in $\{a,b\}$ of length less than $m$ is its sole positive word representative in $M$.

## Statement references

[lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence)

[math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations)

## Facts & Assumptions

[F1] Positive word equality is a sequence of support- and length-preserving braid substitutions. ([lem-author-c73ab6d940e2-braid-congruence](item-lem-author-c73ab6d940e2-braid-congruence))

[F2] The words and the standard Artin monoid presentation are defined in [math:def-cg-artin-monoid-and-group-presentations](https://alphabetamath.cc/item/def-cg-artin-monoid-and-group-presentations), Definition (1)–(3). For distinct $s,t\in S$ with $m_{st}<\infty$, the defining braid pair consists of the two alternating words of length $m_{st}\geq2$, both with support $\{s,t\}$; an infinite parameter supplies no pair.

## Proof

**Given:** The hypotheses and notation in the Statement.

**Goal:** Establish the asserted conclusion.

1.1 Any substitution starting from such a word must use a relation supported in $\{a,b\}$. By the defining braid pairs, the only possible relation is the one for the distinct pair $a,b$, of length $m$; relations involving other generators cannot be applied because their left and right sides both contain those generators. [F1, F2, given]

2.1 The word is too short to contain a side of the length-$m$ relation. Thus no first substitution can change it, and the finite-sequence criterion implies that its equality class consists only of itself. [F1, step 1.1] ∎
