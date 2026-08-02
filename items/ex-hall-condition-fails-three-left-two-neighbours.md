---
id: ex-hall-condition-fails-three-left-two-neighbours
kind: example
title: "Three left vertices with only two collective neighbours fail Hall's condition and cannot all be matched"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-hall-marriage-finite-bipartite, def-bipartite-neighbourhood-hall-condition-and-sdr]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Take left part $X=\{x_1,x_2,x_3\}$, right part $Y=\{a,b\}$, and all six
possible edges between the two parts. This graph has no matching saturating $X$.

## Facts & Assumptions

**Given:** The displayed finite bipartite graph.

[L1] A finite bipartite graph has a matching saturating its left part exactly when Hall's condition holds ([[thm-hall-marriage-finite-bipartite]]).

## Verification

**Verification technique:** direct.

1.1 For $S=X$, the neighbourhood is $N(S)=\{a,b\}$, so $|N(S)|=2<3=|S|$. [given]

1.2 Thus Hall's condition fails, and [L1] proves that no matching can saturate all three left vertices. [L1]

2.1 The two available right vertices also show directly that any matching has at most two edges. [step 1.1, step 1.2] ∎
