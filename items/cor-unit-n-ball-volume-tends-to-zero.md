---
id: cor-unit-n-ball-volume-tends-to-zero
kind: corollary
title: 'The volume of the unit $n$-ball tends to zero with dimension'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C, Exercise 12(a)"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

$V_n(1)\to0$ as $n\to\infty$. The limit is through the positive integers.

## Facts & Assumptions

**Given:** The positive sequence of unit-ball volumes $V_n:=V_n(1)$.

[F1] For every $n\ge1$, $V_n=\pi^{n/2}/\Gamma(n/2+1)$ ([[cor-volume-of-the-unit-n-ball]]).

[F2] For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$ ([[thm-real-gamma-functional-equation]]).

[F3] If $|r|<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** direct.

1.1 From [F1] and [F2], $V_{n+2}/V_n=2\pi/(n+2)$ for every $n\ge1$. [F1, F2, algebra]

2.1 Choose an integer threshold after which $2\pi/(n+2)\le1/2$. Along each parity chain, step 1.1 then bounds every later volume by a fixed initial volume times successive powers of $1/2$, which tend to zero by [F3]. [step 1.1, F3, algebra]

3.1 Both the odd-dimensional and even-dimensional subsequences tend to zero, so their interleaving $(V_n)$ also tends to zero. [step 2.1] ∎
