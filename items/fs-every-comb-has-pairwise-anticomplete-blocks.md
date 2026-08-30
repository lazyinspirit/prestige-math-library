---
id: fs-every-comb-has-pairwise-anticomplete-blocks
kind: false-statement
title: "FALSE: every comb has pairwise anticomplete blocks"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-a-comb-can-have-an-edge-between-two-blocks]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Erdős-Hajnal for graphs with no 5-hole, proof context for Theorem 4.4"
      url: "https://arxiv.org/html/2102.04994v1"
pipeline_run: null
---

## Statement

Every comb has pairwise anticomplete blocks.

## Facts & Assumptions

**Given:** The counterexample item
[[cex-a-comb-can-have-an-edge-between-two-blocks]].

[L1] The previous counterexample exhibits a comb whose two blocks are joined by
an edge ([[cex-a-comb-can-have-an-edge-between-two-blocks]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], there exists a specific comb with two blocks that are not anticomplete. [L1]

2.1 Therefore the universal statement is false. The anticomplete-block conclusion on the A page needs the extra rooted stable-tooth structure together with $C_5$-freeness, not merely the definition of a comb. [step 1.1] ∎
