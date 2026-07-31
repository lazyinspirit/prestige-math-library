---
id: cor-connected-components-partition-the-vertex-set
kind: corollary
title: "The connected components of a graph partition its vertex set and are its maximal connected subgraphs"
status: published
origin: session
deps: [lem-graph-reachability-is-an-equivalence-relation, def-connected-graph-and-connected-component, def-subgraph-induced-subgraph-and-spanning-subgraph]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, Chapter 1 preview"
      url: "https://diestel-graph-theory.com/basic.html"
pipeline_run: null
---

## Statement

The vertex sets $C_G(v)$ of the connected components of a graph $G$ are
nonempty, cover $V(G)$, and any two are equal or disjoint. Each induced graph
$G[C_G(v)]$ is connected and contains every connected subgraph of $G$ that
contains $v$. Consequently the connected components are precisely the maximal
connected subgraphs of $G$.

## Facts & Assumptions

**Given:** A graph $G=(V,E)$ and the reachability classes $C_G(v)$.

[L1] Reachability is an equivalence relation on $V$ ([[lem-graph-reachability-is-an-equivalence-relation]]).

[F1] $C_G(v)$ is the set of vertices reachable from $v$, and the connected component at $v$ is the induced graph $G[C_G(v)]$ ([[def-connected-graph-and-connected-component]], [[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity in [L1] gives $v\in C_G(v)$, so every class is nonempty and the classes cover $V$. [L1, F1]

1.2 If $C_G(u)$ and $C_G(v)$ meet at $w$, then $u$ reaches $w$ and $w$ reaches $v$ by symmetry; transitivity gives that $u$ reaches $v$, and another use of symmetry and transitivity shows a vertex reaches $u$ exactly when it reaches $v$. Thus $C_G(u)=C_G(v)$, so distinct classes are disjoint. [L1, F1]

1.3 If $x,y\in C_G(v)$, then $x$ reaches $v$ and $v$ reaches $y$; concatenating these paths gives a walk from $x$ to $y$, and deleting any repeated segments gives a path all of whose vertices remain reachable from $v$. Hence $G[C_G(v)]$ is connected. [L1, F1]

1.4 If a connected subgraph $H$ contains $v$, every vertex $x$ of $H$ is joined to $v$ by a path in $H$, hence also in $G$, so $x\in C_G(v)$. Thus $H$ is a subgraph of $G[C_G(v)]$. [F1]

2.1 Steps 1.1 and 1.2 give the partition assertion, and steps 1.3 and 1.4 say exactly that its induced subgraphs are connected and maximal among connected subgraphs. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
