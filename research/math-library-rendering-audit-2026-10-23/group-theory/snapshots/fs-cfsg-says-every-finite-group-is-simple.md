---
id: fs-cfsg-says-every-finite-group-is-simple
kind: false-statement
title: "CFSG says every finite group is simple"
status: published
origin: pipeline
deps: [def-simple-group]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The classification of finite simple groups says that every finite group is
simple.

## Facts & Assumptions

**Given:** Take the cyclic group $C_4$.

## Refutation

**Proof technique:** direct.

1.1 Its subgroup of order two is nontrivial and proper, so $C_4$ is not simple. [given, algebra]

2.1 Thus a finite group need not be simple; CFSG classifies the finite groups that are simple and does not assert otherwise. [step 1.1, contradiction] ∎
