---
id: cex-maximal-matching-not-maximum-p4
kind: counterexample
title: "The middle edge of $P_4$ is a maximal matching but the two end edges form a larger matching"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [rem-maximal-versus-maximum-matching, thm-berge-augmenting-path-characterisation, def-standard-complete-bipartite-path-and-cycle-graphs]
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

## Counterexample

Let $P_4$ have consecutive vertices $1,2,3,4$ and let $M=\{23\}$. Then $M$
is maximal but not maximum: $\{12,34\}$ is a matching of size two.

## Facts & Assumptions

**Given:** The path $P_4$ and its middle-edge matching $M=\{23\}$.

[L1] A matching is maximum exactly when it has no augmenting path ([[thm-berge-augmenting-path-characterisation]]).

## Verification

**Verification technique:** direct.

1.1 The two remaining edges $12$ and $34$ each meet $23$, so neither can be added to $M$; hence $M$ is maximal. [given]

1.2 The path $1,2,3,4$ is $M$-augmenting, and [L1] therefore also shows that $M$ is not maximum. [L1]

2.1 Independently, $\{12,34\}$ is a disjoint two-edge matching, so the maximal and maximum notions differ in this finite path. [step 1.1, step 1.2] ∎
