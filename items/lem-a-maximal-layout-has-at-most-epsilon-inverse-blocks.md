---
id: lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks
kind: lemma
title: "A maximal layout has at most $\\epsilon^{-1}$ blocks"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-blockade-length-and-width,
       def-directional-and-weak-sparsity-between-vertex-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 6.1.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $\epsilon\in(0,\tfrac12)$ and $d\ge 1$. In the counterexample layout
construction used for Theorem 6.1 of the cited source, the chosen maximal
layout has fewer than $\epsilon^{-1}$ blocks; otherwise its blocks already
contain the blockade required by that theorem.

## Facts & Assumptions

**Given:** The maximal layout and counterexample hypotheses in the proof of
Theorem 6.1 of the cited source.

[L1] Claim 6.1.1 of the cited source proves that a chosen layout with at least
$\epsilon^{-1}$ blocks already satisfies the target blockade conclusion.

## Proof

**Proof technique:** direct from the cited source claim.

1.1 If the chosen layout had at least $\epsilon^{-1}$ blocks, [L1] would make its blocks a blockade satisfying the conclusion of the surrounding theorem. [L1, given]

2.1 The enclosing counterexample excludes that conclusion, so the layout has fewer than $\epsilon^{-1}$ blocks. [step 1.1] ∎
