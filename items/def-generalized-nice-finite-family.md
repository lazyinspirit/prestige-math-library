---
id: def-generalized-nice-finite-family
kind: definition
title: "Generalized nice finite graph families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width, def-c-sparse-and-c-restricted-vertex-set, def-clique-stable-set-and-numbers, def-directional-and-weak-sparsity-between-vertex-sets, def-graph-isomorphism-and-complement, def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Section 3"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal F$ be a finite family of finite graphs, and write

$$ \overline{\mathcal F}:=\{\overline H:H\in\mathcal F\} $$

for the family of complements
([[def-graph-isomorphism-and-complement]]).

We say that $\mathcal F$ is **generalized nice** if there exist real constants

$$ c_1\ge 3,\qquad c_2\ge 8,\qquad c_3,c_4,c_5,c_8>0,\qquad c_6\ge 1,\qquad c_7\ge 4 $$

such that for every $\overline{\mathcal F}$-free graph $G$
([[def-h-free-and-family-free-graph]]) and every $\epsilon\in(0,\tfrac12)$, at
least one of the following holds:

1. $G$ has an $(\lceil\epsilon^{-1}\rceil,\epsilon^{c_1}|G|)$-blockade
   ([[def-blockade-length-and-width]]) whose distinct block pairs are either
   complete or weakly $\epsilon^{c_2}$-sparse
   ([[def-directional-and-weak-sparsity-between-vertex-sets]]);
2. $G$ has a clique or stable set of size at least
   $$ (\epsilon^{c_3}|G|)^{c_4} $$
   ([[def-clique-stable-set-and-numbers]]);
3. $G$ has a complete or anticomplete $(k,|G|/k^{c_5})$-blockade with
   $k\ge \epsilon^{-c_6}$; or
4. $G$ has an $\epsilon^{c_7}$-restricted induced subgraph of size at least
   $$ \epsilon^{c_8}|G| $$
   ([[def-c-sparse-and-c-restricted-vertex-set]]).

This is the Section 3 replacement for the earlier "nice" condition: the first
alternative still produces a long blockade, but the other three alternatives
already package the three reduction outcomes that will be iterated later on the
page.
