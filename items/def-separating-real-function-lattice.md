---
id: def-separating-real-function-lattice
kind: definition
title: 'Unital point-separating real vector sublattices of $C(X,\mathbb R)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function-space, def-continuous-map-top, def-compact-space, def-hausdorff-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "M. Xu, Math 205B notes from a course by R. Mazzeo (Stanford), Definition 9.4 and Theorem 9.6"
      url: "https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf"
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.3"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a compact Hausdorff space ([[def-compact-space]], [[def-hausdorff-space]]). A subset $L\subseteq C(X,\mathbb R)$ is a **real vector sublattice** when it is a real vector subspace under the pointwise operations of [[def-function-space]] and, for every $f,g\in L$, it contains the pointwise functions
$$f\vee g:x\longmapsto\max\{f(x),g(x)\},\qquad f\wedge g:x\longmapsto\min\{f(x),g(x)\}.$$

The vector sublattice $L$ is **unital** when it contains every constant real-valued function, and it **separates points** when for every distinct $x,y\in X$ there is $g\in L$ with $g(x)\ne g(y)$. Every member of $L$ is continuous in the sense of [[def-continuous-map-top]].

The vector-space hypothesis is part of the definition used here. Closure under pointwise maxima and minima alone does not supply the affine rescaling required for two-point interpolation.
