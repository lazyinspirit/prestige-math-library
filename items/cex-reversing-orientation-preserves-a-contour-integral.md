---
id: cex-reversing-orientation-preserves-a-contour-integral
kind: counterexample
title: "Reversing orientation does not preserve a complex contour integral"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cor-contour-integral-of-a-constant-is-an-endpoint-increment, prop-reversal-and-concatenation-of-complex-line-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Reversing a contour's orientation preserves every complex contour integral.

## Facts & Assumptions

**Given:** The segment $\gamma$ from $0$ to $1$, its reversal, and the constant integrand $1$.

[L1] The integral of a constant $c$ is $c$ times the endpoint displacement ([[cor-contour-integral-of-a-constant-is-an-endpoint-increment]]).

[L2] Reversal negates the complex line integral while preserving the absolute line integral ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $\int_\gamma1\,dz=1(1-0)=1$, whereas $\int_{\gamma^-}1\,dz=1(0-1)=-1$. [L1, algebra]

2.1 The values differ, in agreement with [L2], so reversal does not preserve the oriented complex integral even though it preserves the absolute integral. [step 1.1, L2] ∎
