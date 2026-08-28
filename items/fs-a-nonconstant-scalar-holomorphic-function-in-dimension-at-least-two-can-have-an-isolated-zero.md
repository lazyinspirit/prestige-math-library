---
id: fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero
kind: false-statement
title: "FALSE: a nonconstant scalar holomorphic function in dimension at least two can have an isolated zero"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-zero-set-has-no-isolated-points-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 1.6"
      url: "https://jirilebl.github.io/scv/scv.pdf"
pipeline_run: frontier-22
---

## Statement

**False claim:** in complex dimension at least two, a nonconstant holomorphic
scalar function can have an isolated zero.

## Facts & Assumptions

**Given:** The false claim above.

[L1] A nonzero holomorphic scalar function on a domain in $\mathbb C^m$ with $m\ge2$ has no isolated zero ([[thm-zero-set-has-no-isolated-points-in-several-complex-variables]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] states the exact negation of the claimed phenomenon. [L1]

2.1 Therefore such an isolated zero cannot occur, and the claim is false. [step 1.1] ∎
