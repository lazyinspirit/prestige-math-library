---
id: cor-planar-graph-has-low-degree-vertex
kind: corollary
title: "Every nonnull simple planar graph has a vertex of degree at most five"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-planar-simple-graph-edge-bound, thm-handshake-lemma-for-finite-simple-graphs, def-graph-adjacency-incidence-neighbourhood-and-degree]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Corollary 4.2.10"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Activity 299"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

Every nonnull finite simple planar graph has a vertex of degree at most five, where degree is [[def-graph-adjacency-incidence-neighbourhood-and-degree]].

## Facts & Assumptions

**Given:** A nonnull simple planar graph $G$ with $n$ vertices and $m$ edges.

[L1] Every simple planar graph with $n\ge3$ vertices has at most $3n-6$ edges ([[cor-planar-simple-graph-edge-bound]]).

[L2] $\sum_{v\in V}\deg_G(v)=2|E|$ ([[thm-handshake-lemma-for-finite-simple-graphs]]).

## Proof

**Proof technique:** contradiction.

1.1 For $n=1$ or $n=2$, some vertex has degree at most one, hence at most five. Assume $n\ge3$. [given]

2.1 Suppose every vertex had degree at least six. Then [L2] gives $2m\ge6n$, so $m\ge3n$, while [L1] gives $m\le3n-6$. This contradiction proves that some degree is at most five. [step 1.1, assume-contra, L1, L2, discharge-contradiction] ∎

