---
id: cor-chord-length-is-at-most-arc-length
kind: corollary
title: "Every endpoint chord is no longer than the arc: $\\lVert\\gamma(b)-\\gamma(a)\\rVert_2\\le L(\\gamma)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-polygonal-length-and-rectifiability-in-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. M. Apostol, Mathematical Analysis, Section 6.10"
      url: "https://studylib.net/doc/27619444/mathematical-analysis-2e-apostol"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be a path, with $n\ge1$. For every $a\le u\le v\le b$,

$$\lVert\gamma(v)-\gamma(u)\rVert_2\le L_{[u,v]}(\gamma|_{[u,v]}).$$

This includes $u=v$, when both sides are zero. In particular a path of length zero is constant.

## Facts & Assumptions

**Given:** The path $\gamma$ and $u\le v$.

[L1] For $u<v$, the partition with point set $\{u,v\}$ has polygonal length $\lVert\gamma(v)-\gamma(u)\rVert_2$, and arc length is the supremum of all polygonal lengths ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

[L2] On a singleton parameter interval, arc length is defined to be $0$ ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $u<v$, [L1] says the chord length is one member of the set whose supremum is the arc length, so it is at most that supremum. [given, L1]

1.2 If $u=v$, the chord is the zero vector and [L2] makes both sides zero. [given, L2]

2.1 If the whole path has length zero, applying steps 1.1--1.2 to every $u\le v$ makes every chord zero; separation for the Euclidean norm gives $\gamma(u)=\gamma(v)$, so $\gamma$ is constant. [step 1.1, step 1.2, L1] ∎
