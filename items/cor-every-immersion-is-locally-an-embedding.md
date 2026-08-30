---
id: cor-every-immersion-is-locally-an-embedding
kind: corollary
title: "Every immersion is locally an embedding"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-local-normal-form-for-immersions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry, Proposition 6.3"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, Immersions"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $F:M^m\to N^n$ be a smooth immersion and let $p\in M$. Then some
neighbourhood $U$ of $p$ is sent homeomorphically onto an embedded
$m$-dimensional submanifold of $N$, and $F|_U$ is still an immersion.

## Facts & Assumptions

**Given:** A smooth immersion $F:M^m\to N^n$ and a point $p\in M$.

[L1] Near $p$, suitable coordinates identify $F$ with the coordinate inclusion
$u\mapsto(u,0)$ ([[cor-local-normal-form-for-immersions]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], after shrinking about $p$ and $F(p)$ there are charts in which $F$ becomes $u\mapsto(u,0)$. [L1, given]

2.1 The coordinate inclusion is injective, is a homeomorphism onto the slice $\mathbb R^m\times\{0\}$ with the subspace topology, and that slice is an embedded submanifold of the ambient Euclidean space. Pulling this description back through the charts gives the stated neighbourhood $U$. [step 1.1]

3.1 The restricted map remains an immersion because it is locally identified with the coordinate inclusion. [step 1.1, step 2.1] ∎