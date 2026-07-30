---
id: cor-components-of-open-subsets-of-rn-are-polygonally-connected
kind: corollary
title: "Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected"
status: published
origin: session
deps: [thm-open-connected-subsets-of-rn-are-polygonally-connected, def-metric-ball, def-norm-and-normed-space, lem-euclidean-polygonal-paths-are-continuous, def-connected-component-and-quasicomponent]
aliases: []
landmark: false
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
    - title: "Locally connected space"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Every connected component of an open subset $U\subseteq\mathbb{R}^n$ is open in $\mathbb{R}^n$ and polygonally connected.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$ and a connected component $C$ of $U$.

[L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, and the segment is continuous ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]]).

[L2] A component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).

[L3] An open connected Euclidean subset is polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in C$. Since $U$ is open, choose $r>0$ with $B(x,r)\subseteq U$. The ball is connected by [L1], meets $C$ at $x$, and so lies in $C$ by maximality of the component. [L1, L2, choose]

2.1 Therefore every point of $C$ has a Euclidean ball contained in $C$, so $C$ is open in $\mathbb{R}^n$. [step 1.1]

3.1 The component $C$ is connected and now open, so [L3] makes it polygonally connected. [L3, step 2.1] ∎
