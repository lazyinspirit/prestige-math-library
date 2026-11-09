---
id: lem-author-2389e5bafea8-dvr-regular-local
kind: lemma
title: Discrete valuation rings are regular local
status: published
domain: mathematics
deps:
  - math:thm-equivalent-characterisations-of-a-dvr
  - math:def-embedding-dimension-and-regular-local-ring
dependency_roles:
  math:thm-equivalent-characterisations-of-a-dvr: mathematical-premise
  math:def-embedding-dimension-and-regular-local-ring: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
A discrete valuation ring is a regular local ring.

Here a discrete valuation ring is a nonfield noetherian local domain of dimension one with principal maximal ideal. Regular local means that the dimension of $\mathfrak m/\mathfrak m^2$ over the residue field equals the Krull dimension.

## Facts & Assumptions

**Given:** A discrete valuation ring $R$ with maximal ideal $\mathfrak m$.

**Goal:** Prove that $R$ is regular local.

[F1] A discrete valuation ring is a one-dimensional noetherian local domain whose maximal ideal is principal ([[math:thm-equivalent-characterisations-of-a-dvr]]).

[F2] A noetherian local ring is regular exactly when its embedding dimension equals its Krull dimension ([[math:def-embedding-dimension-and-regular-local-ring]]).

## Proof

1.1 By [F1], $\mathfrak m=(\pi)$ for some nonzero $\pi$, and $\dim R=1$. The residue class of $\pi$ spans $\mathfrak m/\mathfrak m^2$. It is nonzero: if $\pi=a\pi^2$, cancellation in the domain gives $1=a\pi$, contrary to $\pi\in\mathfrak m$. [F1, given, algebra]

2.1 Therefore the embedding dimension is one, equal to $\dim R$. The criterion [F2] shows that $R$ is regular local. [F2, step 1.1] ∎
