---
id: fs-the-adjoint-depends-linearly-on-complex-scalars
kind: false-statement
title: "FALSE: On a complex inner product space, $(\\lambda T)^*=\\lambda T^*$ for every scalar"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-adjoint-algebra, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 7.5'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

**False claim.** On a complex inner product space, $(\lambda T)^*=\lambda T^*$ for every scalar $\lambda$ and linear map $T$.

## Facts & Assumptions

**Given:** The identity map $I$ on standard $\mathbb C$ and the scalar $\lambda=i$.

[L1] Adjoint algebra gives $(\lambda T)^*=\overline\lambda T^*$, not $\lambda T^*$ ([[prop-adjoint-algebra]]).

[L2] The standard complex inner product is linear in its first argument and conjugate-linear in its second ([[prop-standard-coordinate-inner-products]]).

## Refutation

**Proof technique:** counterexample.

1.1 By [L1], $(iI)^*=\overline i I^*=-iI$, which is not $iI$. [L1, algebra]

2.1 Directly, [L2] gives $\langle iz,w\rangle=i\langle z,w\rangle=\langle z,-iw\rangle$, confirming that the adjoint scalar must be $-i$. [step 1.1, L2] ∎
