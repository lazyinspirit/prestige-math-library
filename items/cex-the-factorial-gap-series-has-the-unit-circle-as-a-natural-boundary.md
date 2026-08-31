---
id: cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary
kind: counterexample
title: "The factorial-gap series shows that a holomorphic function need not continue past its boundary"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
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

## Statement refuted

**Refuted claim.** Every holomorphic function on a domain analytically continues
past each boundary point.

The witness is

$$F(z)=\sum_{n\ge0} z^{n!},$$

which is holomorphic on the unit disc and has the whole unit circle as a natural
boundary.

## Facts & Assumptions

**Given:** The factorial-gap series witness.

[L1] The factorial-gap series has radius $1$ and the whole unit circle as a
natural boundary
([[thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary]]).

## Counterexample

**Proof technique:** direct.

1.1 Fact [L1] gives a holomorphic function on the unit disc that cannot be continued through any boundary point of that disc. [L1]

2.1 Therefore the universal claim is false. [step 1.1] ∎
