---
id: cor-positive-codimension-immersed-submanifolds-are-null
kind: corollary
title: "Positive-codimension immersed submanifolds are null"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-the-image-of-a-lower-dimensional-c1-manifold-is-null,
       def-immersed-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Every immersed submanifold of positive codimension in a smooth manifold is a
null subset of the ambient manifold.

## Facts & Assumptions

**Given:** An immersed $m$-dimensional submanifold $S$ of an $n$-manifold $N$ with $m<n$.

[F1] An immersed submanifold is locally the image of a smooth immersion from an $m$-manifold ([[def-immersed-submanifold]]).

[L1] The image of a lower-dimensional $C^1$ manifold is null ([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], every point of $S$ has a neighbourhood in $N$ on which $S$ is the image of a smooth immersion from an $m$-manifold. [F1, given]

2.1 Because $m<n$, [L1] makes each such local image null in the ambient neighbourhood. Therefore $S$ is locally null, and a countable cover of $S$ by such neighbourhoods shows that $S$ is null in $N$. [L1, step 1.1, algebra]

3.1 Hence every positive-codimension immersed submanifold is null. [step 2.1] ∎