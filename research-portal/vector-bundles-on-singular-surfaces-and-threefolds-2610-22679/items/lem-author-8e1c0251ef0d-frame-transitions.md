---
id: lem-author-8e1c0251ef0d-frame-transitions
kind: lemma
title: Frames and their transition units
status: published
domain: mathematics
deps:
  - lem-author-8e1c0251ef0d-units-sheaf
dependency_roles:
  lem-author-8e1c0251ef0d-units-sheaf: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement
Let $\mathcal O$ be a sheaf of commutative rings on a site, and let $L$ be a sheaf of $\mathcal O$-modules locally isomorphic to $\mathcal O$. A frame over $U$ is an $\mathcal O|_U$-module isomorphism $\mathcal O|_U\to L|_U$. The frames form a torsor under $\mathcal O^\times$: they form a sheaf of sets, have local sections, and whenever two frames exist over the same object there is a unique unit carrying one to the other. If frames $e_i$ are chosen on a cover, their transition units $g_{ij}$ defined by $e_j=g_{ij}e_i$ satisfy $g_{ij}g_{jk}=g_{ik}$ on triple overlaps.

## Facts & Assumptions

**Given:** $\mathcal O$ and $L$ as stated.

**Goal:** Establish the frame torsor and its transition equation.

[F1] The units form a sheaf by [[lem-author-8e1c0251ef0d-units-sheaf]].

## Proof

1.1 A module map from $\mathcal O|_U$ to $L|_U$ is determined by the image of $1$. If it is an isomorphism, composing with another frame's inverse gives an automorphism of $\mathcal O|_U$, necessarily multiplication by a unique unit. Compatible maps glue as maps of sheaves; compatible local inverses glue as well, so frames satisfy the sheaf condition. Local freeness supplies local frames. [F1, construct]

2.1 On a triple overlap, $e_k=g_{jk}e_j=g_{jk}g_{ij}e_i$. Uniqueness of the unit in step 1.1 gives $g_{ij}g_{jk}=g_{ik}$. Thus frames have the stated torsor and transition properties. [step 1.1, algebra] ∎
