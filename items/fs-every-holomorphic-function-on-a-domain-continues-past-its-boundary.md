---
id: fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary
kind: false-statement
title: "FALSE: every holomorphic function on a domain continues past its boundary"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Henry Wilton, Riemann Surfaces lecture notes, Example 2.7"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Statement

**False claim.** Every holomorphic function on a domain continues past its
boundary.

## Facts & Assumptions

**Given:** The factorial-gap counterexample.

[L1] The factorial-gap series is holomorphic on the unit disc and has no
analytic continuation through any boundary point
([[cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] gives a holomorphic function on a domain whose boundary admits no continuation. [L1]

2.1 Hence the universal claim is false. [step 1.1] ∎
