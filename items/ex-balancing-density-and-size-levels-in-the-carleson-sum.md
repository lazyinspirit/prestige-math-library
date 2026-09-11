---
id: "ex-balancing-density-and-size-levels-in-the-carleson-sum"
kind: "example"
title: "Balancing density and size levels in the carleson sum"
deps: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lacey section 3, equation 3.16
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
generation:
  role: example
---

## Example

The nonnegative two-sided series satisfies $\sum_{n\in\mathbb Z}\min(2^n,2^{-n})=3$.

## Facts & Assumptions

**Given:** The displayed explicitly indexed nonnegative series, interpreted as the supremum of its finite subsums.

## Proof

1.1 For $n\ge0$ the minimum is $2^{-n}$, whereas for $n\le-1$ it is $2^n$. Finite geometric cancellation therefore gives, for integers $M\ge1$ and $N\ge0$, $\sum_{n=-M}^N\min(2^n,2^{-n})=(1-2^{-M})+(2-2^{-N})=3-2^{-M}-2^{-N}$. In particular the index zero is counted once and contributes one. [given, algebra]

2.1 Every finite set of integer indices lies in an interval $[-M,N]$ of the above form, and all summands are nonnegative. Thus the supremum of finite subsums is bounded above by three by step 1.1. Taking $M=N\to\infty$ in that same formula gives the lower bound three, since $2^{-M}\to0$. The series is therefore three. [step 1.1, algebra] ∎
