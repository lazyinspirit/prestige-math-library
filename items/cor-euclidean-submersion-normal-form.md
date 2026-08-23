---
id: cor-euclidean-submersion-normal-form
kind: corollary
title: 'A Euclidean submersion is locally a coordinate projection'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-submersions-and-immersions, thm-differential-rank-is-lower-semicontinuous, thm-euclidean-constant-rank-normal-form]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Submersion Theorem'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $k\ge1$ and let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$. Near a submersion point there are $C^k$ coordinates in which the map is $(u,v)\mapsto u$. If $m=n$, it is a local $C^k$ diffeomorphism.

## Facts & Assumptions

**Given:** A submersion point $a$ of $f$.

[L1] At a submersion point $Df(a)$ is surjective and has rank $n$ ([[def-euclidean-submersions-and-immersions]]); the rank-at-least-$n$ locus is open ([[thm-differential-rank-is-lower-semicontinuous]]).

[L2] A constant-rank-$n$ map has local normal form $(u,v)\mapsto(u,0)$ with the target zero block in $\mathbb R^0$ ([[thm-euclidean-constant-rank-normal-form]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $Df$ has rank at least $n$ on a neighbourhood of $a$; it cannot have larger rank, so its rank is constantly $n$ there. [given, L1]

2.1 Apply [L2]. Because $n-r=0$, its normal form is exactly the projection $(u,v)\mapsto u$. [step 1.1, L2]

3.1 If $m=n$, the $v$ block is also empty, so the normal form is the identity and $f$ is a local $C^k$ diffeomorphism. [step 2.1] ∎
