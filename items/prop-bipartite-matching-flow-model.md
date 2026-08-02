---
id: prop-bipartite-matching-flow-model
kind: proposition
title: "The unit network for a bipartite graph identifies integral flows with matchings and finite cuts with vertex covers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ford-fulkerson-integral-max-flow-min-cut, lem-integral-unit-flow-decomposition, thm-konig-bipartite-matching-cover, thm-hall-marriage-finite-bipartite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "MIT OCW 18.200, Principles of Discrete Applied Mathematics"
      url: "https://ocw.mit.edu/courses/18-200-principles-of-discrete-applied-mathematics-spring-2024/mit18_200_s24_lec11-12.pdf"
pipeline_run: null
---

## Statement

For a finite bipartite graph with parts $(X,Y)$, give the arcs $s\to x$, each
graph edge $x\to y$, and $y\to t$ unit capacity. Integral flow paths correspond
to matching edges $xy$; a vertex cover $C_X\cup C_Y$ gives the cut
$\{s\}\cup(X\setminus C_X)\cup C_Y$ of the same size. Consequently the
maximum-flow/minimum-cut equality agrees with the matching/cover equality, and
a flow of value $|X|$ agrees with Hall's saturating matching criterion.

## Facts & Assumptions

**Given:** The displayed unit network of a finite bipartite graph $(X,Y)$.

[L1] Integral Ford--Fulkerson gives equal maximum flow and minimum cut values ([[thm-ford-fulkerson-integral-max-flow-min-cut]]).

[L2] A unit-capacity integral flow decomposes into arc-disjoint source-sink paths ([[lem-integral-unit-flow-decomposition]]).

[L3] In a finite bipartite graph, matching and minimum vertex-cover sizes agree ([[thm-konig-bipartite-matching-cover]]).

[L4] Hall's condition is equivalent to a matching saturating the left part ([[thm-hall-marriage-finite-bipartite]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], each unit source-sink path has the form $s,x,y,t$, and arc-disjointness makes its middle edges a matching; conversely a matching gives these unit paths. [L2]

1.2 A vertex cover $C_X\cup C_Y$ yields the stated cut: no $x\to y$ arc crosses it, and its only cut arcs are the $|C_X|$ source arcs and $|C_Y|$ sink arcs. [given]

1.3 Thus [L1] makes maximum flow equal minimum cut, and [L3] identifies their common value with $\nu(G)=\tau(G)$. [L1, L3]

2.1 A flow of value $|X|$ uses every unit arc out of $s$, so step 1.1 makes a matching saturating $X$; [L4] gives the equivalent Hall condition. [L4]

3.1 The path, cut, matching, cover, and Hall correspondences in steps 1.1--2.1 prove the proposition. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
