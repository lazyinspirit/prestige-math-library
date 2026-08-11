---
id: lem-plane-face-handshake-by-girth
kind: lemma
title: "Facial boundary walks of a connected plane graph sum to $2|E|$, so girth at least $g$ gives $g|F|\\le2|E|$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-plane-edge-face-incidence, prop-face-boundaries-in-two-connected-plane-graphs, thm-double-counting, def-graph-distance-and-girth, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Chapter 4, Section 4.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
    - title: "R. Grassl and O. Levin, Exploring Combinatorial Mathematics, Sections 3.3-3.4"
      url: "https://openmathbooks.org/ecm/ecm.html"
pipeline_run: null
---

## Statement

Let $G$ be a connected plane graph, and write $\ell(f)$ for the length of the facial boundary walk of $f$. Then

$$\sum_{f\in F(G)}\ell(f)=2|E(G)|.$$

Consequently, if every facial boundary walk has length at least a positive natural $g$, then

$$g|F(G)|\le2|E(G)|.$$

Facial walks count a bridge twice by [[lem-plane-edge-face-incidence]]. Cyclic boundary terminology and girth use [[prop-face-boundaries-in-two-connected-plane-graphs]] and [[def-graph-distance-and-girth]], and finite sums use [[def-sum-over-a-finite-index-set]].

## Facts & Assumptions

**Given:** Such a graph $G$ and lower bound $g$.

[L1] Double counting gives the same finite incidence total by summing either its row fibres or its column fibres ([[thm-double-counting]]).

[L2] Each edge contributes two local face sides; a bridge contributes twice to its single facial boundary walk ([[lem-plane-edge-face-incidence]]).

## Proof

**Proof technique:** direct.

1.1 Count incidences between faces and local edge sides. By [L2] every edge supplies exactly two sides, while the fibre over a face has size equal to its boundary-walk length. Thus [L1] gives $\sum_{f\in F}\ell(f)=2|E|$. [L1, L2]

2.1 Since each $\ell(f)\ge g$, summing these inequalities yields $g|F|\le\sum_f\ell(f)=2|E|$. [step 1.1, L2, algebra] ∎

