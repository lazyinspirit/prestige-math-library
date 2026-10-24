---
id: fs-parametrization-independence-includes-orientation-reversal
kind: false-statement
title: "FALSE: parametrization independence makes orientation reversal leave every contour integral unchanged"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-invariance-of-complex-line-integrals-under-increasing-reparametrization, cor-contour-integral-of-a-constant-is-an-endpoint-increment]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Russell Howell and John Mathews, Complex Analysis, §6.2"
      url: "https://complexanalysis.org/web/sec_contour-integrals.html"
pipeline_run: null
---

## Statement

**False claim.** Parametrization independence implies that reversing a contour leaves every complex line integral unchanged.

## Facts & Assumptions

**Given:** The segment from $0$ to $1$, its reversal, and the constant integrand $1$.

[L1] Complex and absolute line integrals are invariant under a strictly increasing continuous reparametrization; decreasing reversal is not in that hypothesis ([[thm-invariance-of-complex-line-integrals-under-increasing-reparametrization]]).

[L2] The integral of a constant is the constant times the endpoint displacement ([[cor-contour-integral-of-a-constant-is-an-endpoint-increment]]).

## Refutation

**Proof technique:** direct.

1.1 By [L2], the forward segment has integral $1$ and the reversed segment has integral $-1$. [L2, algebra]

2.1 The values differ. This is consistent with [L1], whose exact hypothesis is increasing reparametrization and therefore does not include orientation reversal. [step 1.1, L1] ∎
