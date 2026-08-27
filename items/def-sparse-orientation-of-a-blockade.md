---
id: def-sparse-orientation-of-a-blockade
kind: definition
title: "Sparse orientations of a blockade"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-directional-and-weak-sparsity-between-vertex-sets, def-blockade-length-and-width, def-complete-anticomplete-pure-and-x-sparse-blockades]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal{B}=(B_1,\dots,B_t)$ be a blockade and let $x\in[0,1]$. A
**sparse orientation** of $\mathcal{B}$ is an orientation of the complete graph
on the index set $[t]$ such that whenever the edge $i\to j$ is oriented from
$i$ to $j$, the block $B_i$ is $x$-sparse to $B_j$ in the sense of
[[def-directional-and-weak-sparsity-between-vertex-sets]].

The order orientation $i\to j$ for $i>j$ is the one built into the definition
of an $x$-sparse blockade
([[def-complete-anticomplete-pure-and-x-sparse-blockades]]).
