---
id: def-computable-martingale
kind: definition
title: "Computable martingales on binary strings"
status: draft
origin: session
deps: [def-computation-alphabet-and-word-convention]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Franklin and Porter, Definition 2.8"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Definition
A computable martingale is a total computable nonnegative real-valued function
$d:\{0,1\}^*\to\mathbb R_{\ge0}$ satisfying
$d(\sigma)=(d(\sigma0)+d(\sigma1))/2$. For an infinite binary sequence
$X\in2^\omega$, it **succeeds on $X$** if
$\sup_n d(X\upharpoonright n)=\infty$. Binary-string conventions are from
[[def-computation-alphabet-and-word-convention]].
