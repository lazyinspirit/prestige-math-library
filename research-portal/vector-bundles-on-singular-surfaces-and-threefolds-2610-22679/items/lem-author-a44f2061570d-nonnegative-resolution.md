---
id: lem-author-a44f2061570d-nonnegative-resolution
kind: lemma
title: Negative cohomology of a nonnegative evaluated complex
status: published
domain: mathematics
deps:
  - lem-author-a44f2061570d-evaluation-homotopy
dependency_roles:
  lem-author-a44f2061570d-evaluation-homotopy: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 10
---

## Statement
Let $I^\bullet$ be a cochain complex of abelian sheaves on a small site with $I^n=0$ for $n<0$. For every object $U$ and every $n<0$, the cohomology group $H^n(I^\bullet(U))$ is zero. Here $H^n$ is the kernel of the degree-$n$ differential modulo the image of the preceding differential.

## Facts & Assumptions

**Given:** A site object $U$ and a complex $I^\bullet$ vanishing in negative degrees.

**Goal:** Prove the negative-degree cohomology vanishes after evaluation.

[F1] Evaluation sends complexes of abelian sheaves to complexes of abelian groups. [[lem-author-a44f2061570d-evaluation-homotopy]]

## Proof

**Proof technique:** Inspect the terms in negative degrees.

1.1 For each $n<0$, evaluation gives $I^n(U)=0$. Hence the kernel of the outgoing differential in degree $n$ is zero. [F1, given]

2.1 The quotient defining $H^n(I^\bullet(U))$ has zero numerator and is therefore zero. [step 1.1] ∎
