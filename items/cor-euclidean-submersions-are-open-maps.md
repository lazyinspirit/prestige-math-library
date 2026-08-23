---
id: cor-euclidean-submersions-are-open-maps
kind: corollary
title: 'Euclidean submersions are open maps'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-euclidean-submersion-normal-form, def-homeomorphism-and-open-maps, thm-product-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Submersion Theorem'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
pipeline_run: null
---

## Statement

Every $C^1$ Euclidean submersion is an open map: if $f:U\subseteq\mathbb R^m\to\mathbb R^n$ is a submersion and $O\subseteq U$ is open, then $f[O]$ is open in $\mathbb R^n$.

## Facts & Assumptions

**Given:** A Euclidean submersion $f$ and an open subset $O$ of its domain.

[L1] Near every point of a submersion there are coordinate diffeomorphisms in which the map is a coordinate projection ([[cor-euclidean-submersion-normal-form]]).

[L2] Homeomorphisms and coordinate projections are open maps ([[def-homeomorphism-and-open-maps]], [[thm-product-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 If $O=\varnothing$, its image is open. Otherwise fix $y\in f[O]$ and choose $x\in O$ with $f(x)=y$. [given, choose]

2.1 Shrink the local source neighbourhood from [L1] so that it lies in $O$. In the local coordinates, [L2] shows that its image contains an open neighbourhood of $y$ lying in $f[O]$. [step 1.1, L1, L2]

3.1 Every point of $f[O]$ is therefore interior, so $f[O]$ is open. [step 2.1] ∎
