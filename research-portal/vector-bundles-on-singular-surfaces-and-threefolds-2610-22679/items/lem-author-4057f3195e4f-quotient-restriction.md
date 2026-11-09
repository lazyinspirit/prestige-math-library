---
id: lem-author-4057f3195e4f-quotient-restriction
kind: lemma
title: Quotienting a compatible surjection
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
Let $r:A\to D$ be a surjective homomorphism of abelian groups, and let $P\subseteq A$ be a subgroup. Then $r$ induces a surjection $\bar r:A/P\to D/r(P)$ whose kernel is $(\ker r+P)/P$.

## Facts & Assumptions

**Given:** $r$, $A$, $D$ and $P$ as stated. A quotient $A/P$ consists of cosets with addition induced by that of $A$.

**Goal:** Establish the induced map, its surjectivity and its kernel.

## Proof

1.1 Define $\bar r(a+P)=r(a)+r(P)$. If $a-a'\in P$, then $r(a)-r(a')\in r(P)$, so this assignment is well-defined and is a homomorphism. Surjectivity follows from that of $r$. [given, construct]

2.1 The coset $a+P$ lies in the kernel exactly when $r(a)=r(p)$ for some $p\in P$, equivalently $a-p\in\ker r$. Thus the kernel is precisely $(\ker r+P)/P$. [step 1.1] ∎
