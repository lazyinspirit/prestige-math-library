---
id: def-csm-frontier-fk-real-boundaries
kind: definition
title: "Finite FK random-cluster weights for real q and boundary partitions"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps: [def-csm-frontier-finite-potts-fk, def-multigraph-loop-and-digraph]
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
  def-multigraph-loop-and-digraph: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 1, finite random-cluster model and real cluster weight q >= 1."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 1, especially §§1.2–1.3: finite edge-subset law, component count, and boundary conditions."
verification:
  precheck: pending
---

## Definition

Let $G=(V,E,\partial)$ be a finite undirected multigraph: $V$ and the edge-label set $E$ are finite, and each $e\in E$ has a singleton or two-element endpoint set $\partial e\subseteq V$. Distinct labels may have the same endpoint set. Let $B\subseteq V$ be a designated boundary set and let $\xi$ be an equivalence relation on $B$; vertices in each $\xi$-class are wired together, while vertices outside $B$ remain separate. For $A\subseteq E$, let $k_\xi(A)$ be the number of connected components, including isolated vertices, after wiring the $\xi$-classes and opening exactly the edges in $A$. A loop does not join distinct vertices.

For $q\in[1,\infty)$ and $p\in(0,1)$, the finite FK weight of $A$ and its partition function are

$$w_{G,p,q}^{\xi}(A):=p^{|A|}(1-p)^{|E\setminus A|}q^{k_\xi(A)},\qquad Z_{G,p,q}^{\xi}:=\sum_{A\subseteq E}w_{G,p,q}^{\xi}(A).$$

The finite FK random-cluster probability is $\phi_{G,p,q}^{\xi}(A):=w_{G,p,q}^{\xi}(A)/Z_{G,p,q}^{\xi}$. Every weight is positive and finite, and the finite sum $Z_{G,p,q}^{\xi}$ is positive and finite. The free boundary condition is the identity partition on $B$; the wired boundary condition identifies all vertices of $B$ in one class.

When $G$ is a finite simple graph with the Potts/FK convention of the earlier finite Potts definition, $\xi$ is free, $q=Q$ is an integer at least two, and every activity equals $v=p/(1-p)$, this definition gives the same normalized FK law, since $w_{FK}(A)=(1-p)^{-|E|}w_{G,p,Q}^{\xi}(A)$.

## Definition references

[[def-csm-frontier-finite-potts-fk]]

[[def-multigraph-loop-and-digraph]]
