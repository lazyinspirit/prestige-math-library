---
id: def-euclidean-submersions-and-immersions
kind: definition
title: 'Submersions and immersions between Euclidean open sets'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-differential-rank-and-constant-rank, thm-linear-kernel-image-and-injectivity, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorems 8.8-8.11'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Sections 11.1-11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Definition

Let $m,n\ge1$, let $U\subseteq\mathbb R^m$ and $V\subseteq\mathbb R^n$ be open, and let $f:U\to V$ be $C^1$.

- $f$ is an **immersion at $a\in U$** when $Df(a):\mathbb R^m\to\mathbb R^n$ is injective ([[thm-linear-kernel-image-and-injectivity]]), equivalently when $\operatorname{rank}_a f=m$ ([[def-differential-rank-and-constant-rank]]). Thus an immersion point can exist only when $m\le n$.
- $f$ is a **submersion at $a\in U$** when $Df(a)$ is surjective ([[def-injection-surjection-bijection]]), equivalently when $\operatorname{rank}_a f=n$. Thus a submersion point can exist only when $n\le m$.

The map is an **immersion** or **submersion** when the corresponding condition holds at every point of $U$.
