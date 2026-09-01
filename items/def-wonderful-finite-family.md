---
id: def-wonderful-finite-family
kind: definition
title: "Wonderful finite graph families"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-anticonnected-graph-and-anticonnected-component, def-blockade-length-and-width, def-c-sparse-and-c-restricted-vertex-set, def-directional-and-weak-sparsity-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs, def-graph-isomorphism-and-complement, def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 2.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal F$ be a finite family of finite graphs, and write

$$\overline{\mathcal F}:=\{\overline H:H\in\mathcal F\}$$

for its family of complements
([[def-graph-isomorphism-and-complement]]).

We say that $\mathcal F$ is **wonderful** if there exists a real constant
$a\ge 6$ such that the following holds for every $y\in(0,\tfrac12)$ and every
$\overline{\mathcal F}$-free graph $G$
([[def-h-free-and-family-free-graph]]).

Suppose that $\mathcal B=(B_1,\dots,B_\ell)$ is an $(\ell,w)$-blockade in $G$
([[def-blockade-length-and-width]]) with $\ell\ge y^{-a}$, that all blocks have
the same size, that every block $B_i$ is anticonnected
([[def-anticonnected-graph-and-anticonnected-component]]), and that for every
distinct $i,j\in[\ell]$ either

- $B_i$ is complete to $B_j$
  ([[def-edges-between-sets-and-pure-mixed-pairs]]), or
- $B_i$ is $y^a$-sparse to $B_j$ and $B_j$ is $y^a$-sparse to $B_i$
  ([[def-directional-and-weak-sparsity-between-vertex-sets]]).

Then at least one of the following conclusions holds:

1. $G$ has a $y^4$-restricted induced subgraph of size at least $w$
   ([[def-c-sparse-and-c-restricted-vertex-set]]).
2. There exists $i\in[\ell]$ such that at most $y|V(G)|$ vertices
   $v\in V(G)\setminus V(\mathcal B)$ satisfy
   $$0<|N_G(v)\cap B_i|<\frac12|B_i|.$$

This item fixes the symmetric reading of the source phrase "complete or
$y^a$-sparse" that the later proof actually uses: when a pair of blocks is not
complete, each block is sparse to the other.
