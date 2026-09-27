---
id: ex-schur-multiplier-of-a-cyclic-group
kind: example
title: "Multiplier of a cyclic group"
status: published
origin: pipeline
deps: [prop-schur-multiplier-of-a-cyclic-group-is-trivial]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

$M(C)=0$ for every cyclic group $C$.

## Facts & Assumptions

**Given:** Let $C$ be cyclic.

## Verification

**Proof technique:** direct.

1.1 [[prop-schur-multiplier-of-a-cyclic-group-is-trivial]] applies to every finite or infinite cyclic group and gives $M(C)=0$. [given]

2.1 This is exactly the claimed cyclic-group calculation. [step 1.1] ∎
