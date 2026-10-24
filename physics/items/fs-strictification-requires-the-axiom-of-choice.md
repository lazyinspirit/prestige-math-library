---
id: fs-strictification-requires-the-axiom-of-choice
kind: false-statement
title: "Strictification requires the axiom of choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-the-choice-cost-of-strictification]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Exercise 2.8.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

**False claim:** Mac Lane strictification requires the axiom of choice.

## Facts & Assumptions

**Given:** The choice-cost boundary for strictification.

[L1] The strictification theorem itself is a functorial construction and does not use choice; only the stronger skeletal refinement has that cost ([[rem-the-choice-cost-of-strictification]]).

## Refutation

**Proof technique:** direct.

1.1 If strictification itself required choice, then the theorem's own construction would already depend on selecting representatives. [given]

1.2 But [L1] states that the selection occurs only in the stronger skeletal refinement, not in strictification itself. [L1]

2.1 Therefore the claim is false. [step 1.1, step 1.2] ∎
