---
id: def-regular-critical-points-values-and-level-sets
kind: definition
title: 'Regular and critical points, regular and critical values, and level sets'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-euclidean-submersions-and-immersions]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Section 8'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Definition

Let $m,n\ge1$, let $U\subseteq\mathbb R^m$ be open, and let $f:U\to\mathbb R^n$ be $C^1$.

- A point $a\in U$ is a **regular point** of $f$ when $f$ is a submersion at $a$, and a **critical point** otherwise ([[def-euclidean-submersions-and-immersions]]).
- A value $c\in\mathbb R^n$ is a **regular value** when every $a\in f^{-1}(\{c\})$ is a regular point. A value that is not regular is a **critical value**. In particular every value outside $f[U]$ is regular by vacuous truth.
- The **level set** or **fibre** over $c$ is $f^{-1}(c):=\{x\in U:f(x)=c\}$.

Regularity is a condition on the derivative at points of the fibre, not a claim that the fibre is nonempty.
