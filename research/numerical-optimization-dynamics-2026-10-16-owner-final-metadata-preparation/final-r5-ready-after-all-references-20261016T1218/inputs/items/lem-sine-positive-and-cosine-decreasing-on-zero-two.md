---
id: lem-sine-positive-and-cosine-decreasing-on-zero-two
kind: lemma
title: "Sine is positive and cosine is strictly decreasing on (0,2), with cos 2 at most -1/3"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, thm-alternating-series-test, cor-mean-value-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
    - title: "C. Schmeiser, Introduction to Analysis"
      url: "https://homepage.univie.ac.at/christian.schmeiser/einfanalysis.pdf"
pipeline_run: null
---

## Statement

For $0<x\le2$, $\sin x\ge x-x^3/6\ge x/3>0$. Also $\cos2\le-1/3$. Consequently $\cos$ is strictly decreasing on $[0,2]$.

## Facts & Assumptions

**Given:** A real $x$ with $0<x\le2$.

[L1] The defining sine and cosine series are those of [[def-sine-and-cosine-by-power-series]].

[L2] An alternating series with decreasing nonnegative terms has its sum between consecutive partial sums ([[thm-alternating-series-test]]).

[L3] $\cos'=-\sin$, and the mean value theorem detects strict monotonicity from derivative sign ([[thm-sine-and-cosine-derivatives]], [[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 The absolute sine terms after the first have successive ratio at most $4/6<1$, so [L2] gives $\sin x\ge x-x^3/6\ge x/3>0$. [L1, L2, algebra]

1.2 In the cosine series at $2$, the first three terms sum to $1-2+2/3=-1/3$, and the remaining alternating tail begins negative with decreasing absolute terms; hence $\cos2\le-1/3$. [L1, L2, algebra]

2.1 On $(0,2)$ one has $\cos'=-\sin<0$ by step 1.1, so the mean value theorem makes $\cos$ strictly decreasing on $[0,2]$. [step 1.1, L3] ∎
