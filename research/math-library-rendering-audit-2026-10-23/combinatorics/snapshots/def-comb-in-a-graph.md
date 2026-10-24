---
id: def-comb-in-a-graph
kind: definition
title: "Combs in a graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\ell\in\mathbb N$ with $\ell\geq1$, and let $w>0$. An
**$(\ell,w)$-comb** in a graph $G$ is a sequence of pairs

$$((a_i,B_i):i\in[\ell])$$

satisfying the conditions below.

Here a vertex $a$ is **complete to** (respectively, **anticomplete to**) a set
$B$ when the pair $(\{a\},B)$ is complete (respectively, anticomplete) in the
sense of [[def-edges-between-sets-and-pure-mixed-pairs]].

1. $(B_1,\dots,B_\ell)$ is an $(\ell,w)$-blockade;
2. the vertices $a_1,\dots,a_\ell$ are distinct;
3. the set $\{a_1,\dots,a_\ell\}$ is disjoint from every block $B_i$; and
4. for every $i\in[\ell]$, the vertex $a_i$ is complete to $B_i$; and
5. for all distinct $i,j\in[\ell]$, the vertex $a_i$ is anticomplete to $B_j$.

The vertices $a_i$ are the **teeth** of the comb.
