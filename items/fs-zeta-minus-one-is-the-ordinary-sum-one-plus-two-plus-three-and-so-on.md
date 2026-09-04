---
id: fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on
kind: false-statement
title: "FALSE: $\\zeta(-1)$ is the ordinary sum $1+2+3+\\cdots$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-special-values-of-riemann-zeta-at-integers, rem-dirichlet-series-continuation-and-regularized-sums]
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
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

**False claim:** $\zeta(-1)$ is the ordinary sum $1+2+3+\cdots$.

## Facts & Assumptions

**Given:** The special value at $-1$.

[L1] The special-values theorem gives $\zeta(-1)=-1/12$
([[thm-special-values-of-riemann-zeta-at-integers]]).

[L2] The continuation remark records that this value is not an ordinary series
sum ([[rem-dirichlet-series-continuation-and-regularized-sums]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the continued zeta value at $-1$ is $-1/12$. [L1, given]

2.1 The ordinary partial sums of $1+2+3+\cdots$ are $1,3,6,\dots$, so they do not equal the fixed number $-1/12$. Step 1.1 and [L2] therefore refute the claim. [step 1.1, L2, algebra] ∎
