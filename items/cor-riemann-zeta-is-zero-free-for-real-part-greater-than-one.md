---
id: cor-riemann-zeta-is-zero-free-for-real-part-greater-than-one
kind: corollary
title: "The Riemann zeta function has no zeros when $\\operatorname{Re}s>1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euler-product-for-riemann-zeta, thm-absolute-convergence-criterion-for-complex-infinite-products]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

If $\operatorname{Re}s>1$, then $\zeta(s)\ne0$.

## Facts & Assumptions

**Given:** A complex number $s$ with $\operatorname{Re}s>1$.

[L1] On $\operatorname{Re}s>1$,
$$\zeta(s)=\prod_p (1-p^{-s})^{-1}$$
([[thm-euler-product-for-riemann-zeta]]).

[L2] An absolutely convergent infinite product has nonzero value
([[thm-absolute-convergence-criterion-for-complex-infinite-products]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\zeta(s)$ is the reciprocal of the absolutely convergent product $\prod_p(1-p^{-s})$. [L1, given]

2.1 By [L2], that product is nonzero, so its reciprocal is also nonzero. Therefore $\zeta(s)\ne0$. [step 1.1, L2, algebra] ∎
