---
id: lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle
kind: lemma
title: "A rooted stable-tooth comb with a cross-edge between two blocks contains an induced five-cycle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rooted-stable-tooth-comb,
       def-induced-embedding-and-induced-copy,
       def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof of Theorem 4.4"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Let $G$ be a finite graph containing a rooted stable-tooth comb

$$\bigl(v,\ ((a_i,B_i):1\leq i\leq t)\bigr).$$

If $1\leq i<j\leq t$ and there are vertices $b_i\in B_i$ and $b_j\in B_j$ with
$b_ib_j\in E(G)$, then the induced subgraph on
$\{v,a_i,b_i,b_j,a_j\}$ is isomorphic to $C_5$.

## Facts & Assumptions

**Given:** A rooted stable-tooth comb
$\bigl(v,\ ((a_i,B_i):1\leq i\leq t)\bigr)$ in a finite graph $G$, indices
$i<j$, and adjacent vertices $b_i\in B_i$, $b_j\in B_j$.

[L1] In a rooted stable-tooth comb, each tooth is adjacent to every vertex of
its own block, anticomplete to every other block, the teeth form a stable set,
and the root is adjacent to all teeth and anticomplete to every block
([[def-rooted-stable-tooth-comb]]).

[L2] An induced copy of $C_5$ is a five-vertex set whose induced subgraph is
isomorphic to the cycle graph on five vertices
([[def-induced-embedding-and-induced-copy]],
[[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the edges $va_i$, $va_j$, $a_ib_i$, $a_jb_j$, and $b_ib_j$ are present. The same definition excludes every other edge among $\{v,a_i,b_i,b_j,a_j\}$: the teeth $a_i,a_j$ are nonadjacent, the root $v$ is anticomplete to the blocks, and each tooth is anticomplete to the other tooth's block. [L1]

2.1 Therefore the cyclic order $v-a_i-b_i-b_j-a_j-v$ uses exactly the edges of the induced subgraph on $\{v,a_i,b_i,b_j,a_j\}$. By [L2], that induced subgraph is a copy of $C_5$. [step 1.1, L2] ∎
