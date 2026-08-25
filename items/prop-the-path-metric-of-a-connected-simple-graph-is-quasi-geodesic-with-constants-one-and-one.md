---
id: prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one
kind: proposition
title: "The vertex set of a connected simple graph with its path metric is a $(1,1)$-quasi-geodesic space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-path-metric, thm-the-path-metric-of-a-connected-simple-graph-is-a-metric, def-geodesic-and-geodesic-metric-space, def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-quasi-geodesic-and-quasi-geodesic-metric-space, lem-integer-part]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement

The vertex set of a connected simple graph with its path metric is a $(1,1)$-quasi-geodesic space.

## Facts & Assumptions

**Given:** The hypotheses of the Statement.

[F1] A $(c,b)$-quasi-geodesic is a $(c,b)$-quasi-isometric embedding of a closed real interval, and a space is $(c,b)$-quasi-geodesic when every two of its points are joined by one ([[def-quasi-geodesic-and-quasi-geodesic-metric-space]]).

[L1] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[L2] The path metric of a connected simple graph is a metric on its vertex set ([[thm-the-path-metric-of-a-connected-simple-graph-is-a-metric]]).

[L3] A geodesic of length $L$ in a metric space is an isometric embedding of the interval $[0,L]$, and the space is geodesic when every two points are the endpoints of one ([[def-geodesic-and-geodesic-metric-space]]).

[L4] A map is $(L,C)$-coarse Lipschitz when $d(f(x),f(x'))\le L\,d(x,x')+C$, and an $(L,C)$-quasi-isometric embedding when in addition $L^{-1}d(x,x')-C\le d(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L5] It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**, of $x$. ([[lem-integer-part]]).


## Proof

**Proof technique:** constructive.

1.1 Given two vertices, parametrise a path realising their distance by sending each integer point of $[0,d]$ to the corresponding vertex and each intermediate real to the nearer endpoint of its unit subinterval. [F1, L1, L2, L5, construct]

2.1 The distances so obtained differ from those of the interval by at most one, so the parametrisation is a $(1,1)$-quasi-isometric embedding. [L4, step 1.1]

3.1 Hence every two vertices are joined by a $(1,1)$-quasi-geodesic, so the space is $(1,1)$-quasi-geodesic and not geodesic unless it is a single point. [F1, L3, step 2.1, discharge-construct] ∎
