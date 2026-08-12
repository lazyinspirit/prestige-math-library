---
id: ex-petersen-extremal-density
kind: example
title: "The Petersen graph has chromatic number $3$, so its Turán density is $1/2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-petersen-graph, def-proper-vertex-colouring-and-chromatic-number, cor-chromatic-number-extremal-density]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Example

Let $P$ be the Petersen graph. Then

$$\chi(P)=3\qquad\text{and}\qquad\pi(P)=\frac12.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] In the Petersen graph's two-subset model, two vertices are adjacent exactly when the corresponding two-element subsets are disjoint ([[def-petersen-graph]]).

[F2] A proper $k$-vertex-colouring is a map $c:V\to k$ with $c(u)\ne c(v)$ for every edge $\{u,v\}$, its fibres are the colour classes, and $\chi(G)=\min\{k\in\mathbb N:G\text{ is }k\text{-colourable}\}$ ([[def-proper-vertex-colouring-and-chromatic-number]]).

[F3] For every finite graph $H$ with an edge, $\pi(H)=1-1/(\chi(H)-1)$ ([[cor-chromatic-number-extremal-density]]).

## Verification

**Proof technique:** exhibit an odd cycle and a three-colouring.

1.1 The vertices $12,34,15,23,45$ form a $5$-cycle in that order because consecutive pairs, including $45,12$, are disjoint. Hence $P$ is not bipartite and $\chi(P)\ge3$. [given, F1, F2]

1.2 Partition the ten vertices into $\{12,13,14,15\}$, $\{23,24,34\}$, and $\{25,35,45\}$. Within each class every two subsets intersect, so the Petersen adjacency definition gives no edge within a class. This is a proper three-colouring, hence $\chi(P)\le3$. [given, F1, F2]

2.1 Steps 1.1-1.2 give $\chi(P)=3$, and the density formula gives $\pi(P)=1-1/(3-1)=1/2$. [step 1.1, step 1.2, given, F3] ∎
