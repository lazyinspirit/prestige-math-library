---
id: lem-author-8e1c0251ef0d-cocycle-morphism
kind: lemma
title: Compatible local torsor sections determine an isomorphism
status: published
domain: mathematics
deps:
  - lem-author-8e1c0251ef0d-torsor-cocycle
dependency_roles:
  lem-author-8e1c0251ef0d-torsor-cocycle: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement
Let $P,Q$ be torsors under a sheaf of abelian groups $G$ on a site, and suppose sections $p_i\in P(U_i)$ and $q_i\in Q(U_i)$ over a cover of the terminal object have the same transition units, with the convention of [[lem-author-8e1c0251ef0d-torsor-cocycle]]. Then there is a unique equivariant isomorphism $P\to Q$ carrying every $p_i$ to $q_i$.

## Facts & Assumptions

**Given:** The two torsors and matching local sections.

**Goal:** Construct the equivariant isomorphism.

[F1] Torsors are locally nonempty sheaves with simply transitive actions, as in [[lem-author-8e1c0251ef0d-torsor-cocycle]].

## Proof

1.1 Over each $U_i$, send $g p_i$ to $g q_i$. Simple transitivity makes this a well-defined equivariant bijection, natural after restriction. On overlaps the common transition unit gives the same map from either index. [F1, construct]

2.1 The sheaf condition glues these local maps, and glues their local inverses, to mutually inverse global morphisms. Any equivariant map taking $p_i$ to $q_i$ agrees with the constructed map locally, hence globally. [F1, step 1.1] ∎
