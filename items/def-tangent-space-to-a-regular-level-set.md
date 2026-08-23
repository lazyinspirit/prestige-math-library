---
id: def-tangent-space-to-a-regular-level-set
kind: definition
title: 'The tangent space to a regular level set'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-critical-points-values-and-level-sets, def-kernel-and-image-of-a-linear-map, thm-rank-nullity]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorem 8.8'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Definition

Let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^1$, let $c$ be a regular value, and let $a\in f^{-1}(c)$ ([[def-regular-critical-points-values-and-level-sets]]). For $a\in f^{-1}(c)$ regular, $T_a(f^{-1}(c)):=\ker Df(a)$. This kernel ([[def-kernel-and-image-of-a-linear-map]]) is the **tangent space to the regular level set at $a$**.

Since $Df(a)$ is surjective, rank-nullity gives $\dim T_a(f^{-1}(c))=m-n$ ([[thm-rank-nullity]]). Thus the definition introduces an existing linear subspace of the asserted dimension; it makes no assignment when the fibre is empty because there is then no point $a$.
