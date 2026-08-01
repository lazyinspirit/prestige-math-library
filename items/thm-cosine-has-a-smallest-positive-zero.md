---
id: thm-cosine-has-a-smallest-positive-zero
kind: theorem
title: "Cosine has a smallest positive zero, lying strictly between zero and two"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-sine-positive-and-cosine-decreasing-on-zero-two, thm-intermediate-value, cor-power-series-sums-are-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

There is a unique $\gamma\in(0,2)$ with $\cos\gamma=0$. It is the smallest positive zero of cosine.

## Facts & Assumptions

**Given:** The cosine function.

[L1] $\cos0=1$, $\cos2\le-1/3$, and $\cos$ is strictly decreasing on $[0,2]$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]]).

[L2] Power-series sums are continuous on their interval of convergence ([[cor-power-series-sums-are-continuous]]).

[L3] A continuous real function whose endpoint values bracket zero has a zero between them ([[thm-intermediate-value]]).



## Proof

**Proof technique:** direct.

1.1 Continuity, $\cos0>0$, and $\cos2<0$ give some $\gamma\in(0,2)$ with $\cos\gamma=0$. [L1, L2, L3]

2.1 Strict decrease on $[0,2]$ makes this zero unique and gives $\cos x>0$ for $0\le x<\gamma$. [step 1.1, L1]

3.1 No positive number below $\gamma$ is a zero, so $\gamma$ is the smallest positive zero. [step 2.1] ∎
