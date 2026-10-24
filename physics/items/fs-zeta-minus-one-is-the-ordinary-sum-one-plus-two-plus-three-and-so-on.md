---
id: fs-zeta-minus-one-is-the-ordinary-sum-one-plus-two-plus-three-and-so-on
kind: false-statement
title: "FALSE: $\\zeta(-1)$ is the ordinary sum $1+2+3+\\cdots$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 11 §3"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

**False claim:** $\zeta(-1)$ is the ordinary sum $1+2+3+\cdots$.

## Facts & Assumptions

**Given:** The ordinary meaning of an infinite-series sum as the limit of its partial sums.

## Refutation

**Proof technique:** direct.

1.1 The $N$th partial sum of $1+2+3+\cdots$ is $N(N+1)/2$, which tends to $+\infty$ as $N\to\infty$. Thus the series has no ordinary sum. [given, algebra]

2.1 Since the right-hand side has no ordinary sum, it cannot equal any value assigned to $\zeta(-1)$ by analytic continuation. This refutes the claim independently of that value. [step 1.1] ∎
