---
id: cor-convergent-series-are-cesaro-and-abel-summable
kind: corollary
title: "Every convergent real series is Cesaro summable and Abel summable to its ordinary sum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-cesaro-mean-theorem, thm-abel-limit-theorem, def-abel-and-cesaro-summability-of-a-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Abel summability, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Abel_summability_method"
    - title: "Cesàro summation, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cesaro_summation_method"
    - title: "Cesàro summation methods, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Ces%C3%A0ro_summation_methods"
    - title: "MIT 18.100C, Lecture 11: Power Series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
    - title: "S. Semmes, Rice Math 322 notes"
      url: "https://math.rice.edu/~semmes/math322.pdf"
pipeline_run: null
---

## Statement

If $\sum_{n\ge0}a_n$ converges ordinarily to $s$, then it is both Cesaro summable and Abel summable to $s$.

## Facts & Assumptions

**Given:** Partial sums $S_n\to s$.

[L1] The Cesaro means of a convergent sequence converge to the same limit ([[thm-cesaro-mean-theorem]]).

[L2] Abel's limit theorem sends an ordinarily convergent series to its ordinary sum ([[thm-abel-limit-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $(S_n)$ to obtain $\sigma_n\to s$, which is Cesaro summability. [given, L1]

2.1 Apply [L2] to the original series to obtain Abel summability to $s$. [given, L2] ∎
