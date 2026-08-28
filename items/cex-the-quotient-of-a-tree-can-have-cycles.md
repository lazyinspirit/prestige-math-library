---
id: cex-the-quotient-of-a-tree-can-have-cycles
kind: counterexample
title: "A quotient of a tree can have cycles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-graph-of-an-action-without-inversions, ex-the-bi-infinite-line-and-its-translation-action]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Statement refuted

The quotient of a simplicial tree by an action without inversions is always a
tree.

## Facts & Assumptions

**Given:** The quotient-graph definition and the translation action on the line.

[L1] A quotient graph identifies vertices and edges only up to orbit. ([[def-quotient-graph-of-an-action-without-inversions]])

[L2] Translation by one step on the bi-infinite line is a hyperbolic action on a simplicial tree. ([[ex-the-bi-infinite-line-and-its-translation-action]])

## Counterexample

**Proof technique:** direct.

1.1 By [L2], the bi-infinite line is a simplicial tree. Let $g$ be translation by three steps, so $\langle g\rangle$ acts without inversions on that tree. [L2, given]

2.1 In the quotient graph from [L1], the three vertex orbits are the residue classes modulo $3$, and the edge orbits join them cyclically. The quotient is therefore a $3$-cycle, not a tree. This refutes the statement. [L1, step 1.1, algebra] ∎
