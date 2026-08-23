---
id: fs-the-unit-n-ball-volume-increases-with-dimension
kind: false-statement
title: 'FALSE: unit-ball volume increases with dimension'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-unit-n-ball-volume-is-maximal-in-dimension-five, cor-unit-n-ball-volume-tends-to-zero]
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
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C, Exercise 12"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

**False claim:** the volume $V_n(1)$ of the unit ball increases with the positive integer dimension $n$.

## Facts & Assumptions

**Given:** The sequence of positive-dimensional unit-ball volumes.

[F1] Among positive integer dimensions, the unit-ball volume is uniquely maximal at $n=5$ ([[cor-unit-n-ball-volume-is-maximal-in-dimension-five]]).

[F2] $V_n(1)\to0$ as $n\to\infty$ ([[cor-unit-n-ball-volume-tends-to-zero]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [F1] gives the explicit strict decrease $V_6(1)<V_5(1)$, contradicting monotone increase. [F1]

1.2 Independently, [F2] says the positive volumes tend to zero, which is incompatible with an increasing positive sequence. [F2]

2.1 Either step refutes the universal monotonicity claim. [step 1.1, step 1.2] ∎
