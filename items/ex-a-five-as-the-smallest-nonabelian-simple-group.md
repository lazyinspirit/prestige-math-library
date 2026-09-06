---
id: ex-a-five-as-the-smallest-nonabelian-simple-group
kind: example
title: "A5 as the smallest nonabelian simple group"
status: published
origin: pipeline
deps: [thm-alternating-group-is-simple-for-n-at-least-five]
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
---

## Example

$A_5$ is the smallest nonabelian finite simple group.

## Facts & Assumptions

**Given:** Use [[thm-alternating-group-is-simple-for-n-at-least-five]] and the cited CFSG introductory table.

[L1] Smith's introductory table identifies $A_5$ as the least-order nonabelian finite simple group.

## Verification

**Proof technique:** direct.

1.1 The dependency makes $A_5$ simple, and $|A_5|=5!/2=60$; it is nonabelian. The cited source identifies it as the least-order nonabelian simple group. [L1, given, algebra]

2.1 Therefore $A_5$ is the smallest nonabelian finite simple group. [step 1.1] ∎
