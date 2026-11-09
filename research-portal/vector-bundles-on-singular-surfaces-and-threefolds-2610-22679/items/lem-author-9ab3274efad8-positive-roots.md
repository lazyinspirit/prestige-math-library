---
id: lem-author-9ab3274efad8-positive-roots
kind: lemma
title: Positive roots suffice for divisibility
status: published
domain: mathematics
deps:
  - math:def-divisible-module-over-an-integral-domain
dependency_roles:
  math:def-divisible-module-over-an-integral-domain: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
An abelian group is divisible if and only if, for every positive integer n, multiplication by n is surjective.

An abelian group is written additively. Multiplication by n means repeated addition, extended to negative integers using additive inverses. A map is surjective if every element of its codomain has a preimage.

## Facts & Assumptions

[F1] A divisible abelian group is a divisible integer module: for every nonzero integer m and every element a, there is an element b with mb = a ([[math:def-divisible-module-over-an-integral-domain]]).

**Given:** An abelian group A.

**Goal:** Prove the stated equivalence.

## Proof

1.1 If A is divisible, apply [F1] with $m=n$ for each positive $n$ to obtain surjectivity. [F1, given]

2.1 Conversely, assume each positive multiplication map is surjective. For nonzero m and a in A, choose b with $|m|b=a$. If m is positive use b; if m is negative use -b. In either case the chosen element maps to a under multiplication by m. Thus [F1] gives divisibility. [F1, given, choose] ∎
