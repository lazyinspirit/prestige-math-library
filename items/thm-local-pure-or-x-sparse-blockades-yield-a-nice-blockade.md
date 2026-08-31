---
id: thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade
kind: theorem
title: "Local pure or $x$-sparse blockades yield a nice blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks,
       lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse,
       thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade,
       def-directional-and-weak-sparsity-between-vertex-sets,
       def-blockade-length-and-width,
       def-complete-anticomplete-pure-and-x-sparse-blockades]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Theorem 6.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $\epsilon\in(0,\tfrac12)$ and $d\ge 1$, and put $x:=\epsilon^{5d}$. Let $G$
be a graph with $|V(G)|\ge \epsilon^{-10d^2}$. Assume that every induced
subgraph $F$ of $G$ with $|V(F)|\ge \epsilon^d|V(G)|$ has a pure or
$x$-sparse $(k,|V(F)|/k^d)$-blockade for some integer $k\in[2,x^{-1}]$. Then $G$ has
a $(\lceil\epsilon^{-1}\rceil,x^{2d}|V(G)|)$-blockade whose distinct block pairs are
either complete or weakly $\epsilon^d$-sparse.

## Facts & Assumptions

**Given:** The hypotheses in the statement.

[L1] Theorem 6.1 of the cited source proves exactly the displayed local-to-global
blockade conclusion, with its layout carrying both the block-size power-sum
condition and the wrong-pair bound.

## Proof

**Proof technique:** translate the cited source theorem.

1.1 The cited source theorem applies to the hypotheses above and produces a blockade of length at least $\epsilon^{-1}$, width at least $x^{2d}|V(G)|$, and complete-or-weakly-$\epsilon^d$-sparse cross-pairs. [L1, given]

2.1 Since blockade length is integral, length at least $\epsilon^{-1}$ is equivalent to length at least $\lceil\epsilon^{-1}\rceil$. This is exactly the stated conclusion. [step 1.1, algebra] ∎
