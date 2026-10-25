---
id: def-structural-comb-partition-hypothesis
kind: definition
title: "The structural comb-partition hypothesis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-erdos-hajnal-property-and-constant, def-comb-in-a-graph, def-pattern-graph-of-a-pure-blockade, def-complete-anticomplete-pure-and-x-sparse-blockades, def-graph-isomorphism-and-complement, def-h-free-and-family-free-graph]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-06
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Huang, Ju, and Zhou, Erdős–Hajnal beyond the five-vertex path, Lemma 5.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Definition

Let $\mathcal F_1,\mathcal F_2,\mathcal H$ be finite families of finite
graphs, and suppose that $\mathcal F_1$ and $\mathcal F_2$ have the
Erdős–Hajnal property ([[def-erdos-hajnal-property-and-constant]]). We say
that $(\mathcal F_1,\mathcal F_2;\mathcal H)$ satisfies the **structural
comb-partition hypothesis** if the following universal assertion holds.

For every $\overline{\mathcal H}$-free finite graph $G$
([[def-graph-isomorphism-and-complement]],
[[def-h-free-and-family-free-graph]]) and every $(\ell,w)$-comb
$((a_i,B_i):i\in[\ell])$ in $G$ with $\ell,w\ge4$
([[def-comb-in-a-graph]]), each $B_i$ has a partition
$$B_i=X_i\mathbin{\dot\cup}Y_i$$
such that:

1. $Y_i$ is $\mathcal F_1$-free;
2. $X_i$ has a partition $(A^i_1,\ldots,A^i_{t_i})$ which is a pure
   blockade, its blocks being nonempty, whose pattern graph is
   $\mathcal F_2$-free
   ([[def-complete-anticomplete-pure-and-x-sparse-blockades]],
   [[def-pattern-graph-of-a-pure-blockade]]); and
3. for every $j\in[t_i]$, every vertex of $\bigcup_{k\ne i}B_k$ is pure to
   $A^i_j$.

The quantifiers range over every ambient $\overline{\mathcal H}$-free graph
and every indicated comb, rather than fixing one graph from which a property
of $\mathcal H$ could not follow.
