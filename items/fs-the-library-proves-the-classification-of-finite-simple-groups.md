---
id: fs-the-library-proves-the-classification-of-finite-simple-groups
kind: false-statement
title: "The library proves CFSG"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
---

## Statement

This library proves the classification of finite simple groups.

## Facts & Assumptions

**Given:** The current `rem-classification-of-finite-simple-groups` carrier declares `proved_here: false` and describes CFSG as an external result.

## Refutation

**Proof technique:** direct.

1.1 That carrier records CFSG as an external landmark and supplies no local classification proof. Its `external_dependency` explicitly says the proof is not reproduced here. [given]

2.1 Consequently the library records the classification statement but does not prove it. [step 1.1, contradiction] ∎
