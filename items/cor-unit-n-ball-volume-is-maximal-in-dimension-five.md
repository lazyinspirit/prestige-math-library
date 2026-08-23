---
id: cor-unit-n-ball-volume-is-maximal-in-dimension-five
kind: corollary
title: 'The unit-ball volume is maximal in dimension five'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, cor-real-gamma-one-half-is-root-pi, thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C, Exercise 12(b)"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

Among positive integer dimensions, the unit-ball volume is uniquely maximal at $n=5$.

## Facts & Assumptions

**Given:** Unit-ball volumes $V_n:=V_n(1)$ for positive integers $n$.

[F1] For every $n\ge1$, $V_n=\pi^{n/2}/\Gamma(n/2+1)$ ([[cor-volume-of-the-unit-n-ball]]).

[F2] For every natural $N$, the Gregory--Leibniz formula writes $\pi/4$ as its partial sum through $N$ plus a signed remainder of magnitude at most $1/(2N+3)$ ([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[F3] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F4] $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]).

## Proof

**Proof technique:** direct.

1.1 In [F2], the partial sum through $N=7$ is $33976/45045>3/4$ and its remainder is positive, so $\pi>3$. The partial sum through $N=18$ is $133330680156299/166966608033225<4/5$ and its remainder is negative, so $\pi<16/5$. [F2, algebra]

2.1 Facts [F1] and [F3] give $V_{n+2}/V_n=2\pi/(n+2)$. Using step 1.1, the odd chain increases through $V_5$ and then decreases, while the even chain increases through $V_6$ and then decreases. [F1, F3, step 1.1, algebra]

2.2 From [F3], $\Gamma(7/2)=(5/2)(3/2)(1/2)\Gamma(1/2)=(15/8)\sqrt\pi$ by [F4], and $\Gamma(4)=3\cdot2\cdot1\cdot\Gamma(1)=6$. Hence [F1] gives $V_5=\pi^{5/2}/((15/8)\sqrt\pi)=8\pi^2/15$ and $V_6=\pi^3/6$. The upper bound $\pi<16/5$ from step 1.1 gives $V_5>V_6$. [F1, F3, F4, step 1.1, algebra]

3.1 Step 2.1 identifies the unique maximum within each parity chain, and step 2.2 compares the two candidates. Therefore $V_5$ is the unique global maximum. [step 2.1, step 2.2] ∎
