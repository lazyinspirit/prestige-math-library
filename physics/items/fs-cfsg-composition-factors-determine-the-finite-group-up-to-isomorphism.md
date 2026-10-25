---
id: fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism
kind: false-statement
title: "Composition factors determine the finite group"
status: published
origin: pipeline
deps: [thm-jordan-holder-theorem-for-groups]
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

Two finite groups with the same multiset of composition factors are
isomorphic.

## Facts & Assumptions

**Given:** Compare $C_4$ and $C_2\times C_2$.

## Refutation

**Proof technique:** direct.

1.1 Each has a composition series with two factors isomorphic to $C_2$. However, $C_4$ contains an element of order four and $C_2\times C_2$ does not. [given, algebra]

2.1 The groups are therefore nonisomorphic despite having the same multiset of composition factors. [step 1.1, contradiction] ∎
