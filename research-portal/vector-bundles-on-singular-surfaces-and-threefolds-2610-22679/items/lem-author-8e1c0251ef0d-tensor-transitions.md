---
id: lem-author-8e1c0251ef0d-tensor-transitions
kind: lemma
title: Tensor products multiply frame transitions
status: published
domain: mathematics
deps:
  - lem-author-8e1c0251ef0d-frame-transitions
dependency_roles:
  lem-author-8e1c0251ef0d-frame-transitions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 8
---

## Statement
Let $L,M$ be locally free rank-one modules over a sheaf of commutative rings. On a common trivializing cover, if their frames have transition units $g_{ij}$ and $h_{ij}$, then the tensor-product frames of $L\otimes M$ have transition units $g_{ij}h_{ij}$. The frame of the unit module has transition units $1$.

## Facts & Assumptions

**Given:** Local frames $e_i$ of $L$ and $f_i$ of $M$ on a common cover.

**Goal:** Compute tensor-product transitions.

[F1] Frame transitions are defined and satisfy the cocycle equation by [[lem-author-8e1c0251ef0d-frame-transitions]].

## Proof

1.1 The tensor product of the two local isomorphisms from the structure sheaf identifies $L\otimes M$ locally with the structure sheaf; its frame is $e_i\otimes f_i$. [F1, construct]

2.1 On an overlap, $e_j\otimes f_j=(g_{ij}e_i)\otimes(h_{ij}f_i)=g_{ij}h_{ij}(e_i\otimes f_i)$. The standard frame $1$ of the unit module has transition $1$. [F1, step 1.1, algebra] ∎
