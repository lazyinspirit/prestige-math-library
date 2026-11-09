---
id: lem-author-2389e5bafea8-field-regular-local
kind: lemma
title: Fields are regular local rings
status: draft
domain: mathematics
deps:
  - math:def-embedding-dimension-and-regular-local-ring
dependency_roles:
  math:def-embedding-dimension-and-regular-local-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Every field is a regular local ring.

A regular local ring is a noetherian local ring whose Krull dimension equals the dimension of $\mathfrak m/\mathfrak m^2$ over its residue field, where $\mathfrak m$ is its maximal ideal. Krull dimension is the supremum of lengths of strict chains of prime ideals.

## Facts & Assumptions

**Given:** A field $K$.

**Goal:** Prove that $K$ is regular local.

[F1] The displayed equality of Krull dimension and embedding dimension characterizes regular noetherian local rings ([[math:def-embedding-dimension-and-regular-local-ring]]).

## Proof

1.1 The only proper ideal of $K$ is $(0)$, which is both prime and maximal. Thus $K$ is noetherian and local, and its Krull dimension is zero. [given]

2.1 Its maximal ideal and its square are zero, so the dimension of $\mathfrak m/\mathfrak m^2$ over $K$ is zero. The criterion [F1] now makes $K$ regular local. [F1, step 1.1] ∎
