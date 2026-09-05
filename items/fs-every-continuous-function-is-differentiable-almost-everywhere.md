---
id: fs-every-continuous-function-is-differentiable-almost-everywhere
kind: false-statement
title: "FALSE: every continuous function is differentiable almost everywhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-takagi-function-is-continuous-and-nowhere-differentiable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pieter C. Allaart and Kawshik Kawamura, The Takagi Function: A Survey"
      url: "https://arxiv.org/abs/1110.1691"
---

## Statement

Every continuous real function on a compact interval is differentiable almost
everywhere.

## Facts & Assumptions

**Given:** The statement above.

[A1] We refute it by a published counterexample.

## Refutation

**Proof technique:** direct.

1.1 The published theorem [[thm-takagi-function-is-continuous-and-nowhere-differentiable]] gives a continuous function on $[0,1]$ whose finite derivative exists at no point. [given]

2.1 In particular that function is not differentiable almost everywhere, so the statement is false. [step 1.1] ∎
