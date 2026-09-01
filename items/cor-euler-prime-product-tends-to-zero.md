---
id: cor-euler-prime-product-tends-to-zero
kind: corollary
title: "Euler's prime product tends to zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-third-mertens-theorem-for-primes]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Terence Tao, Mertens' theorems"
      url: "https://terrytao.wordpress.com/2013/12/11/mertens-theorems/"
pipeline_run: null
---

## Statement

The finite Euler products

$$\prod_{p\le x}\left(1-\frac1p\right)$$

tend to $0$ as $x\to\infty$, and more precisely

$$\prod_{p\le x}\left(1-\frac1p\right) =\frac{e^{-\gamma}}{\log x}\left(1+O(1/\log x)\right).$$

## Facts & Assumptions

**Given:** The finite Euler prime products.

[L1] Mertens' third theorem gives the displayed asymptotic
([[thm-third-mertens-theorem-for-primes]]).

## Proof

**Proof technique:** direct.

1.1 The precise asymptotic is exactly [L1]. [L1]

2.1 Since $(1+O(1/\log x))$ stays bounded and $1/\log x\to0$, the product tends to $0$. [step 1.1, algebra] ∎
