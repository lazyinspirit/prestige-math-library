---
id: def-property-star-for-a-finite-family
kind: definition
title: "Property (*) for a finite graph family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-clique-stable-set-and-numbers, def-comb-in-a-graph, def-blockade-length-and-width, def-complete-anticomplete-pure-and-x-sparse-blockades, def-graph-isomorphism-and-complement, def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 1.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Definition

Let $\mathcal F$ be a finite family of finite graphs. We say that
$\mathcal F$ has **property $(*)$** if there exist constants
$c_1,c_2,c_3>0$ such that the following holds for every
$\overline{\mathcal F}$-free graph $G$, where
$$\overline{\mathcal F}:=\{\overline H:H\in\mathcal F\}$$
is the family of graph complements
([[def-graph-isomorphism-and-complement]])
([[def-h-free-and-family-free-graph]]).

Suppose there is an $(\ell,w)$-comb $((a_i,B_i):i\in[\ell])$ in $G$
([[def-comb-in-a-graph]]) with $\ell,w\ge 4$, and suppose there is a vertex
$v\in V(G)\setminus(\{a_i:i\in[\ell]\}\cup\bigcup_{i=1}^{\ell} B_i)$ such that
$v$ is complete to $\bigcup_i B_i$ and anticomplete to $\{a_i:i\in[\ell]\}$.
Then at least one of the following holds:

1. $G$ has a clique or stable set of size at least $w^{c_1}$
   ([[def-clique-stable-set-and-numbers]]);
2. $G$ has a complete or anticomplete $(k,w/k^{c_2})$-blockade for some real
   $k\ge \ell^{c_3}$, where the real length threshold $k$ means that the
   blockade's integral length is at least $\lceil k\rceil$
   ([[def-blockade-length-and-width]],
   [[def-complete-anticomplete-pure-and-x-sparse-blockades]]);
3. $G$ has a pure $(\ell,w/\ell^2)$-blockade.

This condition records exactly the three ways the special-vertex comb trigger
can terminate the second sparsification round.
