---
id: ex-exponential-product-limit-at-negative-input
kind: example
title: "The log-free product limit $(1-2/n)^n\\to\\exp(-2)$"
status: published
origin: session
deps: [thm-exponential-product-limit, cor-exponential-reciprocal-and-positivity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Example

At $x=-2$,
$$\left(1-\frac2{\iota(n)}\right)^n\longrightarrow e^{-2}.$$
The finitely many initial indices with nonpositive base do not affect the limit.

## Facts & Assumptions

**Given:** The displayed sequence.

[L1] The product-limit theorem holds for every real input once $n>|x|$ ([[thm-exponential-product-limit]]).

[L2] $e^{-2}=1/e^2>0$ ([[cor-exponential-reciprocal-and-positivity]]).

## Verification

**Proof technique:** direct.

1.1 For every $n>2$, the base is positive, so [L1] applies at $x=-2$ and gives the asserted limit.  [L1]

2.1 Removing or altering the terms at $n\le2$ does not change a sequence limit, and [L2] identifies the positive limit.  [step 1.1, L2] ∎
