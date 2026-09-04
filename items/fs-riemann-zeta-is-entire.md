---
id: fs-riemann-zeta-is-entire
kind: false-statement
title: "FALSE: the Riemann zeta function is entire"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-riemann-zeta-meromorphic-continuation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

**False claim:** the Riemann zeta function is entire.

## Facts & Assumptions

**Given:** The global continuation theorem for zeta.

[L1] Zeta is meromorphic on $\mathbb C$ and has a simple pole at $1$
([[thm-riemann-zeta-meromorphic-continuation]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], zeta has a pole at $1$ and therefore is not holomorphic there. [L1, given]

2.1 An entire function is holomorphic on all of $\mathbb C$, so step 1.1 rules that out. Hence zeta is not entire. [step 1.1, algebra] ∎
