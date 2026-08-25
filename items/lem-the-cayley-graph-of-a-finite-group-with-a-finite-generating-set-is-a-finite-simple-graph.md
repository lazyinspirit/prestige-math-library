---
id: lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph
kind: lemma
title: "For a finite group the Cayley graph is a finite simple graph in the published sense and the two distances agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-graph-path-metric, lem-the-graph-notions-agree-with-the-published-finite-graph-theory, def-cayley-graph, def-finite-simple-graph, def-graph-distance-and-girth, def-finite-cardinality]
aliases: []
landmark: false
proof_strategy: direct
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

Let $G$ be a finite group and let $S$ be a finite generating set. Then
$\operatorname{Cay}(G,S)$ is a connected finite simple graph in the published
sense, and its path metric agrees with the published graph distance.

## Facts & Assumptions

**Given:** A finite group $G$ and a finite generating set $S$.

[F1] The Cayley graph of a group $G$ with respect to a subset $S$ has vertex set $G$ and edge set $\{\{g,gs\}:g\in G,\ s\in(S\cup S^{-1})\setminus\{e\}\}$ ([[def-cayley-graph]]).

[L1] On a finite vertex set these graph notions are the published ones and the path metric is the published graph distance ([[lem-the-graph-notions-agree-with-the-published-finite-graph-theory]]).

[L2] The path metric of a connected simple graph assigns to two vertices the least length of a path joining them ([[def-graph-path-metric]]).

[L3] $$E\subseteq [V]^2:=\{\,\{u,v\}\subseteq V: u\ne v\,\}.$$ ([[def-finite-simple-graph]]).

[L4] Let $u$ and $v$ lie in the same connected component of a graph $G$. Their **distance** is ([[def-graph-distance-and-girth]]).

[L5] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).


## Proof

**Proof technique:** direct.

1.1 The vertex set is the group, which is finite, and the edges are two-element subsets, so the published definition applies verbatim; because $S$ generates $G$, the Cayley graph is connected. [F1, L1, L3, L5, given]

2.1 Both distances are the least length of a path in the same sense, so they agree. [F1, L1, L2, L4, step 1.1] ∎
