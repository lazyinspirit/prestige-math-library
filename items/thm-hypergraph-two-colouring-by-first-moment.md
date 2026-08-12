---
id: thm-hypergraph-two-colouring-by-first-moment
kind: theorem
title: "Every $k$-uniform hypergraph with fewer than $2^{k-1}$ edges is $2$-colourable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-hypergraph-and-complete-partite-hypergraph, thm-product-probability-has-independent-coordinate-events, lem-indicator-expectation-and-products, thm-linearity-of-expectation, thm-first-moment-method]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Theorem 2.2.4"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

Let $k\ge1$. Every finite $k$-uniform hypergraph with fewer than $2^{k-1}$ edges admits a vertex two-colouring with no monochromatic edge.

## Facts & Assumptions

**Given:** A finite $k$-uniform hypergraph $H=(V,E)$ with $k\ge1$ and $|E|<2^{k-1}$.

[L1] An edge in a $k$-uniform hypergraph has exactly $k$ vertices ([[def-uniform-hypergraph-and-complete-partite-hypergraph]]).

[L2] Independent coordinate events in a finite product space have product probability ([[thm-product-probability-has-independent-coordinate-events]]).

[L3] A sum of indicators counts the corresponding events, each indicator has expectation equal to its event probability, and expectation is linear without independence ([[lem-indicator-expectation-and-products]], [[thm-linearity-of-expectation]]).

[L4] A nonnegative integer-valued variable with expectation less than $1$ vanishes at some outcome ([[thm-first-moment-method]]).

## Proof

**Proof technique:** direct.

1.1 Colour every vertex independently and uniformly red or blue. For a fixed edge, its $k$ colours are all red or all blue with probability $2\cdot2^{-k}=2^{1-k}$. [L1, L2]

2.1 Let $X$ count monochromatic edges. Then $\mathbb E[X]=|E|2^{1-k}<1$. [step 1.1, L3, algebra]

3.1 By [L4], some colouring has $X=0$ and is proper. If $k=1$, the edge hypothesis forces $E=\varnothing$, and the same proof applies. [step 2.1, L4] ∎
