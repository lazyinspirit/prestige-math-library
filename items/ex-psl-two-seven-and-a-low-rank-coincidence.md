---
id: ex-psl-two-seven-and-a-low-rank-coincidence
kind: example
title: "PSL(2,7) and a low-rank family entry"
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

$\operatorname{PSL}(2,7)$ is a sourced Lie-type entry under the table's
low-rank convention.

## Facts & Assumptions

**Given:** Use Smith's Lie-type family table cited above.

[L1] Smith's table places $\operatorname{PSL}(2,7)$ in the projective special linear family under its stated low-rank conventions.

## Verification

**Proof technique:** direct.

1.1 In that table $\operatorname{PSL}(2,7)$ occurs in the projective special linear family, with the source's stated low-rank naming conventions. [L1, given]

2.1 This is precisely the claimed table-level Lie-type example; no structural construction is being inferred. [step 1.1] ∎
