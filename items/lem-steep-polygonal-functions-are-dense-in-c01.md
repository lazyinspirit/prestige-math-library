---
id: lem-steep-polygonal-functions-are-dense-in-c01
kind: lemma
title: "Polygonal functions with sufficiently steep nonvertex slopes are dense in $C([0,1])$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-heine-cantor-metric, cor-archimedean-reciprocal, def-continuous-real-functions-on-a-compact-metric-space]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "A generic continuous function is nowhere differentiable"
      url: "https://www.math.harvard.edu/~elkies/M250.07/nowhere.pdf"
pipeline_run: null
---

## Statement

For every $f\in C([0,1],\mathbb R)$, every $\varepsilon>0$, and every $M>0$, there is a piecewise-affine $h$ with finitely many vertices such that $\lVert f-h\rVert_\infty<\varepsilon$ and every slope on a nonvertex affine piece has absolute value greater than $M$.

## Facts & Assumptions
**Given:** $f\in C([0,1],\mathbb R)$, $\varepsilon>0$, and $M>0$.

[L1] The function $f$ is uniformly continuous on $[0,1]$ ([[thm-heine-cantor-metric]]).

[L2] Positive lengths admit arbitrarily fine equal subdivisions ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], choose a finite partition $0=x_0<\cdots<x_r=1$ so that $|f(s)-f(t)|<\varepsilon/4$ whenever $s,t$ are in one partition interval. Let $g$ be the affine interpolant through $(x_i,f(x_i))$. [L1, construct]

2.1 The affine-interpolation formula makes $|g(t)-f(t)|<\varepsilon/4$ on every partition interval. Let $S$ be the maximum of the finitely many absolute slopes of $g$. [step 1.1, algebra]

3.1 Choose $0<\eta<\varepsilon/4$. By [L2], subdivide every partition interval evenly enough to support a continuous triangular sawtooth $w$, zero at the old vertices, with $\lVert w\rVert_\infty\le\eta$ and every nonvertex slope of absolute value greater than $S+M$. [L2, step 2.1, construct]

4.1 Put $h=g+w$. On each new affine piece, the reverse triangle inequality gives $|h'|\ge|w'|-|g'|>M$, while $\lVert h-f\rVert_\infty<\varepsilon/2<\varepsilon$. [step 2.1, step 3.1, algebra]

5.1 This $h$ has the required finite polygonal structure, approximation, and slope bound. [step 4.1, discharge-construct] ∎
