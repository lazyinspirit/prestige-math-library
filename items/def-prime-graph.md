---
id: def-prime-graph
kind: definition
title: "Prime graphs: those whose only modules are the trivial ones"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-of-a-graph, def-finite-simple-graph, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
    - title: "T. Harju, Lecture Notes on Combinatorial Structures in Graph Theory, sec. 5"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Definition

A finite simple graph $G$ ([[def-finite-simple-graph]]) is **prime** when every
module of $G$ is trivial, that is, when the only modules of $G$ are
$\varnothing$, the singletons and $V(G)$ ([[def-module-of-a-graph]]).
Equivalently, $G$ is prime when it has no module $M$ with $2\le|M|$ and
$|M|\le|V(G)|-1$ ([[def-finite-cardinality]]).

Under this convention the null graph, every graph on one vertex and every graph
on two vertices is prime, since such a graph has no vertex set at all whose
cardinality lies between $2$ and $|V(G)|-1$. Which small graphs a source counts
as prime is not uniform in the literature, and the alternatives are recorded in
[[rem-conventions-for-prime-graphs]].
