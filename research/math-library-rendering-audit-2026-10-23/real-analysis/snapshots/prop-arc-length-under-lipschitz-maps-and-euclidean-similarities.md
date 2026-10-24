---
id: prop-arc-length-under-lipschitz-maps-and-euclidean-similarities
kind: proposition
title: "A $C$-Lipschitz map multiplies path length by at most $C$; isometries preserve length and scalar dilation multiplies it by the absolute scale"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-path-polygonal-length-and-rectifiability-in-rn, def-lipschitz-holder-contraction, def-isometry-and-metric-embedding, def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: comparison
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Section 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be a path and let $T:\mathbb R^n\to\mathbb R^m$ be Lipschitz with constant $K\ge0$. Then

$$L(T\circ\gamma)\le K L(\gamma)$$

whenever $L(\gamma)$ is finite; if $L(\gamma)=+\infty$ the inequality is understood as the corresponding extended-real bound for $K>0$, while for $K=0$ the composite is constant and has length zero.

If instead

$$\lVert T(x)-T(y)\rVert_2=\lambda\lVert x-y\rVert_2$$

for every $x,y$, then $L(T\circ\gamma)=\lambda L(\gamma)$ for $\lambda>0$, and it is zero for $\lambda=0$. In particular Euclidean isometries preserve length.

## Facts & Assumptions

**Given:** The path and map in the statement.

[L1] A Lipschitz map with constant $K$ satisfies $d(Tx,Ty)\le Kd(x,y)$ for every pair ([[def-lipschitz-holder-contraction]]).

[L2] Isometries preserve every distance ([[def-isometry-and-metric-embedding]]).

[L3] Arc length is the supremum of sums of chord lengths ([[def-path-polygonal-length-and-rectifiability-in-rn]]).

## Proof

**Proof technique:** comparison.

1.1 For every partition $P$, applying [L1] to each chord and summing gives $\ell_P(T\circ\gamma)\le K\ell_P(\gamma)$. [given, L1, L3]

2.1 Taking suprema proves the Lipschitz estimate when $K>0$ and also when $L(\gamma)$ is finite. If $K=0$, [L1] makes all images equal, so every polygonal sum is zero. [step 1.1, L3]

2.2 Under the similarity identity, every chordwise inequality in step 1.1 is an equality, so $\ell_P(T\circ\gamma)=\lambda\ell_P(\gamma)$ for every $P$. [given, L3]

3.1 Taking suprema gives exact scaling for $\lambda>0$; for $\lambda=0$ the map is constant on the trace and the length is zero. With $\lambda=1$, [L2] identifies the isometric case. [step 2.2, L2, L3] ∎
