---
id: fs-hereditary-classes-are-closed-under-all-subgraphs
kind: false-statement
title: "Every hereditary graph class is closed under taking arbitrary subgraphs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-hereditary-graph-class, ex-complete-graphs-as-a-hereditary-class, cex-a-subgraph-copy-need-not-be-induced]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Valerio Boncompagni, On hereditary graph classes defined by forbidding Truemper configurations (PhD thesis, 2018)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/23386/1/main.pdf"
pipeline_run: null
---

## False Statement

Every hereditary graph class is closed under taking arbitrary, not necessarily induced, subgraphs.

## Facts & Assumptions

**Given:** The hereditary class $\mathcal K$ of complete graphs.

[L1] Complete graphs form a hereditary class ([[ex-complete-graphs-as-a-hereditary-class]]).

[L2] $K_3$ contains $P_3$ as an ordinary subgraph but not as an induced subgraph ([[cex-a-subgraph-copy-need-not-be-induced]]).

[F1] Heredity requires closure under induced subgraphs, not arbitrary edge-deleted subgraphs ([[def-hereditary-graph-class]]).

## Refutation

**Proof technique:** direct.

1.1 The graph $K_3$ belongs to $\mathcal K$. [L1]

1.2 Deleting one edge gives an ordinary subgraph $P_3$, which is not complete and hence does not belong to $\mathcal K$. [L2]

2.1 Therefore the hereditary class $\mathcal K$ is not closed under arbitrary subgraphs. [step 1.1, step 1.2, F1] ∎
