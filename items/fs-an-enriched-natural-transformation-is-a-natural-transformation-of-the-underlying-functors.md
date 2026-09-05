---
id: fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors
kind: false-statement
title: "FALSE: an enriched natural transformation is only a natural transformation of the underlying functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality]
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
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.5"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

An enriched natural transformation is nothing more than an ordinary natural
transformation between the underlying functors.

## Facts & Assumptions

**Given:** The strengthened-naturality remark from the A page.

[L1] Enriched naturality is strictly stronger than ordinary naturality of the underlying components ([[rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality]]).

## Refutation

**Proof technique:** direct.

1.1 The theorem-page remark [L1] already identifies the failure: the component data may look ordinary, but the enriched naturality square asks for more. [L1, given]

2.1 So the statement that enriched naturality is only ordinary naturality is false. [step 1.1] ∎
