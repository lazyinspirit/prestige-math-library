---
id: lem-the-minimal-sparsity-parameter-drops-below-the-target
kind: lemma
title: "The minimal sparsity parameter drops below the target"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph,
       def-c-sparse-and-c-restricted-vertex-set]
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
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 7.3.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $x\in(0,\tfrac12)$. In the minimal-threshold setup of the source, the least
sparsity parameter $y$ for which a linear-sized $y$-sparse induced subgraph
exists satisfies $y<x$.

## Facts & Assumptions

**Given:** A parameter $x\in(0,\tfrac12)$ and a counterexample graph $G$ in
which $y$ is minimal with the stated property.

[L1] Claim 7.3.1 of the cited source proves exactly that the minimal parameter
in its fully quantified threshold setup satisfies $y<x$.

## Proof

**Proof technique:** direct translation.

1.1 The cited source claim applies the exact sparsity, size, and exponent bounds to the minimal witness and excludes its blockade outcome by the enclosing counterexample hypothesis. [L1, given]

2.1 The remaining outcome contradicts minimality unless $y<x$, which proves the statement. [step 1.1, L1] ∎
