---
id: ex-smooth-compactly-supported-bump
kind: example
title: "A nonzero smooth compactly supported bump"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-flat-exponential-function, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-power-series-sums-are-smooth-with-coefficient-formula, def-metric-interior-closure-boundary]
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
    - title: "S. Dyatlov, MIT 18.155 lecture notes"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
    - title: "MIT 18.102, Chapter 4 notes"
      url: "https://math.mit.edu/~rbm/18-102-Sp16/Chapter4.pdf"
pipeline_run: null
---

## Example

Let $\phi$ be [[ex-flat-exponential-function]] and define $b(x)=\phi(1-x^2)$. Then $b$ is smooth, positive on $(-1,1)$, and zero outside $[-1,1]$; its support is $[-1,1]$.

## Facts & Assumptions

**Given:** The displayed composite.

[L1] $\phi$ is smooth and flat at $0$ ([[ex-flat-exponential-function]]).

[L2] Products and composites preserve smoothness ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[L3] Closure, boundary, and interior are [[def-metric-interior-closure-boundary]].

## Verification

**Proof technique:** direct.

1.1 On $|x|<1$, $1-x^2>0$, so $b(x)>0$; on $|x|\ge1$, $1-x^2\le0$, so $b(x)=0$.  [given, L1]

1.2 Away from $\pm1$, smoothness follows from [L2]. At $\pm1$, every one-sided derivative from inside is a finite sum of derivatives of $\phi$ at $0$, all zero by [L1], matching the zero function outside.  [L1, L2]

2.1 Thus $b$ is smooth and its nonzero set is $(-1,1)$, whose closure is $[-1,1]$; this is its support.  [step 1.1, step 1.2, L3] ∎
