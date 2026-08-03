---
id: cor-minimum-degree-two-forces-a-cycle
kind: corollary
title: "Every finite simple graph of minimum degree at least two contains a cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-minimum-degree-forces-a-long-path, def-graph-walk-trail-path-and-cycle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cornell Mathematics, Graph Theory notes"
      url: "https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf"
pipeline_run: null
---

## Statement

If $G$ is a finite simple graph with $\delta(G)\ge2$, then $G$ contains a
cycle.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with $\delta(G)\ge2$.

[L1] $G$ contains a path with at least $\delta(G)$ edges ([[thm-minimum-degree-forces-a-long-path]]).

[F1] A closed walk of length at least $3$ whose vertices before the final repeated endpoint are distinct is a cycle ([[def-graph-walk-trail-path-and-cycle]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $G$ has a path of length at least $2$. Among all paths choose one of greatest length, say $P=(v_0,\ldots,v_\ell)$, so $\ell\ge2$. [given, L1, choose]

2.1 Every neighbour of $v_0$ lies on $P$, since a neighbour outside $P$ could be prepended to make a longer path. Since $\deg_G(v_0)\ge2$, besides $v_1$ there is a neighbour $v_j$ with $j\ge2$. [step 1.1, given]

3.1 The list $(v_0,v_1,\ldots,v_j,v_0)$ is a closed walk of length $j+1\ge3$ with distinct vertices before its final $v_0$, so it is a cycle by [F1]. [step 1.1, step 2.1, F1] ∎
