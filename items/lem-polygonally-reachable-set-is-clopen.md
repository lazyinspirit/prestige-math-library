---
id: lem-polygonally-reachable-set-is-clopen
kind: lemma
title: "The points polygonally reachable from a fixed point form a clopen subset of every open subset of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polygonal-path-and-polygonal-connectedness, lem-euclidean-polygonal-paths-are-continuous, def-metric-topology, def-metric-ball, lem-metrics-on-rn]
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
    - title: "Connected space"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb{R}^n$ be open and let $a\in U$. The set $R_a$ of points of $U$ joined to $a$ by a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $U$ is both open and closed in the subspace $U$.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$, a point $a\in U$, and the polygonally reachable set $R_a\subseteq U$.

[L1] Every point of an open set in a metric topology has an open metric ball contained in that set ([[def-metric-topology]], [[def-metric-ball]]).

[L2] A straight segment between two points of an Euclidean ball stays in that ball, by the triangle inequality for the Euclidean norm ([[lem-metrics-on-rn]]).

[L3] A finite concatenation of such segments is a continuous polygonal path ([[lem-euclidean-polygonal-paths-are-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Let $y\in R_a$. Choose $r>0$ with $B(y,r)\subseteq U$. For every $z\in B(y,r)$, the segment from $y$ to $z$ lies in $B(y,r)$ by [L2]. [L1, L2, choose]

1.2 Let $y\in U\setminus R_a$ and choose $r>0$ with $B(y,r)\subseteq U$. If some $z\in B(y,r)$ lay in $R_a$, a path from $a$ to $z$ followed by the segment from $z$ to $y$ would put $y$ in $R_a$, a contradiction. [L1, L2, L3, choose]

2.1 Concatenating a polygonal path from $a$ to $y$ with that segment gives a polygonal path from $a$ to $z$ in $U$. Thus $B(y,r)\subseteq R_a$, so $R_a$ is open in $U$. [L3, step 1.1]

3.1 Hence $B(y,r)\subseteq U\setminus R_a$, so the complement is open in $U$. Therefore $R_a$ is clopen in $U$. [step 2.1, step 1.2] ∎
