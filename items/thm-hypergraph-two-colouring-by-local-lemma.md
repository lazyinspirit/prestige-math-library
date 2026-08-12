---
id: thm-hypergraph-two-colouring-by-local-lemma
kind: theorem
title: "A $k$-uniform hypergraph is $2$-colourable when every edge meets at most $d$ other edges and $e(d+1)\\le2^{k-1}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-hypergraph-and-complete-partite-hypergraph, def-product-of-finite-probability-spaces, lem-finite-sum-reindexing-and-fubini, def-dependency-digraph-for-finite-events, lem-exponential-dominates-one-plus-x, cor-symmetric-lovasz-local-lemma, thm-positive-probability-existence-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 5.2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

Let $k\ge1$ and $d\in\mathbb N$. Suppose every edge of a finite $k$-uniform hypergraph meets at most $d$ other edges and
$$e(d+1)\le2^{k-1}.$$
Then the hypergraph is two-colourable.

## Facts & Assumptions

**Given:** A finite $k$-uniform hypergraph satisfying the Statement.

[L1] A $k$-uniform edge contains exactly $k$ vertices ([[def-uniform-hypergraph-and-complete-partite-hypergraph]]).

[L2] Product weights factor coordinatewise, and finite Fubini factors sums over disjoint coordinate blocks ([[def-product-of-finite-probability-spaces]], [[lem-finite-sum-reindexing-and-fubini]]).

[L3] A dependency graph requires each bad event to be independent of every conjunction of complements indexed by its non-neighbours ([[def-dependency-digraph-for-finite-events]]).

[L4] If bad events have probability at most $p$, a dependency graph of maximum degree $d$, and $ep(d+1)\le1$, then they can all be avoided with positive probability ([[cor-symmetric-lovasz-local-lemma]]).

[L5] An event of positive probability in a finite probability space is nonempty ([[thm-positive-probability-existence-principle]]).

[L6] For every real $x$, $1+x\le\exp(x)$; in particular $e=\exp(1)\ge2$ ([[lem-exponential-dominates-one-plus-x]]).

## Proof

**Proof technique:** direct.

1.1 Colour vertices independently and fairly. For each edge $F$, let $A_F$ be the event that $F$ is monochromatic. The two monochromatic assignments are disjoint and each has product weight $2^{-k}$, so $\mathbb P(A_F)=2^{1-k}$. [L1, L2]

1.2 Join two bad events when their edges meet. If all edges indexing a complement conjunction are disjoint from $F$, that conjunction depends only on coordinates outside $F$; finite Fubini in [L2] factors its intersection probability with $A_F$. Thus [L3] makes the edge-intersection graph a dependency graph, and its degree is at most $d$. [L2, L3]

2.1 The numerical hypothesis is $e\,2^{1-k}(d+1)\le1$, so [L4] gives positive probability that no edge is monochromatic. [step 1.1, step 1.2, L4, algebra]

3.1 By [L5], the positive-probability event in step 2.1 contains a colouring, and that colouring is proper. For $k=1$, [L6] gives $e(d+1)\ge2>1=2^{k-1}$, so the numerical hypothesis cannot hold; the empty-edge case for admissible parameters is immediate. [step 2.1, L5, L6, algebra] ∎
