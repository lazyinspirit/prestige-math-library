---
id: lem-spanning-trees-and-schreier-systems-correspond
kind: lemma
title: "Rooted spanning trees and Schreier systems correspond"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-schreier-transversal-and-schreier-system, lem-schreier-coset-graph-is-connected-and-deterministic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let $F(X)$ be a free group and $H\le F(X)$. In the Schreier graph
$\operatorname{Sch}_X(H)$, rooted spanning trees based at $H$ are in bijection
with Schreier systems of right-coset representatives.

Here a **rooted spanning tree** means a connected acyclic spanning subgraph with
root $H$.

## Facts & Assumptions

**Given:** A free group $F(X)$, a subgroup $H\le F(X)$, and its Schreier graph.

[L1] Reduced words and initial segments are the ones from
[[def-schreier-transversal-and-schreier-system]].

[L2] The Schreier graph is connected, and from each vertex there is exactly one
outgoing edge for each basis letter ([[lem-schreier-coset-graph-is-connected-and-deterministic]]).

## Proof

**Proof technique:** direct.

1.1 Let $T$ be a rooted spanning tree. For each vertex $v$, let $p_v$ be the unique simple path in $T$ from $H$ to $v$, and let $\tau(v)$ be its label. A simple path in a tree never backtracks, so $\tau(v)$ is reduced. Because $T$ is spanning, every coset has some label $\tau(v)$; because $T$ is a tree, the path $p_v$ is unique, so no two distinct words $\tau(v)$ label the same vertex. Any initial segment of $\tau(v)$ labels an initial subpath of $p_v$, hence labels the tree path to an earlier vertex. Therefore $\{\tau(v)\}$ is a Schreier system. [L1, L2, given]

1.2 Conversely, let $\mathcal T$ be a Schreier system. For each non-base representative $t=x_1\cdots x_n\in\mathcal T$, join the vertex $Ht$ to the vertex $Hx_1\cdots x_{n-1}$ by the final labeled edge used to read $t$. Because prefixes stay in $\mathcal T$, every non-base vertex acquires exactly one parent; because the parent has smaller word length, repeatedly following parent edges must terminate at $H$. Thus every vertex is connected to $H$, and a cycle cannot occur because along a cycle one could not keep decreasing length and return to the starting vertex. So these parent edges form a rooted spanning tree. [L1, L2, given]

2.1 The two constructions are inverse. Reading the tree path from $H$ recovers each representative in the Schreier system, and taking parent edges from the prefixes of those representatives reconstructs the original rooted tree. [step 1.1, step 1.2] ∎
