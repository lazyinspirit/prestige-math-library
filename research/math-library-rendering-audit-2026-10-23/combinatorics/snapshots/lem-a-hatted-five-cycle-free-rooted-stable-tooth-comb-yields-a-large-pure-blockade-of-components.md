---
id: lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components
kind: lemma
title: "A hatted-five-cycle-free rooted stable-tooth comb yields a large pure blockade of components"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rooted-stable-tooth-comb,
       def-complete-anticomplete-pure-and-x-sparse-blockades,
       def-connected-graph-and-connected-component,
       def-anticonnected-graph-and-anticonnected-component,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 8.1"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let
$\bigl(v,((a_i,B_i):1\le i\le t)\bigr)$ be a rooted stable-tooth comb in a graph
$G$. Assume that $G$ contains no induced hatted five-cycle. Then for each
$i\in[t]$ there is a connected component $D_i$ of $G[B_i]$ such that the
blockade $(D_1,\dots,D_t)$ is pure.

## Facts & Assumptions

**Given:** A rooted stable-tooth comb $\bigl(v,((a_i,B_i):1\le i\le t)\bigr)$ in a graph with no induced hatted five-cycle.

[L1] In a rooted stable-tooth comb, each tooth $a_i$ is complete to $B_i$, anticomplete to every other block, the teeth are stable, and the root $v$ is complete to the teeth and anticomplete to all blocks ([[def-rooted-stable-tooth-comb]]).

## Proof

**Proof technique:** direct.

1.1 For each $i$, choose a connected component $D_i$ of $G[B_i]$. Since $D_i\subseteq B_i$ and the comb blocks are pairwise disjoint, the sequence $(D_1,\dots,D_t)$ is again a blockade after deleting any empty choices, and we may choose every $D_i$ nonempty. [L1, choose]

2.1 Fix distinct indices $i,j$. Suppose some vertex $u\in D_j$ is mixed on $D_i$. Since $G[D_i]$ is connected, there is an edge $xy$ of $G[D_i]$ such that $u$ is adjacent to $x$ and not to $y$. By [L1], among the six vertices $v,a_i,a_j,x,y,u$ the edges $va_i,va_j,a_ix,a_iy,ux,ua_j,xy$ are present, while $vu,vy,xa_j,ya_j,ua_i,uy,a_ia_j$ are absent. Hence $v-a_j-u-x-a_i-v$ is a five-cycle, and $y$ is adjacent exactly to the adjacent cycle vertices $x,a_i$. Therefore these six vertices induce a hatted five-cycle, contradicting the hypothesis. So no vertex of $D_j$ is mixed on $D_i$; swapping $i$ and $j$ gives the converse direction, and therefore each pair $(D_i,D_j)$ is either complete or anticomplete. [step 1.1, L1, choose]

3.1 Since every pair of distinct chosen components is pure, $(D_1,\dots,D_t)$ is a pure blockade. [step 2.1] ∎
