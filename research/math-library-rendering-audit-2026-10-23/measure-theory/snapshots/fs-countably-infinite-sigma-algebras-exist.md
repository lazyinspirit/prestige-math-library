---
id: fs-countably-infinite-sigma-algebras-exist
kind: false-statement
title: "FALSE: a countably infinite sigma-algebra exists"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-no-sigma-algebra-is-countably-infinite]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.8"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

There exists a countably infinite sigma-algebra.

## Facts & Assumptions

**Given:** A putative countably infinite sigma-algebra.

[L1] No sigma-algebra is countably infinite ([[cor-no-sigma-algebra-is-countably-infinite]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that a countably infinite sigma-algebra exists. [assume-contra]

2.1 This contradicts [L1], so the asserted object does not exist. [step 1.1, L1, discharge-contradiction] ∎
