---
id: def-convex-polygon-chords-crossings-and-triangulations
kind: definition
title: "Chords of a labelled convex polygon, crossing, and triangulations, defined combinatorially"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-cardinality, def-natural-numbers, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Definition

Let $m\in\mathbb{N}$ with $m\ge2$, and write the vertices of a labelled convex
$m$-gon as the cyclically ordered set $\{1,2,\dots,m\}$.

A **chord** is a two-element subset $\{i,j\}$ with $1\le i<j\le m$. It is a
**side** when $j=i+1$ or $(i,j)=(1,m)$, and a **diagonal** otherwise.

Two chords $\{i,j\}$ and $\{k,\ell\}$ **cross** when

$$i<k<j<\ell \qquad\text{or}\qquad k<i<\ell<j.$$

This is a condition on the cyclic order of the labels alone; no segment and no
area enters the definition.

A **triangulation** of the labelled $m$-gon is a set $T$ of diagonals such that

1. no two members of $T$ cross; and
2. $T$ is maximal with that property.

Write $\mathcal{P}_m$ for the set of triangulations of the labelled $m$-gon.

For $m=2$ and $m=3$ there are no diagonals at all, so the empty set is the unique
triangulation:

$$\mathcal{P}_2=\{\varnothing\}, \qquad \mathcal{P}_3=\{\varnothing\}.$$

For every fixed $m$ the set of diagonals is finite, being a subset of the finite
set of all chords, so $\mathcal{P}_m$ is a finite set of finite sets
([[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]).

## Remarks

- The word "convex" in the title is only the picture attached to the cyclic
  order on the labels. The development below uses only the combinatorial crossing
  relation written above.

- The side $\{1,m\}$ is singled out often enough to deserve a name: it is the
  **closing side**. The splitting lemma below decomposes a triangulation along
  the unique triangle touching that side.
