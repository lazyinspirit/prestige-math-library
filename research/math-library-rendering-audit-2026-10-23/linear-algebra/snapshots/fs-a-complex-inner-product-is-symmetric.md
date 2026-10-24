---
id: fs-a-complex-inner-product-is-symmetric
kind: false-statement
title: "FALSE: Every complex inner product satisfies $\\langle u,v\\rangle=\\langle v,u\\rangle$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-inner-product-space, prop-standard-coordinate-inner-products]
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
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., definition 6.2'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

**False claim.** Every complex inner product satisfies $\langle u,v\rangle=\langle v,u\rangle$.

## Facts & Assumptions

**Given:** Standard $\mathbb C$ and the vectors $u=i$, $v=1$.

[L1] Complex inner products are conjugate symmetric: $\langle u,v\rangle=\overline{\langle v,u\rangle}$ ([[def-inner-product-space]]).

[L2] The standard complex inner product is $\langle z,w\rangle=z\overline w$ in one dimension ([[prop-standard-coordinate-inner-products]]).

## Refutation

**Proof technique:** counterexample.

1.1 By [L2], $\langle i,1\rangle=i$, whereas $\langle1,i\rangle=-i$. These are unequal. [L2, algebra]

2.1 They are complex conjugates, exactly as [L1] requires. Thus conjugate symmetry, not symmetry, is the correct law. [step 1.1, L1] ∎
