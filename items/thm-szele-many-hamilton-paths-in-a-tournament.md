---
id: thm-szele-many-hamilton-paths-in-a-tournament
kind: theorem
title: "Szele's bound: for every $n\\ge1$, some $n$-vertex tournament has at least $n!/2^{n-1}$ Hamilton paths"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tournament, def-directed-walk-trail-path-cycle-and-strong-connectivity, thm-product-probability-has-independent-coordinate-events, thm-number-of-bijections-of-a-finite-set, lem-indicator-expectation-and-products, thm-linearity-of-expectation, thm-expectation-monotonicity-and-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Theorem 3.2.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Theorem 2.2"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

For every natural $n\ge1$, some tournament on $n$ labelled vertices has at least
$$\frac{n!}{2^{n-1}}$$
directed Hamilton paths.

## Facts & Assumptions

**Given:** A labelled vertex set $V$ of size $n\ge1$.

[L1] A tournament orients exactly one direction between each two distinct vertices ([[def-tournament]]).

[L2] A directed path is a directed walk $v_0,\ldots,v_\ell$, with $(v_{i-1},v_i)$ an arc at every step, whose vertices are distinct ([[def-directed-walk-trail-path-cycle-and-strong-connectivity]]). A directed Hamilton path is one containing every vertex.

[L3] Independent coordinate events in a product space have product probability ([[thm-product-probability-has-independent-coordinate-events]]).

[L4] A finite $n$-element set has exactly $n!$ bijective orderings ([[thm-number-of-bijections-of-a-finite-set]]).

[L5] Indicators count events, expectation is linear, and some outcome reaches at least its expectation ([[lem-indicator-expectation-and-products]], [[thm-linearity-of-expectation]], [[thm-expectation-monotonicity-and-bounds]]).

## Proof

**Proof technique:** direct.

1.1 Orient every possible edge independently and fairly. A fixed ordering of the vertices is a directed Hamilton path exactly when its $n-1$ consecutive edges receive prescribed orientations, an event of probability $2^{-(n-1)}$. [L1, L2, L3]

2.1 Sum an indicator over the $n!$ orderings. Its expectation is $n!/2^{n-1}$. [step 1.1, L4, L5]

3.1 Some tournament has at least this many directed Hamilton paths. For $n=1$, the unique ordering is a Hamilton path and the bound is $1$. [step 2.1, L5] ∎
