---
id: cor-average-order-of-divisor-sum-function
kind: corollary
title: "The average order of sigma is (pi squared over 6)n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-summatory-function-and-average-order,
       thm-divisor-sum-summatory-estimate]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

The arithmetic function $n\mapsto(\pi^2/6)n$ is an average order of $\sigma$.

## Facts & Assumptions

**Given:** A real $x\ge1$ and $N:=\lfloor x\rfloor$.

## Proof

**Proof technique:** direct.

1.1 The comparison sum is exact: $$\sum_{n\le x}\frac{\pi^2}{6}n=\frac{\pi^2}{6}\sum_{n=1}^{N}n=\frac{\pi^2}{12}N(N+1)=\frac{\pi^2}{12}x^2+O(x).$$ [given, algebra]

2.1 By [[thm-divisor-sum-summatory-estimate]], $\sum_{n\le x}\sigma(n)=\pi^2x^2/12+O(x\log x)$. Comparing this with step 1.1 shows that the ratio of the two summatory functions tends to $1$, and the comparison sum is eventually positive. Therefore [[def-summatory-function-and-average-order]] makes $(\pi^2/6)n$ an average order of $\sigma$. [step 1.1, given, algebra] ∎
