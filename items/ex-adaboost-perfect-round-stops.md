---
id: ex-adaboost-perfect-round-stops
kind: example
title: "AdaBoost stops at a perfect round"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
deps:
  - alg-adaboost-m1
aliases: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references: []
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

On the two-observation sample $(x_1,y_1)=(0,+1)$ and $(x_2,y_2)=(1,-1)$, let the first base classifier return $h_1(x_1)=+1$ and $h_1(x_2)=-1$. Its weighted error is $e_1=0$, so AdaBoost stops and returns $h_1$ with zero training error; no coefficient is formed.

## Facts & Assumptions

**Given:** The stated sample, labels, and classifier outputs.

[F1] [[alg-adaboost-m1]]: When $e_m=0$, the algorithm halts and returns $h_m$ itself as a perfect classifier without forming a coefficient.

## Verification

1.1 Both predictions equal their labels, so the number of training mistakes is $0$ and $e_1=0$ for the initial uniform weights. [given, algebra]

2.1 By [F1], the algorithm stops at this round and returns $h_1$; since both predictions match, its training error is $0$ and no logarithmic coefficient is evaluated. [F1, step 1.1] ∎
