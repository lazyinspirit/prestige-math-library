---
id: lem-author-30ec96de6e59-seminormal-ring-reduced
kind: lemma
title: The square-cube condition implies reducedness
status: published
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
If a commutative ring $A$ has a unique $a\in A$ with $a^2=x$ and $a^3=y$ for every pair $x,y\in A$ with $x^3=y^2$, then $A$ is reduced: it has no nonzero nilpotent element.

## Facts & Assumptions

**Given:** A commutative ring satisfying the stated square-cube condition.

**Goal:** Show that every nilpotent element vanishes.

## Proof

1.1 If $z^2=0$, then $z^3=0$ as well. Both $0$ and $z$ have square and cube equal to zero, so uniqueness applied to $(x,y)=(0,0)$ gives $z=0$. [given]

2.1 If $t^n=0$ for some positive integer $n$, choose a power of two at least $n$. Repeatedly applying step 1.1 to $t$ raised to successively halved exponents shows $t=0$. Thus $A$ is reduced. [step 1.1, construct] ∎
