---
id: lem-bondy-chvatal-edge-addition
kind: lemma
title: "If nonadjacent $u,v$ in an $n$-vertex graph satisfy $\\deg(u)+\\deg(v)\\ge n$, then adding $uv$ preserves Hamiltonicity in both directions"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hamilton-path-cycle-and-hamilton-connected, def-graph-adjacency-incidence-neighbourhood-and-degree, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Applied Combinatorics, Eulerian and Hamiltonian Graphs"
      url: "https://opentext.uleth.ca/Combinatorics/sect_Euler-Hamilton.html"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph on $n$ vertices, and let $u,v$ be nonadjacent
vertices satisfying

$$ \deg_G(u)+\deg_G(v)\ge n. $$

Then $G$ is Hamiltonian if and only if $G+uv$ is Hamiltonian.

## Facts & Assumptions

**Given:** The graph $G$, its order $n$, and the eligible nonedge $uv$ in the statement.

[F1] A Hamilton cycle contains every vertex exactly once before returning to its start ([[def-hamilton-path-cycle-and-hamilton-connected]]).

[F2] The degree of a vertex is the cardinality of its neighbourhood ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F3] Cardinalities of finite sets obey the pigeonhole principle for two subsets of a common finite set ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 Every Hamilton cycle of $G$ is also a Hamilton cycle of $G+uv$, so Hamiltonicity of $G$ implies Hamiltonicity of $G+uv$. [F1]

1.2 Conversely, take a Hamilton cycle of $G+uv$. If it avoids the new edge $uv$, it is already a Hamilton cycle of $G$. If it uses $uv$, deleting that edge leaves a Hamilton path $v_1=u,v_2,\ldots,v_n=v$ in $G$. [F1, cases]

1.3 For $1\le i\le n-1$, put $i$ in $A$ when $uv_{i+1}$ is an edge of $G$, and put $i$ in $B$ when $v_iv$ is an edge. Since $u$ and $v$ are nonadjacent, $|A|=\deg_G(u)$ and $|B|=\deg_G(v)$. Both lie in an $(n-1)$-element index set, while $|A|+|B|\ge n$, so $A\cap B\ne\varnothing$. [given, F2, F3, algebra]

2.1 Choose $i\in A\cap B$. Then $v_1,v_2,\ldots,v_i,v_n,v_{n-1},\ldots,v_{i+1},v_1$ is a Hamilton cycle in $G$: the two joining edges are $v_iv$ and $uv_{i+1}$, and all other edges come from the path in step 1.2. [step 1.2, step 1.3, F1]

3.1 The cases in step 1.2 and the construction in step 2.1 prove that Hamiltonicity of $G+uv$ implies Hamiltonicity of $G$; step 1.1 proves the other direction. [step 1.1, step 1.2, step 2.1] ∎
