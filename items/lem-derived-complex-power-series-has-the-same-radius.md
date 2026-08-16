---
id: lem-derived-complex-power-series-has-the-same-radius
kind: lemma
title: "A complex power series, its formal derivative, and its zero-constant-term formal antiderivative have the same radius"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-series-power-series-and-absolute-convergence, lem-derived-and-integrated-power-series-have-the-same-radius]
aliases: []
landmark: true
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
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

The complex power series $\sum_{n\ge0}c_n(z-a)^n$, its formal derivative $\sum_{n\ge0}(n+1)c_{n+1}(z-a)^n$, and its zero-constant-term formal antiderivative $\sum_{n\ge0}c_n(z-a)^{n+1}/(n+1)$ have the same radius of convergence.

## Facts & Assumptions

**Given:** A complex power series with coefficients $(c_n)$.

[L1] A complex power series converges absolutely exactly when the corresponding real modulus-coefficient series converges ([[def-complex-series-power-series-and-absolute-convergence]]).

[L2] A real power series, its formal derivative, and its zero-constant-term formal antiderivative have the same radius ([[lem-derived-and-integrated-power-series-have-the-same-radius]]).

## Proof

**Proof technique:** direct.

1.1 The modulus coefficient of the formal derivative is $(n+1)|c_{n+1}|$, and that of the formal antiderivative is $|c_n|/(n+1)$. [algebra]

2.1 By [L1], the three complex radii are precisely the radii of the three real power series with the modulus coefficients described in step 1.1. [step 1.1, L1]

3.1 Apply [L2] to those real series. The conclusion includes radii $0$ and $+\infty$ and uses ordinary embedded-number notation only. [step 2.1, L2] ∎
