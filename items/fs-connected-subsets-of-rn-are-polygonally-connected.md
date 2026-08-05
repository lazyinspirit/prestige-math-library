---
id: fs-connected-subsets-of-rn-are-polygonally-connected
kind: false-statement
title: "FALSE: every connected subset of $\\mathbb{R}^n$ is polygonally connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-euclidean-spheres-are-path-connected, def-polygonal-path-and-polygonal-connectedness, def-norm-and-normed-space, def-euclidean-inner-product]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Sphere"
      url: "https://en.wikipedia.org/wiki/Sphere"
    - title: "Convex set"
      url: "https://en.wikipedia.org/wiki/Convex_set"
pipeline_run: null
---

## Statement

**False claim:** every connected subset of $\mathbb R^n$ is polygonally connected.

The unit circle $S^1\subseteq\mathbb R^2$ is connected but is not polygonally connected.

## Facts & Assumptions

**Given:** The unit circle $S^1=\{u\in\mathbb R^2:\lVert u\rVert_2=1\}$ and the points $e_0,-e_0\in S^1$.

[A1] Every connected subset of Euclidean space is polygonally connected.

[L1] $S^1$ is path-connected and connected ([[cor-euclidean-spheres-are-path-connected]]).

[L2] A polygonal path is a finite concatenation of straight segments ([[def-polygonal-path-and-polygonal-connectedness]]).

[L3] If distinct unit vectors $u,v$ are joined by a segment, its midpoint has squared Euclidean norm $\lVert(u+v)/2\rVert_2^2=1-\lVert u-v\rVert_2^2/4<1$ ([[def-euclidean-inner-product]], [[def-norm-and-normed-space]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim [A1] holds. Since $S^1$ is connected by [L1], there is a polygonal path in $S^1$ from $e_0$ to $-e_0$. [A1, L1, assume-contra]

2.1 In its finite vertex list some adjacent vertices $u,v$ are distinct, since its endpoints are distinct. The straight segment from $u$ to $v$ lies in $S^1$ by [L2]. [L2, step 1.1]

3.1 But the midpoint of this segment has norm strictly less than $1$ by [L3], so it does not lie in $S^1$. This contradicts step 2.1. [L3, step 2.1, discharge-contradiction] ∎
