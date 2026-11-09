---
id: lem-author-4057f3195e4f-degree-adjustment
kind: lemma
title: Degree-zero representatives modulo a boundary class
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
Let $q:A\to D$ and $\deg:A\to\mathbb Z$ be homomorphisms of abelian groups. If $q$ is surjective and there is $e\in\ker q$ with $\deg(e)=1$, then $q$ maps $\ker(\deg)$ onto $D$.

## Facts & Assumptions

**Given:** The homomorphisms and element in the statement.

**Goal:** Find a degree-zero preimage of every element of $D$.

## Proof

1.1 Given $y\in D$, choose $a\in A$ with $q(a)=y$ and put $a_0=a-\deg(a)e$. Then $\deg(a_0)=\deg(a)-\deg(a)\deg(e)=0$. [given, choose, construct]

2.1 Since $q(e)=0$, we also have $q(a_0)=q(a)=y$. Thus every $y$ has a preimage in $\ker(\deg)$. [given, step 1.1] ∎
