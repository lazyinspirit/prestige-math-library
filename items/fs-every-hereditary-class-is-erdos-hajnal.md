---
id: fs-every-hereditary-class-is-erdos-hajnal
kind: false-statement
title: "Every hereditary graph class has the Erdős–Hajnal property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-the-class-of-all-graphs-is-not-erdos-hajnal, def-hereditary-graph-class]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. Chernikov, MATH 223M notes, sec. 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Statement

Every hereditary graph class has the Erdős–Hajnal property.

## Facts & Assumptions

**Given:** The asserted universal claim.

[L1] The class of all finite graphs does not have the Erdős–Hajnal property ([[cor-the-class-of-all-graphs-is-not-erdos-hajnal]]).

[L2] A graph class is hereditary when it is closed under isomorphism and induced subgraphs ([[def-hereditary-graph-class]]).

## Refutation

**Proof technique:** direct.

1.1 The class of all finite graphs is closed under isomorphism and induced subgraphs, so it is hereditary by [L2]. [L2]

2.1 This hereditary class fails the Erdős–Hajnal property by [L1], contradicting the asserted universal claim. [step 1.1, L1] ∎
