---
id: fs-every-bounded-plane-domain-has-a-dirichlet-solution
kind: false-statement
title: "FALSE: every bounded plane domain solves the Dirichlet problem for every continuous boundary datum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum]
proof_strategy: direct
verification:
  audited: 2026-08-27
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

Every bounded plane domain solves the Dirichlet problem for every continuous
boundary datum.

## Facts & Assumptions

**Given:** The universal claim in the Statement refuted.

[L1] The punctured unit disc with boundary values $0$ on the outer circle and $1$ at the puncture has no harmonic solution ([[cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum]]).

## Refutation

**Proof technique:** direct.

1.1 The punctured unit disc is a bounded plane domain, and [L1] supplies a continuous boundary datum on it that is not attained by any harmonic function. [L1]

2.1 That single bounded counterexample contradicts the universal claim, so the statement is false. [step 1.1] ∎
