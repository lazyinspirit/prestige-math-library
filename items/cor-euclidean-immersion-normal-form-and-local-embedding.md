---
id: cor-euclidean-immersion-normal-form-and-local-embedding
kind: corollary
title: 'A Euclidean immersion is locally the canonical inclusion and is locally an embedding'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-euclidean-submersions-and-immersions, thm-differential-rank-is-lower-semicontinuous, thm-euclidean-constant-rank-normal-form, def-homeomorphism-and-open-maps]
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
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Immersion Theorem'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $k\ge1$ and let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$. Near an immersion point there are $C^k$ coordinates in which the map is the canonical inclusion $u\mapsto(u,0)$. After restricting its domain, $f$ is an embedding onto its local image. If $m=n$, it is a local $C^k$ diffeomorphism.

## Facts & Assumptions

**Given:** An immersion point $a$ of $f$.

[L1] At an immersion point $Df(a)$ is injective and has rank $m$, and the rank-at-least-$m$ locus is open ([[def-euclidean-submersions-and-immersions]], [[thm-differential-rank-is-lower-semicontinuous]]).

[L2] An embedding is an injective map whose corestriction is a homeomorphism onto its image ([[def-homeomorphism-and-open-maps]]); the constant-rank normal form at rank $m$ is $u\mapsto(u,0)$ ([[thm-euclidean-constant-rank-normal-form]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the derivative has constant rank $m$ near $a$. [given, L1]

2.1 By [L2], coordinate diffeomorphisms turn the restriction of $f$ into $i(u)=(u,0)$. This map is injective and its inverse on $i[U]$ is the continuous projection onto the first $m$ coordinates. [step 1.1, L2]

3.1 Conjugating by the coordinate diffeomorphisms shows that the restricted $f$ is an embedding. If $m=n$, the zero block is empty and the normal form is a local diffeomorphism. [step 2.1, L2] ∎
