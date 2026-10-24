---
id: thm-minimum-degree-forces-a-long-path
kind: theorem
title: "Every nonempty finite simple graph contains a path with at least $\\delta(G)$ edges"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, def-graph-walk-trail-path-and-cycle, def-finite-cardinality]
aliases: []
landmark: true
proof_strategy: constructive
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

Every nonempty finite simple graph $G$ contains a path having at least
$\delta(G)$ edges.

## Facts & Assumptions

**Given:** A nonempty finite simple graph $G=(V,E)$.

[F1] $\delta(G)$ is the least degree of a vertex of $G$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F2] A path has no repeated vertex, and appending a neighbour not already on it produces a longer path ([[def-graph-walk-trail-path-and-cycle]]).

[F3] A finite graph has only finitely many paths, so a path of greatest length exists ([[def-finite-cardinality]]).

## Proof

**Proof technique:** constructive.

1.1 Choose a path $P=(v_0,v_1,\ldots,v_\ell)$ of greatest length in $G$. [given, F3, choose, construct]

2.1 Every neighbour of $v_0$ lies among $v_1,\ldots,v_\ell$: a neighbour outside this list could be prepended to $P$, giving a longer path and contradicting step 1.1. [step 1.1, F2]

3.1 The $\deg_G(v_0)$ distinct neighbours of $v_0$ therefore occupy distinct positions among the $\ell$ vertices $v_1,\ldots,v_\ell$, so $\ell\ge\deg_G(v_0)\ge\delta(G)$ by [F1]. Thus $P$ has at least $\delta(G)$ edges. [step 2.1, F1, discharge-construct] ∎
