---
id: lem-every-graph-walk-contains-a-path-between-its-endpoints
kind: lemma
title: "Every walk between two vertices contains a path between the same endpoints"
status: published
origin: session
deps: [def-graph-walk-trail-path-and-cycle, def-finite-cardinality]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "University of Lethbridge, Combinatorics: A Guided Tour, Paths and Cycles"
      url: "https://opentext.uleth.ca/Combinatorics/sect_graphs-walks-PathsCycles.html"
pipeline_run: null
---

## Statement

Let $W=(v_0,\ldots,v_\ell)$ be a walk in a graph. By deleting zero or more
closed segments from its vertex list, one obtains a path from $v_0$ to $v_\ell$
of length at most $\ell$. If $W$ repeats a vertex, the resulting path can be
chosen to have length strictly less than $\ell$.

## Facts & Assumptions

**Given:** A walk $W=(v_0,\ldots,v_\ell)$ in a finite simple graph.

[F1] A path is a walk with no repeated vertex ([[def-graph-walk-trail-path-and-cycle]]).

[F2] If $v_i=v_j$ with $i<j$, deleting $v_{i+1},\ldots,v_j$ leaves the list $(v_0,\ldots,v_i,v_{j+1},\ldots,v_\ell)$, which is a walk with the same endpoints and length $\ell-(j-i)<\ell$.

[F3] A finite vertex list has only finitely many lists obtainable by deleting segments, so any nonempty family of their lengths has a least member ([[def-finite-cardinality]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal W$ be the nonempty finite family of walks obtained from $W$ by deleting zero or more closed segments, and choose $P\in\mathcal W$ of least length. [given, F2, F3, choose, construct]

2.1 The walk $P$ has no repeated vertex: if two positions carried the same vertex, [F2] would delete the intervening closed segment and produce a shorter member of $\mathcal W$, contrary to the choice of $P$. [step 1.1, F2]

3.1 By [F1], $P$ is a path with the same endpoints as $W$, and its length is at most $\ell$ because $W\in\mathcal W$. If $W$ repeats a vertex, applying [F2] once before minimizing gives a member of $\mathcal W$ shorter than $W$, so $P$ is strictly shorter than $W$. [step 1.1, step 2.1, F1, F2, discharge-construct] ∎
