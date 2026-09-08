---
id: def-labelled-blowup-and-good-induced-copy
kind: definition
title: "Labelled blowup and good induced copy"
status: draft
origin: pipeline
deps: [def-induced-copy-density-and-homogeneous-restriction-parameter, def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "Section 4, definition preceding 4.2"
---

## Definition

Let $J$ be a nonempty finite simple graph with its vertices regarded as labels. For an integer $t\geq1$ and $0\leq q\leq1$, a $(t,q)$-blowup of $J$ in $G$ is a family of pairwise disjoint sets $(A_j:j\in V(J))$, each of size $t$, with the following property: for distinct $i,j$, each vertex of $A_i$ has at most $q t$ neighbors in $A_j$ if $ij\notin E(J)$, and at most $q t$ nonneighbors in $A_j$ if $ij\in E(J)$. The condition is required for both ordered pairs $(i,j)$ and $(j,i)$.

For $I\subseteq V(J)$, a good embedding of $J[I]$ is an induced embedding $\phi$ satisfying $\phi(i)\in A_i$ for every $i\in I$. Counts mean labelled embeddings as in [[def-induced-copy-density-and-homogeneous-restriction-parameter]]. The empty map is good when $I=\varnothing$. Internal edges of a block are unrestricted.

The family consists of blocks in the sense of [[def-blockade-length-and-width]], with both directional conditions of [[def-directional-and-weak-sparsity-between-vertex-sets]]. Merely meeting distinct blocks does not impose the specified label assignment.

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), Section 4, definition preceding 4.2.
