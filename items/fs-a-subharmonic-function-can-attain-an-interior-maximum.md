---
id: fs-a-subharmonic-function-can-attain-an-interior-maximum
kind: false-statement
title: "FALSE: a nonconstant subharmonic function can attain a finite interior maximum"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-maximum-principle-for-plane-subharmonic-functions]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Statement refuted

A nonconstant subharmonic function can attain a finite interior maximum.

## Facts & Assumptions

**Given:** The claim in the Statement refuted.

[L1] A subharmonic function with a finite interior maximum is constant on its connected component ([[thm-maximum-principle-for-plane-subharmonic-functions]]).

## Refutation

**Proof technique:** direct.

1.1 If the claim were true, some nonconstant subharmonic function would attain a finite interior maximum. [assume-contra]

2.1 But [L1] says that any subharmonic function with a finite interior maximum must be constant on the connected component where that maximum occurs. This contradicts step 1.1. [L1, step 1.1, discharge-contradiction] ∎
