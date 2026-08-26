---
id: fs-every-subexponential-growth-group-has-polynomial-growth
kind: false-statement
title: "FALSE: every subexponential growth group has polynomial growth"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-grigorchuk-groups-of-intermediate-growth]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 5.1-5.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Statement

Every subexponential growth group has polynomial growth.

## Facts & Assumptions

**Given:** The existence result of [[rem-grigorchuk-groups-of-intermediate-growth]].

[A1] There exist finitely generated groups of intermediate growth.

## Refutation

**Proof technique:** direct.

1.1 By [A1], some finitely generated group has intermediate growth, meaning subexponential growth but not polynomial growth. [A1]

2.1 Such a group satisfies the hypothesis of the statement and fails its conclusion, so the statement is false. [step 1.1] ∎
