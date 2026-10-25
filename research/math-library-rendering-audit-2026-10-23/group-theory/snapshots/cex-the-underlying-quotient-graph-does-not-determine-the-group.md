---
id: cex-the-underlying-quotient-graph-does-not-determine-the-group
kind: counterexample
title: "The underlying quotient graph does not determine the acting group"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-bass-serre-structure-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement refuted

The underlying quotient graph of a tree action determines the acting group.

## Facts & Assumptions

**Given:** Bass-Serre structure recovers a group from a graph of groups, not from the quotient graph alone.

[L1] The acting group is recovered from the quotient graph together with its stabilizer data. ([[thm-bass-serre-structure-theorem]])

## Counterexample

**Proof technique:** direct.

1.1 Take the same one-loop quotient graph twice. In one graph of groups put the trivial vertex group and trivial edge group; the resulting group is $\mathbb Z$. In the other put vertex group $C_2$ and trivial edge group; the resulting group is $C_2\ast\mathbb Z$. [L1, given]

2.1 The quotient graphs are identical but the resulting groups are not isomorphic, so the quotient graph alone does not determine the acting group. [step 1.1, algebra] ∎
