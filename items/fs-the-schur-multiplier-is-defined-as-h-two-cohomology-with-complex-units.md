---
id: fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units
kind: false-statement
title: "Multiplier defined as H²(G,C×)"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group]
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

## Statement

For every group $G$, the Schur multiplier is defined as
$H^2(G;\mathbb C^\times)$.

## Facts & Assumptions

**Given:** Use the convention in [[def-schur-multiplier-of-a-group]].

## Refutation

**Proof technique:** direct.

1.1 [[def-schur-multiplier-of-a-group]] defines $M(G)=H_2(G;\mathbb Z)$. The group $H^2(G;\mathbb C^\times)$ is a degree-two cohomology group with different coefficients and is not the specified definition. No comparison theorem is needed to refute a claim about which definition this library uses. [given]

2.1 It is therefore false to present $H^2(G;\mathbb C^\times)$ as this library's definition of the multiplier. [step 1.1, contradiction] ∎
