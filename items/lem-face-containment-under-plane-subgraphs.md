---
id: lem-face-containment-under-plane-subgraphs
kind: lemma
title: "Every face of a plane subgraph contains each face of the original graph that it meets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-graph-face-and-boundary, def-connected-component-and-quasicomponent, def-subgraph-induced-subgraph-and-spanning-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Lemma 4.2.1"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

Let $H$ be a plane subgraph of a plane graph $G$ in the inherited drawing ([[def-plane-graph-face-and-boundary]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]). If a face $f_H$ of $H$ meets a face $f_G$ of $G$, then $f_G\subseteq f_H$.

## Facts & Assumptions

**Given:** Such $G,H,f_G,f_H$ with $f_G\cap f_H\ne\varnothing$.

[L1] A connected component is the largest connected subset of the ambient space containing any one of its points ([[def-connected-component-and-quasicomponent]]).

## Proof

**Proof technique:** direct.

1.1 Since the drawing of $H$ is contained in the drawing of $G$, its complement contains the complement of $G$. The face $f_G$ is connected and lies wholly in the complement of $H$. [given, L1]

2.1 Choose a point of $f_G\cap f_H$. Both sets contain it, and [L1] says $f_H$ is the largest connected subset of the complement of $H$ containing it. Step 1.1 therefore gives $f_G\subseteq f_H$. [step 1.1, L1] ∎

