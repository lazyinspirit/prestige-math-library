---
id: thm-sine-cosine-signs-monotonicity-and-ranges
kind: theorem
title: "Signs, monotonicity intervals, and ranges of sine and cosine"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-derivatives, cor-mean-value-theorem]
justified_by: []
aliases: []
landmark: false
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

Sine is strictly increasing on each interval $[-\pi/2+2m\pi,\pi/2+2m\pi]$ and strictly decreasing on each interval $[\pi/2+2m\pi,3\pi/2+2m\pi]$. Cosine is strictly decreasing on $[2m\pi,(2m+1)\pi]$ and strictly increasing on $[(2m+1)\pi,(2m+2)\pi]$. Both functions have range $[-1,1]$.

## Facts & Assumptions

**Given:** An integer $m$.

[L1] The zero sets, signs on the fundamental intervals, and period $2\pi$ follow from [[thm-sine-cosine-zero-sets-and-fundamental-period]].

[L2] Quarter-turn values give the endpoint values $-1,0,1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L3] $\sin'=\cos$, $\cos'=-\sin$, and the mean value theorem converts derivative sign into strict monotonicity ([[thm-sine-and-cosine-derivatives]], [[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 On the open intervals where $\cos$ is positive respectively negative, $\sin'=\cos$ makes sine strictly increasing respectively decreasing. [L1, L3]

1.2 On the open intervals where $\sin$ is positive respectively negative, $\cos'=-\sin$ makes cosine strictly decreasing respectively increasing. [L1, L3]

2.1 The period moves these conclusions to every integer $m$, and the endpoint values in [L2] show both ranges are exactly $[-1,1]$. [step 1.1, step 1.2, L1, L2] ∎
