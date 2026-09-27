---
id: ex-schur-multiplier-of-a-cyclic-group
kind: example
title: "Multiplier of a cyclic group"
status: published
origin: pipeline
deps: [prop-schur-multiplier-of-a-cyclic-group-is-trivial, def-axiom-of-choice, def-supplied-projective-resolution-datum]
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
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Assume the Axiom of Choice and supplied projective-resolution data for group
homology. Then $M(C)=0$ for every cyclic group $C$.

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses and a cyclic group $C$.

## Verification

**Proof technique:** direct.

1.1 [[prop-schur-multiplier-of-a-cyclic-group-is-trivial]] applies to every finite or infinite cyclic group and gives $M(C)=0$. [given]

2.1 This is exactly the claimed cyclic-group calculation. [step 1.1] ∎
