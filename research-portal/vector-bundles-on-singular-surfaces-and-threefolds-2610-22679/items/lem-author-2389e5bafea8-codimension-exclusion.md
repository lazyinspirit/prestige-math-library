---
id: lem-author-2389e5bafea8-codimension-exclusion
kind: lemma
title: Excluding points of codimension zero and one
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
Let $C$ be an integral scheme and $Z\subseteq C$ a subset containing no point of codimension zero or one. Then $Z$ has codimension at least two in $C$.

The codimension of a point $x$ in $C$ is the supremum of lengths of strict chains of irreducible closed subsets of $C$ from $C$ to $\overline{\{x\}}$; the codimension of $Z$ is the infimum of the codimensions of its points, with infimum of the empty set defined as $+\infty$.

## Facts & Assumptions

**Given:** An integral scheme $C$ and a subset $Z$ with no point of codimension zero or one.

**Goal:** Show that $\operatorname{codim}_C Z\geq 2$.

## Proof

1.1 For every $x\in Z$, its codimension is a nonnegative integer or $+\infty$, being the supremum of lengths of finite chains. It is neither zero nor one by hypothesis, so it is at least two. [given]

2.1 Taking the infimum over $x\in Z$ proves the inequality; if $Z$ is empty, the stated convention gives $+\infty$. [step 1.1] ∎
