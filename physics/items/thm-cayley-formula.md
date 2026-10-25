---
id: thm-cayley-formula
kind: theorem
title: "Cayley's formula: $\\tau(K_n)=n^{n-2}$ for $n\\ge2$, with $\\tau(K_1)=1$ and $\\tau(K_0)=0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-prufer-code-bijection, def-number-of-spanning-trees, def-standard-complete-bipartite-path-and-cycle-graphs, thm-cardinality-of-a-set-of-functions, def-nat-power]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISI Bangalore discrete mathematics notes, Trees and Cayley’s theorem"
      url: "https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html"
pipeline_run: null
---

## Statement

For $n\ge2$, the complete graph $K_n$ has

$$\tau(K_n)=n^{n-2}$$

spanning trees. Moreover, $\tau(K_1)=1$ and $\tau(K_0)=0$.

## Facts & Assumptions

**Given:** A natural number $n$.

[L1] Trees on the fixed label set $n$ are in bijection with words of length $n-2$ on $n$ when $n\ge2$ ([[thm-prufer-code-bijection]]).

[L2] The set of functions from an $m$-element set to an $n$-element set has cardinality $n^m$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

[F1] Every labelled tree on $n$ is a spanning subgraph of $K_n$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]], [[def-number-of-spanning-trees]]).

## Proof

**Proof technique:** direct.

1.1 For $n\ge2$, spanning trees of $K_n$ are exactly the trees on its fixed label set. [F1]

2.1 By the Prüfer bijection, they correspond to functions from an $(n-2)$-element position set to $n$, of which there are $n^{n-2}$. [step 1.1, L1, L2]

3.1 The sole spanning tree of $K_1$ is $K_1$ itself, so $\tau(K_1)=1$. The null graph $K_0$ is not a tree and has no spanning tree, so $\tau(K_0)=0$. [F1] ∎
