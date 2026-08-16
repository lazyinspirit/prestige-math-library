---
id: fs-complex-sine-and-cosine-are-bounded
kind: false-statement
title: "FALSE: complex sine and cosine are bounded on the complex plane"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-sine-and-cosine-are-unbounded]
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
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

**False claim.** The functions $\sin:\mathbb C\to\mathbb C$ and $\cos:\mathbb C\to\mathbb C$ are bounded.

## Facts & Assumptions

**Given:** The complex sine and cosine functions.

[L1] Neither $\sin:\mathbb C\to\mathbb C$ nor $\cos:\mathbb C\to\mathbb C$ is bounded ([[thm-complex-sine-and-cosine-are-unbounded]]).

## Refutation

**Proof technique:** direct.

1.1 The sourced proposition [L1] directly contradicts the asserted global boundedness of both functions. [L1]

2.1 Thus the claim that both functions are bounded on $\mathbb C$ is false. [step 1.1] ∎
