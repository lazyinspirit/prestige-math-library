---
id: lem-author-c8fb25136bd5-zero-homology-quotient
kind: lemma
title: The degree-zero homology quotient
status: draft
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
  - lem-author-c8fb25136bd5-degree-zero-cycles
  - lem-author-c8fb25136bd5-one-boundaries
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
  lem-author-c8fb25136bd5-degree-zero-cycles: mathematical-premise
  lem-author-c8fb25136bd5-one-boundaries: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 6
---

## Statement
Under the hypotheses of [[lem-author-c8fb25136bd5-degree-zero-cycles]], there is a canonical identification $H_0z^r(X,\bullet)=Z^r(X)/B^r(X)$, where $B^r(X)$ is the subgroup in [[lem-author-c8fb25136bd5-one-boundaries]].

## Facts & Assumptions

**Given:** $k$, $X$ and $r$ as in the statement.

**Goal:** Compute the degree-zero homology from the chain complex.

[F1] The differential $\partial_0$ is zero and homology is the kernel of the outgoing differential modulo the image of the incoming differential. [[def-bloch-higher-cycle-complex]]

[F2] The degree-zero group is $Z^r(X)$ and the incoming image is $B^r(X)$. [[lem-author-c8fb25136bd5-degree-zero-cycles]], [[lem-author-c8fb25136bd5-one-boundaries]]

## Proof

1.1 Since $\partial_0=0$, its kernel is all of the degree-zero chain group. [F1]

2.1 Dividing that kernel by the incoming image and applying the identifications in [F2] yields $Z^r(X)/B^r(X)$. [F1, F2, step 1.1] ∎
