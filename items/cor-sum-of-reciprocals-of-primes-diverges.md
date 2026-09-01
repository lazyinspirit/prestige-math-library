---
id: cor-sum-of-reciprocals-of-primes-diverges
kind: corollary
title: "The sum of the reciprocals of the primes diverges"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-second-mertens-theorem-for-primes]
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
    - title: "Leo Goldmakher, A Quick Proof of Mertens' Theorem"
      url: "https://web.williams.edu/Mathematics/lg5/mertens.pdf"
pipeline_run: null
---

## Statement

The series

$$
\sum_p\frac1p
$$

diverges.

## Facts & Assumptions

**Given:** The reciprocal-prime partial sums.

[L1] Mertens' second theorem gives
$$
\sum_{p\le x}\frac1p=\log\log x+B_1+O(1/\log x)
$$
([[thm-second-mertens-theorem-for-primes]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the partial sums differ from $\log\log x$ by a bounded quantity as $x\to\infty$. [L1]

2.1 Since $\log\log x\to\infty$, the partial sums $ \sum_{p\le x}\frac1p $ also tend to infinity. Therefore the prime reciprocal series diverges. [step 1.1, algebra] ∎
