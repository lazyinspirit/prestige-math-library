---
id: lem-author-30ec96de6e59-square-cube-uniqueness
kind: lemma
title: Uniqueness from squares and cubes
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $A$ be a reduced commutative ring. If $a,b\in A$ satisfy $a^2=b^2$ and $a^3=b^3$, then $a=b$. Here reduced means that the only nilpotent element is zero.

## Facts & Assumptions

**Given:** A reduced commutative ring $A$ and elements $a,b$ with equal squares and equal cubes.

**Goal:** Prove $a=b$.

## Proof

1.1 From the equalities, $a^2b=b^3=a^3$ and $ab^2=a^3$. Consequently $(a-b)^3=a^3-3a^2b+3ab^2-b^3=0$. [given, algebra]

2.1 Reducedness gives $a-b=0$, so $a=b$. [given, step 1.1] ∎
