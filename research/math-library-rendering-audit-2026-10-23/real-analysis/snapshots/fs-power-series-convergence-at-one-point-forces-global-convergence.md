---
id: fs-power-series-convergence-at-one-point-forces-global-convergence
kind: false-statement
title: "FALSE: convergence of a power series at one point other than its centre forces convergence at every real point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-geometric-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

**False claim:** if a power series converges at one point distinct from its centre, then it converges at every real point.

## Facts & Assumptions

**Given:** The geometric power series $\sum_{n\ge0}x^n$ centred at $0$.

[L1] The geometric series converges when $|x|<1$ and diverges when $|x|\ge1$ ([[thm-geometric-series]]).

## Refutation

**Proof technique:** direct.

1.1 At $x=1/2\ne0$, the series converges by [L1]. At $x=2$, its terms do not tend to zero and it diverges. [L1]

2.1 This single power series satisfies the premise and fails the conclusion, refuting the claim. [step 1.1] ∎
