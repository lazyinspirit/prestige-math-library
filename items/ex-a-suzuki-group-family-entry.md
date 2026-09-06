---
id: ex-a-suzuki-group-family-entry
kind: example
title: "A Suzuki group family entry"
status: draft
origin: pipeline
deps: []
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
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

Suzuki groups occur in the source’s nonclassical twisted row.

## Facts & Assumptions

**Given:** Use Smith's nonclassical twisted-family row cited above.

[L1] Smith's nonclassical twisted-family row includes the Suzuki groups among the finite simple groups of Lie type.

## Verification

**Proof technique:** direct.

1.1 That row explicitly includes the Suzuki family among the finite simple groups of Lie type. [L1, given]

2.1 Hence Suzuki groups furnish the asserted named-family entry. [step 1.1] ∎
