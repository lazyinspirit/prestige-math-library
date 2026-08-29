---
id: fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem
kind: false-statement
title: "FALSE: Tietze-equivalent finite presentations can differ on whether their word problem is solvable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set]
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
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

Two Tietze-equivalent finite presentations can differ on whether their word
problem is solvable.

## Facts & Assumptions

**Given:** Two Tietze-equivalent finite presentations.

[L1] Solvability of the word problem is invariant under changing between finite presentations of the same group. ([[prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set]])

## Refutation

**Proof technique:** direct.

1.1 Tietze-equivalent finite presentations present the same group, so [L1] applies to them. [L1, given]

2.1 Hence either both word problems are solvable or neither is. They cannot differ, so the statement is false. [L1, step 1.1, algebra] ∎
