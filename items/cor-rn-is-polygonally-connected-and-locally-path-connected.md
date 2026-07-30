---
id: cor-rn-is-polygonally-connected-and-locally-path-connected
kind: corollary
title: "$\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected"
status: published
origin: session
deps: [def-polygonal-path-and-polygonal-connectedness, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, def-locally-connected, def-metric-ball, def-norm-and-normed-space, def-metric-topology]
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Euclidean space"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
pipeline_run: null
---

## Statement

For $n\ge1$, $\mathbb{R}^n$ is polygonally connected and connected, and it is locally path-connected and locally connected.

## Facts & Assumptions

**Given:** $\mathbb{R}^n$ with $n\ge1$ and its Euclidean topology.

[L1] A segment $t\mapsto(1-t)x+ty$ is a continuous polygonal path in $\mathbb{R}^n$ ([[lem-euclidean-polygonal-paths-are-continuous]], [[def-polygonal-path-and-polygonal-connectedness]]).

[L2] Euclidean balls are open and every open neighbourhood contains a Euclidean ball about its point ([[def-metric-ball]], [[def-metric-topology]]).

[L3] Every path-connected space is connected, and every locally path-connected space is locally connected ([[thm-path-connected-implies-connected]], [[def-locally-connected]]).

[L4] The norm triangle inequality keeps a segment joining two points of an open ball inside that ball ([[def-norm-and-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y\in\mathbb{R}^n$, the one-segment path $t\mapsto(1-t)x+ty$ joins them. Hence $\mathbb{R}^n$ is polygonally connected. [L1]

1.2 Let $x\in\mathbb{R}^n$ and let $U$ be open with $x\in U$. Choose $r>0$ with $B(x,r)\subseteq U$. Each pair of points in this ball is joined by its segment, which stays in the ball by [L4]. [L1, L2, L4, choose]

2.1 It is path-connected and therefore connected by [L3]. [L3, step 1.1]

3.1 Thus every open neighbourhood contains an open path-connected ball, so $\mathbb{R}^n$ is locally path-connected, and it is locally connected by [L3]. [L2, L3, step 1.2] ∎
