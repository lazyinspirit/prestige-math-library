---
id: fs-every-enriched-category-has-constant-enriched-functors
kind: false-statement
title: "FALSE: every enriched category has constant enriched functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-there-is-in-general-no-constant-enriched-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 3.9"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

Every enriched category admits constant enriched functors.

## Facts & Assumptions

**Given:** The A-page obstruction theorem.

[L1] Constant enriched functors need not exist ([[thm-there-is-in-general-no-constant-enriched-functor]]).

## Refutation

**Proof technique:** direct.

1.1 The theorem [L1] gives an enriched category whose underlying ordinary constant functor has no enriched lift. [L1, given]

2.1 That witness contradicts the universal assertion in the statement. Hence the statement is false. [step 1.1] ∎
