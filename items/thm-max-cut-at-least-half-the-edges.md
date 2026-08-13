---
id: thm-max-cut-at-least-half-the-edges
kind: theorem
title: "Every finite graph with $m$ edges has a cut containing at least $m/2$ edges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-simple-graph, thm-product-probability-has-independent-coordinate-events, lem-indicator-expectation-and-products, thm-linearity-of-expectation, thm-expectation-monotonicity-and-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Theorem 3.3.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Theorem 2.1"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Statement

Every finite simple graph with $m$ edges has a bipartition of its vertex set for which at least $m/2$ edges have endpoints in different parts.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ with $|E|=m$.

[L1] A finite simple graph has a finite vertex set and two-element edges ([[def-finite-simple-graph]]).

[L2] Independent fair coordinate choices form a finite product probability space ([[thm-product-probability-has-independent-coordinate-events]]).

[L3] Indicators turn an edge count into a sum, and expectation is linear without independence of those indicators ([[lem-indicator-expectation-and-products]], [[thm-linearity-of-expectation]]).

[L4] Some outcome has value at least the expectation ([[thm-expectation-monotonicity-and-bounds]]).

## Proof

**Proof technique:** direct.

1.1 Place every vertex independently and fairly into one of two parts. A fixed edge crosses with probability $1/2$. [L1, L2]

2.1 If $X$ is the number of crossing edges, [L3] gives $\mathbb E[X]=m/2$. [step 1.1, L3]

3.1 By [L4], some bipartition has $X\ge m/2$. When $m=0$, every bipartition attains equality. [step 2.1, L4] ∎
